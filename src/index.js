function omit(obj, fields) {
  let obj_copy = Object.assign({}, obj);
  for (let i = 0; i < fields.length; i += 1) {
    const key = fields[i];
    delete obj_copy[key];
  }
  return obj_copy;
}

export default omit;
