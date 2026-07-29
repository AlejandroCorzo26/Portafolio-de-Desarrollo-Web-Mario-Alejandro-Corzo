particlesJS("tsparticles", {

    particles: {

        number: {
            value: 280
        },

        color: {
            value: "#ffffff"
        },

        shape: {
            type: "circle"
        },

        opacity: {
            value: 0.98
        },

        size: {
            value: 3
        },

        line_linked: {
            enable: true,
            distance: 100,
            color: "#ffffff",
            opacity: 0.98,
            width: 1
        },

        move: {
            enable: true,
            speed: 6
        }

    },

interactivity: {

    detect_on: "canvas",

    events: {

        onhover: {
            enable: true,
            mode: ["grab", "bubble"]
        },

        resize: true

    },

    modes: {

        grab: {

            distance: 220,

            line_linked: {
                opacity: 0.8
            }

        },

        bubble: {

            distance: 180,
            size: 6,
            opacity: 0.8,
            duration: 0.3

        }

    }

},

    retina_detect: true

});

const mask = document.getElementById("mask");

document.addEventListener("mousemove",(e)=>{

    mask.style.maskImage =
        `radial-gradient(circle 170px at ${e.clientX}px ${e.clientY}px,
        transparent 0%,
        transparent 80%,
        black 100%)`;

    mask.style.webkitMaskImage =
        `radial-gradient(circle 170px at ${e.clientX}px ${e.clientY}px,
        transparent 0%,
        transparent 80%,
        black 100%)`;

});