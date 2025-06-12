import type { Project } from '@/types/project';

export const projects: Project[] = [
  // {
  //   title: 'nnn dao',
  //   stacks: [
  //     'Next.js',
  //     'React',
  //     'HTML',
  //     'CSS',
  //     'TypeScript',
  //     'Tailwind CSS',
  //     'MongoDB',
  //     'Wagmi',
  //     'GSAP',
  //   ],
  //   duration: {
  //     start: new Date('2024-03'),
  //     end: new Date('2024-04'),
  //   },
  //   teamSize: '프론트엔드 1명',
  //   overview:
  //     '게임 및 엔터테인먼트 콘텐츠 제작과 소비를 혁신하는 NNN 서비스의 DAO(탈중앙화 자율 조직) 웹 애플리케이션을 개발했습니다. 애플리케이션의 초기 구축을 담당했으며, DAO 소개와 멤버 조회 및 신청 기능을 구현했습니다.',
  //   details: [
  //     '해당 프로젝트에서는 Next.js의 기본 placeholder 기능이 로컬 이미지에만 적용되는 한계를 해결하기 위해 placeholder 이미지를 자동으로 제공하는 이미지 컴포넌트를 개발했습니다. MongoDB와 Next.js API Routes를 사용해 멤버 목록 조회 API를 구현하고, 커서 기반 페이징을 적용하여 데이터 조회 성능을 최적화했습니다. 또한, ISR을 적용하여 멤버 상세 페이지의 최신 데이터를 주기적으로 반영하며 SSR 대비 성능을 개선했습니다.',
  //     '프로젝트를 진행하면서 확장 가능성을 고려한 시스템 설계의 필요성을 한번 더 깨닫게 되었습니다.',
  //   ],
  //   achievements: [
  //     // TODO: 수정
  //     '프로젝트를 성공적으로 런칭하여 예비 사용자들에게 NNN DAO에 대한 정보를 효과적으로 알렸습니다.',
  //   ],
  //   image: {
  //     url: '/images/projects/nnn.png',
  //   },
  //   website: 'https://dao.nnn.so',
  // },
  // {
  //   title: 'apetche',
  //   stacks: [
  //     'CSS',
  //     'PHP',
  //     'Javascript',
  //     'Wordpress',
  //     'Woocommerce',
  //     '코드엠샵 플러그인',
  //   ],
  //   duration: {
  //     start: new Date('2024-01'),
  //     end: new Date('2024-03'),
  //   },
  //   teamSize: '프론트엔드 1명',
  //   overview: `반려동물 용품 전문 기업 '아페체'의 자사몰 웹사이트를 신규 개발하였습니다.`,
  //   details: [
  //     '워드프레스와 우커머스를 사용하여 쇼핑몰 플랫폼을 구축하였습니다. 코드엠샵 플러그인과 우커머스를 활용해 고객 관리 및 결제 연동 등 기본 쇼핑몰 기능을 구현했습니다.',
  //     '기획서에 따라 테마를 커스터마이징하여 사용자 경험(UX)을 개선하였으며, 쇼핑몰 운영자를 위한 상품, 고객, 주문 관리 방법 등을 포함한 운영 가이드를 작성하여 운영 효율을 높였습니다.',
  //   ],
  //   achievements: [
  //     '테마 커스터마이징과 운영 가이드 작성을 통해 사용자 경험과 쇼핑몰 운영 효율성을 개선했습니다.',
  //   ],
  //   image: { url: '/images/projects/apetche.png' },
  //   website: 'https://apetche.com',
  // },
  {
    title: '가상자산 투자 커뮤니티 웹',
    stacks: [
      'Next.js',
      'React',
      'HTML',
      'CSS',
      'TypeScript',
      'Tailwind CSS',
      'MongoDB',
      'Wagmi',
      'GSAP',
    ],
    duration: {
      start: new Date('2023-12'),
      end: new Date('2024-04'),
    },
    // teamSize: 'FE 1명, BE/BlockChain 1명, PM 1명, Designer 1명',
    overview:
      '블록체인 기술을 활용한 가상 자산 투자 커뮤니티 서비스의 초기 버전을 개발했습니다.',
    details: [
      '해당 프로젝트에서는 NFT 구매 과정을 간소화하여 사용자의 조작을 최소화하고 직관적인 구매 경험을 설계하는 것에 중점을 두었습니다.',
      '사용자가 NFT를 구매하기 위해서는 화이트리스트 대상 여부, 추천인 코드 유효성, 구매 가능 개수 확인 등의 절차가 필요했습니다. 이를 한 번의 구매 버튼 클릭만으로 유기적으로 실행되도록 구현해 사용자 편의성을 극대화했습니다.',
      '또한, 기존에는 노션에서 API 스펙을 관리하고 Postman으로 테스트해야 하는 번거로움이 있었습니다. 이를 해결하기 위해 Swagger를 도입하여 API 문서를 체계적으로 관리하고 테스트를 더욱 쉽게 수행할 수 있도록 개선했습니다.',
      '이 외에도 API 수정과 신규 기능 개발을 지원해 협업 효율성을 높일 수 있었습니다.',
      '추가로, 각 API와 블록체인 지갑 연결, 트랜잭션 연동 과정에서 반환되는 에러 객체가 서로 달라 일관된 에러처리가 어려웠습니다. 이를 해결하기 위해 공통 에러 객체를 생성하고, 블록체인 지갑 연결과 트랜잭션 연동 시 catch절에서 각 상황에 맞는 메시지를 담은 에러 객체를 반환하도록 했습니다. 또한, API에서도 클라이언트에 전달하는 에러 응답을 통일해 사용자에게 오류 사항과 대응 방안을 명확히 제공할 수 있도록 했습니다.',
    ],
    achievements: [
      'NFT 구매 과정을 간소화하여 사용자 조작을 최소화하고 직관적인 구매 경험을 설계',
    ],
  },
  // {
  //   title: 'yaylabs',
  //   stacks: [
  //     'Next.js',
  //     'React',
  //     'HTML',
  //     'CSS',
  //     'TypeScript',
  //     'Tailwind CSS',
  //     'Redux Toolkit',
  //     'GSAP',
  //   ],
  //   duration: {
  //     start: new Date('2023-12'),
  //     end: new Date('2024-01'),
  //   },
  //   teamSize: '프론트엔드 1명',
  //   overview:
  //     '예이랩스에 대한 소개와 팀원 정보, 채용 공고 등을 소개하는 예이랩스 자사 공식 웹사이트를 개발했습니다.',
  //   details: [
  //     '자사 공식 사이트인 만큼 디자인과 애니메이션에 있어 자유도가 높아, 디자이너와 애니메이션에 대한 아이디어를 적극적으로 주고받으며 좋은 결과물을 만들어낼 수 있었습니다.',
  //     'GSAP를 활용하여 스크롤 위치에 따라 요소가 회전하며 움직이는 스크롤 애니메이션과 콘텐츠가 연속적으로 흐르는 marquee 애니메이션을 개발했습니다. 이 외에도 역동적이고 시각적으로 풍부한 사이트를 만들기 위해 다양한 애니메이션을 적용했습니다.',
  //   ],
  //   achievements: [
  //     'SEO 최적화를 통해 회사 이름 키워드로 구글 검색 순위 1위를 달성하고 웹사이트 배포 후 1명의 지원자를 유도해 채용까지 연결시켰습니다.',
  //   ],
  //   image: {
  //     url: '/images/projects/yaylabs.png',
  //   },
  //   website: 'https://yaylabs.io',
  // },
  {
    title: 'ape universe',
    stacks: [
      'Next.js',
      'React',
      'HTML',
      'CSS',
      'TypeScript',
      'Tailwind CSS',
      'MongoDB',
      'Wagmi',
      'GSAP',
    ],
    duration: {
      start: new Date('2023-08'),
      end: new Date('2023-11'),
    },
    // teamSize: '프론트엔드 1명',
    overview:
      'BAYC 홀더와 창작자의 협업을 지원하는 웹 서비스를 개발했습니다. (APE UNIVERSE는 Yuga Labs로부터 MBA 라이센스를 부여받은 프로젝트입니다.)',
    details: [
      'APE UNIVERSE에서는 GSAP를 활용하여 로켓 발사, 부저 클릭, 행성 이동 등의 애니메이션을 개발해 역동적인 사용자 경험을 제공했습니다.',
      '특히, 행성 이동 애니메이션의 경우 초기 로직 설계에서 어려움을 겪었지만, 각 행성에 개별적으로 애니메이션을 적용하고 진행도를 조정하는 방식을 채택해 자연스러운 애니메이션을 구현했습니다.',
      '또한, SEO 최적화를 통해 Lighthouse 검사에서 모든 페이지가 SEO 점수 100점을 기록했습니다.',
      '해당 프로젝트에서는 BAYC 홀더와 창작자의 참가 신청 기능이 포함되어 있었는데 이때 생성된 데이터는 데이터베이스와 Google Sheets에 이중 저장하여 비개발 직군도 데이터를 쉽게 확인하고 관리할 수 있도록 했습니다.',
      '배포 이후, 초기 진입 시 표시되는 동영상이 재생되지 않는 문제가 발생했으나, 빠르게 원인을 분석하여 Cloudflare CDN 오류임을 파악했습니다. 이후 Youtube 영상으로 대체하여 원활한 서비스 제공이 가능하도록 대처했습니다.',
    ],
    achievements: ['GSAP를 활용한 반응형 애니메이션 개발로 시각적 몰입감 강화'],
    image: {
      url: '/images/projects/ape-universe.png',
    },
    website: 'https://apeuniversebystarboys.xyz',
  },
  {
    title: 'artivist',
    stacks: [
      'Next.js',
      'React',
      'HTML',
      'CSS',
      'TypeScript',
      'Tailwind CSS',
      'Redux Toolkit',
      'MongoDB',
      'GSAP',
    ],
    duration: {
      start: new Date('2023-04'),
      end: new Date('2023-07'),
    },
    // teamSize: '프론트엔드 1명',
    overview:
      '전시, 작가 정보 등을 전달하는 브랜드 중심의 공식 웹사이트를 개발했습니다.',
    details: [
      '이 프로젝트는 마크업부터 기능 구현까지 모든 과정을 직접 경험한 첫 번째 프로젝트였습니다. 반응형 웹을 구현하여 다양한 기기에서 일관된 사용자 경험을 제공했으며, 스크롤 기반 이미지 시퀀스 애니메이션을 구현해 몰입감 있는 사용자 경험을 제공했습니다.',
      '초기에는 SSR을 적용했지만, 개발 서버에 배포한 뒤 점검 과정에서 페이지 로드 시간이 4초가 걸리는 문제를 발견했습니다. 원인을 분석하며 렌더링 방식에 대해 더 깊이 이해할 수 있었고, SSG로 전환한 결과 페이지 로드 시간을 1초로 단축할 수 있었습니다.',
      '또한, Tailwind CSS를 도입하여 빠르고 효율적인 스타일링을 적용했고, Git 브랜치 전략을 수립해 코드 관리의 효율성을 높여 프로젝트를 체계적으로 운영했습니다.',
    ],
    achievements: ['세련된 애니메이션 및 UI 구현으로 작가 계약 성사에 기여'],
    image: {
      url: '/images/projects/artivist.png',
    },
    website: 'https://artivistglobal.com',
  },
  // {
  //   title: "골프존앨범 어드민 웹",
  //   stacks: ["React", "HTML", "CSS", "Javascript"],
  //   duration: {
  //     start: new Date("2021-11"),
  //     end: new Date("2022-02"),
  //   },
  //   overview: "골프존앨범 서비스의 어드민 웹을 개발했습니다.",
  //   details: [
  //     "이 프로젝트는 구성원들의 업무 생산성을 향상하는 데 중점을 두고 진행되었습니다. 기존에는 KPI 지표 보고서를 작성할 때, Google Analytics에서 데이터를 확인한 후 수치를 일일이 엑셀에 입력해야 하는 비효율적인 작업이 필요했습니다. 이를 개선하기 위해 KPI 데이터를 표 형식으로 시각화해 한눈에 확인할 수 있도록 했으며, 엑셀 변환 기능을 추가해 작업시간을 95% 이상 단축했습니다.",
  //     "기존에는 홀인원 기록을 조회하기 위해 담당자가 골프장 직원과 직접 커뮤니케이션을 해야 하는 번거로움이 있었습니다. 이를 해결하기 위해 홀인원 기록 조회 페이지를 개발해 데이터 접근성을 높이고, 담당자의 업무 부담을 줄일 수 있었습니다.",
  //     "골프존앨범 서비스의 사용자 만족도를 높이기 위해 베스트 피드 콘텐츠 관리 페이지를 신규 구축했습니다. 이를 통해 관리자가 베스트 피드를 직접 운영할 수 있도록 지원했으며, 사용자들이 더욱 다양한 콘텐츠를 즐길 수 있도록 했습니다.",
  //   ],
  //   achievements: ["데이터 관리 기능 개선으로 전반적인 업무 효율성 향상"],
  // },
  // {
  //   title: 'starboys',
  //   stacks: [
  //     'Next.js',
  //     'React',
  //     'HTML',
  //     'CSS',
  //     'TypeScript',
  //     'SWR',
  //     'NextAuth',
  //     'Wagmi',
  //     'MongoDB',
  //     'Moralis',
  //     'GSAP',
  //   ],
  //   overview:
  //     '예이랩스의 첫 NFT DAO 프로젝트인 스타보이즈의 공식 웹사이트를 전면 리뉴얼하는 작업을 맡아 진행했습니다.',
  //   details: '
  //     '기존 에이전시에서 작성된 HTML, CSS, jQuery 기반의 코드를 Next.js로 리팩토링하여 성능을 최적화하고 유지보수성을 향상시켰습니다.',
  //     'NextAuth와 Wagmi를 통해 사용자 인증 및 지갑 연동 기능을 구현하여 보안성을 강화했습니다. 또한, 서명 기능을 도입하여 사용자의 인증 절차를 강화하고 사용자 데이터를 안전하게 관리했습니다.',
  //     'Web3 api 라이브러리 Morails를 사용해 스타보이즈 홀더들이 보유한 NFT 목록과 공동 Vault에 담긴 자산을 편리하게 확인할 수 있도록 구현했습니다.',
  //     '데이터 패칭을 위한 리액트 훅 라이브러리 SWR을 사용하여 전역 상태 관리를 간소화하여 컴포넌트 간 데이터 공유를 보다 효율적으로 처리했습니다.',
  //   ],
  //   achievements: ['수정'],
  //   image: ['/images/projects/starboys-nft.png'],
  //   website: 'https://starboysnft.io',
  // },
  {
    title: '산타 우체통',
    stacks: [
      'Next.js',
      'React',
      'HTML',
      'CSS',
      'TypeScript',
      'Tailwind CSS',
      'React Query',
      'AWS Lambda',
      'MongoDB',
    ],
    duration: {
      start: new Date('2024-12'),
      end: new Date('2024-12'),
    },
    // teamSize: '프론트엔드 1명',
    overview:
      'AI 산타에게 편지를 쓰고, 크리스마스에 특별한 답장을 받을 수 있는 서비스입니다.',
    details: [
      '해당 프로젝트는 지인들에게 소소한 크리스마스 선물을 전하기 위해 기획한 서비스로 기획부터 디자인, 개발까지 전 과정을 혼자 수행했습니다.',
      '잘못된 이메일 주소 입력을 방지하기 위해 JWT 토큰과 Nodemailer를 활용한 이메일 인증 기능을 구현했습니다. 또한, 산타의 답장은 OpenAI API를 통해 자동 생성하고, 따뜻한 위로와 공감을 담기 위해 칭찬, 공감, 격려 중심의 프롬프트를 설계했습니다.',
      '예약된 메일이 안정적으로 전송될 수 있도록 AWS Lambda와 EventBridge를 활용해 예약 발송 기능을 구현했습니다. 초기에는 Vercel의 Cron Job을 고려했지만, 무료 플랜에서 작업 실행 시간이 10초로 제한된다는 점을 확인하고 AWS로 전환했습니다.',
      `약 100건의 예약 메일 발송 테스트를 진행하며 안정성을 검증한 뒤 서비스를 배포했습니다. 이후, 사용자 요청을 반영하여 '내 편지 확인' 페이지와 편지 저장 기능을 추가했으며, 안내 메일을 통해 사용자의 만족도를 더욱 높일 수 있도록 개선했습니다.`,
    ],
    achievements: ['5일 동안 방문자 수 515명, 참여자 수 63명 달성'],
    image: {
      url: '/images/projects/santa-mailbox.png',
    },
    website: 'https://santa-mailbox.site/',
    github: 'https://github.com/maywngml/santa-mailbox',
    figma:
      'https://www.figma.com/design/vmUugDyB9ebHL8VWxGXtRD/%ED%81%AC%EB%A6%AC%EC%8A%A4%EB%A7%88%EC%8A%A4-%EC%9A%B0%EC%B2%B4%ED%86%B5?node-id=0-1&t=TUGFJmOKlUcDSfWS-1',
  },
  // {
  //   title: 'portfolio',
  //   stacks: [
  //     'Next.js',
  //     'React',
  //     'HTML',
  //     'CSS',
  //     'TypeScript',
  //     'Tailwind CSS',
  //     'GSAP',
  //   ],
  //   duration: {
  //     start: new Date('2024-05'),
  //     end: new Date('2024-05'),
  //   },
  //   teamSize: '프론트엔드 1명',
  //   overview:
  //     '제 포트폴리오 용도로 만든 웹사이트이며 현재 보고 계신 이 사이트입니다.',
  //   details: [
  //     '이 프로젝트는 제 자신을 PR하기 위한 사이트로, 디자인부터 신중하게 작업했습니다.',
  //     '초기에는 올해의 UI/UX 트렌드를 반영해 3D 에셋을 메인 요소로 사용하려 했으나, 3D 에셋과 어울리는 레이아웃을 구성하는 것이 쉽지 않아 컨셉을 변경했습니다. 작업하는 과정에서 즐거움을 느낄 수 있도록 귀엽고 따뜻한 컨셉을 메인으로 잡았으며, 키 컬러로는 제가 좋아하는 보라색 계열을 선택했습니다. 메인 섹션에는 텍스트와 에셋에 애니메이션을 추가하여 귀여움을 더욱 강조했습니다.',
  //     '가독성을 고려한 레이아웃 구성과 내용 정리가 쉽지 않았지만, 모든 과정을 제 의도대로 진행할 수 있어 매우 즐거운 프로젝트였습니다.',
  //   ],
  //   achievements: [
  //     '이 사이트를 성공적으로 배포하여 여러분에게 저를 소개할 수 있었습니다.',
  //   ],
  //   image: {
  //     url: '/images/projects/portfolio.png',
  //   },
  //   website: 'https://juhee-portfolio.vercel.app/',
  //   github: 'https://github.com/maywngml/2024-portfolio',
  //   figma:
  //     'https://www.figma.com/design/uL3Vu4UTsDCRXTydn1EXxB/%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4?node-id=247-3&t=rl3yLsTubONjvBUG-1',
  // },
];
