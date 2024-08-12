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
    overview:
      'NNN은 전 세계 크리에이터, 디자이너, 개발자들이 다양한 창작물을 공유하고 협업하는 글로벌 런치패드입니다. 플랫폼의 의사결정에 참여할 수 있는 NNN의 DAO 시스템을 소개하고, DAO 멤버로 신청할 수 있는 웹 애플리케이션을 만들었습니다.',
    roles: [
      '웹을 시맨틱하게 구성하고, TailwindCSS를 활용해 다양한 디바이스에서 최적화된 반응형 웹사이트를 구축했습니다.',
      'Wagmi를 사용해 사용자 지갑 연결 기능을 적용하여, 사용자들이 손쉽게 지갑을 연결하고 사용할 수 있도록 했습니다.',
      'Plaiceholder를 활용해 blurDataUrl과 이미지 크기, 높이를 미리 설정하는 이미지 서버 컴포넌트를 구현하여, 레이아웃 시프트 현상을 최소화하고 UX를 개선했습니다.',
      '텍스트 슬라이드 인 애니메이션, 페이드 인, 바운스 등의 애니메이션을 적용했으며, React Lenis로 부드러운 스크롤링을 구현하여 사용자 경험을 향상시켰습니다.',
      'Next.js API 라우트, MongoDB, Google APIs를 활용하여 DAO 신청 데이터를 MongoDB와 Google 스프레드시트에 자동 저장하는 기능을 구현했습니다. 이를 통해 비개발자인 관리자도 쉽게 데이터를 확인할 수 있도록 했습니다.',
    ],
    achievements: [
      '웹사이트를 성공적으로 개발 및 런칭하여 홍콩에서 개최된 BAYC 행사에서 웹사이트를 선보이며 글로벌 커뮤니티와 소통할 수 있는 기회를 가졌습니다.',
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
    overview:
      'AI 기술과 커뮤니티를 통해 현명한 가상 자산 투자를 돕는 플랫폼, SAGE의 공식 웹 사이트를 개발하였습니다.',
    roles: [
      '투자 커뮤니티 플랫폼 SAGE의 초기 구축을 담당했습니다.',
      '클라이언트의 요구사항에 맞춰 PC버전으로만 퍼블리싱하고 간단한 스크롤 애니메이션을 적용했습니다.',
      'useState와 useEffect를 활용하여 SAGE 노드의 민팅 정보, 가격, 허용량 등의 상태를 관리하고 업데이트했습니다.',
      '사용자가 입력한 데이터를 기반으로 민팅 유효성을 검증하고, 스마트 컨트랙트와 상호작용하여 트랜잭션을 보내 민팅이 진행될 수 있도록 했습니다. 또한, 트랜잭션이 성공적으로 처리되었는지 확인하고 결과를 사용자에게 제공했습니다.',
      '다양한 에러 시나리오를 고려하여 공통 에러 로직을 구축하고, 에러가 발생할 시 사용자에게 적절하게 공지할 수 있도록 했습니다.',
    ],
    achievements: [
      '스마트 컨트랙트와의 상호작용을 통해 민팅 트랜잭션 로직을 구현하여 블록체인 기술을 효과적으로 활용해볼 수 있었습니다.',
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
  //   roles: [
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
    overview:
      '스토리텔링 콘텐츠의 가치를 중요하게 여기는 글로벌 프로젝트/제품을 위해 브랜드 스토리텔링 전략을 함께 실행하는 APE UNIVERSE의 웹사이트를 개발했습니다.',
    roles: [
      'HTML을 사용하여 웹사이트를 시맨틱하게 구성하고, TailwindCSS를 활용하여 반응형 디자인을 구현했습니다.',
      '모달창 열기/닫기 등의 UI 액션을 Context API를 통해 중앙에서 관리하여 구현했습니다.',
      '애니메이션 라이브러리 GSAP을 활용하여 인터렉티브한 UI 요소들에 생동감 있는 애니메이션 효과를 부여했습니다. 예를 들어 버튼 클릭 모션, 로켓 발사 장면은 물론 좌우 버튼 클릭 시 행성들의 위치가 이동되는 액션 등을 구현하여 사용자 경험을 향상시켰습니다.',
      '이더리움 기반 React Hooks 라이브러리인 Wagmi를 사용해 지갑 연결, 네트워크 변경, BAYC 홀더 여부 확인 등의 이더리움 dApp의 기본 기능들을 구현하였습니다.',
      'NextJS의 API 라우트 기능과 MongoDB, 그리고 googleapis를 활용하여 멤버십 신청 데이터 저장 기능을 구현했습니다.',
    ],
    achievements: [
      '웹사이트를 성공적으로 개발 및 런칭하여 홍콩에서 개최된 BAYC 행사에서 웹사이트를 선보이며 글로벌 커뮤니티와 소통할 수 있는 기회를 가졌습니다.',
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
    overview:
      '예이랩스에 대한 소개와 진행 중인 프로젝트, 채용 공고 등을 소개하는 자사 공식 웹사이트를 개발했습니다.',
    roles: [
      'HTML을 활용해 웹사이트를 시맨틱하게 구성해 제작했습니다.',
      '애니메이션 라이브러리 GSAP을 활용해 다양한 애니메이션을 구현했습니다. 스크롤 위치에 맞춰 요소가 회전하며 움직이는 스크롤 애니메이션과 컨텐츠들이 컨베이어 벨트처럼 한쪽으로 흘러가는 무한 스크롤 애니메이션을 개발했습니다. 이외에도 역동적이고 다채로운 사이트를 개발하기 위해 여러 애니메이션들을 적용했습니다.',
    ],
    achievements: [
      '풍부한 애니메이션 효과를 적용해 사용자 경험을 높이고 회사 브랜드 이미지를 효과적으로 전달했습니다.',
      '회사 소개 및 프로젝트, 채용 공고 등 다양한 정보를 한 곳에서 명확하게 제공함으로써 클라이언트와 지원자의 이해를 돕고 효율적인 커뮤니케이션 채널을 마련했습니다.',
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
    overview:
      '예술 후원회, 예술가 레지던시 프로그램, 전시 공간으로 구성된 예술 문화단체인 ARTIVIST 웹 사이트를 개발하였습니다.',
    roles: [
      'HTML을 사용하여 웹사이트를 구성하고, TailwindCSS를 활용하여 반응형 디자인을 구현했습니다.',
      '모달창 열기/닫기 등의 UI 액션을 Context API를 통해 중앙에서 관리하여 구현했습니다.',
      '애니메이션 라이브러리 GSAP을 사용해 스크롤 애니메이션을 구현하였습니다. 또한, 캔버스를 사용하여 이미지 시퀀스 스크롤 애니메이션을 구현하고 브라우저 화면 리사이징에 대응하기 위해 ResizeObserver를 사용했습니다.',
      'NextJS의 API 라우트 기능과 MongoDB, 그리고 googleapis를 활용하여 멤버십 신청 데이터 저장 기능을 구현했습니다. 사용자가 입력한 신청 데이터를 MongoDB 데이터베이스에 저장하고 동시에 Google 스프레드시트에도 자동으로 저장하여, 비개발자인 관리자도 쉽게 신청 데이터를 확인할 수 있도록 했습니다.',
    ],
    achievements: [
      '웹사이트의 성공적인 런칭으로, 더스틴 옐린(Dustin Yellin)과 아고스티노(Agostino) 작가와의 레지던시 계약을 성공적으로 체결하여 전시를 성황리에 진행할 수 있었습니다.',
      '웹사이트의 현대적인 디자인과 기능성이 아티스트들과의 협업 기회를 더욱 확장시키는데 기여하였습니다.',
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
  //   roles: [
  //     '기존 에이전시에서 작성된 HTML, CSS, jQuery 기반의 코드를 Next.js로 리팩토링하여 성능을 최적화하고 유지보수성을 향상시켰습니다.',
  //     'NextAuth와 Wagmi를 통해 사용자 인증 및 지갑 연동 기능을 구현하여 보안성을 강화했습니다. 또한, 서명 기능을 도입하여 사용자의 인증 절차를 강화하고 사용자 데이터를 안전하게 관리했습니다.',
  //     'Web3 api 라이브러리 Morails를 사용해 스타보이즈 홀더들이 보유한 NFT 목록과 공동 Vault에 담긴 자산을 편리하게 확인할 수 있도록 구현했습니다.',
  //     '데이터 패칭을 위한 리액트 훅 라이브러리 SWR을 사용하여 전역 상태 관리를 간소화하여 컴포넌트 간 데이터 공유를 보다 효율적으로 처리했습니다.',
  //   ],
  //   achievements: ['수정'],
  //   thumbnails: ['/images/projects/starboys-nft.png'],
  //   website: 'https://starboysnft.io',
  // },
];
