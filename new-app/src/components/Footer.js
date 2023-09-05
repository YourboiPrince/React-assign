import React from 'react';

/**
 * Footer component.
 * Displays the current year and company name.
 * @returns {JSX.Element} The footer element.
 */
const Footer = () => {
    // Get the current year
    const currentYear = new Date().getFullYear();
    // Create the footer text with the current year and company name
    const footerText = `&copy; ${currentYear} Fictional College. All Rights Reserved.`;
    // Render the footer element
    return (
        <footer className="bg-dark text-white text-center py-3">
            {footerText}
        </footer>
    );
}

export default Footer;
