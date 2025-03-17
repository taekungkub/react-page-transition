import { motion } from "framer-motion";
import { pageVariant4 } from "../../const/variants";

const Page = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-100">
      {/* Animated Circle Overlay */}
      <motion.div
        variants={pageVariant4}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="absolute bg-blue-500 z-10 h-full w-full top-0 bottom-0 left-0 right-0"
      />

      {/* Page Content */}
      <div className="relative flex items-center justify-center h-full">
        <h1 className="text-4xl font-bold text-gray-900">
          Welcome to the Page
        </h1>
      </div>
    </div>
  );
};

export default Page;
