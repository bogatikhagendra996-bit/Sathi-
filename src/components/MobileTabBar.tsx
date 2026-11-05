import React from 'react';
import { Home, Compass, MessageCircle, User as UserIcon, Sparkles } from 'lucide-react';
import { Screen, Language } from '../types';
import { translations } from '../data/translations';

interface MobileTabBarProps {
  currentScreen: Screen;
  onNavigate: (screen: Screen) => void;
  language: Language;
}

export const MobileTabBar: React.FC<MobileTabBarProps> = ({
  currentScreen,
  onNavigate,
  language
}) => {
  const t = translations[language];

  const tabs: { id: Screen; label: string; icon: React.ReactNode }[] = [
    { id: 'home', label: t.navHome, icon: <Home className="w-5 h-5" /> },
    { id: 'find-friends', label: t.navFindFriends, icon: <Compass className="w-5 h-5" /> },
    { id: 'chat', label: t.navChat, icon: <MessageCircle className="w-5 h-5" /> },
    { id: 'profile', label: t.navProfile, icon: <UserIcon className="w-5 h-5" /> },
    { id: 'welcome', label: t.navWelcome, icon: <Sparkles className="w-5 h-5" /> },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-lg px-2 py-1">
      <div className="grid grid-cols-5 items-center">
        {tabs.map((tab) => {
          const isActive = currentScreen === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onNavigate(tab.id)}
              className={`flex flex-col items-center justify-center min-h-[48px] py-1 transition-colors ${
                isActive ? 'text-blue-600 font-bold' : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              <div className={`${isActive ? 'scale-110' : ''} transition-transform`}>
                {tab.icon}
              </div>
              <span className="text-[10px] tracking-tight mt-0.5 truncate max-w-[60px]">
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
