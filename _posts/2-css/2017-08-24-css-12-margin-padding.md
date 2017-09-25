---
layout: post
style:
script:

category: css
featured:
permalink:

title: The margin & padding properties
short: Margin & Padding
description: The main purpose of using Spacing Properties is to control spaces. Does it sound great? :D <br>The properties help us to control spaces around and inside containers. <br>They're used for both Sizing & Positioning purposes.
keywords: web development, beginner, non-coder, kei nart, free, tutorial, coding, programming, code nart, html, css, space, properties, padding, margin

date: 2017-08-24 05:55:00
---

Controlling Spaces is the most important technique in every aspect of life.  
In CSS, Controlling Spaces help us to quickly size up and position elements.

![space](/images/css/11/space.jpg)

There are some properties are used to control spaces inside and around containers:

- `padding` properties - control spaces inside containers
- `margin` properties - control spaces around containers

## The padding properties

Generally, there are 4 of padding properties:

- [padding-top](https://www.w3schools.com/cssref/pr_padding-top.asp "ext") |
distance between top edge of the container and its content
- [padding-right](https://www.w3schools.com/cssref/pr_padding-right.asp "ext") |
distance between right edge of the container and its content
- [padding-bottom](https://www.w3schools.com/cssref/pr_padding-bottom.asp "ext") |
distance between bottom edge of the container and its content
- [padding-left](https://www.w3schools.com/cssref/pr_padding-left.asp "ext") |
distance between left edge of the container and its content

Let's write some CSS code use `padding` properties.  
In the tutorial about
[Container Types](https://codenart.github.io/css/2017/08/24/css/4-container-types.html#changing-type-of-a-container "ext"),
we've created some look-like-button links using `width` and `height` properties.
Using `width` and `height` properties to specify size of those buttons has some
drawbacks that we have to change CSS code to adapt to certain content and we
also need to write some more rules to center text.  

`padding` properties can help use to simply the tasks: both size up elements and
center text.

`HTML code:`
<script src="https://gist.github.com/codenart/106cb07a00bdd715a1a8fe18db1b93e1.js">
</script>

`CSS code:`
<script src="https://gist.github.com/codenart/d75b52259c2ea21fdf9abc11f755de09.js">
</script>

`Result:`

<p data-height="500" data-theme-id="light" data-slug-hash="QqGVed"
   data-default-tab="result" data-user="codenart" data-embed-version="2"
   data-pen-title="Space" class="codepen">
   See the Pen <a href="https://codepen.io/codenart/pen/QqGVed/">Space</a>
   by Kei Nart (<a href="https://codepen.io/codenart">@codenart</a>) on
   <a href="https://codepen.io">CodePen</a>.
</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

There is a short form of `padding` properties which can help us to specify the
4 values in a single line of code. The 4 values are placed in order: `top`,
`right`, `bottom`, `left`. (clockwise)

`padding: 15px 36px 15px 36px;`

Another short form with only two values, the first value is for `top/bottom` and
the second one is for `right/left`:

`padding: 15px 36px;`

If our purpose is to set 4 `padding` properties with the same value, we can
write only one value in short form:

`padding: 15px;`

## The margin properties

As the [padding](#the-padding-properties "int") properties help us to control
spaces inside containers, they're commonly used to size elements up and
align content.

On the other hand, the `margin` properties help us to control spaces around
containers; They're commonly used to align containers (elements):

- [margin-top](https://www.w3schools.com/cssref/pr_margin-top.asp "ext") |
the minimum distance from top edge of the container  
to other elements, `or` to top edge of parent container
- [margin-right](https://www.w3schools.com/cssref/pr_margin-right.asp "ext") |
the minimum distance from right edge of the container  
to other elements, `or` to right edge of parent container
- [margin-bottom](https://www.w3schools.com/cssref/pr_margin-bottom.asp "ext") |
the minimum distance from bottom edge of the container  
to other elements, `or` to bottom edge of parent container
- [margin-left](https://www.w3schools.com/cssref/pr_margin-left.asp "ext") |
the minimum distance between left edge of the container  
to other elements `or` left edge of parent container

The `margin` properties can also be written in short form as `padding` properties.

Let's write some CSS code.  
We're gonna make use of the previous example. This time. we will create some
space around buttons.

`CSS code:`
<script src="https://gist.github.com/codenart/6cbcabf67e6dbfbc73cc1066f1e80211.js">
</script>

`Result:`

<p data-height="500" data-theme-id="light" data-slug-hash="LzbgVa"
   data-default-tab="result" data-user="codenart" data-embed-version="2"
   data-pen-title="Outer Space" class="codepen">
   See the Pen <a href="https://codepen.io/codenart/pen/LzbgVa/">Outer Space</a>
   by Kei Nart (<a href="https://codepen.io/codenart">@codenart</a>) on
   <a href="https://codepen.io">CodePen</a>.
</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

## The `auto` value

The `padding` and `margin` properties and many other CSS Properties can be used
with a smart value called `auto`.

That word, `auto`, it really sounds `smart`. Do you think so? :D  
It's our nature to love something which is `auto`. I love `auto`matic dishwasher,
`auto`matic coffee machine, `auto`matic cat feeder, etc...

Ok. Fair enough. :D  
The `auto` value will tell web browsers to keep track of the elements all the
time and automatically calculate value to apply.  
Let's see some real use cases of the `auto` value combo with `margin` properties.

`HTML code:`
<script src="https://gist.github.com/codenart/0d1c6f5d66f3a3e2df2b202fd21a7c4e.js">
</script>

`CSS code:`
<script src="https://gist.github.com/codenart/4473dfd70c3d9975b0ff176fb40bc08c.js">
</script>

`Result:`

<p data-height="500" data-theme-id="light" data-slug-hash="ZXBqOx"
   data-default-tab="result" data-user="codenart" data-embed-version="2"
   data-pen-title="Automa-g-ic" class="codepen">
   See the Pen <a href="https://codepen.io/codenart/pen/ZXBqOx/">Automa-g-ic</a>
   by Kei Nart (<a href="https://codepen.io/codenart">@codenart</a>) on
   <a href="https://codepen.io">CodePen</a>.
</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

For the first square, my purpose is to horizontally center it by creating some
spaces on the left and the right. But I was lazy enough to not make some
calculations. So, I just let web browsers take care of the calculations. :D

I've found it just work. And I decided to apply the same method for the second
square. Just let web browsers take care of the calculations. :D

The best thing about this is web browsers will keep track of the elements all
the time and re-calculate the value if `something` happens. You can try it on
your web browser and resize browser window to see how cool it is. Sizes of
spaces will be automatically adjusted. The first square will keep being centered
and the second square will keep being aligned to the right.

## Creating a simple dropdown

As we've collected many new tools since the time we created
[A Simple Navigation Bar](https://codenart.github.io/sample/2017/09/03/sample-1-simple-navbar.html "ext").
The new tools `Combining Selectors`, `Pseudo Classes` and these `Spacing
Properties` can help us to improve the Navigation Bar and fix some of its
drawbacks.

I guess that you've improved the navigation bar. So, I want to invite you to
join with me to create another simple thing. It's just a Simple Dropdown. :D

As this tutorial is quite long at the moment, I've moved this part to a single
tutorial. Please, click on the link below.

Tutorial:
[Creating a Simple Dropdown](https://codenart.github.io/sample/2017/09/03/sample-2-simple-dropdown.html "ext")
