import React from 'react';
import { Compass, BookOpen, Mountain, Users, ArrowRight, Heart, Sparkles, CheckCircle2 } from 'lucide-react';
import { Language, Screen, User } from '../types';
import { translations } from '../data/translations';
import { HERO_IMAGE, MOCK_USERS, COMMUNITY_MOMENT_IMAGE } from '../data/mockData';

interface WelcomeScreenProps {
  language: Language;
  onNavigate: (screen: Screen) => void;
  onSelectUser: (user: User) => void;
  onWave: (friendName: string) => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({
  language,
  onNavigate,
  onSelectUser,
  onWave
}) => {
  const t = translations[language];
  const previewFriends = MOCK_USERS.slice(0, 4);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-900 via-blue-800 to-blue-950 text-white pt-12 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#93c5fd_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-700/60 border border-blue-500/40 text-blue-200 text-xs font-medium">
                <Sparkles className="w-3.5 h-3.5 text-sky-300" />
                <span>{language === 'ne' ? 'संसारभरका साथीहरूसँग जोडिनुहोस्' : 'Find Friends Worldwide • Bridge Cultures'}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                {t.welcomeHeroTitle}
              </h1>

              <p className="text-base sm:text-lg text-blue-100/90 max-w-2xl leading-relaxed">
                {t.welcomeHeroSubtitle}
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <button
                  onClick={() => onNavigate('register')}
                  className="px-6 py-3 rounded-xl bg-white text-blue-900 font-bold text-sm hover:bg-blue-50 shadow-lg shadow-blue-950/30 transition-all flex items-center gap-2 active:scale-95"
                >
                  <span>{t.welcomeGetStarted}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => {
                    onSelectUser(MOCK_USERS[0]);
                    onNavigate('home');
                  }}
                  className="px-5 py-3 rounded-xl bg-blue-700/80 hover:bg-blue-600/90 border border-blue-400/40 text-white font-medium text-sm transition-all flex items-center gap-2 active:scale-95"
                >
                  <span>{t.welcomeQuickLogin}</span>
                  <span className="text-xs text-sky-200 font-normal">({MOCK_USERS[0].name})</span>
                </button>

                <button
                  onClick={() => onNavigate('find-friends')}
                  className="px-5 py-3 rounded-xl bg-transparent hover:bg-blue-700/40 text-blue-200 hover:text-white font-medium text-sm transition-colors"
                >
                  {t.welcomeExploreFriends}
                </button>
              </div>

              {/* Trust Indicators / Stats */}
              <div className="pt-6 border-t border-blue-700/50 grid grid-cols-3 gap-4 text-left">
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white tabular-nums">90+</div>
                  <div className="text-xs text-blue-200/80 mt-0.5">{t.welcomeStatCountries}</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white tabular-nums">12,500+</div>
                  <div className="text-xs text-blue-200/80 mt-0.5">{t.welcomeStatFriends}</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white tabular-nums">45+</div>
                  <div className="text-xs text-blue-200/80 mt-0.5">{t.welcomeStatLanguages}</div>
                </div>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 bg-blue-950/40">
                <img
                  src={HERO_IMAGE}
                  alt="Friends from diverse cultures sharing tea in the Himalayas"
                  referrerPolicy="no-referrer"
                  className="w-full h-[360px] sm:h-[420px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/90 backdrop-blur-md text-slate-800 shadow-md">
                  <div className="flex items-center justify-between text-xs font-semibold text-blue-700 mb-1">
                    <span>{language === 'ne' ? 'सांस्कृतिक मित्रता' : 'Cultural Friendship'}</span>
                    <span>Kathmandu • Pokhara • Worldwide</span>
                  </div>
                  <p className="text-xs text-slate-600 line-clamp-2">
                    {language === 'ne'
                      ? 'हिमालको स्वच्छ हावामा चियाको चुस्की लिँदै संसारभरका नयाँ साथीहरूसँग भाषा र संस्कृति साटासाट गर्नुहोस्।'
                      : 'Share stories, tea, and language practice across borders from the Annapurna foothills to cities worldwide.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pillars Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            {language === 'ne' ? 'साथी (SATHI) मार्फत के गर्न सकिन्छ?' : 'Why Join SATHI Worldwide?'}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            {language === 'ne'
              ? 'नेपाल र विश्व समुदायबीच आत्मीय सम्बन्ध स्थापना गर्ने मुख्य आधारहरू।'
              : 'Our core pillars designed to make international friendship safe, enriching, and deeply personal.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Pillar 1 */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:border-blue-300 hover:shadow-md transition-all group">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2">{t.welcomePillar1Title}</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{t.welcomePillar1Desc}</p>
          </div>

          {/* Pillar 2 */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:border-blue-300 hover:shadow-md transition-all group">
            <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-4 group-hover:bg-sky-600 group-hover:text-white transition-colors">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2">{t.welcomePillar2Title}</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{t.welcomePillar2Desc}</p>
          </div>

          {/* Pillar 3 */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:border-blue-300 hover:shadow-md transition-all group">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
              <Mountain className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2">{t.welcomePillar3Title}</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{t.welcomePillar3Desc}</p>
          </div>

          {/* Pillar 4 */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:border-blue-300 hover:shadow-md transition-all group">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-4 group-hover:bg-blue-700 group-hover:text-white transition-colors">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2">{t.welcomePillar4Title}</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{t.welcomePillar4Desc}</p>
          </div>
        </div>
      </section>

      {/* Community Preview Cards */}
      <section className="bg-blue-50/50 border-y border-blue-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">
                {language === 'ne' ? 'नमुना सदस्यहरू' : 'Sample Fictional Profiles'}
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                {t.welcomeCommunityPreview}
              </h2>
            </div>
            <button
              onClick={() => onNavigate('find-friends')}
              className="text-sm font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1.5 self-start sm:self-auto"
            >
              <span>{t.welcomeExploreFriends}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {previewFriends.map((friend) => (
              <div
                key={friend.id}
                className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <img
                      src={friend.avatar}
                      alt={friend.name}
                      className="w-12 h-12 rounded-full border border-blue-200 bg-blue-50 object-cover"
                    />
                    <div>
                      <div className="flex items-center gap-1 font-bold text-slate-900 text-sm">
                        <span>{friend.name}</span>
                        {friend.verified && (
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                        )}
                      </div>
                      <div className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                        <span>{friend.flag}</span>
                        <span>{friend.city}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 line-clamp-3 mb-3 leading-relaxed">
                    {language === 'ne' && friend.bioNe ? friend.bioNe : friend.bio}
                  </p>

                  <div className="text-[11px] text-slate-500 space-y-1 mb-4">
                    <div>
                      <span className="font-semibold text-slate-700">{t.speaks}:</span> {friend.spokenLanguages.join(', ')}
                    </div>
                    <div>
                      <span className="font-semibold text-slate-700">{t.learning}:</span> {friend.learningLanguages.join(', ')}
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
                  <button
                    onClick={() => onWave(friend.name)}
                    className="flex-1 py-1.5 text-xs font-medium text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors text-center"
                  >
                    {t.waveButton}
                  </button>
                  <button
                    onClick={() => {
                      onSelectUser(friend);
                      onNavigate('profile');
                    }}
                    className="py-1.5 px-3 text-xs font-medium text-slate-600 hover:text-blue-700 hover:bg-slate-100 rounded-lg transition-colors"
                  >
                    {t.viewProfileButton}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold">
              {language === 'ne' ? 'आजै आफ्नो विश्वव्यापी यात्रा सुरु गर्नुहोस्' : 'Ready to Meet Friends Around the Globe?'}
            </h3>
            <p className="text-sm text-blue-100 max-w-xl">
              {language === 'ne'
                ? 'नयाँ संस्कृति सिक्नुहोस्, भाषा सुधार गर्नुहोस् र मन मिल्ने साथी बनाउनुहोस्।'
                : 'Experience the warm hospitality of Nepal and build friendships across borders in our educational prototype.'}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <button
              onClick={() => onNavigate('register')}
              className="px-6 py-3 rounded-xl bg-white text-blue-900 font-bold text-sm hover:bg-blue-50 shadow-md transition-all active:scale-95"
            >
              {t.welcomeGetStarted}
            </button>
            <button
              onClick={() => onNavigate('login')}
              className="px-6 py-3 rounded-xl bg-blue-800 hover:bg-blue-700 text-white font-medium text-sm border border-blue-500/50 transition-all active:scale-95"
            >
              {t.navLogin}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
