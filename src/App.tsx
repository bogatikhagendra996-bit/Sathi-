/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Screen, Language, User } from './types';
import { MOCK_USERS } from './data/mockData';
import { translations } from './data/translations';
import { Navbar } from './components/Navbar';
import { DisclaimerBanner } from './components/DisclaimerBanner';
import { WelcomeScreen } from './components/WelcomeScreen';
import { LoginScreen } from './components/LoginScreen';
import { RegisterScreen } from './components/RegisterScreen';
import { HomeScreen } from './components/HomeScreen';
import { FindFriendsScreen } from './components/FindFriendsScreen';
import { ProfileScreen } from './components/ProfileScreen';
import { ChatDemoScreen } from './components/ChatDemoScreen';
import { MobileTabBar } from './components/MobileTabBar';
import { CheckCircle2 } from 'lucide-react';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('welcome');
  const [language, setLanguage] = useState<Language>('en');
  const [currentUser, setCurrentUser] = useState<User | null>(MOCK_USERS[0]);
  const [viewingUser, setViewingUser] = useState<User>(MOCK_USERS[0]);
  const [connectedUserIds, setConnectedUserIds] = useState<string[]>(['user-maya', 'user-sophia']);
  const [activeChatFriendId, setActiveChatFriendId] = useState<string>('user-maya');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const t = translations[language];

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  const handleToggleLanguage = () => {
    const nextLang = language === 'en' ? 'ne' : 'en';
    setLanguage(nextLang);
    showToast(nextLang === 'ne' ? 'नेपाली भाषा सक्रिय गरियो 🇳🇵' : 'English language enabled 🇬🇧');
  };

  const handleWave = (friendName: string) => {
    showToast(
      language === 'ne'
        ? `तपाईंले ${friendName} लाई हात हल्लाउनुभयो! 👋`
        : `You waved to ${friendName}! 👋`
    );
  };

  const handleConnectUser = (userId: string) => {
    if (!connectedUserIds.includes(userId)) {
      setConnectedUserIds(prev => [...prev, userId]);
      showToast(
        language === 'ne'
          ? 'साथी अनुरोध सफलतापूर्वक पठाइयो! 🤝'
          : 'Sathi request sent successfully! 🤝'
      );
    }
  };

  const handleOpenChatWith = (friend: User) => {
    setActiveChatFriendId(friend.id);
    setCurrentScreen('chat');
  };

  const handleLogin = (user: User) => {
    setCurrentUser(user);
    setViewingUser(user);
    setCurrentScreen('home');
    showToast(
      language === 'ne'
        ? `नमस्ते ${user.name}! साथीमा स्वागत छ।`
        : `Welcome back, ${user.name}!`
    );
  };

  const handleRegister = (newUser: User) => {
    setCurrentUser(newUser);
    setViewingUser(newUser);
    setCurrentScreen('home');
    showToast(
      language === 'ne'
        ? `बधाई छ ${newUser.name}! तपाईंको नयाँ साथी खाता तयार भयो।`
        : `Congratulations ${newUser.name}! Your Sathi profile is ready.`
    );
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setCurrentScreen('welcome');
    showToast(language === 'ne' ? 'साइन आउट हुनुभयो।' : 'Signed out successfully.');
  };

  const handleSelectUser = (user: User) => {
    setViewingUser(user);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      {/* Educational Prototype Disclaimer */}
      <DisclaimerBanner language={language} />

      {/* Top Navigation Bar */}
      <Navbar
        currentScreen={currentScreen}
        onNavigate={(screen) => {
          if (screen === 'profile' && currentUser) {
            setViewingUser(currentUser);
          }
          setCurrentScreen(screen);
        }}
        language={language}
        onToggleLanguage={handleToggleLanguage}
        currentUser={currentUser}
        onSelectUser={(user) => {
          setCurrentUser(user);
          setViewingUser(user);
          showToast(
            language === 'ne'
              ? `${user.name} को खाता सक्रिय गरियो।`
              : `Switched to ${user.name}'s account.`
          );
        }}
        onLogout={handleLogout}
      />

      {/* Floating Global Feedback Toast */}
      {toastMessage && (
        <div className="fixed top-20 right-4 sm:right-8 z-50 bg-blue-900 text-white px-4 py-2.5 rounded-2xl shadow-xl border border-blue-700 text-xs sm:text-sm font-semibold flex items-center gap-2 animate-bounce">
          <CheckCircle2 className="w-4 h-4 text-sky-300 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Active Screen Router */}
      <main className="flex-1 pb-16 md:pb-0">
        {currentScreen === 'welcome' && (
          <WelcomeScreen
            language={language}
            onNavigate={setCurrentScreen}
            onSelectUser={(u) => {
              setViewingUser(u);
              setCurrentUser(u);
            }}
            onWave={handleWave}
          />
        )}

        {currentScreen === 'login' && (
          <LoginScreen
            language={language}
            onNavigate={setCurrentScreen}
            onLogin={handleLogin}
          />
        )}

        {currentScreen === 'register' && (
          <RegisterScreen
            language={language}
            onNavigate={setCurrentScreen}
            onRegister={handleRegister}
          />
        )}

        {currentScreen === 'home' && (
          <HomeScreen
            language={language}
            currentUser={currentUser || MOCK_USERS[0]}
            onNavigate={setCurrentScreen}
            onSelectUser={(u) => {
              setViewingUser(u);
              setCurrentScreen('profile');
            }}
            onWave={handleWave}
            connectedUserIds={connectedUserIds}
            onConnectUser={handleConnectUser}
          />
        )}

        {currentScreen === 'find-friends' && (
          <FindFriendsScreen
            language={language}
            currentUser={currentUser || MOCK_USERS[0]}
            onNavigate={setCurrentScreen}
            onSelectUser={(u) => {
              setViewingUser(u);
              setCurrentScreen('profile');
            }}
            onWave={handleWave}
            connectedUserIds={connectedUserIds}
            onConnectUser={handleConnectUser}
            onOpenChatWith={handleOpenChatWith}
          />
        )}

        {currentScreen === 'profile' && (
          <ProfileScreen
            language={language}
            currentUser={currentUser || MOCK_USERS[0]}
            viewingUser={viewingUser}
            onNavigate={setCurrentScreen}
            onSelectUser={setViewingUser}
            onWave={handleWave}
            connectedUserIds={connectedUserIds}
            onConnectUser={handleConnectUser}
            onOpenChatWith={handleOpenChatWith}
            onUpdateCurrentUser={(updated) => {
              setCurrentUser(updated);
              setViewingUser(updated);
              showToast(language === 'ne' ? 'प्रोफाइल अद्यावधिक गरियो!' : 'Profile updated!');
            }}
          />
        )}

        {currentScreen === 'chat' && (
          <ChatDemoScreen
            language={language}
            currentUser={currentUser || MOCK_USERS[0]}
            onNavigate={setCurrentScreen}
            activeFriendId={activeChatFriendId}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-6 px-4 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-bold text-blue-900">SATHI साथी</span>
            <span>·</span>
            <span>{t.appTagline}</span>
          </div>
          <div>
            <span>{language === 'ne' ? 'शैक्षिक प्रोटोटाइप • नमुना प्रोफाइलहरू' : 'Educational Prototype • Fictional Profiles Only'}</span>
          </div>
        </div>
      </footer>

      {/* Mobile Tab Bar */}
      <MobileTabBar
        currentScreen={currentScreen}
        onNavigate={(screen) => {
          if (screen === 'profile' && currentUser) {
            setViewingUser(currentUser);
          }
          setCurrentScreen(screen);
        }}
        language={language}
      />
    </div>
  );
}
