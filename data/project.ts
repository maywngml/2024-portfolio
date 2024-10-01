import type { Project } from '@/types/project';

export const projects: Project[] = [
  {
    title: 'nnn dao',
    stacks: [
      'Next.js',
      'React',
      'HTML',
      'CSS',
      'Typescript',
      'TailwindCSS',
      'MongoDB',
      'Wagmi',
      'GSAP',
    ],
    duration: {
      start: new Date('2024-03'),
      end: new Date('2024-04'),
    },
    teamSize: '프론트엔드 1명',
    overview:
      '게임 및 엔터테인먼트 콘텐츠 제작과 소비를 혁신하는 NNN 서비스의 DAO(탈중앙화 자율 조직) 웹 애플리케이션을 개발했습니다. 애플리케이션의 초기 구축을 담당했으며, DAO 소개와 멤버 조회 및 신청 기능을 구현했습니다.',
    details: [
      '해당 프로젝트에서는 placeholder 이미지를 자동으로 제공하는 이미지 컴포넌트를 개발해 레이아웃 시프트 현상을 최소화하며 시각적 안정성을 향상했습니다. MongoDB와 Next.js API Routes를 사용해 멤버 목록 조회 API를 구현하고, 역할 기반 필터링 및 커서 기반 페이징을 적용하여 데이터 조회 성능을 최적화했습니다. 또한, ISR을 적용하여 멤버 상세 페이지의 최신 데이터를 주기적으로 반영하며 SSR 대비 성능을 개선했습니다.',
      '프로젝트를 진행하면서 확장 가능성을 고려한 시스템 설계의 필요성을 한번 더 깨닫게 되었습니다.',
    ],
    achievements: [
      // TODO: 수정
      '프로젝트를 성공적으로 런칭하여 예비 사용자들에게 NNN DAO에 대한 정보를 효과적으로 알렸습니다.',
    ],
    image: {
      url: '/images/projects/nnn.png',
    },
    website: 'https://dao.nnn.so',
  },
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
      'Typescript',
      'TailwindCSS',
      'MongoDB',
      'Wagmi',
      'GSAP',
    ],
    duration: {
      start: new Date('2023-11'),
      end: new Date('2024-01'),
    },
    teamSize: '프론트엔드 1명, 백엔드 및 블록체인 1명',
    overview:
      'AI 기술과 커뮤니티를 통해 현명한 가상 자산 투자를 돕는 플랫폼의 공식 웹 애플리케이션을 개발했습니다.',
    details: [
      '해당 프로젝트에서는 화이트리스트 확인 및 추천인 코드 유효성 검증 후, USDT 컨트랙트의 승인 트랜잭션을 처리하고 노드 컨트랙트의 민팅 트랜잭션을 진행하는 기능을 구현했습니다. 또한, 블록체인 지갑 주소와 구매한 노드 수 등 5가지 정보를 조회할 수 있는 대시보드 페이지를 개발했습니다. 추천인 코드 소유자의 지갑 주소를 조회하는 API를 추가로 구현했으며, 전체 API를 스웨거로 문서화하여 팀 내 개발 및 테스트 효율성을 크게 향상시켰습니다. 이 외에도 컨트랙트 메서드와 블록체인 지갑 연결, API 호출 결과를 통일된 에러 객체로 반환하여 디버깅과 사용자 피드백 처리를 개선했습니다.',
      '이 프로젝트를 통해 사용자 상호작용이 많은 경우 적절한 오류 메시지와 피드백을 제공하는 것이 매우 중요하다는 점을 다시 한번 확인할 수 있었습니다. 또한, 복잡한 기능일수록 코드 가독성에 주의하고, 단일 책임 원칙을 지키는 것이 필요함을 깨달았습니다.',
    ],
    achievements: [
      // TODO: 좀 더 구체적으로 수정
      '스마트 컨트랙트와의 상호작용을 통해 민팅 트랜잭션 로직을 구현하여 블록체인 기술에 대한 이해를 높일 수 있었습니다.',
    ],
  },
  {
    title: 'yaylabs',
    stacks: [
      'Next.js',
      'React',
      'HTML',
      'CSS',
      'Typescript',
      'TailwindCSS',
      'Redux Toolkit',
      'GSAP',
    ],
    duration: {
      start: new Date('2023-12'),
      end: new Date('2024-01'),
    },
    teamSize: '프론트엔드 1명',
    overview:
      '예이랩스에 대한 소개와 팀원 정보, 채용 공고 등을 소개하는 예이랩스 자사 공식 웹사이트를 개발했습니다.',
    details: [
      '자사 공식 사이트인 만큼 디자인과 애니메이션에 있어 자유도가 높아, 디자이너와 애니메이션에 대한 아이디어를 적극적으로 주고받으며 좋은 결과물을 만들어낼 수 있었습니다.',
      'GSAP를 활용하여 스크롤 위치에 따라 요소가 회전하며 움직이는 스크롤 애니메이션과 콘텐츠가 연속적으로 흐르는 marquee 애니메이션을 개발했습니다. 이 외에도 역동적이고 시각적으로 풍부한 사이트를 만들기 위해 다양한 애니메이션을 적용했습니다.',
    ],
    achievements: [
      'SEO 최적화를 통해 회사 이름 키워드로 구글 검색 순위 1위를 달성하고 웹사이트 배포 후 1명의 지원자를 유도해 채용까지 연결시켰습니다.',
    ],
    image: {
      url: '/images/projects/yaylabs.png',
    },
    website: 'https://yaylabs.io',
  },
  {
    title: 'ape universe',
    stacks: [
      'Next.js',
      'React',
      'HTML',
      'CSS',
      'Typescript',
      'TailwindCSS',
      'MongoDB',
      'Wagmi',
      'GSAP',
    ],
    duration: {
      start: new Date('2023-09'),
      end: new Date('2023-11'),
    },
    teamSize: '프론트엔드 1명',
    overview:
      '스토리텔링 콘텐츠의 가치를 중요하게 여기는 글로벌 프로젝트/제품을 위해 브랜드 스토리텔링 전략을 함께 실행하는 APE UNIVERSE의 공식 웹 애플리케이션을 개발했습니다. (APE UNIVERSE는 Yuga Labs로부터 MBA 라이센스를 부여받은 프로젝트입니다.)',
    details: [
      'APE UNIVERSE에서는 Wagmi를 활용해 다양한 지갑 커넥터를 통일된 인터페이스로 관리하여 사용자 경험을 개선했습니다. 또한, GSAP로 로켓 발사, 부저 클릭, 행성 이동 등의 애니메이션을 구현하며, 주요 브라우저에서 일관된 퍼포먼스를 유지했습니다. 프로젝트의 핵심 기능 중 하나인 홀더 신청 페이지는 블록체인 지갑 연결과 BAYC 소유 여부를 실시간으로 확인해 홀더들만 접근할 수 있도록 구현했습니다.',
      '이 프로젝트를 통해 지갑 내장 브라우저에서의 테스트를 거치며 크로스 브라우징의 중요성을 깨달았고, Cloudflare Stream 서비스 장애를 겪으면서 외부 서비스 의존도가 높을 때 발생할 수 있는 문제점을 직접 인식하게 되었습니다.',
    ],
    achievements: [
      '프로젝트를 성공적으로 런칭하여 23년 11월 홍콩에서 개최된 BAYC 행사에서 글로벌 커뮤니티와 소통할 수 있는 기회를 가졌습니다.',
    ],
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
      'Typescript',
      'TailwindCSS',
      'Redux Toolkit',
      'MongoDB',
      'GSAP',
    ],
    duration: {
      start: new Date('2023-04'),
      end: new Date('2023-06'),
    },
    teamSize: '프론트엔드 1명',
    overview:
      '예술 후원회, 예술가 레지던시 프로그램, 전시 공간으로 구성된 예술 문화단체인 ARTIVIST 공식 웹 애플리케이션을 개발하였습니다.',
    details: [
      '처음으로 마크업부터 기능 구현까지 모든 과정을 직접 경험한 프로젝트였습니다. PC와 모바일 모두에서 반응형 웹을 구현하여 다양한 기기에서 일관된 사용자 경험을 제공했으며 GSAP와 스크롤 기반 이미지 시퀀스 애니메이션을 통해 몰입감 있는 사용자 경험을 제공했습니다. MongoDB와 Next.js API Routes, Google APIs를 사용해 멤버십 신청서 제출 기능을 개발했습니다. 또한, getServerSideProps에서 getStaticProps로 전환하여 사이트의 진입 시간을 4초에서 1초로 단축하여 사용자 경험을 대폭 개선했습니다.',
      '프로젝트를 진행하며 getServerSideProps와 getStaticProps의 차이점을 깊이 이해하게 되었고, 이미지 placeholder 처리에 있어 더 효율적인 접근 방식을 고민하게 되었습니다. 또한, 기획 변경과 추가 요청 사항을 반영하는 과정에서 버전 관리의 중요성을 체감했습니다.',
    ],
    achievements: [
      '프로젝트의 성공적인 출시로 Dustin Yellin과 Agostino Iacurci 작가와의 레지던시 계약을 성공적으로 체결하여 전시를 성황리에 진행할 수 있었습니다.',
    ],
    image: {
      url: '/images/projects/artivist.png',
    },
    website: 'https://artivistglobal.com',
  },
  // {
  //   title: 'starboys',
  //   stacks: [
  //     'Next.js',
  //     'React',
  //     'HTML',
  //     'CSS',
  //     'Typescript',
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
    title: 'portfolio',
    stacks: [
      'Next.js',
      'React',
      'HTML',
      'CSS',
      'Typescript',
      'TailwindCSS',
      'GSAP',
    ],
    duration: {
      start: new Date('2024-05'),
      end: new Date('2024-05'),
    },
    teamSize: '프론트엔드 1명',
    overview:
      '제 포트폴리오 용도로 만든 웹사이트이며 현재 보고 계신 이 사이트입니다.',
    details: [
      '이 프로젝트는 제 자신을 PR하기 위한 사이트로, 디자인부터 신중하게 작업했습니다.',
      '초기에는 올해의 UI/UX 트렌드를 반영해 3D 에셋을 메인 요소로 사용하려 했으나, 3D 에셋과 어울리는 레이아웃을 구성하는 것이 쉽지 않아 컨셉을 변경했습니다. 작업하는 과정에서 즐거움을 느낄 수 있도록 귀엽고 따뜻한 컨셉을 메인으로 잡았으며, 키 컬러로는 제가 좋아하는 보라색 계열을 선택했습니다. 메인 섹션에는 텍스트와 에셋에 애니메이션을 추가하여 귀여움을 더욱 강조했습니다.',
      '가독성을 고려한 레이아웃 구성과 내용 정리가 쉽지 않았지만, 모든 과정을 제 의도대로 진행할 수 있어 매우 즐거운 프로젝트였습니다.',
    ],
    achievements: [
      '이 사이트를 성공적으로 배포하여 여러분에게 저를 소개할 수 있었습니다.',
    ],
    image: {
      url: '/images/projects/portfolio.png',
    },
    website: 'https://juhee-portfolio.vercel.app/',
    github: 'https://github.com/maywngml/2024-portfolio',
    figma:
      'https://www.figma.com/design/uL3Vu4UTsDCRXTydn1EXxB/%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4?node-id=247-3&t=rl3yLsTubONjvBUG-1',
  },
];
