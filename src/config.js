// Site configuration - Update this file to customize your plaster company website

export const siteConfig = {
  // Basic site information
  name: {
    fr: "Plâtrage Familial Tremblay",
    en: "Tremblay Family Plastering"
  },

  tagline: {
    fr: "Maîtres plâtriers depuis 1998",
    en: "Master plasterers since 1998"
  },

  url: "https://bilingual-astro-site.pages.dev",

  // Company information
  company: {
    name: {
      fr: "Plâtrage Familial Tremblay",
      en: "Tremblay Family Plastering"
    },

    founded: "1998",
    experience: "25+",

    owner: {
      fr: "Famille Tremblay",
      en: "Tremblay Family"
    },

    contact: {
      phone: "(418) 555-0123",
      email: "info@platragetremblay.com",
      address: {
        fr: "123 Rue des Artisans, Québec, QC G1A 1A1",
        en: "123 Artisan Street, Quebec City, QC G1A 1A1"
      }
    },

    social: {
      facebook: "https://facebook.com/platragetremblay",
      instagram: "https://instagram.com/platragetremblay",
      linkedin: "https://linkedin.com/company/platragetremblay"
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
      fr: "Plâtrage artisanal, tradition familiale",
      en: "Artisan Plastering, Family Tradition"
    },

    subtitle: {
      fr: "Plus de 25 ans d'expertise en plâtrage au service des familles québécoises. Nous créons des finis exceptionnels avec passion et savoir-faire ancestral.",
      en: "Over 25 years of plastering expertise serving Quebec families. We create exceptional finishes with passion and traditional craftsmanship."
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
        fr: "Maîtres plâtriers québécois",
        en: "Quebec master plasterers"
      },
      {
        fr: "Techniques traditionnelles & modernes",
        en: "Traditional & modern techniques"
      },
      {
        fr: "Finis durables garantis",
        en: "Guaranteed durable finishes"
      }
    ]
  },

  // Services
  services: [
    {
      id: "interior-plaster",
      icon: "🏺",
      title: {
        fr: "Finition de plâtre intérieur",
        en: "Interior Plaster Finishing"
      },
      description: {
        fr: "Finis de plâtre lisses et texturés pour murs et plafonds, réparations et restaurations intérieures.",
        en: "Smooth and textured plaster finishes for walls and ceilings, interior repairs and restorations."
      },
      features: {
        fr: ["Murs lisses parfaits", "Textures personnalisées", "Réparations de plâtre"],
        en: ["Perfect smooth walls", "Custom textures", "Plaster repairs"]
      }
    },
    {
      id: "exterior-stucco",
      icon: "🏛️",
      title: {
        fr: "Stucco extérieur et SEIF",
        en: "Exterior Stucco & EIFS"
      },
      description: {
        fr: "Systèmes d'isolation extérieure, stucco traditionnel et moderne pour protection et esthétique.",
        en: "Exterior insulation systems, traditional and modern stucco for protection and aesthetics."
      },
      features: {
        fr: ["Isolation thermique", "Finis décoratifs", "Protection météorologique"],
        en: ["Thermal insulation", "Decorative finishes", "Weather protection"]
      }
    },
    {
      id: "heritage-restoration",
      icon: "🎨",
      title: {
        fr: "Plâtrage patrimonial",
        en: "Heritage Plastering"
      },
      description: {
        fr: "Restauration de plâtre traditionnel, techniques ancestrales pour bâtiments historiques.",
        en: "Traditional plaster restoration, ancestral techniques for historical buildings."
      },
      features: {
        fr: ["Plâtre à la chaux", "Techniques d'époque", "Conformité patrimoniale"],
        en: ["Lime plaster", "Period techniques", "Heritage compliance"]
      }
    },
    {
      id: "venetian-decorative",
      icon: "✨",
      title: {
        fr: "Plâtre vénitien et décoratif",
        en: "Venetian & Decorative Plaster"
      },
      description: {
        fr: "Finis de luxe, plâtre vénitien, textures artistiques pour espaces haut de gamme.",
        en: "Luxury finishes, Venetian plaster, artistic textures for high-end spaces."
      },
      features: {
        fr: ["Finis de luxe", "Effets artistiques", "Designs personnalisés"],
        en: ["Luxury finishes", "Artistic effects", "Custom designs"]
      }
    }
  ],

  // Portfolio projects
  portfolio: [
    {
      id: "heritage-plaster-restoration",
      title: {
        fr: "Restauration de plâtre patrimonial - Vieux-Québec",
        en: "Heritage Plaster Restoration - Old Quebec"
      },
      description: {
        fr: "Restauration complète des murs de plâtre à la chaux d'une maison historique du 18e siècle.",
        en: "Complete restoration of lime plaster walls in an 18th century historic home."
      },
      category: "heritage-restoration",
      year: "2023",
      size: "1,800 pi² / sq ft",
      duration: "6 mois / months",
      images: [
        "/images/portfolio/heritage-plaster-1.jpg",
        "/images/portfolio/heritage-plaster-2.jpg",
        "/images/portfolio/heritage-plaster-3.jpg"
      ],
      features: {
        fr: ["Plâtre à la chaux traditionnel", "Techniques d'époque", "Conformité patrimoniale", "Finitions authentiques"],
        en: ["Traditional lime plaster", "Period techniques", "Heritage compliance", "Authentic finishes"]
      }
    },
    {
      id: "luxury-venetian-condo",
      title: {
        fr: "Plâtre vénitien de luxe - Sainte-Foy",
        en: "Luxury Venetian Plaster - Sainte-Foy"
      },
      description: {
        fr: "Application de plâtre vénitien haut de gamme dans un penthouse moderne avec finis artistiques.",
        en: "High-end Venetian plaster application in a modern penthouse with artistic finishes."
      },
      category: "venetian-decorative",
      year: "2023",
      size: "2,200 pi² / sq ft",
      duration: "3 mois / months",
      images: [
        "/images/portfolio/venetian-1.jpg",
        "/images/portfolio/venetian-2.jpg"
      ],
      features: {
        fr: ["Plâtre vénitien authentique", "Effets métalliques", "Finis multicolores", "Design personnalisé"],
        en: ["Authentic Venetian plaster", "Metallic effects", "Multi-color finishes", "Custom design"]
      }
    },
    {
      id: "commercial-stucco-project",
      title: {
        fr: "Stucco commercial SEIF - Lévis",
        en: "Commercial EIFS Stucco - Lévis"
      },
      description: {
        fr: "Installation complète d'un système SEIF sur un bâtiment commercial de 3 étages.",
        en: "Complete EIFS system installation on a 3-story commercial building."
      },
      category: "exterior-stucco",
      year: "2022",
      size: "12,000 pi² / sq ft",
      duration: "4 mois / months",
      images: [
        "/images/portfolio/commercial-stucco-1.jpg",
        "/images/portfolio/commercial-stucco-2.jpg",
        "/images/portfolio/commercial-stucco-3.jpg"
      ],
      features: {
        fr: ["Système SEIF complet", "Isolation thermique", "Fini texturé", "Résistance météorologique"],
        en: ["Complete EIFS system", "Thermal insulation", "Textured finish", "Weather resistance"]
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
        fr: "Le plâtre vénitien dans notre salon est absolument magnifique! L'expertise et l'artisanat de l'équipe Tremblay sont exceptionnels.",
        en: "The Venetian plaster in our living room is absolutely beautiful! The Tremblay team's expertise and craftsmanship are exceptional."
      },
      project: "luxury-venetian-condo"
    },
    {
      id: 2,
      name: "Propriétaires du Château Frontenac",
      location: {
        fr: "Vieux-Québec, QC",
        en: "Old Quebec, QC"
      },
      rating: 5,
      text: {
        fr: "Restauration de plâtre patrimonial réalisée avec un respect total de l'histoire. Savoir-faire ancestral préservé!",
        en: "Heritage plaster restoration completed with total respect for history. Ancestral craftsmanship preserved!"
      },
      project: "heritage-plaster-restoration"
    },
    {
      id: 3,
      name: "Famille Gagnon",
      location: {
        fr: "Lévis, QC",
        en: "Lévis, QC"
      },
      rating: 5,
      text: {
        fr: "Les murs de notre maison n'ont jamais été aussi beaux. Fini lisse parfait et équipe très professionnelle.",
        en: "Our home's walls have never looked so beautiful. Perfect smooth finish and very professional team."
      },
      project: "interior-plaster-renovation"
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
          "Fondée en 1998 par Pierre Tremblay, Plâtrage Familial Tremblay est née de la passion pour l'art du plâtre et du désir de préserver les techniques traditionnelles québécoises.",
          "Aujourd'hui, l'entreprise est dirigée par Pierre et ses fils Marc et David, perpétuant trois générations de maîtrise du plâtrage et de savoir-faire ancestral.",
          "Nous sommes fiers d'être une entreprise 100% québécoise, spécialisée dans les techniques de plâtrage traditionnelles et modernes, des finis vénitiens aux restaurations patrimoniales."
        ],
        en: [
          "Founded in 1998 by Pierre Tremblay, Tremblay Family Plastering was born from a passion for the art of plastering and a desire to preserve traditional Quebec techniques.",
          "Today, the company is led by Pierre and his sons Marc and David, continuing three generations of plastering mastery and ancestral craftsmanship.",
          "We are proud to be a 100% Quebec company, specializing in traditional and modern plastering techniques, from Venetian finishes to heritage restorations."
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
          fr: "Maître plâtrier et Fondateur",
          en: "Master Plasterer and Founder"
        },
        experience: "25+ années",
        image: "/images/team/pierre.jpg",
        bio: {
          fr: "Maître plâtrier avec plus de 25 ans d'expertise en plâtrage traditionnel et restauration patrimoniale.",
          en: "Master plasterer with over 25 years of expertise in traditional plastering and heritage restoration."
        }
      },
      {
        name: "Marc Tremblay",
        role: {
          fr: "Spécialiste en stucco extérieur",
          en: "Exterior Stucco Specialist"
        },
        experience: "15+ années",
        image: "/images/team/marc.jpg",
        bio: {
          fr: "Expert en systèmes d'isolation extérieure (SEIF) et applications de stucco commercial.",
          en: "Expert in exterior insulation systems (EIFS) and commercial stucco applications."
        }
      },
      {
        name: "David Tremblay",
        role: {
          fr: "Artisan en plâtre décoratif",
          en: "Decorative Plaster Artisan"
        },
        experience: "12+ années",
        image: "/images/team/david.jpg",
        bio: {
          fr: "Spécialisé en plâtre vénitien et finitions décoratives haut de gamme, alliant art et technique.",
          en: "Specialized in Venetian plaster and high-end decorative finishes, combining art with technique."
        }
      }
    ]
  },

  // Process steps
  process: [
    {
      step: 1,
      title: {
        fr: "Évaluation des surfaces",
        en: "Surface Assessment"
      },
      description: {
        fr: "Inspection détaillée des substrats et évaluation des besoins de préparation.",
        en: "Detailed substrate inspection and preparation needs assessment."
      },
      icon: "🔍"
    },
    {
      step: 2,
      title: {
        fr: "Sélection des matériaux",
        en: "Material Selection"
      },
      description: {
        fr: "Choix du type de plâtre et formulation sur mesure selon vos besoins.",
        en: "Plaster type selection and custom formulation according to your needs."
      },
      icon: "🏺"
    },
    {
      step: 3,
      title: {
        fr: "Préparation des surfaces",
        en: "Surface Preparation"
      },
      description: {
        fr: "Nettoyage, réparation des fissures et application de la couche de base.",
        en: "Cleaning, crack repair, and base coat application."
      },
      icon: "🧹"
    },
    {
      step: 4,
      title: {
        fr: "Application du plâtre",
        en: "Plaster Application"
      },
      description: {
        fr: "Application experte en multicouches avec contrôle qualité continu.",
        en: "Expert multi-coat application with continuous quality control."
      },
      icon: "🎨"
    },
    {
      step: 5,
      title: {
        fr: "Finition et protection",
        en: "Finishing & Protection"
      },
      description: {
        fr: "Application de la couche finale, scellement et conseils d'entretien.",
        en: "Final coat application, sealing, and maintenance guidance."
      },
      icon: "✨"
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
        "plâtrage Québec",
        "plâtrier professionnel",
        "stucco extérieur",
        "plâtre vénitien",
        "restauration plâtre",
        "SEIF Québec",
        "plâtrage traditionnel",
        "finition plâtre"
      ],
      en: [
        "plastering Quebec",
        "professional plasterer",
        "exterior stucco",
        "venetian plaster",
        "plaster restoration",
        "EIFS Quebec",
        "traditional plastering",
        "plaster finishing"
      ]
    }
  },

  // Email configuration
  email: {
    from: {
      name: {
        fr: "Plâtrage Familial Tremblay",
        en: "Tremblay Family Plastering"
      },
      email: "noreply@contact.jeffzalischi.com"
    },

    to: {
      business: "info@contact.jeffzalischi.com",
      owner: "pierre@contact.jeffzalischi.com"
    },

    templates: {
      userConfirmation: {
        subject: {
          fr: "Merci pour votre message - Plâtrage Familial Tremblay",
          en: "Thank you for your message - Tremblay Family Plastering"
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
