const { parentPort } = require('worker_threads');

parentPort.on('message', (cola) => {
  const item = cola.shift();
  if (item === null) {
    parentPort.postMessage('DONE');
    return;
  }

  if (item) {
    console.log(`✅ Consumidor consume: ${item}`);
    setTimeout(() => {
      parentPort.postMessage('WAIT'); 
    }, Math.random() * 500);
  }
});
