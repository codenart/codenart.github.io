---
layout: post
style:
script:

category: css
featured:
permalink:

title: CSS Pseudo Classes
short: Pseudo Classes
description: Pseudo Classes are just Selectors. They help us to style elements base on elements' states. <br>For example, we can make a link look different when it is hovered. <br>Let's talk about these amazing Selectors.
keywords: web development, beginner, non-coder, kei nart, free, tutorial, coding, programming, code nart, html, css, pseudo classes

date: 2017-08-24 05:45:00
---

[Pseudo Classes](https://www.w3schools.com/css/css_pseudo_classes.asp "ext")
are not something new. I call them `Pseudo Selectors`. They help us to style
elements base on elements' states. Every `Pseudo Selectors` begins with a colon `:`.

Let's take a look at the example below. The Selector `:empty` will select every
elements which is empty (have no text and child element).

`CSS code:`
<script src="https://gist.github.com/codenart/5643dd3c4db3fd8851f8abcf41fcdc58.js">
</script>

`HTML code:`
<script src="https://gist.github.com/codenart/32f0b6a816a991f70c5735c8770bc7f4.js">
</script>

`Result:`

<p data-height="500" data-theme-id="light" data-slug-hash="Jrbayp"
   data-default-tab="result" data-user="codenart" data-embed-version="2"
   data-pen-title="Empty Your Cup" class="codepen">
   See the Pen <a href="https://codepen.io/codenart/pen/Jrbayp/">Empty Your Cup</a>
   by Kei Nart (<a href="https://codepen.io/codenart">@codenart</a>) on
   <a href="https://codepen.io">CodePen</a>.
</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

That's it.
[Pseudo Classes](https://www.w3schools.com/css/css_pseudo_classes.asp "ext")
are just Selectors. But, in order to use them more precisely and effectively, we
should
[combine](https://codenart.github.io/css/2017/08/24/css-7-combining-selectors.html#1-union--intersection "ext")
them with other Selectors (use
   [Intersection](https://codenart.github.io/css/2017/08/24/css-7-combining-selectors.html#1-union--intersection "ext")):
`p:empty`, `.section:empty`, `a:hover`, etc...

There are plenty of
[Pseudo Classes](https://www.w3schools.com/css/css_pseudo_classes.asp "ext")
listed here:
[Full list of Pseudo Classes](https://www.w3schools.com/css/css_pseudo_classes.asp "ext").
Let's pick another Pseudo Class to practice.

This time we're gonna use the selector `:hover`. This one is very common used
for styling links and buttons. But, we can also use it for other stuff.

`HTML code:`
<script src="https://gist.github.com/codenart/086b1dcc5bf29eea1dec26cedcb8a906.js">
</script>

`CSS code:`
<script src="https://gist.github.com/codenart/edf0e5dfa5ccd7fb8ce0642f6239e7d3.js">
</script>

`Result:`

<p data-height="500" data-theme-id="light" data-slug-hash="xXRajW"
   data-default-tab="result" data-user="codenart" data-embed-version="2"
   data-pen-title="Full-time Dreamer" class="codepen">
   See the Pen <a href="https://codepen.io/codenart/pen/xXRajW/">Full-time Dreamer</a>
   by Kei Nart (<a href="https://codepen.io/codenart">@codenart</a>) on
   <a href="https://codepen.io">CodePen</a>.
</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

Have you touched that? :D  

As you see that
[Pseudo Classes](https://www.w3schools.com/css/css_pseudo_classes.asp "ext") are
not really something new. We've actually got the idea about how they work since
the first example. So, We're not going to make examples about every one of them.
Just save the reference link for future use. Or you can quickly parse the link
to pick out some and playing around with them.

Next. Let's talk about Pseudo Elements.  
Ooops! I've not mentioned Pseudo Elements before. I'm sorry for this sudden plan. :D

## Pseudo Elements

[Pseudo Elements](https://www.w3schools.com/css/css_pseudo_elements.asp "ext")
are elements which are not elements. :D

I know it sounds silly but it's true. CSS allows us to insert some `fake elements`
into webpages. Search Engines like Google, Bing, etc... won't see the content
inside those elements. It's because
[Pseudo Elements](https://www.w3schools.com/css/css_pseudo_elements.asp "ext")
are only used for styling purposes.

The example below will insert a `Pseudo Element` right before each member of
the class `.entry`.

`CSS code:`
<script src="https://gist.github.com/codenart/683213000907ad807e637d4a108de6c1.js">
</script>

`HTML code:`
<script src="https://gist.github.com/codenart/10b094a41a289c4334e5549d67e98977.js">
</script>

`Result:`

<p data-height="500" data-theme-id="light" data-slug-hash="GMNXXb"
   data-default-tab="result" data-user="codenart" data-embed-version="2"
   data-pen-title="Pseudo Separators" class="codepen">
   See the Pen <a href="https://codepen.io/codenart/pen/GMNXXb/">Pseudo Separators</a>
   by Kei Nart (<a href="https://codepen.io/codenart">@codenart</a>) on
   <a href="https://codepen.io">CodePen</a>.
</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

In the example `::before` is used to insert elements right `before` the selected elements.  
There're also `::after` which is used to insert elements right `after` the selected elements.  

Besides, there are 3 more `Pseudo Elements` available in the current version of
CSS:

- `::first-letter` - select first letter of an element
- `::first-line` - select the first line of an element
- `::selection` - select the portion of text of an element that is selected by user

You can try those `Pseudo Stuff` with some `<p>` elements to create... something. :D  
How about visualizing a newspaper? :D  

Our tutorial about
[Pseudo Classes & Pseudo Elements](https://codenart.github.io{{ page.url }} "ext")
has finished. In the next tutorial, we'll talk about `margin` & `padding`
properties which can help use to control spaces inside and outside containers.
They're one of the most commonly used properties in CSS. They're simple, easy
to understand. And yet, they're very very very useful. :D

`P/s:` You don't have to remember everything in details. You only need to know that
these tools exist. Bookmark reference links and pick up them whenever you need. :D
