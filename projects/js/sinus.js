gsap.registerPlugin(CustomEase);

var svg = document.querySelector("#sinus1");
var wave = document.querySelector("#wave1");

var width = window.innerWidth;
var sinus = CustomEase.create("sinus", "M0,0 C0.4,0 0.3,1 0.5,1 0.7,1 0.6,0 1,0");

var amplitude = 200;
var frequency = 45;
var segments = 1000;
var interval = width / segments;

gsap.defaults({
    ease: "sine.inOut"
});

gsap.set("g", {
    y: 110
});

for (var i = 0; i <= segments; i++) {

    var norm = 1 - i / segments;
    var point = wave.points.appendItem(svg.createSVGPoint());

    point.x = i * interval;
    point.y = amplitude / 2 * sinus(norm);

    gsap.to(point, 0.8, {
        duration: 0.8,
        y: -point.y,
        repeat: -1,
        yoyo: true
    }).progress(norm * frequency);
}
