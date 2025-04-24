
import { motion } from "framer-motion";

const HelloWorld = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
        Hello World
      </h1>
    </motion.div>
  );
};

export default HelloWorld;
