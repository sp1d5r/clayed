import React from "react";
import Particles from "react-tsparticles";
import ParticleConfig from "./ParticleConfig/ParticleConfig";

export default function BakedOvenBackground() {
    return (<Particles canvasClassName="example" params={ParticleConfig}>
    </Particles>);
}
