"use client"
import { useState } from "react";
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" style={{
      maxWidth: '800px',
      margin: '60px auto',
      padding: '0 20px'
    }}>
      <h2 style={{
        fontSize: '36px',
        marginBottom: '10px',
        textAlign: 'center',
        color: '#000'
      }}>
        Get In Touch
      </h2>
      <p style={{
        textAlign: 'center',
        color: '#666',
        marginBottom: '40px',
        fontSize: '18px'
      }}>
        We'd love to hear from you. Send us a message and we'll respond as soon as possible.
      </p>

      {submitted ? (
        <div style={{
          background: '#000',
          color: '#fff',
          padding: '30px',
          borderRadius: '8px',
          textAlign: 'center',
          fontSize: '18px'
        }}>
          ✓ Thank you! Your message has been sent successfully.
        </div>
      ) : (
        <div style={{
          background: '#fff',
          padding: '40px',
          borderRadius: '8px',
          border: '1px solid #e0e0e0'
        }}>
          <div onSubmit={handleSubmit}>
            <div style={{ marginBottom: '25px' }}>
              <label style={{
                display: 'block',
                marginBottom: '8px',
                fontWeight: '600',
                color: '#000'
              }}>
                Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: '4px',
                  border: '1px solid #ddd',
                  fontSize: '16px',
                  transition: 'border 0.3s',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => e.target.style.border = '1px solid #000'}
                onBlur={(e) => e.target.style.border = '1px solid #ddd'}
              />
            </div>

            <div style={{ marginBottom: '25px' }}>
              <label style={{
                display: 'block',
                marginBottom: '8px',
                fontWeight: '600',
                color: '#000'
              }}>
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: '4px',
                  border: '1px solid #ddd',
                  fontSize: '16px',
                  transition: 'border 0.3s',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => e.target.style.border = '1px solid #000'}
                onBlur={(e) => e.target.style.border = '1px solid #ddd'}
              />
            </div>

            <div style={{ marginBottom: '25px' }}>
              <label style={{
                display: 'block',
                marginBottom: '8px',
                fontWeight: '600',
                color: '#000'
              }}>
                Subject *
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: '4px',
                  border: '1px solid #ddd',
                  fontSize: '16px',
                  transition: 'border 0.3s',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => e.target.style.border = '1px solid #000'}
                onBlur={(e) => e.target.style.border = '1px solid #ddd'}
              />
            </div>

            <div style={{ marginBottom: '25px' }}>
              <label style={{
                display: 'block',
                marginBottom: '8px',
                fontWeight: '600',
                color: '#000'
              }}>
                Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: '4px',
                  border: '1px solid #ddd',
                  fontSize: '16px',
                  resize: 'vertical',
                  transition: 'border 0.3s',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => e.target.style.border = '1px solid #000'}
                onBlur={(e) => e.target.style.border = '1px solid #ddd'}
              />
            </div>

            <button
              onClick={handleSubmit}
              style={{
                background: '#000',
                color: '#fff',
                padding: '14px 40px',
                borderRadius: '4px',
                border: 'none',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'background 0.3s',
                width: '100%'
              }}
              onMouseOver={(e) => e.target.style.background = '#333'}
              onMouseOut={(e) => e.target.style.background = '#000'}
            >
              Send Message
            </button>
          </div>
        </div>
      )}
    </section>
  );
}