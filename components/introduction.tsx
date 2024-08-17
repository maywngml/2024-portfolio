import { Fragment } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import {
  introduction,
  experience,
  mbti,
  education,
  study,
  contacts,
  skills,
} from '@/data/introduction';
import type {
  Experience,
  Contact,
  Skill,
  SkillItem,
} from '@/types/introduction';

export default function Introduction() {
  return (
    <section
      className='flex min-h-fullHeight justify-center items-center px-5 py-7 lg:p-[50px]'
      id='introduction'
    >
      <div className='border border-black rounded-[10px] xl:max-w-[1500px]'>
        <div className='flex justify-between items-center px-2 py-1 border-b border-black lg:p-3'>
          <svg
            className='w-[55px] h-[15px] lg:w-[100px] lg:h-[25px]'
            xmlns='http://www.w3.org/2000/svg'
          >
            <circle
              className='fill-red-700'
              cx='13%'
              cy='50%'
              r='17%'
            />

            <circle
              className='fill-yellow-300'
              cx='50%'
              cy='50%'
              r='17%'
            />

            <circle
              className='fill-green-500'
              cx='87%'
              cy='50%'
              r='17%'
            />
          </svg>
          <p className='uppercase font-black lg:text-xl'>introduction</p>
        </div>
        <div className='lg:flex'>
          <div className='lg:border-r lg:border-black lg:basis-1/2 xl:basis-3/5'>
            <article className='px-4 py-5 border-b border-black lg:px-6 lg:py-7'>
              <p className='mb-5 uppercase font-black text-lg leading-4 lg:text-2xl lg:leading-6'>
                juhee
              </p>
              <p className='leading-normal lg:text-xl'>{introduction}</p>
              {/* TODO: 이력서 파일 추가 */}
              <Link
                className='flex justify-between items-center w-[136px] px-5 mt-5 py-1 bg-purple-100 lg:w-[156px] lg:mt-20 lg:px-5 lg:py-3'
                href='/pdf/서주희_이력서.pdf'
                target='_blank'
              >
                <span className='uppercase font-bold text-purple-800 lg:text-xl'>
                  resume
                </span>
                <ArrowDownTrayIcon className='w-[18px] h-[18px] stroke-purple-800 stroke-[3px] lg:w-5 lg:h-5' />
              </Link>
            </article>
            <div className='flex flex-col xl:flex-row'>
              <div className='flex xl:basis-2/3'>
                <div className='border-r border-black basis-1/2'>
                  <article className='px-4 py-5 border-b border-black lg:px-6 lg:py-7'>
                    <p className='mb-5 uppercase font-black text-lg leading-4 lg:text-2xl lg:leading-6'>
                      experience
                    </p>
                    {experience.map(
                      ({ period, name, job }: Experience, index) => (
                        <Fragment key={`experience-${index}`}>
                          <span className='mt-1 mr-1 leading-normal lg:text-xl lg:leading-normal'>
                            {name}
                          </span>
                          <span className='leading-normal lg:text-xl lg:leading-normal'>
                            {job}
                          </span>
                          <p className='mb-2 text-sm leading-normal lg:text-base lg:leading-normal'>
                            {period}
                          </p>
                        </Fragment>
                      )
                    )}
                  </article>
                  <article className='px-4 py-5 lg:px-6 lg:py-7'>
                    <p className='mb-5 uppercase font-black text-lg leading-4 lg:text-2xl lg:leading-6'>
                      mbti
                    </p>
                    <p className='uppercase lg:text-xl lg:leading-normal'>
                      {mbti}
                    </p>
                  </article>
                </div>
                <div className='basis-1/2 xl:border-r xl:border-black'>
                  <article className='px-4 py-5 border-b border-black lg:px-6 lg:py-7'>
                    <p className='mb-5 uppercase font-black text-lg leading-4 lg:text-2xl lg:leading-6'>
                      education
                    </p>
                    <span className='block leading-4 lg:inline lg:mr-2 lg:text-xl lg:leading-normal'>
                      {education.name}
                    </span>
                    <span className='leading-4 lg:text-xl lg:leading-normal'>
                      {education.major}
                    </span>
                    <p className='mb-1 text-sm leading-normal lg:mb-0 lg:text-base lg:leading-normal'>
                      {education.period}
                    </p>
                  </article>
                  <article className='px-4 py-5 lg:px-6 lg:py-7'>
                    <p className='mb-5 uppercase font-black text-lg leading-4 lg:text-2xl lg:leading-6'>
                      study
                    </p>
                    <Link
                      className='flex justify-between items-center w-[100px] lg:w-[120px]'
                      target='_blank'
                      href={study.reference.url}
                    >
                      <Image
                        src={study.reference.icon}
                        width={20}
                        height={20}
                        alt='스터디 레퍼런스 아이콘'
                      />
                      <span className='lg:text-xl'>
                        {study.reference.title}
                      </span>
                    </Link>
                    <p className='text-sm lg:text-base lg:leading-normal'>
                      {study.period}
                    </p>
                  </article>
                </div>
              </div>
              <article className='px-4 py-5 border-t border-b border-black lg:px-6 lg:py-7 lg:border-b-0 xl:basis-1/3 xl:border-t-0'>
                <p className='mb-5 uppercase font-black text-lg leading-4 lg:text-2xl lg:leading-6'>
                  contact
                </p>
                {contacts.map(({ title, content, url }: Contact, index) => (
                  <Fragment>
                    <p className='uppercase font-medium lg:mt-1 lg:text-xl lg:leading-normal'>
                      {title}
                    </p>
                    <Link
                      className='lg:mt-1 lg:text-xl lg:leading-normal'
                      href={url}
                      target='_blank'
                      key={`contact-${index}`}
                    >
                      {content}
                    </Link>
                  </Fragment>
                ))}
              </article>
            </div>
          </div>
          <div className='px-4 py-5 lg:basis-1/2 lg:px-6 lg:py-7 xl:basis-2/5'>
            <p className='mb-5 uppercase font-black text-lg leading-4 lg:text-2xl lg:leading-6'>
              skills
            </p>
            {skills.map(({ type, items }: Skill, outerIndex: number) => (
              <div
                className='mt-7 first-of-type:mt-0'
                key={`skill-${outerIndex}`}
              >
                <p className='mb-2 font-medium lg:text-xl'>{type}</p>
                {items.map(({ icon, title }: SkillItem, innerIndex: number) => (
                  <div
                    className='inline-flex items-center gap-1 mr-3 lg:mr-4 lg:gap-2'
                    key={`item-${outerIndex}-${innerIndex}`}
                  >
                    <Image
                      src={icon}
                      width={30}
                      height={30}
                      alt={`${title} 로고`}
                    />
                    <span className='text-sm lg:text-base'>{title}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
