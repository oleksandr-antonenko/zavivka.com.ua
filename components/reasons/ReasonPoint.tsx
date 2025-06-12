import { motion, MotionValue, useTransform } from 'framer-motion';

interface ReasonPointProps {
  scrollYProgress: MotionValue<number>;
  index: number;
  totalReasons: number;
  cx: number;
  cy: number;
}

export const ReasonPoint: React.FC<ReasonPointProps> = ({
  scrollYProgress,
  index,
  totalReasons,
  cx,
  cy,
}) => {
  const startScroll = (index + 0.1) / totalReasons; // Немного сместим начало анимации
  const endScroll = (index + 0.6) / totalReasons; // Немного сместим конец анимации

  const circleFill = useTransform(
    scrollYProgress,
    [startScroll, endScroll],
    ['#6b7280', '#FFD700'],
  );
  const circleScale = useTransform(
    scrollYProgress,
    [startScroll, endScroll],
    [0.8, 1.2],
  );
  const circleOpacity = useTransform(
    scrollYProgress,
    [startScroll, endScroll],
    [0, 1],
  );

  return (
    <motion.circle
      cx={cx}
      cy={cy}
      r="6"
      stroke="#FFD700"
      strokeWidth="2"
      initial={{ scale: 0.8, opacity: 0, fill: '#6b7280' }}
      style={{
        fill: circleFill,
        scale: circleScale,
        opacity: circleOpacity,
      }}
    />
  );
};
