import { motion } from "framer-motion";

const NeonText = ({ children, className = "", as = "span", delay = 0 }) => {
  const Component = motion[as];

  return (
    <Component
      className={`gradient-text ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </Component>
  );
};

export default NeonText;
