class AlarmClock {
  constructor () {
    this.alarmCollection = [];
    this.intervalId = null;
  }

  addClock(time, callback) {
    if (!time || !callback) {
    throw new Error('Отсутствуют обязательные аргументы');
    } 

    for (let i = 0; i < this.alarmCollection.length; i++) {
      if (this.alarmCollection[i].time === time) {
        console.warn('Уже присутствует звонок на это же время');
      }
    }  

    this.alarmCollection.push({time: time, callback: callback, canCall: true});
  }   
  
  removeClock(time) { 
    this.alarmCollection = this.alarmCollection.filter(alarmTime => alarmTime.time !== time);
  }

  getCurrentFormattedTime() {
    const currentTime = new Date();

    return currentTime.toTimeString().substring(0, 5);
  }

  start() {
    if (this.intervalId !== null) {
      return;  
    }

    this.intervalId = setInterval(() => {
      this.alarmCollection.forEach(element => {
        if (element.time === this.getCurrentFormattedTime) {
          element.canCall = false;
        } 

      element.callback();           
      });
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  resetAllCalls() {
    this.alarmCollection.forEach(element => {
        element.canCall = true;
    });
  }

  clearAlarms() {
    stop();
    this.alarmCollection = [];
  }
}

  



// const callback = f => f;
// const clock = new AlarmClock();
// clock.addClock("16:45", callback)
// clock.alarmCollection