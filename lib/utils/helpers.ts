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
