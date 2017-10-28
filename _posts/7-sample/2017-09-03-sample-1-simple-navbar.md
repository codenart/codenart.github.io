---
layout: post
style:
script:

category: sample
featured: bingo

title: Creating a simple navigation bar
short: Simple Navbar
description: In this tutorial, we're gonna create a simple navigation bar using HTML and CSS. <br>This tutorial is a part of the 8th CSS tutorial on my website. <br>Please, be sure of handling basic stuff. :D
keywords: web development, beginner, non-coder, kei nart, free, tutorial, coding, programming, code nart, simple, sample, navigation, bar, nav, navbar, html, css

date: 2017-09-03 05:00:00
---

Before starting this tutorial, let me assume that you've come from the CSS
tutorial about
[Styling Text](https://codenart.github.io/css/2017/08/24/css-8-styling-text.html "ext")
on my website. So, at the moment, we've some basic tools ready in our hands:

- Basic selectors, class selectors, id selectors
- Commonly used properties: `color` & `background-color`
- Position properties
- And some properties used for styling text

In this tutorial, we will make use of these tools to create a simple navigation
bar. And this is how the navigation bar will look like:

`Screen shot:`
![navigation bar](/images/sample/1/nature.jpg)

This tutorial is just an example, you should give the navigation bar your own
style (size, color, font, etc...)

## Preparing HTML code

From the expected result above, the navigation bar will contains 7 links.  
2 of those links have unique style and should have their own `id`:  

- The first one which is a logo, has unique `background-color`
- The last one which is `About Us`, stay at a special position (detached from
the rest).

The navigation bar itself can have an `id` if you expect it will be an unique
part of your website.

`HTML code:`
<script src="https://gist.github.com/codenart/4d742c66fae65b1b0ac0234b2b7ec023.js">
</script>

## To-dos in CSS

Styling task can be divided into these sub-tasks;

1. Coloring the `<nav>` container and make it `fixed` on top of the viewport.
2. Sizing up all the links.
3. Give the `#logo` unique style (maybe unique background-color or fancy font :D).
4. Set position of the `#about` to the right corner of the navigation bar.

### 1. Styling the `<nav>` container

To pin the navigation bar at top of the web browser's viewport is a simple task
which we have done once in the tutorial about
[position-properties](https://codenart.github.io/css/2017/08/24/css-7-position-properties.html#using-position-fixed "ext").  
Just remember to set the container's `width` to `100%`. Because the rule
`position: fixed;` will make the container collapse if we don't specify
container's `width`.

`CSS code:`
<script src="https://gist.github.com/codenart/17f311aad4518fe51174f0d9c0304dca.js">
</script>

### 2. Setting size of `<a>` elements

We've done this once in the tutorial about
[container-types](https://codenart.github.io/css/2017/08/24/css-4-container-types.html#changing-type-of-a-container "ext").

`CSS code:`
<script src="https://gist.github.com/codenart/bd3d7d28c1fca22eaf86e3e20cb7a5f3.js">
</script>

### 3. Give `#logo` unique style

This part is optional and it depends on your own style, you may want to use an
image or text as my example.

`CSS code:`
<script src="https://gist.github.com/codenart/a81aee456a27710a997d07dea5587f37.js">
</script>

### 4. Positioning the `#about`

This is the last and the easiest task. We will just set its position to the
right corner of the navigation bar. :D
<script src="https://gist.github.com/codenart/0ac744a10d88dcff04d4fc4e7e8de7d7.js">
</script>

## Clean up code

Congrazz! :D  
You've created a simple navigation bar for your website. Just save these code
snippets somewhere in your computer so we can make use of them in future.

`HTML code:`
<script src="https://gist.github.com/codenart/4d742c66fae65b1b0ac0234b2b7ec023.js">
</script>

`CSS code:`
<script src="https://gist.github.com/codenart/152184d913361baf449dc1ad324649e7.js">
</script>

## Summary

This navigation bar is simple and ready to use but it also has some drawbacks:

- Lack of hover effect. It's a small part make our website more interactive.
Visitors who use computers will be more pleasure when they hover mouse pointer
on a link and see some effects. Maybe the text color or the link's background
will be slightly changed, etc...
- Links' widths are fixed. In case our links contain words which have different
lengths, the total look will be a bit cluttered. And we still have to change CSS
code to adapt to the certain texts.
- The navigation bar itself is not responsive and well adapt to mobile screen.
Normally, on mobile screen, the main block of links can be toggled by clicking
on a button.

There is no disappointment here. It just means that we can make everything
better in future when we have more tools in our hands (advanced selectors,
spacing properties, screen size query, etc...).

It's time to come back to our unfinished CSS tutorials. There're many interesting
stuff waiting for us.

[Click here to go back to the CSS tutorial about Styling Text.](https://codenart.github.io/css/2017/08/24/css-8-styling-text.html#create-a-simple-navigation-bar "ext")
