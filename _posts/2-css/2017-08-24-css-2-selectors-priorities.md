---
layout: post
style:
script:

category: css
featured:
permalink:

title: How to select a specific element?
short: Selectors & Priorities
description: In this tutorial, we're gonna talk about CSS Selectors and Priorities. <br>I was so forgetful that I've not mentioned Priorities. <br>Luckily, everything is just in time. :D
keywords: web development, beginner, non-coder, kei nart, free, tutorial, coding, programming, code nart, html, css, selectors, priorities

date: 2017-08-24 05:05:00
---

In the previous tutorial, we've seen how CSS Selectors work in basic. We simply
use HTML tags' names to select elements. They are every useful for styling common
stuff like paragraphs, article's headings... But, sometimes we need to give some
specific elements unique styles.

Fortunately, CSS allows us to select a specific element using its
[id](https://codenart.github.io/html/2017/07/27/html-2-images-links.html#id "ext").  
Let's write some CSS code to see an `id selector` in action.  
We're gonna create a [list](https//codenart.github.io) of fruits, none of them
are special but each one of them is unique. :D

`HTML code:`
<script src="https://gist.github.com/codenart/68314c206a0353c16a784f879e65df7d.js">
</script>

`CSS code:`
<script src="https://gist.github.com/codenart/e41832b16ad19879a8004d8029863311.js">
</script>

`Result:`
![unique](/images/css/2/unique.jpg)

You may notice that the id selectors begin with a hash `#`. It looks the same
how we use id to create
[internal links](https://codenart.github.io/html/2017/07/27/html-2-images-links.html#id "ext").

## Class selectors

`Basic selectors` are useful for styling common stuff.  
`Id selectors` are great for styling unique stuff.  
And there are `Class selectors` which are excellent for styling mixed stuff. :D

To use Class selectors, we need to specify class names for HTML elements using
[class attribute](https://www.w3schools.com/tags/att_class.asp "ext") and use
the class names as selectors.

`HTML code:`
<script src="https://gist.github.com/codenart/33357d72dafcc0955c2f31cf596610e6.js">
</script>

`CSS code:`
<script src="https://gist.github.com/codenart/2459e8aca7303d11c28b1d48448767ae.js">
</script>

`Result:`
![mixed](/images/css/2/mixed.jpg)

Yet, Class selectors are far more superior.  
As you notice that a Class can have more than 1 member. In our daily life, we
have dancing classes, meditate classes, etc... where people meet and learn
together. And anyone can also take more than 1 class.

This time, we're gonna define Classes and their styles firstly. Later, we'll
decide which elements will join the Classes and each element will join more
than one Class.

`CSS code:`
<script src="https://gist.github.com/codenart/df4a9eb30406234057ed8a28a61c4b63.js">
</script>

`HTML code:`
<script src="https://gist.github.com/codenart/2649540b3e375b8e1c56c6df846732a0.js">
</script>

`Result:`
![join](/images/css/2/join.jpg)

## Priorities in CSS

Priority is about `this one is more important than that one`.  

In CSS, Priority stands for the same meaning.  
For example, when an HTML element's text color is affected by more than 1 CSS
rules, the element will choose only 1 rule to apply.

`HTML code:`
<script src="https://gist.github.com/codenart/ae58befa55150b625de22215b671b598.js">
</script>

`CSS code:`
<script src="https://gist.github.com/codenart/74f0bfac9af6465539728acd082dde9a.js">
</script>

`Result:`
![choice](/images/css/2/choice.jpg)

Normally, CSS files will be processed by web browser from top to bottom and the
last rule should override the others. It's the CSS priorities cause the result,
and it's the selectors cause the priorities. Here is the list of priorities from
high to low level base on selectors:

1. Id selector
2. Class selector
3. Basic selector

## Special priority

We can also make a certain CSS rule become a very important one by append the
`!important` keyword right before ending of the CSS rule.

This keyword will not care about selectors. It simply make the certain CSS rule
become a super star.

`CSS code:`
<script src="https://gist.github.com/codenart/72cae94670da3e989650052c1410f8fe.js">
</script>

`HTML code:`
<script src="https://gist.github.com/codenart/39befd31b4e4b143612f8c7c9ba7361c.js">
</script>

`Result:`
![home](/images/css/2/home.jpg)

> HTML elements has their own wisdom. :D  
> \_\_A simple and happy mind

`!important` makes HTML elements feel at home. So, they will prefer the CSS
rules which are bound with this keyword on top of other choices.

We all love home feeling. It's time for
[Home](https://www.youtube.com/watch?v=-98nmUfaBqs "ext"). <i class="fa fa-heart"></i>

<div class="embed">
   <iframe width="560" height="315"
           src="https://www.youtube.com/embed/-98nmUfaBqs?ecver=1"
           frameborder="0" allowfullscreen>
   </iframe>
</div>

The most important part of learning CSS is about Properties and Values. For each
certain Property, there are various Values which can be used with. So, we will
cover details about CSS Values when we talk about each certain Property.

But, there're some common Value-types shared between CSS Properties like `Color`
and `Length`. And we will cover these two Value-types in the next tutorial
before start learning about certain Properties.
