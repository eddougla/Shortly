import { motion } from "framer-motion";

function MobileMenuButton({ type, onClick, isMenuOpen }) {
  // Hamburger container variants
  const hamburgerContainerVariants = {
    closed: { rotate: 0 },
    open: { rotate: 90, x: -2 },
  };

  // Hamburger line variants
  const hamburgerTopVariants = {
    closed: { rotate: 0, y: 4 },
    open: { rotate: 45, y: 8 },
  };

  const hamburgerMiddleVariants = {
    closed: { opacity: 1, y: 11 },
    open: { opacity: 0, y: 9 },
  };

  const hamburgerBottomVariants = {
    closed: { rotate: 0, y: 18 },
    open: { rotate: -45, y: 8 },
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className="z-50 w-8 h-8 md:hidden focus:outline-none focus:ring-2 focus:ring-grayishViolet flex items-center justify-center relative"
      aria-label="Toggle menu"
      aria-expanded={isMenuOpen}
      aria-controls="mobile-menu"
    >
      <motion.div
        className="w-6 h-6 relative"
        variants={hamburgerContainerVariants}
        animate={isMenuOpen ? "open" : "closed"}
        transition={{ duration: 0.25 }}
      >
        <motion.span
          className="absolute w-6 h-0.5 bg-grayishViolet left-0 top-0"
          variants={hamburgerTopVariants}
          animate={isMenuOpen ? "open" : "closed"}
          transition={{ duration: 0.5 }}
        />
        <motion.span
          className="absolute w-6 h-0.5 bg-grayishViolet left-0 top-0"
          variants={hamburgerMiddleVariants}
          animate={isMenuOpen ? "open" : "closed"}
          transition={{ duration: 0.5 }}
        />
        <motion.span
          className="absolute w-6 h-0.5 bg-grayishViolet left-0 top-0"
          variants={hamburgerBottomVariants}
          animate={isMenuOpen ? "open" : "closed"}
          transition={{ duration: 0.5 }}
        />
      </motion.div>
    </button>
  );
}
export default MobileMenuButton;
