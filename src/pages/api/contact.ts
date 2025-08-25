import type { APIRoute } from 'astro';
import { Resend } from 'resend';
import { siteConfig } from '../../config.js';

// Initialize Resend with API key from environment variables
const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  try {
    // Parse form data
    const formData = await request.formData();
    
    const name = formData.get('name')?.toString().trim();
    const email = formData.get('email')?.toString().trim();
    const phone = formData.get('phone')?.toString().trim();
    const subject = formData.get('subject')?.toString();
    const message = formData.get('message')?.toString().trim();
    const privacy = formData.get('privacy');

    // Validate required fields
    if (!name || !email || !subject || !message || !privacy) {
      return new Response(JSON.stringify({
        success: false,
        message: 'All required fields must be filled out.'
      }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({
        success: false,
        message: 'Please enter a valid email address.'
      }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    // Determine language based on subject options or default to French
    const lang = 'fr'; // You could detect language from request headers or form data

    // Get subject labels
    const subjectLabels: Record<string, { fr: string; en: string }> = {
      quote: { fr: 'Demande de devis', en: 'Quote request' },
      consultation: { fr: 'Consultation gratuite', en: 'Free consultation' },
      renovation: { fr: 'Projet de rénovation', en: 'Renovation project' },
      construction: { fr: 'Nouvelle construction', en: 'New construction' },
      other: { fr: 'Autre', en: 'Other' }
    };

    const subjectLabel = subjectLabels[subject]?.[lang] || subject;

    // Email templates
    const userEmailTemplate = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Merci pour votre message</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #374151; background-color: #f9fafb;">
      <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #f6dcc2 0%, #e8a969 100%); padding: 40px 20px; text-align: center; border-radius: 12px 12px 0 0;">
          <div style="background: white; width: 60px; height: 60px; border-radius: 50%; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center; font-size: 24px;">
            🏠
          </div>
          <h1 style="color: white; margin: 0; font-size: 24px; font-weight: bold;">
            ${siteConfig.company.name[lang]}
          </h1>
          <p style="color: white; margin: 10px 0 0; opacity: 0.9;">
            ${siteConfig.tagline[lang]}
          </p>
        </div>
        
        <div style="background: white; padding: 40px 30px; border-radius: 0 0 12px 12px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
          <h2 style="color: #1f2937; margin: 0 0 20px; font-size: 20px;">
            ${lang === 'fr' ? 'Merci pour votre message!' : 'Thank you for your message!'}
          </h2>
          
          <p style="margin: 0 0 20px;">
            ${lang === 'fr' ? 'Bonjour' : 'Hello'} ${name},
          </p>
          
          <p style="margin: 0 0 20px;">
            ${lang === 'fr' 
              ? 'Nous avons bien reçu votre message concernant: <strong>' + subjectLabel + '</strong>.'
              : 'We have received your message regarding: <strong>' + subjectLabel + '</strong>.'
            }
          </p>
          
          <p style="margin: 0 0 20px;">
            ${lang === 'fr' 
              ? 'Notre équipe examinera votre demande et vous contactera dans les plus brefs délais, généralement sous 24 heures ouvrables.'
              : 'Our team will review your request and contact you as soon as possible, usually within 24 business hours.'
            }
          </p>
          
          <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin: 0 0 10px; color: #1f2937; font-size: 16px;">
              ${lang === 'fr' ? 'En attendant, vous pouvez:' : 'In the meantime, you can:'}
            </h3>
            <ul style="margin: 0; padding-left: 20px;">
              <li style="margin-bottom: 5px;">
                ${lang === 'fr' 
                  ? 'Nous appeler directement au ' + siteConfig.company.contact.phone
                  : 'Call us directly at ' + siteConfig.company.contact.phone
                }
              </li>
              <li style="margin-bottom: 5px;">
                ${lang === 'fr' 
                  ? 'Consulter notre portfolio sur notre site web'
                  : 'Check out our portfolio on our website'
                }
              </li>
              <li>
                ${lang === 'fr' 
                  ? 'Nous suivre sur nos réseaux sociaux'
                  : 'Follow us on social media'
                }
              </li>
            </ul>
          </div>
          
          <p style="margin: 20px 0 0; font-size: 14px; color: #6b7280;">
            ${lang === 'fr' 
              ? 'Cordialement,<br>L\'équipe de ' + siteConfig.company.name[lang]
              : 'Best regards,<br>The ' + siteConfig.company.name[lang] + ' team'
            }
          </p>
        </div>
        
        <div style="text-align: center; padding: 20px 0; color: #6b7280; font-size: 12px;">
          <p style="margin: 0;">
            ${siteConfig.company.contact.address[lang]}<br>
            ${siteConfig.company.contact.phone} • ${siteConfig.company.contact.email}
          </p>
        </div>
      </div>
    </body>
    </html>
    `;

    const businessEmailTemplate = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Nouveau message depuis le site web</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #374151; background-color: #f9fafb;">
      <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: #1f2937; padding: 30px 20px; text-align: center; border-radius: 12px 12px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 24px;">
            📬 Nouveau message depuis le site web
          </h1>
        </div>
        
        <div style="background: white; padding: 40px 30px; border-radius: 0 0 12px 12px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
          <div style="border-left: 4px solid #e39344; padding-left: 20px; margin-bottom: 30px;">
            <h2 style="color: #1f2937; margin: 0 0 10px; font-size: 20px;">
              Détails du contact
            </h2>
          </div>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600; color: #374151; width: 120px;">
                Nom:
              </td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #1f2937;">
                ${name}
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600; color: #374151;">
                Email:
              </td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #1f2937;">
                <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a>
              </td>
            </tr>
            ${phone ? `
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600; color: #374151;">
                Téléphone:
              </td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #1f2937;">
                <a href="tel:${phone}" style="color: #2563eb; text-decoration: none;">${phone}</a>
              </td>
            </tr>
            ` : ''}
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600; color: #374151;">
                Sujet:
              </td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #1f2937;">
                ${subjectLabel}
              </td>
            </tr>
          </table>
          
          <div style="margin-top: 30px;">
            <h3 style="color: #1f2937; margin: 0 0 15px; font-size: 18px; border-left: 4px solid #e39344; padding-left: 15px;">
              Message:
            </h3>
            <div style="background: #f9fafb; padding: 20px; border-radius: 8px; border: 1px solid #e5e7eb;">
              <p style="margin: 0; white-space: pre-wrap; color: #374151;">
${message}
              </p>
            </div>
          </div>
          
          <div style="margin-top: 30px; text-align: center; padding: 20px; background: #fef3cd; border-radius: 8px; border: 1px solid #fbbf24;">
            <p style="margin: 0; color: #92400e; font-weight: 600;">
              ⚡ Action requise: Répondre au client dans les 24h
            </p>
          </div>
        </div>
        
        <div style="text-align: center; padding: 20px 0; color: #6b7280; font-size: 12px;">
          <p style="margin: 0;">
            Message reçu le ${new Date().toLocaleDateString('fr-CA', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}
          </p>
        </div>
      </div>
    </body>
    </html>
    `;

    // Send thank you email to user
    const userEmailResult = await resend.emails.send({
      from: `${siteConfig.email.from.name[lang]} <${siteConfig.email.from.email}>`,
      to: [email],
      subject: siteConfig.email.templates.userConfirmation.subject[lang],
      html: userEmailTemplate,
    });

    // Send notification email to business
    const businessEmailResult = await resend.emails.send({
      from: `${siteConfig.email.from.name[lang]} <${siteConfig.email.from.email}>`,
      to: [siteConfig.email.to.business, siteConfig.email.to.owner],
      subject: `${siteConfig.email.templates.businessNotification.subject[lang]} - ${subjectLabel}`,
      html: businessEmailTemplate,
      replyTo: email,
    });

    // Check if emails were sent successfully
    if (userEmailResult.error || businessEmailResult.error) {
      console.error('Email sending failed:', {
        userError: userEmailResult.error,
        businessError: businessEmailResult.error
      });
      
      return new Response(JSON.stringify({
        success: false,
        message: 'Message received but email notification failed. We will still contact you soon.'
      }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    return new Response(JSON.stringify({
      success: true,
      message: 'Message sent successfully! Check your email for confirmation.'
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });

  } catch (error) {
    console.error('Contact form error:', error);
    
    return new Response(JSON.stringify({
      success: false,
      message: 'An unexpected error occurred. Please try again later.'
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};