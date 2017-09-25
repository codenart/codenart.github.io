---
layout: post
style:
script:

category: css
featured:
permalink:

title: How to specify Colors in CSS?
short: Colors & Lengths
description: In this tutorials, we're gonna talk about 2 common Value-types (Colors & Lengths). <br>Everyone of us loves colors in our own perspective. <br>So, let's start with CSS Colors. <i class="fa fa-heart"></i>
keywords: web development, beginner, non-coder, kei nart, free, tutorial, coding, programming, code nart, html, css, colors, units

date: 2017-08-24 05:10:00
---

<span id="simple"></span>
Color-Values are used with many Properties to style text, element's background,
element's border, etc... The `most simple` way to specify Colors in CSS is using
[Color-Names](https://www.w3schools.com/colors/colors_groups.asp "ext").

[Color-Names](https://www.w3schools.com/colors/colors_groups.asp "ext") are
beautiful and easy to remember because they are written in our nature language.
You can take a look at the color list here: [Full list of supported Color-Names](https://www.w3schools.com/colors/colors_groups.asp "ext")

Let's write some CSS code using Color-Names.  
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
real). As you see that, Color-Names are so descriptive and simple that anyone
can look at CSS code and know how the colors look like.

## Specify colors using HEX values

There're also other choices to specify Colors in CSS. They're less descriptive
than Color-Names when we look into CSS code but they're more precise and flexible.
Using [Color-Names](#simple "int") is the `most simple` way, and now we're
gonna talk about the `most popular` way: Using
[HEX-Values](https://www.w3schools.com/colors/colors_hexadecimal.asp "ext").

You can use your favorite image editor to pick colors and get their HEX-Values
to use in CSS code.
There are also online tools which can help you to do the task:
[Adobe Color](https://color.adobe.com/ "ext"),
[W3schools Picker](https://www.w3schools.com/colors/colors_picker.asp "ext").

This is how we say `Red` using HEX-Values: `#ff0000`.  
As HEX-Values are precise and flexible, we have more choices to say Red. The one
above is the most bright Red. My beloved Red is a little bit `less bright`, so I
can say `#bb0000`.

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

Let's assume that you are creating a website to give useful information to help
other people and you don't want to miss anyone. There are many people around the
world who are using
[Internet Explorer version 8](https://en.wikipedia.org/wiki/Internet_Explorer "ext")
and older technology web browsers. Fortunately, using HEX values is supported by
all web browsers at the moment. That's why it's the most popular option to
specify Colors in CSS.

Yet, there are more ways to specify Colors in CSS. They're supported by Internet
Explorer version 9+, and newer technology web browsers like Firefox, Google Chrome,
and Opera.

Here are some reference links to learn more about CSS colors:

- The most `simple` way to specify colors in CSS: --Using
[Color Names](https://www.w3schools.com/colors/colors_groups.asp "ext").
- The most `popular` way to specify colors in CSS: --Using
[HEX values](https://www.w3schools.com/colors/colors_hexadecimal.asp "ext").
- The most `efficient` way to specify colors in CSS: --Using
[HSLA values](https://www.w3schools.com/colors/colors_hsl.asp "ext").
- The most `beautiful` way to specify colors in CSS: --Using
[Gradients](https://www.w3schools.com/colors/colors_gradient.asp "ext").

`Screenshot (using Gradients):`
![7 dwarfs](/images/css/3/sevendwarfs.jpg)

We've finished talking about color-Values in CSS. The next common Value-type is
`Length`. Length-Values are used in various CSS Properties to specify size of
text and containers.

## How to specify Lengths in CSS?

In the previous tutorials, we've specified Length-Values
(in [pixel](https://en.wikipedia.org/wiki/Pixel "ext")) to use with `font-size`
It is the most simple way to specify lengths in CSS: using `static values`.

Let's write some CSS code that use `static values`.  
We're gonna create some colored blocks which have different sizes.

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

## Specify lengths using Dynamic-Values

For the example above, if we resize our web browsers' windows, those blocks will
maintain their specified widths. Dynamic-Values help us to make those blocks
flexible and adaptive to various screen sizes.

Let's change the above CSS code snippet a little bit and resize your web browser
to see the effect. This time, we're gonna use the unit `%` instead of `px` for
the last two blocks.

`CSS code:`
<script src="https://gist.github.com/codenart/ec72e9b9586dfdbd05c8b12da592141f.js">
</script>

Our tutorial about
[Colors & Lengths](http://codenart.github.io{{ page.url }} "ext")
has finished! In the next tutorials we'll talk about styling containers.
