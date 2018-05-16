---
layout: post
style:
script:

category: css
featured:
permalink:

title: The animation property
short: CSS Animations
description: In this tutorial, we'll talk about how to create animations with complex movements in CSS. <br>This tutorial requires modern browsers - Firefox, Chrome, Opera, IE10+. <br>The examples below won't work on IE9 and older.
keywords: web development, beginner, non-coder, kei nart, free, tutorial, coding, programming, code nart, html, css, @keyframes, animation

date: 2017-08-24 06:15:00
---

Just start with a simple example; I'll introduce the property and explain
everything after you see the actual code. The example below will implement a
simple animation. We'll have a box move from the left to the right and its
background color also smoothly change from `red` to `blue`.

`HTML code:`
<script src="https://gist.github.com/codenart/717683c2ccd8865de5efebb3a54338eb.js">
</script>

`CSS code:`
<script src="https://gist.github.com/codenart/4cc1737589c84601678d68f3f9d7c461.js">
</script>

`Result:` [Click here to see the result](https://codepen.io/codenart/full/yPoPgR/ "ext")

As you noticed that the `animation` property used in the example above looks pretty
familiar to the `transition` property. We simply need to specify animation's `name`
and its `duration`, `timing-function` and `delay`. The `new` part is the animation's
`name`. We can specify an animation with a niceee name. That's it. :D

Yet, now we see that the animation is `automatically` played when the webpage is
loaded; And after the animation finishes, the box's position and background will
be both reseted. Those are the main differences between `transition` and `animation`
that we can tell at the moment. Let's see what's next.

## Looping animation

This feature is not available for the transition property. We can create animations
which are repeated as many times as we want. By default, it is set by:

`animation-iteration-count: 1;`

It means that the animation will be played 1 time only. We can also set it to
`infinite`.

## Multi-phases animation

Let's take a look back at the example in the first section. Inside the `@keyframes`
block, the animation is defined using 2 states (stop points) `from` and `to`. We
can also use `0%` and `100%` instead of `from` and `to`. Can you guess what this
means? :D

We're freely to set multiple stop-points to create complex animations! Let's
change our CSS code to create a limitless looping animation with complex movement.

`CSS code:`
<script src="https://gist.github.com/codenart/1c92184d472a7d5153dc80c3fe2e05de.js">
</script>

`Result:` [Click here to see the result](https://codepen.io/codenart/full/gXxoqE/ "ext")

## Play state

By default, animations will be automatically played when the webpage is loaded.
It means that there's no interactive here. Sometimes, we'll want to allow
visitors to toggle animations. This can be done by changing value of the
`animation-play-state` property.

`animation-play-state: running | paused;`

Let's change our HTML and CSS snippets a little bit to see how this works.

`HTML code:`
<script src="https://gist.github.com/codenart/43976e45c98aa23268f4c0d9aeb5f90f.js">
</script>

`CSS code:`
<script src="https://gist.github.com/codenart/86c894257edf0a92cecac36d02f4418b.js">
</script>

`Result:` [Click here to see the result](https://codepen.io/codenart/full/POKQZY/ "ext")

Our tutorial about [CSS Animations](https://codenart.github.io{{ page.url }} "ext")
has finished. This is also the last tutorial of my CSS for beginners series. For
further learning, please checkout these resources:

- [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/CSS "ext")
- [W3schools.com](https://www.w3schools.com/css/default.asp "ext")
