---
layout: post
style:
script:

category: css
featured:
permalink:

title: How to specify Colors in CSS?
short: Colors & Lengths
description: In this tutorials, we're gonna talk about common Value-types in CSS. <br>Everyone of us loves colors in our own perspective. <br>So, let's start with CSS Colors. <i class="fa fa-heart"></i>
keywords: web development, beginner, non-coder, kei nart, free, tutorial, coding, programming, code nart, html, css, colors, units

date: 2017-08-24 05:10:00
---

<span id="simple"></span>
Color-Values are used with many Properties to style text, elements' background,
elements' border, etc... The `most simple` way to specify Colors in CSS is using
[Color Names](https://www.w3schools.com/colors/colors_groups.asp "ext"). Color
Names are beautiful and easy to remember because they are written in our nature
language.

Here is a reference source of supported color names:
[Click here](https://www.w3schools.com/colors/colors_groups.asp "ext")

Let's write some CSS code.  
As I'm not having good sense of design stuff and using colors, so I'm gonna use
a picture as color palette and pick some colors from it to use in examples. You
should use your own favorite colors in your sample HTML document or your website. :D

`Color palette:`
![snow white and 7 dwarfs](/images/css-3/palette.jpg)

`HTML code:`
<script src="https://gist.github.com/codenart/4947882eb4a902a8683ff76aa9553c33.js"></script>

`CSS code:`
<script src="https://gist.github.com/codenart/5e13d148bff2458e6048f8f70c58ccdb.js"></script>

`Result:`
![snow white](/images/css-3/snowwhite.jpg)

As you see that, color names are very descriptive. The example above use 2
colors: `RoyalBlue` and `Snow` (Snow White is real). Anyone can look at CSS code
and know how the colors look like.

## Specify colors using HEX values

There're also other choices to specify Colors in CSS. They're less descriptive
when we look into CSS code. But, they're more precise and flexible. Using
[Color Names](#simple "int") are the `most simple` way, and now we're gonna talk
about the `most popular` way: Using
[HEX values](https://www.w3schools.com/colors/colors_hexadecimal.asp "ext").

Let's assume that you are creating a website to give useful information to help
other people and you don't want to miss anyone. There are many people around the
world who are using
[Internet Explorer version 8](https://en.wikipedia.org/wiki/Internet_Explorer "ext")
and older technology web browsers. Fortunately, HEX values are precise and
supported by all web browsers at the moment. That's why it's the most popular
option to specify colors in CSS.

You can use your favorite image editor to pick colors and get their HEX values
to use in CSS code.
There are also online tools which can help you to do the task:
[Adobe Color](https://color.adobe.com/ "ext"),
[W3schools Picker](https://www.w3schools.com/colors/colors_picker.asp "ext").

This is how we say `Red` using HEX values: `#ff0000`  
As HEX values are precise and flexible, we have more choices to say Red. The one
above is the most bright Red. My beloved Red is a little bit `less bright`, so I
can say `#bb0000`.

`HTML code:`
<script src="https://gist.github.com/codenart/29964874e246275be3ddf9b7a2d1c747.js"></script>

`CSS code:`
<script src="https://gist.github.com/codenart/23e0508d1a1066f7521daea6a794aad2.js"></script>

`Result:`
![red dwarf](/images/css-3/reddwarf.jpg)

That was all about the most popular way to specify Colors in CSS.  
Yet, there are more ways to specify Colors in CSS. They're supported by Internet
Explorer version 9, 10 and newer technology web browsers.

As my purpose is to keep all tutorials safe for every beginners, I want to make
sure that all of the examples will work on any browsers. So, please click on the
links below to learn more about CSS colors:

- The most `simple` way to specify colors in CSS: --Using
[Color Names](https://www.w3schools.com/colors/colors_groups.asp "ext").
- The most `popular` way to specify colors in CSS: --Using
[HEX values](https://www.w3schools.com/colors/colors_hexadecimal.asp "ext").
- The most `efficient` way to specify colors in CSS: --Using
[HSLA values](https://www.w3schools.com/colors/colors_hsl.asp "ext").
- The most `beautiful` way to specify colors in CSS: --Using
[Gradients](https://www.w3schools.com/colors/colors_gradient.asp "ext").

`Screenshot (using Gradients):`
![7 dwarfs](/images/css-3/sevendwarfs.jpg)

We've finished talking about color-Values in CSS. The next common Value-type is
`Length`. Length-Values are used in various CSS Properties to specify size of
text and containers.

## How to specify lengths in CSS?

In daily life, we use numbers and units to specify lengths (3`cm`, 9`inch`,
etc...). In CSS, we do it the same way.

In the previous tutorials, we've specified values to use with `font-size` for
some elements in [pixel](https://en.wikipedia.org/wiki/Pixel "ext"). It is the
most simple way to specify lengths in CSS. It's called `using static units`.

Let's write some CSS code that use Length-Values.  
We're gonna create some colored blocks which have different sizes.

`HTML code:`
<script src="https://gist.github.com/codenart/4ffbb4bc310d672bd422af91f341836f.js"></script>

`CSS code:`
<script src="https://gist.github.com/codenart/ee1a1f60dc27242eeb297039b8c7abee.js"></script>

`Result:`
![dimension](/images/css-3/dimension.jpg)

You may notice that when you resize your web browser window, those block
maintains their specified widths. If you want to create a responsive website,
you will need to make everything `flexible`. You may sometimes want those blocks
automatically change their widths to fit in multiple screen sizes.

There are various length-Units in CSS which can help us to specify Lengths and
make HTML elements responsive. The most popular one is `%`.

Let's change the above CSS code a little bit and resize your web browser to see
the effect.

`CSS code:`
<script src="https://gist.github.com/codenart/ec72e9b9586dfdbd05c8b12da592141f.js"></script>

Here is a reference link for Length-Units in CSS:
[CSS Units](https://www.w3schools.com/cssref/css_units.asp "ext").

Our tutorial about
[Colors & Lengths](http://codenart.github.io/css/2017/08/24/css-3-colors-lengths.html "ext")
has finished! From the next tutorial we will learn about CSS Properties and
create some simple stuff. :D

It's time for ~~music~~ [Magic](https://www.youtube.com/watch?v=PZ595N9NZVg "ext")!

<div class="embed">
   <iframe width="560" height="315"
           src="https://www.youtube.com/embed/PZ595N9NZVg"
           frameborder="0" allowfullscreen>
   </iframe>
</div>
