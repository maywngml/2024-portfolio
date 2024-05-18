import { Intro, Introduction } from '@/components';

export default function Home() {
  return (
    <main>
      {/* TODO: NNN에 넣었던 스크롤 효과 추가? 아니면 gsap으로 스크롤 부드럽게 넘기는 효과 추가? */}
      <Intro />
      <Introduction />
    </main>
  );
}
