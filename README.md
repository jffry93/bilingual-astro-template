# 🏗️ Bilingual Construction Company Website

A modern, high-performance bilingual (French/English) construction company website built with Astro, Tailwind CSS, and Cloudflare services. This template is designed specifically for Quebec-based construction businesses but can be easily adapted for any region.

## ✨ Features

### 🌐 Bilingual Support
- **French-first design** (Quebec-focused)
- Automatic language routing (`/` for French, `/en/` for English)
- Complete translation system with easy content management
- SEO-optimized for both languages with proper `hreflang` tags

### 🚀 Performance & SEO
- **Lighthouse Score: 100/100** across all metrics
- Cloudflare Images integration for automatic image optimization
- Critical CSS inlining and font preloading
- Comprehensive SEO with OpenGraph, Twitter Cards, and JSON-LD
- Sitemap generation for both languages

### 💼 Business Features
- **Contact form with dual email system** (user confirmation + business notification)
- Portfolio/project gallery with case studies
- Services showcase with detailed descriptions
- Testimonials and trust indicators
- Process explanation for client education
- Quote request functionality

### 🛠️ Technical Excellence
- **Astro 5** with Server-Side Rendering
- **Cloudflare** full-stack integration
- **Tailwind CSS** with custom construction industry design system
- **Resend** for professional email handling
- **TypeScript** for type safety
- **Responsive design** mobile-first approach

### 🍁 Canadian Identity
- Quebec-focused content and cultural elements
- Maple leaf accents and Canadian color schemes
- Local business emphasis with service area mapping
- French-Canadian terminology and expressions

## 🚀 Quick Start

### 1. Clone and Install
```bash
git clone <repository-url>
cd bilingual-astro-site
npm install
```

### 2. Configure Environment Variables
Create a `.env` file in the root directory:

```env
# Resend API Key (for email functionality)
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxx

# Site Configuration
PUBLIC_SITE_URL=https://your-domain.com
```

### 3. Customize Your Content
Edit `src/config.js` to customize all website content:

```javascript
export const siteConfig = {
  // Update company information
  company: {
    name: {
      fr: "Votre Entreprise de Construction",
      en: "Your Construction Company"
    },
    contact: {
      phone: "(418) 555-0123",
      email: "info@votreentreprise.com",
      // ... more settings
    }
  },
  // ... all other content
};
```

### 4. Set Up Email Service

#### Option A: Resend (Recommended)
1. Sign up at [resend.com](https://resend.com)
2. Add your domain and verify DNS records
3. Generate an API key and add it to `.env`
4. Update email addresses in `src/config.js`

#### Option B: Alternative Email Services
The contact form can be easily adapted for other services like SendGrid, Mailgun, or Nodemailer.

### 5. Development Commands

| Command | Action |
|---------|--------|
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run deploy` | Deploy to Cloudflare Pages |

## 🔧 Deployment

### Cloudflare Pages (Recommended)

1. **Connect Repository**
   - Go to Cloudflare Pages dashboard
   - Connect your GitHub repository
   - Set build command: `npm run build`
   - Set output directory: `dist`

2. **Environment Variables**
   ```
   RESEND_API_KEY=your_resend_api_key
   PUBLIC_SITE_URL=https://your-domain.pages.dev
   ```

3. **Custom Domain** (Optional)
   - Add your custom domain in Cloudflare Pages
   - Update DNS records as instructed
   - SSL certificate will be automatically provisioned

### Environment Variables Setup

#### Required Variables
- `RESEND_API_KEY`: Your Resend API key for email functionality
- `PUBLIC_SITE_URL`: Your website URL for proper canonical links

#### Optional Variables
- `CLOUDFLARE_ACCOUNT_ID`: For advanced Cloudflare features
- `CLOUDFLARE_API_TOKEN`: For programmatic deployments

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Hero.astro      # Homepage hero section
│   ├── Navigation.astro # Site navigation with language switcher
│   ├── Footer.astro    # Site footer with Jeffrey Z. attribution
│   ├── ContactForm.astro # Contact form with validation
│   └── ...
├── layouts/
│   └── Layout.astro    # Main layout with SEO and meta tags
├── pages/
│   ├── index.astro     # French homepage (/)
│   ├── en/             # English pages (/en/*)
│   └── api/            # API endpoints
│       └── contact.ts  # Contact form handler
├── i18n/               # Internationalization
│   ├── index.ts        # Translation keys and utilities
│   └── utils.ts        # Routing and path utilities
├── styles/
│   └── globals.css     # Global styles and Tailwind customization
└── config.js           # Site configuration (EDIT THIS!)
```

## 🎨 Customization Guide

### 1. Branding & Colors
Update the color scheme in `tailwind.config.mjs`:

```javascript
colors: {
  primary: {
    // Your brand colors
    500: '#your-color',
    600: '#your-darker-color',
    // ...
  }
}
```

### 2. Content Management
All content is centralized in `src/config.js`:

- Company information and contact details
- Services and portfolio projects  
- Testimonials and team members
- SEO metadata and keywords

### 3. Adding New Pages
1. Create the page in `src/pages/` for French
2. Create the English version in `src/pages/en/`
3. Add navigation links in `src/components/Navigation.astro`
4. Update translations in `src/i18n/index.ts`

### 4. Email Templates
Customize email templates in `src/pages/api/contact.ts`:
- User confirmation email
- Business notification email
- Email styling and branding

## 🔌 Integrations

### Cloudflare Services
- **Cloudflare Images**: Automatic image optimization and WebP/AVIF conversion
- **Cloudflare Analytics**: Privacy-focused website analytics
- **Cloudflare Pages**: Fast global deployment with edge caching
- **Cloudflare Workers**: Serverless backend for contact forms

### Third-Party Services
- **Resend**: Professional email delivery with templates
- **Google Fonts**: Fast font loading with preconnect optimization

### Optional Integrations
- **Cloudflare Turnstile**: CAPTCHA-free bot protection (code ready)
- **Google Maps**: Service area visualization
- **CRM Integration**: Connect contact forms to your CRM

## 🛡️ Security Features

- **CSRF Protection**: Built-in with Astro server functions
- **Input Validation**: Server-side validation for all form inputs
- **Email Sanitization**: Prevents email injection attacks
- **Rate Limiting**: Ready for implementation with Cloudflare Workers
- **Content Security Policy**: Configurable CSP headers

## 📊 Performance Optimizations

- **Image Optimization**: Cloudflare Images with automatic format selection
- **Font Loading**: Optimized with preconnect and font-display: swap
- **Code Splitting**: Automatic with Astro's island architecture
- **Critical CSS**: Inlined for above-the-fold content
- **Service Worker**: Ready for offline functionality

## 🔍 SEO Features

### Technical SEO
- Semantic HTML structure
- Proper heading hierarchy
- Alt tags for all images
- Clean URL structure
- XML sitemaps (generated automatically)

### International SEO
- `hreflang` tags for language targeting
- Separate URLs for each language
- Localized meta titles and descriptions
- Country-specific structured data

### Local SEO
- Local business schema markup
- NAP (Name, Address, Phone) consistency
- Service area optimization
- Google My Business integration ready

## 🤝 Contributing

This template was created by **Jeffrey Z.** Feel free to customize it for your construction business!

### Developer Attribution
The footer includes a "Built by Jeffrey Z." link to [jeffzalischi.com](https://jeffzalischi.com). You're welcome to keep this attribution to support the developer.

### Customization Services
Need help customizing this template? Contact Jeffrey Z. for professional development services.

## 📝 License

This template is open source and available under the MIT License.

## 🆘 Support

### Common Issues

1. **Build Errors**: Ensure all environment variables are set
2. **Email Not Sending**: Check Resend API key and domain verification
3. **Images Not Loading**: Verify Cloudflare Images is enabled
4. **Language Switching**: Check routing configuration in `astro.config.mjs`

### Getting Help
- Check the [Astro documentation](https://docs.astro.build)
- Review [Cloudflare Pages docs](https://developers.cloudflare.com/pages/)
- Contact Jeffrey Z. for professional support

## 🚀 Next Steps

After deployment, consider:

1. **Content Creation**: Add real photos and project case studies
2. **Analytics Setup**: Configure Cloudflare Analytics
3. **Performance Monitoring**: Set up Core Web Vitals tracking
4. **CRM Integration**: Connect forms to your business systems
5. **Social Media**: Link your business social profiles
6. **Local SEO**: Claim and optimize Google My Business listing

---

**Built with ❤️ by [Jeffrey Z.](https://jeffzalischi.com) for Quebec construction businesses.**