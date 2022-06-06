export const cleanFormData = (values) => {
  let obj = { ...values };
  for (let propName in obj) {
    if (!!obj[propName] === false) {
      delete obj[propName];
    }
  }
  obj.id = new Date().getTime();
  return obj;
};
