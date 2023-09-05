import React from 'react';

/**
 * Render the navigation bar component.
 * @returns {JSX.Element} The navigation bar component.
 */
const NavigationBar = () => {
    return (
        // Create a navigation bar with a dark background
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                {/* Add the brand name */}
                <a className="navbar-brand" href="#">Fictional College</a>
                {/* Add the navbar toggler */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/* Add the navbar collapse */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        {/* Add the home link */}
                        <li className="nav-item">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        {/* Add the courses link */}
                        <li className="nav-item">
                            <a className="nav-link" href="#">Courses</a>
                        </li>
                        {/* Add the about us link */}
                        <li className="nav-item">
                            <a className="nav-link" href="#">About Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavigationBar;
