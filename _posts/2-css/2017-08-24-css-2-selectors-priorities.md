---
layout: post
style:
script:

category: css
featured:
permalink:

title: How to select a specific element?
short: Selectors & Priorities
description: In this tutorial, we're gonna talk about CSS Selectors and Priorities. <br>I was so forgetful that I've not mentioned Priorities. <br>Fortunately, everything is just in time. :D
keywords: web development, beginner, non-coder, kei nart, free, tutorial, coding, programming, code nart, html, css, selectors, priorities

date: 2017-08-24 05:05:00
---

In the previous tutorial, we've seen how CSS Selectors work in basic. We simply
use HTML tags' names to select elements. They are nice for styling common stuff
like paragraphs, article's headings... But sometimes we need to give some specific
elements unique styles. To make it possible, CSS allows us to select a specific
element using its
[id](https://codenart.github.io/html/2017/07/27/html-2-images-links.html#id "ext").

Let's write some CSS code to see an `id selector` in action.  
We're gonna create a [list](https//codenart.github.io) of fruits that none of
them are special but each one of them is unique. :D

`HTML code:`
<script src="https://gist.github.com/codenart/68314c206a0353c16a784f879e65df7d.js">
</script>

`CSS code:`
<script src="https://gist.github.com/codenart/e41832b16ad19879a8004d8029863311.js">
</script>

`Result:`

<p data-height="500" data-theme-id="light" data-slug-hash="qPBoVb" data-default-tab="result"
   data-user="codenart" data-embed-version="2" data-pen-title="Not special but Unique"
   class="codepen">
   See the Pen
   <a href="https://codepen.io/codenart/pen/qPBoVb/">Not special but Unique</a>
   by Kei Nart (<a href="https://codepen.io/codenart">@codenart</a>) on
   <a href="https://codepen.io">CodePen</a>.
</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

You may notice that each of the `id selectors` begin with a hash `#`. It looks the
same as how we use `id` to create
[internal links](https://codenart.github.io/html/2017/07/27/html-2-images-links.html#id "ext").

## Class selectors

`Basic selectors` are useful for styling common stuff.  
`Id selectors` are great for styling unique stuff.  
And there are `class selectors` which are excellent for styling mixed stuff. :D

To use `class selectors`, we need to specify class names for HTML elements using
[class attribute](https://www.w3schools.com/tags/att_class.asp "ext") and use
the class names as selectors. Note that every `class selector` begin with a dot `.`

`HTML code:`
<script src="https://gist.github.com/codenart/33357d72dafcc0955c2f31cf596610e6.js">
</script>

`CSS code:`
<script src="https://gist.github.com/codenart/2459e8aca7303d11c28b1d48448767ae.js">
</script>

`Result:`

<p data-height="450" data-theme-id="light" data-slug-hash="pWoLxB" data-default-tab="result"
   data-user="codenart" data-embed-version="2" data-pen-title="The Harmony"
   class="codepen">
   See the Pen <a href="https://codepen.io/codenart/pen/pWoLxB/">The Harmony</a>
   by Kei Nart (<a href="https://codepen.io/codenart">@codenart</a>) on
   <a href="https://codepen.io">CodePen</a>.
</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

Yet, `class selectors` are far more superior.  
As you see that a class can have more than 1 member. This time, we're gonna
define classes and their styles firstly. Later, we'll decide which elements
will join the classes and each element will join more than 1 class.

`CSS code:`
<script src="https://gist.github.com/codenart/df4a9eb30406234057ed8a28a61c4b63.js">
</script>

`HTML code:`
<script src="https://gist.github.com/codenart/2649540b3e375b8e1c56c6df846732a0.js">
</script>

`Result:`

<p data-height="450" data-theme-id="light" data-slug-hash="WZNJem" data-default-tab="result"
   data-user="codenart" data-embed-version="2" data-pen-title="The Harmony"
   class="codepen">
   See the Pen <a href="https://codepen.io/codenart/pen/WZNJem/">The Harmony</a>
   by Kei Nart (<a href="https://codepen.io/codenart">@codenart</a>) on
   <a href="https://codepen.io">CodePen</a>.
</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

This idea is the same as in our daily life, isn't it? We have dancing classes,
meditate classes, etc... where people meet and learn together; And anyone can
also take `more than` 1 class.

## Priorities in CSS

When an HTML element's text color is affected by more than 1 CSS rule, the element
will choose only 1 rule to apply. Let's take a look at the example below.

`HTML code:`
<script src="https://gist.github.com/codenart/ae58befa55150b625de22215b671b598.js">
</script>

`CSS code:`
<script src="https://gist.github.com/codenart/74f0bfac9af6465539728acd082dde9a.js">
</script>

`Result:`

<p data-height="450" data-theme-id="light" data-slug-hash="boGMVz" data-default-tab="result"
   data-user="codenart" data-embed-version="2" data-pen-title="Choice" class="codepen">
   See the Pen <a href="https://codepen.io/codenart/pen/boGMVz/">Choice</a>
   by Kei Nart (<a href="https://codepen.io/codenart">@codenart</a>) on
   <a href="https://codepen.io">CodePen</a>.
</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

Normally, CSS files will be processed by web browser from top to bottom and the
last rule should override the others. It's the CSS Priorities cause the result,
and it's the Selectors cause the Priorities:

1. `Id selectors` has the highest priority
2. `Class selectors` has higher priority than basic selectors
3. `Basic selectors` ...

## Special priority

We can also make a certain CSS rule become a very important one by appending the
`!important` keyword right before the end of the CSS rule.

This keyword will not care about Selectors. It simply makes selected HTML
elements feel at [Home](https://www.youtube.com/watch?v=-98nmUfaBqs "ext").
So, they will prefer the CSS rule (which are bound with this keyword) on top
of other choices.

`CSS code:`
<script src="https://gist.github.com/codenart/72cae94670da3e989650052c1410f8fe.js">
</script>

`HTML code:`
<script src="https://gist.github.com/codenart/39befd31b4e4b143612f8c7c9ba7361c.js">
</script>

`Result:`
![home](/images/css/2/home.jpg)

The most important part of learning CSS is about Properties and Values. For each
certain Property, there are various Values which can be used with. So, we will
cover details about CSS Values when we talk about each certain Property.

In the next tutorial, we'll talk about 2 common Value-types: `Color` and `Length`.
And now, it's time for [Music](https://www.youtube.com/watch?v=-98nmUfaBqs "ext")!
<i class="fa fa-heart"></i>

<div class="embed">
   <iframe width="560" height="315"
           src="https://www.youtube.com/embed/-98nmUfaBqs?ecver=1"
           frameborder="0" allowfullscreen>
   </iframe>
</div>
