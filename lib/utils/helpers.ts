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
