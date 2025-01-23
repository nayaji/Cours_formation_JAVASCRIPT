/**
Exercise 1
*/

const createdPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("promise resolved after 1 seconds!");
    }, 1000);
});

createdPromise.then((result) => {
    console.log(result);
});


/**
Exercise 1.bis
*/

const creatPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("An error occurred after 2 seconds!");
    }, 2000);
  });
  
  creatPromise
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error(error);
    });


/**
Exercise 2
*/

const firstPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Première Promise résolue !");
    }, 4000);
  });
  
  
  const secondPromise = (resultFromFirst) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`${resultFromFirst} Puis la deuxième Promise est résolue !`);
      }, 6000);
    });
  };
  
  
  firstPromise
    .then((result) => {
      console.log(result);
      return secondPromise(result);
    })
    .then((finalResult) => {
      console.log(finalResult);
    })
    .catch((error) => {
      console.error("Une erreur est survenue :", error);
    });
    

    /**
Exercise 3
*/


const onePromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Résultat de la première Promise !");
  }, 15000);
});


const twoPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Résultat de la deuxième Promise !");
  }, 12000);
});


Promise.all([onePromise, twoPromise])
  .then((results) => {
    console.log("Les deux Promises sont terminées !");
    console.log("Résultats :", results);
  })
  .catch((error) => {
    console.error("Une erreur est survenue :", error);
  });


    /**
Exercise 3.bis
*/

const oneePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Erreur dans la première Promise !");
    }, 20000);
  });
  
  
  const twooPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Résultat de la deuxième Promise !");
    }, 18000);
  });
  
  
  Promise.all([oneePromise, twooPromise])
    .then((results) => {
      console.log("Les deux Promises sont terminées !");
      console.log("Résultats :", results);
    })
    .catch((error) => {
      console.error("Une erreur est survenue :", error);
    });

        /**
Exercise 4
*/

const premierPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Résultat de la première Promise !");
    }, 23000);
  });
  
  
  const deuxiemePromise = (resultFromFirst) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`${resultFromFirst} Puis la deuxième Promise est résolue !`);
      }, 5000);
    });
  };

  async function runPromises() {
    try {
      const resultFromFirst = await premierPromise;
      console.log(resultFromFirst);
  
      const finalResult = await deuxiemePromise(resultFromFirst);
      console.log(finalResult);
    } catch (error) {
      console.error("Une erreur est survenue :", error);
    }
  }
  
  runPromises();



