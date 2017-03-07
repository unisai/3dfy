//Scene set up
var scene = new THREE.Scene();
// camera setup with perspective camera.
//Attributes for camera --> Field Of View, Aspect ratio and camera min and max distance.
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// support for unsupported browsers and at no WebGL support.
var renderer = new THREE.WebGLRenderer();
//size of render
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//adding cube
var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

function render() {
    "use strict";
    requestAnimationFrame(render);
    cube.rotation.x += 0.1;
    cube.rotation.y += 0.1;
    renderer.render(scene, camera);
}
render();


