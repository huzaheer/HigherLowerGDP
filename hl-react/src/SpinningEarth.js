import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import earthImage from '/Users/huzaheeer/Desktop/I_got_this/HigherLowerGDP/hl-react/src/path_to_earth_texture.png';

const SpinningEarth = () => {
  const containerRef = useRef();

  useEffect(() => {
    const init = async () => {
      // Set up the scene
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 5;

      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      containerRef.current.appendChild(renderer.domElement);

      // Load Earth texture
      const textureLoader = new THREE.TextureLoader();
      let earthTexture;

      try {
        earthTexture = await textureLoader.loadAsync(earthImage);
      } catch (error) {
        console.error('Error loading texture:', error);
        return;
      }
      console.log(earthTexture);

      // Create Earth sphere
      const earthGeometry = new THREE.SphereGeometry(2, 32, 32);
      const earthMaterial = new THREE.MeshBasicMaterial({ map: earthTexture });
      const earth = new THREE.Mesh(earthGeometry, earthMaterial);
      scene.add(earth);

      // Add lighting
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
      directionalLight.position.set(2, 2, 1);
      scene.add(directionalLight);

      // Initialize controls
      const controls = new OrbitControls(camera, renderer.domElement);

      // Animate the scene
      const animate = () => {
        requestAnimationFrame(animate);
        earth.rotation.y += 0.005;
        renderer.render(scene, camera);
      };

      animate();

      // Handle window resize
      const onWindowResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };

      window.addEventListener('resize', onWindowResize);

      return () => {
        window.removeEventListener('resize', onWindowResize);
      };
    };

    init();
  }, []);

  return <div ref={containerRef} />;
};

export default SpinningEarth;
