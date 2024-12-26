import React from 'react';

interface LoginFormProps {
  email: string;
  password: string;
  isLogin: boolean;
  error: string | null;
  onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export const LoginForm = ({
  email,
  password,
  isLogin,
  error,
  onEmailChange,
  onPasswordChange,
  onSubmit,
}: LoginFormProps) => (
  <form onSubmit={onSubmit} className="space-y-4">
    {error && (
      <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm">
        {error}
      </div>
    )}
    <div>
      <label className="block text-sm font-medium text-gray-700">Email</label>
      <input
        type="email"
        value={email}
        onChange={onEmailChange}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        required
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700">Password</label>
      <input
        type="password"
        value={password}
        onChange={onPasswordChange}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        required
      />
    </div>
    <button
      type="submit"
      className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
    >
      {isLogin ? 'Sign In' : 'Sign Up'}
    </button>
  </form>
);