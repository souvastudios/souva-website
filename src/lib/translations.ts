export interface Translations {
  // Header
  header: {
    blog: string;
  };
  
  // Home Page
  home: {
    hero: {
      title: string;
      subtitle: string;
    };
    ecosystem: {
      title: string;
      products: {
        diary84: {
          title: string;
          description: string;
          status: string;
          buttons: {
            appStore: string;
            googlePlay: string;
          };
        };
        focule: {
          title: string;
          description: string;
          status: string;
          button: string;
        };
        ovlo: {
          title: string;
          description: string;
          status: string;
          button: string;
        };
        souva: {
          title: string;
          description: string;
          status: string;
          button: string;
        };
        voona: {
          title: string;
          description: string;
          status: string;
          button: string;
        };
        viamos: {
          title: string;
          description: string;
          status: string;
          button: string;
        };
      };
    };
  };
  
  // Blog
  blog: {
    title: string;
    subtitle: string;
    loading: string;
    noPosts: string;
    noPostsSubtitle: string;
    readMore: string;
    backToBlog: string;
    postNotFound: string;
    postNotFoundDescription: string;
    loadingPost: string;
  };
  
  // Footer
  footer: {
    copyright: string;
    privacyPolicy: string;
    termsOfUse: string;
    socialLabels: {
      twitter: string;
      github: string;
    };
  };
  
  // Common
  common: {
    learnMore: string;
    inConceptPhase: string;
    inDevelopment: string;
    liveOnAppStore: string;
    comingSoon: string;
    ourNorthStar: string;
    concept: string;
  };
  
  // Privacy Policy
  privacy: {
    title: string;
    lastUpdated: string;
    sections: {
      introduction: {
        title: string;
        content: string;
      };
      informationWeCollect: {
        title: string;
        intro: string;
        informationYouProvide: {
          title: string;
          items: string[];
        };
        informationWeCollectAutomatically: {
          title: string;
          items: string[];
        };
      };
      howWeUseInformation: {
        title: string;
        intro: string;
        items: string[];
      };
      informationSharing: {
        title: string;
        intro: string;
        items: string[];
      };
      dataSecurity: {
        title: string;
        content: string;
      };
      dataRetention: {
        title: string;
        content: string;
      };
      yourRights: {
        title: string;
        intro: string;
        items: string[];
      };
      childrensPrivacy: {
        title: string;
        content: string;
      };
      changesToPolicy: {
        title: string;
        content: string;
      };
      contactUs: {
        title: string;
        content: string;
      };
    };
  };
  
  // Terms of Use
  terms: {
    title: string;
    lastUpdated: string;
    sections: {
      acceptanceOfTerms: {
        title: string;
        content: string;
      };
      descriptionOfServices: {
        title: string;
        content: string;
      };
      userAccounts: {
        title: string;
        intro: string;
        items: string[];
      };
      acceptableUse: {
        title: string;
        intro: string;
        items: string[];
      };
      intellectualProperty: {
        title: string;
        content: string;
      };
      privacy: {
        title: string;
        content: string;
      };
      paymentsAndSubscriptions: {
        title: string;
        intro: string;
        items: string[];
      };
      termination: {
        title: string;
        content: string;
      };
      disclaimers: {
        title: string;
        content: string;
      };
      limitationOfLiability: {
        title: string;
        content: string;
      };
      governingLaw: {
        title: string;
        content: string;
      };
      changesToTerms: {
        title: string;
        content: string;
      };
      contactInformation: {
        title: string;
        content: string;
      };
    };
  };
  
  // Product Pages
  products: {
    common: {
      backToHome: string;
      comingSoon: string;
      beFirstToKnow: string;
      followJourney: string;
      readManifesto: string;
      availableNow: string;
      downloadIos: string;
      downloadAndroid: string;
      keyFeatures: string;
      howItWorks: string;
      perfectFor: string;
      whyDifferent: string;
      problemSolving: string;
      ourVision: string;
      features: string;
    };
    
    ovlo: {
      title: string;
      subtitle: string;
      description: string[];
      keyFeatures: {
        expiringLinks: {
          title: string;
          description: string;
        };
        clickLimits: {
          title: string;
          description: string;
        };
        smartAnalytics: {
          title: string;
          description: string;
        };
        customBranding: {
          title: string;
          description: string;
        };
      };
      useCases: {
        contentCreators: {
          title: string;
          description: string;
        };
        professionals: {
          title: string;
          description: string;
        };
        eventOrganizers: {
          title: string;
          description: string;
        };
      };
      philosophy: {
        title: string;
        quote: string;
      };
      getNotified: string;
    };
    
    souva: {
      title: string;
      subtitle: string;
      description: string[];
      howItWorks: {
        structuredFormat: {
          title: string;
          description: string;
        };
        evidenceBased: {
          title: string;
          description: string;
        };
        respectfulModeration: {
          title: string;
          description: string;
        };
        learningFocused: {
          title: string;
          description: string;
        };
      };
      problemSolving: {
        echoChambers: {
          title: string;
          description: string;
        };
        toxicDiscourse: {
          title: string;
          description: string;
        };
        informationOverload: {
          title: string;
          description: string;
        };
      };
      vision: {
        title: string;
        quote: string;
      };
      getNotified: string;
    };
    
    focule: {
      title: string;
      subtitle: string;
      description: string[];
      keyFeatures: {
        intentionSetting: {
          title: string;
          description: string;
        };
        smartBreaks: {
          title: string;
          description: string;
        };
        adaptiveTiming: {
          title: string;
          description: string;
        };
        mindfulNotifications: {
          title: string;
          description: string;
        };
      };
      philosophy: {
        title: string;
        quote: string;
      };
      getNotified: string;
    };
    
    diary84: {
      title: string;
      subtitle: string;
      description: string[];
      features: {
        constraintBased: {
          title: string;
          description: string;
        };
        privacyFirst: {
          title: string;
          description: string;
        };
        dailyHabit: {
          title: string;
          description: string;
        };
        cleanInterface: {
          title: string;
          description: string;
        };
      };
    };
  };
}

export const translations: Record<'en' | 'tr', Translations> = {
  en: {
    header: {
      blog: 'Blog',
    },
    home: {
      hero: {
        title: 'Thoughtful Digital Sanctuaries',
        subtitle: 'Souva builds calm, focused, and beautiful software designed to give you back your time and attention. This is our work.',
      },
      ecosystem: {
        title: 'Our Ecosystem',
        products: {
          diary84: {
            title: '84Diary',
            description: 'Your day in 84 characters.',
            status: 'Live on App Store',
            buttons: {
              appStore: 'App Store',
              googlePlay: 'Google Play',
            },
          },
          focule: {
            title: 'Focule',
            description: 'Work Better. Break Smarter.',
            status: 'In Development',
            button: 'Learn More',
          },
          ovlo: {
            title: 'Ovlo',
            description: 'Your links, your rules.',
            status: 'Coming Soon',
            button: 'Learn More',
          },
          souva: {
            title: 'Souva',
            description: 'The Arena for Ideas.',
            status: 'Our North Star',
            button: 'Learn More',
          },
          voona: {
            title: 'Voona',
            description: 'A collective daily journal.',
            status: 'Concept',
            button: 'In Concept Phase',
          },
          viamos: {
            title: 'Viamos',
            description: 'Connect through feelings.',
            status: 'Concept',
            button: 'In Concept Phase',
          },
        },
      },
    },
    blog: {
      title: 'Blog',
      subtitle: 'Thoughts on digital minimalism, productivity, and building calm technology.',
      loading: 'Loading posts...',
      noPosts: 'No blog posts yet.',
      noPostsSubtitle: 'Check back soon for our latest thoughts and insights.',
      readMore: 'Read more',
      backToBlog: 'Back to Blog',
      postNotFound: 'Post Not Found',
      postNotFoundDescription: "The blog post you're looking for doesn't exist.",
      loadingPost: 'Loading post...',
    },
    footer: {
      copyright: '© 2025 Souva',
      privacyPolicy: 'Privacy Policy',
      termsOfUse: 'Terms of Use',
      socialLabels: {
        twitter: 'Twitter',
        github: 'GitHub',
      },
    },
    common: {
      learnMore: 'Learn More',
      inConceptPhase: 'In Concept Phase',
      inDevelopment: 'In Development',
      liveOnAppStore: 'Live on App Store',
      comingSoon: 'Coming Soon',
      ourNorthStar: 'Our North Star',
      concept: 'Concept',
    },
    privacy: {
      title: 'Privacy Policy',
      lastUpdated: 'Last updated: January 7, 2025',
      sections: {
        introduction: {
          title: '1. Introduction',
          content: 'This Privacy Policy applies to all applications and services developed by SouvaStudios ("we," "our," or "us"), including but not limited to 84Diary and any future applications. We are committed to protecting your privacy and being transparent about how we collect, use, and share your information.',
        },
        informationWeCollect: {
          title: '2. Information We Collect',
          intro: 'We may collect the following types of information:',
          informationYouProvide: {
            title: '2.1 Information You Provide',
            items: [
              'Account information (email address, username)',
              'Content you create within our applications',
              'Communications with us',
            ],
          },
          informationWeCollectAutomatically: {
            title: '2.2 Information We Collect Automatically',
            items: [
              'Device information (device type, operating system)',
              'Usage information (features used, time spent)',
              'Log data (IP address, access times)',
            ],
          },
        },
        howWeUseInformation: {
          title: '3. How We Use Your Information',
          intro: 'We use your information to:',
          items: [
            'Provide and improve our services',
            'Communicate with you about updates and features',
            'Ensure security and prevent fraud',
            'Analyze usage patterns to improve user experience',
          ],
        },
        informationSharing: {
          title: '4. Information Sharing',
          intro: 'We do not sell, trade, or otherwise transfer your personal information to third parties, except in the following circumstances:',
          items: [
            'With your explicit consent',
            'To comply with legal obligations',
            'To protect our rights and safety',
            'With service providers who assist us in operating our applications',
          ],
        },
        dataSecurity: {
          title: '5. Data Security',
          content: 'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.',
        },
        dataRetention: {
          title: '6. Data Retention',
          content: 'We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law.',
        },
        yourRights: {
          title: '7. Your Rights',
          intro: 'You have the right to:',
          items: [
            'Access your personal information',
            'Correct inaccurate information',
            'Request deletion of your information',
            'Object to processing of your information',
            'Request data portability',
          ],
        },
        childrensPrivacy: {
          title: '8. Children\'s Privacy',
          content: 'Our applications are not intended for children under 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.',
        },
        changesToPolicy: {
          title: '9. Changes to This Policy',
          content: 'We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "last updated" date.',
        },
        contactUs: {
          title: '10. Contact Us',
          content: 'If you have any questions about this Privacy Policy, please contact us through our website or applications.',
        },
      },
    },
    terms: {
      title: 'Terms of Use',
      lastUpdated: 'Last updated: January 7, 2025',
      sections: {
        acceptanceOfTerms: {
          title: '1. Acceptance of Terms',
          content: 'By accessing and using any applications or services developed by SouvaStudios ("we," "our," or "us"), including but not limited to 84Diary and any future applications, you agree to be bound by these Terms of Use ("Terms"). If you do not agree to these Terms, you may not use our services.',
        },
        descriptionOfServices: {
          title: '2. Description of Services',
          content: 'SouvaStudios provides digital tools and applications designed to enhance productivity, creativity, and well-being while respecting user privacy and focus. Our services may include mobile applications, web applications, and related digital services.',
        },
        userAccounts: {
          title: '3. User Accounts',
          intro: 'To use certain features of our services, you may need to create an account. You agree to:',
          items: [
            'Provide accurate and complete information when creating your account',
            'Maintain the security of your account credentials',
            'Notify us immediately of any unauthorized use of your account',
            'Accept responsibility for all activities that occur under your account',
          ],
        },
        acceptableUse: {
          title: '4. Acceptable Use',
          intro: 'You agree to use our services only for lawful purposes and in accordance with these Terms. You agree not to:',
          items: [
            'Violate any applicable laws or regulations',
            'Infringe on the rights of others',
            'Upload or transmit harmful, offensive, or illegal content',
            'Attempt to gain unauthorized access to our systems',
            'Use our services to spam, harass, or abuse others',
            'Reverse engineer, decompile, or disassemble our applications',
          ],
        },
        intellectualProperty: {
          title: '5. Intellectual Property',
          content: 'All content, features, and functionality of our services are owned by SouvaStudios and are protected by copyright, trademark, and other intellectual property laws. You retain ownership of the content you create using our services, but you grant us a limited license to use, store, and display your content as necessary to provide our services.',
        },
        privacy: {
          title: '6. Privacy',
          content: 'Your privacy is important to us. Please review our Privacy Policy, which explains how we collect, use, and protect your information when you use our services.',
        },
        paymentsAndSubscriptions: {
          title: '7. Payments and Subscriptions',
          intro: 'Some of our services may require payment. If you purchase a subscription or make a payment:',
          items: [
            'You agree to pay all fees associated with your account',
            'Payments are processed through third-party payment processors',
            'Subscriptions automatically renew unless cancelled',
            'Refunds are subject to our refund policy',
          ],
        },
        termination: {
          title: '8. Termination',
          content: 'We may terminate or suspend your account and access to our services at our sole discretion, with or without notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.',
        },
        disclaimers: {
          title: '9. Disclaimers',
          content: 'Our services are provided "as is" and "as available" without any warranties of any kind. We disclaim all warranties, whether express, implied, statutory, or otherwise, including but not limited to warranties of merchantability, fitness for a particular purpose, and non-infringement.',
        },
        limitationOfLiability: {
          title: '10. Limitation of Liability',
          content: 'To the fullest extent permitted by law, SouvaStudios shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, goodwill, or other intangible losses.',
        },
        governingLaw: {
          title: '11. Governing Law',
          content: 'These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which SouvaStudios operates, without regard to its conflict of law principles.',
        },
        changesToTerms: {
          title: '12. Changes to Terms',
          content: 'We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the new Terms on this page and updating the "last updated" date. Your continued use of our services after such changes constitutes your acceptance of the new Terms.',
        },
        contactInformation: {
          title: '13. Contact Information',
          content: 'If you have any questions about these Terms, please contact us through our website or applications.',
        },
      },
    },
    products: {
      common: {
        backToHome: 'Back to Home',
        comingSoon: 'Coming Soon',
        beFirstToKnow: 'Be the First to Know',
        followJourney: 'Follow Our Journey',
        readManifesto: 'Read Our Manifesto',
        availableNow: 'Available Now',
        downloadIos: 'Download for iOS',
        downloadAndroid: 'Download for Android',
        keyFeatures: 'Key Features',
        howItWorks: 'How It Works',
        perfectFor: 'Perfect For',
        whyDifferent: 'Why Focule is Different',
        problemSolving: 'The Problem We\'re Solving',
        ourVision: 'Our Vision',
        features: 'Features',
      },
      ovlo: {
        title: 'Ovlo: Your Links, Your Rules',
        subtitle: 'Strategic link management for creators and professionals.',
        description: [
          'Ovlo solves the "link in bio" problem with strategic features that give you complete control over your links. Create time-limited links for special promotions, set click limits for exclusive content, and track engagement with privacy-respecting analytics.',
          'Whether you\'re a creator sharing limited-time offers, a professional managing client resources, or anyone who wants more control over their digital presence, Ovlo provides the tools you need.',
          'No more broken links, no more outdated promotions, no more wondering if your audience is actually clicking. Just clean, strategic link management that works.'
        ],
        keyFeatures: {
          expiringLinks: {
            title: 'Expiring Links',
            description: 'Set automatic expiration dates for time-sensitive promotions, events, or content. Links disappear when they should.'
          },
          clickLimits: {
            title: 'Click Limits',
            description: 'Create exclusive access with click-limited links. Perfect for limited editions, beta access, or VIP content.'
          },
          smartAnalytics: {
            title: 'Smart Analytics',
            description: 'Understand your audience without invading their privacy. Clean, actionable insights that respect user data.'
          },
          customBranding: {
            title: 'Custom Branding',
            description: 'Use your own domain and create branded short links that reinforce your professional identity.'
          }
        },
        useCases: {
          contentCreators: {
            title: 'Content Creators',
            description: 'Share limited-time offers, exclusive content, or event links that automatically expire when the promotion ends.'
          },
          professionals: {
            title: 'Professionals & Consultants',
            description: 'Create time-limited access to client resources, proposals, or meeting links that automatically become inactive.'
          },
          eventOrganizers: {
            title: 'Event Organizers',
            description: 'Distribute event links that expire after the event, registration links with capacity limits, or exclusive access codes.'
          }
        },
        philosophy: {
          title: 'The Problem with "Link in Bio"',
          quote: 'Traditional link management tools treat every link the same. But not every link should live forever. Some links should disappear when they\'re no longer relevant. That\'s just good digital hygiene.'
        },
        getNotified: 'Get notified when Ovlo is ready to give you complete control over your links.'
      },
      souva: {
        title: 'Souva: The Arena for Ideas',
        subtitle: 'Structured debate that elevates discourse and reduces noise.',
        description: [
          'Souva transforms chaotic internet comment sections into structured arenas for meaningful debate. Using carefully designed formats and moderation tools, we create spaces where ideas can be explored thoughtfully rather than shouted over.',
          'Our structured debate format ensures that all sides of an argument are heard, evidence is presented clearly, and participants engage with ideas rather than attacking individuals. This isn\'t just another social platform - it\'s a tool for democratic discourse in the digital age.',
          'By reducing noise and amplifying signal, Souva helps communities make better decisions and individuals develop stronger critical thinking skills.'
        ],
        howItWorks: {
          structuredFormat: {
            title: 'Structured Format',
            description: 'Debates follow clear formats with defined roles, time limits, and evidence requirements. No more endless arguments.'
          },
          evidenceBased: {
            title: 'Evidence-Based',
            description: 'Claims must be supported with credible sources. The platform helps verify and track the quality of evidence.'
          },
          respectfulModeration: {
            title: 'Respectful Moderation',
            description: 'AI-assisted moderation focuses on maintaining civility while preserving the intensity of ideas.'
          },
          learningFocused: {
            title: 'Learning Focused',
            description: 'The goal isn\'t to win but to learn. Participants earn reputation for changing their minds when presented with good evidence.'
          }
        },
        problemSolving: {
          echoChambers: {
            title: 'Echo Chambers',
            description: 'Most platforms reinforce existing beliefs instead of challenging them with thoughtful counter-arguments.'
          },
          toxicDiscourse: {
            title: 'Toxic Discourse',
            description: 'Ad hominem attacks, strawman arguments, and bad faith participation destroy the potential for learning.'
          },
          informationOverload: {
            title: 'Information Overload',
            description: 'The sheer volume of unorganized opinions makes it impossible to identify the strongest arguments on any side.'
          }
        },
        vision: {
          title: 'Our Vision',
          quote: 'Democracy requires citizens who can think critically, change their minds when presented with evidence, and disagree respectfully with their neighbors. The internet has made us worse at all of these things. Souva aims to make us better.'
        },
        getNotified: 'Get notified when Souva is ready to transform how we discuss ideas online.'
      },
      focule: {
        title: 'Focule: Work Better. Break Smarter.',
        subtitle: 'The productivity timer that understands intention.',
        description: [
          'Focule isn\'t just another Pomodoro timer. It\'s a mindful productivity companion that helps you set clear intentions for each work session and guides you through intelligent breaks that actually restore your energy.',
          'Before each session, you\'ll define your intention - what you want to accomplish and why it matters. During breaks, instead of scrolling social media, you\'ll engage in activities designed to refresh your mind and body.',
          'This is productivity with purpose, designed to help you work better while maintaining your well-being.'
        ],
        keyFeatures: {
          intentionSetting: {
            title: 'Intention Setting',
            description: 'Start each session by clarifying your goal and why it matters. This simple practice dramatically improves focus and satisfaction.'
          },
          smartBreaks: {
            title: 'Smart Breaks',
            description: 'Guided break activities that actually restore your energy: breathing exercises, gentle stretches, or mindful walks.'
          },
          adaptiveTiming: {
            title: 'Adaptive Timing',
            description: 'While you can set custom intervals, Focule learns your natural rhythms and suggests optimal work and break durations.'
          },
          mindfulNotifications: {
            title: 'Mindful Notifications',
            description: 'Gentle, non-intrusive alerts that respect your flow state while keeping you on track with your intentions.'
          }
        },
        philosophy: {
          title: 'Why Focule is Different',
          quote: 'Most productivity apps treat you like a machine that needs to be optimized. Focule treats you like a human being who needs to be supported.'
        },
        getNotified: 'Get notified when Focule is ready to help you work better and break smarter.'
      },
      diary84: {
        title: '84Diary',
        subtitle: 'Your day in 84 characters.',
        description: [
          '84Diary is a daily journaling app that challenges you to capture your entire day in exactly 84 characters. This constraint forces you to find the essence of your day, creating a mindful practice of reflection and distillation.',
          'In a world of endless digital noise, 84Diary offers a calm, focused space for daily reflection. Every entry becomes a small poem, a snapshot of what truly mattered.'
        ],
        features: {
          constraintBased: {
            title: 'Constraint-Based Writing',
            description: 'Exactly 84 characters forces you to find the essence of your day, creating meaningful micro-reflections.'
          },
          privacyFirst: {
            title: 'Privacy First',
            description: 'Your entries are private by default. No data collection, no advertising, no surveillance.'
          },
          dailyHabit: {
            title: 'Daily Habit Building',
            description: 'A simple, manageable daily practice that takes less than a minute but provides lasting value.'
          },
          cleanInterface: {
            title: 'Clean Interface',
            description: 'Distraction-free design that focuses on what matters: your thoughts and reflections.'
          }
        }
      }
    }
  },
  tr: {
    header: {
      blog: 'Blog',
    },
    home: {
      hero: {
        title: 'Düşünceli Dijital Sığınaklar',
        subtitle: 'Souva, size zamanınızı ve dikkatinizi geri vermeye odaklanan sakin, odaklanmış ve güzel yazılımlar inşa eder. Bu bizim işimiz.',
      },
      ecosystem: {
        title: 'Ekosistemimiz',
        products: {
          diary84: {
            title: '84Diary',
            description: 'Gününüz 84 karakterde.',
            status: 'App Store\'da Canlı',
            buttons: {
              appStore: 'App Store',
              googlePlay: 'Google Play',
            },
          },
          focule: {
            title: 'Focule',
            description: 'Daha İyi Çalış. Daha Akıllı Dinlen.',
            status: 'Geliştiriliyor',
            button: 'Daha Fazla Öğren',
          },
          ovlo: {
            title: 'Ovlo',
            description: 'Linkleriniz, kurallarınız.',
            status: 'Yakında Geliyor',
            button: 'Daha Fazla Öğren',
          },
          souva: {
            title: 'Souva',
            description: 'Fikirler için Arena.',
            status: 'Kuzey Yıldızımız',
            button: 'Daha Fazla Öğren',
          },
          voona: {
            title: 'Voona',
            description: 'Kolektif günlük tutma.',
            status: 'Konsept',
            button: 'Konsept Aşamasında',
          },
          viamos: {
            title: 'Viamos',
            description: 'Duygularla bağlantı kur.',
            status: 'Konsept',
            button: 'Konsept Aşamasında',
          },
        },
      },
    },
    blog: {
      title: 'Blog',
      subtitle: 'Dijital minimalizm, verimlilik ve sakin teknoloji inşa etme üzerine düşünceler.',
      loading: 'Yazılar yükleniyor...',
      noPosts: 'Henüz blog yazısı yok.',
      noPostsSubtitle: 'En son düşüncelerimiz ve görüşlerimiz için yakında tekrar kontrol edin.',
      readMore: 'Devamını oku',
      backToBlog: 'Blog\'a Dön',
      postNotFound: 'Yazı Bulunamadı',
      postNotFoundDescription: 'Aradığınız blog yazısı mevcut değil.',
      loadingPost: 'Yazı yükleniyor...',
    },
    footer: {
      copyright: '© 2025 Souva',
      privacyPolicy: 'Gizlilik Politikası',
      termsOfUse: 'Kullanım Şartları',
      socialLabels: {
        twitter: 'Twitter',
        github: 'GitHub',
      },
    },
    common: {
      learnMore: 'Daha Fazla Öğren',
      inConceptPhase: 'Konsept Aşamasında',
      inDevelopment: 'Geliştiriliyor',
      liveOnAppStore: 'App Store\'da Canlı',
      comingSoon: 'Yakında Geliyor',
      ourNorthStar: 'Kuzey Yıldızımız',
      concept: 'Konsept',
    },
    privacy: {
      title: 'Gizlilik Politikası',
      lastUpdated: 'Son güncelleme: 7 Ocak 2025',
      sections: {
        introduction: {
          title: '1. Giriş',
          content: 'Bu Gizlilik Politikası, SouvaStudios tarafından geliştirilen 84Diary ve diğer gelecek uygulamalar dahil olmak üzere tüm uygulama ve hizmetler için geçerlidir ("biz," "bizim," veya "bize"). Gizliliğinizi korumaya ve bilgilerinizi nasıl topladığımız, kullandığımız ve paylaştığımız konusunda şeffaf olmaya kararlıyız.',
        },
        informationWeCollect: {
          title: '2. Topladığımız Bilgiler',
          intro: 'Aşağıdaki bilgi türlerini toplayabiliriz:',
          informationYouProvide: {
            title: '2.1 Verdiğiniz Bilgiler',
            items: [
              'Hesap bilgileri (e-posta adresi, kullanıcı adı)',
              'Uygulamalarımızda oluşturduğunuz içerik',
              'Bizimle olan iletişimleriniz',
            ],
          },
          informationWeCollectAutomatically: {
            title: '2.2 Otomatik Olarak Topladığımız Bilgiler',
            items: [
              'Cihaz bilgileri (cihaz türü, işletim sistemi)',
              'Kullanım bilgileri (kullanılan özellikler, harcanan zaman)',
              'Günlük veriler (IP adresi, erişim zamanları)',
            ],
          },
        },
        howWeUseInformation: {
          title: '3. Bilgilerinizi Nasıl Kullanırız',
          intro: 'Bilgilerinizi şu amaçlarla kullanırız:',
          items: [
            'Hizmetlerimizi sağlamak ve iyileştirmek',
            'Güncellemeler ve özellikler hakkında iletişim kurmak',
            'Güvenliği sağlamak ve sahtekarlığı önlemek',
            'Kullanıcı deneyimini iyileştirmek için kullanım modellerini analiz etmek',
          ],
        },
        informationSharing: {
          title: '4. Bilgi Paylaşımı',
          intro: 'Kişisel bilgilerinizi üçüncü taraflarla satmaz, takas etmez veya başka şekilde transfer etmeyiz, aşağıdaki durumlar hariç:',
          items: [
            'Açık rızanızla',
            'Yasal yükümlülükleri yerine getirmek için',
            'Haklarımızı ve güvenliğimizi korumak için',
            'Uygulamalarımızı işletmemize yardımcı olan hizmet sağlayıcılarıyla',
          ],
        },
        dataSecurity: {
          title: '5. Veri Güvenliği',
          content: 'Kişisel bilgilerinizi yetkisiz erişim, değiştirme, ifşa etme veya yok etmeye karşı korumak için uygun teknik ve organizasyonel önlemler uygularız. Ancak, internet üzerinden iletim veya elektronik depolama yöntemlerinin %100 güvenli olduğu söylenemez.',
        },
        dataRetention: {
          title: '6. Veri Saklama',
          content: 'Kişisel bilgilerinizi bu Gizlilik Politikasında belirtilen amaçları gerçekleştirmek için gerekli olan süre boyunca saklarız, kanunların daha uzun bir saklama süresi gerektirmesi durumu hariç.',
        },
        yourRights: {
          title: '7. Haklarınız',
          intro: 'Aşağıdaki haklara sahipsiniz:',
          items: [
            'Kişisel bilgilerinize erişme',
            'Yanlış bilgileri düzeltme',
            'Bilgilerinizin silinmesini talep etme',
            'Bilgilerinizin işlenmesine itiraz etme',
            'Veri taşınabilirliği talep etme',
          ],
        },
        childrensPrivacy: {
          title: '8. Çocukların Gizliliği',
          content: 'Uygulamalarımız 13 yaş altındaki çocuklar için tasarlanmamıştır. 13 yaş altındaki çocuklardan bilerek kişisel bilgi toplamayız. Bir ebeveyn veya vasi iseniz ve çocuğunuzun bize kişisel bilgi sağladığına inanıyorsanız, lütfen bizimle iletişime geçin.',
        },
        changesToPolicy: {
          title: '9. Politikadaki Değişiklikler',
          content: 'Bu Gizlilik Politikasını zaman zaman güncelleyebiliriz. Herhangi bir değişiklik olduğunda, yeni Gizlilik Politikasını bu sayfada yayınlayarak ve "son güncelleme" tarihini güncelleyerek sizi bilgilendireceğiz.',
        },
        contactUs: {
          title: '10. Bize Ulaşın',
          content: 'Bu Gizlilik Politikası hakkında herhangi bir sorunuz varsa, lütfen web sitemiz veya uygulamalarımız aracılığıyla bizimle iletişime geçin.',
        },
      },
    },
    terms: {
      title: 'Kullanım Şartları',
      lastUpdated: 'Son güncelleme: 7 Ocak 2025',
      sections: {
        acceptanceOfTerms: {
          title: '1. Şartları Kabul Etme',
          content: 'SouvaStudios ("biz," "bizim," veya "bize") tarafından geliştirilen 84Diary ve diğer gelecek uygulamalar dahil olmak üzere herhangi bir uygulama veya hizmete erişerek ve kullanarak, bu Kullanım Şartları ("Şartlar") ile bağlı olmayı kabul ediyorsunuz. Bu Şartları kabul etmiyorsanız, hizmetlerimizi kullanamazsınız.',
        },
        descriptionOfServices: {
          title: '2. Hizmetlerin Açıklaması',
          content: 'SouvaStudios, kullanıcı gizliliğini ve odaklanmasını saygı göstererek üretkenliği, yaratıcılığı ve refahı artırmak için tasarlanmış dijital araçlar ve uygulamalar sağlar. Hizmetlerimiz mobil uygulamalar, web uygulamaları ve ilgili dijital hizmetleri içerebilir.',
        },
        userAccounts: {
          title: '3. Kullanıcı Hesapları',
          intro: 'Hizmetlerimizin belirli özelliklerini kullanmak için bir hesap oluşturmanız gerekebilir. Aşağıdakileri kabul ediyorsunuz:',
          items: [
            'Hesabınızı oluştururken doğru ve eksiksiz bilgi sağlamak',
            'Hesap kimlik bilgilerinizin güvenliğini sağlamak',
            'Hesabınızın yetkisiz kullanımını derhal bize bildirmek',
            'Hesabınız altında gerçekleşen tüm faaliyetlerin sorumluluğunu üstlenmek',
          ],
        },
        acceptableUse: {
          title: '4. Kabul Edilebilir Kullanım',
          intro: 'Hizmetlerimizi yalnızca yasal amaçlar için ve bu Şartlara uygun olarak kullanmayı kabul ediyorsunuz. Aşağıdakileri yapmamayı kabul ediyorsunuz:',
          items: [
            'Herhangi bir geçerli yasa veya düzenlemeyi ihlal etmek',
            'Başkalarının haklarını ihlal etmek',
            'Zararlı, saldırgan veya yasa dışı içerik yüklemek veya iletmek',
            'Sistemlerimize yetkisiz erişim elde etmeye çalışmak',
            'Hizmetlerimizi spam, taciz etme veya başkalarını kötüye kullanmak için kullanmak',
            'Uygulamalarımızı tersine mühendislik, decompile veya parçalarına ayırmak',
          ],
        },
        intellectualProperty: {
          title: '5. Fikri Mülkiyet',
          content: 'Hizmetlerimizin tüm içeriği, özellikleri ve işlevselliği SouvaStudios\'a aittir ve telif hakkı, marka ve diğer fikri mülkiyet yasalarıyla korunmaktadır. Hizmetlerimizi kullanarak oluşturduğunuz içeriğin sahipliğini korursunuz, ancak hizmetlerimizi sağlamak için gerekli olduğu ölçüde içeriğinizi kullanmak, saklamak ve görüntülemek için bize sınırlı bir lisans verirsiniz.',
        },
        privacy: {
          title: '6. Gizlilik',
          content: 'Gizliliğiniz bizim için önemlidir. Lütfen hizmetlerimizi kullanırken bilgilerinizi nasıl topladığımızı, kullandığımızı ve koruduğumuzu açıklayan Gizlilik Politikamızı inceleyin.',
        },
        paymentsAndSubscriptions: {
          title: '7. Ödemeler ve Abonelikler',
          intro: 'Bazı hizmetlerimiz ödeme gerektirebilir. Abonelik satın alırsanız veya ödeme yaparsanız:',
          items: [
            'Hesabınızla ilgili tüm ücretleri ödemeyi kabul ediyorsunuz',
            'Ödemeler üçüncü taraf ödeme işlemcileri aracılığıyla gerçekleştirilir',
            'Abonelikler iptal edilmediği sürece otomatik olarak yenilenir',
            'Geri ödemeler geri ödeme politikamıza tabidir',
          ],
        },
        termination: {
          title: '8. Fesih',
          content: 'Bu Şartları ihlal ettiğine inandığımız veya diğer kullanıcılara, bize veya üçüncü taraflara zarar verdiğine inandığımız davranışlar için hesabınızı ve hizmetlerimize erişiminizi, bildirimli veya bildirimsiz olarak, tamamen takdirimize bağlı olarak feshedebilir veya askıya alabiliriz.',
        },
        disclaimers: {
          title: '9. Feragatnameler',
          content: 'Hizmetlerimiz "olduğu gibi" ve "mevcut olduğu gibi" herhangi bir garanti olmaksızın sağlanır. Açık, zımni, yasal veya başka türlü tüm garantileri reddederiz, bunlar pazarlanabilirlik, belirli bir amaca uygunluk ve ihlal etmeme garantilerini içerir ancak bunlarla sınırlı değildir.',
        },
        limitationOfLiability: {
          title: '10. Sorumluluk Sınırlaması',
          content: 'Yasaların izin verdiği ölçüde, SouvaStudios kar kaybı, veri kaybı, kullanım kaybı, itibar kaybı veya diğer maddi olmayan kayıplar dahil olmak üzere ancak bunlarla sınırlı olmayan dolaylı, arızi, özel, sonuçsal veya cezai hasarlardan sorumlu olmayacaktır.',
        },
        governingLaw: {
          title: '11. Geçerli Hukuk',
          content: 'Bu Şartlar, SouvaStudios\'un faaliyet gösterdiği yargı alanının yasalarına göre yönetilecek ve yorumlanacaktır, hukuk çatışması ilkelerini dikkate almaksızın.',
        },
        changesToTerms: {
          title: '12. Şartlardaki Değişiklikler',
          content: 'Bu Şartları herhangi bir zamanda değiştirme hakkını saklı tutarız. Herhangi bir değişiklik olduğunda, yeni Şartları bu sayfada yayınlayarak ve "son güncelleme" tarihini güncelleyerek sizi bilgilendireceğiz. Bu değişikliklerden sonra hizmetlerimizi kullanmaya devam etmeniz, yeni Şartları kabul ettiğiniz anlamına gelir.',
        },
        contactInformation: {
          title: '13. İletişim Bilgileri',
          content: 'Bu Şartlar hakkında herhangi bir sorunuz varsa, lütfen web sitemiz veya uygulamalarımız aracılığıyla bizimle iletişime geçin.',
        },
      },
    },
    products: {
      common: {
        backToHome: 'Ana Sayfaya Dön',
        comingSoon: 'Yakında',
        beFirstToKnow: 'İlk Bilen Siz Olun',
        followJourney: 'Yolculuğumuzu Takip Edin',
        readManifesto: 'Manifestomuzu Okuyun',
        availableNow: 'Şimdi Mevcut',
        downloadIos: 'iOS için İndir',
        downloadAndroid: 'Android için İndir',
        keyFeatures: 'Temel Özellikler',
        howItWorks: 'Nasıl Çalışır',
        perfectFor: 'Ideal Kullanım',
        whyDifferent: 'Focule Neden Farklı',
        problemSolving: 'Çözdüğümüz Sorun',
        ourVision: 'Vizyonumuz',
        features: 'Özellikler',
      },
      ovlo: {
        title: 'Ovlo: Linkleriniz, Kurallarınız',
        subtitle: 'Yaratıcılar ve profesyoneller için stratejik link yönetimi.',
        description: [
          'Ovlo, "bio\'da link" sorununu linkleriniz üzerinde tam kontrol sağlayan stratejik özelliklerle çözüyor. Özel promosyonlar için süre sınırlı linkler oluşturun, özel içerik için tıklama limitleri koyun ve mahremiyet dostu analitiklerle etkileşimi takip edin.',
          'Sınırlı zamanlı teklifler paylaşan bir yaratıcı olun, müşteri kaynaklarını yöneten bir profesyonel olun veya dijital varlığınız üzerinde daha fazla kontrol isteyen herhangi biri olun, Ovlo ihtiyacınız olan araçları sağlar.',
          'Artık bozuk linkler, güncel olmayan promosyonlar ve hedef kitlenizin gerçekten tıklayıp tıklamadığını merak etme yok. Sadece işe yarayan temiz, stratejik link yönetimi.'
        ],
        keyFeatures: {
          expiringLinks: {
            title: 'Süresi Dolan Linkler',
            description: 'Zamana duyarlı promosyonlar, etkinlikler veya içerik için otomatik süre sonu tarihleri belirleyin. Linkler gerektiğinde kaybolur.'
          },
          clickLimits: {
            title: 'Tıklama Limitleri',
            description: 'Tıklama sınırlı linklerle özel erişim oluşturun. Sınırlı edisyonlar, beta erişimi veya VIP içerik için mükemmel.'
          },
          smartAnalytics: {
            title: 'Akıllı Analitikler',
            description: 'Mahremiyetlerine saygı duyarak hedef kitlenizi anlayın. Kullanıcı verilerini koruyan temiz, eyleme geçirilebilir içgörüler.'
          },
          customBranding: {
            title: 'Özel Markalama',
            description: 'Kendi domaininizi kullanın ve profesyonel kimliğinizi güçlendiren markalı kısa linkler oluşturun.'
          }
        },
        useCases: {
          contentCreators: {
            title: 'İçerik Yaratıcıları',
            description: 'Promosyon bittiğinde otomatik olarak süresinin dolacağı sınırlı zamanlı teklifler, özel içerik veya etkinlik linklerini paylaşın.'
          },
          professionals: {
            title: 'Profesyoneller ve Danışmanlar',
            description: 'Müşteri kaynaklarına, tekliflere veya otomatik olarak devre dışı kalacak toplantı linklerine zaman sınırlı erişim oluşturun.'
          },
          eventOrganizers: {
            title: 'Etkinlik Organizatörleri',
            description: 'Etkinlik sonrası süresinin dolacağı etkinlik linkleri, kapasite limitli kayıt linkleri veya özel erişim kodları dağıtın.'
          }
        },
        philosophy: {
          title: '"Bio\'da Link" Sorunu',
          quote: 'Geleneksel link yönetim araçları her linke aynı şekilde davranır. Ama her link sonsuza kadar yaşamamalı. Bazı linkler artık alakalı olmadığında kaybolmalı. Bu sadece iyi dijital hijyen.'
        },
        getNotified: 'Ovlo linkleriniz üzerinde tam kontrol sağlamaya hazır olduğunda haberdar olun.'
      },
      souva: {
        title: 'Souva: Fikirler Arenası',
        subtitle: 'Söylemi yükselten ve gürültüyü azaltan yapılandırılmış tartışma.',
        description: [
          'Souva, kaotik internet yorum bölümlerini anlamlı tartışma için yapılandırılmış arenalara dönüştürür. Dikkatli tasarlanmış formatlar ve moderasyon araçları kullanarak fikirlerin bağrılmadan düşünceli şekilde keşfedilebileceği alanlar yaratırız.',
          'Yapılandırılmış tartışma formatımız, bir argümanın tüm taraflarının duyulmasını, kanıtların açık şekilde sunulmasını ve katılımcıların bireylere saldırmak yerine fikirlerle etkileşime geçmesini sağlar. Bu sadece başka bir sosyal platform değil - dijital çağda demokratik söylem için bir araç.',
          'Gürültüyü azaltıp sinyali güçlendirerek, Souva toplulukların daha iyi kararlar vermesine ve bireylerin daha güçlü eleştirel düşünme becerileri geliştirmesine yardımcı olur.'
        ],
        howItWorks: {
          structuredFormat: {
            title: 'Yapılandırılmış Format',
            description: 'Tartışmalar tanımlanmış roller, zaman limitleri ve kanıt gereksinimleri olan net formatları takip eder. Artık sonsuz tartışmalar yok.'
          },
          evidenceBased: {
            title: 'Kanıt Temelli',
            description: 'İddialar güvenilir kaynaklarla desteklenmelidir. Platform, kanıtların kalitesini doğrulamaya ve takip etmeye yardımcı olur.'
          },
          respectfulModeration: {
            title: 'Saygılı Moderasyon',
            description: 'AI destekli moderasyon, fikirlerin yoğunluğunu korurken nezaketi sürdürmeye odaklanır.'
          },
          learningFocused: {
            title: 'Öğrenme Odaklı',
            description: 'Amaç kazanmak değil öğrenmektir. Katılımcılar, iyi kanıtlar karşısında fikirlerini değiştirdiklerinde itibar kazanır.'
          }
        },
        problemSolving: {
          echoChambers: {
            title: 'Yankı Odaları',
            description: 'Çoğu platform, düşünceli karşı argümanlarla meydan okumak yerine mevcut inançları pekiştirir.'
          },
          toxicDiscourse: {
            title: 'Toksik Söylem',
            description: 'Kişisel saldırılar, çarpıtma argümanları ve kötü niyetli katılım, öğrenme potansiyelini yok eder.'
          },
          informationOverload: {
            title: 'Bilgi Yükü',
            description: 'Düzensiz görüşlerin çok fazla hacmi, herhangi bir tarafın en güçlü argümanlarını belirlemeyi imkansız kılar.'
          }
        },
        vision: {
          title: 'Vizyonumuz',
          quote: 'Demokrasi, eleştirel düşünebilen, kanıt karşısında fikirlerini değiştirebilen ve komşularıyla saygılı şekilde anlaşmazlık yaşayabilen vatandaşlara ihtiyaç duyar. İnternet bu şeylerin hepsinde bizi daha kötü hale getirdi. Souva bizi daha iyi hale getirmeyi hedefliyor.'
        },
        getNotified: 'Souva fikirleri çevrimiçi tartışma şeklimizi dönüştürmeye hazır olduğunda haberdar olun.'
      },
      focule: {
        title: 'Focule: Daha İyi Çalış. Daha Akıllı Dinlen.',
        subtitle: 'Niyeti anlayan verimlilik zamanlayıcısı.',
        description: [
          'Focule sadece başka bir Pomodoro zamanlayıcısı değil. Her çalışma seansı için net niyetler belirlemenize yardımcı olan ve size enerjinizi gerçekten yenileyen akıllı molalar sunan bilinçli bir verimlilik arkadaşı.',
          'Her seanstan önce niyetinizi tanımlayacaksınız - neyi başarmak istediğinizi ve bunun neden önemli olduğunu. Molalar sırasında sosyal medyada gezinmek yerine, zihninizi ve vücudunuzu tazelemeye yönelik aktivitelerle meşgul olacaksınız.',
          'Bu, refahınızı korurken daha iyi çalışmanıza yardımcı olacak şekilde tasarlanmış, amaçlı verimlilik.'
        ],
        keyFeatures: {
          intentionSetting: {
            title: 'Niyet Belirleme',
            description: 'Her seansta hedefinizi ve neden önemli olduğunu netleştirerek başlayın. Bu basit uygulama odak ve memnuniyeti dramatik olarak artırır.'
          },
          smartBreaks: {
            title: 'Akıllı Molalar',
            description: 'Enerjinizi gerçekten yenileyen rehberli mola aktiviteleri: nefes egzersizleri, hafif germe hareketleri veya bilinçli yürüyüşler.'
          },
          adaptiveTiming: {
            title: 'Uyarlanabilir Zamanlama',
            description: 'Özel aralıklar belirleyebilirken, Focule doğal ritimlerinizi öğrenir ve optimal çalışma ve mola sürelerini önerir.'
          },
          mindfulNotifications: {
            title: 'Bilinçli Bildirimler',
            description: 'Akış halinizi kaybetmeden niyetlerinizde sizi yolda tutan nazik, müdahaleci olmayan uyarılar.'
          }
        },
        philosophy: {
          title: 'Focule Neden Farklı',
          quote: 'Çoğu verimlilik uygulaması sizi optimize edilmesi gereken bir makine gibi görür. Focule sizi desteklenmesi gereken bir insan gibi görür.'
        },
        getNotified: 'Focule daha iyi çalışmanıza ve daha akıllı dinlenmenize yardımcı olmaya hazır olduğunda haberdar olun.'
      },
      diary84: {
        title: '84Diary',
        subtitle: 'Gününüz 84 karakterde.',
        description: [
          '84Diary, tüm gününüzü tam olarak 84 karakterde yakalama konusunda size meydan okuyan günlük bir günlük uygulamasıdır. Bu kısıtlama, gününüzün özünü bulmanızı zorlayarak düşünceli bir yansıma ve damıtma pratiği yaratır.',
          'Sonsuz dijital gürültü dünyasında, 84Diary günlük yansıma için sakin, odaklanmış bir alan sunar. Her giriş küçük bir şiir, gerçekten önemli olanın anlık görüntüsü haline gelir.'
        ],
        features: {
          constraintBased: {
            title: 'Kısıtlama Temelli Yazma',
            description: 'Tam olarak 84 karakter, gününüzün özünü bulmanızı zorlayarak anlamlı mikro-yansımalar yaratır.'
          },
          privacyFirst: {
            title: 'Mahremiyet Öncelikli',
            description: 'Girişleriniz varsayılan olarak özeldir. Veri toplama, reklam, gözetim yok.'
          },
          dailyHabit: {
            title: 'Günlük Alışkanlık Oluşturma',
            description: 'Bir dakikadan az süren ama kalıcı değer sağlayan basit, yönetilebilir günlük bir pratik.'
          },
          cleanInterface: {
            title: 'Temiz Arayüz',
            description: 'Önemli olana odaklanan dikkat dağıtmayan tasarım: düşünceleriniz ve yansımalarınız.'
          }
        }
      }
    }
  },
};

export function getTranslation(lang: 'en' | 'tr'): Translations {
  return translations[lang];
} 