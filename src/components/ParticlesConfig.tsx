import type { ISourceOptions } from "@tsparticles/engine";

const options: ISourceOptions = {
  background: {
    color: {
      value: "#fff",
    },
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: false,
        mode: "repulse", // push, remove, bubble, repulse, grab, connect
      },
      onHover: {
        enable: false,
        mode: "bubble", // bubble, repulse
        parallax: {
          enable: false,
          force: 60,
          smooth: 10,
        },
      },
    },
    modes: {
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 150,
        duration: 0.4,
      },
      grab: {
        distance: 200,
        links: {
          blink: false,
          consent: false,
          opacity: 1,
        },
      },
      bubble: {
        distance: 100,
        duration: 2,
        opacity: 5,
        size: 9,
      },
    },
  },
  particles: {
    number: {
      density: {
        enable: true,
      },
      value: 300,
    },
    color: {
      value: "#000",
    },
    links: {
      color: "#000",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: true,
      speed: 3,
      straight: false,
    },
    opacity: {
      value: 0.25,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 7 },
      animation: {
        enable: true,
        speed: 20,
      },
    },
  },
};

export default options;
