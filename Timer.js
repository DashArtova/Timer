var shake;
function setUp() {
    if (localStorage.getItem("timersJSON") == null) {
        localStorage.setItem("timersJSON", JSON.stringify(timers));
    }
    timers = JSON.parse(localStorage.getItem("timersJSON"));
    alert(timers.length);
        
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
function getShake(a){
    shake = a;
}

function add(){
    var timer = new Timer(timers.length+1, "timer", +document.getElementById("setTime").value*60000, shake, document.getElementById("setaudio").value, document.getElementById("descrInput").value);
    timers.push(timer);
    localStorage.setItem("timersJSON", JSON.stringify(timers));
}