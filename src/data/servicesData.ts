import { PujaService, ReviewItem, FAQItem } from '../types';

export const PANDIT_CONTACT = {
  nameHi: 'पंडित जी (NCR Pandit Ji)',
  nameEn: 'NCR Pandit Ji',
  phone: '9625057815',
  phoneFormatted: '+91 9625057815',
  whatsappUrl: 'https://wa.me/919625057815',
  experience: '12+ वर्ष का वैदिक अनुभव',
  experienceEn: '12+ Years Vedic Experience',
  pujasDone: '1,500+ सफल पूजा अनुष्ठान',
  pujasDoneEn: '1,500+ Sacred Pujas Completed',
  taglineHi: 'दिल्ली NCR में विधि-विधान, श्रद्धा एवं शास्त्रोक्त मर्यादा के साथ संपूर्ण पूजा-पाठ',
  taglineEn: 'Authentic Vedic Pujas & Ceremonies with Pure Devotion across Delhi NCR',
  addressHi: 'सेवा क्षेत्र: दिल्ली, नोएडा, ग्रेटर नोएडा, गाज़ियाबाद, गुरुग्राम, फ़रीदाबाद',
  addressEn: 'Service Areas: Delhi, Noida, Greater Noida, Ghaziabad, Gurugram, Faridabad'
};

export const SERVICES_DATA: PujaService[] = [
  {
    id: 'griha-pravesh',
    category: 'griha',
    titleHi: 'गृह प्रवेश एवं वास्तु शांति पूजा',
    titleEn: 'Griha Pravesh & Vastu Shanti Puja',
    subtitleHi: 'नवीन घर में सुख, शांति एवं सकारात्मक ऊर्जा का संचार',
    subtitleEn: 'Divine blessings & positive energy for your new home',
    descHi: 'शास्त्रोक्त विधि से नवग्रह शांति, वास्तु पुरुष पूजन, कलश स्थापना, देहरी पूजन, गो-पूजन एवं मंगल हवन। नए आवास में सुख, समृद्धि एवं दीर्घायु की मंगलकामना।',
    descEn: 'Traditional Vedic inauguration ceremony including Vastu Purush Pujan, Navagraha Shanti, Kalash Sthapana, threshold blessings, and sacred Mangal Hawan.',
    iconName: 'Flame',
    popular: true,
    durationHi: '3 - 4 घंटे',
    durationEn: '3 - 4 Hours',
    samagriAssistance: true,
    benefitsHi: [
      'घर से वास्तु दोष एवं नकारात्मक ऊर्जा का शमन',
      'परिवार में सुख-शांति, समृद्धि एवं आरोग्यता',
      'देवी-देवताओं एवं कुलदेवता का स्थायी वास'
    ],
    benefitsEn: [
      'Eliminates Vastu doshas and negative vibrations',
      'Attracts prosperity, family harmony and good health',
      'Invokes blessings of Kuldevata and Navagrahas'
    ],
    includesHi: [
      'कलश एवं मंडप स्थापना',
      'नवग्रह, वास्तु एवं गौरी-गणेश पूजन',
      'संपूर्ण वैदिक हवन एवं महाआरती'
    ],
    includesEn: [
      'Kalash & Mandap Sthapana',
      'Navagraha, Vastu & Gauri-Ganesh Pujan',
      'Complete Vedic Hawan & Maha Aarti'
    ]
  },
  {
    id: 'rudrabhishek',
    category: 'shiva',
    titleHi: 'महा रुद्राभिषेक एवं शिव पूजन',
    titleEn: 'Maha Rudrabhishek & Shiv Puja',
    subtitleHi: 'भगवान भोलेनाथ की असीम कृपा, ग्रह शांति एवं आत्मिक शुद्धि',
    subtitleEn: 'Supreme blessings of Lord Shiva for health, peace & prosperity',
    descHi: 'भगवान शिव का पंचामृत, गंगाजल, गन्ने का रस, मधु, एवं बिल्वपत्र से नमकम-चमकम पाठ युक्त दिव्य रुद्राभिषेक। समस्त कष्टों एवं ग्रह बाधाओं से मुक्ति।',
    descEn: 'Auspicious Rudrabhishek of Lord Shiva with Panchamrit, Holy Ganga water, Bilva leaves, and powerful Shukla Yajurvediya Namakam-Chamakam Vedic chants.',
    iconName: 'Sparkles',
    popular: true,
    durationHi: '2 - 3 घंटे',
    durationEn: '2 - 3 Hours',
    samagriAssistance: true,
    benefitsHi: [
      'असाध्य रोगों एवं मानसिक तनाव से मुक्ति',
      'कालसर्प, शनि एवं राहु दोष का निवारण',
      'मनोकामना सिद्धि एवं आध्यात्मिक ऊर्जा की प्राप्ति'
    ],
    benefitsEn: [
      'Relief from chronic ailments and mental stress',
      'Pacification of Kaal Sarp, Shani, and Rahu doshas',
      'Fulfillment of righteous desires and inner tranquility'
    ],
    includesHi: [
      'शिवलिंग स्थापना एवं पुष्प श्रृंगार',
      'रुद्री पाठ एवं 108 महामृत्युंजय मंत्र जप',
      'पंचामृत अभिषेक, आरती एवं भस्म अर्पण'
    ],
    includesEn: [
      'Shivling Sthapana & Floral Shringar',
      'Rudri Path & 108 Maha Mrityunjaya Japa',
      'Panchamrit Abhishekam, Aarti & Prasad'
    ]
  },
  {
    id: 'satyanarayan-katha',
    category: 'katha',
    titleHi: 'श्री सत्यनारायण कथा एवं हवन',
    titleEn: 'Shri Satyanarayan Katha & Hawan',
    subtitleHi: 'पूर्णिमा, एकादशी, जन्मदिन या किसी भी शुभ अवसर पर मनोवांछित फलदायक',
    subtitleEn: 'Sacred storytelling of Lord Vishnu for wish-fulfillment & family peace',
    descHi: 'भगवान श्री सत्यनारायण के 5 अध्यायों की मधुर एवं सारगर्भित कथा श्रवण, पंचामृत पंजीरी प्रसाद वितरण, एवं शांति हवन। हर घर में मंगल एवं सौभाग्य का वास।',
    descEn: 'The auspicious recitation of 5 divine chapters of Lord Satyanarayan, followed by panchamrit, wheat panjiri prasad, Vishnu Sahasranama, and Mangal Aarti.',
    iconName: 'BookOpen',
    popular: true,
    durationHi: '2 - 2.5 घंटे',
    durationEn: '2 - 2.5 Hours',
    samagriAssistance: true,
    benefitsHi: [
      'व्यापार, नौकरी एवं गृहस्थ जीवन में सफलता',
      'पारिवारिक कलह से मुक्ति एवं सौहार्द',
      'सत्य और धर्म के प्रति निष्ठा की वृद्धि'
    ],
    benefitsEn: [
      'Success in career, business, and family ventures',
      'Elimination of misunderstandings and discord',
      'Divine protection and abundance in the household'
    ],
    includesHi: [
      'गौरी-गणेश व नवग्रह पूजन',
      '5 अध्यायों की प्रामाणिक कथा श्रवण',
      'हवन, सत्यनारायण जी की महाआरती'
    ],
    includesEn: [
      'Gauri-Ganesh & Navagraha Pujan',
      'Detailed narration of all 5 chapters',
      'Hawan, Vishnu Aarti & Prasad consecration'
    ]
  },
  {
    id: 'hawan-pujan',
    category: 'hawan',
    titleHi: 'वैदिक हवन एवं नवग्रह शांति यज्ञ',
    titleEn: 'Vedic Hawan & Navagraha Shanti Yagna',
    subtitleHi: 'अग्निदेव के माध्यम से ग्रहों की अनुकूलता एवं वातावरण की शुद्धि',
    subtitleEn: 'Sacred fire oblation to harmonize cosmic energies & cleanse atmosphere',
    descHi: 'विभिन्न शुभ अवसरों, वर्षगांठ, कार्यालय उद्घाटन, या ग्रह शांति हेतु पवित्र समिधा, जड़ी-बूटियों एवं शुद्ध गाय के घी से शास्त्रोक्त यज्ञ एवं आहुति।',
    descEn: 'Purifying fire ceremony with pure cow ghee, sacred samidha wood, and medicinal herbs to appease the nine planetary deities and cleanse your environment.',
    iconName: 'Flame',
    popular: false,
    durationHi: '2 - 3 घंटे',
    durationEn: '2 - 3 Hours',
    samagriAssistance: true,
    benefitsHi: [
      'वातावरण का कीटाणु शोधन एवं सकारात्मक तरंगें',
      'कुंडली के पीड़ित ग्रहों की अनुकूलता',
      'कार्यक्षेत्र में आ रही बाधाओं का त्वरित निवारण'
    ],
    benefitsEn: [
      'Purifies indoor atmosphere with medicinal smoke',
      'Mitigates ill-effects of malefic planetary transits',
      'Removes obstacles in business and education'
    ],
    includesHi: [
      'नवग्रह मंडल निर्माण व आवाहन',
      '108/1008 विशेष वैदिक आहुतियां',
      'पूर्णाहुति, भस्म तिलक एवं आशीर्वाद'
    ],
    includesEn: [
      'Navagraha Mandala construction & invocation',
      '108 / 1008 sacred Vedic oblations',
      'Poornahuti, sacred ash tilak & blessings'
    ]
  },
  {
    id: 'vivah-sanskar',
    category: 'sanskar',
    titleHi: 'विवाह संस्कार एवं सगाई (रोका)',
    titleEn: 'Vivah Sanskar & Sagai / Roka',
    subtitleHi: 'सप्तपदी, कन्यादान एवं वैदिक रीति-रिवाजों से पवित्र दांपत्य बंधन',
    subtitleEn: 'Sacred union of two souls through authentic Vedic matrimonial rites',
    descHi: 'जयमाला, कन्यादान, पाणिग्रहण, लाजाहोम, सप्तपदी (सात फेरे), ध्रुव दर्शन एवं सिंदूर दान सहित संपूर्ण पारंपरिक विवाह संस्कार विदुषी रीति से सम्पन्न।',
    descEn: 'Complete traditional Hindu wedding rituals including Jaimala, Kanyadaan, Panigrahana, Saptapadi (Seven Vows), Laja Homa, and Sindoor Daan.',
    iconName: 'HeartHandshake',
    popular: true,
    durationHi: '4 - 6 घंटे',
    durationEn: '4 - 6 Hours',
    samagriAssistance: true,
    benefitsHi: [
      'वर-वधू के वैवाहिक जीवन में अटूट प्रेम एवं सामंजस्य',
      'दोनों कुलों के पूर्वजों एवं देवताओं का आशीर्वाद',
      'धर्म, अर्थ, काम एवं मोक्ष की संयुक्त सिद्धि'
    ],
    benefitsEn: [
      'Enduring love, harmony, and mutual respect',
      'Blessings of both lineages and divine deities',
      'Auspicious commencement of Grihastha ashram'
    ],
    includesHi: [
      'हल्दी, मंडप पूजन एवं मातृका पूजन',
      'शास्त्रोक्त सप्तपदी एवं सात वचनों का व्याख्यान',
      'विवाह हवन, सिंदूर दान व पूर्ण आशीर्वाद'
    ],
    includesEn: [
      'Mandap Pujan & Matrika Invocation',
      'Explanation of 7 Vedic marital vows',
      'Vivah Hawan, Sindoor ritual & elder blessings'
    ]
  },
  {
    id: 'bhoomi-pujan',
    category: 'griha',
    titleHi: 'भूमि पूजन एवं नींव शिलान्यास',
    titleEn: 'Bhoomi Pujan & Foundation Stone Laying',
    subtitleHi: 'नए निर्माण, प्लॉट, फ्लैट या व्यावसायिक स्थल का शुभारंभ',
    subtitleEn: 'Sanctifying the land and seeking earth goddess blessings before construction',
    descHi: 'धरती माता, शेषनाग, वाराह भगवान एवं वास्तु देव का पूजन। निर्माण कार्य निर्विघ्न संपन्न होने, कामगारों की सुरक्षा एवं समृद्धि की मंगल कामना।',
    descEn: 'Sacred ritual to seek forgiveness and blessings from Mother Earth (Bhoomi Mata), Sheshnag, and Vastu Deva before initiating building construction.',
    iconName: 'Building',
    popular: false,
    durationHi: '2 - 3 घंटे',
    durationEn: '2 - 3 Hours',
    samagriAssistance: true,
    benefitsHi: [
      'निर्माण कार्य बिना किसी रुकावट के तीव्र गति से पूर्ण होना',
      'भूमिगत दोषों एवं नकारात्मक ऊर्जाओं का शमन',
      'आगामी भवन में निवास करने वालों का उज्ज्वल भविष्य'
    ],
    benefitsEn: [
      'Smooth, uninterrupted, and timely construction',
      'Neutralizes geological and subterranean stresses',
      'Brings lasting peace and safety to future occupants'
    ],
    includesHi: [
      'ईशान कोण में गड्ढा एवं शिला पूजन',
      'पंचरत्न, चांदी का सर्प एवं कलश स्थापना',
      'भूमि शांति हवन एवं प्रसाद'
    ],
    includesEn: [
      'Foundation trench & cornerstone consecration',
      'Silver serpent, Pancharatna & Kalash placement',
      'Bhoomi Shanti Hawan and prasad distribution'
    ]
  },
  {
    id: 'sunderkand-path',
    category: 'katha',
    titleHi: 'श्री सुंदरकांड पाठ एवं हनुमान चालीसा',
    titleEn: 'Shri Sunderkand Path & Hanuman Chalisa',
    subtitleHi: 'संकट मोचन हनुमान जी की स्तुति, भय एवं कष्टों से मुक्ति',
    subtitleEn: 'Spiritual recital of Ramcharitmanas for strength, protection & courage',
    descHi: 'सस्वर संगीतमय सुंदरकांड पाठ, संपुट दोहे, हनुमान अष्टक, बजरंग बाण, एवं आरती। घर में अभय, उत्साह एवं सकारात्मक संकल्प का जागरण।',
    descEn: 'Melodious and devotional recitation of Sundarkand from Ramcharitmanas, invoking Lord Hanuman for removing obstacles, fear, and negativity.',
    iconName: 'ShieldCheck',
    popular: true,
    durationHi: '2.5 - 3.5 घंटे',
    durationEn: '2.5 - 3.5 Hours',
    samagriAssistance: true,
    benefitsHi: [
      'भय, चिंता, रोग एवं शत्रुओं से सुरक्षा',
      'असंभव प्रतीत होने वाले कार्यों में अभूतपूर्व सफलता',
      'परिवार में आत्मबल एवं सकारात्मक ऊर्जा का संचार'
    ],
    benefitsEn: [
      'Shield against evil eyes, anxiety, and fear',
      'Overcomes seemingly insurmountable hurdles',
      'Fosters courage, self-discipline, and devotion'
    ],
    includesHi: [
      'श्री राम दरबार एवं हनुमान जी का आवाहन',
      'संपूर्ण सुंदरकांड दोहा-चौपाई सस्वर गायन',
      'हनुमान चालीसा, बूंदी-लड्डू भोग व आरती'
    ],
    includesEn: [
      'Ram Darbar & Hanuman ji invocation',
      'Complete musical chant of Sundarkand',
      'Hanuman Chalisa, traditional bhog & aarti'
    ]
  },
  {
    id: 'maha-mrityunjaya',
    category: 'shiva',
    titleHi: 'महामृत्युंजय जाप एवं अनुष्ठान',
    titleEn: 'Maha Mrityunjaya Jaap & Anushthan',
    subtitleHi: 'स्वास्थ्य लाभ, अकाल मृत्यु भय निवारण एवं दीर्घायु की प्रार्थना',
    subtitleEn: 'Sacred chanting for healing, longevity, and divine protection',
    descHi: 'भगवान महाकाल के संजीवनी मंत्र का 1100, 2100 या 5100 शास्त्रोक्त संकल्पित जप एवं दशांश हवन। गंभीर बीमारी, सर्जरी या संकट के समय अत्यंत प्रभावशाली।',
    descEn: 'Vedic recitation of the supreme life-protecting Sanjeevani mantra with specific sankalpam, followed by healing herbal hawan for health recovery.',
    iconName: 'Activity',
    popular: false,
    durationHi: '3 - 5 घंटे',
    durationEn: '3 - 5 Hours',
    samagriAssistance: true,
    benefitsHi: [
      'गंभीर व्याधियों एवं शल्य चिकित्सा में शीघ्र स्वास्थ्य लाभ',
      'अकाल मृत्यु, दुर्घटना एवं भय से पूर्ण सुरक्षा',
      'आयु, यश, बल एवं आत्मबल में निरंतर वृद्धि'
    ],
    benefitsEn: [
      'Speedy recovery from illness and surgeries',
      'Divine protection against accidents and fear',
      'Enhances physical vitality, mental clarity & lifespan'
    ],
    includesHi: [
      'संकल्प, कलश व शिव प्रतिष्ठा',
      'वैदिक विद्वानों द्वारा सम्पुटित महामृत्युंजय जप',
      'रोग-निवारक औषधीय हवन व शांति पाठ'
    ],
    includesEn: [
      'Sankalpam & consecrated Kalash setup',
      'Rigorous rhythmic chanting by learned pandits',
      'Medicinal herb fire offering & Shanti Path'
    ]
  },
  {
    id: 'naamkaran-sanskar',
    category: 'sanskar',
    titleHi: 'नामकरण एवं अन्नप्राशन संस्कार',
    titleEn: 'Naamkaran & Annaprashan Sanskar',
    subtitleHi: 'नवजात शिशु के उज्ज्वल भविष्य एवं प्रथम आहार का पावन उत्सव',
    subtitleEn: 'Sacred naming & first feeding ceremony for your beloved baby',
    descHi: 'ज्योतिषीय नक्षत्र, चरण एवं राशि अनुसार शुभ नामकरण। षोडश संस्कारों में प्रमुख, शिशु के दीर्घायु, संस्कारवान एवं यशस्वी जीवन हेतु आशीर्वाद।',
    descEn: 'Authentic naming ceremony based on Janma Nakshatra and astrological sound syllables, followed by first solid food consecration with divine blessings.',
    iconName: 'Sparkle',
    popular: false,
    durationHi: '2 घंटे',
    durationEn: '2 Hours',
    samagriAssistance: true,
    benefitsHi: [
      'नक्षत्र अनुकूल शुभ नाम से जीवन भर सौभाग्य',
      'शिशु की रक्षा, स्वास्थ्य एवं कुशाग्र बुद्धि हेतु प्रार्थना',
      'पारिवारिक उत्सव में वैदिक मर्यादा का समावेश'
    ],
    benefitsEn: [
      'Astrologically aligned name for destiny elevation',
      'Prayers for the baby’s robust immunity & intelligence',
      'Sanctifies the child with righteous Vedic samskaras'
    ],
    includesHi: [
      'सूर्य, चंद्र एवं नक्षत्र पूजन',
      'शिशु के कान में 3 बार नाम उच्चारण',
      'आयुष्य हवन एवं परिवार जनों द्वारा आशीष'
    ],
    includesEn: [
      'Sun, Moon & Star planetary homage',
      'Whispering auspicious name thrice in ear',
      'Ayushya Hawan & family blessing circle'
    ]
  },
  {
    id: 'lakshmi-kuber-puja',
    category: 'special',
    titleHi: 'लक्ष्मी-कुबेर धनवर्षा पूजन एवं प्रतिष्ठान उद्घाटन',
    titleEn: 'Lakshmi-Kuber Puja & Business Opening',
    subtitleHi: 'व्यापार वृद्धि, धन संपदा एवं दुकान/कार्यालय की समृद्धि',
    subtitleEn: 'Invoking goddess Lakshmi & Lord Kuber for continuous wealth and commercial growth',
    descHi: 'नए व्यापार, दुकान, फैक्टरी, या कार्यालय के शुभारंभ पर श्रीसूक्त, कनकधारा एवं कुबेर मंत्रों से विशेष पूजन। अटके हुए धन की प्राप्ति एवं व्यापार विस्तार।',
    descEn: 'Special consecration for new commercial establishments, shops, and offices with Sri Suktam and Kubera hymns for sustained profitability.',
    iconName: 'Coins',
    popular: false,
    durationHi: '2.5 - 3 घंटे',
    durationEn: '2.5 - 3 Hours',
    samagriAssistance: true,
    benefitsHi: [
      'व्यापार में निरंतर प्रगति एवं नए अवसरों का सृजन',
      'कर्ज मुक्ति एवं वित्तीय स्थिरता',
      'प्रतिष्ठान में ग्राहकी एवं कार्यकुशलता की वृद्धि'
    ],
    benefitsEn: [
      'Accelerated business growth and new client inflows',
      'Financial resilience and relief from liabilities',
      'Harmonious relationship with employees and partners'
    ],
    includesHi: [
      'बहीखाता / तिजोरी / गल्ला पूजन',
      'श्रीसूक्त 16 ऋचाओं से विशेष आहुतियां',
      'कौड़ी, गोमती चक्र एवं दक्षिणावर्ती शंख संस्कार'
    ],
    includesEn: [
      'Safe / Ledger / Cash counter consecration',
      'Sri Suktam 16 sacred stanzas with hawan',
      'Kauri, Gomti Chakra & Shankh energizing'
    ]
  },
  {
    id: 'shraddha-pitru',
    category: 'special',
    titleHi: 'श्राद्ध, पितृ तर्पण एवं नारायण बलि',
    titleEn: 'Shraddha, Pitru Tarpan & Ancestral Rituals',
    subtitleHi: 'पूर्वजों के प्रति कृतज्ञता अर्पण एवं पितृ दोष शांति',
    subtitleEn: 'Honoring departed ancestors with profound Vedic rituals for generational peace',
    descHi: 'पितृ पक्ष अथवा मृत्यु तिथि पर शास्त्रोक्त पिंडदान, तिल-तर्पण, ब्राह्मण भोजन संकल्प एवं पितृ शांति विधान। पूर्वजों का स्नेह एवं कुल वृद्धि।',
    descEn: 'Traditional Pind Daan, Til-Water Tarpan, and sacred remembrance rites performed during Pitru Paksha or annual death anniversaries.',
    iconName: 'Users',
    popular: false,
    durationHi: '2 - 3 घंटे',
    durationEn: '2 - 3 Hours',
    samagriAssistance: true,
    benefitsHi: [
      'पितृ दोष से उत्पन्न बाधाओं एवं वंश वृद्धि रुकावटों की शांति',
      'पूर्वजों की तृप्ति से परिवार पर निरंतर सुरक्षा कवच',
      'मानसिक ग्लानि से मुक्ति एवं चित्त की शांति'
    ],
    benefitsEn: [
      'Pacification of Pitru Dosha and lineage delays',
      'Generational protection and paternal blessings',
      'Spiritual contentment and peace of mind'
    ],
    includesHi: [
      'कुश, काले तिल, जौ एवं गंगाजल से तर्पण',
      'पिंड निर्माण, दान संकल्प एवं पंचबलि',
      'ब्राह्मण भोजन निमित्त आशीर्वाद'
    ],
    includesEn: [
      'Kusha grass, sesame & Ganga jal tarpan',
      'Pinda preparation, Panchabali offerings',
      'Sankalpam for brahmin daan and peace'
    ]
  },
  {
    id: 'other-pujan',
    category: 'special',
    titleHi: 'अन्य वैदिक पूजा, पाठ एवं कुंडली परामर्श',
    titleEn: 'Custom Vedic Rituals & Kundali Guidance',
    subtitleHi: 'आपकी आवश्यकता अनुसार विशेष अनुष्ठान एवं शुभ मुहूर्त विचार',
    subtitleEn: 'Customized spiritual ceremonies & astrological consultation for all needs',
    descHi: 'दुर्गा सप्तशती पाठ, कालसर्प शांति, जन्मदिवस हवन, वाहन पूजा, मंगल दोष निवारण, एवं विवाह पूर्व कुंडली मिलान हेतु संपूर्ण मार्गदर्शन।',
    descEn: 'Tailored Vedic rituals including Durga Saptashati, Chandi Path, Vehicle Puja, Birthday Homa, Manglik Dosha Shanti, and Kundali matching.',
    iconName: 'Sun',
    popular: false,
    durationHi: 'आवश्यकतानुसार',
    durationEn: 'As per requirement',
    samagriAssistance: true,
    benefitsHi: [
      'प्रत्येक विशिष्ट समस्या का सटीक वैदिक समाधान',
      'शास्त्रसम्मत मुहूर्त चयन एवं शुद्ध उच्चारण',
      'व्यक्तिगत श्रद्धा एवं परंपरा का संपूर्ण सम्मान'
    ],
    benefitsEn: [
      'Customized spiritual remedies tailored to your horoscope',
      'Accurate Muhurat calculation by experienced Purohit',
      'Respectful adherence to unique family customs'
    ],
    includesHi: [
      'विस्तृत ज्योतिषीय एवं पूजा परामर्श',
      'सामग्री सूची एवं पूर्व तैयारी मार्गदर्शन',
      'समर्पित वैदिक अनुष्ठान'
    ],
    includesEn: [
      'Comprehensive puja & astrology consultation',
      'Checklist & ritual preparation guidance',
      'Dedicated Vedic execution'
    ]
  }
];

export const SERVICE_AREAS = [
  {
    cityHi: 'नोएडा',
    cityEn: 'Noida',
    sectorsHi: 'सेक्टर 1 से 168, नोएडा एक्सप्रेसवे, अट्टा, बॉटनिकल गार्डन, सेक्टर 50, 62, 75, 76, 78, 137',
    sectorsEn: 'Sectors 1 to 168, Expressway, Sector 50, 62, 75, 76, 78, 137, Wave City Center',
    timingHi: '30-45 मिनट में उपलब्धता',
    timingEn: 'Available within 30-45 mins'
  },
  {
    cityHi: 'ग्रेटर नोएडा व वेस्ट',
    cityEn: 'Greater Noida & West (Noida Ext.)',
    sectorsHi: 'गौर सिटी, ईको विलेज, चेरी काउंटी, परी चौक, अल्फा, बीटा, गामा, डेल्टा, नॉलेज पार्क',
    sectorsEn: 'Gaur City 1 & 2, Eco Village, Cherry County, Pari Chowk, Alpha, Beta, Knowledge Park',
    timingHi: '30-45 मिनट में उपलब्धता',
    timingEn: 'Available within 30-45 mins'
  },
  {
    cityHi: 'गाज़ियाबाद',
    cityEn: 'Ghaziabad',
    sectorsHi: 'इंदिरापुरम, वैशाली, वसुंधरा, राज नगर एक्सटेंशन, कौशाम्बी, क्रॉसिंग्स रिपब्लिक',
    sectorsEn: 'Indirapuram, Vaishali, Vasundhara, Raj Nagar Extension, Kaushambi, Crossings Republik',
    timingHi: '45-60 मिनट में उपलब्धता',
    timingEn: 'Available within 45-60 mins'
  },
  {
    cityHi: 'दिल्ली',
    cityEn: 'Delhi',
    sectorsHi: 'द्वारका, रोहिणी, मयूर विहार, लक्ष्मीनगर, साउथ दिल्ली, साकेत, वसंत कुंज, जनकपुरी',
    sectorsEn: 'Dwarka, Rohini, Mayur Vihar, Laxmi Nagar, South Delhi, Saket, Vasant Kunj, Janakpuri',
    timingHi: 'सुविधानुसार समय पर आगमन',
    timingEn: 'Available as per schedule'
  },
  {
    cityHi: 'गुरुग्राम व फ़रीदाबाद',
    cityEn: 'Gurugram & Faridabad',
    sectorsHi: 'डीएलएफ फेज 1-5, सोहना रोड, गोल्फ कोर्स रोड, सेक्टर 56, फ़रीदाबाद सेक्टर 14-21',
    sectorsEn: 'DLF Phase 1-5, Sohna Road, Golf Course Ext., Sector 56, Faridabad Sectors',
    timingHi: 'पूर्व बुकिंग पर सेवा',
    timingEn: 'Available on prior booking'
  }
];

export const TESTIMONIALS: ReviewItem[] = [
  {
    id: 't1',
    name: 'राजेश शर्मा (Rajesh Sharma)',
    location: 'गौर सिटी 2, ग्रेटर नोएडा वेस्ट',
    service: 'गृह प्रवेश एवं वास्तु शांति पूजा',
    rating: 5,
    date: 'अक्टूबर 2026',
    commentHi: 'पंडित जी ने हमारे नए फ्लैट का गृह प्रवेश अत्यंत विधि-विधान और शुद्ध मंत्रोच्चारण से कराया। सभी मेहमान उनकी सौम्यता और वैदिक ज्ञान से बहुत प्रभावित हुए। सामग्री की पूरी व्यवस्था भी उन्होंने कराई। अत्यंत आभारी हैं!',
    commentEn: 'Pandit Ji conducted our Griha Pravesh with immaculate Vedic rituals and pristine Sanskrit chanting. All guests were deeply impressed by his calm demeanor and deep knowledge. Highly recommended across Noida Extension!',
    verified: true
  },
  {
    id: 't2',
    name: 'अमित एवं श्वेता वर्मा (Amit & Shweta Verma)',
    location: 'सेक्टर 75, नोएडा',
    service: 'महा रुद्राभिषेक पूजा',
    rating: 5,
    date: 'नवंबर 2026',
    commentHi: 'सावन में हमने घर पर रुद्राभिषेक करवाया था। फूलों की जो रंगोली और शिवलिंग का दिव्य श्रृंगार पंडित जी ने किया, वह अलौकिक था! पूजा के बाद घर में असीम शांति का अनुभव हुआ।',
    commentEn: 'We booked Pandit Ji for Rudrabhishek at our home. The flower rangoli and Shiva Linga decoration were absolutely mesmerizing. The chants filled our apartment with pure tranquility.',
    verified: true
  },
  {
    id: 't3',
    name: 'विकास सिंघल (Vikas Singhal)',
    location: 'इंदिरापुरम, गाज़ियाबाद',
    service: 'श्री सत्यनारायण कथा एवं हवन',
    rating: 5,
    date: 'सितंबर 2026',
    commentHi: 'समय के बहुत पाबंद हैं पंडित जी। ठीक सुबह 8 बजे आ गए। कथा के प्रत्येक अध्याय का अर्थ बहुत सरल हिंदी में समझाया जिससे बच्चों ने भी बड़े चाव से सुना। दक्षिणा भी अत्यंत उचित रही।',
    commentEn: 'Extremely punctual and dedicated. Reached our home right on time. He explained the meaning of each chapter so lucidly that even our kids listened with interest. Very genuine and honest.',
    verified: true
  },
  {
    id: 't4',
    name: 'डॉ. नीरजा गुप्ता (Dr. Neerja Gupta)',
    location: 'द्वारका सेक्टर 12, दिल्ली',
    service: 'सुंदरकांड पाठ एवं हनुमान पूजन',
    rating: 5,
    date: 'अक्टूबर 2026',
    commentHi: 'संगीतमय सुंदरकांड पाठ का आयोजन कराया था। 3 घंटे का समय कैसे बीत गया पता ही नहीं चला। पूरे परिवार का मन प्रफुल्लित हो गया। NCR में इनसे बेहतर पंडित जी मिलना कठिन है।',
    commentEn: 'Organized a melodious Sunderkand Path at our residence. The atmosphere became electrifying with spiritual fervor. Wonderful experience, truly blessed!',
    verified: true
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'f1',
    questionHi: 'क्या पूजा की संपूर्ण सामग्री पंडित जी द्वारा लाई जाती है?',
    questionEn: 'Does Pandit Ji bring all the required puja samagri?',
    answerHi: 'हाँ, आप अपनी सुविधानुसार चुन सकते हैं। हम शुद्ध हवन सामग्री, जड़ी-बूटियाँ, रोली, अक्षत, कलावा, धूप, कपूर एवं समिधा सहित संपूर्ण सामग्री किट साथ लेकर आ सकते हैं। आप चाहें तो हम केवल लिस्ट भेज सकते हैं और आप स्वयं भी ला सकते हैं।',
    answerEn: 'Yes, absolutely. We offer complete samagri arrangements including pure herbs, desi ghee, samidha wood, dhoop, and ritual items. Alternatively, we can provide you an itemized checklist if you prefer to procure them yourself.'
  },
  {
    id: 'f2',
    questionHi: 'पूजा के लिए कितने दिन पहले बुकिंग करानी चाहिए?',
    questionEn: 'How many days in advance should we book?',
    answerHi: 'गृह प्रवेश, विवाह या बड़े अनुष्ठानों के लिए शुभ मुहूर्त निकालने हेतु कम से कम 2 से 5 दिन पहले संपर्क करना उत्तम रहता है। तथापि, यदि तत्काल (Same-day या Next-day) आवश्यकता हो, तो भी हम उपलब्धता के आधार पर सेवा प्रदान करते हैं।',
    answerEn: 'For major events like Griha Pravesh or Wedding ceremonies, we recommend booking 2 to 5 days in advance for auspicious Muhurat calculations. However, we also cater to same-day or urgent requests based on availability.'
  },
  {
    id: 'f3',
    questionHi: 'क्या शुभ मुहूर्त का विचार निःशुल्क किया जाता है?',
    questionEn: 'Is auspicious Muhurat consultation complimentary?',
    answerHi: 'हाँ! हमारे यहाँ पूजा बुक करने वाले सभी यजमानों के लिए पंचांग देखकर सर्वश्रेष्ठ तिथि, वार एवं नक्षत्र आधारित शुभ मुहूर्त की गणना पूर्णतः निःशुल्क की जाती है।',
    answerEn: 'Yes! For all families booking rituals with us, comprehensive Muhurat calculation according to the Hindu Panchang and your Rashi is completely free of charge.'
  },
  {
    id: 'f4',
    questionHi: 'दक्षिणा और भुगतान के क्या नियम हैं?',
    questionEn: 'What are the dakshina rates and payment options?',
    answerHi: 'हमारी दक्षिणा अत्यंत पारदर्शी, यथोचित एवं शास्त्रसम्मत है। पूजा समाप्ति के पश्चात ही आप दक्षिणा का भुगतान नकद (Cash) अथवा UPI / Google Pay / PhonePe / Paytm द्वारा सीधे पंडित जी को कर सकते हैं।',
    answerEn: 'Our dakshina is very modest, auspicious, and transparent with zero hidden costs. Payment is accepted only after the successful completion of the ritual via Cash or UPI (Google Pay, PhonePe, Paytm).'
  },
  {
    id: 'f5',
    questionHi: 'क्या पंडित जी फ्लैट्स और अपार्टमेंट्स में हवन की विशेष सावधानी रखते हैं?',
    questionEn: 'How is Hawan handled in high-rise apartments and flats?',
    answerHi: 'जी हाँ! हाई-राइज सोसायटियों और फ्लैट्स में हम विशेष धुआं-रहित हवन कुंड, शुद्ध देशी गाय का घी एवं चुनिंदा सुगंधित औषधियों का प्रयोग करते हैं जिससे अग्नि अलार्म (Smoke Detectors) सक्रिय न हों और घर में पवित्र सुगंध व सकारात्मकता फैले।',
    answerEn: 'Yes! For high-rise apartments in Noida, Greater Noida, and Ghaziabad, we use specialized smoke-mitigated copper hawan kunds, pure A2 cow ghee, and fragrant herbal samagri to avoid triggering smoke alarms while ensuring pure Vedic sanctity.'
  }
];

export const WHY_CHOOSE_US = [
  {
    titleHi: 'शास्त्रोक्त वैदिक विधि',
    titleEn: 'Authentic Shastra Vidhi',
    descHi: 'गुरुकुल प्रशिक्षित आचार्य द्वारा शुद्ध संस्कृत श्लोकोच्चारण एवं विधि-विधान।',
    descEn: 'Pristine Sanskrit mantra pronunciation and strict adherence to Vedic scriptures.',
    icon: 'Scroll'
  },
  {
    titleHi: 'समयबद्ध एवं विश्वसनीय',
    titleEn: 'Punctual & Trustworthy',
    descHi: 'निर्धारित मुहूर्त पर आपके घर या प्रतिष्ठान पर समय से उपस्थिति।',
    descEn: 'Guaranteed on-time arrival across all NCR sectors for your auspicious Muhurat.',
    icon: 'Clock'
  },
  {
    titleHi: 'पूर्ण सामग्री व्यवस्था',
    titleEn: 'Complete Samagri Support',
    descHi: 'शुद्ध देशी घी, जड़ी-बूटियाँ एवं पूजन सामग्री की सुगम व्यवस्था।',
    descEn: 'Hassle-free arrangement of 100% pure puja samagri, flowers, and herbal mixes.',
    icon: 'PackageCheck'
  },
  {
    titleHi: 'पारदर्शी दक्षिणा',
    titleEn: 'Transparent Dakshina',
    descHi: 'कोई छिपा हुआ शुल्क नहीं। श्रद्धा एवं योग्यता अनुसार यथोचित दक्षिणा।',
    descEn: 'Fair, transparent and modest dakshina payable post-ceremony with zero hidden charges.',
    icon: 'HandCoins'
  },
  {
    titleHi: 'अपार्टमेंट फ्रेंडली हवन',
    titleEn: 'Apartment-Friendly Hawan',
    descHi: 'सोसायटियों और फ्लैट्स के लिए विशेष न्यूनतम-धुआं हवन कुंड एवं औषधियां।',
    descEn: 'Specially managed low-smoke fire offerings suited for high-rise flat smoke detectors.',
    icon: 'Home'
  },
  {
    titleHi: 'निःशुल्क मुहूर्त परामर्श',
    titleEn: 'Free Muhurat Guidance',
    descHi: 'गृह प्रवेश, विवाह या नामकरण हेतु पंचांग अनुसार सर्वश्रेष्ठ समय विचार।',
    descEn: 'Detailed Panchang astrological analysis to pinpoint the most auspicious date and hour.',
    icon: 'CalendarCheck'
  }
];

