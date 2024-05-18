'use client';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { preventBodyScroll } from '@/lib/utils/helpers';

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
    const DELAY = 0.02;

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

  const setTitleAnimationPc = () => {
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

  const setTitleAnimationMobile = () => {
    moveLeftAndRight({
      className: '.title-p',
      startX: 0,
      startY: 5,
      addX: 3,
      addY: 3,
      rotation: 20,
    });
    moveLeftAndRight({
      className: '.title-first-o',
      startX: -30,
      startY: 5,
      addX: 0,
      addY: 3,
      rotation: -10,
    });
    moveLeftAndRight({
      className: '.title-r',
      startX: -30,
      startY: 4,
      addX: -3,
      addY: 4,
      rotation: -10,
    });
    moveLeftAndRight({
      className: '.title-t',
      startX: 0,
      startY: 6,
      addX: -6,
      addY: 4,
      rotation: 3,
    });
    moveLeftAndRight({
      className: '.title-f',
      startX: 5,
      startY: 0,
      addX: 5,
      addY: -3,
      rotation: 20,
    });
    moveLeftAndRight({
      className: '.title-second-o',
      startX: -24,
      startY: 0,
      addX: 2,
      addY: -4,
      rotation: 10,
    });
    moveLeftAndRight({
      className: '.title-l',
      startX: 0,
      startY: 0,
      addX: 0,
      addY: -3,
      rotation: -5,
    });
    moveLeftAndRight({
      className: '.title-i',
      startX: -10,
      startY: 0,
      addX: -5,
      addY: -3,
      rotation: 5,
    });
    moveLeftAndRight({
      className: '.title-third-o',
      startX: -35,
      startY: 0,
      addX: -10,
      addY: -3,
      rotation: 10,
    });
  };

  const setTitleAnimation = (isPc: boolean) => {
    if (isPc) {
      setTitleAnimationPc();
    } else {
      setTitleAnimationMobile();
    }
  };

  const setPartsAnimation = () => {
    gsap.to('.parts', {
      y: '-=20',
      opacity: 1,
      duration: 1.8,
      delay: 1.2,
      ease: 'elastic.out(1, 0.3)',
      yoyo: true,
    });
  };

  const setBottomArrowAnimation = (isPc: boolean) => {
    gsap.to('.bottom-arrow', {
      x: isPc ? '90' : '30',
      opacity: 1,
      delay: 2.3,
      rotate: 360,
      duration: 2,
      onComplete: () => {
        preventBodyScroll(false);
      },
    });
  };

  useGSAP(() => {
    preventBodyScroll(true);
    const matchMedia = gsap.matchMedia();
    const context = gsap.context(() => {
      matchMedia.add(
        {
          isMobile: '(max-width: 1023px)',
          isPc: '(min-width: 1024px)',
        },
        (context) => {
          if (context.conditions) {
            setTitleAnimation(context.conditions.isPc);
            setPartsAnimation();
            setBottomArrowAnimation(context.conditions.isPc);
          }
        }
      );
    }, [container.current]);
    return () => {
      context.revert();
    };
  }, []);

  return (
    <section
      className='flex h-fullHeight items-center justify-center uppercase leading-none'
      ref={container}
    >
      <div className='parts absolute opacity-0 w-[100px] h-[46px] left-[calc(50%+65px)] top-[calc(50%-85px)] -translate-x-1/2 -translate-y-1/2 lg:w-40 lg:h-[76px] lg:left-[calc(50%+200px)] lg:top-[calc(50%-240px)]'>
        <Image
          src='/images/main/cloud.png'
          fill
          priority
          sizes='100%'
          alt='구름 이미지'
        />
      </div>
      <div className='parts absolute w-12 h-12 opacity-0 left-[calc(50%-150px)] top-[calc(50%+15px)] -translate-x-1/2 -translate-y-1/2 lg:w-[100px] lg:h-[100px] lg:left-[calc(50%-400px)] lg:top-[calc(50%+20px)]'>
        <Image
          src='/images/main/eye.png'
          priority
          fill
          sizes='100%'
          alt='눈동자 이미지'
        />
      </div>
      <div className='parts absolute opacity-0 px-3 py-2 min-w-[180px] left-1/2 top-[calc(50%+125px)] bg-orange-200 shadow-[-5px_5px_0px_2px_#FFADAD] rounded-[100px] -translate-x-1/2 -translate-y-1/2 font-black text-orange-800 text-xs uppercase lg:px-4 lg:py-3 lg:left-[calc(50%-150px)] lg:top-[calc(50%+270px)] lg:text-sm'>
        front-end developer
      </div>
      <Link href='#introduction'>
        <svg
          className='bottom-arrow w-[50px] h-[50px] absolute opacity-0 left-[calc(50%-50px)] bottom-8 -translate-x-1/2 z-10 lg:w-20 lg:h-20 lg:left-[calc(50%-100px)]'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
        >
          <circle
            className='fill-beige-400'
            cx='50%'
            cy='50%'
            r='50%'
          />
          <path
            className='stroke-red-100 fill-none'
            d='M 12,6 L 12,18 M 16,14 L 12,18 L 8,14'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </Link>
      <div className='relative font-black text-[80px] lg:text-[250px]'>
        <h1 className='title-p absolute left-[calc(50%-105px)] top-[calc(50%-50px)] -translate-x-1/2 -translate-y-1/2 -rotate-[17.38deg] text-purple-300 lg:left-[calc(50%-320px)] lg:top-[calc(50%-150px)]'>
          p
        </h1>
        <h1 className='title-first-o absolute left-[calc(50%-35px)] top-[calc(50%-50px)] -translate-x-1/2 -translate-y-1/2 -rotate-[5.17deg] text-beige-400 lg:left-[calc(50%-100px)] lg:top-[calc(50%-170px)]'>
          o
        </h1>
        <h1 className='title-r absolute left-[calc(50%+45px)] top-[calc(50%-50px)] -translate-x-1/2 -translate-y-1/2 rotate-[9.35deg] text-purple-700 lg:left-[calc(50%+150px)] lg:top-[calc(50%-170px)]'>
          r
        </h1>
        <h1 className='title-t absolute left-[calc(50%+115px)] top-[calc(50%-50px)] -translate-x-1/2 -translate-y-1/2 -rotate-[1.46deg] text-purple-500 lg:left-[calc(50%+370px)] lg:top-[calc(50%-170px)]'>
          t
        </h1>
        <h1 className='title-f absolute left-[calc(50%-125px)] top-[calc(50%+50px)] -translate-x-1/2 -translate-y-1/2 -rotate-[17.38deg] text-purple-700 lg:left-[calc(50%-400px)] lg:top-[calc(50%+130px)]'>
          f
        </h1>
        <h1 className='title-second-o absolute left-[calc(50%-55px)] top-[calc(50%+50px)] -translate-x-1/2 -translate-y-1/2 -rotate-[5.17deg] text-purple-300 lg:left-[calc(50%-170px)] lg:top-[calc(50%+130px)]'>
          o
        </h1>
        <h1 className='title-l absolute left-[calc(50%+15px)] top-[calc(50%+50px)] -translate-x-1/2 -translate-y-1/2 -rotate-[0.07deg] text-beige-400 lg:left-[calc(50%+50px)] lg:top-[calc(50%+130px)]'>
          l
        </h1>
        <h1 className='title-i absolute left-[calc(50%+65px)] top-[calc(50%+50px)] -translate-x-1/2 -translate-y-1/2 -rotate-[5.17deg] text-purple-300 lg:left-[calc(50%+230px)] lg:top-[calc(50%+130px)]'>
          i
        </h1>
        <h1 className='title-third-o absolute left-[calc(50%+135px)] top-[calc(50%+50px)] -translate-x-1/2 -translate-y-1/2 rotate-[11.23deg] text-purple-700 lg:left-[calc(50%+380px)] lg:top-[calc(50%+150px)]'>
          o
        </h1>
      </div>
    </section>
  );
}
