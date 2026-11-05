import React, { useState } from 'react';
import { MapPin, Globe, CheckCircle2, Edit3, MessageCircle, UserPlus, ArrowLeft, Heart, Calendar, Award } from 'lucide-react';
import { Language, Screen, User, Post } from '../types';
import { translations } from '../data/translations';
import { HIMALAYAN_TREK_IMAGE, MOCK_USERS, MOCK_POSTS } from '../data/mockData';

interface ProfileScreenProps {
  language: Language;
  currentUser: User;
  viewingUser: User;
  onNavigate: (screen: Screen) => void;
  onSelectUser: (user: User) => void;
  onWave: (friendName: string) => void;
  connectedUserIds: string[];
  onConnectUser: (userId: string) => void;
  onOpenChatWith: (friend: User) => void;
  onUpdateCurrentUser: (updated: User) => void;
}

export const ProfileScreen: React.FC<ProfileScreenProps> = ({
  language,
  currentUser,
  viewingUser,
  onNavigate,
  onSelectUser,
  onWave,
  connectedUserIds,
  onConnectUser,
  onOpenChatWith,
  onUpdateCurrentUser
}) => {
  const t = translations[language];
  const isOwnProfile = currentUser.id === viewingUser.id;
  const isConnected = connectedUserIds.includes(viewingUser.id);

  const [activeTab, setActiveTab] = useState<'about' | 'interests' | 'friends' | 'moments'>('about');
  const [isEditing, setIsEditing] = useState(false);

  // Edit form state
  const [editName, setEditName] = useState(currentUser.name);
  const [editBio, setEditBio] = useState(currentUser.bio);
  const [editCity, setEditCity] = useState(currentUser.city);

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    const updated: User = {
      ...currentUser,
      name: editName,
      bio: editBio,
      city: editCity
    };
    onUpdateCurrentUser(updated);
    setIsEditing(false);
  };

  const userPosts = MOCK_POSTS.filter(p => p.authorId === viewingUser.id || isOwnProfile);

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Banner if viewing someone else */}
        {!isOwnProfile && (
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-3 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs text-blue-900 font-medium">
              <span>{t.viewFriendProfile}:</span>
              <span className="font-bold">{viewingUser.name}</span>
              <span>{viewingUser.flag}</span>
            </div>
            <button
              onClick={() => onSelectUser(currentUser)}
              className="text-xs font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{t.backToMyProfile}</span>
            </button>
          </div>
        )}

        {/* Profile Card */}
        <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-xs">
          {/* Cover Header */}
          <div className="relative h-48 sm:h-64 bg-blue-900">
            <img
              src={viewingUser.coverImage || HIMALAYAN_TREK_IMAGE}
              alt="Profile Cover"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent" />
          </div>

          {/* Profile Details Bar */}
          <div className="px-6 pb-6 pt-0 relative">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between -mt-16 sm:-mt-20 gap-4 mb-6">
              <div className="flex flex-col sm:flex-row items-center sm:items-end gap-4 text-center sm:text-left">
                <img
                  src={viewingUser.avatar}
                  alt={viewingUser.name}
                  className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl border-4 border-white bg-blue-50 shadow-md object-cover"
                />
                <div className="space-y-1">
                  <div className="flex items-center justify-center sm:justify-start gap-2">
                    <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                      {viewingUser.name}
                    </h1>
                    <span>{viewingUser.flag}</span>
                    {viewingUser.verified && (
                      <span title={t.verifiedSathi}>
                        <CheckCircle2 className="w-5 h-5 text-blue-600" />
                      </span>
                    )}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-500 flex items-center justify-center sm:justify-start gap-2">
                    <span>@{viewingUser.username}</span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {viewingUser.city}, {viewingUser.country}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-center sm:justify-end gap-2.5">
                {isOwnProfile ? (
                  <button
                    onClick={() => {
                      setEditName(currentUser.name);
                      setEditBio(currentUser.bio);
                      setEditCity(currentUser.city);
                      setIsEditing(true);
                    }}
                    className="px-4 py-2 rounded-xl border border-slate-300 hover:border-blue-500 text-slate-700 hover:text-blue-600 text-xs font-semibold flex items-center gap-1.5 transition-colors bg-white shadow-xs"
                  >
                    <Edit3 className="w-3.5 h-3.5" />
                    <span>{t.editProfile}</span>
                  </button>
                ) : (
                  <>
                    <button
                      onClick={() => onConnectUser(viewingUser.id)}
                      className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                        isConnected
                          ? 'bg-slate-100 text-slate-600 cursor-default'
                          : 'bg-blue-600 hover:bg-blue-700 text-white shadow-xs'
                      }`}
                    >
                      <UserPlus className="w-3.5 h-3.5" />
                      <span>{isConnected ? t.requestSent : t.connectButton}</span>
                    </button>
                    <button
                      onClick={() => onOpenChatWith(viewingUser)}
                      className="px-4 py-2 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-700 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>{t.messageButton}</span>
                    </button>
                    <button
                      onClick={() => onWave(viewingUser.name)}
                      className="p-2 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 text-xs"
                      title={t.waveButton}
                    >
                      👋
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100 text-center mb-6">
              <div>
                <div className="text-xl sm:text-2xl font-extrabold text-blue-900 tabular-nums">
                  {viewingUser.stats.friendsCount}
                </div>
                <div className="text-xs text-slate-500 mt-0.5">{t.statsFriends}</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-extrabold text-sky-900 tabular-nums">
                  {viewingUser.stats.culturalExchanges}
                </div>
                <div className="text-xs text-slate-500 mt-0.5">{t.statsExchanges}</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-extrabold text-indigo-900 tabular-nums">
                  {viewingUser.stats.countriesConnected}
                </div>
                <div className="text-xs text-slate-500 mt-0.5">{t.statsCountries}</div>
              </div>
            </div>

            {/* Profile Tabs */}
            <div className="flex items-center gap-2 border-b border-slate-200 pb-2 text-xs font-semibold overflow-x-auto">
              <button
                onClick={() => setActiveTab('about')}
                className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
                  activeTab === 'about'
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-600 hover:text-blue-600'
                }`}
              >
                {t.tabAbout}
              </button>
              <button
                onClick={() => setActiveTab('interests')}
                className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
                  activeTab === 'interests'
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-600 hover:text-blue-600'
                }`}
              >
                {t.tabInterests}
              </button>
              <button
                onClick={() => setActiveTab('friends')}
                className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
                  activeTab === 'friends'
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-600 hover:text-blue-600'
                }`}
              >
                {t.tabFriends}
              </button>
              <button
                onClick={() => setActiveTab('moments')}
                className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
                  activeTab === 'moments'
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-600 hover:text-blue-600'
                }`}
              >
                {t.tabMoments}
              </button>
            </div>

            {/* Tab Contents */}
            <div className="pt-6">
              {activeTab === 'about' && (
                <div className="space-y-6">
                  {/* Bio */}
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 mb-2">{t.aboutMeTitle}</h3>
                    <p className="text-sm text-slate-700 leading-relaxed bg-slate-50/70 p-4 rounded-2xl border border-slate-100">
                      {language === 'ne' && viewingUser.bioNe ? viewingUser.bioNe : viewingUser.bio}
                    </p>
                  </div>

                  {/* Languages */}
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 mb-2">{t.languagesTitle}</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-4 bg-blue-50/50 rounded-2xl border border-blue-100">
                        <div className="text-xs font-semibold text-blue-900 mb-1">{t.nativeTongue}</div>
                        <div className="text-sm font-bold text-slate-800">{viewingUser.nativeLanguage}</div>
                        <div className="text-xs text-slate-500 mt-2">
                          <span className="font-semibold">{t.speaks}:</span> {viewingUser.spokenLanguages.join(', ')}
                        </div>
                      </div>

                      <div className="p-4 bg-sky-50/50 rounded-2xl border border-sky-100">
                        <div className="text-xs font-semibold text-sky-900 mb-1">{t.activelyLearning}</div>
                        <div className="flex flex-wrap gap-1.5 mt-1">
                          {viewingUser.learningLanguages.map((lang) => (
                            <span key={lang} className="text-xs px-2.5 py-1 rounded-lg bg-sky-100 text-sky-800 font-semibold">
                              {lang}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Cultural Journey */}
                  {viewingUser.culturalStory && (
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 mb-2">{t.culturalJourneyTitle}</h3>
                      <p className="text-sm text-slate-700 leading-relaxed bg-slate-50/70 p-4 rounded-2xl border border-slate-100">
                        {viewingUser.culturalStory}
                      </p>
                    </div>
                  )}

                  {/* Member Since Badge */}
                  <div className="flex items-center gap-2 text-xs text-slate-500 pt-2">
                    <Calendar className="w-4 h-4 text-slate-400" />
                    <span>{t.memberSince}: {viewingUser.memberSince}</span>
                  </div>
                </div>
              )}

              {activeTab === 'interests' && (
                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-slate-900">{t.tabInterests}</h3>
                  <div className="flex flex-wrap gap-2">
                    {viewingUser.interests.map((interest) => (
                      <span
                        key={interest}
                        className="px-3.5 py-2 rounded-xl bg-blue-50 border border-blue-200 text-blue-800 text-xs font-medium"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'friends' && (
                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-slate-900">{t.tabFriends}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {MOCK_USERS.filter(u => u.id !== viewingUser.id).slice(0, 4).map((friend) => (
                      <div
                        key={friend.id}
                        className="p-3 bg-white border border-slate-200 rounded-2xl flex items-center justify-between"
                      >
                        <div className="flex items-center gap-2.5">
                          <img src={friend.avatar} alt={friend.name} className="w-10 h-10 rounded-full border border-blue-100" />
                          <div>
                            <div className="text-xs font-bold text-slate-900">{friend.name} {friend.flag}</div>
                            <div className="text-[11px] text-slate-500">{friend.city}</div>
                          </div>
                        </div>
                        <button
                          onClick={() => {
                            onSelectUser(friend);
                          }}
                          className="text-xs text-blue-600 font-medium hover:text-blue-800"
                        >
                          {t.viewProfileButton}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'moments' && (
                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-slate-900">{t.tabMoments}</h3>
                  {userPosts.map(post => (
                    <div key={post.id} className="p-4 bg-slate-50/70 border border-slate-200 rounded-2xl space-y-2">
                      <div className="text-xs text-slate-500">{language === 'ne' ? post.timeAgoNe : post.timeAgo}</div>
                      <p className="text-sm text-slate-800">{language === 'ne' ? post.contentNe : post.content}</p>
                      <div className="flex items-center gap-1 text-xs text-rose-600 pt-1">
                        <Heart className="w-3.5 h-3.5 fill-rose-600" />
                        <span className="tabular-nums font-semibold">{post.likes}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Edit Profile Modal */}
        {isEditing && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
            <div className="bg-white rounded-3xl p-6 max-w-lg w-full border border-slate-200 shadow-xl space-y-4">
              <h2 className="text-lg font-bold text-slate-900">{t.editProfile}</h2>
              <form onSubmit={handleSaveProfile} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">{t.fullNameLabel}</label>
                  <input
                    type="text"
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">{t.cityLabel}</label>
                  <input
                    type="text"
                    value={editCity}
                    onChange={(e) => setEditCity(e.target.value)}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">{t.bioLabel}</label>
                  <textarea
                    rows={3}
                    value={editBio}
                    onChange={(e) => setEditBio(e.target.value)}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600 resize-none"
                    required
                  />
                </div>
                <div className="flex items-center justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsEditing(false)}
                    className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100"
                  >
                    {t.cancel}
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-xl text-xs font-semibold bg-blue-600 text-white hover:bg-blue-700 shadow-xs"
                  >
                    {t.saveChanges}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
