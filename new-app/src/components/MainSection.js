import React from 'react';

/**
 * MainSection component.
 * 
 * Renders the main section of the page.
 */
const MainSection = () => (
    // Create a container div with fluid layout, top margin, dark background, white text color, and full viewport height
    <div className="container-fluid mt-5 bg-dark text-white text-center vh-80">
        {/* Render the title */}
        <h1>Welcome to Fictional College</h1>
        {/* Render the description */}
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet urna sit amet sapien tincidunt condimentum.
        </p>
    </div>
);

export default MainSection;
