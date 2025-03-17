import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="h-screen flex flex-col items-center justify-center  text-center px-4 relative z-10">
      <motion.h1
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        className="text-5xl font-bold text-gray-600"
      >
        Page Transition <span className="text-blue-300"> with</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="mt-4 text-lg  text-slate-600"
      >
        Framer Motion
      </motion.p>

      <motion.button
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-6 flex items-center gap-2 bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold shadow-lg hover:scale-105 transition-transform"
      >
        <svg
          fill="currentColor"
          viewBox="0 0 20 20"
          className="fill-current w-6 h-6"
        >
          <path
            fill-rule="evenodd"
            d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
            clip-rule="evenodd"
          ></path>
        </svg>{" "}
        Toggle
      </motion.button>
    </div>
  );
}
