export function getItemId(url) {
  const urlArray = url.split("/");
  return urlArray.at(-1);
}
