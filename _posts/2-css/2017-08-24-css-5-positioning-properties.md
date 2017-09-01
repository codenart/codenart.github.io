---
layout: post
style:
script:

category: css
featured:
permalink:

title: Positioning Properties in CSS
short: Positioning Properties
description: The basic Sizing Properties like Width and Height can help us to set size of elements. <br>Positioning is the next step to make our webpages look tidy. <br>Let's talk about Positioning Properties.
keywords: web development, beginner, non-coder, kei nart, free, tutorial, coding, programming, code nart, html, css, positioning properties, position, static, relative, absolute, fixed, top, right, bottom, left

date: 2017-08-24 05:20:00
---

There are `4 properties` which can help us set position of an element and move it
around. They're normally used with
[Length-Values](https://codenart.github.io/css/2017/08/24/css-3-colors-lengths.html#how-to-specify-lengths-in-css "ext")
in `px` or `%`. They are so useful that people call them the `gang of 4`:

- [top](https://www.w3schools.com/cssref/pr_pos_top.asp "ext")
- [right](https://www.w3schools.com/cssref/pr_pos_right.asp "ext")
- [bottom](https://www.w3schools.com/cssref/pr_pos_bottom.asp "ext")
- [left](https://www.w3schools.com/cssref/pr_pos_left.asp "ext")

But!  
In order to keep our content well ordered by default, web browsers silently make
all elements' [positions](https://www.w3schools.com/cssref/pr_class_position.asp "ext")
static by the rule `position: static;`. The word `static` means cannot be changed.
The `gang of 4` have no ample scope to their abilities. Eventhough we write their
names thoudsand times, no change will be made to our webpages.

In order to embrace the `gang of 4`, we need to wake their leader up by changing
value of the [position](https://www.w3schools.com/cssref/pr_class_position.asp "ext")
property.

Sorry. I've forgot to tell you about the
[position](https://www.w3schools.com/cssref/pr_class_position.asp "ext")
property. Actually, It was the `gang of 5`.

`The gang of 5:`
![kungfu panda](/images/css-5/five.jpg)

Ok. Fair enough. :D  
This is a shorter version of the story:

The `4 properties` [top](https://www.w3schools.com/cssref/pr_pos_top.asp "ext"),
[right](https://www.w3schools.com/cssref/pr_pos_right.asp "ext"),
[bottom](https://www.w3schools.com/cssref/pr_pos_bottom.asp "ext"),
[left](https://www.w3schools.com/cssref/pr_pos_left.asp "ext"),  won't work
without the [position](https://www.w3schools.com/cssref/pr_class_position.asp "ext")
property.  
The [position](https://www.w3schools.com/cssref/pr_class_position.asp "ext")
property can be used with one of these values:
- `static` (set by default) which prevent changing element's position
- `relative`
- `fixed`
- `absolute`

We're gonna make some sections for the last 3 values of the
[position](https://www.w3schools.com/cssref/pr_class_position.asp "ext") property.

## Using position: relative;

The `relative` value will tell web browsers that we want to set position of the
element relatively to `its default position`.

Let's write a CSS code snippet using the `relative` value.  
We're gonna make use of the example in the
[previous tutorial](https://codenart.github.io/css/2017/08/24/css-4-container-types.html#changing-type-of-a-container "ext") which has three look-like-button links. :D  
Our purpose is to set position of the second button (which is green)  
to appear right below the third button (which is yellow).

`HTML code:`
<script src="https://gist.github.com/codenart/f2b96bea8a49cb69b987c235a6cd2e6e.js"></script>

`CSS code:`
<script src="https://gist.github.com/codenart/864950b1547c16d532e50b9e33c00262.js"></script>

`Result:`
![relative](/images/css-5/relative.jpg)

This is how the sample code above work:

- Web browsers will assume that there is a `base element`  
which have the `same size` with the button  
and stay at the button's `default position`
- The rule `top: 60px` is used to specify the distance between   
the `top edge of the button`  
and the `top edge of the base element`
- The rule `left: 154px` is used to specify the distance between  
the `left edge of the button`  
and the `left edge of the base element`

## Using position: absolute;

The `absolute` value will tell web browsers that we want to set position of the
element relatively to `parent container`.  
Conditionally, the parent container's position must not be `static`.

We're gonna make a simple use of the `absolute` value by sketching a product
card which has a small sale-off tag.  
It's just a sketch and have no product's information. So, we're gonna make the
card `blue` and the sale-off tag `red`.

`HTML code:`
<script src="https://gist.github.com/codenart/87a51fa031ae939031847c8ec28080fc.js"></script>

`CSS code:`
<script src="https://gist.github.com/codenart/b6b02ae6dc9f8a3f2356ccad235c21f7.js"></script>

`Result:`
![absolute](/images/css-5/absolute.jpg)

If [position](https://www.w3schools.com/cssref/pr_class_position.asp "ext") of
the parent container is `static`, web browsers will check the grand container,
the grand grand, ... to find the nearest ancestor container which has non-`static`
[position](https://www.w3schools.com/cssref/pr_class_position.asp "ext"), then
set position of the element base on it.

## Using position: fixed;

The `fixed` value will tell web browsers that we want to set position of the
element relatively to `web browser's viewport`.

Let's write a CSS code snippet using the `fixed` value.  
We're gonna create a sketch of navigation bar (contains no link).  
Our purpose is to pin the navigation bar at top of web browsers' viewport (like
the top navigation bar of my website).  
When visitors scroll the website to see content below, the navigation bar will
be kept visible.

`HTML code:`
<script src="https://gist.github.com/codenart/5765d36a50e4ebb1e15017c713d6771b.js"></script>

`CSS code:`
<script src="https://gist.github.com/codenart/d6388c719eb6411e5bec411e173a7115.js"></script>

Just try those code snippets with your web browser can scroll the webpage to see
if the navigation bar is pinned and always visible.

## Comment in CSS

In the 2 previous examples, you've noticed there some comment lines written in
CSS file which is not `code`.

We can write note in our code snippet by using a pair of `/*` and `*/` to
enclose a `/* comment */`.

We can also use comments to quickly cancel some CSS code blocks without deleting
or moving them to another temporary place.

Our tutorial about
[Positioning Properties](https://codenart.github.io{{ page.url }} "ext")
has finished. In the next tutorial, we'll talk about
[Styling Text](https://codenart.github.io{{ page.next.url }} "ext")
and create a `real` navigation bar. Just a simple one. :D
