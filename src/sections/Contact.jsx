import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici vous pouvez ajouter la logique d'envoi du formulaire
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
    alert('Message envoyé ! (Simulation)');
  };

  return (
    <section className="contact" id="contact">
      <div className="contact__inner">
        <div className="contact__header">
          <span className="contact__tag">// Contact</span>
          <h2 className="contact__title">Discutons ensemble</h2>
          <p className="contact__subtitle">
            Intéressé par une collaboration ou avez-vous une question ?
            N'hésitez pas à me contacter !
          </p>
        </div>

        <div className="contact__content">
          <div className="contact__info">
            <div className="contact__info-item">
              <div className="contact__info-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 8L10.89 4.26C11.2187 4.10222 11.5813 4.10222 11.91 4.26L19.8 8M21 8V16C21 16.5304 20.7893 17.0391 20.4142 17.4142C20.0391 17.7893 19.5304 18 19 18H5C4.46957 18 3.96086 17.7893 3.58579 17.4142C3.21071 17.0391 3 16.5304 3 16V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="contact__info-content">
                <h3>Email</h3>
                <p>fanilonirinakantopaterne@example.com</p>
              </div>
            </div>
            <div className="contact__info-item">
              <div className="contact__info-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="contact__info-content">
                <h3>Téléphone</h3>
                <p>+261 34 19 117 83</p>
              </div>
            </div>
            
            <a href="https://github.com/Paterne-2002">
                <div className="contact__info-item">
              <div className="contact__info-icon">
                <svg width="24" height="24" viewBox="0 0 24 24"  fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" 
                            d="M12 .297c-6.63 0-12 5.373-12 12 
                            0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 
                            0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61 
                            -.546-1.387-1.333-1.757-1.333-1.757 
                            -1.089-.744.083-.729.083-.729 
                            1.205.084 1.84 1.236 1.84 1.236 
                            1.07 1.835 2.807 1.305 3.492.998 
                            .108-.776.418-1.305.762-1.605 
                            -2.665-.305-5.466-1.332-5.466-5.93 
                            0-1.31.468-2.38 1.235-3.22 
                            -.135-.303-.54-1.523.105-3.176 
                            0 0 1.005-.322 3.3 1.23 
                            .96-.267 1.98-.399 3-.405 
                            1.02.006 2.04.138 3 .405 
                            2.28-1.552 3.285-1.23 3.285-1.23 
                            .645 1.653.24 2.873.12 3.176 
                            .765.84 1.23 1.91 1.23 3.22 
                            0 4.61-2.805 5.625-5.475 5.92 
                            .435.372.81 1.102.81 2.222 
                            0 1.606-.015 2.896-.015 3.286 
                            0 .315.21.69.825.57 
                            C20.565 22.092 24 17.592 24 12.297 
                            c0-6.627-5.373-12-12-12z"/>
                    </svg>

              </div>
              <div className="contact__info-content">
                <h3>Lien GitHub</h3>
                <p>https://github.com/Paterne-2002</p>
              </div>
            </div>
            </a>
            <div className="contact__info-item">
              <div className="contact__info-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.657 16.657L13.414 20.9C12.633 21.681 11.367 21.681 10.586 20.9L6.343 16.657C4.611 14.925 3.783 12.592 4.155 10.297C4.687 7.003 7.003 4.687 10.297 4.155C12.592 3.783 14.925 4.611 16.657 6.343L20.9 10.586C21.681 11.367 21.681 12.633 20.9 13.414L17.657 16.657Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 12L12 12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="contact__info-content">
                <h3>Localisation</h3>
                <p>Antananarivo 103, Madagascar</p>
              </div>
            </div>
          </div>

          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__form-row">
              <div className="contact__form-group">
                <label htmlFor="name">Nom complet</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Votre nom"
                />
              </div>
              <div className="contact__form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="votre@email.com"
                />
              </div>
            </div>

            <div className="contact__form-group">
              <label htmlFor="subject">Sujet</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Objet de votre message"
              />
            </div>

            <div className="contact__form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Votre message..."
                rows="6"
              ></textarea>
            </div>

            <button type="submit" className="contact__submit">
              <span>Envoyer le message</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
