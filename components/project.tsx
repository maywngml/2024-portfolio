import Link from 'next/link';
import { Tektur } from 'next/font/google';
import cn from 'clsx';
import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { ProjectImageSlider } from '@/components';
import type { Project } from '@/types/project';

interface ProjectProps {
  project: Project;
  index: number;
}

const tektur = Tektur({ subsets: ['latin'] });

export default function Project({ project, index }: ProjectProps) {
  const { title, stacks, overview, roles, achievements, thumbnails, website } =
    project;

  return (
    <section className='flex px-5 py-10 justify-center min-h-fullHeight lg:px-14 lg:py-16'>
      <div className='flex flex-1 flex-col border-y border-black lg:flex-row xl:max-w-[1500px]'>
        <div className='px-2 py-4 border-b border-black lg:px-10 lg:py-4 lg:basis-1/2 lg:border-r lg:border-b-0'>
          <p
            className={cn(
              tektur.className,
              'mb-2 uppercase font-black text-purple-700 text-[60px] leading-[60px] lg:text-[76px] lg:leading-[76px] xl:text-[96px]'
            )}
          >
            {index.toString().padStart(2, '0')}. {title}
          </p>
          <div className='flex flex-wrap mb-5 gap-3'>
            {stacks.map((stack, index) => (
              <p
                className='px-2 py-1 rounded-[100px] border border-gray-500 shadow-[4px_5px_0px_0px_#7a7a7a] font-bold text-xs text-gray-500 lg:px-3 lg:text-sm'
                key={`stack-${index}`}
              >
                {stack}
              </p>
            ))}
          </div>
          <p className='font-bold lg:text-xl'>OverView</p>
          <p className='mb-7 leading-normal lg:mb-20 lg:text-xl lg:leading-normal'>
            {overview}
          </p>
          <p className='font-bold lg:text-xl'>Key Roles</p>
          <ol className='pl-6 list-decimal lg:pl-7'>
            {roles.map((role, index) => (
              <li
                className='leading-normal lg:mb-1 lg:text-xl lg:leading-normal'
                key={`${title}-role-${index}`}
              >
                {role}
              </li>
            ))}
          </ol>
        </div>
        <div className='px-2 py-4 lg:px-10 lg:py-4 lg:basis-1/2'>
          <ProjectImageSlider
            title={title}
            images={thumbnails}
          />
          {website && (
            <Link
              className='flex gap-1 items-center'
              href={website}
              target='_blank'
            >
              <GlobeAltIcon className='w-[18px] h-[18px] lg:w-5 lg:h-5' />
              <span className='uppercase text-sm font-medium lg:text-base'>
                view website
              </span>
            </Link>
          )}
          <p className='mt-4 font-bold lg:mt-6 lg:text-xl'>
            Key Achievements & Results
          </p>
          <ol className='pl-6 list-decimal lg:pl-7'>
            {achievements.map((achievement, index) => (
              <li
                className='leading-normal lg:mb-1 lg:text-xl lg:leading-normal'
                key={`${title}-achievement-${index}`}
              >
                {achievement}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
