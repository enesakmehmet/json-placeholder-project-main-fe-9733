import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <motion.div 
      className="theme-toggle" 
      onClick={toggleTheme}
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.1 }}
    >
      {darkMode ? (
        <i className="fas fa-sun" style={{ color: '#FFC107' }}></i>
      ) : (
        <i className="fas fa-moon" style={{ color: '#6C757D' }}></i>
      )}
    </motion.div>
  );
};

export default ThemeToggle;
