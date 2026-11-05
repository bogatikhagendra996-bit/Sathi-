import React, { useState } from 'react';
import { Sparkles, Heart, MessageSquare, Share2, Languages, Send, CheckCircle2, UserPlus, Globe, Compass, PlusCircle } from 'lucide-react';
import { Language, Screen, User, Post } from '../types';
import { translations } from '../data/translations';
import { MOCK_POSTS, MOCK_USERS } from '../data/mockData';

interface HomeScreenProps {
  language: Language;
  currentUser: User;
  onNavigate: (screen: Screen) => void;
  onSelectUser: (user: User) => void;
  onWave: (friendName: string) => void;
  connectedUserIds: string[];
  onConnectUser: (userId: string) => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  language,
  currentUser,
  onNavigate,
  onSelectUser,
  onWave,
  connectedUserIds,
  onConnectUser
}) => {
  const t = translations[language];

  const [posts, setPosts] = useState<Post[]>(MOCK_POSTS);
  const [translatedPostIds, setTranslatedPostIds] = useState<Record<string, boolean>>({});
  const [activeFeedFilter, setActiveFeedFilter] = useState<'all' | 'diaspora' | 'global' | 'culture'>('all');
  const [newPostContent, setNewPostContent] = useState('');
  const [activeCommentPostId, setActiveCommentPostId] = useState<string | null>(null);
  const [commentText, setCommentText] = useState('');
  const [shareToast, setShareToast] = useState<string | null>(null);

  const toggleTranslate = (postId: string) => {
    setTranslatedPostIds(prev => ({ ...prev, [postId]: !prev[postId] }));
  };

  const toggleLike = (postId: string) => {
    setPosts(prev =>
      prev.map(p => {
        if (p.id === postId) {
          const isLiked = !p.isLiked;
          return {
            ...p,
            isLiked,
            likes: isLiked ? p.likes + 1 : p.likes - 1
          };
        }
        return p;
      })
    );
  };

  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPostContent.trim()) return;

    const newPost: Post = {
      id: `post-${Date.now()}`,
      authorId: currentUser.id,
      authorName: currentUser.name,
      authorAvatar: currentUser.avatar,
      authorLocation: `${currentUser.city}, ${currentUser.country}`,
      authorFlag: currentUser.flag,
      timeAgo: 'Just now',
      timeAgoNe: 'भर्खरै',
      content: newPostContent,
      contentNe: newPostContent,
      likes: 1,
      isLiked: true,
      commentsCount: 0,
      tags: ['SathiCommunity', 'Friendship']
    };

    setPosts([newPost, ...posts]);
    setNewPostContent('');
  };

  const handleAddComment = (postId: string) => {
    if (!commentText.trim()) return;
    setPosts(prev =>
      prev.map(p => {
        if (p.id === postId) {
          return { ...p, commentsCount: p.commentsCount + 1 };
        }
        return p;
      })
    );
    setCommentText('');
    setActiveCommentPostId(null);
  };

  const handleShare = (postAuthor: string) => {
    setShareToast(language === 'ne' ? `${postAuthor} को पोस्ट साझा गरियो!` : `Shared ${postAuthor}'s moment!`);
    setTimeout(() => setShareToast(null), 3000);
  };

  // Filter suggested friends
  const suggestedFriends = MOCK_USERS.filter(u => u.id !== currentUser.id).slice(0, 4);

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4 sm:px-6 lg:px-8">
      {shareToast && (
        <div className="fixed top-20 right-4 z-50 bg-blue-900 text-white px-4 py-2.5 rounded-xl shadow-lg text-xs font-medium flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-sky-300" />
          <span>{shareToast}</span>
        </div>
      )}

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Feed Column */}
          <div className="lg:col-span-8 space-y-6">
            {/* Greeting Header */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <img
                  src={currentUser.avatar}
                  alt={currentUser.name}
                  className="w-14 h-14 rounded-2xl border-2 border-blue-200 bg-blue-50 object-cover"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <h1 className="text-xl sm:text-2xl font-bold text-slate-900">
                      {t.greetingNamaste}, {currentUser.name}! {currentUser.flag}
                    </h1>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                    {t.homeSubtitle}
                  </p>
                </div>
              </div>

              <button
                onClick={() => onNavigate('find-friends')}
                className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs sm:text-sm shadow-xs transition-colors flex items-center justify-center gap-1.5 self-start sm:self-auto"
              >
                <Compass className="w-4 h-4" />
                <span>{t.navFindFriends}</span>
              </button>
            </div>

            {/* Cultural Spotlight Card */}
            <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white rounded-3xl p-6 shadow-md border border-blue-700 relative overflow-hidden">
              <div className="relative z-10 space-y-2">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-700/60 text-sky-200 text-[11px] font-semibold border border-blue-500/40">
                  <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
                  <span>{t.culturalSpotlightTitle}</span>
                </div>
                <p className="text-sm text-blue-50 leading-relaxed max-w-3xl">
                  {t.culturalSpotlightDesc}
                </p>
              </div>
            </div>

            {/* Create Post Card */}
            <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-xs">
              <form onSubmit={handleCreatePost} className="space-y-3">
                <div className="flex items-start gap-3">
                  <img
                    src={currentUser.avatar}
                    alt={currentUser.name}
                    className="w-9 h-9 rounded-full border border-blue-200 bg-blue-50 shrink-0"
                  />
                  <textarea
                    rows={2}
                    value={newPostContent}
                    onChange={(e) => setNewPostContent(e.target.value)}
                    placeholder={t.createPostPlaceholder}
                    className="w-full text-xs sm:text-sm p-3 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 resize-none bg-slate-50/50"
                  />
                </div>
                <div className="flex items-center justify-between pt-1">
                  <span className="text-[11px] text-slate-500">
                    {language === 'ne' ? 'सबै साथीहरूले हेर्न सक्नुहुन्छ' : 'Visible to all global sathis'}
                  </span>
                  <button
                    type="submit"
                    disabled={!newPostContent.trim()}
                    className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-40 disabled:hover:bg-blue-600 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{t.publishPost}</span>
                  </button>
                </div>
              </form>
            </div>

            {/* Feed Filter Segmented Controls */}
            <div className="flex items-center justify-between gap-2 overflow-x-auto pb-1">
              <h2 className="text-base font-bold text-slate-900 shrink-0">
                {t.feedTitle}
              </h2>
              <div className="flex items-center gap-1 p-1 bg-slate-200/70 rounded-xl shrink-0">
                <button
                  onClick={() => setActiveFeedFilter('all')}
                  className={`px-3 py-1 text-xs font-medium rounded-lg transition-colors ${
                    activeFeedFilter === 'all'
                      ? 'bg-white text-blue-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {t.feedFilterAll}
                </button>
                <button
                  onClick={() => setActiveFeedFilter('diaspora')}
                  className={`px-3 py-1 text-xs font-medium rounded-lg transition-colors ${
                    activeFeedFilter === 'diaspora'
                      ? 'bg-white text-blue-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {t.feedFilterDiaspora}
                </button>
                <button
                  onClick={() => setActiveFeedFilter('global')}
                  className={`px-3 py-1 text-xs font-medium rounded-lg transition-colors ${
                    activeFeedFilter === 'global'
                      ? 'bg-white text-blue-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {t.feedFilterGlobal}
                </button>
              </div>
            </div>

            {/* Posts List */}
            <div className="space-y-6">
              {posts.map((post) => {
                const isTranslated = !!translatedPostIds[post.id];
                const displayContent = isTranslated
                  ? language === 'ne' ? post.content : post.contentNe
                  : language === 'ne' ? post.contentNe : post.content;

                return (
                  <article
                    key={post.id}
                    className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs hover:border-slate-300 transition-all"
                  >
                    {/* Author Bar */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={post.authorAvatar}
                          alt={post.authorName}
                          className="w-11 h-11 rounded-full border border-blue-200 bg-blue-50 object-cover"
                        />
                        <div>
                          <div className="flex items-center gap-1.5 font-bold text-slate-900 text-sm">
                            <span>{post.authorName}</span>
                            <span>{post.authorFlag}</span>
                          </div>
                          <div className="text-xs text-slate-500 flex items-center gap-1.5 mt-0.5">
                            <span>{post.authorLocation}</span>
                            <span aria-hidden="true">·</span>
                            <span>{language === 'ne' ? post.timeAgoNe : post.timeAgo}</span>
                          </div>
                        </div>
                      </div>

                      {/* Translate button */}
                      <button
                        onClick={() => toggleTranslate(post.id)}
                        className="text-xs text-blue-600 hover:text-blue-800 font-medium px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100/80 transition-colors flex items-center gap-1.5"
                        title="Toggle Translation"
                      >
                        <Languages className="w-3.5 h-3.5" />
                        <span>{isTranslated ? t.showOriginal : t.translatePost}</span>
                      </button>
                    </div>

                    {/* Post Content */}
                    <p className="text-sm text-slate-800 leading-relaxed mb-4">
                      {displayContent}
                    </p>

                    {/* Post Image (if any) */}
                    {post.image && (
                      <div className="mb-4 rounded-2xl overflow-hidden border border-slate-200 bg-slate-100">
                        <img
                          src={post.image}
                          alt="Post attachment"
                          referrerPolicy="no-referrer"
                          className="w-full h-64 sm:h-80 object-cover"
                        />
                      </div>
                    )}

                    {/* Tags */}
                    <div className="flex items-center gap-2 text-xs text-blue-600 font-medium mb-4">
                      {post.tags.map(tag => (
                        <span key={tag}>#{tag}</span>
                      ))}
                    </div>

                    {/* Interactions */}
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600 font-medium">
                      <button
                        onClick={() => toggleLike(post.id)}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors ${
                          post.isLiked
                            ? 'text-rose-600 bg-rose-50'
                            : 'hover:bg-slate-100 text-slate-600'
                        }`}
                      >
                        <Heart className={`w-4 h-4 ${post.isLiked ? 'fill-rose-600' : ''}`} />
                        <span className="tabular-nums">{post.likes}</span>
                        <span>{t.like}</span>
                      </button>

                      <button
                        onClick={() =>
                          setActiveCommentPostId(
                            activeCommentPostId === post.id ? null : post.id
                          )
                        }
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:bg-slate-100 transition-colors"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span className="tabular-nums">{post.commentsCount}</span>
                        <span>{t.comment}</span>
                      </button>

                      <button
                        onClick={() => handleShare(post.authorName)}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:bg-slate-100 transition-colors"
                      >
                        <Share2 className="w-4 h-4" />
                        <span>{t.share}</span>
                      </button>
                    </div>

                    {/* Comment Composer */}
                    {activeCommentPostId === post.id && (
                      <div className="mt-4 pt-3 border-t border-slate-100 space-y-2">
                        <div className="flex items-center gap-2">
                          <input
                            type="text"
                            value={commentText}
                            onChange={(e) => setCommentText(e.target.value)}
                            placeholder={language === 'ne' ? 'प्रतिक्रिया लेख्नुहोस्...' : 'Write a friendly reply...'}
                            className="flex-1 text-xs px-3 py-2 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600"
                          />
                          <button
                            onClick={() => handleAddComment(post.id)}
                            className="px-3 py-2 bg-blue-600 text-white rounded-xl text-xs font-semibold hover:bg-blue-700"
                          >
                            {language === 'ne' ? 'पठाउनुहोस्' : 'Reply'}
                          </button>
                        </div>
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          </div>

          {/* Right Column: Suggested Friends & Community Stats */}
          <div className="lg:col-span-4 space-y-6">
            {/* User Stats Card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs">
              <h3 className="text-sm font-bold text-slate-900 mb-4 flex items-center justify-between">
                <span>{language === 'ne' ? 'मेरो साथी विवरण' : 'My Friendship Stats'}</span>
                <span className="text-[11px] font-medium text-blue-600">{currentUser.memberSince}</span>
              </h3>

              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="bg-blue-50/60 rounded-2xl p-3 border border-blue-100">
                  <div className="text-xl font-extrabold text-blue-900 tabular-nums">
                    {currentUser.stats.friendsCount + connectedUserIds.length}
                  </div>
                  <div className="text-[11px] text-slate-600 mt-0.5">{t.statsFriends}</div>
                </div>

                <div className="bg-sky-50/60 rounded-2xl p-3 border border-sky-100">
                  <div className="text-xl font-extrabold text-sky-900 tabular-nums">
                    {currentUser.stats.culturalExchanges}
                  </div>
                  <div className="text-[11px] text-slate-600 mt-0.5">{t.statsExchanges}</div>
                </div>

                <div className="bg-indigo-50/60 rounded-2xl p-3 border border-indigo-100">
                  <div className="text-xl font-extrabold text-indigo-900 tabular-nums">
                    {currentUser.stats.countriesConnected}
                  </div>
                  <div className="text-[11px] text-slate-600 mt-0.5">{t.statsCountries}</div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => onNavigate('profile')}
                  className="text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                >
                  {t.viewProfileButton} →
                </button>
                <button
                  onClick={() => onNavigate('chat')}
                  className="text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                >
                  {t.navChat} →
                </button>
              </div>
            </div>

            {/* Suggested Friends Widget */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold text-slate-900">
                  {t.suggestedFriendsTitle}
                </h3>
                <button
                  onClick={() => onNavigate('find-friends')}
                  className="text-xs font-semibold text-blue-600 hover:text-blue-800"
                >
                  {t.viewAll}
                </button>
              </div>

              <div className="space-y-4">
                {suggestedFriends.map((friend) => {
                  const isConnected = connectedUserIds.includes(friend.id);
                  return (
                    <div
                      key={friend.id}
                      className="flex items-center justify-between gap-3 pb-3 border-b border-slate-100 last:border-b-0 last:pb-0"
                    >
                      <div className="flex items-center gap-2.5 truncate">
                        <img
                          src={friend.avatar}
                          alt={friend.name}
                          className="w-10 h-10 rounded-full border border-blue-200 bg-blue-50 shrink-0"
                        />
                        <div className="truncate">
                          <button
                            onClick={() => {
                              onSelectUser(friend);
                              onNavigate('profile');
                            }}
                            className="text-xs font-bold text-slate-900 hover:text-blue-600 text-left truncate block"
                          >
                            {friend.name}
                          </button>
                          <div className="text-[11px] text-slate-500 truncate flex items-center gap-1">
                            <span>{friend.flag}</span>
                            <span>{friend.city}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-1 shrink-0">
                        <button
                          onClick={() => onWave(friend.name)}
                          className="p-1.5 rounded-lg text-slate-500 hover:text-blue-600 hover:bg-blue-50 text-xs"
                          title="Wave 👋"
                        >
                          👋
                        </button>
                        <button
                          onClick={() => onConnectUser(friend.id)}
                          className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-colors ${
                            isConnected
                              ? 'bg-slate-100 text-slate-600 cursor-default'
                              : 'bg-blue-600 hover:bg-blue-700 text-white'
                          }`}
                        >
                          {isConnected ? t.requestSent : t.connectButton}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
