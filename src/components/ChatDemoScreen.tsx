import React, { useState, useEffect, useRef } from 'react';
import { Send, Languages, Volume2, Play, Pause, Smile, Sparkles, CheckCheck, Clock, UserCheck } from 'lucide-react';
import { Language, Screen, User, ChatMessage, Conversation } from '../types';
import { translations } from '../data/translations';
import { MOCK_CONVERSATIONS, ICEBREAKER_PROMPTS, MOCK_USERS } from '../data/mockData';

interface ChatDemoScreenProps {
  language: Language;
  currentUser: User;
  onNavigate: (screen: Screen) => void;
  activeFriendId?: string;
}

export const ChatDemoScreen: React.FC<ChatDemoScreenProps> = ({
  language,
  currentUser,
  onNavigate,
  activeFriendId
}) => {
  const t = translations[language];

  const [conversations, setConversations] = useState<Record<string, Conversation>>(MOCK_CONVERSATIONS);
  const [selectedFriendId, setSelectedFriendId] = useState<string>(
    activeFriendId && MOCK_CONVERSATIONS[activeFriendId] ? activeFriendId : 'user-maya'
  );
  const [inputText, setInputText] = useState('');
  const [translatedMsgIds, setTranslatedMsgIds] = useState<Record<string, boolean>>({});
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [isFriendTyping, setIsFriendTyping] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (activeFriendId && MOCK_CONVERSATIONS[activeFriendId]) {
      setSelectedFriendId(activeFriendId);
    }
  }, [activeFriendId]);

  const activeConversation = conversations[selectedFriendId] || conversations['user-maya'];

  // Scroll to bottom when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [activeConversation.messages, isFriendTyping]);

  const toggleTranslate = (msgId: string) => {
    setTranslatedMsgIds(prev => ({ ...prev, [msgId]: !prev[msgId] }));
  };

  const handleSendMessage = (textToSend?: string) => {
    const text = (textToSend || inputText).trim();
    if (!text) return;

    const newMsg: ChatMessage = {
      id: `msg-${Date.now()}`,
      senderId: currentUser.id,
      senderName: currentUser.name,
      text,
      textNe: text,
      timestamp: 'Just now',
      reactions: []
    };

    // Update conversation with user message
    setConversations(prev => {
      const conv = prev[selectedFriendId];
      if (!conv) return prev;
      return {
        ...prev,
        [selectedFriendId]: {
          ...conv,
          messages: [...conv.messages, newMsg],
          lastMessage: text,
          lastMessageTime: 'Just now'
        }
      };
    });

    setInputText('');

    // Simulate friend typing and reply
    setIsFriendTyping(true);
    setTimeout(() => {
      setIsFriendTyping(false);
      let replyEn = "Thank you so much for your message! SATHI is such a wonderful way to connect across the world. Looking forward to talking more!";
      let replyNe = "तपाईंको सन्देशको लागि धेरै धेरै धन्यवाद! साथी (SATHI) मार्फत यसरी विश्वभर जोडिन पाउँदा साह्रै खुसी लाग्यो। थप कुराकानी गर्न उत्सुक छु!";

      if (text.toLowerCase().includes('momo') || text.includes('मोमो')) {
        replyEn = "The secret to authentic Nepali momos is fresh minced ginger, garlic, chopped scallions, and a pinch of ground timur (Sichuan pepper)!";
        replyNe = "मौलिक नेपाली मोमोको मुख्य रहस्य भनेको ताजा अदुवा, लसुन, मसिनो प्याज र थोरै टिमुरको धुलो हो!";
      } else if (text.toLowerCase().includes('festival') || text.includes('दसैं') || text.includes('चाड')) {
        replyEn = "Dashain and Tihar are our biggest celebrations! During Tihar (the festival of lights), sisters bless their brothers with colorful Tika and marigold garlands.";
        replyNe = "दसैं र तिहार हाम्रा मुख्य चाड हुन्! तिहारमा दिदीबहिनीले दाजुभाइलाई सप्तरङ्गी टीका र सयपत्रीको माला लगाएर दीर्घायुको कामना गर्छन्।";
      } else if (text.toLowerCase().includes('weather') || text.includes('मौसम')) {
        replyEn = "The weather here has been pleasant and sunny. Hope you are having a fantastic day too!";
        replyNe = "यहाँको मौसम एकदमै रमाइलो र घमाइलो छ। तपाईंको दिन पनि शुभ रहोस्!";
      }

      const botReply: ChatMessage = {
        id: `reply-${Date.now()}`,
        senderId: activeConversation.friend.id,
        senderName: activeConversation.friend.name,
        text: replyEn,
        textNe: replyNe,
        timestamp: 'Just now',
        reactions: ['🙏']
      };

      setConversations(prev => {
        const conv = prev[selectedFriendId];
        if (!conv) return prev;
        return {
          ...prev,
          [selectedFriendId]: {
            ...conv,
            messages: [...conv.messages, botReply],
            lastMessage: replyEn,
            lastMessageTime: 'Just now'
          }
        };
      });
    }, 1600);
  };

  const handleAddReaction = (msgId: string, emoji: string) => {
    setConversations(prev => {
      const conv = prev[selectedFriendId];
      if (!conv) return prev;
      return {
        ...prev,
        [selectedFriendId]: {
          ...conv,
          messages: conv.messages.map(m => {
            if (m.id === msgId) {
              const reactions = m.reactions.includes(emoji)
                ? m.reactions.filter(r => r !== emoji)
                : [...m.reactions, emoji];
              return { ...m, reactions };
            }
            return m;
          })
        }
      };
    });
  };

  const handlePlayVoiceGreeting = () => {
    setIsPlayingAudio(true);
    setTimeout(() => setIsPlayingAudio(false), 3500);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Header */}
        <div className="mb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
              <span>{t.chatTitle}</span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-700 font-semibold">
                Simulated Demo
              </span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-600">
              {t.chatSubtitle}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePlayVoiceGreeting}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all shadow-xs ${
                isPlayingAudio
                  ? 'bg-emerald-600 text-white animate-pulse'
                  : 'bg-white border border-blue-200 text-blue-700 hover:bg-blue-50'
              }`}
            >
              {isPlayingAudio ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span>{isPlayingAudio ? t.pauseAudioNote : t.playAudioNote}</span>
            </button>
          </div>
        </div>

        {/* Chat Main Container */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden grid grid-cols-1 md:grid-cols-12 min-h-[620px] max-h-[750px]">
          {/* Left Column: Conversations List */}
          <div className="md:col-span-4 border-r border-slate-200 flex flex-col bg-slate-50/50">
            <div className="p-4 border-b border-slate-200 bg-white">
              <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                {language === 'ne' ? 'च्याट सूची' : 'Conversations'}
              </h2>
            </div>

            <div className="overflow-y-auto flex-1 divide-y divide-slate-100">
              {Object.values(conversations).map((conv) => {
                const isSelected = selectedFriendId === conv.friend.id;
                return (
                  <button
                    key={conv.friend.id}
                    onClick={() => setSelectedFriendId(conv.friend.id)}
                    className={`w-full text-left p-4 flex items-start gap-3 transition-colors ${
                      isSelected
                        ? 'bg-blue-50/80 border-l-4 border-blue-600'
                        : 'hover:bg-slate-100/80'
                    }`}
                  >
                    <div className="relative shrink-0">
                      <img
                        src={conv.friend.avatar}
                        alt={conv.friend.name}
                        className="w-12 h-12 rounded-2xl border border-blue-200 bg-white object-cover"
                      />
                      {conv.friend.isOnline && (
                        <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white" />
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-bold text-slate-900 truncate flex items-center gap-1">
                          <span>{conv.friend.name}</span>
                          <span>{conv.friend.flag}</span>
                        </div>
                        <span className="text-[10px] text-slate-400 shrink-0 font-medium">
                          {conv.lastMessageTime}
                        </span>
                      </div>

                      <div className="text-[11px] text-slate-500 flex items-center gap-1 mt-0.5">
                        <span>{conv.friend.city}</span>
                      </div>

                      <p className="text-xs text-slate-600 truncate mt-1">
                        {conv.lastMessage}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Active Conversation */}
          <div className="md:col-span-8 flex flex-col bg-white h-[650px]">
            {/* Chat Header */}
            <div className="p-4 border-b border-slate-200 bg-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img
                    src={activeConversation.friend.avatar}
                    alt={activeConversation.friend.name}
                    className="w-10 h-10 rounded-xl border border-blue-200 bg-blue-50 object-cover"
                  />
                  {activeConversation.friend.isOnline && (
                    <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white" />
                  )}
                </div>
                <div>
                  <div className="flex items-center gap-1.5 font-bold text-slate-900 text-sm">
                    <span>{activeConversation.friend.name}</span>
                    <span>{activeConversation.friend.flag}</span>
                  </div>
                  <div className="text-[11px] text-slate-500 flex items-center gap-1.5">
                    <span>{activeConversation.friend.city}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-blue-600 font-medium">
                      {activeConversation.friend.nativeLanguage} ↔ {currentUser.nativeLanguage}
                    </span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  onNavigate('profile');
                }}
                className="text-xs font-semibold text-blue-600 hover:text-blue-800 bg-blue-50 px-3 py-1.5 rounded-lg transition-colors"
              >
                {t.viewProfileButton}
              </button>
            </div>

            {/* Messages Scroll Area */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 bg-slate-50/30">
              {/* Simulated Audio Note Demo Card */}
              <div className="bg-blue-50 border border-blue-200/80 rounded-2xl p-3 max-w-sm mx-auto text-center space-y-1.5">
                <div className="flex items-center justify-center gap-2 text-xs font-bold text-blue-900">
                  <Volume2 className="w-4 h-4 text-blue-600" />
                  <span>{t.audioVoiceNote}</span>
                </div>
                <div className="text-[11px] text-slate-600">
                  "नमस्ते साथी! मलाई नेपाली र विश्वभरका नयाँ साथीहरूसँग कुरा गर्न पाउँदा खुसी लागेको छ।"
                </div>
                <div className="flex items-center justify-center gap-1 pt-1">
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-1 rounded-full bg-blue-400 transition-all ${
                        isPlayingAudio ? 'animate-pulse' : ''
                      }`}
                      style={{ height: `${8 + ((i * 5) % 18)}px` }}
                    />
                  ))}
                </div>
              </div>

              {/* Chat Messages */}
              {activeConversation.messages.map((msg) => {
                const isMe = msg.senderId === currentUser.id;
                const isTranslated = !!translatedMsgIds[msg.id];
                const displayedText = isTranslated
                  ? language === 'ne' ? msg.text : msg.textNe
                  : language === 'ne' ? msg.textNe : msg.text;

                return (
                  <div
                    key={msg.id}
                    className={`flex flex-col ${isMe ? 'items-end' : 'items-start'}`}
                  >
                    <div className="flex items-center gap-1 text-[10px] text-slate-400 mb-1 px-1">
                      <span>{msg.senderName}</span>
                      <span aria-hidden="true">·</span>
                      <span>{msg.timestamp}</span>
                    </div>

                    <div
                      className={`max-w-[85%] sm:max-w-[70%] p-3.5 rounded-2xl text-xs sm:text-sm shadow-xs relative group ${
                        isMe
                          ? 'bg-blue-600 text-white rounded-tr-none'
                          : 'bg-white text-slate-800 border border-slate-200 rounded-tl-none'
                      }`}
                    >
                      <p className="leading-relaxed">{displayedText}</p>

                      {/* Translation Action */}
                      <div className="mt-2 pt-2 border-t border-slate-200/30 flex items-center justify-between text-[10px]">
                        <button
                          onClick={() => toggleTranslate(msg.id)}
                          className={`font-semibold flex items-center gap-1 transition-colors ${
                            isMe ? 'text-blue-100 hover:text-white' : 'text-blue-600 hover:text-blue-800'
                          }`}
                        >
                          <Languages className="w-3 h-3" />
                          <span>
                            {isTranslated
                              ? t.showOriginal
                              : language === 'ne' ? t.translateToEn : t.translateToNe}
                          </span>
                        </button>

                        {/* Quick reaction button */}
                        <div className="flex items-center gap-1 opacity-70 group-hover:opacity-100 transition-opacity">
                          {['❤️', '🙏', '🏔️', '👍'].map((emoji) => (
                            <button
                              key={emoji}
                              onClick={() => handleAddReaction(msg.id, emoji)}
                              className="hover:scale-125 transition-transform"
                            >
                              {emoji}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Displayed reactions */}
                      {msg.reactions.length > 0 && (
                        <div className="absolute -bottom-2.5 right-2 flex items-center gap-0.5 bg-white border border-slate-200 px-1.5 py-0.5 rounded-full shadow-xs text-[10px]">
                          {msg.reactions.map((r, idx) => (
                            <span key={idx}>{r}</span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}

              {/* Typing Indicator */}
              {isFriendTyping && (
                <div className="flex items-center gap-2 text-xs text-slate-500 italic bg-white border border-slate-200 px-3 py-2 rounded-2xl w-fit">
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-bounce" />
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-bounce [animation-delay:0.4s]" />
                  </div>
                  <span>{activeConversation.friend.name} {t.typingIndicator}</span>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Icebreaker Prompts Carousel */}
            <div className="px-4 py-2 border-t border-slate-100 bg-slate-50/80">
              <div className="text-[10px] font-semibold text-slate-400 mb-1.5 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-sky-500" />
                <span>{t.icebreakerTitle}</span>
              </div>
              <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
                {ICEBREAKER_PROMPTS.map((prompt, idx) => {
                  const text = language === 'ne' ? prompt.ne : prompt.en;
                  return (
                    <button
                      key={idx}
                      onClick={() => handleSendMessage(text)}
                      className="px-2.5 py-1 rounded-xl bg-white border border-blue-200 text-blue-700 hover:bg-blue-600 hover:text-white transition-all whitespace-nowrap shrink-0 shadow-2xs font-medium"
                    >
                      {text}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Message Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="p-3 sm:p-4 border-t border-slate-200 bg-white flex items-center gap-2"
            >
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder={t.typeMessagePlaceholder}
                className="flex-1 text-xs sm:text-sm px-4 py-2.5 border border-slate-300 rounded-2xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 bg-slate-50/50"
              />
              <button
                type="submit"
                disabled={!inputText.trim()}
                className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 disabled:opacity-40 text-white rounded-2xl text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-xs"
              >
                <Send className="w-4 h-4" />
                <span className="hidden sm:inline">{t.sendMessage}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
