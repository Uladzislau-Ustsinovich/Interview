const str = "abdeggrqgtagnamralakamqrs";

const getLettersCount = (str) => {
  return str.split("").reduce((acc, element) => {
    if (acc[element]) {
      acc[element] = acc[element] + 1;
    } else {
      acc[element] = 1;
    }

    return acc;
  }, {});
};

console.log(getLettersCount(str));