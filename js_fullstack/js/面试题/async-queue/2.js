class Queue {
  constructor() {
    this.tasks = []
  }
  task(wait,cb) {
    this.tasks.push({wait:wait,cb})
    return this;
  }
  start() {
    let startTime = 0
    for (let task of this.tasks){
      startTime += task.wait
      setTimeout(() => {
        task.cb()
      }, startTime);
    }

  }
}



new Queue()
.task(1000, () => {
    console.log(1)
}).task(2000, () => {
    console.log(2)
}).task(1000, () => {
    console.log(3)
}).start()