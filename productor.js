const { parentPort } = require('worker_threads');

let i = 0;
function producir() {
  if (i < 10) {
    const item = `item-${i}`;
    console.log(`🛠️ Productor produce: ${item}`);
    parentPort.postMessage(item);
    i++;
    setTimeout(producir, Math.random() * 400);
  } else {
    parentPort.postMessage('END'); 
  }
}

producir();
