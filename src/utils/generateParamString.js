export function generateParamString(baseUrl, params) {
  let queryParams = "";
  Object.keys(params).forEach((key, i) => {
    i === Object.keys(params).length - 1
      ? (queryParams = queryParams + `?${key}=${params[key]}`)
      : (queryParams = queryParams + `?${key}=${params[key]}&`);
  });
  return baseUrl + "/" + queryParams;
}
