import React from 'react';
import NavigationBar from './components/NavigationBar';
import MainSection from './components/MainSection';
import Footer from './components/Footer';

/**
 * This component represents the main app.
 * It renders the navigation bar, main section, and footer.
 */
const App = () => {
  return (
    <div>
      {/* Render the navigation bar */}
      <NavigationBar />

      {/* Render the main section */}
      <MainSection />

      {/* Render the footer */}
      <Footer />
    </div>
  );
}

export default App;

