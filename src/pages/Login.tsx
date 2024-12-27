import React, { useState } from 'react';
import { Car } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { LoginForm } from '../components/auth/LoginForm';
import { useAuthRedirect } from '../hooks/useAuthRedirect';
import { signIn, signUp } from '../services/auth';
import { isAdminEmail } from '../services/adminAuth';

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuth();

  useAuthRedirect(user, isAdminEmail(email) ? '/admin' : '/dashboard');

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);
    
    try {
      const { error: authError } = isLogin 
        ? await signIn(email, password)
        : await signUp(email, password);

      if (authError) {
        setError(authError);
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <div className="flex items-center justify-center mb-8">
          <Car className="w-12 h-12 text-blue-600" />
        </div>
        <h2 className="text-2xl font-bold text-center mb-6">
          {isLogin ? 'Welcome Back' : 'Create Account'}
        </h2>
        <LoginForm
          email={email}
          password={password}
          isLogin={isLogin}
          error={error}
          isLoading={isLoading}
          onEmailChange={(e) => setEmail(e.target.value)}
          onPasswordChange={(e) => setPassword(e.target.value)}
          onSubmit={handleAuth}
        />
        {!isAdminEmail(email) && (
          <p className="mt-4 text-center text-sm text-gray-600">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button
              onClick={() => {
                setIsLogin(!isLogin);
                setError(null);
              }}
              className="text-blue-600 hover:text-blue-800"
              disabled={isLoading}
            >
              {isLogin ? 'Sign Up' : 'Sign In'}
            </button>
          </p>
        )}
      </div>
    </div>
  );
}