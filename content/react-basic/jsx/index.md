---
emoji: ๐
title: DOM ๋ค๋ฃจ๊ธฐ, JSX์ Babel, Element ์์ฑ
date: '2021-10-07 22:25:00'
author: ํ๋์ 
tags: ๋ธ๋ก๊ทธ github-pages gatsby
categories: ๋ฆฌ์กํธ๊ธฐ์ด
---

## โ๏ธ 1. DOM (Document Object Model) ๋ค๋ฃจ๊ธฐ

์ ์  ํ์ผ์์ ์์๋ฅผ ๋ธ๋ผ์ฐ์ ์ ๊ทธ๋ ค์ฃผ๋ ๋ฐฉ๋ฒ์ ๋ ๊ฐ์ง๊ฐ ์๋ค.

1. html ๋ก ๊ทธ๋ฆฌ๊ธฐ

2. script ํ๊ทธ๋ก ๊ทธ๋ฆฌ๊ธฐ

2๋ฒ์ ๊ฒฝ์ฐ๋ body ํ๊ทธ ์์ id ๊ฐ root ์ธ element ๋ฅผ ๋ง๋ ๋ค๊ณ  ํ๋ฉด, script ํ๊ทธ ๋ด์ DOM ์ ์ด์ฉํด ์์์ ์ ๊ทผํ๊ณ  appendChild ๋ฑ์ผ๋ก ์์ ์์๋ฅผ ๋ถ๋ชจ ๋ธ๋์ ๋ํ๋ ์์ผ๋ก ๊ทธ๋ฆด ์ ์๊ฒ ๋๋ค.

### ๐ฑ 1-1. ์ ์  ํ์ผ์์ React ์ฌ์ฉํด ๋ณด๊ธฐ

์ฐ์  CDN ์ ๋ํ ์ฉ์ด์ ์ดํด๊ฐ ํ์ํ๋ค.

> [CDN](https://namu.wiki/w/CDN) ์ด๋, ์น์์ ์ฌ์ฉ๋๋ ๋ค์ํ ์ปจํ์ธ  (๋ฆฌ์์ค) ๋ฅผ ์ ์ฅํ์ฌ ์ ๊ณตํ๋ ์์คํ
> JSX ํํ์ Javascript ๊ฐ ์ดํดํ  ์ ์๋ ํํ์ผ๋ก ๋ฐ๊ฟ์ฃผ๋ ์ปดํ์ผ๋ฌ
> ์ฌ๊ธฐ์๋ ๋ฆฌ์กํธ ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ฅผ ๋ฌธ์์ ์ฃผ์ํ๋ ์ฝ๋๊ฐ ๋๋ค.

React document cdn ๊ฒ์์ ํตํด ๋์ค๋ ์ฝ๋๋ฅผ body ๋ด ๋ณต์ฌํด ๋ฃ๋๋ค.

```html
<script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
```

ํ์ฌ ์ฌ์ฉํ๋ static ํ์ผ ์์์ CDN ๋ ์ค์ ๋ฃ์์ผ๋ก์จ ๋ฆฌ์กํธ๋ฅผ ์ฌ์ฉํ  ์ ์๊ฒ ๋๋ค.

### ๐ฑ 1-2. JSX ๋ฌธ๋ฒ ์ฌ์ฉ์ ์ํ Babel

JSX ๋ ๋ฌธ์๋ HTML ๋ ์๋ ์๋ฐ์คํฌ๋ฆฝํธ์ ํ์ฅ ๋ฌธ๋ฒ์ด๋ค.

JSX ๋ฅผ ์ ์  ํ์ผ์์ ์ฌ์ฉํ๋ ค๋ฉด Babel ์ด๋ผ๋ ์ปดํ์ผ๋ฌ๊ฐ ํ์ํ๋ค.

> [Babel](https://babeljs.io/docs/en/) ์ ์๋ฐ์คํฌ๋ฆฝํธ ์ปดํ์ผ๋ฌ ์ด๋ค.
> ์ปดํ์ผ๋ฌ๋ ์ธ์ด ํด์๊ธฐ, ํน์  ์ธ์ด๋ฅผ ๋ค๋ฅธ ํ๋ก๊ทธ๋๋ฐ ์ธ์ด๋ก ์ฎ๊ธฐ๋ ํ๋ก๊ทธ๋จ ์ด๋ค.
> unpkg ๋ npm ์ ๋ฑ๋ก๋ ํจํค์ง๋ฅผ CDN ์ผ๋ก ๋ฐ๋ก ํ์ฉ ๊ฐ๋ฅํ ์๋น์ค ์ด๋ค.

babel unpkg cdn ๊ฒ์์ ํตํด ์ฝ๋๋ฅผ ๋ง์ฐฌ๊ฐ์ง๋ก ์ ์  ํ์ผ์ ๋ณต์ฌํด ๋ฃ๋๋ค.

```html
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
```

๊ทธ๋ฆฌ๊ณ  ์์๋ฅผ ํ๋ฉด์ ๊ทธ๋ฆฌ๊ณ ์ ํ๋ script ํ๊ทธ ์์ฑ์ type ์ "text/babel" ๋ก ๋ฃ์ด ์ค๋ค.

์ฌ์ฉ ์์๋ ์๋์ ๊ฐ๋ค.

```html
<!DOCTYPE html>
<html lang="en">
  <head> </head>
  <body>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
    <div id="root"></div>
    <script type="text/babel">
      const rootElement = document.querySelector('#root');
      // const titleElement = document.createElement("h1");
      // const element = React.createElement("h1", { children: "Hello, Teddy!" });
      // ReactDOM.render(element, rootElement);
      // console.log("element >>>", element);
      const makeClassName = 'greets';
      const text = 'Hello, teddy!';
      // const props = { className: makeClassName, children: text };
      // const element = <h1 className={makeClassName}>{text}</h1>;
      // const element = <h1 {...props} />;
      const elements = (
        <>
          <h1 className={makeClassName}>{text}</h1>
          <h2>hihihi</h2>
          <h5>no jam, no stressful</h5>
        </>
      );
      ReactDOM.render(elements, rootElement);
    </script>
  </body>
</html>
```

์ฃผ์์ ์น ๋ถ๋ถ์ ์์ ์๋ฐ์คํฌ๋ฆฝํธ, html ์ ์ฌ์ฉํ ๋ถ๋ถ์ด์ง๋ง ์ค์  ์๋๋๋ ์ฝ๋์์๋ JSX ๋ก html ๊ณผ JS ๋ฅผ ์๋ค๊ฐ๋ค ํ  ์ ์๋ค๋ ๊ฒ์ ๋ณด์ฌ์ค๋ค.

์ด๋ฅผ ํตํด ์์ ์์ฒด๋ฅผ ๋ณ์ํ ํ  ์ ์๋ ๊ฒ์ด ๋ฐ๋ก JSX ์ ์ฅ์ ์ด๋ค.

## โ๏ธ 2. ๋ฆฌ์กํธ๋ก ๋ฉํฐ Element ์์ฑ ๋ฐ Element ์ฐ์ด๋ด๊ธฐ

### ๐ฑ 2-1. React.fragment

ํ๋์ child ๊ฐ ์๋๋ผ ์ฌ๋ฌ children ์ ๋ฆฌ์กํธ๋ก ๊ตฌํํ๋ ๋ฐฉ์ ์ค์ React.fragment ๊ฐ ์๋ค.

```js
# ์๋ ๊ฐ ์ค์ ์ฝ๋๋ ๋ชจ๋ ๋์ผํ ์๋ฏธ

<React.fragment><React.fragment>
<></>
```

์์๋ค์ ๋ถ๋ชจ๋ก์จ ๊ฐ์ธ์ฃผ๋ ์ญํ ๋ง ํ๋ค.

### ๐ฑ 2-2. React Element ์์ฑํ๊ธฐ

> ์ปค์คํ ์๋ฆฌ๋จผํธ๋ฅผ ์ฌ์ฉํ๊ธฐ ์ํด ๋ณ์๋ช์ ๋งจ์ ์ํ๋ฒณ์ ๋๋ฌธ์๋ก ์ ์ฉํด์ผ ํ๋ค.

```js
  <div id="root"></div>
    <script type="text/babel">
      const rootElement = document.querySelector("#root");

      const Paint = ({ title, desc, children }) => (
        <>
          <h1>Title : {title}</h1>
          <h2>Description : {desc}</h2>
          <span>Total {children}</span>
          <h3>----------------------------</h3>
        </>
      );

      const Star = ({ point }) => <>{point} : 5.0</>;

      const elements = (
        <>
          <Paint title="Galaxy watch 4" desc="Smart watch from Samsung">
            <Star point={"4.0"} />
          </Paint>
          <Paint title="Macbook Pro 16" desc="Laptop from Apple Inc">
            <Star point={"3.8"} />
          </Paint>
        </>
      );
      ReactDOM.render(elements, rootElement);
    </script>
```

### ๐ฑ 2-3. React ์์ JS ์ JSX ์์ด์ฐ๊ธฐ

์ปค์คํ ์๋ฆฌ๋จผํธ์์ ์ด๋ฏธ JSX ๋ฅผ ๋ฆฌํดํ์ฌ ๋ด๋ถ์ Javascript (์ผํญ ์ฐ์ฐ์) ๋ฅผ ์์ด์ฐ๊ณ  ์๋ ์ฝ๋์ด๋ค.

```js
  <div id="root"></div>
    <script type="text/babel">
      const rootElement = document.querySelector("#root");

      const Text = ({ text }) => {
        const textLetterArray = text.split("");

        // textLetterArray
        return (
          <>
            {textLetterArray[0] === textLetterArray[0].toUpperCase() ? (
              <h1>{text}</h1>
            ) : (
              <h3>{text}</h3>
            )}
          </>
        );
      };

      const elements = (
        <>
          <Text text="Teddy" />
          <Text text="apple" />
        </>
      );
      ReactDOM.render(elements, rootElement);
    </script>
```

```toc

```
