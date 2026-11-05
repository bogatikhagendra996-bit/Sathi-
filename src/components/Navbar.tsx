import React, { useState } from 'react';
import { Globe2, Menu, X, ChevronDown, Check, UserCircle } from 'lucide-react';
import { Screen, Language, User } from '../types';
import { translations } from '../data/translations';
import { MOCK_USERS } from '../data/mockData';

interface NavbarProps {
  currentScreen: Screen;
  onNavigate: (screen: Screen) => void;
  language: Language;
  onToggleLanguage: () => void;
  currentUser: User | null;
  onSelectUser: (user: User) => void;
  onLogout: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentScreen,
  onNavigate,
  language,
  onToggleLanguage,
  currentUser,
  onSelectUser,
  onLogout
}) => {
  const t = translations[language];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [screenDropdownOpen, setScreenDropdownOpen] = useState(false);

  const screens: { id: Screen; label: string }[] = [
    { id: 'welcome', label: t.navWelcome },
    { id: 'home', label: t.navHome },
    { id: 'find-friends', label: t.navFindFriends },
    { id: 'chat', label: t.navChat },
    { id: 'profile', label: t.navProfile },
    { id: 'login', label: t.navLogin },
    { id: 'register', label: t.navRegister },
  ];

  const primaryNavScreens: { id: Screen; label: string }[] = [
    { id: 'home', label: t.navHome },
    { id: 'find-friends', label: t.navFindFriends },
    { id: 'chat', label: t.navChat },
    { id: 'profile', label: t.navProfile },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-blue-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-16">
          {/* Zone 1: Wordmark */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onNavigate('home')}
              className="group flex items-center gap-2.5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg p-1"
            >
              <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-sm group-hover:bg-blue-700 transition-colors">
                <Globe2 className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-xl font-bold tracking-tight text-blue-900">SATHI</span>
                  <span className="text-sm font-semibold text-blue-600">साथी</span>
                </div>
                <span className="text-[10px] text-slate-500 font-medium tracking-wide hidden sm:inline">
                  {t.appTagline}
                </span>
              </div>
            </button>
          </div>

          {/* Zone 2: 4-5 Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
            {primaryNavScreens.map((item) => {
              const isActive = currentScreen === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`transition-colors whitespace-nowrap py-1 relative ${
                    isActive
                      ? 'text-blue-600 font-semibold'
                      : 'text-slate-600 hover:text-blue-600'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full" />
                  )}
                </button>
              );
            })}

            {/* Quick Screen Jump Selector (Educational prototype convenience) */}
            <div className="relative">
              <button
                onClick={() => setScreenDropdownOpen(!screenDropdownOpen)}
                className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-blue-700 px-2.5 py-1.5 rounded-lg border border-slate-200 bg-slate-50 hover:bg-white transition-colors"
                title={t.screenSelector}
              >
                <span>{t.screenSelector}</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              {screenDropdownOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setScreenDropdownOpen(false)}
                  />
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-slate-200 py-1.5 z-50 text-xs">
                    <div className="px-3 py-1 font-semibold text-slate-400 uppercase tracking-wider text-[10px]">
                      7 Sample Screens
                    </div>
                    {screens.map((s) => (
                      <button
                        key={s.id}
                        onClick={() => {
                          onNavigate(s.id);
                          setScreenDropdownOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2 flex items-center justify-between hover:bg-blue-50 transition-colors ${
                          currentScreen === s.id ? 'text-blue-700 font-semibold bg-blue-50/60' : 'text-slate-700'
                        }`}
                      >
                        <span>{s.label}</span>
                        {currentScreen === s.id && <Check className="w-3.5 h-3.5 text-blue-600" />}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </nav>

          {/* Zone 3: Primary Action & Controls */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Language Switcher */}
            <button
              onClick={onToggleLanguage}
              className="flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1.5 rounded-lg border border-blue-200 bg-blue-50/70 text-blue-700 hover:bg-blue-100 transition-colors whitespace-nowrap"
              title="Switch Language / भाषा परिवर्तन गर्नुहोस्"
            >
              <span>{language === 'en' ? '🇳🇵 नेपाली' : '🇬🇧 English'}</span>
            </button>

            {/* User Profile / Quick Switcher */}
            {currentUser ? (
              <div className="relative">
                <button
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className="flex items-center gap-2 p-1.5 rounded-xl hover:bg-slate-100 transition-colors text-left"
                >
                  <img
                    src={currentUser.avatar}
                    alt={currentUser.name}
                    className="w-8 h-8 rounded-full border border-blue-300 bg-blue-50 object-cover"
                  />
                  <span className="hidden lg:inline text-xs font-medium text-slate-700 max-w-[100px] truncate">
                    {currentUser.name}
                  </span>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                </button>

                {userDropdownOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-40"
                      onClick={() => setUserDropdownOpen(false)}
                    />
                    <div className="absolute right-0 mt-2 w-60 bg-white rounded-xl shadow-xl border border-slate-200 py-2 z-50 text-xs">
                      <div className="px-3.5 py-2 border-b border-slate-100">
                        <div className="font-semibold text-slate-800 text-sm">{currentUser.name}</div>
                        <div className="text-slate-500 text-[11px] flex items-center gap-1 mt-0.5">
                          <span>{currentUser.flag}</span>
                          <span>{currentUser.city}, {currentUser.country}</span>
                        </div>
                      </div>

                      <div className="px-3 py-1.5 text-[10px] uppercase font-semibold text-slate-400">
                        {t.switchDemoUser}
                      </div>
                      {MOCK_USERS.slice(0, 3).map((u) => (
                        <button
                          key={u.id}
                          onClick={() => {
                            onSelectUser(u);
                            setUserDropdownOpen(false);
                          }}
                          className={`w-full text-left px-3.5 py-1.5 flex items-center gap-2 hover:bg-blue-50 transition-colors ${
                            currentUser.id === u.id ? 'bg-blue-50/60 text-blue-700 font-medium' : 'text-slate-700'
                          }`}
                        >
                          <img src={u.avatar} alt={u.name} className="w-5 h-5 rounded-full" />
                          <span className="truncate flex-1">{u.name} ({u.countryCode})</span>
                          {currentUser.id === u.id && <Check className="w-3.5 h-3.5 text-blue-600" />}
                        </button>
                      ))}

                      <div className="border-t border-slate-100 my-1 pt-1">
                        <button
                          onClick={() => {
                            onNavigate('profile');
                            setUserDropdownOpen(false);
                          }}
                          className="w-full text-left px-3.5 py-1.5 hover:bg-slate-50 text-slate-700"
                        >
                          {t.navProfile}
                        </button>
                        <button
                          onClick={() => {
                            onLogout();
                            setUserDropdownOpen(false);
                          }}
                          className="w-full text-left px-3.5 py-1.5 hover:bg-rose-50 text-rose-600"
                        >
                          {t.navLogout}
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => onNavigate('login')}
                  className="px-3 py-1.5 text-xs font-medium text-blue-600 hover:text-blue-800 transition-colors"
                >
                  {t.navLogin}
                </button>
                <button
                  onClick={() => onNavigate('register')}
                  className="px-3.5 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition-colors whitespace-nowrap"
                >
                  {t.navRegister}
                </button>
              </div>
            )}

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-600 hover:text-blue-600 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3">
          <div className="grid grid-cols-2 gap-2 text-xs">
            {screens.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`px-3 py-2.5 rounded-lg text-left font-medium transition-colors ${
                  currentScreen === item.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs text-slate-500">{t.switchDemoUser}:</span>
            <div className="flex gap-1.5">
              {MOCK_USERS.slice(0, 3).map((u) => (
                <button
                  key={u.id}
                  onClick={() => {
                    onSelectUser(u);
                    setMobileMenuOpen(false);
                  }}
                  className={`px-2 py-1 text-[11px] rounded border ${
                    currentUser?.id === u.id
                      ? 'border-blue-600 bg-blue-50 text-blue-700 font-semibold'
                      : 'border-slate-200 bg-white text-slate-600'
                  }`}
                >
                  {u.name.split(' ')[0]} {u.flag}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
