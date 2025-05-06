const { Worker } = require('worker_threads');


console.time("🕒 Tiempo total");

const productor = new Worker('./productor.js');
const consumidor = new Worker('./consumidor.js');

productor.on('message', (msg) => {

  consumidor.postMessage(msg);
});

consumidor.on('message', (msg) => {
  if (msg === 'DONE') {
    console.timeEnd("🕒 Tiempo total");
    console.log("🔚 Procesamiento terminado.");
  }
});
