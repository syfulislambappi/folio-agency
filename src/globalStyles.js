import styled, { createGlobalStyle } from "styled-components";
import sfProDisplay from "./fonts/SF-Pro-Display.woff";

export const GlobalStyles = createGlobalStyle`

    @font-face {
        font-family: 'SF Pro Display', sans-serif;
        src: url(${sfProDisplay});
    }

    *, *::after, *::before {
        box-sizing: border-box;
    }

    * {
        margin: 0;
        padding: 0;
        line-height: calc(1em + 0.5rem);
    }

    html, body, #__next {
        height: 100%;
    }

    #root, #__next {
        isolation: isolate;
    }

    html {
        font-family: 'SF Pro Display', sans-serif;
        font-size: 100%;

        ${"" /* main colors */}
        --primary-color: #5468E7;
        --secondary-color: #C897E4;
        --dark-color: #232340;
        --white-color: #FFFFFF;

        ${"" /* text colors */}
        --text-dark: #8B8B8B;
        --text-light: #606060;
        --text-black: #000000;

        ${"" /* gradient color */}
        --blue-gradient: linear-gradient(180deg, #3A8FFF 0%, #0837AE 100%);

        ${"" /* sizes */}
        --14px: 0.875rem;
        --16px: 1rem;
        --17px: 1.063rem;
        --18px: 1.125rem;
        --21px: 1.313rem;
        --24px: 1.5rem;
        --31px: 1.938rem;
        --32px: 2rem;
        --37px: 2.313rem;
        --40px: 2.5rem;
        --64px: 4rem;
        --84px: 5.25rem;
    }

    body {
        -webkit-font-smoothing: antialiased;
    }

    img, picture, video, canvas, svg {
        display: block;
        max-width: 100%;
    }

    input, button, textarea, select {
        font: inherit;
    }

    p, h1, h2, h3, h4, h5, h6, span {
        overflow-wrap: break-word;
        hyphens: auto;
    }
`;

// Heading Styles
export const HeadingOne = styled.h1`
  font-weight: 700;
  font-size: clamp(var(--37px), 7vw + 1rem, var(--84px));
  letter-spacing: -1px;
  color: ${({ color }) => color || "var(--dark-color)"};
  margin-top: ${({ marginTop }) => marginTop || 0};
  margin-bottom: ${({ marginBottom }) => marginBottom || 0};
  margin-left: ${({ marginLeft }) => marginLeft || 0};
  margin-right: ${({ marginRight }) => marginRight || 0};
`;

export const HeadingTwo = styled.h2`
  font-weight: 700;
  font-size: clamp(var(--31px), 5vw + 1rem, var(--64px));
  letter-spacing: -1px;
  color: ${({ color }) => color || "var(--dark-color)"};
  margin-top: ${({ marginTop }) => marginTop || 0};
  margin-bottom: ${({ marginBottom }) => marginBottom || 0};
  margin-left: ${({ marginLeft }) => marginLeft || 0};
  margin-right: ${({ marginRight }) => marginRight || 0};
`;

export const HeadingThree = styled.h3`
  font-weight: 700;
  font-size: clamp(var(--24px), 2.5vw + 1rem, var(--40px));
  letter-spacing: -0.4px;
  color: ${({ color }) => color || "var(--dark-color)"};
  margin-top: ${({ marginTop }) => marginTop || 0};
  margin-bottom: ${({ marginBottom }) => marginBottom || 0};
  margin-left: ${({ marginLeft }) => marginLeft || 0};
  margin-right: ${({ marginRight }) => marginRight || 0};
`;

export const HeadingFour = styled.h4`
  font-weight: 700;
  font-size: clamp(var(--21px), 1.6vw + 1rem, (var(--32px)));
  letter-spacing: -0.5px;
  color: ${({ color }) => color || "var(--dark-color)"};
  margin-top: ${({ marginTop }) => marginTop || 0};
  margin-bottom: ${({ marginBottom }) => marginBottom || 0};
  margin-left: ${({ marginLeft }) => marginLeft || 0};
  margin-right: ${({ marginRight }) => marginRight || 0};
`;

// Paragaph Styles
export const Text = styled.p`
  font-weight: ${({ fontWeight }) => fontWeight || 400};
  font-size: clamp(var(--17px), 0.2vw + 1rem, var(--18px));
  color: ${({ color }) => color || "var(--text-light)"};
  margin-top: ${({ marginTop }) => marginTop || 0};
  margin-bottom: ${({ marginBottom }) => marginBottom || 0};
  margin-left: ${({ marginLeft }) => marginLeft || 0};
  margin-right: ${({ marginRight }) => marginRight || 0};
`;

// Button Styles
export const Button = styled.button`
  font-weight: 700;
  font-size: clamp(var(--17px), 0.2vw + 1rem, var(--18px));
  text-align: center;
  color: var(--white-color);
  padding: 1.11em 2.44em;
  background-color: ${({ bgColor }) => bgColor || "var(--dark-color)"};
  outline: none;
  border: none;
  border-radius: calc(8rem / 16);
`;

// Notification Dot Styles
export const Dot = styled.span`
  font-weight: 600;
  font-size: clamp(var(--14px), 0.1vw + 1rem, var(--14px));
  text-align: center;
  color: var(--white-color);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  background-image: var(--blue-gradient);
  border-radius: 50%;
`;
