module.exports = {
  title: `Teddyjung.dev`,
  description: `테디정의 DailyLog`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://teddyjung-dev.netlify.app`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: `seolleung2/TeddyJung-Engineering-Blog`, // `zoomkoding/zoomkoding-gatsby-blog`,
    },
  },
  ga: 'G-QNRWTQPGCZ', // Google Analytics Tracking ID
  author: {
    name: `Teddy🐤`,
    bio: {
      role: `개발자`,
      description: ['호기심이 많은', '책 읽는 것을 좋아하는', '이로운 것을 만드는'],
      thumbnail: 'teddy1.jpeg', // Path to the image in the 'asset' folder
    },
    social: {
      github: `https://github.com/seolleung2`, // `https://github.com/zoomKoding`,
      linkedIn: ``, // `https://www.linkedin.com/in/jinhyeok-jeong-800871192`,
      email: `seolleung22@gmail.com`, // `zoomkoding@gmail.com`,
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '🗓 2020.03 ~',
        activity: '웹 개발 학습 시작',
        links: {
          post: '',
          github: '',
          demo: '',
        },
      },
      {
        date: '🗓 2021.05 ~',
        activity: '프론트엔드 신입 개발자 취업',
        links: {
          post: '',
          github: '',
          demo: '',
        },
      },
      // {
      //   date: '🗓 2020.03 ~',
      //   activity: '웹 개발 학습 시작',
      //   links: {
      //     post: '/gatsby-starter-zoomkoding-introduction',
      //     github: 'https://github.com/zoomkoding/zoomkoding-gatsby-blog',
      //     demo: 'https://www.zoomkoding.com',
      //   },
      // },
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      // {
      //   title: '개발 블로그 테마 개발',
      //   description:
      //     '개발 블로그를 운영하는 기간이 조금씩 늘어나고 점점 많은 생각과 경험이 블로그에 쌓아가면서 제 이야기를 담고 있는 블로그를 직접 만들어보고 싶게 되었습니다. 그동안 여러 개발 블로그를 보면서 좋았던 부분과 불편했던 부분들을 바탕으로 레퍼런스를 참고하여 직접 블로그 테마를 만들게 되었습니다.',
      //   techStack: ['gatsby', 'react'],
      //   thumbnailUrl: 'blog.png',
      //   links: {
      //     post: '/gatsby-starter-zoomkoding-introduction',
      //     github: 'https://github.com/zoomkoding/zoomkoding-gatsby-blog',
      //     demo: 'https://www.zoomkoding.com',
      //   },
      // },
    ],
  },
};
