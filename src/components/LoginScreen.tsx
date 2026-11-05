import React, { useState } from 'react';
import { Mail, Lock, ArrowRight, UserCircle2, CheckCircle2 } from 'lucide-react';
import { Language, Screen, User } from '../types';
import { translations } from '../data/translations';
import { MOCK_USERS } from '../data/mockData';

interface LoginScreenProps {
  language: Language;
  onNavigate: (screen: Screen) => void;
  onLogin: (user: User) => void;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({
  language,
  onNavigate,
  onLogin
}) => {
  const t = translations[language];
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError(language === 'ne' ? 'कृपया इमेल ठेगाना प्रविष्ट गर्नुहोस्।' : 'Please enter your email.');
      return;
    }
    // Find matching mock user or fallback to Aarav
    const matched = MOCK_USERS.find(u => u.email.toLowerCase() === email.toLowerCase()) || MOCK_USERS[0];
    onLogin(matched);
  };

  const handleQuickLogin = (user: User) => {
    onLogin(user);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center mb-6">
        <div className="inline-flex w-12 h-12 rounded-2xl bg-blue-600 text-white items-center justify-center shadow-md mb-3">
          <UserCircle2 className="w-7 h-7" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          {t.loginTitle}
        </h2>
        <p className="mt-2 text-sm text-slate-600">
          {t.loginSubtitle}
        </p>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-6 shadow-sm border border-slate-200 rounded-3xl sm:px-10">
          {/* Quick 1-Click Demo Logins */}
          <div className="mb-6 pb-6 border-b border-slate-100">
            <div className="text-xs font-semibold text-blue-900 uppercase tracking-wider mb-2.5 flex items-center justify-between">
              <span>{t.quickDemoLoginTitle}</span>
              <span className="text-[11px] font-normal text-blue-600">
                {language === 'ne' ? '१-क्लिकमा परीक्षण गर्नुहोस्' : 'Instant Test'}
              </span>
            </div>
            <div className="grid grid-cols-1 gap-2">
              {MOCK_USERS.slice(0, 3).map((demoUser) => (
                <button
                  key={demoUser.id}
                  type="button"
                  onClick={() => handleQuickLogin(demoUser)}
                  className="w-full flex items-center justify-between p-2.5 rounded-xl border border-blue-100 bg-blue-50/50 hover:bg-blue-100/70 hover:border-blue-300 transition-all text-left group"
                >
                  <div className="flex items-center gap-2.5">
                    <img
                      src={demoUser.avatar}
                      alt={demoUser.name}
                      className="w-8 h-8 rounded-full border border-blue-200 bg-white"
                    />
                    <div>
                      <div className="text-xs font-bold text-slate-900 flex items-center gap-1">
                        <span>{demoUser.name}</span>
                        <span className="text-[10px] text-slate-500 font-normal">({demoUser.flag} {demoUser.city.split(' ')[0]})</span>
                      </div>
                      <div className="text-[11px] text-slate-500 truncate max-w-[200px]">
                        {demoUser.email}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-medium text-blue-600 group-hover:text-blue-800 transition-colors">
                    {language === 'ne' ? 'छान्नुहोस् →' : 'Select →'}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {error && (
              <div className="p-3 text-xs text-rose-700 bg-rose-50 border border-rose-200 rounded-xl">
                {error}
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                {t.emailLabel}
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <Mail className="h-4 w-4" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError('');
                  }}
                  placeholder="aarav.sharma@example.com"
                  className="block w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 bg-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                {t.passwordLabel}
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <Lock className="h-4 w-4" />
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="block w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 bg-white"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex justify-center items-center gap-2 py-2.5 px-4 border border-transparent rounded-xl shadow-xs text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors active:scale-[0.99]"
            >
              <span>{t.loginButton}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="mt-6 text-center text-xs text-slate-600">
            <span>{t.noAccountPrompt} </span>
            <button
              type="button"
              onClick={() => onNavigate('register')}
              className="font-bold text-blue-600 hover:text-blue-800 transition-colors"
            >
              {t.registerNow}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
