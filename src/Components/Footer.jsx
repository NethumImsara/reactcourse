import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#333', color: '#fff', padding: '20px', textAlign: 'center' }}>
      <div style={{ marginBottom: '10px' }}>
        <p>&copy; {new Date().getFullYear()} Nethum Imsara Hewaarachchi. All rights reserved.</p>
      </div>
      
    </footer>
  );
}

export default Footer;
