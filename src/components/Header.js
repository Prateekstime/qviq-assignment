import React, { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import Navbar from './Navbar';

const Header = ({ isAuthenticated, onLogout }) => {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-200 dark:bg-gray-800">
      <div className="text-xl font-bold">Logo</div>
      {isAuthenticated ? (
        <Navbar onLogout={onLogout} />
      ) : (
        <div>
          <button className="mr-4 p-2 bg-blue-500 text-white">Login</button>
          <button className="p-2 bg-green-500 text-white">Signup</button>
        </div>
      )}
      <ThemeToggle />
    </header>
  );
};

export default Header;
