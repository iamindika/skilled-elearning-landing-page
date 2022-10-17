export const getImage = (name) => {
  return (
    new URL(`/src/assets/${name}`, import.meta.url).href
  );
}