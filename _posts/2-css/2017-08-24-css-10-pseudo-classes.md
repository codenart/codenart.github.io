---
layout: post
style:
script:

category: css
featured:
permalink:

title: CSS Pseudo Classes
short: Pseudo Classes
description: Pseudo-classes are just selectors. They help us to style elements base on elements' states. <br>For example, we can make a link looks different when it is hovered. <br>Let's talk about these amazing selectors.
keywords: web development, beginner, non-coder, kei nart, free, tutorial, coding, programming, code nart, html, css, pseudo classes

date: 2017-08-24 05:45:00
---

[Pseudo-classes](https://www.w3schools.com/css/css_pseudo_classes.asp "ext")
are not something new. I call them `pseudo selectors`. They help us to style
elements base on elements' state. Every pseudo-selectors begins with a colon `:`.

Let's take a look at the example below. The selector `:empty` will select every
elements which is empty.

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

That's it. A pseudo class is nothing more than a selector. But, in order to use
pseudo-classes more precisely and effectively, we should combine them with other
selectors (use [intersection](https://codenart.github.io/css/2017/08/24/css-7-combining-selectors.html#1-union--intersection "ext")):
`p:empty`, `.section:empty`, `a:hover`, etc...

Here is the reference list of pseudo-classes:
[Full list of pseudo-classes](https://www.w3schools.com/css/css_pseudo_classes.asp "ext").

Let's pick another pseudo-class to practice. This time we're gonna use `:hover`.
This one is very common used for styling links and buttons. But, we can also use
it for other stuff.

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

As you see that pseudo-classes are not really something new. It's easy to get
the idea about how they work. So, We're not going to make examples for every one
of them. Just save the reference link for future uses or you can quickly parse
the link to pick out some and playing around with them.

## Pseudo Elements

Oooops! I've not mentioned
[pseudo-elements](https://www.w3schools.com/css/css_pseudo_elements.asp "ext")
in the headline. I'm sorry for this sudden plan. Because I have a feeling that
pseudo-elements are somewhat related to pseudo-classes. (Maybe not, I'm not sure. :D)

CSS allows us to insert some `fake elements` into webpages. Search engines like
Google, Bing, etc... won't see the content inside those elements. It's because
pseudo-elements are only used for styling purposes.

The example below will insert a pseudo-element right before each member of the
class `.entry`.

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

As you see that, pseudo-elements' syntax look quite similar to pseudo-classes.
I also consider pseudo-elements as selectors. Just imagine that our websites are
full of `hidden` fake elements and we just select them using some special
selectors and make them visible.

In the example above, `::before` is used to select (or insert) pseudo-elements
before the selected elements. We can also use `::after` to select pseudo-elements
after the selected elements.  

Besides, there are 3 more pseudo-elements available in the current version of
CSS:

- `::first-letter` - select first letter of an element
- `::first-line` - select the first line of an element
- `::selection` - select the portion of text of an element that is selected by user

You can try those pseudo-stuff with some `<p>` elements to do something like
visualizing a newspaper. :D

Our tutorial about
[Pseudo Classes & Pseudo Elements](https://codenart.github.io{{ page.url }} "ext")
has finished. In the next tutorial, we'll meet the width & height properties again.
Yes, we've used those properties many times since the early tutorials. But, to
keep things simple at the beginning, I've not mentioned something about them. :D
