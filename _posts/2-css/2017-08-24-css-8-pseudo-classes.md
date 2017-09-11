---
layout: post
style:
script:

category: css
featured:
permalink:

title: CSS Pseudo Classes
short: Pseudo Classes
description: Pseudo Classes are just Selectors. They help us to style elements base on elements' states. <br>Think about making a link look different when it is hovered. <br>Let's talk about Pseudo Classes.
keywords: web development, beginner, non-coder, kei nart, free, tutorial, coding, programming, code nart, html, css, pseudo classes

date: 2017-08-24 05:35:00
---

[Pseudo Classes](https://www.w3schools.com/css/css_pseudo_classes.asp "ext")
are not something new. In my words, I call them `Pseudo Selectors`. The
Selectors always begin with a colon `:`

Let's take a look at the example below. The `:empty` is a `Pseudo... Selector` :D  
This Selector will select every elements which is empty (have no text and child element).

`CSS code:`
<script src="https://gist.github.com/codenart/5643dd3c4db3fd8851f8abcf41fcdc58.js">
</script>

`HTML code:`
<script src="https://gist.github.com/codenart/32f0b6a816a991f70c5735c8770bc7f4.js">
</script>

`Result:`
![empty](/images/css/8/empty.jpg)

That's it.
[Pseudo Classes](https://www.w3schools.com/css/css_pseudo_classes.asp "ext")
are just Selectors. But, in order to use them more precisely and effectively, we
should
[combine](https://codenart.github.io/css/2017/08/24/css-7-combining-selectors.html#1-union--intersection "ext")
them with other Selectors (use
   [Intersection](https://codenart.github.io/css/2017/08/24/css-7-combining-selectors.html#1-union--intersection "ext")):
`p:empty`, `.section:empty`, `a:hover`, etc...

There are plenty of [Pseudo Classes](https://www.w3schools.com/css/css_pseudo_classes.asp "ext")
and here is the reference link: [Full list of Pseudo Classes](https://codenart.github.io/css/2017/08/24/css-7-combining-selectors.html#1-union--intersection "ext").

We're gonna make another example. This time we're gonna use the selector `:hover`.
Just try these code snippets to see how it work. :D

`HTML code:`
<script src="https://gist.github.com/codenart/086b1dcc5bf29eea1dec26cedcb8a906.js">
</script>

`CSS code:`
<script src="https://gist.github.com/codenart/edf0e5dfa5ccd7fb8ce0642f6239e7d3.js">
</script>

Have you touched the `<h1>` elements? :D  
The `:hover` is the one which can help us to improve your
[Simple Navigation Bar](https://codenart.github.io/sample/2017/09/03/sample-1-simple-navbar.html#summary "ext")
and make it more interactive. You may want to give all the `.nav-link` hover
effects. Go for it.

As you see that
[Pseudo Classes](https://www.w3schools.com/css/css_pseudo_classes.asp "ext") are
not really something new. We actually got the idea about how they work at the
first example. So, We're not going to make examples about every one of them.
Just save the reference link for future use. Or you can quickly parse the link
to pick out some and playing around with them.

Next. Let's talk about Pseudo Elements.  
Ooops! I've not mentioned Pseudo Elements before. I'm sorry for this sudden plan. :D

## Pseudo Elements

[Pseudo Elements](https://www.w3schools.com/css/css_pseudo_elements.asp "ext")
are elements which are not elements. :D

But it's true. CSS allows us to insert some `fake elements` into webpages. Search
Engines like Google, Bing, etc... won't see the content inside those elements.
It's because
[Pseudo Elements](https://www.w3schools.com/css/css_pseudo_elements.asp "ext")
are only used for styling purposes.

The example below will insert a `Pseudo Element` right before each member of
the class `.entry`

`CSS code:`
<script src="https://gist.github.com/codenart/683213000907ad807e637d4a108de6c1.js">
</script>

`HTML code:`
<script src="https://gist.github.com/codenart/10b094a41a289c4334e5549d67e98977.js">
</script>

`Result:`
![separators](/images/css/8/separator.jpg)

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
has finished. In the next tutorial, we'll talk about
[Spacing Properties](https://codenart.github.io{{ page.next.url }} "ext").
They're one of the most commonly used Properties in CSS. They're simple, easy to
understand. Yet, they're very very very useful tools. :D

You don't have to remember everything in details. You only need to know that
these tools exist. Bookmark reference links and pick up them whenever you need. :D
