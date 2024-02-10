import { createGlobalStyle } from "styled-components";

const GloablStyles = createGlobalStyle`
    :root {
        --purple-1: #5b3ec1;
        --purple-2: #6e55c8;
        --dark-1: #283341;
        --dark-2: #43566e;
        --dark-3: #151b23;
        --dark-4: #4d5b6f;
        --dark-5: #2c3039;
        --grey-1: #d4d6d9;
        --grey-2: #7d8a9b;
        --blue-1: #41546c;
        --blue-2: #283341;
        --blue-3: #2aafee;
        --blue-4: #3faee1;
        --dark-blue-1: #151b23;
        --dark-blue-2: #3d526f;
        --light-blue-1: #ccdef6;
        --light-blue-2: #f8fafd;
        --light-blue-3: #d4e0f3;
        --light-blue-4: #e8f0fe;
        --light-blue-5: #f5f8fc;
        --light-blue-6: #eff9fe;
        --pink-1: #f6f2fb;
        --orange-1: #f38c54;
        --orange-2: #fff6f0;
        --green-1: #207d6a;
        --green-2: #26957e;
        --green-3: #2bc0a3;
        --red-1: #e94270;
        --red-2: #fff1f4;
        --red-3: #f30045;
        --red-4: #ff1a5b;
        --dot-bg: #283341;
        --dot-color: white;
        --dot-size: 1px;
        --dot-space: 22px;
        --shadow: 0 0 1px rgba(40, 51, 65, 0.1), 0 1px 2px rgba(40, 51, 65, 0.1), 0 1px 3px rgba(40, 51, 65, 0.1);
        --shadow-dark: 0 0 5px 5px rgba(40, 51, 65, 0.1), 0 1px 3px rgba(40, 51, 65, 0.1), 0 1px 4px rgba(40, 51, 65, 0.1);

        --swiper-pagination-color: grey;
        --swiper-pagination-bullet-width: 10px;
        --swiper-pagination-bullet-height: 10px;
    }
    body {
        margin:0;
        padding:0;
        font-family: 'Roboto',monospace;
        overflow-x: hidden;
    }

    html {
        overflow-x: hidden;
        -webkit-tap-highlight-color: transparent;
    }

    .swiper-horizontal > .swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal {
        bottom: 0;
    }

    .swiper-wrapper {
        height: 23rem;

        @media screen and (max-width: 500px) {
            height: 36rem;
        }
    }

    .swiper-wrapper2 {
        height: 35rem;

        @media screen and (max-width: 500px) {
            height: 35rem;
        }
    }

    .swiper-wrapper3 {
        height: 26rem;

        @media screen and (max-width: 500px) {
            height: 25rem;
        }
    }
    
`;

export default GloablStyles;
