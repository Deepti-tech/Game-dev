import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.118/build/three.module.js';
import {GLTFLoader} from 'https://cdn.jsdelivr.net/npm/three@0.118.1/examples/jsm/loaders/GLTFLoader.js';
import {FontLoader} from "./src/FontLoader.js"
import {TextGeometry} from "./src/TextGeometry.js"
import { ColladaLoader } from 'https://cdn.jsdelivr.net/npm/three@0.118.1/examples/jsm/loaders/ColladaLoader.js';

var width, height, 
    renderer,
    scene, camera,
    moon, earth,
    light,
    northPoint, southPoint,
    target,
    time,delta,
    group, group1,
    mixer;

var settings = {
    camera: {
        angle: 45,
        far: 10000,
        position: {
            x: 0,
            y: 0,
            z: 1000
        }
    },
    shadowsEnabled: true,
    backgroundColor: 0x05060d,
    ambientLight: {
        enabled: true,
        color: 0xffffff,
        intensity: 0.15
    },
    lightHelpersEnabled: false
};

function onWindowResize() {
    updateSizes();
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
};

function updateSizes() {
    width = window.innerWidth;
    height = window.innerHeight;
};

function createPointLight() {
    light = new THREE.PointLight(0xffffff, 1.1, 1-1000);
    light.position.set(1000, 1000, 1000);
    light.castShadow = true;
    light.shadow.camera.near = 0.1;
    light.shadow.camera.far = 10000;
    light.shadow.mapSize.width = width;
    light.shadow.mapSize.height = height;
    scene.add(light);
    if (settings.lightHelpersEnabled) {
        var lightHelper = new THREE.PointLightHelper(light, 30);
        scene.add(lightHelper);
    }
};

// function animateLight() {
//     timestamp = Date.now() * 0.00001;
//     light.position.x = Math.cos(timestamp * 0) * 1500;
//     light.position.z = Math.sin(timestamp * 5) * 1500;
// };

// function createControls() {
//     new THREE.OrbitControls(camera, renderer.domElement);
// }

function createBg(){
    let loader = new THREE.TextureLoader()
    let texture = loader.load("img/bg.jpg")
    scene.background = texture;
}

function createMoon() {
    var moonGeometry = new THREE.SphereGeometry(125, 30, 30);
    var moonMaterial = new THREE.MeshLambertMaterial({
        color: 0xffffff,
        map: new THREE.TextureLoader().load("img/moon.jpg")
    });
    moon = new THREE.Mesh(moonGeometry, moonMaterial);
    moon.position.set(500,150,0)
    scene.add(moon);
};
var northPath, southPath;
function  getPath(){
    let v1=new THREE.Vector3(500,289,20)
    let v2=new THREE.Vector3(0,0,0)
    let v3=new THREE.Vector3(480,25,100)
    let points = []
    for (let i=0; i<=20; i++){
        let p=new THREE.Vector3().lerpVectors(v1,v2,i/20)
        p.multiplyScalar(1 + 0.1*Math.sin(Math.PI*i/20))
        points.push(p)
    }
    let curve = new THREE.CatmullRomCurve3(points)    
    let geometry1 = new THREE.TubeGeometry(curve)
    const material = new THREE.MeshBasicMaterial( { color: 0x00ffff } )
    northPath = new THREE.Mesh( geometry1, material )
    scene.add( northPath );

    let points2 = []
    for (let i=0; i<=20; i++){
        let p=new THREE.Vector3().lerpVectors(v3,v2,i/20)
        p.multiplyScalar(1 + 0.1*Math.sin(Math.PI*i/20))
        points2.push(p)
    }
    curve = new THREE.CatmullRomCurve3(points2)    
    let geometry2 = new THREE.TubeGeometry(curve)
    southPath = new THREE.Mesh( geometry2, material )
    scene.add( southPath );
}

function north_South(){
    northPoint = new THREE.Mesh(
        new THREE.SphereBufferGeometry(10,30,30),
        new THREE.MeshBasicMaterial({color:0x00ffff}));
        
    northPoint.position.set(500, 285, 15)
    scene.add(northPoint)

    const loader = new FontLoader();
    loader.load( 'styles/helvetiker_regular.typeface.json', function ( font ) {
        const geometry = new TextGeometry( 'North Pole', {
            font: font,
            size: 15,
            height: 5,
            curveSegments: 12,
            bevelEnabled: true,
            bevelThickness: 2,
            bevelSize: 2,
            bevelOffset: 0,
            bevelSegments: 2
        } );
        const textMesh1 = new THREE.Mesh( geometry,new THREE.MeshPhongMaterial( { color: 0xffffff } ));
        textMesh1.position.set(450,310,0);
        scene.add(textMesh1)
    } );


    southPoint = new THREE.Mesh(
        new THREE.SphereBufferGeometry(10,30,30),
        new THREE.MeshBasicMaterial({color:0x00ffff}));
        
    southPoint.position.set(480, 25, 100)
    scene.add(southPoint)

    loader.load( 'styles/helvetiker_regular.typeface.json', function ( font ) {
        const geometry = new TextGeometry( 'South Pole', {
            font: font,
            size: 15,
            height: 5,
            curveSegments: 12,
            bevelEnabled: true,
            bevelThickness: 2,
            bevelSize: 2,
            bevelOffset: 0,
            bevelSegments: 2
        } );
        const textMesh1 = new THREE.Mesh( geometry,new THREE.MeshPhongMaterial( { color: 0xffffff } ));
        textMesh1.position.set(425,-7,110);
        scene.add(textMesh1)
    } );
}

function north_is_incorrect(){
    scene.remove(northPoint)
    northPoint = new THREE.Mesh(
        new THREE.SphereBufferGeometry(10,30,30),
        new THREE.MeshBasicMaterial({color:0xFF0000}));
        
    northPoint.position.set(500, 285, 15)
    scene.add(northPoint)

    scene.remove(northPath)
    let v1=new THREE.Vector3(500,289,20)
    let v2=new THREE.Vector3(0,0,0)
    let points = []
    for (let i=0; i<=20; i++){
        let p=new THREE.Vector3().lerpVectors(v1,v2,i/20)
        p.multiplyScalar(1 + 0.1*Math.sin(Math.PI*i/20))
        points.push(p)
    }
    let curve = new THREE.CatmullRomCurve3(points)    
    const geometry = new THREE.TubeGeometry(curve)
    const material = new THREE.MeshBasicMaterial( { color: 0xFF0000 } )
    northPath = new THREE.Mesh( geometry, material )
    scene.add( northPath );
}

function createEarth() {
    var earthGeometry = new THREE.SphereGeometry(500, 30, 30);
    var earthMaterial = new THREE.MeshLambertMaterial({
        color: 0xffffff,
        map: new THREE.TextureLoader().load("img/daymap.jpg")
    });
    earth = new THREE.Mesh(earthGeometry, earthMaterial);
    earth.position.set(-400,-550,0)
    scene.add(earth);
};

function animateMoon() {
    moon.rotation.y += 0.006;
};
function animateEarth() {
    earth.rotation.y += 0.008;
};

var entityManager, vehicle, loader;
function rocket(){   
    group = new THREE.Group();
    loader = new GLTFLoader();
    loader.load( "rocket/rocket.gltf",
        (gltf) => {
            const model = gltf.scene;
            model.matrixAutoUpdate = false;
            group.add(model);
            scene.add(group);
        }
    );
  
    vehicle = new YUKA.Vehicle();
    function sync(entity, renderComponent) {
        renderComponent.matrix.copy(entity.worldMatrix);
    }
   
    group1 = new THREE.Group();
    loader = new GLTFLoader();
    loader.load("rocket/top.gltf",                    
        (gltf) => {
            const model1 = gltf.scene;
            model1.matrixAutoUpdate = false;
            group1.add(model1);
            vehicle.setRenderComponent(model1, sync);
        }
    );
  
    vehicle.maxSpeed = 100;
    entityManager = new YUKA.EntityManager();
    entityManager.add(vehicle);

    target = new YUKA.GameEntity();
    entityManager.add(target);

    const arriveBehavior = new YUKA.ArriveBehavior(target.position, 3, 0);
    vehicle.steering.add(arriveBehavior);
}
var avatar, animation;
function character(){
    const loader = new ColladaLoader();
    loader.load( 'character/stormtrooper.dae', function ( collada ) {

        avatar = collada.scene;
        avatar.traverse( function ( node ) {
            if ( node.isSkinnedMesh ) {
                node.frustumCulled = false;
            }
        } );

        mixer = new THREE.AnimationMixer( avatar );
        animation = mixer.clipAction(collada.animations[0]);
        avatar.position.set(-400,-60,20);
        // avatar.position.set(125,-400,20);
        avatar.scale.set(40,40,40);
        avatar.rotation.z += 135;
        scene.add( avatar );
    } );
}

function Progress(){
    var  progress = document.querySelector('.progress-done');
    document.getElementById("stages").className = "planning-progress";
    progress.style.opacity = 1;
    progress.style.width = '33.33%';
    progress.innerHTML = "Planning"
}

var delta, clock;
function init() {
    updateSizes();
    var canvas = document.getElementById("canvas");
    canvas.setAttribute("width", width);
    canvas.setAttribute("height", height);
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(settings.camera.angle, width / height, 0.1, settings.camera.far);
    camera.position.set(settings.camera.position.x, settings.camera.position.y, settings.camera.position.z);
    renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
    renderer.setClearColor(settings.backgroundColor);
    renderer.shadowMap.enabled = settings.shadowsEnabled;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    document.body.appendChild(renderer.domElement);
    clock = new THREE.Clock();

    if (settings.ambientLight.enabled) {
        var ambientLight = new THREE.AmbientLight(settings.ambientLight.color, settings.ambientLight.intensity);
        scene.add(ambientLight);
    }

    window.addEventListener('resize', onWindowResize, true);

    // createControls();
    createBg();
    createMoon();
    createEarth();
    north_South();
    rocket();
    time = new YUKA.Time();
    character();
    createPointLight();
    animate();
    getPath();
};

const raycaster = new THREE.Raycaster()
const mouse = {
    x: undefined, y: undefined
}
addEventListener('mousemove', (event) => {
    mouse.x = (event.clientX/innerWidth)*2-1
    mouse.y = -(event.clientY/innerHeight)*2+1
})
addEventListener('click', function() {
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(scene.children);
    for(let i = 0; i < intersects.length; i++) {
        console.log(intersects[i].object.id)
        if(intersects[i].object.id === 17 || intersects[i].object.id === 15 || intersects[i].object.id === 24){
            scene.remove(group)
            scene.remove(northPath); 
            scene.remove(southPath);
            scene.add(group1)
            target.position.set(intersects[i].point.x, intersects[i].point.y, intersects[i].point.z);
            document.getElementById("instruct").innerHTML="CORRECT!<br> At the south pole, 14 days is daytime and 14 days is night time. Thus, ice is found on the south pole. It is also a good target for a future human landing because robotically, it’s the most thoroughly investigated region on the Moon.";
            document.getElementById("next-stage").style.display = "flex";
            Progress();
            animation.play();
            scene.remove(northPoint);
            scene.remove(southPoint);
        }
        else if(intersects[i].object.id === 16 || intersects[i].object.id === 14 || intersects[i].object.id === 23){
            document.getElementById("instruct").innerHTML="TRY AGAIN!<br>The moon’s pole is 5° slanted towards the sun. So the entire northpole region will receive sun's rays through out the lunar day. On the north pole, though the temperature is low, because of constant daytime , it is always dry. So there is nothing to gain in landing on the lunar northpole.";
            north_is_incorrect();
        }
    }
});

function animate() {
    requestAnimationFrame(animate);
    animateMoon();
    animateEarth();
    // animateLight();
    delta = time.update().getDelta();
    entityManager.update(delta);
    if ( mixer) {
        mixer.update( delta );
    }
    renderer.render(scene, camera);
};

window.onload = function () {
    document.getElementById('title').className = 'animate-title';
    init();
    
}
