import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MainLandingPage = () => {
  const [activeTab, setActiveTab] = useState('Home'); // State for active tab
  const navigate = useNavigate(); // Hook for navigation

  // Function to render the content based on the active tab
  const renderContent = () => {
    switch (activeTab) {
      case 'Home':
        return (
          <>
            {/* Video Section */}
            <div className="relative mt-40 w-full h-[500px] flex justify-center items-center overflow-hidden">
              <video
                src="/jobcom.mp4"
                autoPlay
                loop
                muted
                className="object-cover w-full h-full rounded-lg shadow-md"
              ></video>
            </div>
            {/* Job Search Section */}
            <div className="flex flex-col items-center justify-center p-4 mt-8 text-center bg-gray-100 md:p-8">
              <h2 className="text-lg font-bold text-gray-600 md:text-2xl">
                Find Your Dream Job
              </h2>
              <div className="flex items-center gap-2 mt-4">
                <input
                  type="text"
                  placeholder="Search jobs..."
                  className="w-full max-w-xs p-2 border border-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                <button className="p-2 bg-teal-500 rounded-full">
                  <img src="/Microphone.png" alt="Mic" className="w-6 h-6" />
                </button>
              </div>
            </div>
            {/* Job Cards Section */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              {['Software Engineer', 'Data Analyst', 'UX/UI Designer'].map(
                (title, index) => (
                  <div
                    key={index}
                    className="w-full p-6 text-center bg-white rounded-lg shadow-lg sm:w-64"
                  >
                    <h3 className="text-lg font-bold text-gray-800">
                      {title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600">
                      {title === 'Software Engineer'
                        ? 'Develop and maintain web applications.'
                        : title === 'Data Analyst'
                        ? 'Analyze data to help companies make decisions.'
                        : 'Design user-friendly interfaces for apps and websites.'}
                    </p>
                    <button className="px-4 py-2 mt-4 text-white bg-teal-500 rounded-lg hover:bg-teal-600">
                      Apply
                    </button>
                  </div>
                )
              )}
            </div>
          </>
        );
      default:
        return <div className="p-4 md:p-8">Welcome to the Home Page!</div>;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 z-10 flex items-center justify-between w-full bg-white shadow-lg p-4 sm:p-8">
        {/* Logo */}
        <img src="/Logoo.png" alt="Logo" className="h-14" />

        {/* Login Button */}
        <button
          className="px-4 py-2 text-white bg-teal-500 rounded-lg hover:bg-teal-600"
          onClick={() => navigate('/login')} // Navigate to Login page
        >
          Login
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-4 mt-20 md:p-8">{renderContent()}</main>

      {/* Footer */}
      <footer className="flex flex-col items-center p-4 mt-auto text-gray-900 bg-white sm:p-8">
        <p className="mb-4 text-sm sm:text-base">In partnership with:</p>
        <div className="flex gap-4">
          <img src="/Pwd.png" alt="PWD" className="h-10 sm:h-12" />
          <img src="/Labor.png" alt="Labor" className="h-10 sm:h-12" />
        </div>
      </footer>
    </div>
  );
};

export default MainLandingPage;
