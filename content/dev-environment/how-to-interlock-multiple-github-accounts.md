---
emoji: π
title: μ»΄ν¨ν°μ github κ³μ  μ¬λ¬κ° μ°λνκΈ°
date: '2022-02-07 23:30:00'
author: Teddy
tags: github account multiple κΉνλΈ κ³μ  μ°λ
categories: Dev-Environment
---

## π© νμ¬ μλ¬΄μ© λ§₯λΆμμ κ°μΈ κ³μ μ github μ¬μ©νκΈ°

μμ¬ μ²«λ  μ΄κΈ° Github μ€μ μ ν΅ν΄ μ΄λ―Έ νμ¬ κ³μ μ github μ μ»΄ν¨ν°μ μ°λνμλ€.

μ΄ν κ°μΈ κ³μ μ github μ μΆκ°λ‘ μ°λν΄ κ°μΈ github κ³μ μ repo (gatsby λΈλ‘κ·Έ λ±) μ μ»€λ°μ νκΈ° μμνλ€κ° νλμ μ¬μ©μ νμ§ μμλ€.

κ·Έλμ λ€μ μ°λμ νλ μν©μ΄ μλλ° μ΄λ² κΈ°νμ λ°©λ²μ λΈλ‘κ·Έμ μ μ΄ λμμΌ λ€μ λ²μ ν€λ©μ§ μμ κ±° κ°μλ€.

## π© 1. ssh-key μμ±νκΈ°

ν°λ―Έλμ μλ μ½λμ κ°μ΄ κΉνλΈ κ³μ μ μ΄λ©μΌμ μλ ₯νλ€.

```bash
ssh-keygen -t rsa -C "example@gmail.com"
```

κ·Έλ¬λ©΄ "Enter file in which to save the key" λΌλ λ©μμ§κ° λ¨λλ° key κ° μ μ₯λ  μμΉλ κ·Έλλ‘ λκ³  <br /> κ³μ μ κ΅¬λΆμ§μ μ μλλ‘ νμΌλͺλ§ λ³κ²½ν΄ μ€λ€.

μ΄ κ³Όμ μ΄ λλλ©΄ .ssh ν΄λ λ°μ id_rsaκ³Ό id_rsa.pub νμΌμ΄ μμ±λλ€.

λμ κ²½μ°λ company-git κ³Ό personal-git μΌλ‘ λ μμ νμΌμ μμ±νλ€. (μ΄λ―Έ μμ±λμ΄ μμλ€)

.ssh κ²½λ‘ λ΄μ νλμ κ³μ μ μΆκ°ν  λλ§λ€ "company-git", "company-git.pub" μ²λΌ ν μμ νμΌμ΄ λμμ μμ±λ¨μ νμΈν  μ μλ€.

## π© 2. ssh-key μ μ©νκΈ°

vi ~/.ssh/config λͺλ Ήμ΄λ₯Ό ν΅ν΄ config νμΌμ μμ±νμ¬ μλμ κ°μ λ΄μ©μ μΆκ°ν΄ μ€λ€.

(μ΄λ―Έ λ€μ΄ μμλ€)

```bash
# company
Host company-github.com
HostName github.com
User git
IdentityFile ~/.ssh/company-git

# personal
Host personal-github.com
HostName github.com
User git
IdentityFile ~/.ssh/personal-git
```

Host ν€μλ λ€μλ Git Clone μ github repository μ μ°κ²°ν  url μ΄λ¦μ΄ λλ€.

IdentityFile λ€μλ μκΉ 1 μμ μΆκ°ν ssh-key μ νμΌ κ²½λ‘ μμΉλ₯Ό λ£μ΄μ£Όλ©΄ λλ€.

## π© 3. ssh-key λ±λ‘νκΈ°

ssh-add λͺλ Ήμ΄λ₯Ό μλ ₯ν΄ ssh-key λ₯Ό λ±λ‘ν΄ μ€λ€.

λμ κ²½μ°λ "personal-git" μ νν΄μλ§ ssh-key λ₯Ό λ±λ‘νλ€.

```bash
ssh-add ~/.ssh/personal-git

Identity added: /Users/teddy/.ssh/personal-git (seolleung22@gmail.com)
```

Identity added ~~ λΌλ λ©μμ§κ° λ¨λ©΄ μ λ±λ‘λ κ²μ΄λ€.

## π© 4. ssh-key λ±λ‘νκΈ°

μλ λͺλ Ήμ΄λ₯Ό ν°λ―Έλμ μλ ₯νλ©΄ ssh-rsa λ‘ μμνμ¬ λ³ΈμΈ μ΄λ©μΌλ‘ λλλ ssh-key κ°μ΄ λμ€λλ°, μ΄ κ°μ λ³΅μ¬νμ¬ github μ λ±λ‘νλ κ³Όμ μ΄ νμνλ€.

```bash
cat ~/.ssh/personal-git.pub
```

<br />
μ΄μ  μμ μ κΉνλΈ κ³μ μμ settings βΈ SSH and GPG keys βΈ New SSH keys λ²νΌμ λλ¬ μμ ν°λ―Έλμμ λ³΅μ¬ν ssh-key λ₯Ό λΆμ¬λ£μ΄ μ£Όκ³  μ μ₯νλ€.
<br />
<br />

![](./ssh.png)

μ΄μ  ssh -T personal-github.com λͺλ Ήμ΄λ‘ μ μμ μΌλ‘ ssh-key κ° μ°κ²°λμλμ§ νμΈν΄ λ³Έλ€.

```bash
ssh -T personal-github.com
Hi teddy! You've successfully authenticated, but GitHub does not provide shell access.
```

## π© 5. Clone Github Repository

Clone λ°κ³ μ νλ Repo μ λ€μ΄κ°μ Code λ²νΌμ λλ₯΄κ³  SSH ν­μ λλ₯΄λ©΄ μλμ κ°μ νλ©΄μ΄ λμ¨λ€.
<br />

![](./clone-repository.png)

μ λΆ λ³΅μ¬ν λ€μ "git@" λ€μ .ssh/config νμΌμμ μ ν Host μ΄λ¦μ λ£μ΄μ€μΌ νλ€. μ΄λ κ² νλ©΄ Host μ λ§λ ssh ν€λ₯Ό μ°Ύμ ν΄λ‘ νλ€.

```bash
git clone git@personal-github.com:teddy/TeddyBlog.git
git clone git@github.com-userA:githubκ³μ /repoμ΄λ¦.git
```

<br />
clone μ΄νμλ ν΄λΉ λ‘μ»¬ Repo λ‘ μ΄λν λ€ μλ λͺλ Ήμ΄λ₯Ό ν΅ν΄ κ³μ μ μ€μ νλ€.

git μ μ΄κΈ° global κ³μ  (νμ¬κ³μ ) κ³Ό μΆ©λνμ§ μκ³  λ°λ‘ κ³μ μ κ΄λ¦¬ν΄ μ£ΌκΈ° μν¨μ΄λ€.

```bash
git config --local user.name "Your Name"
git config --local user.email "Your Email"
```

μ΄μ  ν΄λΉ λ ν¬μμ commit, push λ±μ κ·Έλλ‘ μ§ννλ©΄ λλ€.

```toc

```
