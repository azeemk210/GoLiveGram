import React from 'react';
import { LogIn, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-red-50 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
        <div className="flex flex-col items-center mb-8">
          <Link to="/" className="self-start mb-6 text-gray-400 hover:text-red-500 transition-colors flex items-center space-x-1">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
          <div className="bg-red-50 p-4 rounded-full mb-4">
            <LogIn className="w-8 h-8 text-red-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Demo Login</h1>
          <p className="text-gray-500 text-center">
            This is a placeholder login page for GoLiveGram. 
            No actual authentication is implemented yet.
          </p>
        </div>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <input 
              type="email" 
              placeholder="demo@golivegram.com"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-red-500 focus:outline-none transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input 
              type="password" 
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-red-500 focus:outline-none transition-all"
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input type="checkbox" className="rounded text-red-600 focus:ring-red-500" />
              <span className="text-sm text-gray-600">Remember me</span>
            </label>
            <a href="#" className="text-sm text-red-600 hover:underline">Forgot password?</a>
          </div>
          <button 
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg shadow-lg shadow-red-200 transition-all transform hover:scale-[1.02]"
          >
            Sign In (Demo)
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-gray-100 text-center">
          <p className="text-gray-600">
            Don't have an account? {' '}
            <a href="#" className="text-red-600 font-semibold hover:underline">Sign up</a>
          </p>
        </div>
      </div>
      
      <p className="mt-8 text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} GoLiveGram. All rights reserved.
      </p>
    </div>
  );
};

export default Login;
