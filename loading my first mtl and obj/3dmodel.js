var camera;
var scene;
var renderer;
var controls;
// var mesh;

init();
animate();

function init() {
    
    "use strict";
    
    // Creating a Scene
    scene = new THREE.Scene();
    
    // Adding Camera
    //camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 10000);
    //camera.position.set(-0, 10, 30);
    camera = new THREE.PerspectiveCamera(75, 1 / 1, 0.1, 1000);
    camera.position.z = 50;
    
    // Add a light
	var light = new THREE.DirectionalLight(0xaaaae5, 2);
	light.position.set(15, 16, -50);
    scene.add(light);
    /* var ambient = new THREE.AmbientLight(0x444444);
    scene.add(ambient);
    var directionalLight = new THREE.Directionallight(0xffeedd);
    directionalLight.position.set(0,0,1).normalize();
    scene.add(directionalLight); */
    
    // Add Scene Elements 
    addSceneElements();
    
    // Create the WebGL Renderer
	//renderer = new THREE.WebGLRenderer({ antialias: true});
    //renderer.setSize(window.innerWidth, window.innerHeight);
    renderer = new THREE.WebGLRenderer();
	renderer.setSize(500, 500);
    
    // Append the renderer to the div tag
    //var myCanvas = document.getElementById('myCanvas');
    //myCanvas.appendChild(renderer.domElement);
    document.body.appendChild(renderer.domElement);
    
    // Add a resize event listener
    window.addEventListener('resize', onWindowResize, false);
    
    // Add the orbit controls to the camera
    controls = new THREE.OrbitControls(camera, renderer.domElement);
	
	// Set the point at which we will orbit around
    controls.target = new THREE.Vector3(0, 0, 0); 
    
    /* var geometry = new THREE.BoxGeometry( 1, 1, 1 );
	var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
	var cube = new THREE.Mesh( geometry, material );
	scene.add( cube );

    camera.position.z = 5; */
    
    // instantiate a loader
   /* var loader = new THREE.OBJLoader();

		// load a resource
        loader.load(
        // resource URL
        'models/bixler.obj',
        // Function when resource is loaded
        function ( object ) {
            scene.add( object );
        }
    ); */
    
    // Load an object
	/* var loader = new THREE.OBJMTLLoader();
	loader.load("models/TreeCar.obj", "models/TreeCar.mtl", function (loadedObject) {
		loadedObject.name = 'Car';
		loadedObject.position.set(0,1.6,0);
		
		scene.add( loadedObject );
	}, onProgress, onError);
    
    */
    
    // prepare loader and load the model    
    /*  */
    
    /*var bixler;    
    var mtlLoader = new THREE.MTLLoader();
    mtlLoader.setPath('models/');
    mtlLoader.load('bixler.mtl', function(materials) {
        materials.preload();
        var objLoader = new THREE.OBJLoader();
        objLoader.setMaterials(materials);
        objLoader.setPath('models/');
        objLoader.load('bixler.obj', function(object) {
        // object.position.y = -95;
        bixler = object;
        scene.add(bixler);
    }, onProgress, onError);
    }); */

	/* var render = function () {
        requestAnimationFrame(render);

        /*cube.rotation.x += 0.1;
        cube.rotation.y += 0.1; 

        renderer.render(scene, camera);
    };

    render(); */
    
}

function addSceneElements() {
    "use strict";
    // Load an object
	var loader = new THREE.OBJMTLLoader();
	loader.load("models/TreeCar.obj", "models/TreeCar.mtl", function (loadedObject) {
		loadedObject.name = 'Car';
		loadedObject.position.set(-10, 5, 0);
		
		scene.add(loadedObject);
	}, onProgress, onError);
}

function onProgress(progress) {
    "use strict";
    //Code Please
}
    
function onError(errors) {
    "use strict";
    // Code Karro
}

function animate() {
    "use strict";
    
    // Update the orbit controls
	if (controls != null) {
		controls.update();
	}
	
	// Render the scene
	renderer.render( scene, camera );
	
	// Repeat
    requestAnimationFrame( animate );
    
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
}