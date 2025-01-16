let storedVariants = [];

export function getStoredVariants() {
  return storedVariants;
}

export default function generateHoneycombVariants(total, isMobile) {
  if (total <= 0) {
    storedVariants = [];
    return storedVariants;
  }

  if (total === 1) {
    storedVariants = [isMobile ? 'variant3' : 'variant1'];
    return storedVariants;
  }

  if (total === 2) {
    storedVariants = isMobile
      ? ['variant3', 'variant1']
      : ['variant1', 'variant3'];
    return storedVariants;
  }

  const variants = Array.from({ length: total }, (_, i) => {
    if (isMobile) {
      const row = Math.floor(i / 2);
      if (row % 2 === 0) {
        return i % 2 === 0 ? 'variant3' : 'variant1';
      }
      return i % 2 === 0 ? 'variant1' : 'variant3';
    }

    const row = Math.floor(i / 3);
    const pos = i % 3;

    const order =
      row % 2 === 0
        ? ['variant1', 'variant2', 'variant3']
        : ['variant3', 'variant2', 'variant1'];

    return order[pos];
  });

  storedVariants = variants;
  return storedVariants;
}
