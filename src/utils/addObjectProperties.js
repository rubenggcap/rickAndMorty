export function addProperties(baseObject, newProperties) {
  let result = { ...baseObject };
  Object.keys(newProperties).forEach((key) => {
    result = { ...result, [key]: newProperties[key] };
  });
  return result;
}
