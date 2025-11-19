import { FileDown, FileText, Table } from 'lucide-react';
import { useState } from 'react';

interface ExportButtonProps {
  data: any[];
  filename: string;
  headers?: { key: string; label: string }[];
  format?: 'excel' | 'pdf' | 'csv';
  className?: string;
}

export default function ExportButton({ 
  data, 
  filename, 
  headers,
  format = 'excel',
  className = ''
}: ExportButtonProps) {
  const [isExporting, setIsExporting] = useState(false);

  const exportToCSV = () => {
    if (!data || data.length === 0) {
      alert('Não há dados para exportar');
      return;
    }

    setIsExporting(true);

    // Prepare headers
    const csvHeaders = headers 
      ? headers.map(h => h.label) 
      : Object.keys(data[0]);

    // Prepare rows
    const csvRows = data.map(row => {
      if (headers) {
        return headers.map(h => {
          const value = row[h.key];
          // Handle nested objects
          if (typeof value === 'object' && value !== null) {
            return JSON.stringify(value);
          }
          // Escape quotes and commas
          return typeof value === 'string' && value.includes(',') 
            ? `"${value.replace(/"/g, '""')}"` 
            : value;
        });
      } else {
        return Object.values(row).map(value => {
          if (typeof value === 'object' && value !== null) {
            return JSON.stringify(value);
          }
          return typeof value === 'string' && value.includes(',') 
            ? `"${value.replace(/"/g, '""')}"` 
            : value;
        });
      }
    });

    // Create CSV content
    const csvContent = [
      csvHeaders.join(','),
      ...csvRows.map(row => row.join(','))
    ].join('\n');

    // Create blob and download
    const blob = new Blob(['\ufeff' + csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    
    link.setAttribute('href', url);
    link.setAttribute('download', `${filename}.csv`);
    link.style.visibility = 'hidden';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    setIsExporting(false);
  };

  const exportToExcel = async () => {
    if (!data || data.length === 0) {
      alert('Não há dados para exportar');
      return;
    }

    setIsExporting(true);

    try {
      // Dynamic import of XLSX library
      const XLSX = await import('xlsx');
      
      // Prepare data for Excel
      const worksheetData = headers 
        ? data.map(row => {
            const excelRow: any = {};
            headers.forEach(h => {
              const value = row[h.key];
              excelRow[h.label] = typeof value === 'object' && value !== null 
                ? JSON.stringify(value) 
                : value;
            });
            return excelRow;
          })
        : data;

      // Create workbook and worksheet
      const worksheet = XLSX.utils.json_to_sheet(worksheetData);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Dados');

      // Style the header row
      const range = XLSX.utils.decode_range(worksheet['!ref'] || '');
      for (let C = range.s.c; C <= range.e.c; ++C) {
        const address = XLSX.utils.encode_col(C) + '1';
        if (!worksheet[address]) continue;
        worksheet[address].s = {
          font: { bold: true },
          fill: { fgColor: { rgb: 'EEEEEE' } }
        };
      }

      // Auto-size columns
      const colWidths = headers 
        ? headers.map(h => ({ wch: Math.max(h.label.length, 15) }))
        : Object.keys(data[0]).map(() => ({ wch: 15 }));
      worksheet['!cols'] = colWidths;

      // Save file
      XLSX.writeFile(workbook, `${filename}.xlsx`);
    } catch (error) {
      console.error('Erro ao exportar para Excel:', error);
      alert('Erro ao exportar para Excel. Tentando exportar como CSV...');
      exportToCSV();
    }

    setIsExporting(false);
  };

  const exportToPDF = () => {
    if (!data || data.length === 0) {
      alert('Não há dados para exportar');
      return;
    }

    setIsExporting(true);

    // Create print-friendly HTML
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      alert('Por favor, permita pop-ups para exportar PDF');
      setIsExporting(false);
      return;
    }

    const tableHeaders = headers 
      ? headers.map(h => `<th style="padding: 8px; border: 1px solid #ddd; background: #f5f5f5;">${h.label}</th>`).join('')
      : Object.keys(data[0]).map(key => `<th style="padding: 8px; border: 1px solid #ddd; background: #f5f5f5;">${key}</th>`).join('');

    const tableRows = data.map(row => {
      const cells = headers 
        ? headers.map(h => {
            const value = row[h.key];
            const displayValue = typeof value === 'object' && value !== null 
              ? JSON.stringify(value) 
              : value || '';
            return `<td style="padding: 8px; border: 1px solid #ddd;">${displayValue}</td>`;
          }).join('')
        : Object.values(row).map(value => {
            const displayValue = typeof value === 'object' && value !== null 
              ? JSON.stringify(value) 
              : value || '';
            return `<td style="padding: 8px; border: 1px solid #ddd;">${displayValue}</td>`;
          }).join('');
      
      return `<tr>${cells}</tr>`;
    }).join('');

    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>${filename}</title>
        <style>
          @page { size: A4 landscape; margin: 20mm; }
          body { font-family: Arial, sans-serif; }
          h1 { color: #333; }
          table { width: 100%; border-collapse: collapse; margin-top: 20px; }
          @media print {
            .no-print { display: none; }
          }
        </style>
      </head>
      <body>
        <h1>${filename}</h1>
        <p>Data de exportação: ${new Date().toLocaleDateString('pt-PT')}</p>
        <table>
          <thead><tr>${tableHeaders}</tr></thead>
          <tbody>${tableRows}</tbody>
        </table>
        <button class="no-print" onclick="window.print()" style="margin-top: 20px; padding: 10px 20px; background: #3b82f6; color: white; border: none; border-radius: 5px; cursor: pointer;">
          Imprimir / Salvar como PDF
        </button>
      </body>
      </html>
    `;

    printWindow.document.write(html);
    printWindow.document.close();
    
    setIsExporting(false);
  };

  const handleExport = () => {
    switch (format) {
      case 'excel':
        exportToExcel();
        break;
      case 'pdf':
        exportToPDF();
        break;
      case 'csv':
        exportToCSV();
        break;
      default:
        exportToExcel();
    }
  };

  const getIcon = () => {
    switch (format) {
      case 'excel':
        return <Table size={20} />;
      case 'pdf':
        return <FileText size={20} />;
      case 'csv':
        return <FileDown size={20} />;
      default:
        return <FileDown size={20} />;
    }
  };

  const getLabel = () => {
    switch (format) {
      case 'excel':
        return 'Exportar Excel';
      case 'pdf':
        return 'Exportar PDF';
      case 'csv':
        return 'Exportar CSV';
      default:
        return 'Exportar';
    }
  };

  return (
    <button
      onClick={handleExport}
      disabled={isExporting}
      className={`flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition disabled:opacity-50 ${className}`}
    >
      {getIcon()}
      {isExporting ? 'Exportando...' : getLabel()}
    </button>
  );
}