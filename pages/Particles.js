import Particles from "react-tsparticles";
//import { loadSlim } from "tsparticles-slim";
import { loadFull } from "tsparticles";
import { useCallback, useMemo } from "react";

const ParticlesComponent = () => {
    const options = useMemo((engine) => {
        return {
            //sparticles
            fullScreen:{
                enable: true,
                zIndex: 2,

            },
           particles:{
            move: {
                direction: "top",
                enable: true,
                speed: { min: 1, max:3},
            },
            size: {
                value: { min:1, max:4},
            },
            opacity: {
                value: { min:1, max:3},
            },
            color: {
                value: "#DD571C"
            },
            number: {
                density: {
                  enable: true,
                  area: "1000",
                },
                value: "5",
              },

           },


        };
    }, []);

    const particlesInit = useCallback((engine) => {
        loadFull(engine);
    }, []);

    return <Particles init = { particlesInit }
    options = { options }
    />;
};

export default ParticlesComponent;