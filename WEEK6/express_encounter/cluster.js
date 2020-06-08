const cluster = require("cluster");
const os = require("os");

cluster.setupMaster({
  exec: `${__dirname}/index.js`,
});

for (let i = 0; i < os.cpus().length; i++) {
  cluster.fork(); //cluster.fork creates the worker..... for loop creates one worker per cpu
}

//exit happens when the worker dies
cluster.on("exit", function (worker) {
  console.log(worker.process.pid + " has passed away!!! ^-^ !! ");
  cluster.fork(); //this line of code replaces the t worker which died.
});
