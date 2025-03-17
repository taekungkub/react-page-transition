import { motion } from "framer-motion";
import { TheSidebar } from "../components/TheSidebar";
import { Outlet } from "react-router";
import { pageVariantCircleToLeft } from "../const/variants";
import { useEffect, useState } from "react";

export default function DashboardLayout() {
  const [currentVariant, setCurrentVariant] = useState(pageVariantCircleToLeft);
  const [animationState, setAnimationState] = useState("hidden");

  useEffect(() => {
    setAnimationState("visible");
  }, []);

  const toggleVariant = (newVariant: unknown) => {
    console.log("New Variant:", newVariant);

    setAnimationState("hidden");

    setTimeout(() => {
      setCurrentVariant(newVariant);
      setAnimationState("visible");
    }, 10);
  };

  const handleClick = () => {
    setAnimationState(animationState === "hidden" ? "visible" : "hidden");
  };

  return (
    <div className="h-screen w-screen flex">
      {/* Sidebar with onChange handler */}
      <TheSidebar onChange={(variant) => toggleVariant(variant)} />

      <div className="relative w-full h-screen overflow-hidden bg-gray-100">
        <main className="w-full h-screen overflow-auto">
          {/* Animated Motion Div */}
          <motion.div
            key={JSON.stringify(currentVariant)} // 🔹 Force re-render when variant changes
            variants={currentVariant}
            initial="hidden"
            animate={animationState}
            exit="exit"
            className="absolute bg-blue-400 z-10 h-full w-full top-0 bottom-0 left-0 right-0"
            onClick={() => handleClick()}
          />

          {/* Page Content */}
          <div className="h-screen" onClick={() => handleClick()}>
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
