---
layout: post
style:
script:

category: css
featured:
permalink:

title: How to specify Colors in CSS?
short: Colors & Lengths
description: In this tutorials, we're gonna talk about 2 common value-types (Color & Length). <br>Everyone of us loves colors in our own perspective. <br>So, let's start with CSS Colors. <i class="fa fa-heart"></i>
keywords: web development, beginner, non-coder, kei nart, free, tutorial, coding, programming, code nart, html, css, colors, units

date: 2017-08-24 05:10:00
---

<span id="simple"></span>
Colors are used with many Properties to style text, element's background,
element's border, etc... The `most simple` way to specify colors in CSS is using
[color-names](https://www.w3schools.com/colors/colors_groups.asp "ext"). You can
take a look at the color list here: [Full list of supported color-names](https://www.w3schools.com/colors/colors_groups.asp "ext")

Let's write some CSS code using `color names`.  
As I'm not having good sense of design stuff and using colors, so I'm gonna use
a picture as color palette and pick some colors from it to use in examples. You
should use your own favorite colors in your sample HTML document or your website. :D

`Color palette:`
![snow white and 7 dwarfs](/images/css/3/palette.jpg)

`HTML code:`
<script src="https://gist.github.com/codenart/4947882eb4a902a8683ff76aa9553c33.js">
</script>

`CSS code:`
<script src="https://gist.github.com/codenart/5e13d148bff2458e6048f8f70c58ccdb.js">
</script>

`Result:`

<p data-height="500" data-theme-id="light" data-slug-hash="yzLjze"
   data-default-tab="result" data-user="codenart" data-embed-version="2"
   data-pen-title="Snow White and 7 dwarfs" class="codepen">
   See the Pen
   <a href="https://codepen.io/codenart/pen/yzLjze/">Snow White and 7 dwarfs</a>
   by Kei Nart (<a href="https://codepen.io/codenart">@codenart</a>) on
   <a href="https://codepen.io">CodePen</a>.
</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

In the example above, there're 2 colors: `RoyalBlue` and `Snow` (Snow White is
real). As you see that, `color names` are so descriptive and simple that anyone
can guess how the colors look like when peek in CSS code.

## Specify colors using HEX-values

There're also other choices to specify colors in CSS. They're less descriptive
than `color names` when we look into CSS code but they're more precise and flexible.
Using [color-names](#simple "int") is the `most simple` way, and now we're
gonna talk about the `most popular` way: Using
[HEX-values](https://www.w3schools.com/colors/colors_hexadecimal.asp "ext").

There are online tools which can help use to pick colors and get their `HEX
values` to use in CSS code:
[Adobe Color](https://color.adobe.com/ "ext"),
[W3schools Picker](https://www.w3schools.com/colors/colors_picker.asp "ext").
You can also use your favorite image editor to do the task.

This is how we say `Red` using `HEX values`: `#ff0000`.

As `HEX values` are precise and flexible, we have more choices to say Red. The
one above is the most bright Red. My beloved Red is a little bit `less bright`,
so I can say `#bb0000`.

`HTML code:`
<script src="https://gist.github.com/codenart/29964874e246275be3ddf9b7a2d1c747.js">
</script>

`CSS code:`
<script src="https://gist.github.com/codenart/23e0508d1a1066f7521daea6a794aad2.js">
</script>

`Result:`

<p data-height="500" data-theme-id="light" data-slug-hash="rGNvvy" data-default-tab="result"
   data-user="codenart" data-embed-version="2" data-pen-title="Red Dwarf" class="codepen">
   See the Pen <a href="https://codepen.io/codenart/pen/rGNvvy/">Red Dwarf</a>
   by Kei Nart (<a href="https://codepen.io/codenart">@codenart</a>) on
   <a href="https://codepen.io">CodePen</a>.
</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

Let's assume that you are creating a website to share useful information to help
other people and you want to be fair with everyone. There are many people around
the world who are using
[Internet Explorer version 8](https://en.wikipedia.org/wiki/Internet_Explorer "ext")
and older technology web browsers. Fortunately, using `HEX values` is supported
by all web browsers at the moment. That's why it's the most popular option to
specify colors in CSS.

Yet, there are more ways to specify colors in CSS. They're supported by Internet
Explorer version 9+, and newer technology web browsers like Firefox, Google
Chrome, and Opera.

Here are some reference links to learn more about CSS colors:

- The most `simple` way to specify colors in CSS: --Using
[color-names](https://www.w3schools.com/colors/colors_groups.asp "ext").
- The most `popular` way to specify colors in CSS: --Using
[HEX-values](https://www.w3schools.com/colors/colors_hexadecimal.asp "ext").
- The most `efficient` way to specify colors in CSS: --Using
[HSLA-values](https://www.w3schools.com/colors/colors_hsl.asp "ext").
- The most `beautiful` way to specify colors in CSS: --Using
[Gradients](https://www.w3schools.com/colors/colors_gradient.asp "ext").

`Screenshot (using Gradients):`
![7 dwarfs](/images/css/3/sevendwarfs.jpg)

We've finished talking about colors in CSS. Let's talk about the next common
value-type: `Length`.

## How to specify lengths in CSS?

In the previous tutorials, we've specified lengths in
[pixel](https://en.wikipedia.org/wiki/Pixel "ext") to use with the `font-size`
property. It is the most simple way to specify lengths in CSS: using `static values`.

Here is another example using `static values` to specify lengths.

`HTML code:`
<script src="https://gist.github.com/codenart/4ffbb4bc310d672bd422af91f341836f.js">
</script>

`CSS code:`
<script src="https://gist.github.com/codenart/ee1a1f60dc27242eeb297039b8c7abee.js">
</script>

`Result:`

<p data-height="500" data-theme-id="light" data-slug-hash="LzYrZX"
   data-default-tab="result" data-user="codenart" data-embed-version="2"
   data-pen-title="The Fifth Dimension" class="codepen">
   See the Pen
   <a href="https://codepen.io/codenart/pen/LzYrZX/">The Fifth Dimension</a>
   by Kei Nart (<a href="https://codepen.io/codenart">@codenart</a>) on
   <a href="https://codepen.io">CodePen</a>.
</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

## Specify lengths using dynamic-values

For the example above, if we resize our web browsers' windows, those blocks will
maintain their specified widths. It means that they're not adaptive to various
screen sizes. Dynamic-values help us to make those blocks flexible and adaptive
to various screen sizes so our webpages may look good on any devices.

Let's change the above CSS code snippet a little bit and resize your web browser
to see the effect. This time, we're gonna use the unit `%` instead of `px` for
the last two blocks.

`CSS code:`
<script src="https://gist.github.com/codenart/ec72e9b9586dfdbd05c8b12da592141f.js">
</script>

Our tutorial about
[Colors & Lengths](http://codenart.github.io{{ page.url }} "ext")
has finished! In the next tutorials we'll talk about styling containers.
