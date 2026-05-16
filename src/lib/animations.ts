import gsap from 'gsap';

export const glitchFlash = (element: string) => {
  return gsap.fromTo(element, 
    { opacity: 0 },
    { opacity: 1, duration: 0.05, repeat: 3, yoyo: true, ease: 'power1.inOut' }
  );
};

export const scanLineEffect = (element: string) => {
  return gsap.to(element, {
    top: '105%',
    duration: 6,
    repeat: -1,
    ease: 'none'
  });
};
