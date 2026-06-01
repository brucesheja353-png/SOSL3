import { ref } from 'vue'

export const locale = ref('en')

const messages = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      service: 'Service',
      gallery: 'Gallery',
      photos: 'Photos',
      videos: 'Videos',
      destination: 'Destination',
      contact: 'Contact',
      northern: 'Northern Province',
      western: 'Western Province',
      eastern: 'Eastern Province',
      southern: 'Southern Province',
      kigali: 'Kigali City'
    },
    footer: {
      title: 'TEMBERA URWANDA',
      description: 'Discover the beauty of the land of a Thousand hills',
      links: 'Quick links',
      destination: 'Destination',
      contact: 'Contact',
      copy: '©2025 Visit Rwanda. All rights reserved. Done by Bruce'
    },
    home: {
      tagline: 'Discover Rwanda',
      title: 'Explore the beauty of a thousand hills',
      description: 'From misty mountains to vibrant culture, Rwanda offers unforgettable safaris, inspiring heritage journeys, and authentic local experiences.',
      book: 'Book a tour',
      learn: 'Learn more',
      cards: {
        safari: 'Track mountain gorillas, visit Akagera National Park, and see the Big Five in Rwanda’s stunning conservation reserves.',
        culture: 'Connect with local communities, explore traditional villages, and experience the rhythms of Rwanda’s music, crafts, and cuisine.',
        adventure: 'Hike the Volcanoes, kayak across lakes, and discover lush landscapes that make Rwanda one of Africa’s most beautiful destinations.'
      }
    },
    about: {
      label: 'About Us',
      title: 'Your gateway to authentic Rwanda experiences',
      description: 'We are a tourism team dedicated to crafting immersive journeys across Rwanda. From gorilla trekking and national parks to cultural villages and city escapes, our goal is to make every visit unforgettable.',
      why: 'Why choose Rwanda?',
      whyDescription: 'Rwanda blends abundant wildlife, rich cultural heritage, and safe, welcoming hospitality. We guide travelers to the best sights while designing seamless experiences for every group.',
      reasons: {
        itinerary: 'Personalized itineraries designed around your interests, pace, and budget.',
        expertise: 'Local guides with insider knowledge of Rwanda’s landscapes and stories.',
        responsible: 'Travel that supports conservation, communities, and sustainable development.'
      },
      stats: {
        experience: 'Years of experience',
        tours: 'Curated tour options',
        guided: 'Local-guided adventures'
      }
    },
    service: {
      title: 'Travel services built for your Rwanda journey',
      intro: 'From planning to on-the-ground guidance, our packages include comfortable lodges, expert guides, transport, and unforgettable cultural experiences.',
      cards: {
        safari: 'Gorilla trekking, wildlife safaris, and national park adventures in Rwanda’s most iconic regions.',
        culture: 'Cultural tours, community visits, and traditional Rwandan cuisine experiences.',
        custom: 'Custom itineraries for families, couples, groups, and business travelers.'
      },
      stats: {
        support: '24/7 local support and travel assistance.',
        sustainable: 'Responsible travel with conservation and community partners.',
        flexible: 'Flexible packages for all budgets and season dates.'
      }
    },
    contact: {
      intro: 'Start planning your Rwanda adventure',
      description: 'Have questions about tours, dates, or travel logistics? Our team is ready to help you create a custom itinerary for your next trip.',
      emailTitle: 'Email',
      phoneTitle: 'Phone',
      officeTitle: 'Office',
      hoursTitle: 'Opening Hours',
      responseTitle: 'Fast response',
      quoteTitle: 'Custom quotes',
      messagePlaceholder: 'Tell us about your plans',
      name: 'Full name',
      email: 'Email'
    },
    destination: {
      title: 'Discover Rwanda’s provinces',
      description: 'Explore each region through landscapes, wildlife, culture, and city highlights. Select a province to begin your journey.',
      cards: {
        northern: {
          title: 'Northern Province',
          copy: 'Home to Volcanoes National Park, golden lakes, and Kigali’s mountain views.'
        },
        western: {
          title: 'Western Province',
          copy: 'Lake Kivu, Nyungwe Forest, and sweeping tea plantations await.'
        },
        eastern: {
          title: 'Eastern Province',
          copy: 'Akagera wildlife, lakeside safaris, and authentic village culture.'
        },
        southern: {
          title: 'Southern Province',
          copy: 'Rolling hills, coffee farms, historic sites, and natural waterfalls.'
        },
        kigali: {
          title: 'Kigali City',
          copy: 'Modern city life, museums, markets, and Rwanda’s central hub.'
        }
      }
    },
    gallery: {
      title: 'Explore Rwanda through images',
      subtitle: 'A selection of beautiful moments from Rwanda’s landscapes and people.',
      photos: 'Photo gallery',
      videos: 'Video stories'
    },
    photo: {
      title: 'Rwanda in pictures',
      subtitle: 'A gallery of our favorite landscapes, wildlife, and cultural scenes.',
      text: 'Each image captures the warmth, color, and spirit of Rwanda’s cities, hills, and wildlife.'
    },
    videos: {
      title: 'Video stories from Rwanda',
      subtitle: 'Watch short stories that bring Rwanda’s landscapes, culture, and wildlife to life.',
      cards: {
        gorillas: {
          title: 'Gorilla Trekking',
          description: 'Discover how gorilla treks are guided and why they are one of Rwanda’s most unforgettable experiences.'
        },
        lake: {
          title: 'Lake Kivu Escape',
          description: 'A peaceful lakeside retreat, boat rides, and sunset views at Lake Kivu.'
        },
        culture: {
          title: 'Rwandan Culture',
          description: 'Traditional music, local markets, and community visits across the country.'
        }
      }
    },
    provinces: {
      eastern: {
        title: 'Eastern Province',
        subtitle: 'Akagera wildlife, lake views, and rural culture.',
        highlights: [
          'Akagera National Park safari drives',
          'Lake Ihema boat trips and birdwatching',
          'Community visits to traditional village experiences'
        ]
      },
      northern: {
        title: 'Northern Province',
        subtitle: 'Volcanoes, gorillas, and mountain adventures.',
        highlights: [
          'Gorilla trekking in Volcanoes National Park',
          'Hiking scenic mountain trails and Dian Fossey sites',
          'Coffee farm tours and local community visits'
        ]
      },
      southern: {
        title: 'Southern Province',
        subtitle: 'Waterfalls, tea plantations, and cultural heritage.',
        highlights: [
          'Nyungwe forest canopy walk experiences',
          'Tea estate scenery and coffee tasting',
          'Historic sites and scenic waterfalls'
        ]
      },
      western: {
        title: 'Western Province',
        subtitle: 'Lake Kivu shores, rainforest, and peaceful retreats.',
        highlights: [
          'Lake Kivu beach relaxation and boat tours',
          'Nyungwe rainforest and chimpanzee watching',
          'Sunset views over clear water and hills'
        ]
      },
      kigali: {
        title: 'Kigali City',
        subtitle: 'A clean, modern city with rich culture and markets.',
        highlights: [
          'Kigali Genocide Memorial and museums',
          'Local markets, cafes, and art galleries',
          'City tours, nightlife, and urban dining'
        ]
      }
    }
  },
  fr: {
    nav: {
      home: 'Accueil',
      about: 'À propos',
      service: 'Service',
      gallery: 'Galerie',
      photos: 'Photos',
      videos: 'Vidéos',
      destination: 'Destination',
      contact: 'Contact',
      northern: 'Province Nord',
      western: 'Province Ouest',
      eastern: 'Province Est',
      southern: 'Province Sud',
      kigali: 'Ville de Kigali'
    },
    footer: {
      title: 'TEMBERA URWANDA',
      description: 'Découvrez la beauté du pays des mille collines',
      links: 'Liens rapides',
      destination: 'Destination',
      contact: 'Contact',
      copy: '©2025 Visit Rwanda. Tous droits réservés. Réalisé par Bruce'
    },
    home: {
      tagline: 'Découvrez le Rwanda',
      title: 'Explorez la beauté des mille collines',
      description: 'Des montagnes brumeuses à la culture vibrante, le Rwanda offre des safaris inoubliables, des voyages patrimoniaux inspirants et des expériences authentiques.',
      book: 'Réservez une visite',
      learn: 'En savoir plus',
      cards: {
        safari: 'Partez à la recherche des gorilles de montagne, visite d’Akagera et observez les Big Five.',
        culture: 'Connectez-vous aux communautés locales, explorez les villages traditionnels et découvrez l’artisanat.',
        adventure: 'Grimpez les volcans, naviguez sur les lacs et découvrez des paysages luxuriants.'
      }
    },
    about: {
      label: 'À propos de nous',
      title: 'Votre porte d’entrée vers des expériences authentiques au Rwanda',
      description: 'Nous sommes une équipe dédiée à la création de voyages immersifs au Rwanda. Du trekking des gorilles aux parcs nationaux, en passant par les villages culturels et les escapades urbaines.',
      why: 'Pourquoi choisir le Rwanda?',
      whyDescription: 'Le Rwanda allie une faune abondante, un riche patrimoine culturel et une hospitalité sûre et accueillante.',
      reasons: {
        itinerary: 'Itinéraires personnalisés autour de vos intérêts, rythme et budget.',
        expertise: 'Guides locaux avec une connaissance approfondie du pays.',
        responsible: 'Voyage responsable soutenant la conservation et les communautés.'
      },
      stats: {
        experience: 'Années d’expérience',
        tours: 'Options de circuits',
        guided: 'Aventures guidées localement'
      }
    },
    service: {
      title: 'Services de voyage pour votre séjour au Rwanda',
      intro: 'De la planification à l’accompagnement sur place, nos forfaits incluent lodges, guides experts, transport et expériences culturelles uniques.',
      cards: {
        safari: 'Trekking de gorilles, safaris fauniques et aventures dans les parcs nationaux.',
        culture: 'Tours culturels, visites communautaires et dégustations locales.',
        custom: 'Itinéraires sur mesure pour familles, couples, groupes ou affaires.'
      },
      stats: {
        support: 'Assistance locale 24/7.',
        sustainable: 'Tourisme responsable avec des partenaires locaux.',
        flexible: 'Forfaits flexibles pour tous budgets et saisons.'
      }
    },
    contact: {
      intro: 'Commencez à planifier votre aventure au Rwanda',
      description: 'Des questions sur les circuits, les dates ou la logistique ? Notre équipe est prête à vous aider.',
      emailTitle: 'Email',
      phoneTitle: 'Téléphone',
      officeTitle: 'Bureau',
      hoursTitle: 'Heures d’ouverture',
      responseTitle: 'Réponse rapide',
      quoteTitle: 'Devis sur mesure',
      messagePlaceholder: 'Parlez-nous de vos projets',
      name: 'Nom complet',
      email: 'Email'
    },
    destination: {
      title: 'Découvrez les provinces du Rwanda',
      description: 'Explorez chaque région à travers ses paysages, sa faune, sa culture et ses villes.',
      cards: {
        northern: {
          title: 'Province Nord',
          copy: 'Volcanoes, lacs dorés et panoramas montagneux.'
        },
        western: {
          title: 'Province Ouest',
          copy: 'Le lac Kivu, la forêt de Nyungwe et des plantations de thé.'
        },
        eastern: {
          title: 'Province Est',
          copy: 'Akagera, safaris lacustres et villages authentiques.'
        },
        southern: {
          title: 'Province Sud',
          copy: 'Collines verdoyantes, fermes de café et cascades historiques.'
        },
        kigali: {
          title: 'Ville de Kigali',
          copy: 'Ville moderne, musées, marchés et capitale dynamique.'
        }
      }
    },
    gallery: {
      title: 'Explorez le Rwanda en images',
      subtitle: 'Une sélection de moments magnifiques.',
      photos: 'Galerie photo',
      videos: 'Histoires vidéo'
    },
    photo: {
      title: 'Le Rwanda en images',
      subtitle: 'Une galerie de paysages, faune et scènes culturelles.',
      text: 'Chaque image capture la chaleur, la couleur et l’âme du pays des mille collines.'
    },
    videos: {
      title: 'Histoires vidéo du Rwanda',
      subtitle: 'Regardez des courts métrages qui racontent la nature et la culture.',
      cards: {
        gorillas: {
          title: 'Trekking des gorilles',
          description: 'Découvrez le trekking des gorilles et pourquoi c’est une expérience inoubliable.'
        },
        lake: {
          title: 'Évasion au lac Kivu',
          description: 'Détente au bord du lac, balades en bateau et couchers de soleil.'
        },
        culture: {
          title: 'Culture rwandaise',
          description: 'Musique traditionnelle, marchés locaux et visites communautaires.'
        }
      }
    },
    provinces: {
      eastern: {
        title: 'Province Est',
        subtitle: 'La faune d’Akagera, les lacs et la culture rurale.',
        highlights: [
          'Safaris à Akagera',
          'Balades en bateau sur le lac Ihema',
          'Visites de villages traditionnels'
        ]
      },
      northern: {
        title: 'Province Nord',
        subtitle: 'Volcans, gorilles et aventures en montagne.',
        highlights: [
          'Trekking de gorilles dans le Parc des Volcans',
          'Randonnées sur les sentiers montagneux',
          'Visites de fermes de café'
        ]
      },
      southern: {
        title: 'Province Sud',
        subtitle: 'Cascades, plantations de thé et patrimoine culturel.',
        highlights: [
          'Forêt de Nyungwe et ponts suspendus',
          'Tourisme café et thé',
          'Sites historiques et cascades'
        ]
      },
      western: {
        title: 'Province Ouest',
        subtitle: 'Le lac Kivu, la forêt et des retraites paisibles.',
        highlights: [
          'Plages du lac Kivu',
          'Forêt de Nyungwe et chimpanzés',
          'Couchers de soleil sur les collines'
        ]
      },
      kigali: {
        title: 'Ville de Kigali',
        subtitle: 'Ville propre et moderne avec de riches marchés.',
        highlights: [
          'Mémorial du génocide de Kigali',
          'Marchés et galeries d’art',
          'Visites urbaines et restaurants'
        ]
      }
    }
  },
  rw: {
    nav: {
      home: 'Ahabanza',
      about: 'Ibyerekeye',
      service: 'Serivisi',
      gallery: 'Galleri',
      photos: 'Amafoto',
      videos: 'Amavidewo',
      destination: 'Aho gusura',
      contact: 'Twandikire',
      northern: 'Amajyaruguru',
      western: 'Iburengerazuba',
      eastern: 'Iburasirazuba',
      southern: 'Amajyepfo',
      kigali: 'Umujyi wa Kigali'
    },
    footer: {
      title: 'TEMBERA URWANDA',
      description: 'Menya ubwiza bw’igihugu cy’imisozi igihumbi',
      links: 'Amahugurwa yihuse',
      destination: 'Ahantu',
      contact: 'Twandikire',
      copy: '©2025 Visit Rwanda. Uburenganzira bwose burabitswe. Byakozwe na Bruce'
    },
    home: {
      tagline: 'Menya u Rwanda',
      title: 'Sangira ubwiza bw’imisozi igihumbi',
      description: 'Uhereye ku misozi yanduranye n’ubukungu bw’umuco, u Rwanda rutanga safaris zidashira mu mutwe, ingendo z’ubwenge, n’ibyiyumvo by’ukuri.',
      book: 'Tegura urugendo',
      learn: 'Menya byinshi',
      cards: {
        safari: 'Kurikirana ingagi z’ibirunga, gusura Akagera no kureba inyamaswa nini mu mashyamba.',
        culture: 'Kwegereza abaturage, gusura imidugudu gakondo, no kumva umuziki n’ubugeni.',
        adventure: 'Kuzamuka imisozi y’ibirunga, kugenda ku mazi, no kubona ubutaka butoshye bwiza.'
      }
    },
    about: {
      label: 'Ibyerekeye',
      title: 'Inzira yawe y’uburambe nyakuri mu Rwanda',
      description: 'Turi itsinda ry’abakora ubukerarugendo ryibanda ku ngendo ziteguranyijwe neza mu Rwanda. Uhereye ku rugendo rw’ingagi kugeza ku mipaka y’umujyi, intego ni ukugira uko gusura kudasanzwe.',
      why: 'Kuki wahitamo u Rwanda?',
      whyDescription: 'U Rwanda rusanganwe inyamaswa nyinshi, umuco ukungahaye, n’akarere kizewe kandi gushimisha.',
      reasons: {
        itinerary: 'Ingendo zitunganyirizwa abakiriya hashingiwe ku byo bakunda n’ubushobozi.',
        expertise: 'Abayobozi baturuka hano bafite ubumenyi bwimbitse ku gihugu.',
        responsible: 'Ubukerarugendo butabara ibidukikije n’imiryango yaho.'
      },
      stats: {
        experience: 'Imyaka y’ubunararibonye',
        tours: 'Ubukerarugendo bwateguwe',
        guided: 'Ingendo ziyobowe na ba rwiyemezamirimo b’abaturage'
      }
    },
    service: {
      title: 'Serivisi z’ingendo zawe mu Rwanda',
      intro: 'Guhera ku gutegura kugeza ku kuyobora ku butaka, gahunda zacu zirimo amahoteri meza, abayobozi b’inzobere, gutwara, n’ibikorwa by’umuco.',
      cards: {
        safari: 'Ingendo z’ingagi, safaris, n’ubukerarugendo mu parike z’igihugu.',
        culture: 'Inzira z’umuco, gusura imiryango, no kwishimira ibiryo byaho.',
        custom: 'Ingendo zateguwe ku muryango, abakundana, amatsinda cyangwa inama.'
      },
      stats: {
        support: 'Ubufasha bwo ku mugaragaro 24/7.',
        sustainable: 'Ubukerarugendo burengera ibidukikije n’imiryango.',
        flexible: 'Gahunda zihinduka ku ngengo y’imari zose n’ibihe byose.'
      }
    },
    contact: {
      intro: 'Tangira gutegura urugendo rwawe mu Rwanda',
      description: 'Ufite ibibazo ku ngendo, amatariki cyangwa uko uzajya utembera? Itsinda ryacu riragutegereje.',
      emailTitle: 'Imeli',
      phoneTitle: 'Telefoni',
      officeTitle: 'Ibiro',
      hoursTitle: 'Amasaha yo gukorera',
      responseTitle: 'Igisubizo vuba',
      quoteTitle: 'Igitabo cyihariye',
      messagePlaceholder: 'Mutuye ku byo uteganya',
      name: 'Amazina yawe',
      email: 'Imeli'
    },
    destination: {
      title: 'Sura uturere tw’u Rwanda',
      description: 'Sobanukirwa buri karere mu misozi, inyamaswa, umuco n’imijyi itandukanye.',
      cards: {
        northern: {
          title: 'Amajyaruguru',
          copy: 'Ibirunga, ibiyaga byiza, n’imisozi itatse.'
        },
        western: {
          title: 'Iburengerazuba',
          copy: 'Ikiyaga Kivu, ishyamba rya Nyungwe n’imigabane y’icyayi.'
        },
        eastern: {
          title: 'Iburasirazuba',
          copy: 'Akagera, safaris y’ibiyaga, n’imidugudu y’ukuri.'
        },
        southern: {
          title: 'Amajyepfo',
          copy: 'Imisozi itoshye, imirima y’ikawa n’amaterasi yose.'
        },
        kigali: {
          title: 'Umujyi wa Kigali',
          copy: 'Umujyi ukeye, ingoro n’isoko ry’umurage.'
        }
      }
    },
    gallery: {
      title: 'Menya u Rwanda mu mafoto',
      subtitle: 'Amafoto yerekana uburanga n’umurava by’igihugu.',
      photos: 'Amafoto',
      videos: 'Amavidewo'
    },
    photo: {
      title: 'U Rwanda mu mafoto',
      subtitle: 'Galleri y’imisozi, inyamaswa n’imico y’abantu.',
      text: 'Buri foto ifata ubushyuhe, amabara n’umwuka w’igihugu cy’imisozi igihumbi.'
    },
    videos: {
      title: 'Amavidewo avugira u Rwanda',
      subtitle: 'Reba inkuru ngufi zivuga imisozi, umuco n’inyamaswa.',
      cards: {
        gorillas: {
          title: 'Ingendo z’ingagi',
          description: 'Menya uburyo ingendo z’ingagi zitunganywa n’impamvu ari uburambe budasanzwe.'
        },
        lake: {
          title: 'Ku kiyaga Kivu',
          description: 'Imyidagaduro ku nkengero z’ikiyaga, ingendo mu bwato n’umuhondo w’izuba.'
        },
        culture: {
          title: 'Umuco nyarwanda',
          description: 'Umuziki gakondo, amasoko n’umuryango.'
        }
      }
    },
    provinces: {
      eastern: {
        title: 'Iburasirazuba',
        subtitle: 'Akagera, ibiyaga n’umuco w’imidugudu.',
        highlights: [
          'Safari muri Parike ya Akagera',
          'Urugendo mu bwato ku kiyaga Ihema',
          'Gusura imidugudu gakondo'
        ]
      },
      northern: {
        title: 'Amajyaruguru',
        subtitle: 'Ibirunga, ingagi n’ubukerarugendo bwo mu misozi.',
        highlights: [
          'Kuzamuka no gusura ingagi mu birunga',
          'Imyitozo ku mihanda y’imisozi',
          'Gusura imirima y’ikawa'
        ]
      },
      southern: {
        title: 'Amajyepfo',
        subtitle: 'Cascades, icyayi n’umurage.',
        highlights: [
          'Ishyamba rya Nyungwe n’ingendo ku byatsi',
          'Kunywa ikawa no gusura icyayi',
          'Gusura amazi meza n’amateka'
        ]
      },
      western: {
        title: 'Iburengerazuba',
        subtitle: 'Ikiyaga Kivu, ishyamba n’ituze.',
        highlights: [
          'Amahoteri ku kiyaga Kivu',
          'Inzira zo mu ishyamba rya Nyungwe',
          'Amirebere y’izuba ku butaka'
        ]
      },
      kigali: {
        title: 'Umujyi wa Kigali',
        subtitle: 'Umujyi muzima, amasoko n’ahantu nyaburanga.',
        highlights: [
          'Urwibutso rwa Jenoside rwa Kigali',
          'Amasoko n’amamurika y’ubuhanzi',
          'Inzira z’umujyi n’amarestora'
        ]
      }
    }
  }
}

export function setLocale(language) {
  if (messages[language]) {
    locale.value = language
  }
}

export function t(path) {
  const value = path.split('.').reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), messages[locale.value])
  if (value !== undefined) return value
  const fallback = path.split('.').reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), messages.en)
  return fallback ?? path
}

export function getLocaleLabel(lang) {
  if (lang === 'en') return 'EN'
  if (lang === 'fr') return 'FR'
  if (lang === 'rw') return 'RW'
  return lang
}
