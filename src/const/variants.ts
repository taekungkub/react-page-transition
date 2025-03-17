export const pageVariant = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, x: 100, transition: { duration: 0.3 } },
};

export const rotate45 = {
  initial: { opacity: 0, x: -1000, rotate: 45 },
  animate: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 30, // Lower stiffness for slower motion
      damping: 15, // Slightly higher damping for more controlled movement
      duration: 2, // Increase duration for a slower animation
    },
  },
};

export const pageVariant4 = {
  hidden: {
    width: "100vw",
    height: "100vh",
  },
  visible: {
    width: "0vw",
    height: "0vh",
    transition: { duration: 0.8, ease: "easeInOut" },
  },
  exit: {
    width: "100vw",
    height: "100vh",
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

// Square Variants
export const pageSquareToLeft = {
  hidden: { clipPath: "inset(0% 0% 0% 0%)" },
  visible: {
    clipPath: "inset(0% 100% 0% 0%)",
    transition: { duration: 2.5, ease: [0.25, 1, 0.3, 1] },
  },
};

export const pageSquareToRight = {
  hidden: { clipPath: "inset(0% 0% 0% 0%)" },
  visible: {
    clipPath: "inset(0% 0% 0% 100%)",
    transition: { duration: 2.5, ease: [0.25, 1, 0.3, 1] },
  },
};

export const pageSquareToTop = {
  hidden: { clipPath: "inset(0% 0% 0% 0%)" },
  visible: {
    clipPath: "inset(0% 0% 100% 0%)",
    transition: { duration: 2.5, ease: [0.25, 1, 0.3, 1] },
  },
};

export const pageSquareToBottom = {
  hidden: { clipPath: "inset(0% 0% 0% 0%)" },
  visible: {
    clipPath: "inset(100% 0% 0% 0%)",
    transition: { duration: 2.5, ease: [0.25, 1, 0.3, 1] },
  },
};

export const pageSquareToCenter = {
  hidden: { clipPath: "inset(0% 0% 0% 0%)" },
  visible: {
    clipPath: "inset(100% 100% 100% 100%)",
    transition: { duration: 2.5, ease: [0.25, 1, 0.3, 1] },
  },
};

// Circle Variants

export const pageVariantCircleToLeft = {
  hidden: {
    width: "max(200vw, 200vh)",
    height: "max(200vw, 200vh)",
    borderRadius: "50%",
    top: "calc(-100vh)",
    left: "calc(-100vh)",
  },
  visible: {
    width: "0vw",
    height: "0vw",
    transition: { duration: 2, ease: "easeInOut" },
  },
  exit: {
    width: "max(200vw, 200vh)",
    height: "max(200vw, 200vh)",
    transition: { duration: 2, ease: "easeInOut" },
  },
};

export const pageVariantCircleTopRight = {
  hidden: {
    clipPath: "circle(125%)",
  },
  visible: {
    clipPath: "circle(0% at top right)",
    transition: { duration: 2.5, ease: [0.25, 1, 0.3, 1] },
  },
  exit: {
    clipPath: "circle(125%)",
    transition: { duration: 2.5, ease: [0.25, 1, 0.3, 1] },
  },
};

export const pageVariantCircleTopLeft = {
  hidden: {
    clipPath: "circle(125%)",
  },
  visible: {
    clipPath: "circle(0% at top left)",
    transition: { duration: 2.5, ease: [0.25, 1, 0.3, 1] },
  },
  exit: {
    clipPath: "circle(125%)",
    transition: { duration: 2.5, ease: [0.25, 1, 0.3, 1] },
  },
};

export const pageVariantCircleBottomLeft = {
  hidden: {
    clipPath: "circle(125%)",
  },
  visible: {
    clipPath: "circle(0% at bottom left)",
    transition: { duration: 2.5, ease: [0.25, 1, 0.3, 1] },
  },
  exit: {
    clipPath: "circle(125%)",
    transition: { duration: 2.5, ease: [0.25, 1, 0.3, 1] },
  },
};

export const pageVariantCircleBottomRight = {
  hidden: {
    clipPath: "circle(125%)",
  },
  visible: {
    clipPath: "circle(0% at bottom right)",
    transition: { duration: 2.5, ease: [0.25, 1, 0.3, 1] },
  },
  exit: {
    clipPath: "circle(125%)",
    transition: { duration: 2.5, ease: [0.25, 1, 0.3, 1] },
  },
};

export const pageVariantCircleCenter = {
  hidden: {
    clipPath: "circle(125%)",
  },
  visible: {
    clipPath: "circle(0% at center)",
    transition: { duration: 2.5, ease: [0.25, 1, 0.3, 1] },
  },
  exit: {
    clipPath: "circle(125%)",
    transition: { duration: 2.5, ease: [0.25, 1, 0.3, 1] },
  },
};

export const pageVariantCircleHesitate = {
  hidden: { clipPath: "circle(125%)" },
  visible: {
    clipPath: ["circle(125%)", "circle(40%)", "circle(0%)"],
    transition: {
      duration: 2.5,
      ease: [0.25, 1, 0.3, 1],
      times: [0, 0.4, 1],
    },
  },
};

// Wipe Variants
export const wipeInBottomLeft = {
  hidden: {
    clipPath: "polygon(50% -50%, 150% 50%, 50% 150%, -50% 50%)",
  },
  visible: {
    clipPath: "polygon(-50% 50%, 50% 150%, 50% 150%, -50% 50%)",
    transition: { duration: 2.5, ease: [0.25, 1, 0.3, 1] },
  },
};

export const wipeInBottomRight = {
  hidden: {
    clipPath: "polygon(50% -50%, 150% 50%, 50% 150%, -50% 50%)",
  },
  visible: {
    clipPath: "polygon(150% 50%, 150% 50%, 50% 150%, 50% 150%)",
    transition: { duration: 2.5, ease: [0.25, 1, 0.3, 1] },
  },
};

export const wipeTopRight = {
  hidden: {
    clipPath: "polygon(50% -50%, 150% 50%, 50% 150%, -50% 50%)",
  },
  visible: {
    clipPath: "polygon(50% -50%, 150% 50%, 150% 50%, 50% -50%)",
    transition: { duration: 2.5, ease: [0.25, 1, 0.3, 1] },
  },
};

export const wipeTopLeft = {
  hidden: {
    clipPath: "polygon(-50% 0%, 200% 0, 0 200%, 0 -50%)",
  },
  visible: {
    clipPath: "polygon(0 0, 0 0, 0 0, 0 50%)",
    transition: { duration: 2.5, ease: [0.25, 1, 0.3, 1] },
  },
};

export const wipeCinematic = {
  hidden: { clipPath: "inset(0% 0% 0% 0%)" },
  visible: {
    clipPath: [
      "inset(0% 0% 0% 0%)",
      "inset(10% 0% 10% 0%)",
      "inset(10% 0% 10% 0%)",
      "inset(100% 0% 100% 0%)",
    ],
    transition: {
      duration: 2.5,
      ease: [0.25, 1, 0.3, 1],
      times: [0, 0.3, 0.7, 1],
    },
  },
};
