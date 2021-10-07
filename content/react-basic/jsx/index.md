---
emoji: 🍀
title: DOM 다루기, JSX와 Babel, Element 생성
date: '2021-10-07 22:25:00'
author: 테디정
tags: 블로그 github-pages gatsby
categories: 리액트기초
---

## ☘️ 1. DOM (Document Object Model) 다루기

정적 파일에서 요소를 브라우저에 그려주는 방법은 두 가지가 있다.

1. html 로 그리기

2. script 태그로 그리기

2번의 경우는 body 태그 안에 id 가 root 인 element 를 만든다고 하면, script 태그 내에 DOM 을 이용해 요소에 접근하고 appendChild 등으로 자식 요소를 부모 노드에 더하는 식으로 그릴 수 있게 된다.

### 🌱 1-1. 정적 파일에서 React 사용해 보기

우선 CDN 에 대한 용어의 이해가 필요하다.

> [CDN](https://namu.wiki/w/CDN) 이란, 웹에서 사용되는 다양한 컨텐츠 (리소스) 를 저장하여 제공하는 시스템
> JSX 표현을 Javascript 가 이해할 수 있는 표현으로 바꿔주는 컴파일러
> 여기서는 리액트 라이브러리를 문서에 주입하는 코드가 된다.

React document cdn 검색을 통해 나오는 코드를 body 내 복사해 넣는다.

```html
<script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
```

현재 사용하는 static 파일 안에서 CDN 두 줄을 넣음으로써 리액트를 사용할 수 있게 된다.

### 🌱 1-2. JSX 문법 사용을 위한 Babel

JSX 는 문서도 HTML 도 아닌 자바스크립트의 확장 문법이다.

JSX 를 정적 파일에서 사용하려면 Babel 이라는 컴파일러가 필요하다.

> [Babel](https://babeljs.io/docs/en/) 은 자바스크립트 컴파일러 이다.
> 컴파일러란 언어 해석기, 특정 언어를 다른 프로그래밍 언어로 옮기는 프로그램 이다.
> unpkg 란 npm 에 등록된 패키지를 CDN 으로 바로 활용 가능한 서비스 이다.

babel unpkg cdn 검색을 통해 코드를 마찬가지로 정적 파일에 복사해 넣는다.

```html
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
```

그리고 요소를 화면에 그리고자 하는 script 태그 속성의 type 을 "text/babel" 로 넣어 준다.

사용 예시는 아래와 같다.

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

주석을 친 부분은 순수 자바스크립트, html 을 사용한 부분이지만 실제 작동되는 코드에서는 JSX 로 html 과 JS 를 왔다갔다 할 수 있다는 것을 보여준다.

이를 통해 요소 자체를 변수화 할 수 있는 것이 바로 JSX 의 장점이다.

## ☘️ 2. 리액트로 멀티 Element 생성 및 Element 찍어내기

### 🌱 2-1. React.fragment

하나의 child 가 아니라 여러 children 을 리액트로 구현하는 방식 중에 React.fragment 가 있다.

```js
# 아래 각 줄의 코드는 모두 동일한 의미

<React.fragment><React.fragment>
<></>
```

요소들을 부모로써 감싸주는 역할만 한다.

### 🌱 2-2. React Element 생성하기

> 커스텀 엘리먼트를 사용하기 위해 변수명의 맨앞 알파벳은 대문자로 적용해야 한다.

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

### 🌱 2-3. React 에서 JS 와 JSX 섞어쓰기

커스텀 엘리먼트에서 이미 JSX 를 리턴하여 내부에 Javascript (삼항 연산자) 를 섞어쓰고 있는 코드이다.

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
