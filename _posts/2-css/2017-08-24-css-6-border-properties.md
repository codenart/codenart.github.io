---
layout: post
style:
script:

category: css
featured:
permalink:

title: The border properties
short: Border Properties
description: Creating borders is one of the most common ways to decorate containers; <br>Something like image-frames, facebook posts, etc... <br>Let's talk about Border Properties.
keywords: web development, beginner, non-coder, kei nart, free, tutorial, coding, programming, code nart, html, css, border, border-radius

date: 2017-08-24 05:25:00
---

There are 4 border properties which can help us to quickly create borders around containers:

- [border-top](https://www.w3schools.com/cssref/pr_border-top.asp "ext")
- [border-right](https://www.w3schools.com/cssref/pr_border-right.asp "ext")
- [border-bottom](https://www.w3schools.com/cssref/pr_border-bottom.asp "ext")
- [border-left](https://www.w3schools.com/cssref/pr_border-left.asp "ext")

Each one of them is used with this formula:

`border-left: 5px solid Black;`

The first value `5px` is width of the border; The second value `solid` is the
border's style; And the last value `Black` is color of the border. There are
plenty of border-styles that you can find here:
[List of border-styles](https://www.w3schools.com/cssref/pr_border-style.asp "ext").

Let's decorate a button using border properties.

`HTML code:`
<script src="https://gist.github.com/codenart/5c2754f1112786840d562b0120c5e0ca.js">
</script>

`CSS code:`
<script src="https://gist.github.com/codenart/291c2002a27183d34d861464115cd1ae.js">
</script>

`Result:`

<p data-height="500" data-theme-id="light" data-slug-hash="veOpRW"
   data-default-tab="result" data-user="codenart" data-embed-version="2"
   data-pen-title="Explore" class="codepen">
   See the Pen <a href="https://codepen.io/codenart/pen/veOpRW/">Explore</a>
   by Kei Nart (<a href="https://codepen.io/codenart">@codenart</a>) on
   <a href="https://codepen.io">CodePen</a>.
</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

If the 4 borders have the same values, there is a short form of `border`
properties which can help us to specify the 4 borders in a single line of code.

`border: 2px solid DodgerBlue;`

To remove a border, we can just say `none`:

`border-left: none;`

And, to remove all borders:

`border: none;`

## The `box-sizing` property

This property is out of plan but it is related to border properties. :D

Let's assume that we have a `300px` wide container and we create a `5px` wide
`border-left`. We'll have an element which is `305px` wide (in total) because
the border will be drawn outside container's area. This is default behavior of
web browsers and set by the rule:

`box-sizing: content-box;`

But, we sometimes want to make sure that final size of some elements will not
change whether they have border or not. This can be done by changing value of
the `box-sizing` property:

`box-sizing: border-box;`

The `border-box` value will tell web browsers that border will be drawn inside
container's area.

## The `border-radius` properties

The `border-radius` properties help us to make containers' corners rounded.
These properties are independent from the `border` properties in the first
section, even though their names look quite similar.

Basically, there are 4 `border-radius` properties:

- [border-top-left-radius](https://www.w3schools.com/cssref/css3_pr_border-top-left-radius.asp "ext")
- [border-top-right-radius](https://www.w3schools.com/cssref/css3_pr_border-top-right-radius.asp "ext")
- [border-bottom-right-radius](https://www.w3schools.com/cssref/css3_pr_border-bottom-right-radius.asp "ext")
- [border-bottom-left-radius](https://www.w3schools.com/cssref/css3_pr_border-bottom-left-radius.asp "ext")

Let's change style of the button in the first section. This time we're gonna
give it rounded corners and filled background.

`CSS code:`
<script src="https://gist.github.com/codenart/d1bd5c474425e30bcbb3a3f17e056ff2.js">
</script>

`Result:`

<p data-height="500" data-theme-id="light" data-slug-hash="jGPzYY"
   data-default-tab="result" data-user="codenart" data-embed-version="2"
   data-pen-title="Explore (rounded)" class="codepen">
   See the Pen <a href="https://codepen.io/codenart/pen/jGPzYY/">Explore (rounded)</a>
   by Kei Nart (<a href="https://codepen.io/codenart">@codenart</a>) on
   <a href="https://codepen.io">CodePen</a>.
</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

There is also a short form of `border-radius` properties which can help us to
specify 4 values in a single line of code. The four values are placed in order:
`top-left`, `top-right`, `bottom-right`, `bottom-left`. (clockwise)

`border-radius: 3px 24px 3px 24px;`

If there are only 2 values used in the short form, the first value will be
applied to `top-left & bottom-right` corners, the second value will be applied
to `top-right & bottom-left` corners.

`border-radius: 3px 24px;`

If all 4 corners are rounded equally, we can use the short form with only 1 value.

`border-radius: 25px;`

Our tutorial about `borders` has finished. Now we've known how to style containers.
In the next tutorial, we'll talk about more about how to set position and align
containers.

`P/s:` Besides background and border properties, there are also some other
properties which can help us to style containers for various purposes. The
properties will require Internet Explorer version `9+` and newer technology web
browsers like Chrome, Firefox, Opera, etc. In case you want to go further, please
check out these two properties:

- [opacity](https://www.w3schools.com/cssref/css3_pr_opacity.asp "ext") property
- [box-shadow](https://www.w3schools.com/cssref/css3_pr_box-shadow.asp "ext") property
