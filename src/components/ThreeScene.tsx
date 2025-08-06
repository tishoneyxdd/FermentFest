import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeScene: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene>();
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const cameraRef = useRef<THREE.PerspectiveCamera>();
  const sushiPiecesRef = useRef<THREE.Mesh[]>([]);
  const bubblesRef = useRef<THREE.Mesh[]>([]);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    
    mountRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(50, 50, 50);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0xff6b35, 0.5, 100);
    pointLight.position.set(-50, 50, 50);
    scene.add(pointLight);

    // Create sushi pieces (cylinders with different materials)
    const sushiPieces: THREE.Mesh[] = [];
    for (let i = 0; i < 8; i++) {
      const geometry = new THREE.CylinderGeometry(0.8, 0.8, 0.4, 16);
      const material = new THREE.MeshPhongMaterial({ 
        color: i % 3 === 0 ? 0xDEB887 : i % 3 === 1 ? 0x8B4513 : 0x228B22,
        shininess: 30,
      });
      
      const sushi = new THREE.Mesh(geometry, material);
      sushi.position.set(
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 50,
        (Math.random() - 0.5) * 100
      );
      sushi.rotation.x = Math.random() * Math.PI;
      sushi.rotation.z = Math.random() * Math.PI;
      sushi.castShadow = true;
      
      scene.add(sushi);
      sushiPieces.push(sushi);
    }

    // Create fermentation bubbles
    const bubbles: THREE.Mesh[] = [];
    for (let i = 0; i < 20; i++) {
      const geometry = new THREE.SphereGeometry(0.2 + Math.random() * 0.3, 16, 16);
      const material = new THREE.MeshPhongMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.3,
        shininess: 100,
      });
      
      const bubble = new THREE.Mesh(geometry, material);
      bubble.position.set(
        (Math.random() - 0.5) * 120,
        (Math.random() - 0.5) * 80,
        (Math.random() - 0.5) * 120
      );
      
      scene.add(bubble);
      bubbles.push(bubble);
    }

    // Camera position
    camera.position.set(0, 0, 50);

    // Store refs
    sceneRef.current = scene;
    rendererRef.current = renderer;
    cameraRef.current = camera;
    sushiPiecesRef.current = sushiPieces;
    bubblesRef.current = bubbles;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate sushi pieces
      sushiPieces.forEach((sushi, index) => {
        sushi.rotation.x += 0.005 + index * 0.001;
        sushi.rotation.y += 0.007 + index * 0.001;
        
        // Floating motion
        sushi.position.y += Math.sin(Date.now() * 0.001 + index) * 0.02;
      });

      // Animate bubbles
      bubbles.forEach((bubble, index) => {
        bubble.position.y += 0.05;
        if (bubble.position.y > 40) {
          bubble.position.y = -40;
        }
        
        // Gentle floating
        bubble.position.x += Math.sin(Date.now() * 0.001 + index) * 0.01;
        bubble.position.z += Math.cos(Date.now() * 0.001 + index) * 0.01;
      });

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (camera && renderer) {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      }
    };

    // Mouse interaction
    const handleMouseMove = (event: MouseEvent) => {
      const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
      
      if (camera) {
        camera.position.x += (mouseX * 5 - camera.position.x) * 0.05;
        camera.position.y += (mouseY * 5 - camera.position.y) * 0.05;
        camera.lookAt(0, 0, 0);
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0" />;
};

export default ThreeScene;