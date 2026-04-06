import React from 'react';
import { LogIn, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';

const Login: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 pt-32">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border border-black">
          <div className="flex flex-col items-center mb-8">
            <button onClick={() => navigate('/')} className="self-start mb-6 text-black hover:text-red-600 opacity-70 hover:opacity-100 transition-all duration-300 flex items-center space-x-1 bg-none border-none cursor-pointer">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </button>
            <div className="bg-white border-2 border-black p-4 rounded-full mb-4">
              <LogIn className="w-8 h-8" style={{ color: '#ee3a3a' }} />
            </div>
            <h1 className="text-3xl font-bold text-black mb-2">Demo Login</h1>
            <p className="text-black opacity-70 text-center">
              This is a placeholder login page for GoLiveGram. 
              No actual authentication is implemented yet.
            </p>
          </div>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-sm font-medium text-black mb-2">Email Address</label>
            <input 
              type="email" 
              placeholder="demo@golivegram.com"
              className="w-full px-4 py-3 rounded-lg border border-black focus:ring-2 focus:outline-none transition-all" style={{ outlineColor: '#ee3a3a' }}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-black mb-2">Password</label>
            <input 
              type="password" 
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-lg border border-black focus:ring-2 focus:outline-none transition-all" style={{ outlineColor: '#ee3a3a' }}
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input type="checkbox" className="rounded text-black" />
              <span className="text-sm text-black">Remember me</span>
            </label>
            <a href="#" className="text-sm text-black font-semibold hover:underline">Forgot password?</a>
          </div>
          <button 
            type="submit"
            className="w-full bg-black hover:bg-white text-white hover:text-black font-bold py-3 rounded-lg border border-black transition-all duration-300"
          >
            Sign In (Demo)
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-black text-center">
          <p className="text-black">
            Don't have an account? {' '}
            <a href="#" className="text-black font-semibold hover:underline">Sign up</a>
          </p>
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
