import Link from 'next/link';
import Image from 'next/image';
import { Tektur } from 'next/font/google';
import cn from 'clsx';
import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { ImageWithPlaceholder } from '.';
import { getFormattedDate, getMonthDifference } from '@/lib/utils/helpers';
import type { Project } from '@/types/project';

interface ProjectProps {
  project: Project;
  index: number;
}

const tektur = Tektur({ subsets: ['latin'] });

export default function Project({ project, index }: ProjectProps) {
  const {
    title,
    stacks,
    duration,
    // teamSize,
    overview,
    details,
    achievements,
    image,
    website,
    github,
    figma,
  } = project;

  return (
    <section className='flex px-7 py-10 justify-center min-h-fullHeight lg:px-14 lg:py-16'>
      <div
        className={`${
          image && 'flex flex-1 flex-col lg:flex-row'
        } border-y border-black xl:max-w-[1500px]`}
      >
        <article
          className={`${
            image && 'border-b border-black lg:border-r lg:border-b-0'
          } py-5 lg:py-7 lg:basis-1/2`}
        >
          <p
            className={cn(
              tektur.className,
              image && 'mb-8 lg:mb-10',
              'uppercase font-black text-[34px] leading-[34px] lg:text-[50px] lg:leading-[50px] xl:text-[60px] xl:leading-[60px]'
            )}
          >
            {index.toString().padStart(2, '0')}. {title}
          </p>
          {image && (
            <div className='relative mb-2 w-full h-[250px] md:h-[400px] lg:mb-3 lg:aspect-square xl:h-[500px]'>
              <ImageWithPlaceholder
                className='object-cover'
                src={image.url}
                fill
                sizes='100%'
                alt={`${title} 썸네일 이미지`}
              ></ImageWithPlaceholder>
            </div>
          )}
          <div className='flex flex-wrap gap-x-3 gap-y-2'>
            {website && (
              <Link
                className='flex gap-1 items-center underline decoration-purple-800'
                href={website}
                target='_blank'
              >
                <GlobeAltIcon className='w-6 h-6 stroke-purple-800' />
                <span className='uppercase text-base font-bold text-purple-800 lg:text-xl'>
                  view website
                </span>
              </Link>
            )}
            {github && (
              <Link
                className='flex gap-1 items-center underline decoration-purple-800'
                href={github}
                target='_blank'
              >
                <div className='flex justify-center w-6 h-5'>
                  <Image
                    src='/images/skills/github-purple.png'
                    width={20}
                    height={20}
                    alt='깃허브 아이콘'
                  />
                </div>
                <span className='uppercase text-base font-bold text-purple-800 lg:text-xl'>
                  view github
                </span>
              </Link>
            )}
            {figma && (
              <Link
                className='flex gap-1 items-center underline decoration-purple-800'
                href={figma}
                target='_blank'
              >
                <div className='flex justify-center w-6 h-5'>
                  <Image
                    src='/images/skills/figma-purple.png'
                    width={16}
                    height={20}
                    alt='피그마 아이콘'
                  />
                </div>
                <span className='uppercase text-base font-bold text-purple-800 lg:text-xl'>
                  view figma
                </span>
              </Link>
            )}
          </div>
        </article>
        <article
          className={`${image && 'lg:px-10'} py-5  lg:py-7 lg:basis-1/2`}
        >
          <div className='flex flex-wrap mb-8 gap-3 lg:mb-10 lg:mr-2'>
            {stacks.map((stack, index) => (
              <p
                className='px-2 py-1 rounded-[100px] border border-gray-500 shadow-[4px_5px_0px_0px_#7a7a7a] font-bold text-xs text-gray-500 lg:px-3 lg:text-sm'
                key={`stack-${index}`}
              >
                {stack}
              </p>
            ))}
          </div>
          {/* <p className='mb-2 font-bold text-xl leading-5 lg:text-2xl lg:leading-6'>
            Duration
          </p>
          <p className='mb-8 leading-normal lg:mb-10'>
            {getFormattedDate(duration.start)} ~{' '}
            {getFormattedDate(duration.end)} (
            {getMonthDifference(duration.start, duration.end)}개월)
          </p> */}
          <p className='mb-2 font-bold text-xl leading-5 lg:text-2xl lg:leading-6'>
            Overview
          </p>
          <p className='mb-8 leading-normal lg:mb-10'>{overview}</p>
          <p className='mb-2 font-bold text-xl leading-5 lg:text-2xl lg:leading-6'>
            Details
          </p>
          <div className='mb-8 lg:mb-10'>
            {details.map((detail, index) => (
              <p
                className='leading-normal mb-[6px] lg:mb-[10px]'
                key={`${project.title} 상세 설명 ${index}`}
              >
                {detail}
              </p>
            ))}
          </div>
          <p className='mb-2 font-bold text-xl leading-5 lg:text-2xl lg:leading-6'>
            Key Achievements & Results
          </p>
          {achievements.map((achievement, index) => (
            <p
              className='leading-normal lg:mb-1'
              key={`${title}-achievement-${index}`}
            >
              {achievement}
            </p>
          ))}
        </article>
      </div>
    </section>
  );
}
