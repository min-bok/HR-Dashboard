import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    :root {
        --primary-color: #3354F4;
        --font-color: #252C58;
        --activation-color: ##E6EFFC;
        --background-color: #F1F2F6;
        --gray-lv1-color: #F6F6F6;
        --gray-lv2-color: #D5D9DD;
        --gray-lv3-color: #727272;
        --error-color: #FF3440;
        
        --label-blue: #E6EFFC
        --label-red: #FFE5EE
        --label-yellow: #FFF8E7
        --label-gray: #EFEFEF

        --label-blueFont: #0764E6
        --label-redFont: #AA0000
        --label-yellowFont: #D5B500
        --label-grayFont: #8A8A8A

        --shadow: 0px 8px 28px 0px rgba(72, 89, 102, 0.05);
    }

    ${reset}

    @font-face {
        font-family: 'Pretendard';
        src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
        font-style: normal;
    }

    *, body{
        font-family: "Pretendard";
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }
`;

export default GlobalStyle;
