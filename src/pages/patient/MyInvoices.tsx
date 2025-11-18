import { Link } from 'react-router';
import { usePatientData } from '../../hooks/usePatientData';
import PatientUserMenu from '../../components/PatientUserMenu';
import { ArrowLeft, FileText, Calendar, DollarSign, CheckCircle, Clock, AlertCircle, XCircle } from 'lucide-react';
import { formatDate } from '../../utils/formatDate';
import { formatCurrency } from '../../utils/constants';

export default function MyInvoices() {
  const { invoices, isLoading } = usePatientData();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-xl text-gray-600">Carregando suas faturas...</div>
      </div>
    );
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'paid':
        return <CheckCircle className="text-green-600" size={24} />;
      case 'pending':
        return <Clock className="text-yellow-600" size={24} />;
      case 'partial':
        return <AlertCircle className="text-blue-600" size={24} />;
      case 'overdue':
        return <AlertCircle className="text-red-600" size={24} />;
      case 'cancelled':
        return <XCircle className="text-gray-600" size={24} />;
      default:
        return <FileText className="text-gray-600" size={24} />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'paid':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'partial':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'overdue':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'cancelled':
        return 'bg-gray-100 text-gray-800 border-gray-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'paid':
        return 'Pago';
      case 'pending':
        return 'Pendente';
      case 'partial':
        return 'Pagamento Parcial';
      case 'overdue':
        return 'Vencido';
      case 'cancelled':
        return 'Cancelado';
      default:
        return status;
    }
  };

  const totalAmount = invoices.reduce((sum, inv) => sum + inv.amount, 0);
  const totalPaid = invoices.reduce((sum, inv) => sum + inv.paidAmount, 0);
  const totalPending = totalAmount - totalPaid;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="/logo-colombo-nav.png" 
              alt="Centro Dentário Colombo" 
              className="h-10 w-auto"
            />
            <div>
              <h1 className="text-xl font-bold text-gray-900">Minhas Faturas</h1>
              <p className="text-sm text-gray-600">Centro Dentário Colombo</p>
            </div>
          </div>
          <PatientUserMenu />
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Back Button */}
        <Link
          to="/patient/portal"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-6 font-medium"
        >
          <ArrowLeft size={20} />
          Voltar ao Portal
        </Link>

        {/* Page Header */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="flex items-center gap-3 mb-2">
            <FileText className="text-purple-600" size={32} />
            <h2 className="text-2xl font-bold text-gray-900">Minhas Faturas</h2>
          </div>
          <p className="text-gray-600 mb-6">
            Consulte todas as suas faturas e histórico de pagamentos
          </p>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-sm text-blue-600 font-medium mb-1">Total Faturado</p>
              <p className="text-2xl font-bold text-blue-900">{formatCurrency(totalAmount)}</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <p className="text-sm text-green-600 font-medium mb-1">Total Pago</p>
              <p className="text-2xl font-bold text-green-900">{formatCurrency(totalPaid)}</p>
            </div>
            <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
              <p className="text-sm text-orange-600 font-medium mb-1">Pendente</p>
              <p className="text-2xl font-bold text-orange-900">{formatCurrency(totalPending)}</p>
            </div>
          </div>
        </div>

        {/* Invoices List */}
        {invoices.length === 0 ? (
          <div className="bg-white rounded-xl shadow-md p-12 text-center">
            <FileText className="mx-auto text-gray-400 mb-4" size={64} />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Nenhuma fatura registrada
            </h3>
            <p className="text-gray-600">
              Suas faturas e recibos de pagamento aparecerão aqui
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {invoices.map((invoice) => {
              const remainingAmount = invoice.amount - invoice.paidAmount;
              const paymentPercentage = (invoice.paidAmount / invoice.amount) * 100;

              return (
                <div key={invoice._id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start gap-4">
                        {getStatusIcon(invoice.status)}
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 mb-1">
                            Fatura #{invoice.invoiceNumber}
                          </h3>
                          <p className="text-gray-600">{invoice.description}</p>
                        </div>
                      </div>
                      <span className={`px-4 py-2 rounded-lg border-2 font-semibold text-sm ${getStatusColor(invoice.status)}`}>
                        {getStatusLabel(invoice.status)}
                      </span>
                    </div>

                    {/* Invoice Details Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Data de Emissão</p>
                        <p className="font-semibold text-gray-900 flex items-center gap-2">
                          <Calendar size={16} className="text-gray-400" />
                          {formatDate(invoice.issueDate)}
                        </p>
                      </div>

                      {invoice.dueDate && (
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Data de Vencimento</p>
                          <p className="font-semibold text-gray-900 flex items-center gap-2">
                            <Calendar size={16} className="text-gray-400" />
                            {formatDate(invoice.dueDate)}
                          </p>
                        </div>
                      )}

                      <div>
                        <p className="text-sm text-gray-600 mb-1">Valor Total</p>
                        <p className="font-semibold text-gray-900 flex items-center gap-2">
                          <DollarSign size={16} className="text-gray-400" />
                          {formatCurrency(invoice.amount)}
                        </p>
                      </div>

                      <div>
                        <p className="text-sm text-gray-600 mb-1">Valor Pago</p>
                        <p className="font-semibold text-green-600 flex items-center gap-2">
                          <CheckCircle size={16} />
                          {formatCurrency(invoice.paidAmount)}
                        </p>
                      </div>
                    </div>

                    {/* Payment Progress Bar */}
                    {invoice.status !== 'cancelled' && (
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-gray-700">
                            Progresso do Pagamento
                          </span>
                          <span className="text-sm font-semibold text-gray-900">
                            {paymentPercentage.toFixed(0)}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                          <div 
                            className={`h-full rounded-full transition-all ${
                              invoice.status === 'paid' ? 'bg-green-500' : 
                              invoice.status === 'partial' ? 'bg-blue-500' : 
                              'bg-yellow-500'
                            }`}
                            style={{ width: `${paymentPercentage}%` }}
                          />
                        </div>
                        {remainingAmount > 0 && (
                          <p className="text-sm text-gray-600 mt-2">
                            Restante: <span className="font-semibold text-orange-600">
                              {formatCurrency(remainingAmount)}
                            </span>
                          </p>
                        )}
                      </div>
                    )}

                    {/* Payment Info */}
                    {invoice.paymentDate && (
                      <div className="flex items-center gap-4 p-3 bg-green-50 rounded-lg border border-green-200">
                        <CheckCircle className="text-green-600" size={20} />
                        <div>
                          <p className="text-sm font-semibold text-green-900">
                            Pagamento realizado em {formatDate(invoice.paymentDate)}
                          </p>
                          {invoice.paymentMethod && (
                            <p className="text-sm text-green-700">
                              Método: {invoice.paymentMethod}
                            </p>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Receipt Image */}
                    {invoice.receiptImageUrl && (
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <p className="text-sm font-semibold text-gray-700 mb-2">Comprovante de Pagamento:</p>
                        <div 
                          className="inline-block cursor-pointer group"
                          onClick={() => window.open(invoice.receiptImageUrl, '_blank')}
                        >
                          <img
                            src={invoice.receiptImageUrl}
                            alt={`Recibo ${invoice.invoiceNumber}`}
                            className="max-w-xs rounded-lg border-2 border-gray-200 hover:border-purple-500 transition"
                          />
                          <p className="text-sm text-purple-600 mt-2 group-hover:underline">
                            Clique para ampliar
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Notes */}
                    {invoice.notes && (
                      <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                        <p className="text-sm font-semibold text-gray-700 mb-1">Observações:</p>
                        <p className="text-sm text-gray-600">{invoice.notes}</p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}