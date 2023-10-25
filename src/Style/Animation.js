export const FramerSidebarPanel = {
    initial: { x: "-100%" },
    animate: { x: 0 },
    exit: { x: "-100%" },
    transition: { duration: 0.3 },
  };

  export const FramerSide = {
    initial: { x: "100%" },
    animate: { x: 0 },
    exit: { x: "100%" },
    transition: { duration: 0.3 },
  };
  
 export  const FramerItemPanel = {
    initial: { x: "-100%" },
    animate: { x: 0 },
    exit: { x: "100%" },
    transition: { duration: 0.5 },
  };
  export  const FramerItemPanelR = {
    initial: { x: "100%" },
    animate: { x: 0 },
    exit: { x: "100%" },
    transition: { duration: 0.5 },
  };


  export const framerText = delay => {
    return {
      initial: { opacity: 0, x: -50 },
      animate: { opacity: 1, x: 0 },
      transition: {
        delay: 0.5 + delay / 10,
      },
    }
  }