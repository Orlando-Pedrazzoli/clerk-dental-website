import { googleTestimonials, GOOGLE_REVIEWS_URL } from '../data/testimonials-data';

interface TestimonialCardProps {
  name: string;
  initials: string;
  rating: number;
  timeAgo: string;
  text: string;
  googleUrl: string;
}

const TestimonialCard = ({ name, initials, rating, timeAgo, text, googleUrl }: TestimonialCardProps) => (
  <div className="p-5 rounded-xl mx-4 shadow-md hover:shadow-xl transition-all duration-300 w-80 shrink-0 bg-white border border-gray-100">
    <div className="flex gap-3 mb-3">
      {/* Iniciais ao invés de foto */}
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
        <span className="text-white font-bold text-base">{initials}</span>
      </div>
      
      <div className="flex flex-col flex-1">
        <div className="flex items-center gap-1.5">
          <p className="font-semibold text-gray-900 text-sm">{name}</p>
          {/* Badge Verificado Google */}
          <svg 
            className="w-4 h-4 flex-shrink-0" 
            viewBox="0 0 16 16" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M8 0L10.5 5.5L16 6.5L12 10.5L13 16L8 13L3 16L4 10.5L0 6.5L5.5 5.5L8 0Z" 
              fill="#4285F4"
            />
          </svg>
        </div>
        
        {/* Estrelas Google */}
        <div className="flex items-center gap-1 mt-1">
          {[...Array(rating)].map((_, i) => (
            <svg 
              key={i}
              className="w-4 h-4 text-yellow-400 fill-current"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </div>
    </div>

    {/* Texto do Review */}
    <p className="text-sm text-gray-700 leading-relaxed mb-3 line-clamp-6">
      {text}
    </p>

    {/* Data e Link para Google - Clicável */}
    <a 
      href={googleUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-between text-xs group hover:bg-blue-50 -mx-5 -mb-5 px-5 py-3 rounded-b-xl transition-colors"
    >
      <span className="text-gray-500 group-hover:text-gray-700">{timeAgo}</span>
      <div className="flex items-center gap-1.5">
        <span className="text-gray-400 group-hover:text-blue-600 transition-colors">Ver no</span>
        <svg className="w-4 h-4 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
        <svg className="w-3 h-3 text-gray-400 group-hover:text-blue-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </div>
    </a>
  </div>
);

export default function TestimonialsSection() {
  return (
    <>
      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }

        .marquee-inner {
          animation: marqueeScroll 35s linear infinite;
        }

        .marquee-reverse {
          animation-direction: reverse;
        }
      `}</style>

      <section id="testemunhos" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          {/* Título da seção */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full mb-4">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span className="text-sm font-semibold text-gray-700">Avaliações Google</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              O Que Dizem os Nossos Pacientes
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Avaliações reais de pacientes satisfeitos
            </p>

            {/* Rating Summary */}
            <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-md">
              <div className="flex items-center gap-1">
                <span className="text-2xl font-bold text-gray-900">5.0</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <div className="h-6 w-px bg-gray-300"></div>
              <span className="text-sm text-gray-600">
                Baseado em <span className="font-semibold text-gray-900">{googleTestimonials.length}+ avaliações</span>
              </span>
            </div>
          </div>

          {/* Primeira linha de marquee */}
          <div className="marquee-row w-full mx-auto max-w-7xl overflow-hidden relative mb-6">
            <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-gray-50 to-transparent"></div>
            <div className="marquee-inner flex transform-gpu min-w-[200%] py-4">
              {[...googleTestimonials.slice(0, 5), ...googleTestimonials.slice(0, 5)].map((review, index) => (
                <TestimonialCard 
                  key={`row1-${index}`}
                  name={review.name}
                  initials={review.initials}
                  rating={review.rating}
                  timeAgo={review.timeAgo}
                  text={review.text}
                  googleUrl={review.googleUrl}
                />
              ))}
            </div>
            <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent"></div>
          </div>

          {/* Segunda linha de marquee (reversa) */}
          <div className="marquee-row w-full mx-auto max-w-7xl overflow-hidden relative">
            <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent"></div>
            <div className="marquee-inner marquee-reverse flex transform-gpu min-w-[200%] py-4">
              {[...googleTestimonials.slice(5), ...googleTestimonials.slice(5)].map((review, index) => (
                <TestimonialCard 
                  key={`row2-${index}`}
                  name={review.name}
                  initials={review.initials}
                  rating={review.rating}
                  timeAgo={review.timeAgo}
                  text={review.text}
                  googleUrl={review.googleUrl}
                />
              ))}
            </div>
            <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent"></div>
          </div>

          {/* CTA para ver todas as avaliações */}
          <div className="text-center mt-12">
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-semibold border-2 border-gray-200 hover:border-blue-500"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Ver Todas as Avaliações no Google
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}