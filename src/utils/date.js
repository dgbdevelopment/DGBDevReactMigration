export const handleDate = (d) => {
  const date = new Date(d);
  return `${date.getDate()} de ${date.toLocaleString("default", {
    month: "long",
  })} de ${date.getFullYear()}`;
};