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

date: 2017-08-24 05:35:00
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

<p data-height="500" data-theme-id="light" data-slug-hash="pWgmRX"
   data-default-tab="result" data-user="codenart" data-embed-version="2"
   data-pen-title="Font Properties" class="codepen">
   See the Pen <a href="https://codepen.io/codenart/pen/pWgmRX/">Font Properties</a>
   by Kei Nart (<a href="https://codepen.io/codenart">@codenart</a>) on
   <a href="https://codepen.io">CodePen</a>.
</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

As you notice that we can specify more than 1 font in `font-family` to make sure
at least 1 specified font will be found. Otherwise, web browsers will pick up a
ready font of user's device in the same family.

## Find and use free fonts

We can use fonts which are not ready on user's device by including fonts in our
webpage. There are some websites offer free fonts to use with your website and
[Google Font](https://fonts.google.com/ "ext") is a great one.

Firstly, you need to explore [the website](https://fonts.google.com/ "ext") to
find a font and click on the `plus icon` on top right corner.

![choose font](/images/css/8/find.jpg)

Then click on the selected bar at the bottom of the web browsers viewport, copy
and paste the provided HTML code into your HTML document.

![link to document](/images/css/8/link.jpg)

Now, you can use the font in your CSS code.

`HTML code:`
<script src="https://gist.github.com/codenart/3e1d601ebd392166fcf253b82c5f5db9.js">
</script>

`CSS code:`
<script src="https://gist.github.com/codenart/200754ba827b5e91ae45f02f742c1dd8.js">
</script>

`Result:`
![free font in use](/images/css/8/freefont.jpg)

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
- `lowercase` - <span style="text-transform: lowercase">everything on this planet should be lowercase</span>
- `uppercase` - <span style="text-transform: uppercase">everything in the universe should be uppercase</span>
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
![align](/images/css/8/align.jpg)

Besides horizontally aligning text, controlling `line-height` is important to
make our text contents look better.  

The `line-height` property is normally use with a value in `px` or `%`.  
If it is used with a value in `%`, the value will be calculated base on the
current `font-size` of the element.

Ideal `line-height` for normal paragraphs is 150-170%.  

`CSS code:`
<script src="https://gist.github.com/codenart/899634f6c687f81167242d35fdb7878a.js"></script>

`HTML code:`
<script src="https://gist.github.com/codenart/e86e2c809ad915aa1a08d4ff293c1170.js"></script>

`Result:`
![space](/images/css/8/space.jpg)

The `line-height` property is also useful when we want to vertically center text
of an element which only has a single line of text; We can simply set value of
`line-height` is the same as element's height.

## Create a simple navigation bar

As our tutorial is quite long at the moment, I have to move this part to a
single article. So, please keep this tab open and click on the link below to
go to the article:

Tutorial:
[Creating a minimal navigation bar](http://codenart.github.io/sample/2017/09/03/sample-1-simple-navbar.html "ext")

Have you finished the tutorial and created a simple navigation bar? :D  
Found it easy? :D  

There are more useful tools (Selectors & Properties) are waiting for us to explore.
In the next tutorial, we're gonna meet Selectors again. :D
