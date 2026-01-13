import { motion } from "framer-motion";

function MobileMenu({ id, children }) {
  // Mobile menu variants
  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      x: "100%",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      id={id}
      className="absolute p-6 rounded-lg bg-darkViolet left-6 right-6 top-20 z-50"
      role="dialog"
      aria-modal="true"
      variants={mobileMenuVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <ul className="flex flex-col items-center justify-center w-full space-y-6 font-bold text-white rounded-sm">
        {children}
      </ul>
    </motion.div>
  );
}
export default MobileMenu;
