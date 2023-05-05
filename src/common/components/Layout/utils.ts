export const formatPageTitle = (value: string) =>
  value.replace(/(^|\s)\S/g, (L) => L.toUpperCase());
