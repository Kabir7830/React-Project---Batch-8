"use client"
export default function Footer() {
  return (
    <footer style={{
      background: '#000',
      color: '#fff',
      padding: '40px 0',
      marginTop: '60px',
      borderTop: '1px solid #333'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '40px',
          marginBottom: '30px'
        }}>
          <div>
            <h3 style={{ marginBottom: '15px', fontSize: '18px' }}>About Us</h3>
            <p style={{ color: '#999', lineHeight: '1.6' }}>
              We are a professional company dedicated to delivering excellence in everything we do.
            </p>
          </div>
          
          <div>
            <h3 style={{ marginBottom: '15px', fontSize: '18px' }}>Quick Links</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a href="#home" style={{ color: '#999', textDecoration: 'none', transition: 'color 0.3s' }}
                 onMouseOver={(e) => e.target.style.color = '#fff'}
                 onMouseOut={(e) => e.target.style.color = '#999'}>
                Home
              </a>
              <a href="#services" style={{ color: '#999', textDecoration: 'none', transition: 'color 0.3s' }}
                 onMouseOver={(e) => e.target.style.color = '#fff'}
                 onMouseOut={(e) => e.target.style.color = '#999'}>
                Services
              </a>
              <a href="#contact" style={{ color: '#999', textDecoration: 'none', transition: 'color 0.3s' }}
                 onMouseOver={(e) => e.target.style.color = '#fff'}
                 onMouseOut={(e) => e.target.style.color = '#999'}>
                Contact
              </a>
            </div>
          </div>
          
          <div>
            <h3 style={{ marginBottom: '15px', fontSize: '18px' }}>Contact Info</h3>
            <div style={{ color: '#999', lineHeight: '1.8' }}>
              <p>Email: info@mycompany.com</p>
              <p>Phone: +1 234 567 890</p>
              <p>Address: 123 Business St</p>
            </div>
          </div>
        </div>
        
        <div style={{
          textAlign: 'center',
          paddingTop: '20px',
          borderTop: '1px solid #333',
          color: '#666'
        }}>
          <p>© 2024 MyCompany. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
