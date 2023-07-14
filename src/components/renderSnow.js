import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import * as styles from "./styles.js";


export default function Snow() {
const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
    };

    const particlesLoaded = (container) => {
    console.log(container);
    };
  return (
    <div style={styles.particlesStyles}>
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
            fpsLimit: 120,
            particles: {
                color: {
                    value: "#ffffff"
                },
                links: {
                    color: "#ffffff",
                    distance: 150,
                    enable: false,
                    opacity: 0.5,
                    width: 1
                },
                collisions: {
                    enable: false
                },
                move: {
                    direction: "bottom-right",
                    enable: true,
                    random: false,
                    speed: {min: 0.8, max: 1.2},
                    straight: false
                },
                number: {
                    density: {
                        enable: true,
                        area: 800
                    },
                    value: 80
                },
                opacity: {
                    value: 0.8
                },
                shape: {
                    type: "circle"
                },
                size: {
                    value: { min: 2, max: 8 }
                }
            },
            detectRetina: true
            }}
        />
    </div>
  );
}
