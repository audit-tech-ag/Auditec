const useConnectedSystem = (systems) => {
  //   async function setToCache(key, firstValue, others) {
  //     if (others.length > 0) {
  //       throw new Error("Syntax error");
  //     }
  //     const cacheObj = await caches.open(key);
  //     try {
  //       await cacheObj.add(firstValue);
  //       return "OK";
  //     } catch (e) {
  //       return e;
  //     }
  //   }

  //   return {
  //     setToCache,
  //   };
  let array = [];
  array.push(systems);
  console.log(array)
  return array;
};

export default useConnectedSystem;
