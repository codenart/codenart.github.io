---
layout: post
style:
script:

category: css
featured:
permalink:

title: Changing how letters look
short: Styling Text
description: We've used the `font-size` property a few times to change size of text contents. <br>Let's take a quick look at some basic Text Styling Properties. <br>Later, we'll create a simple navigation bar.
keywords: web development, beginner, non-coder, kei nart, free, tutorial, coding, programming, code nart, html, css, styling text, font-family, font-size, font-weight, font-style, text-align, line-height

date: 2017-08-24 05:25:00
---

Here are some other Font Properties:

- `font-weight` - bold/normal text
- `font-style` - italic/normal text
- `font-family` - specify font family

Let's write some CSS code to see them in action.  
We're gonna create some paragraphs:

- The first paragraph is bold, but it's not italicized.
- The second one is not bold, but it's italicized.
- The last one uses a mono-space font which is commonly used to display code.

`HTML code:`
<script src="https://gist.github.com/codenart/2ff6e9a6e50c1ae3971b189669d1644e.js"></script>

`CSS code:`
<script src="https://gist.github.com/codenart/5174a3366ddd82b22d7145011dcb011a.js"></script>

`Result:`
![font](/images/css/6/font.jpg)

For `p` elements, `font-weight` and `font-style` are set as `normal` by default.
I've just written them down to take note of the available values.

As you notice that we can specify more than 1 font in `font-family` to make sure
at least 1 specified font will be found. Otherwise, web browsers will pick up a
ready font of user's device in the same family (ex: monospace).

## Find and use free fonts

We can use fonts which are not ready on user's device by including fonts in our
webpage. There are some websites offer free fonts to use with your website and
[Google Font](https://fonts.google.com/ "ext") is a great one.

Firstly, you need to explore [the website](https://fonts.google.com/ "ext") to
find a font and click on the `plus icon` on top right corner.

![choose font](/images/css/6/find.jpg)

Then click on the selected bar at the bottom of the web browsers viewport, copy
and paste the provided HTML code into your HTML document.

![link to document](/images/css/6/link.jpg)

Now, you can use the font in your CSS code.

`HTML code:`
<script src="https://gist.github.com/codenart/3e1d601ebd392166fcf253b82c5f5db9.js">
</script>

`CSS code:`
<script src="https://gist.github.com/codenart/200754ba827b5e91ae45f02f742c1dd8.js">
</script>

`Result:`
![free font in use](/images/css/6/freefont.jpg)

## Decorating and transforming text

Besides bold and italic, we can also quickly emphasize some text using
`text-decoration` property. The property can be used with one of these values:

- `underline` - is used to... <span style="text-decoration: underline">under feet</span>
- `overline` - is used to... <span style="text-decoration: overline">over head</span>
- `line-through` - is used to... <span style="text-decoration: line-through">a train</span>
- `none` - remove text decoration (if any)

To make sure that the output of text content is consistent in some specific part
of webpage (like navigation bar), we can use the `text-transform` property. The
property can be used with one of these values:

- `capitalize` - <span style="text-transform: capitalize">first letter of each word should be uppercase</span>
- `uppercase` - <span style="text-transform: uppercase">everything on the planet should be uppercase</span>
- `lowercase` - <span style="text-transform: lowercase">everything in the universe should be lowercase</span>
- `none` - remove text transformation (if any)

## Aligning text and changing line height

To horizontally align text, we can use `text-align` property. The property can
be use with one of these 3 values:

- `left` set by default
- `center`
- `right`

Here is an example of using `text-align` with 3 paragraphs.

`HTML code:`
<script src="https://gist.github.com/codenart/7b75fdbe1fb6001b1ac714cd4660b805.js"></script>

`CSS code:`
<script src="https://gist.github.com/codenart/fc5904f2f6092c1452c0af247eeb5196.js"></script>

`Result:`
![align](/images/css/6/align.jpg)

Besides vertically aligning text, controlling `line-height` is important to make
our text contents look better.  

The `line-height` property is normally use with a value in `px` or `%`.  
If it is used with a value in `%`, the value will be calculated base on the
current `font-size` of the element.

Ideal `line-height` for normal paragraphs is 150-170%.  

`CSS code:`
<script src="https://gist.github.com/codenart/899634f6c687f81167242d35fdb7878a.js"></script>

`HTML code:`
<script src="https://gist.github.com/codenart/e86e2c809ad915aa1a08d4ff293c1170.js"></script>

`Result:`
![space](/images/css/6/space.jpg)

The `line-height` property is also useful when we want to vertically center text
of an element which has a single line of text.

In the tutorial about
[Container Types](https://codenart.github.io/css/2017/08/24/css-4-container-types.html#changing-type-of-a-container "ext"),
we have create some look-like-button links. :D  
But, we've not solved the case when those links contain text. Let's do it now.  
Our purpose is to add and center text (both horizontally and vertically).

`HTML code:`
<script src="https://gist.github.com/codenart/bfdce09d5a41c325d41f40d19b947197.js">
</script>

`CSS code:`
<script src="https://gist.github.com/codenart/a7d01690dff6d8d95b60d7b046742e1c.js">
</script>

`Result:`
![centered](/images/css/6/which.jpg)

## Create a simple navigation bar

As our tutorial is quite long at the moment, I have to move this part to a
single article. So, please keep this tab open and click on the link below to
go to the article:

Tutorial:
[Creating a minimal navigation bar](http://codenart.github.io/sample/2017/09/03/simple-navbar.html "ext")

Have you finished the tutorial and created a simple navigation bar? :D  
Found it easy? :D  

In the up next tutorials, we'll talk more and more about Selectors and Styling
Containers. There're many useful tools (Selectors & Properties) are waiting for
us to explore.
