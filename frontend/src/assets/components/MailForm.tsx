import { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

interface ContactUsProps {
  translations: {
    title: string;
    name: string;
    email: string;
    message: string;
    send: string;
    sending: string;
    success: string;
    error: string;
    availability: string;
  }
}

export const ContactUs = ({ translations }: ContactUsProps) => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const isSubmitting = status === 'sending';

  useEffect(() => {
    let timeoutId: number;
    
    if (status === 'success' || status === 'error') {
      timeoutId = window.setTimeout(() => setStatus('idle'), 3000);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [status]);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return; // Prevenir múltiples envíos

    try {
      setStatus('sending');
      await emailjs.sendForm(
        'contact_service',
        'contact_form',
        form.current as HTMLFormElement,
        { publicKey: 'qtriiT2_yQ4XZ50-L' }
      );
      setStatus('success');
      if (form.current) form.current.reset();
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('error');
    }
  };

  return (
    <div className="contact-section">
      <h2 className="title_content">{translations.title}</h2>
      <div className="contact-content">
        <div className="contact-info">
          <p>{translations.availability}</p>
          <div className="contact-links">
            <a href="mailto:lucianofarias544@gmail.com" className="contact-link" aria-label="Email">
              <i className="bi bi-envelope"></i>
              <span>lucianofarias544@gmail.com</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/luciano-farias/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-link"
              aria-label="LinkedIn Profile"
            >
              <i className="bi bi-linkedin"></i>
              <span>LinkedIn</span>
            </a>
            <a 
              href="https://github.com/LucianooF" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-link"
              aria-label="GitHub Profile"
            >
              <i className="bi bi-github"></i>
              <span>GitHub</span>
            </a>
          </div>
        </div>
        <div className="form_container">
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="form-group">
              <input 
                type="text" 
                name="user_name" 
                placeholder={translations.name}
                required
                disabled={isSubmitting}
                aria-label={translations.name}
              />
            </div>
            <div className="form-group">
              <input 
                type="email" 
                name="user_email" 
                placeholder={translations.email}
                required
                disabled={isSubmitting}
                aria-label={translations.email}
              />
            </div>
            <div className="form-group">
              <textarea 
                name="message" 
                placeholder={translations.message}
                required
                disabled={isSubmitting}
                aria-label={translations.message}
              />
            </div>
            <button 
              type="submit" 
              disabled={isSubmitting}
              className={isSubmitting ? 'disabled' : ''}
              aria-label={isSubmitting ? translations.sending : translations.send}
            >
              <i className="bi bi-send"></i>
              {isSubmitting ? translations.sending : translations.send}
            </button>
            {status === 'success' && (
              <div className="success-message" role="alert">
                {translations.success}
              </div>
            )}
            {status === 'error' && (
              <div className="error-message" role="alert">
                {translations.error}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};
