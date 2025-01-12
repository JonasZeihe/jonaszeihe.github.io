// utils/HoneycombVariantManager.js
export default function getHoneycombVariants(totalProjects, isMobile) {
  if (totalProjects === 1) return ['variant1'];

  return Array.from({ length: totalProjects }, (_, i) => {
    if (isMobile) return i % 2 === 0 ? 'variant1' : 'variant2';

    const row = Math.floor(i / 3);
    const position = i % 3;
    return row % 2 === 0
      ? ['variant1', 'variant2', 'variant3'][position]
      : ['variant3', 'variant2', 'variant1'][position];
  });
}
