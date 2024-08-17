import { decode } from 'blurhash';

export function getBlurDataURL(blurhash: string) {
  const WIDTH = 32;
  const HEIGHT = 32;
  const pixels = decode(blurhash, WIDTH, HEIGHT);
  const canvas = document.createElement('canvas');

  canvas.width = WIDTH;
  canvas.height = HEIGHT;
  const context = canvas.getContext('2d');

  if (!context) return undefined;

  const imageData = context.createImageData(WIDTH, HEIGHT);
  imageData.data.set(pixels);
  context.putImageData(imageData, 0, 0);

  return canvas.toDataURL('image/jpeg');
}

export function preventBodyScroll(isPreventScroll: boolean) {
  const scrollbarWidth =
    window.innerWidth - document.documentElement.clientWidth;
  const bodyStyle = document.body.style;

  if (isPreventScroll) {
    bodyStyle.overflow = 'hidden';
    bodyStyle.paddingRight = `${scrollbarWidth}px`;
  } else {
    bodyStyle.overflow = 'auto';
    bodyStyle.paddingRight = '0px';
  }
}

export function getFormattedDate(date: Date) {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  return `${year}.${month}`;
}
