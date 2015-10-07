var width = window.innerWidth;
var height = window.innerHeight;
var scene = new VIEWPORT.Environment(width, height);
document.body.appendChild(scene.getContainer());

window.onresize = function () {
	scene.resize(window.innerWidth, window.innerHeight);
} 