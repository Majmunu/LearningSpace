let obj = {
  name: "joker",
  height: 183,
  weight: "70kg",
  sex: "man",
};

const test = (obj, key1, key2) => {
  let keyArr = Object.keys(obj);
  const oldIndex = keyArr.indexOf(key1);
  const newIndex = keyArr.indexOf(key2);

  keyArr.splice(keyArr.indexOf(key2), 1);
  keyArr.splice(oldIndex, 0, key2);

  keyArr.splice(keyArr.indexOf(key1), 1);
  keyArr.splice(newIndex, 0, key1);

  let newObj = {};
  for (let idx = 0; idx < keyArr.length; idx++) {
    newObj[keyArr[idx]] = obj[keyArr[idx]];
  }
  return newObj;
};

console.log(test(obj, "sex", "height"));
