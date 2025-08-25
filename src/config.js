// Site configuration - Update this file to customize your construction company website
const contactDomain = 'contact.jeffzalischi.com'

export const siteConfig = {
  // Basic site information
  name: {
    fr: "Construction Familiale Québec",
    en: "Quebec Family Construction"
  },

  tagline: {
    fr: "Construction de qualité depuis 1998",
    en: "Quality construction since 1998"
  },

  url: "https://bilingual-astro-site.pages.dev",

  // Company information
  company: {
    name: {
      fr: "Construction Familiale Québec",
      en: "Quebec Family Construction"
    },

    founded: "1998",
    experience: "25+",

    owner: {
      fr: "Famille Tremblay",
      en: "Tremblay Family"
    },

    contact: {
      phone: "(418) 555-0123",
      email: "info@" + contactDomain,
      address: {
        fr: "123 Rue de la Construction, Québec, QC G1A 1A1",
        en: "123 Construction Street, Quebec City, QC G1A 1A1"
      }
    },

    social: {
      facebook: "https://facebook.com/constructionqc",
      instagram: "https://instagram.com/constructionqc",
      linkedin: "https://linkedin.com/company/constructionqc"
    },

    // Business hours
    hours: {
      fr: "Lundi - Vendredi: 7h00 - 17h00",
      en: "Monday - Friday: 7:00 AM - 5:00 PM"
    },

    // Service areas
    serviceAreas: {
      fr: ["Québec", "Lévis", "Sainte-Foy", "Beauport", "Charlesbourg"],
      en: ["Quebec City", "Lévis", "Sainte-Foy", "Beauport", "Charlesbourg"]
    }
  },

  // Hero section
  hero: {
    title: {
      fr: "Construction de qualité, tradition familiale",
      en: "Quality Construction, Family Tradition"
    },

    subtitle: {
      fr: "Plus de 25 ans d'expérience au service des familles québécoises. Nous sommes fiers de bâtir votre avenir avec passion et expertise.",
      en: "Over 25 years serving Quebec families with pride. We're passionate about building your future with expertise and care."
    },

    cta: {
      primary: {
        fr: "Obtenez un devis gratuit",
        en: "Get a Free Quote"
      },
      secondary: {
        fr: "Voir nos projets",
        en: "View Our Work"
      }
    },

    features: [
      {
        fr: "Entreprise familiale québécoise",
        en: "Quebec family business"
      },
      {
        fr: "Garantie sur tous les travaux",
        en: "Guarantee on all work"
      },
      {
        fr: "Équipe d'experts certifiés",
        en: "Certified expert team"
      }
    ]
  },

  // Services
  services: [
    {
      id: "residential",
      icon: "🏠",
      title: {
        fr: "Construction résidentielle",
        en: "Residential Construction"
      },
      description: {
        fr: "Maisons neuves, extensions, rénovations majeures avec des matériaux de qualité supérieure.",
        en: "New homes, extensions, major renovations with premium quality materials."
      },
      features: {
        fr: ["Maisons clés en main", "Extensions personnalisées", "Rénovations complètes"],
        en: ["Turnkey homes", "Custom extensions", "Complete renovations"]
      }
    },
    {
      id: "commercial",
      icon: "🏢",
      title: {
        fr: "Construction commerciale",
        en: "Commercial Construction"
      },
      description: {
        fr: "Bâtiments commerciaux, bureaux, entrepôts adaptés à vos besoins d'affaires.",
        en: "Commercial buildings, offices, warehouses tailored to your business needs."
      },
      features: {
        fr: ["Bureaux modernes", "Espaces commerciaux", "Entrepôts industriels"],
        en: ["Modern offices", "Retail spaces", "Industrial warehouses"]
      }
    },
    {
      id: "renovation",
      icon: "🔨",
      title: {
        fr: "Rénovation et restauration",
        en: "Renovation & Restoration"
      },
      description: {
        fr: "Transformez vos espaces existants avec notre expertise en rénovation.",
        en: "Transform your existing spaces with our renovation expertise."
      },
      features: {
        fr: ["Cuisines et salles de bain", "Sous-sols", "Toitures"],
        en: ["Kitchens & bathrooms", "Basements", "Roofing"]
      }
    },
    {
      id: "design",
      icon: "📐",
      title: {
        fr: "Design et planification",
        en: "Design & Planning"
      },
      description: {
        fr: "Services complets de conception architecturale et de planification de projet.",
        en: "Complete architectural design and project planning services."
      },
      features: {
        fr: ["Plans architecturaux", "Permis de construction", "Gestion de projet"],
        en: ["Architectural plans", "Building permits", "Project management"]
      }
    }
  ],

  // Portfolio projects
  portfolio: [
    {
      id: "modern-family-home",
      title: {
        fr: "Maison familiale moderne - Sainte-Foy",
        en: "Modern Family Home - Sainte-Foy"
      },
      description: {
        fr: "Construction d'une magnifique maison familiale de 2,500 pi² avec des finitions haut de gamme.",
        en: "Construction of a beautiful 2,500 sq ft family home with premium finishes."
      },
      category: "residential",
      year: "2023",
      size: "2,500 pi² / sq ft",
      duration: "8 mois / months",
      images: [
        "/images/portfolio/modern-home-1.jpg",
        "/images/portfolio/modern-home-2.jpg",
        "/images/portfolio/modern-home-3.jpg"
      ],
      features: {
        fr: ["4 chambres", "3 salles de bain", "Cuisine ouverte", "Garage double"],
        en: ["4 bedrooms", "3 bathrooms", "Open kitchen", "Double garage"]
      }
    },
    {
      id: "office-renovation",
      title: {
        fr: "Rénovation de bureaux - Québec",
        en: "Office Renovation - Quebec City"
      },
      description: {
        fr: "Transformation complète d'un espace de bureaux de 3,000 pi² en espace moderne et fonctionnel.",
        en: "Complete transformation of a 3,000 sq ft office space into a modern and functional workspace."
      },
      category: "commercial",
      year: "2023",
      size: "3,000 pi² / sq ft",
      duration: "4 mois / months",
      images: [
        "/images/portfolio/office-1.jpg",
        "/images/portfolio/office-2.jpg"
      ],
      features: {
        fr: ["Espaces ouverts", "Salles de réunion", "Éclairage moderne", "Finitions premium"],
        en: ["Open spaces", "Meeting rooms", "Modern lighting", "Premium finishes"]
      }
    },
    {
      id: "heritage-restoration",
      title: {
        fr: "Restauration patrimoine - Vieux-Québec",
        en: "Heritage Restoration - Old Quebec"
      },
      description: {
        fr: "Restauration minutieuse d'une maison centenaire tout en préservant son caractère historique.",
        en: "Meticulous restoration of a century-old home while preserving its historical character."
      },
      category: "renovation",
      year: "2022",
      size: "1,800 pi² / sq ft",
      duration: "12 mois / months",
      images: [
        "/images/portfolio/heritage-1.jpg",
        "/images/portfolio/heritage-2.jpg",
        "/images/portfolio/heritage-3.jpg"
      ],
      features: {
        fr: ["Préservation historique", "Matériaux d'époque", "Mise aux normes", "Efficacité énergétique"],
        en: ["Historical preservation", "Period materials", "Code compliance", "Energy efficiency"]
      }
    }
  ],

  // Testimonials
  testimonials: [
    {
      id: 1,
      name: "Marie et Jean Dubois",
      location: {
        fr: "Sainte-Foy, QC",
        en: "Sainte-Foy, QC"
      },
      rating: 5,
      text: {
        fr: "Excellente équipe! Ils ont construit la maison de nos rêves avec un professionnalisme exemplaire. Nous recommandons sans hésitation.",
        en: "Excellent team! They built our dream home with exemplary professionalism. We recommend without hesitation."
      },
      project: "modern-family-home"
    },
    {
      id: 2,
      name: "Restaurant La Belle Province",
      location: {
        fr: "Québec, QC",
        en: "Quebec City, QC"
      },
      rating: 5,
      text: {
        fr: "Rénovation de notre restaurant réalisée dans les temps et le budget prévu. Qualité impeccable!",
        en: "Restaurant renovation completed on time and on budget. Impeccable quality!"
      },
      project: "restaurant-renovation"
    },
    {
      id: 3,
      name: "Famille Tremblay",
      location: {
        fr: "Lévis, QC",
        en: "Lévis, QC"
      },
      rating: 5,
      text: {
        fr: "Une entreprise familiale qui comprend nos besoins. Travail soigné et équipe respectueuse.",
        en: "A family business that understands our needs. Careful work and respectful team."
      },
      project: "home-addition"
    }
  ],

  // About/Story content
  about: {
    story: {
      title: {
        fr: "Notre histoire familiale",
        en: "Our Family Story"
      },

      content: {
        fr: [
          "Fondée en 1998 par Pierre Tremblay, Construction Familiale Québec est née de la passion pour le bâtiment et du désir de servir la communauté québécoise.",
          "Aujourd'hui, l'entreprise est dirigée par Pierre et ses fils Marc et David, perpétuant la tradition d'excellence et d'intégrité qui caractérise notre famille.",
          "Nous sommes fiers d'être une entreprise 100% québécoise, employant des artisans locaux et utilisant autant que possible des matériaux de la région."
        ],
        en: [
          "Founded in 1998 by Pierre Tremblay, Quebec Family Construction was born from a passion for building and a desire to serve the Quebec community.",
          "Today, the company is led by Pierre and his sons Marc and David, continuing the tradition of excellence and integrity that characterizes our family.",
          "We are proud to be a 100% Quebec company, employing local craftsmen and using regional materials whenever possible."
        ]
      }
    },

    values: [
      {
        icon: "🤝",
        title: {
          fr: "Intégrité",
          en: "Integrity"
        },
        description: {
          fr: "Transparence et honnêteté dans toutes nos relations d'affaires.",
          en: "Transparency and honesty in all our business relationships."
        }
      },
      {
        icon: "⭐",
        title: {
          fr: "Excellence",
          en: "Excellence"
        },
        description: {
          fr: "Nous visons l'excellence dans chaque projet, grand ou petit.",
          en: "We strive for excellence in every project, large or small."
        }
      },
      {
        icon: "🏠",
        title: {
          fr: "Tradition familiale",
          en: "Family Tradition"
        },
        description: {
          fr: "Trois générations d'expertise au service de votre projet.",
          en: "Three generations of expertise serving your project."
        }
      },
      {
        icon: "🍁",
        title: {
          fr: "Fierté québécoise",
          en: "Quebec Pride"
        },
        description: {
          fr: "Soutenir l'économie locale et les artisans d'ici.",
          en: "Supporting local economy and homegrown craftsmen."
        }
      }
    ],

    team: [
      {
        name: "Pierre Tremblay",
        role: {
          fr: "Fondateur et Président",
          en: "Founder and President"
        },
        experience: "25+ années",
        image: "/images/team/pierre.jpg",
        bio: {
          fr: "Maître-charpentier avec plus de 25 ans d'expérience dans la construction résidentielle et commerciale.",
          en: "Master carpenter with over 25 years of experience in residential and commercial construction."
        }
      },
      {
        name: "Marc Tremblay",
        role: {
          fr: "Directeur des opérations",
          en: "Operations Director"
        },
        experience: "15+ années",
        image: "/images/team/marc.jpg",
        bio: {
          fr: "Spécialisé en gestion de projet et nouvelles technologies de construction.",
          en: "Specialized in project management and new construction technologies."
        }
      },
      {
        name: "David Tremblay",
        role: {
          fr: "Responsable design",
          en: "Design Manager"
        },
        experience: "12+ années",
        image: "/images/team/david.jpg",
        bio: {
          fr: "Architecte de formation, il allie créativité et fonctionnalité dans chaque projet.",
          en: "Trained architect, he combines creativity and functionality in every project."
        }
      }
    ]
  },

  // Process steps
  process: [
    {
      step: 1,
      title: {
        fr: "Consultation gratuite",
        en: "Free Consultation"
      },
      description: {
        fr: "Rencontre pour discuter de votre vision et évaluer vos besoins.",
        en: "Meeting to discuss your vision and assess your needs."
      },
      icon: "💬"
    },
    {
      step: 2,
      title: {
        fr: "Conception et devis",
        en: "Design and Quote"
      },
      description: {
        fr: "Élaboration des plans et estimation détaillée des coûts.",
        en: "Plan development and detailed cost estimation."
      },
      icon: "📐"
    },
    {
      step: 3,
      title: {
        fr: "Planification",
        en: "Planning"
      },
      description: {
        fr: "Organisation du projet, permis et échéancier détaillé.",
        en: "Project organization, permits, and detailed timeline."
      },
      icon: "📅"
    },
    {
      step: 4,
      title: {
        fr: "Construction",
        en: "Construction"
      },
      description: {
        fr: "Réalisation avec suivi régulier et communication continue.",
        en: "Execution with regular monitoring and continuous communication."
      },
      icon: "🔨"
    },
    {
      step: 5,
      title: {
        fr: "Livraison",
        en: "Delivery"
      },
      description: {
        fr: "Inspection finale, remise des clés et garanties.",
        en: "Final inspection, key handover, and warranties."
      },
      icon: "🏆"
    }
  ],

  // Certifications and guarantees
  certifications: [
    {
      name: "RBQ",
      description: {
        fr: "Régie du bâtiment du Québec",
        en: "Quebec Building Authority"
      },
      number: "5735-1234-01"
    },
    {
      name: "APCHQ",
      description: {
        fr: "Association provinciale des constructeurs d'habitations du Québec",
        en: "Provincial Association of Home Builders of Quebec"
      }
    },
    {
      name: "CNESST",
      description: {
        fr: "Commission des normes, de l'équité, de la santé et de la sécurité du travail",
        en: "Workplace Standards, Pay Equity and Workplace Health and Safety Board"
      }
    }
  ],

  // SEO and metadata
  seo: {
    keywords: {
      fr: [
        "construction Québec",
        "entrepreneur construction",
        "rénovation résidentielle",
        "construction familiale",
        "bâtiment Québec",
        "maison neuve",
        "rénovation Québec",
        "construction commerciale"
      ],
      en: [
        "construction Quebec",
        "construction contractor",
        "residential renovation",
        "family construction",
        "building Quebec",
        "new home",
        "renovation Quebec",
        "commercial construction"
      ]
    }
  },

  // Email configuration
  email: {
    from: {
      name: {
        fr: "Construction Familiale Québec",
        en: "Quebec Family Construction"
      },
      email: "noreply@" + contactDomain
    },

    to: {
      business: "info@" + contactDomain,
      owner: "pierre@" + contactDomain
    },

    templates: {
      userConfirmation: {
        subject: {
          fr: "Merci pour votre message - Construction Familiale Québec",
          en: "Thank you for your message - Quebec Family Construction"
        }
      },
      businessNotification: {
        subject: {
          fr: "Nouveau message depuis le site web",
          en: "New message from website"
        }
      }
    }
  }
};
