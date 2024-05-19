import { Intro, Introduction, Project } from '@/components';
import { projects } from '@/data/project';

export default function Home() {
  return (
    <main>
      <Intro />
      <Introduction />
      {projects.map((project, index: number) => (
        <Project
          project={project}
          index={index + 1}
          key={`project-${index}`}
        />
      ))}
    </main>
  );
}
