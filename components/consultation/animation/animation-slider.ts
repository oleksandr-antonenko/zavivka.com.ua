export const variants = {
  enter: (dir: number) => ({
    opacity: 0,
    x: dir > 0 ? 150 : -150,
    rotateY: dir > 0 ? -15 : 15,
    scale: 0.9,
    filter: 'blur(6px)',
  }),
  center: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.6,
      ease: [0.33, 1, 0.68, 1], // easeOutExpo
    },
  },
  exit: (dir: number) => ({
    opacity: 0,
    x: dir < 0 ? 150 : -150,
    rotateY: dir < 0 ? -15 : 15,
    scale: 0.9,
    filter: 'blur(6px)',
    transition: {
      duration: 0.4,
      ease: [0.33, 1, 0.68, 1],
    },
  }),
};
