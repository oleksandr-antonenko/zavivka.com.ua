// lib/generateStaticBlurData.ts
export function generateStaticBlurData() {
  const blurSvg = `
   <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 20' preserveAspectRatio="none">
    <defs>
      <radialGradient id='g' cx='50%' cy='50%' r='80%'>
      
        <stop offset='0%' stop-color='#B5A154' stop-opacity='0.3'/>
        <stop offset='40%' stop-color='#8F8F8F' stop-opacity='0.25'/>
        <stop offset='70%' stop-color='#A4A4A4' stop-opacity='0.7'/>
        <stop offset='100%' stop-color='#212121' stop-opacity='1'/>
      </radialGradient>
      <filter id='b' color-interpolation-filters='sRGB'>
       
        <feGaussianBlur stdDeviation='4.5'/>
      </filter>
    </defs>
    <rect width='100%' height='100%' rx='4' ry='4' fill='url(#g)' filter='url(#b)'/>
  </svg>`;

  const toBase64 = (str: string) =>
    typeof window === 'undefined'
      ? Buffer.from(str).toString('base64') // сервер
      : window.btoa(str); // клиент

  return `data:image/svg+xml;base64,${toBase64(blurSvg)}`;
}
