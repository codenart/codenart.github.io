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

date: 2017-08-24 05:25:00
---

Controlling Spaces is the most important technique in every aspect of life.  
In CSS, Controlling Spaces help us to quickly size up and position elements.

![space](/images/css-6/space.jpg)

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
[Container Types](https://codenart.github.io/css/2017/08/24/css-4-container-types.html#changing-type-of-a-container "ext"),
we've created some look-like-button links using `width` and `height` properties.
But, we've not solve the case when the anchor elements have text.

Centering text inside the anchor elements will require some more knowledge about
other properties which are used to style text content. This time, we're gonna
create some buttons using `padding` properties and centering their text at once.
It's very simple.

`HTML code:`
<script src="https://gist.github.com/codenart/106cb07a00bdd715a1a8fe18db1b93e1.js">
</script>

`CSS code:`
<script src="https://gist.github.com/codenart/d75b52259c2ea21fdf9abc11f755de09.js">
</script>

`Result:`
![inner](/images/css-6/inner.jpg)

There is a short form of `padding` properties  
which can help us to specify the 4 values  
in a single line of code:  
`padding: 15px 36px 15px 36px;`  
The four values are placed in order:  
`top`, `right`, `bottom`, `left`

Another short form with only two values:  
`padding: 15px 36px;`  
In this case, the first value is for `top/bottom`  
and the second one is for `right/left`

If we our purpose is to set 4 `padding` properties  
with the same value,  
we can write only the value in short form:  
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

Let's write some CSS code.  
We're gonna make use of the previous example. This time. we will create some
space around buttons.

`CSS code:`
<script src="https://gist.github.com/codenart/6cbcabf67e6dbfbc73cc1066f1e80211.js">
</script>

`Result:`
![outer](/images/css-6/outer.jpg)

## Create a simple navigation bar

As we've planned in the previous tutorial to create a simple navigation bar. But,
our tutorial is quite long at the moment so I have to move this part to a single
tutorial. Please click keep this tab open and click on the link below:

Tutorial:
[Create a minimal navigation bar](https://codenart.github.io/sample/2017/09/03/simple-navbar.html "ext")
