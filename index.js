import * as THREE from 'three'

//---------------------------------
//
// init scene, camera and renderer
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(
	75,
	innerWidth / innerHeight,
	0.1,
	1000
)
const renderer = new THREE.WebGLRenderer()
renderer.setSize(innerWidth, innerHeight)
renderer.setPixelRatio(devicePixelRatio)
document.body.appendChild(renderer.domElement)

//-----------------
//
// event listener
window.addEventListener('resize', () => {
	renderer.setSize(innerWidth, innerHeight)
	camera.aspect = innerWidth / innerHeight
	camera.updateProjectionMatrix()
	console.log(window.innerHeight)
})

//-------------------------
//
// create a green box mesh
const boxGeometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0x00FF00 })
const mesh = new THREE.Mesh(boxGeometry, material)
scene.add(mesh)

//------------------
//
// render the scene
camera.position.z = 5
animate()

//-----------
//
// functions
function animate() {
	requestAnimationFrame(animate)
	renderer.render(scene, camera)
	mesh.rotation.x += 0.01
	mesh.rotation.y += 0.01
}

// debug
console.log(scene, camera, renderer, boxGeometry)
