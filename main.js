const { Worker } = require('worker_threads');


const sharedQueue = [];


const productor = new Worker('./productor.js');
const consumidor = new Worker('./consumidor.js');


productor.on('message', (msg) => {
  if (msg === 'END') {
    
    sharedQueue.push(null);
    consumidor.postMessage(sharedQueue);
  } else {
    sharedQueue.push(msg);
    consumidor.postMessage(sharedQueue);
  }
});

consumidor.on('message', (msg) => {
  if (msg === 'DONE') {
    console.log('🔚 Procesamiento terminado.');
  }
});
