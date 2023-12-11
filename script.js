import * as THREE from 'three'
import {OrbitControls} from 'three/addons/controls/OrbitControls.js'; 

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight,0.1,1000)

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth,window.innerHeight)
document.body.appendChild(renderer.domElement)

const controls = new OrbitControls(camera,renderer.domElement)

const geometry1 = new THREE.BoxGeometry(3,1,1)
const material1 = new THREE.MeshLambertMaterial({color: 0xb3d9ff})
const cube = new THREE.Mesh(geometry1,material1)
scene.add(cube)

const geometry2 = new THREE.BoxGeometry(3,1,1)
const material2 = new THREE.MeshLambertMaterial({color: 0xb3d9ff})
const cube2 = new THREE.Mesh(geometry2,material2)
scene.add(cube2)

camera.position.z = 5
cube.position.x = -5
cube2.position.x = 5
const sphereGeometry = new THREE.SphereGeometry(2,64,64)
const sphereMaterial = new THREE.MeshLambertMaterial({color:0xb3d9ff})
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
scene.add(sphere)

const light = new THREE.AmbientLight(0xffffff, 0.5); 
scene.add(light) ;

function animate(){
    requestAnimationFrame(animate)

    cube.rotation.x += 1.00
    cube.rotation.y += 0.4567

    cube2.rotation.x += 0.4567
    cube2.rotation.y +=.23

    renderer.render(scene,camera)

    
}
animate()
