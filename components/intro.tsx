'use client';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export default function Intro() {
  const container = useRef(null);

  const moveLeftAndRight = ({
    className,
    startX,
    startY,
    addX,
    addY,
    rotation,
  }: {
    className: string;
    startX: number;
    startY: number;
    addX: number;
    addY: number;
    rotation: number;
  }) => {
    const timeline = gsap.timeline();
    const DURATION = 0.2;
    const DELAY = 0.05;
    for (let i = 0; i < 4; i++) {
      timeline.to(className, {
        rotation: i % 2 === 0 ? rotation : -rotation,
        duration: DURATION,
        x: startX + addX * i,
        y: startY + addY * i,
        delay: i * DELAY,
      });
    }
  };

  const setTitleAnimation = () => {
    moveLeftAndRight({
      className: '.title-p',
      startX: 30,
      startY: 15,
      addX: 10,
      addY: 10,
      rotation: 20,
    });
    moveLeftAndRight({
      className: '.title-first-o',
      startX: -100,
      startY: 15,
      addX: 10,
      addY: 15,
      rotation: -6,
    });
    moveLeftAndRight({
      className: '.title-r',
      startX: 0,
      startY: 15,
      addX: -10,
      addY: 15,
      rotation: -10,
    });
    moveLeftAndRight({
      className: '.title-t',
      startX: -100,
      startY: 30,
      addX: -20,
      addY: 15,
      rotation: 3,
    });
    moveLeftAndRight({
      className: '.title-f',
      startX: 30,
      startY: 0,
      addX: 30,
      addY: -5,
      rotation: 20,
    });
    moveLeftAndRight({
      className: '.title-second-o',
      startX: -100,
      startY: 0,
      addX: 20,
      addY: -5,
      rotation: -10,
    });
    moveLeftAndRight({
      className: '.title-l',
      startX: 10,
      startY: 0,
      addX: 0,
      addY: -10,
      rotation: 5,
    });
    moveLeftAndRight({
      className: '.title-i',
      startX: -10,
      startY: 0,
      addX: -10,
      addY: -10,
      rotation: -5,
    });
    moveLeftAndRight({
      className: '.title-third-o',
      startX: -100,
      startY: 0,
      addX: -20,
      addY: -5,
      rotation: 10,
    });
  };

  useGSAP(() => {
    const context = gsap.context(() => {
      setTitleAnimation();
    }, [container.current]);
    return () => {
      context.revert();
    };
  }, []);

  return (
    <section
      className='uppercase leading-none'
      ref={container}
    >
      <div className='relative font-black text-[80px] lg:text-[250px]'>
        <h1 className='title-p absolute -translate-x-1/2 -translate-y-1/2 -rotate-[17.38deg] text-purple-300 lg:left-[calc(50%-320px)] lg:top-[calc(50%-130px)]'>
          p
        </h1>
        <h1 className='title-first-o absolute -translate-x-1/2 -translate-y-1/2 -rotate-[5.17deg] text-beige-400 lg:left-[calc(50%-100px)] lg:top-[calc(50%-150px)]'>
          o
        </h1>
        <h1 className='title-r absolute -translate-x-1/2 -translate-y-1/2 rotate-[9.35deg] text-purple-700 lg:left-[calc(50%+150px)] lg:top-[calc(50%-150px)]'>
          r
        </h1>
        <h1 className='title-t absolute -translate-x-1/2 -translate-y-1/2 -rotate-[1.46deg] text-purple-500 lg:left-[calc(50%+370px)] lg:top-[calc(50%-150px)]'>
          t
        </h1>
        <h1 className='title-f absolute -translate-x-1/2 -translate-y-1/2 -rotate-[17.38deg] text-purple-700 lg:left-[calc(50%-400px)] lg:top-[calc(50%+150px)]'>
          f
        </h1>
        <h1 className='title-second-o absolute -translate-x-1/2 -translate-y-1/2 -rotate-[5.17deg] text-purple-300 lg:left-[calc(50%-170px)] lg:top-[calc(50%+150px)]'>
          o
        </h1>
        <h1 className='title-l absolute -translate-x-1/2 -translate-y-1/2 -rotate-[0.07deg] text-beige-400 lg:left-[calc(50%+50px)] lg:top-[calc(50%+150px)]'>
          l
        </h1>
        <h1 className='title-i absolute -translate-x-1/2 -translate-y-1/2 -rotate-[5.17deg] text-purple-300 lg:left-[calc(50%+230px)] lg:top-[calc(50%+150px)]'>
          i
        </h1>
        <h1 className='title-third-o absolute  -translate-x-1/2 -translate-y-1/2 rotate-[11.23deg] text-purple-700 lg:left-[calc(50%+380px)] lg:top-[calc(50%+150px)]'>
          o
        </h1>
      </div>
    </section>
  );
}
