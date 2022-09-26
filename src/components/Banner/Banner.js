import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model1 from "../Models/Model1";

import styles from "./styles.module.css";

const Banner = () => {
  return (
    <div className={styles.content}>
      <div className={styles.explore}>
        <h2>Exotic minimal furniture.</h2>
        <p>
          Choose from a wide range of well-creafted premium quality wooden
          furniture online
        </p>
        <button className={styles.btn}>EXPLORE</button>
      </div>

      <div className={styles.canvas}>
        <Canvas shadows camera={{ position: [4, 2, 3] }}>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={1} />
          <directionalLight position={[-2, 5, 2]} intensity={1} castShadow />
          <Suspense fallback={null}>
            <Model1 />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

export default Banner;
