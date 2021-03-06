export default {
  id: 'dummy',
  comb: {
    teeth: 10,
    teethOffsetXLeft: 0.15,
    teethOffsetXRight: 0.1,
    teethOffsetYTop: -0.3,
    scale: 0.5,
    image: 'assets/images/dummy-head.png',
  },
  tooth: {
    points: 6,
    twistFactor: 1.5,
    scale: 0.4,
    displayPoints: false,
    clickable: true,
    vibrationDecay: 1,
    vibrationEnd: 1.2,
    image: 'assets/images/dummy-tooth-rotate.png',
    imageActive: 'assets/images/dummy-tooth-rotate-active.png',
  },
  oscillator: {
    gamma: 0.03,
    omega1: 2,
    amplitude: 15,
    timeOfVibrationEnd: 80,
  },
  cylinder: {
    scale: 0.8,
    offsetYTop: -0.04,
    rotationSpeed: 0.007,
    image: 'assets/images/dummy-cylinder.png',
  },
  pin: {
    image: 'assets/images/dummy-pins-sprite2.png',
    frames: 3,
    framesTable: [Math.PI / 3, 3 * (Math.PI / 4)],
    frameWidth: 20,
    frameHeight: 20,
  },
  sequencer: {
    file: 'assets/scores/ctsad.mid',
  },
};
