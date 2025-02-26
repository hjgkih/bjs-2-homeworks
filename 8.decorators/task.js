//Задача № 1
function cachingDecoratorNew(func) {
  const cache = [];

  return function (...args) {
    const hash = md5(args);

    const objectInCache = cache.find(object => object.hash === hash); 

    if (objectInCache) {
      console.log("Из кэша: " + objectInCache.value);
      return "Из кэша: " + objectInCache.value;
    }  
  
    let value = func(...args);
    cache.push({hash, value}); 
    
    const cacheValueLength = 5;

    if (cache.length > cacheValueLength) { 
      cache.shift();
    }
    
    console.log("Вычисляем: " + value);
    return "Вычисляем: " + value;  
  }
}

//Задача № 2

function debounceDecoratorNew(func, delay) {
  let timeoutId = null;
  wrapper.count = 0;
  wrapper.allCount = 0;
  
  function wrapper(...arr) {
    wrapper.allCount++;

    if (timeoutId === null) {
      wrapper.count++;
      func(...arr);
    }
      
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      wrapper.count++;
      func(...arr);
    }, delay);
  }
    
  return wrapper;
}



