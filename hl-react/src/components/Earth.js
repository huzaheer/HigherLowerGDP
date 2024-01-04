// Import Three.js
import * as THREE from 'three';
import React, { useRef, useEffect } from 'react';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';

// Create the main scene
const Earth = () => {
const earthRef = useRef(null);

useEffect(() => {
    if (!earthRef.current) return;
    const baseUrl = window.location.href.substring(0, window.location.href.lastIndexOf('/'));
    const EarthUrl = new URL('./scene.gltf', baseUrl);

    const renderer = new THREE.WebGLRenderer({ alpha: true });

    renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(renderer.domElement);

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );

    const starsGeometry = new THREE.BufferGeometry();
    const starsMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.3 });
    const starsVertices = [];
    for (let i = 0; i < 10000; i++) {
        const x = (Math.random() - 0.5) * 2000;
        const y = (Math.random() - 0.5) * 2000;
        const z = (Math.random() - 0.5) * 2000;
        starsVertices.push(x, y, z);
    }
    starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starsVertices, 3));
    const stars = new THREE.Points(starsGeometry, starsMaterial);

    // Add stars to the scene
    scene.add(stars);

    scene.background = new THREE.Color(0x000000); 

    renderer.setClearColor(0x000000, 1);

    const orbit = new OrbitControls(camera, renderer.domElement);

    camera.position.set(-2, 2, -3);
    orbit.update();

    // const grid = new THREE.GridHelper(30, 30);
    // scene.add(grid);

    const assetLoader = new GLTFLoader();

    let mixer;
    assetLoader.load(EarthUrl.href, function(gltf) {
        const model = gltf.scene;
        scene.add(model);
        mixer = new THREE.AnimationMixer(model);
        const clips = gltf.animations;

        // Play all animations at the same time
        clips.forEach(function(clip) {
            const action = mixer.clipAction(clip);
            action.play();
        });

    }, undefined, function(error) {
        console.error(error);
    });

    const clock = new THREE.Clock();
    function animate() {
        if(mixer)
            mixer.update(clock.getDelta());
        renderer.render(scene, camera);
    }

    renderer.setAnimationLoop(animate);

    window.addEventListener('resize', function() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
  }, []);
  return <div ref={earthRef} className="earth-container" />;
}

export default Earth;