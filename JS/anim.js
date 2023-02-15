:root {
    --color-primary: #3a00ff;
    --color-primary-alt: #6f6ffd;
    --color-secondary: #d42257;
    --color-background: #d2fbf7;
    --color-text: #412d86;
    --color-light: #fff;
    --color-anchor: #3a00ff;
    --font-family: "Baloo 2", sans-serif;
    --font-weight-strong: 500;
    --font-size-h1: 6rem;
    --font-size-h2: 3rem;
    --font-size-h3: 2rem;
    --font-size-h4: 1.35rem;
    --font-size-text: 1.15rem;
    --border-radius: 8px;
  }
  
  /*
   * [Modified] Modern CSS Reset
   * @link https://github.com/hankchizljaw/modern-css-reset
  */
  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  
  /* Remove default margin */
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }
  
  html {
    overflow-x: hidden;
  }
  
  /* Set core body defaults */
  body {
    min-height: 100vh;
    font-size: 100%;
    line-height: 1.5;
    text-rendering: optimizeSpeed;
    overflow-x: hidden;
  }
  
  /* Make images easier to work with */
  img {
    display: block;
    max-width: 100%;
  }
  
  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }
  
  /* Remove all animations and transitions for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
  
  h1,
  h2,
  h3,
  h4 {
    font-weight: var(--font-weight-strong);
    line-height: 1;
    margin-bottom: 0.65em;
  }
  
  h1 {
    font-size: var(--font-size-h1);
    font-size: clamp(2rem, 7vw, var(--font-size-h1));
  }
  
  h2 {
    font-size: var(--font-size-h2);
    font-size: clamp(2rem, 4vw, var(--font-size-h2));
    text-align: center;
  }
  
  #main h2 {
    background-color: var(--color-secondary);
    align-self: center;
    color: var(--color-background);
    padding: 0.25em 0.5em;
  }
  
  h3 {
    font-size: var(--font-size-h3);
  }
  
  h4 {
    font-size: var(--font-size-h4);
  }
  
  p,
  li {
    font-size: var(--font-size-text);
  }
  
  p {
    margin: 0 0 1rem;
  }
  
  article .container > ul:not(.features) > li + li,
  article .container > ol > li + li {
    margin-top: 1rem;
  }
  
  article .container * + h2 {
    margin-top: 4rem;
  }
  
  article .container * + h3 {
    margin-top: 2rem;
  }
  
  strong {
    font-weight: var(--font-weight-strong);
  }
  
  a {
    color: var(--color-anchor);
  }
  
  blockquote {
    position: relative;
    display: grid;
    grid-template-areas: "blockquote";
    place-items: center;
    padding: 0;
    margin: 3rem 0;
    color: var(--color-primary);
  }
  blockquote > * {
    grid-area: blockquote;
  }
  blockquote p {
    position: relative;
    font-size: var(--font-size-h4);
    margin-bottom: 0;
    padding: 0.5em;
  }
  blockquote p strong {
    font-size: 1.15em;
  }
  blockquote::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 4px solid var(--color-primary);
    box-shadow: 0.25em 0.25em var(--color-secondary);
    transform: scale(1.1);
    content: "";
  }
  blockquote::after {
    grid-area: blockquote;
    color: #6f6ffd;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 199.1 111.3'%3E%3Cpath fill='%236f6ffd' d='M118 77a77 77 0 00-2-18c-2-4-3-9-3-13a29 29 0 011-12 19 19 0 017-9c4-3 8-4 13-3a14 14 0 018 7 31 31 0 012 5 75 75 0 005 10 47 47 0 002 5 17 17 0 003 3c4 4 8 4 13 0a15 15 0 005-8 37 37 0 001-7l1-11a18 18 0 014-11 2 2 0 000-3l-3-3-2-3a2 2 0 011-2 11 11 0 012-1l19-3c4 0 5 1 3 5l-7 16c-1 3-2 3-5 1l-4-5a1 1 0 00-1 0 9 9 0 00-3 5 23 23 0 00-1 6l-1 11a26 26 0 01-1 7 18 18 0 01-8 10c-5 3-9 3-13 0a20 20 0 01-6-6 68 68 0 01-6-13l-2-4a18 18 0 00-2-4 10 10 0 00-14-2 15 15 0 00-4 4 19 19 0 00-3 9 32 32 0 000 11l2 6a78 78 0 012 27 32 32 0 01-4 15 24 24 0 01-11 9 33 33 0 01-19 3 16 16 0 01-13-9 29 29 0 01-3-11 70 70 0 012-18l2-14a33 33 0 000-14c-1-4-4-7-8-7-7-1-14 1-19 6a34 34 0 00-6 9 59 59 0 00-4 10l-3 12-2 6a26 26 0 01-5 8 17 17 0 01-16 6 26 26 0 01-10-4 7 7 0 01-2-1 2 2 0 010-2 2 2 0 012 0l3 1a22 22 0 0010 3 13 13 0 009-4 22 22 0 005-6 41 41 0 003-8l3-12a59 59 0 015-13 31 31 0 017-9c6-5 14-7 22-5a12 12 0 019 7 21 21 0 011 7 57 57 0 01-2 17 132 132 0 00-2 16 37 37 0 000 13 27 27 0 002 5 13 13 0 0011 8 30 30 0 0016-3 22 22 0 0010-10c3-4 3-9 4-13v-5z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    place-self: end;
    content: "Ooh, scale()!";
    background-size: 90%;
    width: 10ch;
    padding-top: 3.25em;
    transform: translate(25%, 50%) rotate(-5deg);
    transform-origin: bottom right;
  }
  @media (max-width: 60rem) {
    blockquote::after {
      transform: translate(25%, 55%) rotate(-5deg);
    }
  }
  
  #guidelines p:nth-of-type(1),
  #contribute p:nth-of-type(1) {
    font-size: var(--font-size-h4);
    font-weight: var(--font-weight-strong);
  }
  
  body {
    background-color: var(--color-background);
    color: var(--color-text);
    font-family: var(--font-family);
  }
  
  main {
    padding-top: 5vh;
    padding-bottom: 5vh;
  }
  main:focus {
    outline: none;
  }
  main h3 {
    color: var(--color-primary);
  }
  
  article section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 5vh;
    padding-bottom: 5vh;
  }
  
  article .container,
  .page-footer .container,
  #styles .container {
    width: 100%;
    max-width: 80ch;
    margin-right: auto;
    margin-left: auto;
  }
  
  article,
  #styles {
    padding: 1rem;
  }
  
  .page-footer ul,
  .features {
    display: grid;
    margin: 0 0 2rem;
    padding: 0;
    grid-gap: 1em;
    list-style: none;
  }
  
  header {
    --logomark-height: 3em;
    --logomark-padding: 0 1em;
    display: grid;
    min-height: 40vh;
    place-items: center;
    padding: 10vh 2rem;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='72' viewBox='0 0 36 72'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%233a00ff' fill-opacity='0.4'%3E%3Cpath d='M2 6h12L8 18 2 6zm18 36h12l-6 12-6-12z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"),
      url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='72' viewBox='0 0 36 72'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23d42257' fill-opacity='0.4'%3E%3Cpath d='M2 6h12L8 18 2 6zm18 36h12l-6 12-6-12z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    background-repeat: repeat-x;
    background-position: 0 -38px, 17px -40px;
    color: var(--color-primary);
    text-align: center;
  }
  header h1 {
    display: inline-grid;
    min-height: var(--logomark-height);
    padding: var(--logomark-padding);
    border: 0.16em solid var(--color-primary);
    box-shadow: 0.12em 0.12em var(--color-secondary);
    place-content: center;
  }
  header h2 {
    max-width: 30ch;
  }
  
  nav ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0;
    padding: 0;
    list-style: none;
  }
  nav ul a {
    display: inline-grid;
    padding: 0.5rem;
    color: var(--color-secondary);
    font-size: 1.25rem;
    text-decoration: none;
  }
  nav ul a::before {
    width: 100%;
    height: 0.33em;
    background-color: var(--color-secondary);
    opacity: 0.15;
    content: "";
  }
  nav ul a:hover::before,
  nav ul a:focus::before {
    opacity: 1;
  }
  nav ul li {
    margin: 0.25rem;
  }
  
  #about section:nth-child(2) {
    position: relative;
  }
  #about section:nth-child(2) p:nth-of-type(2) {
    align-self: center;
    margin-top: 2rem;
    color: var(--color-secondary);
    font-size: 1.5em;
    font-weight: var(--font-weight-strong);
    text-align: center;
  }
  #about section:nth-child(2) ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 1rem 0 2rem;
    padding: 0;
    list-style: none;
  }
  #about section:nth-child(2) ul li {
    margin: 0.25em;
    padding: 0.25em 0.5em;
    background-color: var(--color-light);
  }
  #about section:nth-child(2)::before {
    position: absolute;
    top: 60%;
    left: 50%;
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    transform: translate(-50%, -50%);
    transition: 300ms transform ease-in;
    background-image: radial-gradient(
      rgba(255, 0, 0, 0) 20%,
      #b3f8f1 20%,
      #b3f8f1 25%,
      rgba(255, 0, 0, 0) 25%,
      rgba(255, 0, 0, 0) 30%,
      #b3f8f1 30%,
      #b3f8f1 40%,
      rgba(255, 0, 0, 0) 40%,
      rgba(255, 0, 0, 0) 45%,
      #b3f8f1 45%,
      #b3f8f1 50%,
      rgba(255, 0, 0, 0) 50%
    );
    opacity: 0.8;
    content: "";
    z-index: -1;
  }
  @media (max-width: 35rem) {
    #about section:nth-child(2)::before {
      transform: scale(2) translate(-25%, -25%);
    }
  }
  
  #guidelines h3 {
    display: inline-block;
    transform: rotate(-8deg) translateX(-10%);
    background: linear-gradient(
      to right,
      var(--color-primary),
      var(--color-secondary)
    );
  }
  @supports (background-clip: text) or (-webkit-background-clip: text) {
    #guidelines h3 {
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }
  }
  @media (min-width: 120ch) {
    #guidelines h3 {
      transform: rotate(-8deg) translateX(-30%);
    }
  }
  
  @supports (background-clip: text) or (-webkit-background-clip: text) {
    #guidelines p:nth-of-type(2) {
      position: relative;
    }
    #guidelines p:nth-of-type(2)::before {
      position: absolute;
      top: 0;
      left: 0;
      transform: rotate(4deg) translate(4.75rem, -3.5rem);
      transform-origin: left center;
      -webkit-background-clip: text;
      background-clip: text;
      color: var(--color-primary-alt);
      font-size: 0.9em;
      font-weight: normal;
      content: "← Whoa, text gradients!";
    }
  }
  
  #guidelines .container > a {
    align-self: center;
  }
  
  #contribute {
    background: repeating-linear-gradient(
      -45deg,
      transparent,
      transparent 10px,
      #b3f8f1 10px,
      #b3f8f1 18px
    );
  }
  #contribute section {
    padding: 2rem;
    background-color: var(--color-background);
  }
  #contribute section:nth-child(2) {
    padding-top: 0;
  }
  
  #files {
    display: grid;
    place-content: center;
    margin: 5vh auto;
    text-align: center;
  }
  #files h3 {
    height: 0;
    opacity: 0;
  }
  #files .container {
    display: inline-block;
    padding: 5vmin;
    outline: 4px dashed var(--color-secondary);
    background-color: var(--color-background);
    text-align: center;
  }
  #files .container a:not(:last-child) {
    margin: 0.5rem;
  }
  #files .container a:not(:last-child):not(.link-codepen) {
    font-size: clamp(1.5rem, 4vw, 2rem);
  }
  
  .features {
    position: relative;
    width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(25ch, 1fr));
    /*! 
      * SVGs from Hero Patterns
      * @link http://www.heropatterns.com/
      */
  }
  .features li {
    display: grid;
    position: relative;
    place-content: center;
    min-height: 20vh;
    padding: 1rem;
    color: var(--color-light);
    text-align: center;
  }
  .features li > span {
    display: grid;
    place-content: center;
    padding: 0.5em;
    grid-gap: 0.5rem;
    border: 1px solid var(--color-light);
    background-color: var(--color-secondary);
    line-height: 1.1;
  }
  .features li > span a {
    color: inherit;
    font-size: 1.3rem;
    font-weight: var(--font-weight-strong);
    text-decoration: none;
  }
  .features li > span a::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: "";
  }
  .features li > span span:nth-child(2) {
    position: relative;
  }
  
  #styles {
    margin: 5vh 0 20vh;
    text-align: center;
  }
  #styles h2 {
    color: var(--color-primary);
  }
  #styles .features li {
    background-color: var(--color-secondary);
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='72' viewBox='0 0 36 72'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23fff' fill-opacity='0.4'%3E%3Cpath d='M2 6h12L8 18 2 6zm18 36h12l-6 12-6-12z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }
  @media (min-width: 515px) and (max-width: 765px) {
    #styles .features li:nth-last-child(1):nth-child(odd) {
      grid-column: span 2;
    }
  }
  #styles .features li:nth-child(2) {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='88' height='24' viewBox='0 0 88 24'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='autumn' fill='%23fff' fill-opacity='0.4'%3E%3Cpath d='M10 0l30 15 2 1V2.18A10 10 0 0 0 41.76 0H39.7a8 8 0 0 1 .3 2.18v10.58L14.47 0H10zm31.76 24a10 10 0 0 0-5.29-6.76L4 1 2 0v13.82a10 10 0 0 0 5.53 8.94L10 24h4.47l-6.05-3.02A8 8 0 0 1 4 13.82V3.24l31.58 15.78A8 8 0 0 1 39.7 24h2.06zM78 24l2.47-1.24A10 10 0 0 0 86 13.82V0l-2 1-32.47 16.24A10 10 0 0 0 46.24 24h2.06a8 8 0 0 1 4.12-4.98L84 3.24v10.58a8 8 0 0 1-4.42 7.16L73.53 24H78zm0-24L48 15l-2 1V2.18A10 10 0 0 1 46.24 0h2.06a8 8 0 0 0-.3 2.18v10.58L73.53 0H78z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }
  #styles .features li:nth-child(3) {
    background-image: url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fff' fill-opacity='0.4'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }
  #styles .features::after {
    position: absolute;
    bottom: -4.5em;
    width: 10ch;
    padding-top: 3em;
    transform: rotate(-15deg);
    transform-origin: bottom right;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 199.1 111.3'%3E%3Cpath fill='%236f6ffd' d='M118 77a77 77 0 00-2-18c-2-4-3-9-3-13a29 29 0 011-12 19 19 0 017-9c4-3 8-4 13-3a14 14 0 018 7 31 31 0 012 5 75 75 0 005 10 47 47 0 002 5 17 17 0 003 3c4 4 8 4 13 0a15 15 0 005-8 37 37 0 001-7l1-11a18 18 0 014-11 2 2 0 000-3l-3-3-2-3a2 2 0 011-2 11 11 0 012-1l19-3c4 0 5 1 3 5l-7 16c-1 3-2 3-5 1l-4-5a1 1 0 00-1 0 9 9 0 00-3 5 23 23 0 00-1 6l-1 11a26 26 0 01-1 7 18 18 0 01-8 10c-5 3-9 3-13 0a20 20 0 01-6-6 68 68 0 01-6-13l-2-4a18 18 0 00-2-4 10 10 0 00-14-2 15 15 0 00-4 4 19 19 0 00-3 9 32 32 0 000 11l2 6a78 78 0 012 27 32 32 0 01-4 15 24 24 0 01-11 9 33 33 0 01-19 3 16 16 0 01-13-9 29 29 0 01-3-11 70 70 0 012-18l2-14a33 33 0 000-14c-1-4-4-7-8-7-7-1-14 1-19 6a34 34 0 00-6 9 59 59 0 00-4 10l-3 12-2 6a26 26 0 01-5 8 17 17 0 01-16 6 26 26 0 01-10-4 7 7 0 01-2-1 2 2 0 010-2 2 2 0 012 0l3 1a22 22 0 0010 3 13 13 0 009-4 22 22 0 005-6 41 41 0 003-8l3-12a59 59 0 015-13 31 31 0 017-9c6-5 14-7 22-5a12 12 0 019 7 21 21 0 011 7 57 57 0 01-2 17 132 132 0 00-2 16 37 37 0 000 13 27 27 0 002 5 13 13 0 0011 8 30 30 0 0016-3 22 22 0 0010-10c3-4 3-9 4-13v-5z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-size: 90%;
    color: var(--color-primary-alt);
    font-size: 0.9rem;
    content: "Grid FTW!";
  }
  
  .profile {
    width: 95vw;
    max-width: 80ch;
    margin: 1rem auto 10vh;
    padding: 1.25rem;
    z-index: 1;
  }
  .profile h4 {
    margin: 0;
    color: var(--color-secondary);
    text-align: center;
  }
  .profile .container {
    display: grid;
    justify-items: center;
    grid-gap: 1rem;
  }
  .profile .container > a {
    min-height: 2em;
    border: 2px solid currentColor;
    color: var(--color-secondary);
  }
  .profile ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .profile ul li {
    display: flex;
    padding: 0.45em;
  }
  .profile ul li span:nth-child(1) {
    width: auto;
    margin-right: 0.25em;
    font-weight: var(--font-weight-strong);
  }
  .profile ul li span:nth-child(2) {
    flex-grow: 1;
    word-break: break-word;
  }
  .profile ul li span:nth-child(2) a {
    color: inherit;
  }
  @media (min-width: 180ch) {
    .profile {
      position: fixed;
      right: 2vmin;
      bottom: 2vmin;
      max-width: 30ch;
      margin-bottom: 0;
      border-radius: var(--border-radius);
      background-color: var(--color-light);
      box-shadow: 0 2px 5px rgba(58, 0, 255, 0.15);
    }
    .profile ul {
      justify-content: unset;
    }
    .profile ul li {
      padding: 0;
    }
    .profile ul li span:nth-child(1) {
      width: 8ch;
      margin-right: 0;
    }
  }
  
  .page-footer {
    --logomark-height: 2em;
    --logomark-padding: 0;
    position: relative;
    padding: 3rem 1rem;
    background-color: var(--color-primary);
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='72' viewBox='0 0 36 72'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23d2fbf7' fill-opacity='1'%3E%3Cpath d='M2 6h12L8 18 2 6zm18 36h12l-6 12-6-12z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    background-repeat: repeat-x;
    background-position: center -34px;
    color: var(--color-light);
  }
  .page-footer::before {
    display: inline-grid;
    min-height: var(--logomark-height);
    padding: var(--logomark-padding);
    border: 0.16em solid var(--color-primary);
    box-shadow: 0.12em 0.12em var(--color-secondary);
    place-content: center;
    position: absolute;
    left: 50%;
    width: 2em;
    transform: translate(-50%, -100%);
    background-color: var(--color-background);
    color: var(--color-primary);
    font-size: 3rem;
    content: "S";
  }
  .page-footer p:first-child {
    margin-top: 3rem;
    font-weight: var(--font-weight-strong);
    letter-spacing: 0.03em;
    text-align: center;
  }
  .page-footer p a {
    color: inherit;
  }
  .page-footer ul {
    grid-template-columns: repeat(auto-fit, minmax(12ch, auto));
  }
  .page-footer .container > :last-child {
    margin-bottom: 0;
  }
  
  .skip-link {
    position: absolute;
    top: auto;
    left: -10000px;
    width: 1px;
    height: 1px;
    background-color: var(--color-secondary);
    color: #fff;
    font-size: 1.125rem;
    overflow: hidden;
  }
  .skip-link:focus {
    position: fixed;
    top: 0;
    left: 0;
    width: auto;
    height: auto;
    padding: 0.5em;
  }
  
  [class^="link"]:not(.link-codepen) {
    min-height: 3em;
    background-color: var(--color-primary);
    color: #fff;
    box-shadow: 0.18em 0.18em var(--color-secondary);
  }
  
  [class^="link"]:not(.link-codepen),
  .profile .container > a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0 0.75em;
    transform: translate(0, 0);
    transition: 180ms all ease-in-out;
    font-size: 1.125rem;
    line-height: 1;
    text-align: center;
    text-decoration: none;
  }
  [class^="link"]:not(.link-codepen):hover,
  [class^="link"]:not(.link-codepen):focus,
  .profile .container > a:hover,
  .profile .container > a:focus {
    transform: translate(-0.15em, -0.15em);
    box-shadow: 0.3em 0.3em var(--color-secondary);
  }
  [class^="link"]:not(.link-codepen):focus,
  .profile .container > a:focus {
    outline-color: transparent;
    outline-style: solid;
  }
  
  .page-footer [class^="link"] {
    width: 100%;
    min-height: 2.5em;
    background-color: var(--color-background);
    color: var(--color-primary);
  }
  
  .link-codepen {
    display: block;
    margin-top: 3rem;
    font-size: var(--font-size-h4);
  }
  .link-codepen::before {
    position: absolute;
    padding-right: 1.25em;
    transform: translate(15%, -90%) rotate(-3deg);
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 79.6 187.1'%3E%3Cpath fill='%236f6ffd' d='M12 131l-2 13-3 26a10 10 0 000 2 1 1 0 001 0 24 24 0 002-3 37 37 0 016-8 73 73 0 007-9l24-33 4-5a70 70 0 006-7l15-20a8 8 0 001-1 1 1 0 000-1 16 16 0 00-2-1l-8-3a69 69 0 01-13-6 7 7 0 00-1-1l-16-6-13-7a57 57 0 00-10-4 17 17 0 01-2-1 2 2 0 01-1-4 18 18 0 012-2 93 93 0 0011-13 95 95 0 018-8l10-11a32 32 0 003-4c3-5 7-9 12-13a12 12 0 011-1 1 1 0 012 0 2 2 0 010 2 27 27 0 01-3 3 104 104 0 00-10 12 115 115 0 01-11 13 102 102 0 00-11 13 78 78 0 01-5 7l-2 2a1 1 0 000 1l19 8 9 4 3 2a77 77 0 0113 5 22 22 0 003 2l17 8a8 8 0 011 1 2 2 0 010 2 22 22 0 01-1 3l-11 14a33 33 0 00-2 3 98 98 0 01-10 13l-5 7-23 31a87 87 0 01-7 9 60 60 0 00-6 8l-2 3a1 1 0 000 1l9-4 12-6 10-6 13-7a10 10 0 012 0 2 2 0 012 1 2 2 0 010 3 24 24 0 01-3 1l-8 4-20 11-24 12a19 19 0 01-2 1 2 2 0 01-3-2 10 10 0 010-2l1-7 3-24 3-21a39 39 0 011-5 2 2 0 013-1 2 2 0 011 2v4z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 130%;
    background-size: 14%;
    color: #6f6ffd;
    font-size: 0.85em;
    content: "Jump right in";
  }
  
  .link-allstyles {
    font-size: var(--font-size-h4);
  }
  @media (max-width: 400px) {
    .link-allstyles {
      margin-left: 6rem;
    }
  }
  
  .link-github svg {
    width: 1em;
    height: 1em;
    margin-right: 0.25em;
    fill: currentColor;
  }
  