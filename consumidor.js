const { parentPort } = require('worker_threads');

let active = true;

parentPort.on('message', async (msg) => {
  if (msg === 'END') {
    active = false;
    parentPort.postMessage('DONE');
    return;
  }

  if (active) {
    console.log(`✅ Consumidor consume: ${msg}`);
    await new Promise(res => setTimeout(res, 1000));
  }
});
