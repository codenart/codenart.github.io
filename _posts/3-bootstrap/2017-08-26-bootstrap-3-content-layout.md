---
layout: post
style:
script:

category: bootstrap
featured:
permalink:

title: Bootstrap's utilities for content
short: Content & Layout
description: In this tutorial, we'll talk about Content and Layout toolsets (mentioned in the first tutorial). <br>Since content is the most fundamental material of a website; <br>Let's start with Bootstrap's Content toolsets.
keywords: web development, beginner, non-coder, kei nart, free, tutorial, coding, programming, code nart, html, css, bootstrap, content, layout

date: 2017-08-26 05:10:00
---

Just peek in the Content menu on the left sidebar of the Bootstrap's official website:  
[getbootstrap.com -> Documentation -> Content](https://getbootstrap.com/docs/4.0/content/reboot/ "ext")

`Screenshot:`
![Bootstrap's Content toolsets](/images/bootstrap/3/content.jpg)

Wew, there are only a few things appear in the sub-menu. Since the most common
content types in almost every websites are `text` and `image`, Bootstrap's
Content toolsets are all about those 2 content types. The most frequently used
toolset is the one related to `Typography`. Let's see what we have in this toolset.

`Screenshot:`
![Bootstrap's Typography toolset](/images/bootstrap/3/typography.jpg)

The section `Headings` talks about common styles of heading tags pre-defined by
Bootstrap. They also offer heading `classes` which can make any text element look
like a heading.

Next section `Display headings` contains some classes which are pre-defined with
a display font. If you're not familiar with design stuff, then a display font is
a strong typeface which will strongly attract user's eyes. Normally, these
utilities will be very nice to sit on front-pages.

Let's write a piece of code to see the difference between `heading` classes
and `display heading` classes. We'll also use the class `lead` which makes a
paragraph stand out.

`HTML code:`
<script src="https://gist.github.com/codenart/114a93d35225a9a07ea65ffe8eb1793a.js">
</script>

`Result:`
<p data-height="500" data-theme-id="light" data-slug-hash="JOQBab"
   data-default-tab="result" data-user="codenart" data-embed-version="2"
   data-pen-title="Bootstrap's Typography" class="codepen">
   See the Pen <a href="https://codepen.io/codenart/pen/JOQBab/">Bootstrap's Typography</a>
   by Kei Nart (<a href="https://codepen.io/codenart">@codenart</a>) on
   <a href="https://codepen.io">CodePen</a>.
</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

Please check the
[Text-Utilities](https://getbootstrap.com/docs/4.0/content/typography/#text-utilities "ext")
section and [Blockquote](https://getbootstrap.com/docs/4.0/content/typography/#blockquotes "ext")
section if you have some time. We'll need to use them when build the sample
homepage mentioned in the first tutorial.

## Laying out using Bootstrap's grid system

To make laying out task simpler, some great minds on earth have invented grid
system. The idea is simple. Every container can be divided into 12 columns which
has the same width. Each of the container's children will take some columns
(up to 12) to adapt our design. Let's say when we want to create a product grid
with many cards like the image below. Each card will take 3 columns and we will
have 4 cards per row. Let's see how Bootstrap's Grid can help us in this case.

`Sample image:`
![product grid](/images/bootstrap/3/grid.jpg)

`HTML code:`
<script src="https://gist.github.com/codenart/9ec1a0b45876750b2fda074a296e05e9.js">
</script>

`Result:` [Click here to see the result](https://codepen.io/codenart/full/gXVxWB/ "ext")

Simple? :D  
Yet, Bootstrap's Grid can also help us to create a responsive layout. We can let
PC users see 4 products per row; tablet users will see 2 products in per row; and
smartphone users will see only one product per row. Let's change our code snippet
a little bit and resize your web browser window to see the result.

`HTML code:`
<script src="https://gist.github.com/codenart/6df12de9493946c29995e6484609e073.js">
</script>

`Result:` [Click here to see the result](https://codepen.io/codenart/full/NwQvMK/ "ext")

And this is how the grid works in the example above. For smartphone devices which
has screen size smaller than `-sm-` breakpoint, both of the two classes `col-sm-6`
and `col-lg-3` will give `width: 100%`. So, we'll have only 1 product per row;

For tablet devices, the class `col-sm-6` will give `max-width: 50%` which means 6
columns in based 12-columns grid. So, we'll have 2 products per row.

For large screen devices, the class `col-md-3` will give `max-width: 25%`. So,
we'll have 4 products per row.

The current version of Bootstrap (v4) offers a new feature that allow us to align
items using a helper class. Please check the [Alignment](https://getbootstrap.com/docs/4.0/layout/grid/#alignment "ext") section
before heading to our next tutorial. We'll build a simple homepage as planned in
the beginning of this series. :D
