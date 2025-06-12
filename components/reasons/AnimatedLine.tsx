import { motion, MotionValue, useTransform } from 'framer-motion';
import { ReasonPoint } from './ReasonPoint'; // Импорт нового компонента

interface Reason {
  id: number;
  title: string;
  description: string;
}

interface AnimatedLineProps {
  scrollYProgress: MotionValue<number>;
  reasonsData: Reason[];
}

export const AnimatedLine: React.FC<AnimatedLineProps> = ({
  scrollYProgress,
  reasonsData,
}) => {
  // Линия всегда вертикальная
  const currentPath = 'M10,0 L10,1200'; // Вертикальная линия на x=10
  const currentViewBox = '0 0 200 1200'; // ViewBox для вертикальной линии

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const lineOpacity = useTransform(
    scrollYProgress,
    [0, 0.1, 1, 1],
    [0, 1, 1, 1],
  );

  const totalReasons = reasonsData.length;

  return (
    // Контейнер линии всегда слева
    <div className="absolute flex left-[-10px] sm:left-[-20px] top-0 w-full max-w-[190px] smMax:max-w-[160px] md:max-w-[190px] h-full pointer-events-none">
      <svg
        className="w-full h-full"
        viewBox={currentViewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Основная анимированная линия */}
        <motion.path
          d={currentPath}
          stroke="#FFD700" // Золотой цвет
          strokeWidth="2"
          style={{ pathLength, opacity: lineOpacity }}
          strokeLinecap="round"
        />

        {/* Анимированные круги для начальной и конечной точки */}
        <ReasonPoint
          scrollYProgress={scrollYProgress}
          index={-1} // Специальный индекс для начальной точки
          totalReasons={totalReasons}
          cx={10}
          cy={0} // Начальная точка
        />
        <ReasonPoint
          scrollYProgress={scrollYProgress}
          index={totalReasons} // Специальный индекс для конечной точки
          totalReasons={totalReasons}
          cx={10}
          cy={1200} // Конечная точка
        />

        {/* Анимированные круги для каждой точки причин */}
        {reasonsData.map((reason, index) => {
          const pointY = (1200 / (totalReasons + 1)) * (index + 1);
          return (
            <ReasonPoint
              key={reason.id}
              scrollYProgress={scrollYProgress}
              index={index}
              totalReasons={totalReasons}
              cx={10}
              cy={pointY}
            />
          );
        })}
      </svg>
    </div>
  );
};
