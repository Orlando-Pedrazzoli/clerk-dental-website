import { Helmet } from 'react-helmet-async';
import { SignIn } from '@clerk/react-router';

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center p-4">
      {/* SEO - No Index */}
      <Helmet>
        <title>Login | Centro Dentário Colombo</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="googlebot" content="noindex, nofollow" />
      </Helmet>

      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Centro Dentário Colombo
          </h1>
          <p className="text-gray-600">Área do Cliente</p>
        </div>
        <SignIn />
      </div>
    </div>
  );
}