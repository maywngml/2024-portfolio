import Link from 'next/link';
import Image from 'next/image';
import { Tektur } from 'next/font/google';
import cn from 'clsx';
import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { ProjectImageSlider } from '@/components';
import { getFormattedDate } from '@/lib/utils/helpers';
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
    teamSize,
    overview,
    details,
    achievements,
    thumbnails,
    website,
    github,
    figma,
  } = project;

  return (
    <section className='flex px-7 py-10 justify-center min-h-fullHeight lg:px-14 lg:py-16'>
      <div className='flex flex-1 flex-col border-y border-black lg:flex-row xl:max-w-[1500px]'>
        <article className='py-5 border-b border-black lg:py-7 lg:basis-1/2 lg:border-r lg:border-b-0'>
          <p
            className={cn(
              tektur.className,
              'mb-8 uppercase font-black text-[34px] leading-[34px] lg:mb-10 lg:text-[50px] lg:leading-[50px] xl:text-[60px] xl:leading-[60px]'
            )}
          >
            {index.toString().padStart(2, '0')}. {title}
          </p>
          <ProjectImageSlider
            title={title}
            images={thumbnails}
          />
          <div className='flex flex-wrap gap-x-3 gap-y-2'>
            {website && (
              <Link
                className='flex gap-1 items-center underline decoration-purple-800'
                href={website}
                target='_blank'
              >
                <GlobeAltIcon className='w-5 h-5 stroke-purple-800' />
                <span className='uppercase text-sm font-medium text-purple-800 lg:text-base'>
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
                <div className='flex justify-center w-5 h-5'>
                  <Image
                    src='/images/skills/github-purple.png'
                    width={18}
                    height={18}
                    alt='깃허브 아이콘'
                  />
                </div>
                <span className='uppercase text-sm font-medium text-purple-800 lg:text-base'>
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
                <div className='flex justify-center w-5 h-5'>
                  <Image
                    src='/images/skills/figma-purple.png'
                    width={12}
                    height={18}
                    alt='피그마 아이콘'
                  />
                </div>
                <span className='uppercase text-sm font-medium text-purple-800 lg:text-base'>
                  view figma
                </span>
              </Link>
            )}
          </div>
        </article>
        <article className='py-5 lg:px-10 lg:py-7 lg:basis-1/2'>
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
          <p className='mb-2 font-bold text-xl leading-5 lg:text-2xl lg:leading-6'>
            Duration & Team Size
          </p>
          <p className='mb-8 leading-normal lg:mb-10'>
            {getFormattedDate(duration.start)} ~{' '}
            {getFormattedDate(duration.end)} / {teamSize}
          </p>
          <p className='mb-2 font-bold text-xl leading-5 lg:text-2xl lg:leading-6'>
            OverView
          </p>
          <p className='mb-8 leading-normal lg:mb-10'>{overview}</p>
          <p className='mb-2 font-bold text-xl leading-5 lg:text-2xl lg:leading-6'>
            Details
          </p>
          <div className='mb-8 lg:mb-10'>
            {details.map((detail, index) => (
              <p
                className='leading-normal lg:mb-[6px]'
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
