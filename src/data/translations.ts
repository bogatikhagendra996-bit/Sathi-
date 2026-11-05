import { Language } from '../types';

export interface Translations {
  appName: string;
  appTagline: string;
  educationalDisclaimer: string;
  disclaimerDismiss: string;
  
  // Navigation
  navHome: string;
  navFindFriends: string;
  navChat: string;
  navProfile: string;
  navWelcome: string;
  navLogin: string;
  navRegister: string;
  navLogout: string;
  switchDemoUser: string;
  screenSelector: string;

  // Welcome Screen
  welcomeHeroTitle: string;
  welcomeHeroSubtitle: string;
  welcomeGetStarted: string;
  welcomeExploreFriends: string;
  welcomeQuickLogin: string;
  welcomePillar1Title: string;
  welcomePillar1Desc: string;
  welcomePillar2Title: string;
  welcomePillar2Desc: string;
  welcomePillar3Title: string;
  welcomePillar3Desc: string;
  welcomePillar4Title: string;
  welcomePillar4Desc: string;
  welcomeStatCountries: string;
  welcomeStatFriends: string;
  welcomeStatLanguages: string;
  welcomeBannerNotice: string;
  welcomeCommunityPreview: string;

  // Auth (Login & Register)
  loginTitle: string;
  loginSubtitle: string;
  emailLabel: string;
  passwordLabel: string;
  loginButton: string;
  quickDemoLoginTitle: string;
  noAccountPrompt: string;
  registerNow: string;
  registerTitle: string;
  registerSubtitle: string;
  fullNameLabel: string;
  usernameLabel: string;
  countryLabel: string;
  cityLabel: string;
  nativeLangLabel: string;
  learningLangLabel: string;
  interestsLabel: string;
  bioLabel: string;
  avatarLabel: string;
  registerButton: string;
  hasAccountPrompt: string;
  signInNow: string;

  // Home Screen
  greetingNamaste: string;
  homeSubtitle: string;
  culturalSpotlightTitle: string;
  culturalSpotlightDesc: string;
  suggestedFriendsTitle: string;
  viewAll: string;
  feedTitle: string;
  feedFilterAll: string;
  feedFilterDiaspora: string;
  feedFilterGlobal: string;
  feedFilterCulture: string;
  createPostPlaceholder: string;
  publishPost: string;
  translatePost: string;
  showOriginal: string;
  like: string;
  comment: string;
  share: string;
  connectButton: string;
  connectedStatus: string;
  requestSent: string;

  // Find Friends Screen
  findFriendsTitle: string;
  findFriendsSubtitle: string;
  searchPlaceholder: string;
  filterRegionAll: string;
  filterRegionNepal: string;
  filterRegionAsia: string;
  filterRegionAmericas: string;
  filterRegionEurope: string;
  filterRegionOceania: string;
  filterLanguage: string;
  filterInterest: string;
  waveButton: string;
  wavedToast: string;
  messageButton: string;
  viewProfileButton: string;
  mutualFriends: string;
  speaks: string;
  learning: string;
  interests: string;
  onlineNow: string;
  verifiedSathi: string;
  noFriendsFound: string;
  resetFilters: string;

  // Profile Screen
  profileTitle: string;
  editProfile: string;
  saveChanges: string;
  cancel: string;
  memberSince: string;
  statsFriends: string;
  statsExchanges: string;
  statsCountries: string;
  tabAbout: string;
  tabInterests: string;
  tabFriends: string;
  tabMoments: string;
  aboutMeTitle: string;
  culturalJourneyTitle: string;
  languagesTitle: string;
  nativeTongue: string;
  activelyLearning: string;
  viewFriendProfile: string;
  backToMyProfile: string;

  // Chat Demo Screen
  chatTitle: string;
  chatSubtitle: string;
  typeMessagePlaceholder: string;
  sendMessage: string;
  icebreakerTitle: string;
  translateToNe: string;
  translateToEn: string;
  playAudioNote: string;
  pauseAudioNote: string;
  typingIndicator: string;
  audioVoiceNote: string;
  selectConversationPrompt: string;
  online: string;
}

export const translations: Record<Language, Translations> = {
  en: {
    appName: "SATHI",
    appTagline: "Find Friends Worldwide",
    educationalDisclaimer: "Educational Prototype: Fictional sample profiles & simulated interactions only.",
    disclaimerDismiss: "Got it",

    // Navigation
    navHome: "Home",
    navFindFriends: "Find Friends",
    navChat: "Chat Demo",
    navProfile: "Profile",
    navWelcome: "Welcome",
    navLogin: "Login",
    navRegister: "Register",
    navLogout: "Sign Out",
    switchDemoUser: "Switch Demo Account",
    screenSelector: "Jump to Screen",

    // Welcome Screen
    welcomeHeroTitle: "Connecting Nepali Hearts & Global Friends",
    welcomeHeroSubtitle: "SATHI connects people worldwide for cultural exchange, language practice, travel companionship, and lifelong international friendships.",
    welcomeGetStarted: "Get Started Free",
    welcomeExploreFriends: "Explore Global Friends",
    welcomeQuickLogin: "Quick Demo Login",
    welcomePillar1Title: "Authentic Cultural Exchange",
    welcomePillar1Desc: "Share traditions, festivals like Dashain and Tihar, local Himalayan life, and global lifestyles.",
    welcomePillar2Title: "Bilingual Language Buddy",
    welcomePillar2Desc: "Practice Nepali, English, Japanese, German, and more with supportive native speakers.",
    welcomePillar3Title: "Trekking & Travel Pals",
    welcomePillar3Desc: "Find trusted local companions for Annapurna, Everest trails, or city exploration worldwide.",
    welcomePillar4Title: "Worldwide Nepali Diaspora",
    welcomePillar4Desc: "Stay closely connected with the global Nepali community living in over 90 countries.",
    welcomeStatCountries: "Countries Represented",
    welcomeStatFriends: "Sathi Connections Made",
    welcomeStatLanguages: "Languages Exchanged",
    welcomeBannerNotice: "Curated educational prototype designed with a clean blue & white palette, bilingual Nepali/English support, and realistic sample interactions.",
    welcomeCommunityPreview: "Meet Some of Our International Sathis",

    // Auth
    loginTitle: "Welcome Back to SATHI",
    loginSubtitle: "Sign in to connect with your global circle of friends.",
    emailLabel: "Email Address",
    passwordLabel: "Password",
    loginButton: "Sign In",
    quickDemoLoginTitle: "Instant 1-Click Demo Profiles",
    noAccountPrompt: "Don't have an account yet?",
    registerNow: "Create an account",
    registerTitle: "Join SATHI Community",
    registerSubtitle: "Start your global friendship journey in less than 2 minutes.",
    fullNameLabel: "Full Name",
    usernameLabel: "Username",
    countryLabel: "Country",
    cityLabel: "City",
    nativeLangLabel: "Native Language",
    learningLangLabel: "Languages You Want to Learn",
    interestsLabel: "Interests & Hobbies",
    bioLabel: "Short Bio",
    avatarLabel: "Select Your Avatar Style",
    registerButton: "Complete Registration",
    hasAccountPrompt: "Already have an account?",
    signInNow: "Sign in here",

    // Home Screen
    greetingNamaste: "Namaste",
    homeSubtitle: "Here is what's happening across your global circle today.",
    culturalSpotlightTitle: "Cultural Spotlight of the Day",
    culturalSpotlightDesc: "Did you know? In Nepal, 'Namaste' means 'I bow to the divine in you' with hands pressed in prayer position. It's warmth, respect, and hospitality combined.",
    suggestedFriendsTitle: "Suggested Sathis For You",
    viewAll: "View All",
    feedTitle: "Global Friendship Moments",
    feedFilterAll: "All Moments",
    feedFilterDiaspora: "Nepali Diaspora",
    feedFilterGlobal: "International Pals",
    feedFilterCulture: "Culture & Travel",
    createPostPlaceholder: "Share a cultural question, travel memory, or hello with the world...",
    publishPost: "Post Moment",
    translatePost: "Translate to Nepali",
    showOriginal: "Show Original",
    like: "Like",
    comment: "Comment",
    share: "Share",
    connectButton: "Add Sathi",
    connectedStatus: "Friends",
    requestSent: "Request Sent",

    // Find Friends Screen
    findFriendsTitle: "Discover International Friends",
    findFriendsSubtitle: "Browse fictional profiles from Nepal and around the globe. Filter by interests, languages, or regions.",
    searchPlaceholder: "Search by name, city, country, or interest (e.g. Trekking, Momo, Tech)...",
    filterRegionAll: "All Regions",
    filterRegionNepal: "Nepal 🇳🇵",
    filterRegionAsia: "Asia-Pacific 🌏",
    filterRegionAmericas: "Americas 🌎",
    filterRegionEurope: "Europe 🌍",
    filterRegionOceania: "Oceania 🦘",
    filterLanguage: "Spoken Language",
    filterInterest: "Interest",
    waveButton: "Wave 👋",
    wavedToast: "You waved to",
    messageButton: "Message",
    viewProfileButton: "View Profile",
    mutualFriends: "mutual friends",
    speaks: "Speaks",
    learning: "Learning",
    interests: "Interests",
    onlineNow: "Online",
    verifiedSathi: "Verified Sathi",
    noFriendsFound: "No friends match your current filters. Try resetting search or filters.",
    resetFilters: "Reset Filters",

    // Profile Screen
    profileTitle: "My Sathi Profile",
    editProfile: "Edit Profile",
    saveChanges: "Save Changes",
    cancel: "Cancel",
    memberSince: "Sathi Member Since",
    statsFriends: "Friends",
    statsExchanges: "Exchanges",
    statsCountries: "Countries",
    tabAbout: "About & Roots",
    tabInterests: "Interests & Hobbies",
    tabFriends: "Connected Sathis",
    tabMoments: "My Moments",
    aboutMeTitle: "About Me",
    culturalJourneyTitle: "Cultural & Travel Story",
    languagesTitle: "Languages & Exchange",
    nativeTongue: "Native Tongue",
    activelyLearning: "Actively Learning",
    viewFriendProfile: "Viewing Profile",
    backToMyProfile: "Back to My Profile",

    // Chat Demo Screen
    chatTitle: "Sathi Chat Demo",
    chatSubtitle: "Simulated bilingual messaging with smart icebreakers and instant translations.",
    typeMessagePlaceholder: "Type a friendly message in English or Nepali...",
    sendMessage: "Send",
    icebreakerTitle: "Try these friendly conversation starters:",
    translateToNe: "Translate to नेपाली",
    translateToEn: "Translate to English",
    playAudioNote: "Play Nepali Voice Note",
    pauseAudioNote: "Pause Voice Note",
    typingIndicator: "is typing a reply...",
    audioVoiceNote: "Voice Note (Nepali Greeting)",
    selectConversationPrompt: "Select a friend on the left to start chatting.",
    online: "Online"
  },
  ne: {
    appName: "साथी (SATHI)",
    appTagline: "संसारभर साथी खोज्नुहोस्",
    educationalDisclaimer: "शैक्षिक प्रोटोटाइप: नमुना प्रोफाइलहरू र नक्कली अन्तरक्रिया मात्र।",
    disclaimerDismiss: "बुझें",

    // Navigation
    navHome: "गृहपृष्ठ",
    navFindFriends: "साथी खोज्नुहोस्",
    navChat: "च्याट डेमो",
    navProfile: "मेरो प्रोफाइल",
    navWelcome: "स्वागतम्",
    navLogin: "लगइन",
    navRegister: "दर्ता हुनुहोस्",
    navLogout: "साइन आउट",
    switchDemoUser: "नमुना खाता बदल्नुहोस्",
    screenSelector: "स्क्रिन छान्नुहोस्",

    // Welcome Screen
    welcomeHeroTitle: "नेपाली मन र विश्वभरका साथीहरूलाई जोड्ने पुल",
    welcomeHeroSubtitle: "साथी (SATHI) ले संसारभरिका मानिसहरूलाई सांस्कृतिक आदानप्रदान, भाषा सिकाइ, यात्रा सहकार्य र दिगो मित्रताका लागि जोड्दछ।",
    welcomeGetStarted: "नि:शुल्क सुरु गर्नुहोस्",
    welcomeExploreFriends: "विश्वभरका साथीहरू हेर्नुहोस्",
    welcomeQuickLogin: "द्रुत नमुना लगइन",
    welcomePillar1Title: "मौलिक सांस्कृतिक आदानप्रदान",
    welcomePillar1Desc: "दसैं-तिहार, हिमालको जनजीवन, मौलिक परम्परा र विश्वव्यापी जीवनशैली साटासाट गर्नुहोस्।",
    welcomePillar2Title: "द्विभाषिक भाषा सिकाइ साथी",
    welcomePillar2Desc: "नेपाली, अंग्रेजी, जापानी, जर्मन आदि भाषाहरू मातृभाषी साथीहरूसँग अभ्यास गर्नुहोस्।",
    welcomePillar3Title: "पदयात्रा र घुमघाम साथी",
    welcomePillar3Desc: "अन्नपूर्ण, सगरमाथा वा संसारका जुनसुकै सहर घुम्नका लागि विश्वासिलो साथी भेट्नुहोस्।",
    welcomePillar4Title: "विश्वभरका नेपाली डायस्पोरा",
    welcomePillar4Desc: "संसारका ९० भन्दा बढी देशहरूमा रहेका नेपाली समुदायसँग नजिकबाट जोडिनुहोस्।",
    welcomeStatCountries: "सहभागी देशहरू",
    welcomeStatFriends: "जोडिएका साथीहरू",
    welcomeStatLanguages: "अभ्यास गरिएका भाषाहरू",
    welcomeBannerNotice: "नीलो र सेतो डिजाइन, नेपाली र अंग्रेजी भाषा समर्थन, र यथार्थपरक नमुना अनुभवसहितको शैक्षिक प्रोटोटाइप।",
    welcomeCommunityPreview: "हाम्रा केही अन्तर्राष्ट्रिय साथीहरूलाई भेट्नुहोस्",

    // Auth
    loginTitle: "साथी (SATHI) मा पुनः स्वागत छ",
    loginSubtitle: "आफ्ना विश्वभरका साथीहरूसँग जोडिन लगइन गर्नुहोस्।",
    emailLabel: "इमेल ठेगाना",
    passwordLabel: "पासवर्ड",
    loginButton: "लगइन गर्नुहोस्",
    quickDemoLoginTitle: "एक क्लिकमा नमुना प्रोफाइल लगइन",
    noAccountPrompt: "खाता छैन?",
    registerNow: "नयाँ खाता खोल्नुहोस्",
    registerTitle: "साथी समुदायमा जोडिनुहोस्",
    registerSubtitle: "२ मिनेट भन्दा कम समयमा विश्वव्यापी मित्रताको यात्रा सुरु गर्नुहोस्।",
    fullNameLabel: "पूरा नाम",
    usernameLabel: "प्रयोगकर्ता नाम",
    countryLabel: "देश",
    cityLabel: "सहर",
    nativeLangLabel: "मातृभाषा",
    learningLangLabel: "सिक्न चाहेको भाषा",
    interestsLabel: "रुचि र सोखहरू",
    bioLabel: "छोटो परिचय (बायो)",
    avatarLabel: "अवतार छान्नुहोस्",
    registerButton: "दर्ता सम्पन्न गर्नुहोस्",
    hasAccountPrompt: "पहिल्यै खाता छ?",
    signInNow: "यहाँ लगइन गर्नुहोस्",

    // Home Screen
    greetingNamaste: "नमस्ते",
    homeSubtitle: "आज तपाईंको विश्वव्यापी साथी सर्कलमा के भइरहेको छ हेर्नुहोस्।",
    culturalSpotlightTitle: "आजको सांस्कृतिक झलक",
    culturalSpotlightDesc: "के तपाईंलाई थाहा छ? नेपालमा 'नमस्ते' भन्नाले दुवै हत्केला जोडेर तपाईं भित्रको आत्मालाई सम्मान गरिन्छ। यो आत्मीयता र आतिथ्यको प्रतीक हो।",
    suggestedFriendsTitle: "तपाईंको लागि सिफारिस गरिएका साथीहरू",
    viewAll: "सबै हेर्नुहोस्",
    feedTitle: "विश्वव्यापी मित्रताका पलहरू",
    feedFilterAll: "सबै पलहरू",
    feedFilterDiaspora: "नेपाली डायस्पोरा",
    feedFilterGlobal: "अन्तर्राष्ट्रिय साथी",
    feedFilterCulture: "संस्कृति र यात्रा",
    createPostPlaceholder: "सांस्कृतिक जिज्ञासा, यात्राको सम्झना वा संसारलाई नमस्ते भन्नुहोस्...",
    publishPost: "पोस्ट गर्नुहोस्",
    translatePost: "अंग्रेजीमा अनुवाद गर्नुहोस्",
    showOriginal: "मूल भाषा हेर्नुहोस्",
    like: "मन पर्यो",
    comment: "प्रतिक्रिया",
    share: "साझा गर्नुहोस्",
    connectButton: "साथी बन्नुहोस्",
    connectedStatus: "साथी हुनुहुन्छ",
    requestSent: "अनुरोध पठाइयो",

    // Find Friends Screen
    findFriendsTitle: "अन्तर्राष्ट्रिय साथीहरू खोज्नुहोस्",
    findFriendsSubtitle: "नेपाल र संसारभरका नमुना प्रोफाइलहरू खोज्नुहोस्। रुचि, भाषा वा क्षेत्र अनुसार फिल्टर गर्नुहोस्।",
    searchPlaceholder: "नाम, सहर, देश वा रुचि अनुसार खोज्नुहोस् (उदा: ट्रेकिङ, मोमो, प्रविधि)...",
    filterRegionAll: "सबै क्षेत्र",
    filterRegionNepal: "नेपाल 🇳🇵",
    filterRegionAsia: "एसिया-प्रशान्त 🌏",
    filterRegionAmericas: "अमेरिका 🌎",
    filterRegionEurope: "युरोप 🌍",
    filterRegionOceania: "ओशिनिया 🦘",
    filterLanguage: "बोल्ने भाषा",
    filterInterest: "रुचि",
    waveButton: "हात हल्लाउनुहोस् 👋",
    wavedToast: "तपाईंले हात हल्लाउनुभयो:",
    messageButton: "सन्देश पठाउनुहोस्",
    viewProfileButton: "प्रोफाइल हेर्नुहोस्",
    mutualFriends: "साझा साथीहरू",
    speaks: "बोल्ने भाषा",
    learning: "सिक्दै गरेको",
    interests: "रुचिहरू",
    onlineNow: "अनलाइन",
    verifiedSathi: "प्रमाणित साथी",
    noFriendsFound: "छानिएका फिल्टर अनुसार कुनै साथी भेटिएन। कृपया पुनः प्रयास गर्नुहोस्।",
    resetFilters: "फिल्टर रिसेट गर्नुहोस्",

    // Profile Screen
    profileTitle: "मेरो साथी प्रोफाइल",
    editProfile: "प्रोफाइल सम्पादन",
    saveChanges: "परिवर्तन सुरक्षित गर्नुहोस्",
    cancel: "रद्द गर्नुहोस्",
    memberSince: "साथी सदस्य मिति",
    statsFriends: "साथीहरू",
    statsExchanges: "संवादहरू",
    statsCountries: "देशहरू",
    tabAbout: "परिचय र मूल",
    tabInterests: "रुचि र सोख",
    tabFriends: "जोडिएका साथीहरू",
    tabMoments: "मेरा पलहरू",
    aboutMeTitle: "मेरो बारेमा",
    culturalJourneyTitle: "सांस्कृतिक तथा यात्रा कथा",
    languagesTitle: "भाषा र आदानप्रदान",
    nativeTongue: "मातृभाषा",
    activelyLearning: "सिक्दै गरेको भाषा",
    viewFriendProfile: "प्रोफाइल अवलोकन",
    backToMyProfile: "मेरो प्रोफाइलमा फर्कनुहोस्",

    // Chat Demo Screen
    chatTitle: "साथी च्याट डेमो",
    chatSubtitle: "स्मार्ट संवाद सुरुवातकर्ता र तत्काल अनुवादसहितको द्विभाषिक नमुना च्याट।",
    typeMessagePlaceholder: "नेपाली वा अंग्रेजीमा सन्देश लेख्नुहोस्...",
    sendMessage: "पठाउनुहोस्",
    icebreakerTitle: "कुराकानी सुरु गर्न यी वाक्यांशहरू प्रयोग गर्न सक्नुहुन्छ:",
    translateToNe: "नेपालीमा अनुवाद गर्नुहोस्",
    translateToEn: "अंग्रेजीमा अनुवाद गर्नुहोस्",
    playAudioNote: "नेपाली अडियो सुन्नुहोस्",
    pauseAudioNote: "अडियो रोक्नुहोस्",
    typingIndicator: "सन्देश टाइप गर्दै हुनुहुन्छ...",
    audioVoiceNote: "आवाज सन्देश (नेपाली अभिवादन)",
    selectConversationPrompt: "च्याट गर्न बायाँतर्फबाट साथी छान्नुहोस्।",
    online: "अनलाइन"
  }
};
