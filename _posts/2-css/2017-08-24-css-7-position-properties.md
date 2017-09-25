---
layout: post
style:
script:

category: css
featured:
permalink:

title: Position properties in CSS
short: Position Properties
description: We've know how to set size of and decorate containers to make them look nice. <br>Positioning is the next step to make our webpages look tidy. <br>Let's talk about Positioning Properties.
keywords: web development, beginner, non-coder, kei nart, free, tutorial, coding, programming, code nart, html, css, position, properties, static, relative, absolute, fixed, top, right, bottom, left

date: 2017-08-24 05:30:00
---

There are `4 famous properties` which can help us change position of an element
and move it around. They are so powerful that people call them the `gang of 4`:

- [top](https://www.w3schools.com/cssref/pr_pos_top.asp "ext")
- [right](https://www.w3schools.com/cssref/pr_pos_right.asp "ext")
- [bottom](https://www.w3schools.com/cssref/pr_pos_bottom.asp "ext")
- [left](https://www.w3schools.com/cssref/pr_pos_left.asp "ext")

But, in order to keep our content well ordered by default, web browsers silently
make all elements'
[positions](https://www.w3schools.com/cssref/pr_class_position.asp "ext")
unchangeable by the rule `position: static;`. To free the `gang of 4`, we need
change value of the
[position](https://www.w3schools.com/cssref/pr_class_position.asp "ext") property.

The [position](https://www.w3schools.com/cssref/pr_class_position.asp "ext")
property can be used with one of these values:
- `static` (set by default) which prevent changing element's position
- `relative`
- `fixed`
- `absolute`

For each value of the `position` property, the `gang of 4` will behave
differently. So, we're gonna make some sections for the last 3 values of the
[position](https://www.w3schools.com/cssref/pr_class_position.asp "ext")
property and see the `gang of 4` in action.

## Using `position: fixed;`

The rule `position: fixed;` will tell web browsers that we want to set position
of the element relatively to `web browser's viewport`. The element will be
detached from normal flow of the webpage.

Let's write a CSS code snippet using the `fixed` value. We're gonna create a
button which is pinned at bottom right corner of web browser's viewport.

`HTML code:`
<script src="https://gist.github.com/codenart/5765d36a50e4ebb1e15017c713d6771b.js">
</script>

`CSS code:`
<script src="https://gist.github.com/codenart/d6388c719eb6411e5bec411e173a7115.js">
</script>

`Result:`

<p data-height="500" data-theme-id="light" data-slug-hash="yzeqBJ"
   data-default-tab="result" data-user="codenart" data-embed-version="2"
   data-pen-title="Pinned to Top" class="codepen">
   See the Pen <a href="https://codepen.io/codenart/pen/yzeqBJ/">Pinned to Top</a>
   by Kei Nart (<a href="https://codepen.io/codenart">@codenart</a>) on
   <a href="https://codepen.io">CodePen</a>.
</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

This is how the sample code above work:

- Firstly, the button is detached from normal flow of the webpage. So, you can
notice that images appear right from the start of the webpage. It seems that the
button does not exist at all.
- The rule `right: 20px;` is used to specify the distance between  
the `right edge of the button`  
and the `right edge of web browser's viewport`.
- The rule `bottom: 10px;` is used to specify the distance between  
the `bottom edge of the button`  
and the `bottom edge of web browser's viewport`.

## Using `position: absolute;`

The rule `position: absolute;` will tell web browsers that we want to set
position of the element relatively to `its parent container`. Conditionally,
the parent container's position must not be `static`.

We're gonna see a simple use of the `absolute` value by sketching a product
card which has a small sale-off tag. :D

`HTML code:`
<script src="https://gist.github.com/codenart/87a51fa031ae939031847c8ec28080fc.js">
</script>

`CSS code:`
<script src="https://gist.github.com/codenart/b6b02ae6dc9f8a3f2356ccad235c21f7.js">
</script>

`Result:`

<p data-height="500" data-theme-id="light" data-slug-hash="YrwOJp"
   data-default-tab="result" data-user="codenart" data-embed-version="2"
   data-pen-title="YrwOJp" class="codepen">
   See the Pen <a href="https://codepen.io/codenart/pen/YrwOJp/">YrwOJp</a>
   by Kei Nart (<a href="https://codepen.io/codenart">@codenart</a>) on
   <a href="https://codepen.io">CodePen</a>.
</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

If [position](https://www.w3schools.com/cssref/pr_class_position.asp "ext") of
the parent container is `static`, web browsers will check the grand container,
the grand grand, ... to find the closest ancestor container which has non-`static`
[position](https://www.w3schools.com/cssref/pr_class_position.asp "ext"), then
set position of the element base on the ancestor.

## Using `position: relative;`

The rule `position: relative;` will tell web browsers that we want to set
position of the element relatively to `its default position`. Unlike the 2
values `fixed` and `absolute`, the value `relative` will not detach the element
from normal flow of the webpage. Hence, it's commonly used to do some minor fix
to the element's position. It's just sometimes we want to move an element some
pixels to enhance total look of a component.

Let's take a look at the example below. The second button's text is enhanced a
little bit to look more balance.

`Result:`

<p data-height="500" data-theme-id="light" data-slug-hash="ZXQmbL"
   data-default-tab="result" data-user="codenart" data-embed-version="2"
   data-pen-title="Back to Top" class="codepen">
   See the Pen <a href="https://codepen.io/codenart/pen/ZXQmbL/">Back to Top</a>
   by Kei Nart (<a href="https://codepen.io/codenart">@codenart</a>) on
   <a href="https://codepen.io">CodePen</a>.
</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

`HTML code:`
<script src="https://gist.github.com/codenart/7cc63a86834cad8e5d61303cb36929fb.js">
</script>

`CSS code:`
<script src="https://gist.github.com/codenart/84b9c9ad303ed06c2a3599f3851e2540.js">
</script>

Our tutorial about
[Position Properties](https://codenart.github.io{{ page.url }} "ext")
has finished. In the next tutorial, we'll talk about
[Styling Text](https://codenart.github.io{{ page.next.url }} "ext")
and create a navigation bar. (Just a simple one. :D)
