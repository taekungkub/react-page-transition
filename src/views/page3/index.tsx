import { motion } from "framer-motion";
import { pageVariantCircleToLeft } from "../../const/variants";
import { useEffect, useState } from "react";

const Page3 = () => {
  const [animationState, setAnimationState] = useState("hidden");

  useEffect(() => {
    setAnimationState("visible");
  }, []);

  const handleClick = () => {
    setAnimationState(animationState === "hidden" ? "visible" : "hidden");
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <motion.div
        variants={pageVariantCircleToLeft}
        initial="hidden"
        animate={animationState}
        exit="exit"
        className="absolute top-0 left-0 h-full z-10 bg-blue-500"
        onClick={() => handleClick()}
      />

      <div
        className="relative flex items-center justify-center h-full"
        onClick={() => handleClick()}
      >
        <h1 className="text-3xl font-bold">Welcome to the Page</h1>
      </div>
    </div>
  );
};

export default Page3;
