---
layout: post
style:
script:

category: css
featured:
permalink:

title: The margin & padding properties
short: Spacing Properties
description: The main purpose of using Spacing Properties is to control spaces. Does it sound silly? :D <br>The properties help us to control spaces around and inside containers. <br>They're used for both Sizing & Positioning purposes.
keywords: web development, beginner, non-coder, kei nart, free, tutorial, coding, programming, code nart, html, css, spacing properties, padding, margin

date: 2017-08-24 05:40:00
---

Controlling Spaces is the most important technique in every aspect of life.  
In CSS, Controlling Spaces help us to quickly size up and position elements.

![space](/images/css/9/space.jpg)

There are some properties are used to control spaces inside and around containers:

- `padding` properties - control spaces inside containers
- `margin` properties - control spaces around containers

## The padding properties

There are 4 padding properties which help us to control spaces between content
to 4 edges of a container:

- [padding-top](https://www.w3schools.com/cssref/pr_padding-top.asp "ext") |
distance between content to top edge of the container
- [padding-right](https://www.w3schools.com/cssref/pr_padding-right.asp "ext") |
distance between content to right edge of the container
- [padding-bottom](https://www.w3schools.com/cssref/pr_padding-bottom.asp "ext") |
distance between content to bottom edge of the container
- [padding-left](https://www.w3schools.com/cssref/pr_padding-left.asp "ext") |
distance between content to left edge of the container

Let's write some CSS code use `padding` properties.  
In the tutorial about
[Container Types](https://codenart.github.io/css/2017/08/24/css/4-container-types.html#changing-type-of-a-container "ext"),
we've created some look-like-button links using `width` and `height` properties.
Using `width` and `height` properties to specify size of elements has some
drawbacks that we have to change CSS code to adapt to certain content and we
also need to write some more rules to align text.  

`padding` properties are just better tools.

`HTML code:`
<script src="https://gist.github.com/codenart/106cb07a00bdd715a1a8fe18db1b93e1.js">
</script>

`CSS code:`
<script src="https://gist.github.com/codenart/d75b52259c2ea21fdf9abc11f755de09.js">
</script>

`Result:`
![inner](/images/css/9/inner.jpg)

There is a short form of `padding` properties which can help us to specify the
4 values in a single line of code. The four values are placed in order: `top`,
`right`, `bottom`, `left`

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
containers, they're commonly used to align containers (elements):

- [margin-top](https://www.w3schools.com/cssref/pr_margin-top.asp "ext") |
the minimum distance between top edge of the container  
to other elements `or` top edge of parent container
- [margin-right](https://www.w3schools.com/cssref/pr_margin-right.asp "ext") |
the minimum distance between right edge of the container  
to other elements `or` right edge of parent container
- [margin-bottom](https://www.w3schools.com/cssref/pr_margin-bottom.asp "ext") |
the minimum distance between bottom edge of the container  
to other elements `or` bottom edge of parent container
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
![outer](/images/css/9/outer.jpg)

## The `auto` value

The `padding` and `margin` properties and many other CSS Properties can be used
with a special value called `auto`.

That word, `auto`, it sounds `smart`. Do you agree with me? :D  
It's our nature to love something which is `auto`. I love `auto`matic dishwasher,
`auto`matic coffee machine, `auto`matic cat feeder, etc...

Ok. Fair enough. :D  
The `auto` value will tell web browsers to keep track of the elements all the
time and give the CSS rule a flexible value.  
Let's see some real use cases of the `auto` value combo with `margin` properties.

`HTML code:`
<script src="https://gist.github.com/codenart/0d1c6f5d66f3a3e2df2b202fd21a7c4e.js">
</script>

`CSS code:`
<script src="https://gist.github.com/codenart/4473dfd70c3d9975b0ff176fb40bc08c.js">
</script>

`Result:`
![auto](/images/css/9/auto.jpg)

For the first square, my purpose is to horizontally center it by creating some
spaces on the left and the right. But I was lazy enough to not make some
calculations. So, I just let web browsers take care of the calculations. :D

I've found it just work. And I decided to apply the same method for the second
square. Just let web browsers take care of the calculations. :D

The best thing about this is web browsers will keep track of the elements all
the time and re-calculate the value if `something` happens. You can try it on
your web browser and resize its window to see how cool it is. Sizes of spaces
will be automatically adjusted. The first square is always centered and the
second square is always aligned to the right. :D

## Creating a simple dropdown

As we've collected many new tools from the time we created
[A Simple Navigation Bar](https://codenart.github.io/sample/2017/09/03/sample-1-simple-navbar.html "ext").
The new tools `Combining Selectors`, `Pseudo Classes` and these `Spacing
Properties` can help us to improve the Navigation Bar and fix some of its
drawbacks.

I guess that you've improved the navigation bar. So, I want to invite you to
join with me to create another simple thing. It's just a Simple Dropdown. :D

As this tutorial is quite long at the moment, I've moved this part to a single
tutorial. Please click on the link below.

Tutorial:
[Creating a Simple Dropdown](https://codenart.github.io/sample/2017/09/03/sample-2-simple-dropdown.html "ext")
