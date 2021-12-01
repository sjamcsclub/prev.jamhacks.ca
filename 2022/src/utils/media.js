export const breakpoints = {
  sm: 576,
  md: 786,
  lg: 992,
  xl: 1200,
};

export const media = (key) => {
  return (style) => `@media (max-width: ${breakpoints[key]}px) { ${style} }`;
};
