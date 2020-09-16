const { Worker, isMainThread, parentPort } = require("worker_threads");

if (isMainThread) {
  console.log(`current Filename : ${__filename}`);
  const worker = new Worker(__filename);

  worker.on(`message`, (arg) => console.log(`from worker`, arg));
  worker.on(`exit`, () => console.log(`worker exit`));

  worker.postMessage(`ping`);
} else {
  parentPort.on(`message`, (arg) => {
    console.log(`from parent ${arg}`);
    parentPort.postMessage(`pong`);
    parentPort.close();
  });
}
