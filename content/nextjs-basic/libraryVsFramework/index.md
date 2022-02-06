---
emoji: 👨🏻‍💻
title: 라이브러리와 프레임워크의 차이
date: '2022-02-06 17:07:00'
author: Teddy
tags: nextjs react library framework 라이브러리 프레임워크
categories: NextJS 기초
---

![](https://www.digitaltechmedia.in/wp-content/uploads/2020/11/framework-vs-library-dtm.jpg)

---

## ✍🏻 1. Next.js 를 들어가기 전에

리액트, Next.js 의 공식 문서 페이지의 메인을 보면 다음과 같이 소개되어 있다.

> [React](https://reactjs.org/) - "A JavaScript library for building user interfaces"

> [Next.js](https://nextjs.org/) - "The React Framework for Production"

대체 왜 하나는 라이브러리이고 다른 하나는 프레임워크일까.

## ✍🏻 2. 라이브러리

1. 단순 활용가능한 도구들의 집합.
2. 개발자로서 사용하는 것. 내가 원하는 대로 작성할 수 있고 사용하고 싶을 때 사용할 수 있음

## ✍🏻 3. 프레임워크

1. 뼈대나 기반구조, 제어의 역전 개념이 적용된 기술.
2. 소프트웨어의 특정 문제를 해결하기 위해서 상호 협력하는 클래스와 인터페이스의 집합.
3. 나의 코드를 프레임워크에서 불러오는 것.
4. 코드를 적절하게 잘 사용한다면, 프레임워크는 그 코드를 불러와 모든 것을 동작하게 한다.

## ✍🏻 4. 라이브러리와 프레임워크의 차이

**프레임워크는** 전체적인 앱의 흐름을 스스로가 쥐고 있어 사용자는 그 안에서 필요한 코드를 짜 넣기만 하면 프레임워크의 틀 안에서 수동적으로 동작하며 이 틀 안에 이미 제어 흐름에 대한 주도성이 내재 되어 있다.

**라이브러리는** 사용자가 전체적인 흐름을 만들며 즉, 라이브러리를 가져다가 사용하고 호출하는 측에 전적으로 주도성이 있다. 애플리케이션의 흐름을 직접 제어한다. 동작하는 도중에 필요한 기능이 있을 때 능동적으로 라이브러리를 사용한다.

## ✍🏻 5. Create React App 과 Create Next App 의 차이

CRA 의 경우는 항상 App 컴포넌트가 있다. 컴포넌트 위치나 경로 (라우팅) 설정 등등의 모든 주도성이 개발하는 사용자에게 달렸다.

CNA 는 pages 경로 내에 페이지 파일들을 작성한다든지 이런 특정한 규칙을 따라서 개발을 해야 한다. 그래야만 정상적으로 작동하기 때문이다. 리액트에서 사용하는 ReactDOM.render() 부분이 추상화 되어 있다.

---

[Link : webclub.tistory.com/458](https://webclub.tistory.com/458)

```toc

```
