import { Link } from 'react-router';
import { usePatientData } from '../../hooks/usePatientData';
import { UserButton } from '@clerk/clerk-react';
import { ArrowLeft, Microscope, Calendar, User, Image as ImageIcon, ExternalLink } from 'lucide-react';
import { formatDate } from '../../utils/formatDate';

export default function MyExams() {
  const { exams, isLoading } = usePatientData();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-xl text-gray-600">Carregando seus exames...</div>
      </div>
    );
  }

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
              <h1 className="text-xl font-bold text-gray-900">Meus Exames</h1>
              <p className="text-sm text-gray-600">Centro Dentário Colombo</p>
            </div>
          </div>
          <UserButton />
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
            <Microscope className="text-green-600" size={32} />
            <h2 className="text-2xl font-bold text-gray-900">Meus Exames Dentários</h2>
          </div>
          <p className="text-gray-600">
            Visualize todos os seus exames e imagens dentárias
          </p>
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-green-50 rounded-lg">
            <Microscope className="text-green-600" size={20} />
            <span className="text-green-800 font-semibold">
              {exams.length} exame{exams.length !== 1 ? 's' : ''} registrado{exams.length !== 1 ? 's' : ''}
            </span>
          </div>
        </div>

        {/* Exams List */}
        {exams.length === 0 ? (
          <div className="bg-white rounded-xl shadow-md p-12 text-center">
            <Microscope className="mx-auto text-gray-400 mb-4" size={64} />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Nenhum exame registrado
            </h3>
            <p className="text-gray-600">
              Seus exames dentários aparecerão aqui quando forem adicionados pela clínica
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {exams.map((exam) => {
              const doctorName = typeof exam.doctorId === 'object' 
                ? exam.doctorId.name 
                : 'Médico';

              return (
                <div key={exam._id} className="bg-white rounded-xl shadow-md overflow-hidden">
                  {/* Exam Header */}
                  <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 text-white">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{exam.examType}</h3>
                        {exam.description && (
                          <p className="text-green-100">{exam.description}</p>
                        )}
                      </div>
                      <div className="bg-white bg-opacity-20 px-4 py-2 rounded-lg">
                        <Calendar className="inline mr-2" size={16} />
                        {formatDate(exam.examDate)}
                      </div>
                    </div>
                  </div>

                  {/* Exam Details */}
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center gap-3">
                        <User className="text-gray-400" size={20} />
                        <div>
                          <p className="text-sm text-gray-600">Médico Responsável</p>
                          <p className="font-semibold text-gray-900">{doctorName}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <ImageIcon className="text-gray-400" size={20} />
                        <div>
                          <p className="text-sm text-gray-600">Imagens</p>
                          <p className="font-semibold text-gray-900">
                            {exam.imageUrls.length} imagem{exam.imageUrls.length !== 1 ? 'ns' : ''}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Notes */}
                    {exam.notes && (
                      <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                        <p className="text-sm font-semibold text-gray-700 mb-1">Observações:</p>
                        <p className="text-gray-600">{exam.notes}</p>
                      </div>
                    )}

                    {/* Images Gallery */}
                    {exam.imageUrls.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">
                          Imagens do Exame:
                        </h4>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                          {exam.imageUrls.map((url, index) => (
                            <div
                              key={index}
                              className="group relative aspect-square rounded-lg overflow-hidden border-2 border-gray-200 hover:border-green-500 transition cursor-pointer"
                              onClick={() => window.open(url, '_blank')}
                            >
                              <img
                                src={url}
                                alt={`Exame ${exam.examType} - Imagem ${index + 1}`}
                                className="w-full h-full object-cover group-hover:scale-110 transition"
                              />
                              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition flex items-center justify-center">
                                <ExternalLink className="text-white opacity-0 group-hover:opacity-100 transition" size={32} />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {exam.imageUrls.length === 0 && (
                      <div className="text-center py-8 border-2 border-dashed border-gray-300 rounded-lg">
                        <ImageIcon className="mx-auto text-gray-400 mb-2" size={40} />
                        <p className="text-gray-500">Nenhuma imagem disponível para este exame</p>
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