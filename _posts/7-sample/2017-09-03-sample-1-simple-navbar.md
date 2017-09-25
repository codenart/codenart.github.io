---
layout: post
style:
script:

category: sample
featured: bingo

title: Creating a simple navigation bar
short: Simple Navbar
description: In this tutorial, we're gonna create a simple navigation bar using HTML and CSS. <br>This tutorial is a part of the 8th CSS tutorial in this website. <br>Please, be sure of handling basic stuff. :D
keywords: web development, beginner, non-coder, kei nart, free, tutorial, coding, programming, code nart, simple, sample, navigation, bar, nav, navbar, html, css

date: 2017-09-03 05:00:00
---

Before starting this tutorial, let me assume that you've come from the CSS
tutorial about
[Styling Text](https://codenart.github.io/css/2017/08/24/css-8-styling-text.html "ext")
on my website. So, at the moment, we've some basic tools ready in our hand:

- Basic selectors, Class selectors, Id selectors
- Commonly used properties: `color` & `background-color`
- Positioning properties
- And some properties used for Styling Text

In this tutorial, we will make use of these tools to create a simple navigation
bar. And this is how the navigation bar will look like:

`Screen shot:`
![navigation bar](/images/sample/1/nature.jpg)

This tutorial is just an example, you should give the navigation bar your own
style (size, color, font, etc...)

## Prepare HTML code

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

## To-do in CSS

Styling task can be divided into these sub-tasks;

1. Coloring the `<nav>` container and make it `fixed` on top of the viewport.
2. Sizing all the links up. They should have the same size.
3. Give the `#logo` unique style (maybe unique background-color or fancy font :D).
4. Set position of the `#about` to the right corner of the navigation bar.

### 1. Styling the `<nav>` container

To pin the navigation bar at top of the web browser's viewport is a simple task
which we have done once in the tutorial about
[Positioning properties](https://codenart.github.io/css/2017/08/24/css-7-positioning-properties.html#using-position-fixed "ext").  
Just remember to set the container's `width` to `100%`. Because the rule
`position: fixed;` will make the container collapse if we don't specify
container's `width`.

`CSS code:`
<script src="https://gist.github.com/codenart/17f311aad4518fe51174f0d9c0304dca.js">
</script>

### 2. Setting size of `<a>` elements

Actually, we've 2 tasks here. After sizing all the links, their text will stay
on the top left corner of each container. So, centering text is an extra task
needed to be done.

`CSS code:`
<script src="https://gist.github.com/codenart/bd3d7d28c1fca22eaf86e3e20cb7a5f3.js">
</script>

### 3. Give `#logo` unique style

This part is optional and it depends on your own style. I'm just making a simple
style as an example. The `width` of `#logo` depends on its content (long or short text).

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
lengths, it will look a bit cluttered. And we still have to change CSS code to
adapt to the certain text.
- It is not responsive and well adapt to mobile screen. Normally, on mobile
screen, the main block of links can be toggled by clicking on a button.

There is no disappointment here. It just means that we can make everything
better in future when we have more tools in our hands (advanced selectors,
spacing properties, screen size query, etc...).

It's time to come back to our
[CSS tutorials](https://codenart.github.io/css/2017/08/24/css-8-styling-text.html#create-a-simple-navigation-bar "ext").
We've many interesting stuff waiting there.

[Click here to go back to the CSS tutorial about Styling Text.](https://codenart.github.io/css/2017/08/24/css-8-styling-text.html#create-a-simple-navigation-bar "ext")
