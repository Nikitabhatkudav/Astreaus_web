import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div style={styles.container} id="privacy_policy">
      <h1 style={styles.heading}>Privacy Policy</h1>
      <p>
        Welcome to Vajra! This Privacy Policy outlines how we collect, use, and protect your
        personal information when you use our website and services. By accessing our website, you
        agree to the terms outlined in this policy.
      </p>

      <h2 style={styles.subheading}>1. Information We Collect</h2>
      <ul>
        <li><strong>Personal Information:</strong> Name, email address, phone number, billing address, and other details you provide.</li>
        <li><strong>Technical Information:</strong> IP address, browser type, device information, and cookies.</li>
        <li><strong>Usage Data:</strong> Pages visited, time spent on the website, and interaction patterns.</li>
      </ul>

      <h2 style={styles.subheading}>2. How We Use Your Information</h2>
      <ul>
        <li>Provide and improve our services.</li>
        <li>Process transactions and generate automated bills.</li>
        <li>Communicate updates, offers, or important notices.</li>
        <li>Comply with legal obligations.</li>
      </ul>

      <h2 style={styles.subheading}>3. Sharing Your Information</h2>
      <p>We do not sell your personal data. However, we may share it with:</p>
      <ul>
        <li><strong>Service Providers:</strong> For payment processing, hosting, and other operational needs.</li>
        <li><strong>Legal Authorities:</strong> When required by law or to protect our rights.</li>
      </ul>

      <h2 style={styles.subheading}>4. Data Security</h2>
      <p>We implement strict measures to safeguard your data from unauthorized access, disclosure, or destruction.</p>

      <h2 style={styles.subheading}>5. Cookies and Tracking Technologies</h2>
      <p>
        Our website uses cookies to improve user experience. You can disable cookies through your browser settings, but
        some features may not function properly.
      </p>

      <h2 style={styles.subheading}>6. Your Rights</h2>
      <p>Depending on your location, you may have the right to:</p>
      <ul>
        <li>Access the information we hold about you.</li>
        <li>Request corrections or deletion of your data.</li>
        <li>Opt out of certain data processing activities.</li>
      </ul>

      <h2 style={styles.subheading}>7. Third-Party Links</h2>
      <p>
        Our website may contain links to third-party websites. We are not responsible for the privacy practices of these
        sites.
      </p>

      <h2 style={styles.subheading}>8. Updates to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. The latest version will be available on this page.
      </p>

      <h2 style={styles.subheading}>9. Contact Us</h2>
      <p>If you have any questions, concerns, or feedback regarding this Privacy Policy, please reach out to us at:</p>
      <ul>
        <li>
          <strong>Address:</strong>
          <br />
          AVANEESH
          <br />
          SNO 7/1 (P) 7/2 NR, KOKAN EXPRESS,
          <br />
          KOTHRUD, PUNE- 411038, India
        </li>
      </ul>
    </div>
  );
};

const styles = {
  container: {
    // maxWidth: '800px',
    margin: 'auto',
    padding: '20px',
    // border: '1px solid #ddd',
    // borderRadius: '8px',
    background: '#f9f9f9',
    fontFamily: 'Arial, sans-serif',
    lineHeight: 1.6,
    color: '#333',
  },
  heading: {
    color: '#2c3e50',
  },
  subheading: {
    color: '#2c3e50',
  },
  link: {
    color: '#3498db',
    textDecoration: 'none',
  },
  linkHover: {
    textDecoration: 'underline',
  },
};

export default PrivacyPolicy;
