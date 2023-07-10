import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import * as styles from "./styles.js";


export default function Rain() {
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
                rotate: {
                    value: 60,
                    random: false,
                    direction: "clockwise",
                    animation: {
                      enable: false,
                      speed: 5,
                      sync: false
                    }
                },
                collisions: {
                    enable: false
                },
                move: {
                    direction: "bottom-right",
                    enable: true,
                    random: false,
                    speed: { min: 8, max: 12},
                    straight: true
                },
                number: {
                density: {
                    enable: true,
                    area: 800
                },
                value: 120
                },
                opacity: {
                value: 0.5
                },
                shape: {
                    stroke: {
                      color: "#b8f5fa",
                      width: 2
                    },
                    type: "line"
                  },
                size: {
                value: { min: 10, max: 14 }
                }
            },
            detectRetina: true
            }}
        />
    </div>
  );
}
