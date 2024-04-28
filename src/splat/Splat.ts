import * as THREE from 'three';

// Create a cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);

// Export the cube as an Object3D
export const Splat: THREE.Object3D = cube;