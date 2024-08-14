import type { Project } from '@/types/project';

export const projects: Project[] = [
  {
    title: 'nnn dao',
    stacks: [
      'NextJS',
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
      'NNN DAO는 크리에이터, 투자자, 게이머를 위한 탈중앙화된 거버넌스 네트워크로, 게임 및 엔터테인먼트 콘텐츠의 제작, 투자, 소비 방식을 혁신하는 플랫폼입니다. 이 프로젝트에서는 NNN DAO 시스템을 소개하고, DAO 멤버 신청 기능을 제공하는 웹 애플리케이션을 개발했습니다.',
    details: [
      '이전에 진행했던 다양한 프로젝트에서 얻은 인사이트를 반영하기 위해 노력했습니다.',
      'Next.js 서버 컴포넌트를 최대한 활용하기 위해 컴포넌트를 세분화하여 코드의 재사용성과 유지보수성을 높였고, Plaiceholder를 사용해 이미지의 blurDataURL과 크기, 높이를 사전에 설정하는 이미지 서버 컴포넌트를 구현하여 레이아웃 시프트 현상을 최소화하고 UX를 개선했습니다.',
      '이전 프로젝트에서의 경험을 바탕으로 Wagmi를 활용해 블록체인 지갑 연결 기능을 구현했으며, MongoDB와 Google APIs를 사용해 DAO 멤버 신청 기능을 개발했습니다. 또한, GSAP으로 텍스트 슬라이드 인 애니메이션을 구현하고, 페이드 인과 바운스 애니메이션은 CSS로 구현했습니다.',
    ],
    achievements: [
      // TODO: 수정
      '프로젝트를 성공적으로 런칭하여 예비 사용자들에게 NNN DAO에 대한 정보를 효과적으로 알릴 수 있었습니다.',
    ],
    thumbnails: [
      '/images/projects/nnn.png',
      '/images/projects/nnn-detail-1.png',
      '/images/projects/nnn-detail-2.png',
      '/images/projects/nnn-detail-3.png',
      '/images/projects/nnn-detail-4.png',
    ],
  },
  {
    title: 'sage',
    stacks: [
      'NextJS',
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
      'AI 기술과 커뮤니티를 통해 현명한 가상 자산 투자를 돕는 플랫폼, SAGE의 공식 웹 애플리케이션을 개발했습니다.',
    details: [
      '해당 프로젝트에서는 SAGE 노드를 구매할 수 있는 민팅 기능을 처음 구현했는데 금전 거래가 이루어지는 만큼 특히 신중을 기해 작업했습니다. 사용자가 세일 대상인지, 블록체인 지갑 네트워크가 올바르게 설정되었는지 등을 노드 구매 과정의 각 단계에서 철저히 검증하여 거래가 잘못 이루어지지 않도록 했습니다.',
      '여러 트랜잭션이 처리되는 상황에서는 트랜잭션 순서를 철저히 관리했으며, API와 스마트 컨트랙트와 상호작용하는 과정에서 발생할 수 있는 다양한 에러 시나리오를 고려해 공통 에러 핸들링 로직을 구축하고, 사용자에게 적절한 공지를 제공했습니다.',
      '또한, 간단한 API 수정과 스웨거 문서화 작업도 함께 진행하며, 백엔드 개발과도 조금 친해질 수 있었습니다.',
    ],
    achievements: [
      // TODO: 좀 더 구체적으로 수정
      '스마트 컨트랙트와의 상호작용을 통해 민팅 트랜잭션 로직을 구현하여 블록체인 기술에 대한 이해를 높일 수 있었습니다.',
    ],
    thumbnails: [
      '/images/projects/sage-detail-1.png',
      '/images/projects/sage-detail-2.png',
      '/images/projects/sage-detail-3.png',
      '/images/projects/sage-detail-4.png',
      '/images/projects/sage-detail-5.png',
      '/images/projects/sage-detail-6.png',
    ],
  },
  // {
  //   title: 'apetche',
  //   stacks: ['Wordpress', 'Woocommerce', '코드엠샵 플러그인'],
  //   overview: `반려동물 용품 전문 기업 '아페체'의 자사몰 웹사이트를 신규 개발하였습니다.`,
  //   details: '
  //     '워드프레스와 우커머스, 코드엠샵 이커머스 플러그인을 활용하여 쇼핑몰의 핵심 기능인 상품 카테고리/상세 페이지, 장바구니/결제 프로세스, 고객 리뷰 시스템 등의 기반을 마련했습니다.',
  //     '플러그인의 다양한 설정과 커스터마이징을 통해 온라인 스토어의 기본 골격을 구축하고 관리자/사용자 인터페이스를 조율했습니다.',
  //   ],
  //   achievements: [
  //     '웹사이트를 성공적으로 개발 및 런칭하여 홍콩에서 개최된 BAYC 행사에서 웹사이트를 선보이며 글로벌 커뮤니티와 소통할 수 있는 기회를 가졌습니다.',
  //   ],
  //   thumbnails: ['/images/projects/apetche.png'],
  //   website: 'https://apetche.com',
  // },
  {
    title: 'ape universe',
    stacks: [
      'NextJS',
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
      '스토리텔링 콘텐츠의 가치를 중요하게 여기는 글로벌 프로젝트/제품을 위해 브랜드 스토리텔링 전략을 함께 실행하는 APE UNIVERSE의 공식 웹애플리케이션을 개발했습니다. (APE UNIVERSE는 Yuga Labs로부터 MBA 라이센스를 부여받은 프로젝트입니다.)',
    details: [
      'APE UNIVERSE는 다양한 애니메이션을 통해 인터랙티브한 웹을 개발하는 데 중점을 두었습니다. GSAP을 활용하여 버튼 클릭 모션, 로켓 발사, 행성 이동 등의 애니메이션을 구현하여 웹에 생동감을 부여했습니다. 또한, 모든 사용자에게 일관된 경험을 제공하기 위해 애니메이션을 반응형으로 구현했습니다.',
      'Wagmi를 사용해 블록체인 지갑 연결과 네트워크 변경 등의 이더리움 dApp 기본 기능을 구현했으며, MongoDB와 Google APIs를 활용하여 BAYC 홀더 및 창작자 프로젝트 신청 기능을 구현했습니다. BAYC 홀더 여부 확인은 Moralis를 통해 진행했습니다.',
    ],
    achievements: [
      '프로젝트를 성공적으로 런칭하여 23년 11월 홍콩에서 개최된 BAYC 행사에서 글로벌 커뮤니티와 소통할 수 있는 기회를 가졌습니다.',
    ],
    thumbnails: ['/images/projects/ape-universe.png'],
    website: 'https://apeuniversebystarboys.xyz',
  },
  {
    title: 'yaylabs',
    stacks: [
      'NextJS',
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
      '자사 공식 사이트인 만큼 자유도가 높아, 디자이너와 애니메이션에 대한 아이디어를 적극적으로 주고받으며 좋은 결과물을 만들어낼 수 있었습니다.',
      'GSAP을 활용하여 스크롤 위치에 따라 요소가 회전하며 움직이는 스크롤 애니메이션과, 콘텐츠가 컨베이어 벨트처럼 한쪽으로 흘러가는 무한 스크롤 애니메이션을 개발했습니다. 이 외에도 역동적이고 다채로운 사이트를 만들기 위해 다양한 애니메이션을 적용했습니다.',
    ],
    achievements: [
      '회사 소개, 채용 공고 등 자사에 대한 다양한 정보를 한 곳에서 명확하게 제공함으로써 클라이언트와 지원자의 이해를 돕고 효율적인 커뮤니케이션 채널을 마련했습니다.',
    ],
    thumbnails: ['/images/projects/yaylabs.png'],
    website: 'https://yaylabs.io',
  },
  {
    title: 'artivist',
    stacks: [
      'NextJS',
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
      end: new Date('2023-05'),
    },
    teamSize: '프론트엔드 1명',
    overview:
      '예술 후원회, 예술가 레지던시 프로그램, 전시 공간으로 구성된 예술 문화단체인 ARTIVIST 공식 웹 애플리케이션을 개발하였습니다.',
    details: [
      '처음으로 마크업부터 퍼블리싱, 기능 구현까지 모든 과정을 직접 진행한 프로젝트였습니다.',
      'GSAP을 활용해 이미지 시퀀스 스크롤 애니메이션을 구현하고, ResizeObserver를 사용해 브라우저 화면 리사이징에 대응하여 모든 사용자에게 일관된 경험을 제공했습니다.',
      '또한, Next.js의 API 라우트 기능과 MongoDB, Google APIs를 활용해 멤버십 신청 기능을 구현했습니다.',
      '잦은 기획 변경에 대응하기 위해 Git을 적극 활용하여 버전 관리를 체계적으로 진행했습니다.',
    ],
    achievements: [
      '프로젝트의 성공적인 런칭으로, 더스틴 옐린(Dustin Yellin)과 아고스티노(Agostino) 작가와의 레지던시 계약을 성공적으로 체결하여 전시를 성황리에 진행할 수 있었습니다.',
    ],
    thumbnails: ['/images/projects/artivist.png'],
    website: 'https://artivistglobal.com',
  },
  // {
  //   title: 'starboys',
  //   stacks: [
  //     'NextJS',
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
  //   thumbnails: ['/images/projects/starboys-nft.png'],
  //   website: 'https://starboysnft.io',
  // },
  {
    title: 'portfolio',
    stacks: [
      'NextJS',
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
    teamSize: '디자인 및 프론트엔드 1명',
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
    thumbnails: ['/images/projects/portfolio.png'],
    website: 'https://juhee-portfolio.vercel.app/',
    github: 'https://github.com/maywngml/2024-portfolio',
    figma:
      'https://www.figma.com/design/uL3Vu4UTsDCRXTydn1EXxB/%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4?node-id=247-3&t=rl3yLsTubONjvBUG-1',
  },
];
