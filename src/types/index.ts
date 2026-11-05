export type Screen = 'welcome' | 'login' | 'register' | 'home' | 'find-friends' | 'profile' | 'chat';

export type Language = 'en' | 'ne';

export interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  avatar: string;
  coverImage?: string;
  country: string;
  city: string;
  countryCode: string;
  flag: string;
  nativeLanguage: string;
  spokenLanguages: string[];
  learningLanguages: string[];
  interests: string[];
  bio: string;
  bioNe?: string;
  culturalStory?: string;
  memberSince: string;
  verified: boolean;
  isOnline: boolean;
  stats: {
    friendsCount: number;
    culturalExchanges: number;
    countriesConnected: number;
  };
}

export interface Post {
  id: string;
  authorId: string;
  authorName: string;
  authorAvatar: string;
  authorLocation: string;
  authorFlag: string;
  timeAgo: string;
  timeAgoNe: string;
  content: string;
  contentNe: string;
  image?: string;
  likes: number;
  isLiked?: boolean;
  commentsCount: number;
  tags: string[];
}

export interface ChatMessage {
  id: string;
  senderId: string;
  senderName: string;
  text: string;
  textNe: string;
  timestamp: string;
  isTranslated?: boolean;
  reactions: string[];
  isAudio?: boolean;
  audioDuration?: string;
}

export interface Conversation {
  id: string;
  friend: User;
  messages: ChatMessage[];
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
}
