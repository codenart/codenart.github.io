---
layout: post
style:
script:

category: css
featured:
permalink:

title: Set an image as background
short: Background Properties
description: In the previous tutorial, we've decorated some containers using the background-color property. <br>Yet, there are more ways to make containers look more lively. <br>Let's talk more about backgrounds.
keywords: web development, beginner, non-coder, kei nart, free, tutorial, coding, programming, code nart, css, background

date: 2017-08-24 05:20:00
---

We've used the `background-color` property some times in the previous tutorial.
This time we're gonna set an image as background of a container using
`background-image` property. This is the syntax of the property:

`background-image: url(path-to-image);`

The path to the image depends on if your image is stored locally or somewhere
else on the internet. In the example below, we'll use an image which
is hosted by [postimg.org](https://postimg.org/ "ext").

`HTML code:`
<script src="https://gist.github.com/codenart/071d0c196aef80209cfccb78ad09cb36.js">
</script>

`CSS code:`
<script src="https://gist.github.com/codenart/229274cf50bda2af992a83bcdaf5cd5c.js">
</script>

`Result:`
<p data-height="500" data-theme-id="light" data-slug-hash="LzpLrK"
   data-default-tab="result" data-user="codenart" data-embed-version="2"
   data-pen-title="Lovely Day" class="codepen">
   See the Pen <a href="https://codepen.io/codenart/pen/LzpLrK/">Lovely Day</a>
   by Kei Nart (<a href="https://codepen.io/codenart">@codenart</a>) on
   <a href="https://codepen.io">CodePen</a>.
</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

We've used an image which has a beautiful green field. But the beautiful part of
the image is hidden because the container's size is smaller than the background
image's size. Let's fix it in the next section.

## The `background-size` property

The `background-size` property can be used with 1 of these 2 smart values:
`cover` and `contain`. Those 2 values will both try to make the background
images fit to containers' size.

The `background-size: cover;` will make sure that the background image will fully
cover container's area.

The `background-size: contain;` will make sure that the background image will be
fully displayed inside container.

Let's duplicate our container and try both of those 2 values.

`HTML code:`
<script src="https://gist.github.com/codenart/095d4eafff70e1fb15a7d714c7a3a3fc.js">
</script>

`CSS code:`
<script src="https://gist.github.com/codenart/2cfa44add9857a211c205a6a2e0eef1d.js">
</script>

`Result:`

<p data-height="500" data-theme-id="light" data-slug-hash="boVrwL"
   data-default-tab="result" data-user="codenart" data-embed-version="2"
   data-pen-title="Perfect Lovely Day" class="codepen">
   See the Pen <a href="https://codepen.io/codenart/pen/boVrwL/">Perfect Lovely Day</a>
   by Kei Nart (<a href="https://codepen.io/codenart">@codenart</a>) on
   <a href="https://codepen.io">CodePen</a>.
</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

As you noticed that the background image of the second container has the same
`width` as the container but it has smaller `height`. By default, the background
image is repeated to fill its container's area.

To control repeating background image, there's `background-repeat` property. It
can be used with 1 of these 3 values: `repeat-x`, `repeat-y`, and `no-repeat`.
Just try this property with the second container to see if it works. :D

P/s: The `background-size` property can also be used with a couple of length-values.
The first value is `width` and the second one is `height`:

`background-size: 500px 300px;`

## The `background-position` property

In usual, we want our background fully `cover` container's area. So, there's
often a part of the background image is hidden. The `background-position`
property can help us to set position of the background image and make sure the
best part of the image will be shown. :D

This is the default values of `background-position` property:

`background-position: left top;`

The first value is horizontal position. It can be one of these values: `left`,
`center`, `right`, or a length-value.

The second value is vertical position. It can be one of these values: `top`,
`center`, `bottom`, or a length-value.

Let's change our example in the previous section a little bit to see the
`background-position` property in use.

`HTML code:`
<script src="https://gist.github.com/codenart/7ac197b917e446ec93d953b25ceb0b5f.js">
</script>

`CSS code:`
<script src="https://gist.github.com/codenart/e1ec08f53caaec34fb767561b173d66c.js">
</script>

`Result:`

<p data-height="500" data-theme-id="light" data-slug-hash="PJPXdQ"
   data-default-tab="result" data-user="codenart" data-embed-version="2"
   data-pen-title="A Perfect Lovely Day" class="codepen">
   See the Pen <a href="https://codepen.io/codenart/pen/PJPXdQ/">A Perfect Lovely Day</a>
   by Kei Nart (<a href="https://codepen.io/codenart">@codenart</a>) on
   <a href="https://codepen.io">CodePen</a>.
</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

Our tutorial about
[background-properties](https://codenart.github.io{{ page.url }}) has finished.
There're also some other Background Properties for advanced utilizing that I
don't bring them into this tutorial. Here is a list of all Background Properties
in case you want to go further:

- [background-color](https://www.w3schools.com/cssref/pr_background-color.asp "ext")
- [background-image](https://www.w3schools.com/cssref/pr_background-image.asp "ext")
- [background-position](https://www.w3schools.com/cssref/pr_background-position.asp "ext")
- [background-size](https://www.w3schools.com/cssref/css3_pr_background-size.asp "ext")
- [background-repeat](https://www.w3schools.com/cssref/pr_background-repeat.asp "ext")
- [background-origin](https://www.w3schools.com/cssref/css3_pr_background-origin.asp "ext")
- [background-clip](https://www.w3schools.com/cssref/css3_pr_background-clip.asp "ext")
- [background-attachment](https://www.w3schools.com/cssref/pr_background-attachment.asp "ext")
- [background](https://www.w3schools.com/cssref/css3_pr_background.asp "ext") -
This one is a short form which is used to write everything related to background
in a single line of code.
