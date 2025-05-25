export interface MissingChild {
  id: number;
  name: {
    english: string;
    hindi: string;
    kannada: string;
  };
  age: number;
  gender: {
    english: string;
    hindi: string;
    kannada: string;
  };
  location: {
    english: string;
    hindi: string;
    kannada: string;
  };
  coordinates: {
    lat: number;
    lng: number;
  };
  date: {
    english: string;
    hindi: string;
    kannada: string;
  };
  description: {
    english: string;
    hindi: string;
    kannada: string;
  };
  image: string;
  contactName?: string;
  contactPhone?: string;
  contactRelation?: string;
  status: "active" | "found" | "resolved";
}

// Extended list of missing children data
export const missingChildrenData: MissingChild[] = [
  {
    id: 1,
    name: {
      english: "Aarav Sharma",
      hindi: "आरव शर्मा",
      kannada: "ಆರವ್ ಶರ್ಮಾ"
    },
    age: 7,
    gender: {
      english: "Male",
      hindi: "पुरुष",
      kannada: "ಪುರುಷ"
    },
    location: {
      english: "Near Gandhi Park, Delhi",
      hindi: "गांधी पार्क के पास, दिल्ली",
      kannada: "ಗಾಂಧಿ ಪಾರ್ಕ್ ಬಳಿ, ದೆಹಲಿ"
    },
    coordinates: { lat: 28.6139, lng: 77.2090 },
    date: {
      english: "May 19, 2025",
      hindi: "19 मई, 2025",
      kannada: "19 ಮೇ, 2025"
    },
    description: {
      english: "Last seen wearing a blue t-shirt and black shorts. Has a small scar on his right cheek.",
      hindi: "आखिरी बार नीले टी-शर्ट और काले शॉर्ट्स में देखा गया था। दाहिने गाल पर एक छोटा निशान है।",
      kannada: "ಕೊನೆಯದಾಗಿ ನೀಲಿ ಟೀ-ಶರ್ಟ್ ಮತ್ತು ಕಪ್ಪು ಶಾರ್ಟ್ಸ್ ಧರಿಸಿ ಕಾಣಿಸಿಕೊಂಡಿದ್ದಾರೆ. ಬಲ ಕೆನ್ನೆಯ ಮೇಲೆ ಸಣ್ಣ ಗುರುತು ಇದೆ."
    },
    image: "https://img.freepik.com/premium-photo/young-kid-with-indian-features-who-appears-be-shocked_731930-167270.jpg",
    status: "active"
  },
  {
    id: 2,
    name: {
      english: "Priya Patel",
      hindi: "प्रिया पटेल",
      kannada: "ಪ್ರಿಯಾ ಪಟೇಲ್"
    },
    age: 9,
    gender: {
      english: "Female",
      hindi: "महिला",
      kannada: "ಹೆಣ್ಣು"
    },
    location: {
      english: "Sarojini Market, New Delhi",
      hindi: "सरोजिनी मार्केट, नई दिल्ली",
      kannada: "ಸರೋಜಿನಿ ಮಾರ್ಕೆಟ್, ನವ ದೆಹಲಿ"
    },
    coordinates: { lat: 28.5733, lng: 77.1910 },
    date: {
      english: "May 18, 2025",
      hindi: "18 मई, 2025",
      kannada: "18 ಮೇ, 2025"
    },
    description: {
      english: "Was wearing a pink dress with white flowers. Carries a small purple backpack.",
      hindi: "सफेद फूलों के साथ गुलाबी ड्रेस पहने थी। एक छोटा बैंगनी बैकपैक लेकर चलती है।",
      kannada: "ಬಿಳಿ ಹೂವುಗಳ ಜೊತೆ ಗುಲಾಬಿ ಡ್ರೆಸ್ ಧರಿಸಿದ್ದರು. ಸಣ್ಣ ನೇರಳೆ ಬ್ಯಾಕ್‌ಪ್ಯಾಕ್ ಹೊತ್ತಿರುತ್ತಾರೆ."
    },
    image: "https://th.bing.com/th/id/OIP.CAXZUbttCgTnM9bseud9awHaE7?w=244&h=180&c=7&r=0&o=7&cb=iwp2&dpr=1.3&pid=1.7&rm=3",
    status: "active"
  },
  {
    id: 3,
    name: {
      english: "Rahul Kumar",
      hindi: "राहुल कुमार",
      kannada: "ರಾಹುಲ್ ಕುಮಾರ್"
    },
    age: 11,
    gender: {
      english: "Male",
      hindi: "पुरुष",
      kannada: "ಪುರುಷ"
    },
    location: {
      english: "Central Park, Jaipur",
      hindi: "सेंट्रल पार्क, जयपुर",
      kannada: "ಸೆಂಟ್ರಲ್ ಪಾರ್ಕ್, ಜೈಪುರ"
    },
    coordinates: { lat: 26.8574, lng: 75.8073 },
    date: {
      english: "May 17, 2025",
      hindi: "17 मई, 2025",
      kannada: "17 ಮೇ, 2025"
    },
    description: {
      english: "Was wearing a school uniform (white shirt, navy blue pants). Has a birthmark on his left arm.",
      hindi: "स्कूल यूनिफॉर्म (सफेद शर्ट, नेवी ब्लू पैंट) पहने थे। बाएं हाथ पर जन्म चिन्ह है।",
      kannada: "ಶಾಲಾ ಸಮವಸ್ತ್ರ ಧರಿಸಿದ್ದರು (ಬಿಳಿ ಶರ್ಟ್, ನೇವಿ ಬ್ಲೂ ಪ್ಯಾಂಟ್). ಎಡ ತೋಳಿನ ಮೇಲೆ ಜನ್ಮ ಚಿಹ್ನೆ ಇದೆ."
    },
    image: "https://th.bing.com/th/id/OIP.H3zlochaP7_YskhcPF33FQHaJl?cb=iwp2&pid=ImgDet&w=184&h=237&c=7&dpr=1.3",
    status: "active"
  },
  {
    id: 4,
    name: {
      english: "Kavya Reddy",
      hindi: "काव्या रेड्डी",
      kannada: "ಕಾವ್ಯ ರೆಡ್ಡಿ"
    },
    age: 8,
    gender: {
      english: "Female",
      hindi: "महिला",
      kannada: "ಹೆಣ್ಣು"
    },
    location: {
      english: "City Market, Bangalore",
      hindi: "सिटी मार्केट, बैंगलोर",
      kannada: "ಸಿಟಿ ಮಾರ್ಕೆಟ್, ಬೆಂಗಳೂರು"
    },
    coordinates: { lat: 12.9716, lng: 77.5946 },
    date: {
      english: "May 21, 2025",
      hindi: "21 मई, 2025",
      kannada: "21 ಮೇ, 2025"
    },
    description: {
      english: "Last seen wearing a yellow dress with a white cardigan. Has long braided hair with red ribbons.",
      hindi: "आखिरी बार पीली ड्रेस और सफेद कार्डिगन पहने देखी गई थी। लंबे गुंथे हुए बाल, लाल रिबन के साथ।",
      kannada: "ಕೊನೆಯದಾಗಿ ಹಳದಿ ಬಣ್ಣದ ಉಡುಪು ಮತ್ತು ಬಿಳಿ ಕಾರ್ಡಿಗನ್ ಧರಿಸಿದ್ದರು. ಕೆಂಪು ರಿಬ್ಬನ್‌ಗಳೊಂದಿಗೆ ಉದ್ದನೆಯ ಜಡೆಯ ಕೂದಲು."
    },
    image: "https://th.bing.com/th/id/OIP.MGxD0XpqEY3LrflPwycRVQHaE8?w=265&h=180&c=7&r=0&o=7&cb=iwp2&dpr=1.3&pid=1.7&rm=3",
    status: "active"
  },
  {
    id: 5,
    name: {
      english: "Vikram Singh",
      hindi: "विक्रम सिंह",
      kannada: "ವಿಕ್ರಮ್ ಸಿಂಗ್"
    },
    age: 13,
    gender: {
      english: "Male",
      hindi: "पुरुष",
      kannada: "ಪುರುಷ"
    },
    location: {
      english: "Lake Garden, Kolkata",
      hindi: "लेक गार्डन, कोलकाता",
      kannada: "ಲೇಕ್ ಗಾರ್ಡನ್, ಕೊಲ್ಕತಾ"
    },
    coordinates: { lat: 22.5726, lng: 88.3639 },
    date: {
      english: "May 15, 2025",
      hindi: "15 मई, 2025",
      kannada: "15 ಮೇ, 2025"
    },
    description: {
      english: "Was wearing a green t-shirt and jeans. Wears glasses and has braces on teeth.",
      hindi: "हरी टी-शर्ट और जींस पहने थे। चश्मा पहनते हैं और दांतों पर ब्रेसेज हैं।",
      kannada: "ಹಸಿರು ಟಿ-ಶರ್ಟ್ ಮತ್ತು ಜೀನ್ಸ್ ಧರಿಸಿದ್ದರು. ಕನ್ನಡಕ ಧರಿಸುತ್ತಾರೆ ಮತ್ತು ಹಲ್ಲುಗಳ ಮೇಲೆ ಬ್ರೇಸಸ್ ಇದೆ."
    },
    image: "https://3.bp.blogspot.com/-0yEo83rBwgQ/WklQWmA4i8I/AAAAAAAAbLk/sJGBn27k2RUaKhg5powk9bEhkDgTTiEpgCLcBGAs/s1600/01%2BDSC_8108-copy.jpg",
    status: "active"
  },
  {
    id: 6,
    name: {
      english: "Ananya Gupta",
      hindi: "अनन्या गुप्ता",
      kannada: "ಅನನ್ಯಾ ಗುಪ್ತಾ"
    },
    age: 10,
    gender: {
      english: "Female",
      hindi: "महिला",
      kannada: "ಹೆಣ್ಣು"
    },
    location: {
      english: "Linking Road, Mumbai",
      hindi: "लिंकिंग रोड, मुंबई",
      kannada: "ಲಿಂಕಿಂಗ್ ರೋಡ್, ಮುಂಬೈ"
    },
    coordinates: { lat: 19.0760, lng: 72.8777 },
    date: {
      english: "May 20, 2025",
      hindi: "20 मई, 2025",
      kannada: "20 ಮೇ, 2025"
    },
    description: {
      english: "Last seen wearing a blue school uniform with a red tie. Has a small heart-shaped birthmark on her right hand.",
      hindi: "आखिरी बार लाल टाई के साथ नीली स्कूल वर्दी पहने देखी गई थी। दाहिने हाथ पर दिल के आकार का एक छोटा जन्मचिह्न है।",
      kannada: "ಕೆಂಪು ಟೈ ಜೊತೆಗೆ ನೀಲಿ ಶಾಲಾ ಸಮವಸ್ತ್ರ ಧರಿಸಿದ್ದಾಗ ಕೊನೆಯದಾಗಿ ಕಂಡುಬಂದಿದೆ. ಬಲ ಕೈಯಲ್ಲಿ ಹೃದಯಾಕಾರದ ಸಣ್ಣ ಜನ್ಮ ಚಿಹ್ನೆ ಇದೆ."
    },
    image: "https://i.pinimg.com/originals/73/84/44/738444938e285996953e05bb742327da.jpg",
    status: "active"
  },
  {
    id: 7,
    name: {
      english: "Rohan Mehra",
      hindi: "रोहन मेहरा",
      kannada: "ರೋಹನ್ ಮೇಹ್ರಾ"
    },
    age: 12,
    gender: {
      english: "Male",
      hindi: "पुरुष",
      kannada: "ಪುರುಷ"
    },
    location: {
      english: "Children's Park, Chennai",
      hindi: "चिल्ड्रेन पार्क, चेन्नई",
      kannada: "ಚಿಲ್ಡ್ರನ್ಸ್ ಪಾರ್ಕ್, ಚೆನ್ನೈ"
    },
    coordinates: { lat: 13.0827, lng: 80.2707 },
    date: {
      english: "May 22, 2025",
      hindi: "22 मई, 2025",
      kannada: "22 ಮೇ, 2025"
    },
    description: {
      english: "Was wearing a yellow cricket jersey and blue trackpants. Has a cricket bat-shaped birthmark on his left shoulder.",
      hindi: "पीली क्रिकेट जर्सी और नीली ट्रैकपैंट पहने थे। बाएं कंधे पर क्रिकेट बैट के आकार का जन्मचिह्न है।",
      kannada: "ಹಳದಿ ಕ್ರಿಕೆಟ್ ಜೆರ್ಸಿ ಮತ್ತು ನೀಲಿ ಟ್ರ್ಯಾಕ್‌ಪ್ಯಾಂಟ್‌ ಧರಿಸಿದ್ದರು. ಎಡ ಭುಜದ ಮೇಲೆ ಕ್ರಿಕೆಟ್ ಬ್ಯಾಟ್ ಆಕಾರದ ಜನ್ಮ ಚಿಹ್ನೆ ಇದೆ."
    },
    image: "https://th.bing.com/th/id/OIP.PIUu0vBvLKguzhp1ll0nqwHaHa?w=167&h=180&c=7&r=0&o=7&cb=iwp2&dpr=1.3&pid=1.7&rm=3",
    status: "active"
  },
  {
    id: 8,
    name: {
      english: "Ishaan Verma",
      hindi: "ईशान वर्मा",
      kannada: "ಈಶಾನ್ ವರ್ಮಾ"
    },
    age: 6,
    gender: {
      english: "Male",
      hindi: "पुरुष",
      kannada: "ಪುರುಷ"
    },
    location: {
      english: "Sector 17 Market, Chandigarh",
      hindi: "सेक्टर 17 मार्केट, चंडीगढ़",
      kannada: "ಸೆಕ್ಟರ್ 17 ಮಾರುಕಟ್ಟೆ, ಚಂಡೀಗಢ್"
    },
    coordinates: { lat: 30.7333, lng: 76.7794 },
    date: {
      english: "May 18, 2025",
      hindi: "18 मई, 2025",
      kannada: "18 ಮೇ, 2025"
    },
    description: {
      english: "Last seen wearing a blue sweater and grey pants. Has curly hair and dimples when he smiles.",
      hindi: "आखिरी बार नीले स्वेटर और ग्रे पैंट पहने देखा गया था। घुंघराले बाल हैं और मुस्कुराने पर गाल में गड्ढे पड़ते हैं।",
      kannada: "ಕೊನೆಯದಾಗಿ ನೀಲಿ ಸ್ವೆಟರ್ ಮತ್ತು ಬೂದು ಪ್ಯಾಂಟ್ ಧರಿಸಿದ್ದನ್ನು ನೋಡಲಾಗಿದೆ. ಉಂಗುರು ಕೂದಲು ಮತ್ತು ನಗುವಾಗ ಕೆನ್ನೆಯಲ್ಲಿ ಗುಳಿಗಳಿವೆ."
    },
    image: "https://th.bing.com/th/id/OIP.w7KqNuXFaA7VDRFrQZayOAHaE8?cb=iwp2&rs=1&pid=ImgDetMain",
    status: "active"
  },
  {
    id: 9,
    name: {
      english: "Diya Khanna",
      hindi: "दिया खन्ना",
      kannada: "ದಿಯಾ ಖನ್ನಾ"
    },
    age: 9,
    gender: {
      english: "Female",
      hindi: "महिला",
      kannada: "ಹೆಣ್ಣು"
    },
    location: {
      english: "Lalbagh Gardens, Bangalore",
      hindi: "लालबाग गार्डन, बैंगलोर",
      kannada: "ಲಾಲ್‌ಬಾಗ್ ಉದ್ಯಾನ, ಬೆಂಗಳೂರು"
    },
    coordinates: { lat: 12.9507, lng: 77.5848 },
    date: {
      english: "May 23, 2025",
      hindi: "23 मई, 2025",
      kannada: "23 ಮೇ, 2025"
    },
    description: {
      english: "Was wearing a green frock with flower patterns. Has two ponytails with blue hairbands.",
      hindi: "फूलों के पैटर्न वाली हरी फ्रॉक पहने थी। नीले हेयरबैंड के साथ दो पोनीटेल्स हैं।",
      kannada: "ಹೂವಿನ ಮಾದರಿಗಳೊಂದಿಗೆ ಹಸಿರು ಫ್ರಾಕ್ ಧರಿಸಿದ್ದಳು. ನೀಲಿ ಕೂದಲು ಬ್ಯಾಂಡ್‌ಗಳೊಂದಿಗೆ ಎರಡು ಪೋನಿಟೇಲ್‌ಗಳನ್ನು ಹೊಂದಿದೆ."
    },
    image: "https://th.bing.com/th/id/OIP.PuAj1G1eijQt4mmSPTxyXQHaE9?w=278&h=186&c=7&r=0&o=7&cb=iwp2&dpr=1.3&pid=1.7&rm=3",
    status: "active"
  },
  {
    id: 10,
    name: {
      english: "Aryan Mishra",
      hindi: "आर्यन मिश्रा",
      kannada: "ಆರ್ಯನ್ ಮಿಶ್ರಾ"
    },
    age: 14,
    gender: {
      english: "Male",
      hindi: "पुरुष",
      kannada: "ಪುರುಷ"
    },
    location: {
      english: "Metro Station, Lucknow",
      hindi: "मेट्रो स्टेशन, लखनऊ",
      kannada: "ಮೆಟ್ರೋ ನಿಲ್ದಾಣ, ಲಕ್ನೋ"
    },
    coordinates: { lat: 26.8467, lng: 80.9462 },
    date: {
      english: "May 21, 2025",
      hindi: "21 मई, 2025",
      kannada: "21 ಮೇ, 2025"
    },
    description: {
      english: "Last seen wearing a red hoodie and black jeans. Has a small mole above his right eyebrow.",
      hindi: "आखिरी बार लाल हुडी और काली जींस पहने देखा गया था। दाहिनी भौं के ऊपर एक छोटा तिल है।",
      kannada: "ಕೆಂಪು ಹುಡಿ ಮತ್ತು ಕಪ್ಪು ಜೀನ್ಸ್ ಧರಿಸಿದ್ದಾಗ ಕೊನೆಯದಾಗಿ ಕಂಡುಬಂದಿದೆ. ಬಲ ಹುಬ್ಬಿನ ಮೇಲೆ ಸಣ್ಣ ಮಚ್ಚೆ ಇದೆ."
    },
    image: "https://th.bing.com/th/id/OIP.u8DS93IukzCkOBVfkCxL0AHaE3?w=287&h=188&c=7&r=0&o=7&cb=iwp2&dpr=1.3&pid=1.7&rm=3",
    status: "active"
  },
  // Adding new alerts in Hindi and Kannada
  {
    id: 11,
    name: {
      english: "Aditi Mehra",
      hindi: "अदिति मेहरा",
      kannada: "ಅದಿತಿ ಮೇಹ್ರಾ"
    },
    age: 8,
    gender: {
      english: "Female",
      hindi: "महिला",
      kannada: "ಹೆಣ್ಣು"
    },
    location: {
      english: "Chandni Chowk, Delhi",
      hindi: "चांदनी चौक, दिल्ली",
      kannada: "ಚಾಂದ್ನಿ ಚೌಕ್, ದೆಹಲಿ"
    },
    coordinates: { lat: 28.6506, lng: 77.2310 },
    date: {
      english: "May 24, 2025",
      hindi: "24 मई, 2025",
      kannada: "24 ಮೇ, 2025"
    },
    description: {
      english: "Last seen wearing a purple traditional dress with silver embroidery. Has a small mole on her left cheek.",
      hindi: "आखिरी बार चांदी की कढ़ाई वाली बैंगनी पारंपरिक पोशाक पहने देखी गई थी। बायीं गाल पर एक छोटा तिल है।",
      kannada: "ಕೊನೆಯದಾಗಿ ಬೆಳ್ಳಿ ಎಂಬ್ರಾಯ್ಡರಿಯೊಂದಿಗೆ ನೇರಳೆ ಸಾಂಪ್ರದಾಯಿಕ ಉಡುಪು ಧರಿಸಿದ್ದಳು. ಎಡ ಗಲ್ಲದ ಮೇಲೆ ಸಣ್ಣ ಮಚ್ಚೆ ಇದೆ."
    },
    image: "https://th.bing.com/th/id/OIP.axyhC07j-zFYKlprLyTB2AHaE6?w=252&h=180&c=7&r=0&o=7&cb=iwp2&dpr=1.3&pid=1.7&rm=3",
    status: "active"
  },
  {
    id: 12,
    name: {
      english: "Sanjay Kumar",
      hindi: "संजय कुमार",
      kannada: "ಸಂಜಯ್ ಕುಮಾರ್"
    },
    age: 10,
    gender: {
      english: "Male",
      hindi: "पुरुष",
      kannada: "ಪುರುಷ"
    },
    location: {
      english: "Varanasi Ghat, Uttar Pradesh",
      hindi: "वाराणसी घाट, उत्तर प्रदेश",
      kannada: "ವಾರಣಾಸಿ ಘಾಟ್, ಉತ್ತರ ಪ್ರದೇಶ"
    },
    coordinates: { lat: 25.3176, lng: 83.0062 },
    date: {
      english: "May 23, 2025",
      hindi: "23 मई, 2025",
      kannada: "23 ಮೇ, 2025"
    },
    description: {
      english: "Was wearing an orange kurta and white pajama. Has a scar near his right ear from a previous accident.",
      hindi: "नारंगी कुर्ता और सफेद पजामा पहने थे। पिछली दुर्घटना से दाहिने कान के पास एक निशान है।",
      kannada: "ಕಿತ್ತಳೆ ಕುರ್ತಾ ಮತ್ತು ಬಿಳಿ ಪೈಜಾಮಾ ಧರಿಸಿದ್ದರು. ಹಿಂದಿನ ಅಪಘಾತದಿಂದ ಬಲ ಕಿವಿಯ ಬಳಿ ಗಾಯದ ಗುರುತು ಇದೆ."
    },
    image: "https://media.istockphoto.com/id/182237234/photo/cheerful-indian-boy-teenager-student-isolated-on-white-horizontal.jpg?s=612x612&w=0&k=20&c=68Rbgjyw-0klfjpLqGjKWq4annJ0ES-o99nz9RHEktc=",
    status: "active"
  },
  {
    id: 13,
    name: {
      english: "Pooja Singh",
      hindi: "पूजा सिंह",
      kannada: "ಪೂಜಾ ಸಿಂಗ್"
    },
    age: 13,
    gender: {
      english: "Female",
      hindi: "महिला",
      kannada: "ಹೆಣ್ಣು"
    },
    location: {
      english: "JP Nagar, Bangalore",
      hindi: "जेपी नगर, बैंगलोर",
      kannada: "ಜೆಪಿ ನಗರ, ಬೆಂಗಳೂರು"
    },
    coordinates: { lat: 12.9108, lng: 77.5929 },
    date: {
      english: "May 25, 2025",
      hindi: "25 मई, 2025",
      kannada: "25 ಮೇ, 2025"
    },
    description: {
      english: "Last seen in school uniform with navy blue skirt and white shirt. Wears prescription glasses with red frames.",
      hindi: "आखिरी बार नेवी ब्लू स्कर्ट और सफेद शर्ट के साथ स्कूल यूनिफॉर्म में देखी गई थी। लाल फ्रेम के चश्मे पहनती है।",
      kannada: "ಕೊನೆಯದಾಗಿ ನೇವಿ ಬ್ಲೂ ಸ್ಕರ್ಟ್ ಮತ್ತು ಬಿಳಿ ಶರ್ಟ್‌ನೊಂದಿಗೆ ಶಾಲಾ ಸಮವಸ್ತ್ರದಲ್ಲಿ ಕಂಡುಬಂದಿದ್ದಾರೆ. ಕೆಂಪು ಫ್ರೇಮ್‌ಗಳೊಂದಿಗೆ ಪ್ರಿಸ್ಕ್ರಿಪ್ಷನ್ ಕನ್ನಡಕ ಧರಿಸುತ್ತಾರೆ."
    },
    image: "https://th.bing.com/th/id/OIP.P0eT8W24X7oEviCsWfAL7AHaE8?cb=iwp2&pid=ImgDet&w=184&h=122&c=7&dpr=1.3",
    status: "active"
  },
  {
    id: 14,
    name: {
      english: "Karthik Reddy",
      hindi: "कार्तिक रेड्डी",
      kannada: "ಕಾರ್ತಿಕ್ ರೆಡ್ಡಿ"
    },
    age: 9,
    gender: {
      english: "Male",
      hindi: "पुरुष",
      kannada: "ಪುರುಷ"
    },
    location: {
      english: "Anjanapura, Bangalore",
      hindi: "अंजनापुरा, बैंगलोर",
      kannada: "ಅಂಜನಾಪುರ, ಬೆಂಗಳೂರು"
    },
    coordinates: { lat: 12.8698, lng: 77.5558 },
    date: {
      english: "May 24, 2025",
      hindi: "24 मई, 2025",
      kannada: "24 ಮೇ, 2025"
    },
    description: {
      english: "Was wearing a green striped t-shirt and khaki shorts. Has a distinctive birthmark on his right ankle.",
      hindi: "हरी धारीदार टी-शर्ट और खाकी शॉर्ट्स पहने थे। दाहिने टखने पर एक विशिष्ट जन्मचिह्न है।",
      kannada: "ಹಸಿರು ಪಟ್ಟಿ ಟೀ-ಶರ್ಟ್ ಮತ್ತು ಖಾಕಿ ಶಾರ್ಟ್ಸ್ ಧರಿಸಿದ್ದರು. ಬಲ ಕಣಕಾಲಿನಲ್ಲಿ ವಿಶಿಷ್ಟವಾದ ಜನ್ಮ ಚಿಹ್ನೆ ಇದೆ."
    },
    image: "https://th.bing.com/th/id/OIP._wyC7RdfqUEVo01r1OX4nAHaE8?cb=iwp2&w=960&h=641&rs=1&pid=ImgDetMain",
    status: "active"
  },
  {
    id: 15,
    name: {
      english: "Neha Agarwal",
      hindi: "नेहा अग्रवाल",
      kannada: "ನೇಹಾ ಅಗರ್ವಾಲ್"
    },
    age: 11,
    gender: {
      english: "Female",
      hindi: "महिला",
      kannada: "ಹೆಣ್ಣು"
    },
    location: {
      english: "Market Road, Jaipur",
      hindi: "मार्केट रोड, जयपुर",
      kannada: "ಮಾರುಕಟ್ಟೆ ರಸ್ತೆ, ಜೈಪುರ"
    },
    coordinates: { lat: 26.9186, lng: 75.8156 },
    date: {
      english: "May 25, 2025",
      hindi: "25 मई, 2025",
      kannada: "25 ಮೇ, 2025"
    },
    description: {
      english: "Last seen wearing a red salwar kameez with gold embroidery. Has a heart-shaped face and long black hair.",
      hindi: "आखिरी बार सोने की कढ़ाई वाला लाल सलवार कमीज पहने देखी गई थी। दिल के आकार का चेहरा और लंबे काले बाल हैं।",
      kannada: "ಕೊನೆಯದಾಗಿ ಚಿನ್ನದ ಎಂಬ್ರಾಯ್ಡರಿಯೊಂದಿಗೆ ಕೆಂಪು ಸಲ್ವಾರ್ ಕಮೀಜ್ ಧರಿಸಿದ್ದಳು. ಹೃದಯಾಕಾರದ ಮುಖ ಮತ್ತು ಉದ್ದವಾದ ಕಪ್ಪು ಕೂದಲು ಹೊಂದಿದ್ದಾರೆ."
    },
    image: "https://th.bing.com/th/id/OIP.GyHCWxfM4WmRitsyNRu6AAHaHa?cb=iwp2&w=626&h=626&rs=1&pid=ImgDetMain",
    status: "active"
  }
];

// Helper function to get all missing children data
export const getAllMissingChildren = (): MissingChild[] => {
  // In a real app, this would fetch from a backend API
  // For now, we'll return our mock data
  return missingChildrenData;
};

// Helper function to get a specific missing child by ID
export const getMissingChildById = (id: number): MissingChild | undefined => {
  return missingChildrenData.find(child => child.id === id);
};

// Helper function to submit a new missing child report
export const submitMissingChildReport = (childData: Omit<MissingChild, 'id' | 'status'>): Promise<MissingChild> => {
  // In a real app, this would send data to a backend API
  return new Promise((resolve) => {
    // Simulate API delay
    setTimeout(() => {
      // Create a new child record with an auto-generated ID
      const newChild: MissingChild = {
        ...childData,
        id: missingChildrenData.length + 1,
        status: "active"
      };
      
      // In a real app, this would be saved to a database
      // Here we're just adding it to our in-memory array
      missingChildrenData.push(newChild);
      
      console.log("New missing child report submitted:", newChild);
      
      // Return the created data
      resolve(newChild);
    }, 1500);
  });
};

// Helper function to get the latest reports
export const getLatestReports = (count: number = 5): MissingChild[] => {
  return [...missingChildrenData]
    .sort((a, b) => {
      // Sort by the most recent first (assuming date strings are comparable)
      return new Date(b.date.english).getTime() - new Date(a.date.english).getTime();
    })
    .slice(0, count);
};

// For debugging - print all stored missing children data
export const logStoredData = (): void => {
  console.log("Currently stored missing children data:", missingChildrenData);
};