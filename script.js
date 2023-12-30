const canvas = document.getElementById("curveCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function sleep(ms) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if (new Date().getTime() - start > ms) {
            break;
        }
    }
};

function drawCurve() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const scale = 10;
    const globalt = 10000;
    
    // Matematik eğrisini çizin (r^2 = t örneği)
    ctx.beginPath();
    for (let t = 0; t <= globalt; t++) {
        const r = Math.sqrt(t);
        const x = scale * -r * Math.cos(t * (Math.PI / 180)) + canvas.width / 2;
        const y = scale * -r * Math.sin(t * (Math.PI / 180)) + canvas.height / 2;
        ctx.lineTo(x, y);
    }
    ctx.strokeStyle = "#00ff00";
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.beginPath();
    for (let t = 0; t <= globalt; t++) {
        const r = Math.sqrt(t);
        const x = scale * r * Math.cos(t * (Math.PI / 180)) + canvas.width / 2;
        const y = scale * r * Math.sin(t * (Math.PI / 180)) + canvas.height / 2;
        ctx.lineTo(x, y);
    }
    ctx.strokeStyle = "#00ff00";
    ctx.lineWidth = 2;
    ctx.stroke();
}

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drawCurve();
}

// Sayfa yüklendiğinde ve boyut değiştiğinde eğriyi çizin
window.addEventListener("load", drawCurve);
window.addEventListener("resize", resizeCanvas);
