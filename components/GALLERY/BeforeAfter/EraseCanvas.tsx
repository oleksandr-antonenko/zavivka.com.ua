'use client';

import { useRef, useEffect, useState, useCallback } from 'react';
import { Hand } from 'lucide-react';

export default function EraseCanvas({
  beforeImage,
  afterImage,
}: {
  beforeImage: string;
  afterImage: string;
}) {
  const bottomCanvasRef = useRef<HTMLCanvasElement>(null);
  const topCanvasRef = useRef<HTMLCanvasElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  // Добавляем эффект для блокировки скролла
  useEffect(() => {
    // Сохраняем текущее значение overflow
    const originalStyle = window.getComputedStyle(document.body).overflow;
    // Блокируем скролл
    document.body.style.overflow = 'hidden';

    // Восстанавливаем скролл при размонтировании
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  const isDrawing = useRef(false);
  const lastPoint = useRef<{ x: number; y: number } | null>(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [erasedPercent, setErasedPercent] = useState(0);

  // Загрузка изображений
  useEffect(() => {
    const loadImages = async () => {
      try {
        const [topImg, bottomImg] = await Promise.all([
          loadImage(beforeImage),
          loadImage(afterImage),
        ]);

        initCanvases(topImg, bottomImg);
        setImagesLoaded(true);
      } catch (error) {
        console.error('Error loading images:', error);
      }
    };

    loadImages();
  }, [beforeImage, afterImage]);

  const loadImage = (src: string): Promise<HTMLImageElement> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.src = src;
      img.onload = () => resolve(img);
      img.onerror = reject;
    });
  };

  const initCanvases = (
    topImg: HTMLImageElement,
    bottomImg: HTMLImageElement,
  ) => {
    const bottomCanvas = bottomCanvasRef.current;
    const topCanvas = topCanvasRef.current;
    if (!bottomCanvas || !topCanvas) return;

    // Вычисляем максимальные размеры с учетом пропорций
    const maxWidth = window.innerWidth - 40;
    const maxHeight = window.innerHeight - 200;

    // Вычисляем соотношение сторон изображения
    const imageRatio = topImg.width / topImg.height;
    const screenRatio = maxWidth / maxHeight;

    let width, height;

    if (imageRatio > screenRatio) {
      // Если изображение шире, чем экран
      width = maxWidth;
      height = maxWidth / imageRatio;
    } else {
      // Если изображение выше, чем экран
      height = maxHeight;
      width = maxHeight * imageRatio;
    }

    [bottomCanvas, topCanvas].forEach((canvas) => {
      canvas.width = width;
      canvas.height = height;
    });

    const bottomCtx = bottomCanvas.getContext('2d');
    const topCtx = topCanvas.getContext('2d');
    if (!bottomCtx || !topCtx) return;

    bottomCtx.drawImage(bottomImg, 0, 0, width, height);
    topCtx.drawImage(topImg, 0, 0, width, height);

    topCtx.globalCompositeOperation = 'source-over';
    topCtx.lineCap = 'round';
    topCtx.lineJoin = 'round';
    topCtx.lineWidth = 200;
  };

  // Логика стирания
  const drawErase = useCallback((x: number, y: number) => {
    const topCanvas = topCanvasRef.current;
    if (!topCanvas) return;

    const ctx = topCanvas.getContext('2d');
    if (!ctx) return;

    // Добавляем легкую вибрацию при стирании
    if ('vibrate' in navigator) {
      navigator.vibrate(5); // 5ms - очень легкая вибрация
    }

    ctx.globalCompositeOperation = 'destination-out';

    if (!lastPoint.current) {
      ctx.beginPath();
      ctx.arc(x, y, ctx.lineWidth / 2, 0, Math.PI * 2, true);
      ctx.fill();
    } else {
      ctx.beginPath();
      ctx.moveTo(lastPoint.current.x, lastPoint.current.y);
      ctx.lineTo(x, y);
      ctx.stroke();
    }

    lastPoint.current = { x, y };
    updateEraseProgress();
  }, []);

  const updateEraseProgress = () => {
    const topCanvas = topCanvasRef.current;
    if (!topCanvas) return;

    const ctx = topCanvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    const imageData = ctx.getImageData(0, 0, topCanvas.width, topCanvas.height);
    let transparentPixels = 0;

    for (let i = 3; i < imageData.data.length; i += 4) {
      if (imageData.data[i] === 0) transparentPixels++;
    }

    const percent = Math.round(
      (transparentPixels / (topCanvas.width * topCanvas.height)) * 100,
    );
    setErasedPercent(percent);
  };

  // Обработчики событий
  const getPointerPosition = useCallback((clientX: number, clientY: number) => {
    const topCanvas = topCanvasRef.current;
    if (!topCanvas) return null;

    const rect = topCanvas.getBoundingClientRect();
    return {
      x: clientX - rect.left,
      y: clientY - rect.top,
    };
  }, []);

  const handlePointerDown = useCallback(
    (x: number, y: number) => {
      isDrawing.current = true;
      lastPoint.current = { x, y };
      drawErase(x, y);
    },
    [drawErase],
  );

  const handlePointerMove = useCallback(
    (x: number, y: number) => {
      setCursorPos({ x, y });
      if (isDrawing.current) drawErase(x, y);
    },
    [drawErase],
  );

  const handlePointerUp = useCallback(() => {
    isDrawing.current = false;
    lastPoint.current = null;
  }, []);

  // Мышь
  const handleMouseDown = useCallback(
    (e: React.MouseEvent<HTMLCanvasElement>) => {
      const pos = getPointerPosition(e.clientX, e.clientY);
      if (pos) handlePointerDown(pos.x, pos.y);
    },
    [getPointerPosition, handlePointerDown],
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLCanvasElement>) => {
      const pos = getPointerPosition(e.clientX, e.clientY);
      if (pos) handlePointerMove(pos.x, pos.y);
    },
    [getPointerPosition, handlePointerMove],
  );

  // Добавляем useEffect для правильной настройки обработчиков событий
  useEffect(() => {
    const canvas = topCanvasRef.current;
    if (!canvas) return;

    const options = {
      passive: false,
    };

    const touchStartHandler = (e: TouchEvent) => {
      e.preventDefault();
      const touch = e.touches[0];
      if (!touch) return;

      const pos = getPointerPosition(touch.clientX, touch.clientY);
      if (pos) {
        if ('vibrate' in navigator) navigator.vibrate(10);
        handlePointerDown(pos.x, pos.y);
      }
    };

    const touchMoveHandler = (e: TouchEvent) => {
      e.preventDefault();
      const touch = e.touches[0];
      if (!touch) return;

      const pos = getPointerPosition(touch.clientX, touch.clientY);
      if (pos) handlePointerMove(pos.x, pos.y);
    };

    canvas.addEventListener('touchstart', touchStartHandler, options);
    canvas.addEventListener('touchmove', touchMoveHandler, options);
    canvas.addEventListener('touchend', handlePointerUp);

    return () => {
      canvas.removeEventListener('touchstart', touchStartHandler);
      canvas.removeEventListener('touchmove', touchMoveHandler);
      canvas.removeEventListener('touchend', handlePointerUp);
    };
  }, [
    getPointerPosition,
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
  ]);

  return (
    <div className="relative" style={{ touchAction: 'none' }}>
      <canvas
        ref={bottomCanvasRef}
        className="block max-w-full max-h-[80vh] object-contain"
      />

      <canvas
        ref={topCanvasRef}
        className="absolute top-0 left-0 max-w-full max-h-[80vh] object-contain cursor-none"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handlePointerUp}
        onMouseLeave={handlePointerUp}
      />

      {/* Кастомный курсор */}
      <div
        ref={cursorRef}
        className="absolute pointer-events-none text-yellow-400 z-50"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
          transform: 'translate(-50%, -50%)',
          fontSize: '48px',
          filter: 'drop-shadow(0 0 2px black)',
          opacity: imagesLoaded ? 1 : 0,
          transition: 'opacity 0.2s',
        }}
      >
        <Hand />
      </div>

      {/* Индикатор прогресса */}
      {imagesLoaded && (
        <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-md text-sm pointer-events-none">
          Змито: {erasedPercent}%
        </div>
      )}
    </div>
  );
}
