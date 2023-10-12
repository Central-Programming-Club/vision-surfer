import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild(renderer.domElement);


const playerGeometry = THREE.BoxGeometry(1, 1, 1)
const playerTexture = THREE.MeshBasicMaterial({
    color: "#e81f10"
})

const playerMesh = THREE.Mesh(playerGeometry, playerTexture)

scene.add(playerMesh)