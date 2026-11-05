import { User, Post, Conversation } from '../types';

export const HERO_IMAGE = '/src/assets/images/sathi_hero_banner_1793850574072.jpg';
export const COMMUNITY_MOMENT_IMAGE = '/src/assets/images/sathi_community_moment_1793850574793.jpg';
export const HIMALAYAN_TREK_IMAGE = '/src/assets/images/sathi_himalayan_trek_1793850574586.jpg';

export const MOCK_USERS: User[] = [
  {
    id: 'user-aarav',
    name: 'Aarav Sharma',
    username: 'aarav_ktm',
    email: 'aarav.sharma@example.com',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav&backgroundColor=dbeafe',
    coverImage: HIMALAYAN_TREK_IMAGE,
    country: 'Nepal',
    city: 'Kathmandu',
    countryCode: 'NP',
    flag: '🇳🇵',
    nativeLanguage: 'Nepali',
    spokenLanguages: ['Nepali', 'English', 'Hindi'],
    learningLanguages: ['Japanese', 'German'],
    interests: ['Himalayan Trekking', 'Tea Culture', 'Tech & Coding', 'Nepali Momos', 'Photography'],
    bio: 'Software engineer from Kathmandu who loves introducing travelers to authentic Nepali culture and trekking Annapurna trails.',
    bioNe: 'काठमाडौंका सफ्टवेयर इन्जिनियर, जसलाई विदेशी साथीहरूलाई मौलिक नेपाली संस्कृति चिनाउन र अन्नपूर्ण पदयात्रा गर्न मनपर्छ।',
    culturalStory: 'Grew up near Patan Durbar Square hearing Sarangi music every evening. Passionate about sharing genuine Nepali warmth and learning about global cultures.',
    memberSince: 'March 2024',
    verified: true,
    isOnline: true,
    stats: {
      friendsCount: 42,
      culturalExchanges: 19,
      countriesConnected: 14
    }
  },
  {
    id: 'user-maya',
    name: 'Maya Sherpa',
    username: 'maya_sydney',
    email: 'maya.sherpa@example.com',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Maya&backgroundColor=e0f2fe',
    coverImage: COMMUNITY_MOMENT_IMAGE,
    country: 'Australia',
    city: 'Sydney (from Solukhumbu)',
    countryCode: 'AU',
    flag: '🇦🇺',
    nativeLanguage: 'Nepali / Sherpa',
    spokenLanguages: ['Nepali', 'English', 'Sherpa'],
    learningLanguages: ['French', 'Spanish'],
    interests: ['Environmental Science', 'Hiking', 'Himalayan Folk Music', 'Coffee & Cafes', 'Photography'],
    bio: 'Proud Himalayan roots in Pokhara & Everest region, currently studying Environmental Science in Sydney. Love connecting with fellow diaspora & global travelers!',
    bioNe: 'सगरमाथाको काख सोलुखुम्बुमा हुर्किएकी, हाल सिड्नीमा वातावरण विज्ञान पढ्दै। विश्वभरका साथीहरूसँग जोडिन उत्सुक!',
    culturalStory: 'Balancing life between Bondi Beach and Everest base memories. I love organizing Nepali student cultural fests in Australia.',
    memberSince: 'January 2024',
    verified: true,
    isOnline: true,
    stats: {
      friendsCount: 68,
      culturalExchanges: 28,
      countriesConnected: 18
    }
  },
  {
    id: 'user-sophia',
    name: 'Sophia Chen',
    username: 'sophia_van',
    email: 'sophia.chen@example.com',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sophia&backgroundColor=fef3c7',
    coverImage: HERO_IMAGE,
    country: 'Canada',
    city: 'Vancouver',
    countryCode: 'CA',
    flag: '🇨🇦',
    nativeLanguage: 'English',
    spokenLanguages: ['English', 'Mandarin'],
    learningLanguages: ['Nepali', 'Hindi'],
    interests: ['Trekking & Outdoors', 'Ceramics', 'Traditional Cuisine', 'Travel Blogging', 'Yoga & Meditation'],
    bio: 'Product designer based in Vancouver. Planning my dream trek to Langtang & Annapurna next autumn! Practicing spoken Nepali daily.',
    bioNe: 'भ्यानकुभरकी उत्पादन डिजाइनर। अर्को शरद ऋतुमा लाङटाङ र अन्नपूर्ण पदयात्रा गर्ने योजनामा छु! दैनिक नेपाली भाषा सिक्दैछु।',
    culturalStory: 'Fell in love with Nepali woodwork and Thangka art during a university art history class. Can not wait to visit Kathmandu Valley.',
    memberSince: 'April 2024',
    verified: true,
    isOnline: true,
    stats: {
      friendsCount: 35,
      culturalExchanges: 15,
      countriesConnected: 11
    }
  },
  {
    id: 'user-kenji',
    name: 'Kenji Takahashi',
    username: 'kenji_tokyo',
    email: 'kenji.takahashi@example.com',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kenji&backgroundColor=dcfce7',
    coverImage: COMMUNITY_MOMENT_IMAGE,
    country: 'Japan',
    city: 'Tokyo',
    countryCode: 'JP',
    flag: '🇯🇵',
    nativeLanguage: 'Japanese',
    spokenLanguages: ['Japanese', 'English'],
    learningLanguages: ['Nepali'],
    interests: ['Sarangi Folk Music', 'Green Tea & Masala Chia', 'Cycling', 'Indie Game Dev', 'Wood Carving'],
    bio: 'Sound designer & musician in Tokyo. Visited Bhaktapur in 2023 and learned to play Sarangi. Looking for friends to exchange music & Nepali language.',
    bioNe: 'टोकियोका संगीतकार र साउन्ड डिजाइनर। सन् २०२३ मा भक्तपुर घुम्दा सारङ्गी बजाउन सिकें। संगीत र भाषा साटासाट गर्न चाहन्छु।',
    culturalStory: 'There is a deep spiritual and aesthetic bond between Japanese Zen gardens and Newari courtyards. I cherish our shared respect for nature.',
    memberSince: 'February 2024',
    verified: true,
    isOnline: false,
    stats: {
      friendsCount: 29,
      culturalExchanges: 12,
      countriesConnected: 9
    }
  },
  {
    id: 'user-elena',
    name: 'Elena Schmidt',
    username: 'elena_munich',
    email: 'elena.schmidt@example.com',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Elena&backgroundColor=fce7f3',
    coverImage: HIMALAYAN_TREK_IMAGE,
    country: 'Germany',
    city: 'Munich',
    countryCode: 'DE',
    flag: '🇩🇪',
    nativeLanguage: 'German',
    spokenLanguages: ['German', 'English'],
    learningLanguages: ['Nepali', 'Tibetan'],
    interests: ['Alpine Climbing', 'Linguistics', 'Buddhism & Philosophy', 'Organic Gardening', 'Trail Running'],
    bio: 'Alpinist from Bavaria studying Himalayan linguistic dialects. Passionate about mountaineering safety and cultural preservation.',
    bioNe: 'म्युनिखकी हिमाल आरोही र भाषाविद्। हिमाली भाषाका भाषिका र पर्वतीय सुरक्षाको अनुसन्धान गर्दै।',
    culturalStory: 'Comparing the Bavarian Alps with the towering Himalayas. Respecting the local communities who make mountaineering possible.',
    memberSince: 'May 2024',
    verified: true,
    isOnline: true,
    stats: {
      friendsCount: 51,
      culturalExchanges: 22,
      countriesConnected: 16
    }
  },
  {
    id: 'user-liam',
    name: 'Liam O\'Connor',
    username: 'liam_dublin',
    email: 'liam.oconnor@example.com',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Liam&backgroundColor=fef9c3',
    coverImage: COMMUNITY_MOMENT_IMAGE,
    country: 'Ireland',
    city: 'Dublin',
    countryCode: 'IE',
    flag: '🇮🇪',
    nativeLanguage: 'English',
    spokenLanguages: ['English', 'Irish'],
    learningLanguages: ['Nepali'],
    interests: ['Storytelling & Folklore', 'Acoustic Guitar', 'Documentary Films', 'Spicy Food', 'History'],
    bio: 'Dublin-based writer exploring folk mythologies across the globe. Amazed by the rich festivals of Indra Jatra and Dashain.',
    bioNe: 'डब्लिनका लेखक, जसलाई विश्वका लोककथा र चाडपर्वहरू मनपर्छ। इन्द्रजात्रा र दसैंको रौनक देखेर मोहित भएको छु।',
    culturalStory: 'Celtic mythology shares surprising storytelling warmth with Nepali folklore. Happy to share Irish stories in exchange for Himalayan tales.',
    memberSince: 'June 2024',
    verified: false,
    isOnline: false,
    stats: {
      friendsCount: 19,
      culturalExchanges: 8,
      countriesConnected: 7
    }
  },
  {
    id: 'user-pooja',
    name: 'Pooja Thapa',
    username: 'pooja_london',
    email: 'pooja.thapa@example.com',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Pooja&backgroundColor=ede9fe',
    coverImage: HERO_IMAGE,
    country: 'United Kingdom',
    city: 'London',
    countryCode: 'GB',
    flag: '🇬🇧',
    nativeLanguage: 'Nepali',
    spokenLanguages: ['Nepali', 'English'],
    learningLanguages: ['Spanish'],
    interests: ['Public Health', 'Nepali Classical Dance', 'Baking', 'Museum Walks', 'Community Volunteering'],
    bio: 'Public health researcher in London, originally from Pokhara. Active in youth mentorship and cultural workshops in the UK.',
    bioNe: 'लन्डनमा जनस्वास्थ्य अनुसन्धानकर्ता, पोखरा घर। बेलायतमा नेपाली युवाहरूलाई मार्गदर्शन र सांस्कृतिक कार्यशाला सञ्चालन गर्दै।',
    culturalStory: 'Proud to host Tihar celebration gatherings in London with hand-made Sel Roti and Diyo lamps every year.',
    memberSince: 'February 2024',
    verified: true,
    isOnline: true,
    stats: {
      friendsCount: 77,
      culturalExchanges: 34,
      countriesConnected: 21
    }
  },
  {
    id: 'user-anjali',
    name: 'Anjali Gurung',
    username: 'anjali_pokhara',
    email: 'anjali.gurung@example.com',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Anjali&backgroundColor=ccfbf1',
    coverImage: HIMALAYAN_TREK_IMAGE,
    country: 'Nepal',
    city: 'Pokhara',
    countryCode: 'NP',
    flag: '🇳🇵',
    nativeLanguage: 'Nepali',
    spokenLanguages: ['Nepali', 'Gurung', 'English'],
    learningLanguages: ['Korean', 'Japanese'],
    interests: ['Paragliding', 'Phewa Lake Kayaking', 'Gurung Culture', 'Organic Farming', 'Photography'],
    bio: 'Certified paragliding pilot and cultural host in lakeside Pokhara. Excited to welcome global friends to the gateway of Annapurna!',
    bioNe: 'पोखराकी प्याराग्लाइडिङ पाइलट र सांस्कृतिक सहजकर्ता। विश्वभरका साथीहरूलाई सुन्दर पोखरामा स्वागत गर्न पाउँदा खुसी लाग्छ!',
    culturalStory: 'Living under Machhapuchhre (Fishtail peak) reminds me every day how small we are and how connected humanity can be.',
    memberSince: 'March 2024',
    verified: true,
    isOnline: true,
    stats: {
      friendsCount: 85,
      culturalExchanges: 40,
      countriesConnected: 23
    }
  }
];

export const MOCK_POSTS: Post[] = [
  {
    id: 'post-1',
    authorId: 'user-anjali',
    authorName: 'Anjali Gurung',
    authorAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Anjali&backgroundColor=ccfbf1',
    authorLocation: 'Pokhara, Nepal',
    authorFlag: '🇳🇵',
    timeAgo: '2 hours ago',
    timeAgoNe: '२ घण्टा अघि',
    content: 'Crisp morning flight over Sarangkot today with a panoramic view of Dhaulagiri and Annapurna! For international friends planning a trek this season, the weather is crystal clear. Always remember to stay hydrated and acclimatize properly. Namaste to all our SATHI family!',
    contentNe: 'आज बिहान सराङकोटबाट धौलागिरि र अन्नपूर्णको सुन्दर दृश्यसहित उडान भरियो! यस सिजनमा पदयात्रा गर्ने सोचमा हुनुहुने अन्तर्राष्ट्रिय साथीहरूका लागि मौसम एकदमै सफा छ। प्रशस्त पानी पिउन र लेक लाग्नबाट जोगिन ध्यान दिनुहोला। साथी परिवारलाई नमस्ते!',
    image: HIMALAYAN_TREK_IMAGE,
    likes: 48,
    commentsCount: 9,
    tags: ['Trekking', 'Himalayas', 'Pokhara', 'TravelGuide']
  },
  {
    id: 'post-2',
    authorId: 'user-maya',
    authorName: 'Maya Sherpa',
    authorAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Maya&backgroundColor=e0f2fe',
    authorLocation: 'Sydney, Australia',
    authorFlag: '🇦🇺',
    timeAgo: '5 hours ago',
    timeAgoNe: '५ घण्टा अघि',
    content: 'We organized our first Nepali Momo & Language night at UNSW Sydney! Over 35 students from Canada, Japan, Australia, and Nepal joined to fold momos and learn phrases like "Khana khanu bhayo?" (Have you eaten?). Food and smiles break every border.',
    contentNe: 'हामीले युएनएसडब्लु सिड्नीमा पहिलो पटक नेपाली मोमो र भाषा आदानप्रदान साँझ आयोजना गर्यौं! क्यानाडा, जापान, अस्ट्रेलिया र नेपालका ३५ भन्दा बढी साथीहरू भेला भएर मोमो बनाउन र "खाना खानुभयो?" जस्ता वाक्यहरू सिक्नुभयो। खाना र मुस्कानले सबै सिमाना जोड्छ।',
    image: COMMUNITY_MOMENT_IMAGE,
    likes: 62,
    commentsCount: 14,
    tags: ['NepaliFood', 'CulturalExchange', 'SydneyDiaspora', 'MomoLove']
  },
  {
    id: 'post-3',
    authorId: 'user-sophia',
    authorName: 'Sophia Chen',
    authorAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sophia&backgroundColor=fef3c7',
    authorLocation: 'Vancouver, Canada',
    authorFlag: '🇨🇦',
    timeAgo: '1 day ago',
    timeAgoNe: '१ दिन अघि',
    content: 'Day 30 of learning Nepali on SATHI! Today my language buddy Aarav taught me the difference between "Dhanyabaad" (Thank you) and "Swagatam" (Welcome). Still struggling with the tricky "Ta" vs "Tha" pronunciation, but loving the warmth of the language!',
    contentNe: 'साथी (SATHI) मा नेपाली भाषा सिकेको ३०औं दिन! आज मेरो साथी आरभले मलाई "धन्यवाद" र "स्वागतम्" को फरक सिकाउनुभयो। "त" र "थ" को उच्चारण अलि गाह्रो छ, तर यो भाषाको मिठास मलाई साह्रै मनपर्छ!',
    likes: 39,
    commentsCount: 7,
    tags: ['LanguageLearning', 'NepaliPhrases', 'CulturalBridge']
  }
];

export const MOCK_CONVERSATIONS: Record<string, Conversation> = {
  'user-maya': {
    id: 'conv-maya',
    friend: MOCK_USERS[1],
    lastMessage: 'Let us plan a video call this Sunday to talk about the Pokhara water project!',
    lastMessageTime: '12:45 PM',
    unreadCount: 1,
    messages: [
      {
        id: 'm1',
        senderId: 'user-maya',
        senderName: 'Maya Sherpa',
        text: 'Namaste Aarav! How is Kathmandu weather today?',
        textNe: 'नमस्ते आरभ! आज काठमाडौंको मौसम कस्तो छ?',
        timestamp: '10:14 AM',
        reactions: ['🙏']
      },
      {
        id: 'm2',
        senderId: 'user-aarav',
        senderName: 'Aarav Sharma',
        text: 'Namaste Maya! The sky is remarkably blue today. You can see the Ganesh Himal ridge clearly from my rooftop.',
        textNe: 'नमस्ते माया! आज आकाश एकदमै नीलो छ। मेरो कौसीबाट गणेश हिमाल प्रष्ट देखिन्छ।',
        timestamp: '10:18 AM',
        reactions: ['🏔️']
      },
      {
        id: 'm3',
        senderId: 'user-maya',
        senderName: 'Maya Sherpa',
        text: 'That sounds breathtaking! We are hosting a fundraiser in Sydney for eco-trails in Solukhumbu.',
        textNe: 'साह्रै रमाइलो! हामी सिड्नीमा सोलुखुम्बुका वातावरणमैत्री पदमार्गका लागि सहयोग जुटाउने कार्यक्रम गर्दैछौं।',
        timestamp: '10:22 AM',
        reactions: ['❤️']
      },
      {
        id: 'm4',
        senderId: 'user-aarav',
        senderName: 'Aarav Sharma',
        text: 'Proud of what you are doing in Australia! Let me know if you need any drone footage or heritage maps from here.',
        textNe: 'अस्ट्रेलियामा तपाईंले गरिरहनुभएको काम सराहनीय छ! यहाँबाट ड्रोन भिडियो वा नक्सा चाहिएमा भन्नुहोला।',
        timestamp: '10:26 AM',
        reactions: ['👍']
      },
      {
        id: 'm5',
        senderId: 'user-maya',
        senderName: 'Maya Sherpa',
        text: 'Let us plan a video call this Sunday to talk about the Pokhara water project!',
        textNe: 'आउने आइतबार पोखराको पानी परियोजना बारे कुरा गर्न भिडियो कलको समय मिलाऔं है!',
        timestamp: '12:45 PM',
        reactions: []
      }
    ]
  },
  'user-sophia': {
    id: 'conv-sophia',
    friend: MOCK_USERS[2],
    lastMessage: 'Dhanyabaad Aarav! That tip about Dal Bhat giving 24-hour power made me laugh.',
    lastMessageTime: 'Yesterday',
    unreadCount: 0,
    messages: [
      {
        id: 'm-s1',
        senderId: 'user-sophia',
        senderName: 'Sophia Chen',
        text: 'Hi Aarav! Quick question: is it customary to remove shoes when entering a Nepali home or tea house?',
        textNe: 'नमस्ते आरभ! एउटा छोटो जिज्ञासा: नेपालीको घर वा चिया पसलमा पस्दा जुत्ता खोल्ने चलन छ?',
        timestamp: 'Yesterday 3:10 PM',
        reactions: []
      },
      {
        id: 'm-s2',
        senderId: 'user-aarav',
        senderName: 'Aarav Sharma',
        text: 'Yes Sophia! In homes and temples, taking off your shoes shows cleanliness and deep respect. At trekking tea houses, slippers are usually provided inside dining halls.',
        textNe: 'हो सोफिया! घर र मन्दिरमा जुत्ता खोल्नु सफाइ र सम्मानको प्रतीक हो। पदयात्राका चिया पसलहरूमा खान खाने ठाउँभित्र प्रायः चप्पल लगाइन्छ।',
        timestamp: 'Yesterday 3:15 PM',
        reactions: ['🙏', '❤️']
      },
      {
        id: 'm-s3',
        senderId: 'user-sophia',
        senderName: 'Sophia Chen',
        text: 'Dhanyabaad Aarav! That tip about Dal Bhat giving 24-hour power made me laugh.',
        textNe: 'धन्यवाद आरभ! दाल भातले २४ घण्टा शक्ति दिन्छ भन्ने कुराले मलाई खुसी बनायो।',
        timestamp: 'Yesterday 3:20 PM',
        reactions: ['😊']
      }
    ]
  },
  'user-kenji': {
    id: 'conv-kenji',
    friend: MOCK_USERS[3],
    lastMessage: 'I practiced the Resham Firiri tune on my Sarangi today!',
    lastMessageTime: '2 days ago',
    unreadCount: 0,
    messages: [
      {
        id: 'm-k1',
        senderId: 'user-kenji',
        senderName: 'Kenji Takahashi',
        text: 'Kasto chha Aarav-san? (Hope my Nepali is accurate!)',
        textNe: 'कस्तो छ आरभ-सान? (आशा छ मेरो नेपाली ठीक छ!)',
        timestamp: '2 days ago',
        reactions: ['😊']
      },
      {
        id: 'm-k2',
        senderId: 'user-aarav',
        senderName: 'Aarav Sharma',
        text: 'Sanchai chha Kenji! Perfect phrasing. How is your Sarangi practice coming along in Tokyo?',
        textNe: 'सञ्चै छ केन्जी! एकदमै राम्रो भन्नुभयो। टोकियोमा सारङ्गीको अभ्यास कस्तो हुँदैछ?',
        timestamp: '2 days ago',
        reactions: ['🎶']
      },
      {
        id: 'm-k3',
        senderId: 'user-kenji',
        senderName: 'Kenji Takahashi',
        text: 'I practiced the Resham Firiri tune on my Sarangi today!',
        textNe: 'मैले आज मेरो सारङ्गीमा "रेशम फिरिरी" को धुन अभ्यास गरें!',
        timestamp: '2 days ago',
        reactions: ['❤️', '👏']
      }
    ]
  }
};

export const ICEBREAKER_PROMPTS = [
  {
    en: "Namaste! How do you say 'How are you?' and 'I am fine' in Nepali?",
    ne: "नमस्ते! नेपालीमा 'तपाईंलाई कस्तो छ?' र 'मलाई सञ्चै छ' कसरी भन्ने?"
  },
  {
    en: "What is your favorite traditional festival in your country?",
    ne: "तपाईंको देशमा सबैभन्दा मनपर्ने मौलिक चाड कुन हो?"
  },
  {
    en: "What are the top 3 spots a first-time traveler to Nepal should visit?",
    ne: "पहिलो पटक नेपाल घुम्न आउने मानिसले जानैपर्ने ३ ठाउँ कुन-कुन हुन्?"
  },
  {
    en: "Can you share the secret to making delicious authentic Nepali momos?",
    ne: "के तपाईं स्वादिष्ट मौलिक नेपाली मोमो बनाउने तरिका सिकाउन सक्नुहुन्छ?"
  }
];
