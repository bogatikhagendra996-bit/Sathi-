import React, { useState, useMemo } from 'react';
import { Search, MapPin, Globe, CheckCircle2, MessageCircle, UserPlus, Filter, X, Sparkles } from 'lucide-react';
import { Language, Screen, User } from '../types';
import { translations } from '../data/translations';
import { MOCK_USERS } from '../data/mockData';

interface FindFriendsScreenProps {
  language: Language;
  currentUser: User;
  onNavigate: (screen: Screen) => void;
  onSelectUser: (user: User) => void;
  onWave: (friendName: string) => void;
  connectedUserIds: string[];
  onConnectUser: (userId: string) => void;
  onOpenChatWith: (friend: User) => void;
}

export const FindFriendsScreen: React.FC<FindFriendsScreenProps> = ({
  language,
  currentUser,
  onNavigate,
  onSelectUser,
  onWave,
  connectedUserIds,
  onConnectUser,
  onOpenChatWith
}) => {
  const t = translations[language];

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [selectedLanguage, setSelectedLanguage] = useState<string>('all');
  const [selectedInterest, setSelectedInterest] = useState<string>('all');

  const regions = [
    { id: 'all', label: t.filterRegionAll },
    { id: 'nepal', label: t.filterRegionNepal },
    { id: 'asia', label: t.filterRegionAsia },
    { id: 'americas', label: t.filterRegionAmericas },
    { id: 'europe', label: t.filterRegionEurope },
    { id: 'oceania', label: t.filterRegionOceania },
  ];

  const filterInterests = [
    'all',
    'Trekking',
    'Language',
    'Music',
    'Cooking',
    'Tech',
    'Photography'
  ];

  const filterLanguages = [
    'all',
    'Nepali',
    'English',
    'Japanese',
    'German',
    'Spanish',
    'French'
  ];

  // Filtering logic
  const filteredFriends = useMemo(() => {
    return MOCK_USERS.filter((user) => {
      // Don't show current logged in user in find friends list
      if (user.id === currentUser.id) return false;

      // Region Filter
      if (selectedRegion === 'nepal' && user.country !== 'Nepal') return false;
      if (selectedRegion === 'asia' && !['Japan', 'China', 'India'].includes(user.country)) {
        if (selectedRegion === 'asia' && user.country === 'Nepal') {
          // keep
        } else if (selectedRegion === 'asia' && user.country !== 'Japan') {
          return false;
        }
      }
      if (selectedRegion === 'americas' && !['Canada', 'United States'].includes(user.country)) return false;
      if (selectedRegion === 'europe' && !['Germany', 'Ireland', 'United Kingdom', 'Spain'].includes(user.country)) return false;
      if (selectedRegion === 'oceania' && user.country !== 'Australia') return false;

      // Language Filter
      if (selectedLanguage !== 'all') {
        const hasSpoken = user.spokenLanguages.some(l => l.toLowerCase().includes(selectedLanguage.toLowerCase()));
        const hasLearning = user.learningLanguages.some(l => l.toLowerCase().includes(selectedLanguage.toLowerCase()));
        if (!hasSpoken && !hasLearning) return false;
      }

      // Interest Filter
      if (selectedInterest !== 'all') {
        const hasInterest = user.interests.some(i => i.toLowerCase().includes(selectedInterest.toLowerCase()));
        if (!hasInterest) return false;
      }

      // Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchName = user.name.toLowerCase().includes(q);
        const matchCity = user.city.toLowerCase().includes(q);
        const matchCountry = user.country.toLowerCase().includes(q);
        const matchBio = user.bio.toLowerCase().includes(q);
        const matchInterests = user.interests.some(i => i.toLowerCase().includes(q));
        const matchLanguages = user.spokenLanguages.some(l => l.toLowerCase().includes(q));

        if (!matchName && !matchCity && !matchCountry && !matchBio && !matchInterests && !matchLanguages) {
          return false;
        }
      }

      return true;
    });
  }, [searchQuery, selectedRegion, selectedLanguage, selectedInterest, currentUser.id]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedRegion('all');
    setSelectedLanguage('all');
    setSelectedInterest('all');
  };

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold mb-3">
            <Globe className="w-3.5 h-3.5 text-blue-600" />
            <span>{language === 'ne' ? 'विश्वव्यापी साथी सञ्जाल' : 'Worldwide Friendship Directory'}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {t.findFriendsTitle}
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            {t.findFriendsSubtitle}
          </p>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="bg-white rounded-3xl p-5 border border-slate-200/90 shadow-xs space-y-4">
          {/* Search Input */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-2xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 bg-slate-50/50"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Region Tabs (Segmented Buttons) */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
            {regions.map((reg) => (
              <button
                key={reg.id}
                onClick={() => setSelectedRegion(reg.id)}
                className={`px-3 py-1.5 rounded-xl font-medium transition-colors whitespace-nowrap shrink-0 ${
                  selectedRegion === reg.id
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {reg.label}
              </button>
            ))}
          </div>

          {/* Dropdown Filters: Language & Interest */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-100 text-xs">
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1.5 text-slate-600">
                <Filter className="w-3.5 h-3.5 text-slate-400" />
                <span>{t.filterLanguage}:</span>
                <select
                  value={selectedLanguage}
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                  className="bg-slate-50 border border-slate-200 rounded-lg px-2 py-1 text-xs text-slate-800 focus:ring-1 focus:ring-blue-500"
                >
                  <option value="all">All Languages</option>
                  {filterLanguages.filter(l => l !== 'all').map(lang => (
                    <option key={lang} value={lang}>{lang}</option>
                  ))}
                </select>
              </div>

              <div className="flex items-center gap-1.5 text-slate-600">
                <span>{t.filterInterest}:</span>
                <select
                  value={selectedInterest}
                  onChange={(e) => setSelectedInterest(e.target.value)}
                  className="bg-slate-50 border border-slate-200 rounded-lg px-2 py-1 text-xs text-slate-800 focus:ring-1 focus:ring-blue-500"
                >
                  <option value="all">All Interests</option>
                  {filterInterests.filter(i => i !== 'all').map(i => (
                    <option key={i} value={i}>{i}</option>
                  ))}
                </select>
              </div>
            </div>

            {(searchQuery || selectedRegion !== 'all' || selectedLanguage !== 'all' || selectedInterest !== 'all') && (
              <button
                onClick={handleResetFilters}
                className="text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors"
              >
                {t.resetFilters}
              </button>
            )}
          </div>
        </div>

        {/* Friends Cards Grid */}
        {filteredFriends.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 shadow-xs max-w-md mx-auto">
            <Globe className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-800 mb-1">
              {language === 'ne' ? 'कुनै साथी भेटिएन' : 'No Friends Found'}
            </h3>
            <p className="text-xs text-slate-500 mb-4">{t.noFriendsFound}</p>
            <button
              onClick={handleResetFilters}
              className="px-4 py-2 bg-blue-600 text-white rounded-xl text-xs font-semibold hover:bg-blue-700"
            >
              {t.resetFilters}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFriends.map((friend) => {
              const isConnected = connectedUserIds.includes(friend.id);

              return (
                <div
                  key={friend.id}
                  className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    {/* Header: Avatar, Name, Flag, Verification */}
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <img
                            src={friend.avatar}
                            alt={friend.name}
                            className="w-14 h-14 rounded-2xl border-2 border-blue-100 bg-blue-50 object-cover"
                          />
                          {friend.isOnline && (
                            <span
                              className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white"
                              title={t.onlineNow}
                            />
                          )}
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5 font-bold text-slate-900 text-base">
                            <span>{friend.name}</span>
                            {friend.verified && (
                              <span title={t.verifiedSathi}>
                                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                              </span>
                            )}
                          </div>
                          <div className="text-xs text-slate-500 flex items-center gap-1.5 mt-0.5">
                            <span>{friend.flag}</span>
                            <span>{friend.city}</span>
                            <span aria-hidden="true">·</span>
                            <span className="text-[11px] text-slate-400 font-medium">@{friend.username}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bio */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3 mb-4">
                      {language === 'ne' && friend.bioNe ? friend.bioNe : friend.bio}
                    </p>

                    {/* Language Exchange Badges */}
                    <div className="bg-slate-50 rounded-2xl p-3 border border-slate-100 mb-4 text-xs space-y-1.5">
                      <div className="flex items-center gap-1.5 text-slate-700">
                        <span className="font-semibold text-blue-900">{t.speaks}:</span>
                        <span className="text-slate-600">{friend.spokenLanguages.join(', ')}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-700">
                        <span className="font-semibold text-sky-800">{t.learning}:</span>
                        <span className="text-slate-600">{friend.learningLanguages.join(', ')}</span>
                      </div>
                    </div>

                    {/* Interests tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {friend.interests.map((interest) => (
                        <span
                          key={interest}
                          className="text-[11px] px-2.5 py-0.5 rounded-lg bg-blue-50 text-blue-700 font-medium border border-blue-100"
                        >
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="pt-4 border-t border-slate-100 space-y-2">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onConnectUser(friend.id)}
                        className={`flex-1 py-2 px-3 rounded-xl text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 ${
                          isConnected
                            ? 'bg-slate-100 text-slate-600 cursor-default'
                            : 'bg-blue-600 hover:bg-blue-700 text-white shadow-xs'
                        }`}
                      >
                        <UserPlus className="w-3.5 h-3.5" />
                        <span>{isConnected ? t.requestSent : t.connectButton}</span>
                      </button>

                      <button
                        onClick={() => onOpenChatWith(friend)}
                        className="py-2 px-3 rounded-xl bg-sky-50 text-sky-700 hover:bg-sky-100 text-xs font-semibold transition-colors flex items-center gap-1.5"
                        title={t.messageButton}
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>{t.messageButton}</span>
                      </button>

                      <button
                        onClick={() => onWave(friend.name)}
                        className="py-2 px-2.5 rounded-xl border border-slate-200 text-slate-600 hover:text-blue-600 hover:bg-slate-50 text-xs transition-colors"
                        title={t.waveButton}
                      >
                        👋
                      </button>
                    </div>

                    <button
                      onClick={() => {
                        onSelectUser(friend);
                        onNavigate('profile');
                      }}
                      className="w-full text-center text-xs font-medium text-slate-500 hover:text-blue-600 transition-colors py-1"
                    >
                      {t.viewProfileButton} →
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
