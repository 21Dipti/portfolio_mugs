"use client";

import './globals.css';
import { useEffect, useState } from 'react';

export default function RootLayout({ children }) {
  const [theme, setTheme] = useState('light'); // Default to light theme

  useEffect(() => {
    // Get the user's local hour
    const hour = new Date().getHours();
    
    // Set the theme based on the hour of the day
    if (hour >= 6 && hour < 18) {
      setTheme('light');  // Daytime: Light theme
    } else {
      setTheme('dark');  // Nighttime: Dark theme
    }
  }, []); // Empty dependency array ensures this runs only once on component mount

  return (
    <html lang="en" className={theme}>
      <head>
        <title>Portfolio</title>
        <meta name="description" content="My personal portfolio website" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
