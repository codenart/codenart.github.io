---
layout: post
style:
script:

category: css
featured:
permalink:

title: The transition property
short: Transition Effects
description: In this tutorial, we'll talk about how to create transition effects for interactive components. <br>This tutorial requires modern browsers - Firefox, Chrome, Opera, IE10+. <br>The examples below won't work on IE9 and older.
keywords: web development, beginner, non-coder, kei nart, free, tutorial, coding, programming, code nart, css, transition, animation, keyframe

date: 2017-08-24 06:10:00
---

The [transition](https://www.w3schools.com/css/css3_transitions.asp "ext") property
can help us to easily add transition effects to interactive components. We only
need to specify which property will be changed and transition duration using the
following syntax:

`transition: property duration;`

We also note that there are many CSS properties which are `not` animate-able:
[List of animate-able CSS properties.](https://www.w3schools.com/cssref/css_animatable.asp "ext")

Let's make an example to see the transition property in action. We're gonna
visualize a spring field of which `background-color` is smoothly changed when
we change the season.

`HTML code:`
<script src="https://gist.github.com/codenart/dda55be228d9e072ed80ddbcdfcc7b68.js">
</script>

`CSS code:`
<script src="https://gist.github.com/codenart/fa6f331ed239bdc5aa0d971aa9d79ec9.js">
</script>

`Result:`
<p data-height="500" data-theme-id="light" data-slug-hash="XzjNgj" data-default-tab="result"
   data-user="codenart" data-embed-version="2" data-pen-title="Life" class="codepen">
   See the Pen <a href="https://codepen.io/codenart/pen/XzjNgj/">Life</a> by Kei Nart
   (<a href="https://codepen.io/codenart">@codenart</a>) on <a href="https://codepen.io">CodePen</a>.
</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

If we want to create transition effect with more than 1 property, the most
simple way is to use the keyword `all` instead of a certain property name.

`transition: all 1s;`

The transition property can also have 2 more values which are `timing-function`
and `delay`. For example, we can enhance the transition of the spring field
above with `linear` timing and 0.5 second delay.

`transition: all 1s linear 0.5s;`

You can find other timing-functions in the following link:
[Transition timing function.](https://www.w3schools.com/cssref/css3_pr_transition-timing-function.asp "ext")

## A little more complex transition

The transition property also allows us to create a little more complex transition
effect. Let's say if we want to create transition effects with multiple properties.
This can be done by using the following syntax:

`transition: property1 duration1 [delay1], property2 duration2 [delay2], ...;`

In this case, timing-function should be handle using the
[transition-timing-function](https://www.w3schools.com/cssref/css3_pr_transition-timing-function.asp "ext")
property (if needed). For example:

`transition-timing-function: linear;`

Let's write some actual code which implements a little more complex transition.
We're gonna create an expandable box which also has its background-color smoothly
change with the transition effect.

`HTML code:`
<script src="https://gist.github.com/codenart/c394d76926d4e5f0ca779ed9e0dd810e.js">
</script>

`CSS code:`
<script src="https://gist.github.com/codenart/1f7db149bca92df6fe254e78f640dad0.js">
</script>

`Result:`
<p data-height="500" data-theme-id="light" data-slug-hash="KymadE" data-default-tab="result"
   data-user="codenart" data-embed-version="2" data-pen-title="Breath" class="codepen">
   See the Pen <a href="https://codepen.io/codenart/pen/KymadE/">Breath</a> by
   Kei Nart (<a href="https://codepen.io/codenart">@codenart</a>) on
   <a href="https://codepen.io">CodePen</a>.
</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

Our tutorial about [Transition Effects](https://codenart.github.io{{ page.url }} "ext")
has finished. In the next tutorial, we'll talk about creating Animations.
