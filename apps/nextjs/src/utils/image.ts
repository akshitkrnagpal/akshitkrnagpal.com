export const getImageArrayBuffer = async (url: URL | string) => {
  return fetch(url).then((res) => res.arrayBuffer());
};
