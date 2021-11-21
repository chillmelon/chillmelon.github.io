import "./style.css";
import * as THREE from "three";

//
// Scene setup
//

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg"),
});

renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );
camera.position.setZ(20);
renderer.render( scene, camera );

//
// Geometry setup

// Torus
const geometry = new THREE.TorusGeometry( 10, 2, 10, 100 );
const material = new THREE.MeshBasicMaterial({
  color: "#03A062",
  wireframe: true,
});
const torus = new THREE.Mesh( geometry, material );
scene.add(torus);

// Shroom
const shroom_texture = new THREE.TextureLoader().load("shroom.jpeg");
const shroom_box = new THREE.Mesh(
  new THREE.BoxGeometry( 2, 2, 2 ),
  new THREE.MeshBasicMaterial( { map: shroom_texture } )
);
scene.add(shroom_box);

//
// Light setup
//

// Light 1
const point_light = new THREE.PointLight(0xffffff);
point_light.position.set( 20, 20, 20 );

// Light 2
const ambient_light = new THREE.AmbientLight(0xffffff);
scene.add(point_light, ambient_light);

//
// Animation setup
//

function animate() {
  requestAnimationFrame( animate );

  shroom_box.rotation.y += 0.03;
  shroom_box.rotation.x += 0.03;
  //shroom_box.rotation.z += 0.01;

  renderer.render( scene, camera );
}

shroom_box.position.x = 3;
shroom_box.position.y = 3;
shroom_box.position.z = 10;

function moveCamera() {
  const top = document.body.getBoundingClientRect().top;

  torus.rotation.x = -1.2 + top * 0.005;
  torus.rotation.y = -0.6 + top * 0.005;
  torus.position.y = top * 0.001;

  shroom_box.position.x = 3 + top * 0.01;
  shroom_box.position.y = 3 + top * 0.01;
  //shroom_box.position.z = 10 + top * 0.01;
}

moveCamera();

document.body.onscroll = moveCamera;

animate();
