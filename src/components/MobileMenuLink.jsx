import { motion } from "framer-motion";

function MobileMenuLink({ index, children }) {
  return (
    <motion.li
      className="w-full"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      {children}
    </motion.li>
  );
}
export default MobileMenuLink;
