const { parentPort } = require('worker_threads');

(async () => {
  for (let i = 0; i < 9; i++) {
    const item = `item-${i}`;
    console.log(`🛠️ Productor produce: ${item}`);
    parentPort.postMessage(item);
    await new Promise(res => setTimeout(res, 500));
  }

  parentPort.postMessage('END');
})();
