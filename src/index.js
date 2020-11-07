
const delay = ms => {
const prom = new Promise((resolve, reject) => {
  setTimeout(() => {
     resolve(`${ms}`);
  }, ms);
  
});
    return prom
};


const logger = time => console.log(`Resolved after ${time}ms`);

delay(2000).then(logger); 
delay(1000).then(logger);
delay(1500).then(logger); 