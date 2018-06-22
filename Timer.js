function setUp() {
    if (localStorage.getItem("timersJSON") == null) {
        localStorage.setItem("timersJSON", JSON.stringify(timers));
    }
    timers = JSON.parse(localStorage.getItem("timersJSON"));
    alert(timers[0].description);
}

class Timer {
    constructor(id, type, time, shake, sound, description) {
        this.id = id;
        this.type = type;
        this.time = time;
        this.shake = shake;
        this.sound = sound;
        this.description =  description;
    }
}