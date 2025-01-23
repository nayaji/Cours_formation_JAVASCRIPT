

        /**
Exercise 5.bis
*/

  function randomPromise() {
    return new Promise((resolve, reject) => {
      const isSuccess = Math.random() > 0.5;
  
      setTimeout(() => {
        if (isSuccess) {
          resolve("La Promise a été résolue avec succès !");
        } else {
          reject("La Promise a échoué !");
        }
      }, 1000);
    });
  }
  
  async function runMultiplePromises() {
    try {
      const firstResult = await randomPromise();
      console.log("1ère Promise :", firstResult);
      
      const secondResult = await randomPromise();
      console.log("2ème Promise :", secondResult);
  
      const thirdResult = await randomPromise();
      console.log("3ème Promise :", thirdResult);
  
    } catch (error) {
      console.error("Erreur capturée :", error);
    }
  }
  
  runMultiplePromises();