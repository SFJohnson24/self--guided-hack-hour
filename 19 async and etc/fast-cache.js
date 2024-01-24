/*
 define a function "fastCache" that takes one argument, a function, and returns a function. 
 When fastCache is invoked it creates an object that tracks calls to the returned function, where each input to the returned function is associated with its output. 
 Every subsequent call to that returned function with the same argument will return the output directly from the object, instead of invoking the original function again.
*/

const fastCache = (func) => {
  let cache = {};
  return (value) => {
    if (cache.value) {
      return cache[value];
    }
    cache.value = func(value);
    return cache.value;
  };
};

// let func = (value) => console.log(value);
// let test = fastCache(func);
// test(2);
// test(3);
// test(2);

/*
 Extension: Rewrite fastCache so it can handle array or object input, and any number of arguments.
 HINT: you might need to use the spread operator...
*/

const fastCacheAdvanced = (func) => {};
let cache = {};
return (...values) => {
  values.forEach((element) => {
    const cacheKey = JSON.stringify(element);
    if (cache.cacheKey) {
      return cache[cacheKey];
    }
    cache.cacheKey = func(element);
    return cache.cacheKey;
  });
};
let func = (value) => console.log(value);
let test = fastCacheAdvanced(func);
test(2, 3, 4);
test(3);
test(2);

module.exports = { fastCache, fastCacheAdvanced };
