import React, { useState } from 'react';
import { UserPlus, ArrowRight, Check, Sparkles } from 'lucide-react';
import { Language, Screen, User } from '../types';
import { translations } from '../data/translations';

interface RegisterScreenProps {
  language: Language;
  onNavigate: (screen: Screen) => void;
  onRegister: (newUser: User) => void;
}

const AVAILABLE_INTERESTS = [
  'Himalayan Trekking',
  'Nepali Momos & Cooking',
  'Language Exchange',
  'Tech & Web Dev',
  'Sarangi & Folk Music',
  'Photography',
  'Yoga & Meditation',
  'Travel & Backpacking',
  'Heritage & Architecture',
  'Tea & Coffee Culture'
];

const AVAILABLE_LANGUAGES = [
  'Nepali',
  'English',
  'Japanese',
  'German',
  'Spanish',
  'French',
  'Mandarin',
  'Hindi'
];

const AVATAR_OPTIONS = [
  'https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav&backgroundColor=dbeafe',
  'https://api.dicebear.com/7.x/avataaars/svg?seed=Maya&backgroundColor=e0f2fe',
  'https://api.dicebear.com/7.x/avataaars/svg?seed=Sophia&backgroundColor=fef3c7',
  'https://api.dicebear.com/7.x/avataaars/svg?seed=Kenji&backgroundColor=dcfce7',
  'https://api.dicebear.com/7.x/avataaars/svg?seed=Elena&backgroundColor=fce7f3'
];

export const RegisterScreen: React.FC<RegisterScreenProps> = ({
  language,
  onNavigate,
  onRegister
}) => {
  const t = translations[language];

  const [name, setName] = useState('Pema Tamang');
  const [username, setUsername] = useState('pema_ktm');
  const [email, setEmail] = useState('pema.tamang@example.com');
  const [country, setCountry] = useState('Nepal');
  const [city, setCity] = useState('Kathmandu');
  const [flag, setFlag] = useState('🇳🇵');
  const [nativeLanguage, setNativeLanguage] = useState('Nepali');
  const [selectedLearningLangs, setSelectedLearningLangs] = useState<string[]>(['English', 'Japanese']);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([
    'Himalayan Trekking',
    'Language Exchange',
    'Tea & Coffee Culture'
  ]);
  const [bio, setBio] = useState('Travel enthusiast and student in Kathmandu looking forward to exchanging languages and cultural stories!');
  const [selectedAvatar, setSelectedAvatar] = useState(AVATAR_OPTIONS[0]);

  const toggleInterest = (interest: string) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter(i => i !== interest));
    } else {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };

  const toggleLearningLang = (lang: string) => {
    if (selectedLearningLangs.includes(lang)) {
      setSelectedLearningLangs(selectedLearningLangs.filter(l => l !== lang));
    } else {
      setSelectedLearningLangs([...selectedLearningLangs, lang]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newUser: User = {
      id: `user-${Date.now()}`,
      name: name.trim() || 'New Sathi',
      username: username.trim() || 'sathi_user',
      email: email.trim() || 'user@example.com',
      avatar: selectedAvatar,
      country,
      city,
      countryCode: country === 'Nepal' ? 'NP' : 'GLOBAL',
      flag,
      nativeLanguage,
      spokenLanguages: [nativeLanguage, ...selectedLearningLangs.slice(0, 1)],
      learningLanguages: selectedLearningLangs,
      interests: selectedInterests,
      bio,
      bioNe: bio,
      culturalStory: 'Excited to be part of SATHI to connect with friends worldwide.',
      memberSince: 'Just now',
      verified: true,
      isOnline: true,
      stats: {
        friendsCount: 1,
        culturalExchanges: 0,
        countriesConnected: 1
      }
    };
    onRegister(newUser);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-2xl text-center mb-6">
        <div className="inline-flex w-12 h-12 rounded-2xl bg-blue-600 text-white items-center justify-center shadow-md mb-3">
          <UserPlus className="w-7 h-7" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          {t.registerTitle}
        </h2>
        <p className="mt-2 text-sm text-slate-600">
          {t.registerSubtitle}
        </p>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-2xl">
        <div className="bg-white py-8 px-6 shadow-sm border border-slate-200 rounded-3xl sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Avatar Picker */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-2">
                {t.avatarLabel}
              </label>
              <div className="flex items-center gap-3 overflow-x-auto pb-2">
                {AVATAR_OPTIONS.map((avatarUrl, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedAvatar(avatarUrl)}
                    className={`relative p-1 rounded-full transition-transform ${
                      selectedAvatar === avatarUrl
                        ? 'ring-3 ring-blue-600 scale-105'
                        : 'opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={avatarUrl} alt="avatar option" className="w-12 h-12 rounded-full border border-slate-200" />
                    {selectedAvatar === avatarUrl && (
                      <div className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px]">
                        ✓
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Name & Username */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {t.fullNameLabel}
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="block w-full px-3 py-2 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {t.usernameLabel}
                </label>
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="block w-full px-3 py-2 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                />
              </div>
            </div>

            {/* Email & Location */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {t.emailLabel}
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full px-3 py-2 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {t.countryLabel}
                </label>
                <select
                  value={country}
                  onChange={(e) => {
                    const c = e.target.value;
                    setCountry(c);
                    if (c === 'Nepal') {
                      setFlag('🇳🇵');
                      setCity('Kathmandu');
                    } else if (c === 'Australia') {
                      setFlag('🇦🇺');
                      setCity('Sydney');
                    } else if (c === 'Canada') {
                      setFlag('🇨🇦');
                      setCity('Vancouver');
                    } else if (c === 'Japan') {
                      setFlag('🇯🇵');
                      setCity('Tokyo');
                    } else if (c === 'Germany') {
                      setFlag('🇩🇪');
                      setCity('Munich');
                    } else {
                      setFlag('🇺🇸');
                      setCity('New York');
                    }
                  }}
                  className="block w-full px-3 py-2 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 bg-white"
                >
                  <option value="Nepal">Nepal 🇳🇵</option>
                  <option value="Australia">Australia 🇦🇺</option>
                  <option value="Canada">Canada 🇨🇦</option>
                  <option value="Japan">Japan 🇯🇵</option>
                  <option value="Germany">Germany 🇩🇪</option>
                  <option value="United States">United States 🇺🇸</option>
                  <option value="United Kingdom">United Kingdom 🇬🇧</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {t.cityLabel}
                </label>
                <input
                  type="text"
                  required
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="block w-full px-3 py-2 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                />
              </div>
            </div>

            {/* Languages */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {t.nativeLangLabel}
                </label>
                <select
                  value={nativeLanguage}
                  onChange={(e) => setNativeLanguage(e.target.value)}
                  className="block w-full px-3 py-2 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 bg-white"
                >
                  {AVAILABLE_LANGUAGES.map((lang) => (
                    <option key={lang} value={lang}>{lang}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {t.learningLangLabel}
                </label>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {AVAILABLE_LANGUAGES.map((lang) => {
                    const isSelected = selectedLearningLangs.includes(lang);
                    return (
                      <button
                        key={lang}
                        type="button"
                        onClick={() => toggleLearningLang(lang)}
                        className={`text-xs px-2.5 py-1 rounded-lg border transition-colors ${
                          isSelected
                            ? 'bg-blue-600 text-white border-blue-600 font-medium'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {isSelected && '✓ '}
                        {lang}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Interests Multi-Select */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                {t.interestsLabel}
              </label>
              <div className="flex flex-wrap gap-1.5">
                {AVAILABLE_INTERESTS.map((interest) => {
                  const isSelected = selectedInterests.includes(interest);
                  return (
                    <button
                      key={interest}
                      type="button"
                      onClick={() => toggleInterest(interest)}
                      className={`text-xs px-3 py-1.5 rounded-lg border transition-all ${
                        isSelected
                          ? 'bg-blue-600 text-white border-blue-600 font-semibold shadow-xs'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-white'
                      }`}
                    >
                      {isSelected ? '✓ ' : '+ '}
                      {interest}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Bio */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                {t.bioLabel}
              </label>
              <textarea
                rows={3}
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className="block w-full px-3 py-2 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full flex justify-center items-center gap-2 py-3 px-4 border border-transparent rounded-xl shadow-md text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all active:scale-[0.99]"
            >
              <span>{t.registerButton}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="mt-6 text-center text-xs text-slate-600">
            <span>{t.hasAccountPrompt} </span>
            <button
              type="button"
              onClick={() => onNavigate('login')}
              className="font-bold text-blue-600 hover:text-blue-800 transition-colors"
            >
              {t.signInNow}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
