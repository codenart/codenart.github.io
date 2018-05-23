---
layout: post
style:
script:

category: css
featured:
permalink:

title: Combining CSS Selectors
short: Combining Selectors
description: We don't have to use all the tools that are available in CSS to create a nice website. <br>But, if we know more tools, it means we have more choices. <br>Let's talk more about CSS Selectors.
keywords: web development, beginner, non-coder, kei nart, free, tutorial, coding, programming, code nart, css, combine selectors

date: 2017-08-24 05:40:00
---

If you wonder why we've not talked about combining CSS selectors at
[the beginning](https://codenart.github.io/css/2017/08/24/css-2-selectors-priorities.html "ext"),
I've to say it was my bad. I've just missed these stuff for... no reason. :D  

In every aspect of life, our most naturally way to learn anything, is not
going on a straight line. Our paths are always spirals; seamless and
continuity spirals.

`A spiral:`
![spiral](/images/css/9/spiral.jpg)

We start by learning some basic stuff and create some things. Then we back to
the core knowledge to learn a little more deeply and create a little better
things. That's it.

And now we're starting a new cycle by learning more about CSS Selectors. :D

## What is benefit of Combining Selectors?

Let's take a look back at our
[simple navigation bar](https://codenart.github.io/sample/2017/09/03/sample-1-simple-navbar.html#preparing-html-code "ext").

`HTML code:`
<script src="https://gist.github.com/codenart/4d742c66fae65b1b0ac0234b2b7ec023.js">
</script>

To style the links, we've given them a nice class name `nav-link` which is very
descriptive. But, what if we have another navigation bar in our webpage? By
directly using the class name in CSS, we've made it not able to be re-used.

Fortunately, CSS allows us to combine Selectors to select elements more
precisely and make class names able to be re-used. The snippet below is an
example about combining CSS Selectors. In the example, there're 2 CSS blocks:

- The first one will select only `.nav-link` nested inside `#topnav`
- The second one will select only `.nav-link` nested inside `#sidenav`

<script src="https://gist.github.com/codenart/16916b9abe854737abea076a823d38f6.js">
</script>

## How to combine CSS Selectors?

Combining CSS Selectors falls into 3 types and we're gonna talk about them one by one:

1. Union & Intersection
2. Next Sibling & Followed Siblings
3. Children & Descendants

### 1. Union & Intersection

`Union` of multiple Selectors is commonly used to reduce repetition in CSS.

Let's assume that we want to apply the same font to all headings in our webpages.
So, this is how we style them without combining selectors:

`CSS code:`
<script src="https://gist.github.com/codenart/f62af0f6a4bf4cdb4855e5b269fae2ac.js">
</script>

The following re-written code snippet can provide the same effect:

`CSS code:`
<script src="https://gist.github.com/codenart/4255563daa1cde9ce6d3933d8d0d582f.js">
</script>

By writing Selectors in a row and separate them using commas `,` we can write
some shared rules and avoid repetition in our code. And that is `union`. Let's
talk about `intersection`.

`Intersection` helps us to select elements more precisely by append a selector
to another one. The example below will select only `<p>` elements which are
members of `.excerpt`, and vice versa.

`CSS code:`
<script src="https://gist.github.com/codenart/2a678b174854a7d17bf7f8c107f00378.js">
</script>

`HTML code:`
<script src="https://gist.github.com/codenart/3969495ce5c21164a33a82ce75bd130e.js">
</script>

### 2. Next Sibling & Followed Siblings

To select the `next sibling` of an element, we can use a plus sign `+` to combine
Selectors. The example below will select only the `<p>` element which is the next
sibling of `#unique`.

`CSS code:`
<script src="https://gist.github.com/codenart/b5e1dc262384199539af6f68f084337b.js">
</script>

`HTML code:`
<script src="https://gist.github.com/codenart/86a8c1f96fe5ffe6f489d89c7ce4cec7.js">
</script>

If we change the `#unique` to `h2` in our CSS code, all of those 3 `<p>` elements
will be selected. The web browsers will understand that we want to select every
`<p>` elements which is the next sibling of an `<h2>` element.

To select all the `followed siblings` of an element, we can use a tilde `~` to
combine Selectors. Let's change our code snippets a little bit.

`CSS code:`
<script src="https://gist.github.com/codenart/8112576504443e7d247b3ea4d20e8614.js">
</script>

`HTML code:`
<script src="https://gist.github.com/codenart/48fc86940f123e429499ad629d283c2c.js">
</script>

### 3. Children & Descendants

To select `children` of an element, we can use a greater-than-symbol `>` to
combine selectors. The example below will select only the links which are
children of `#topnav`, but not all descendants.

`CSS code:`
<script src="https://gist.github.com/codenart/198548a99e29f9f299598f8e9e245205.js">
</script>

`HTML code:`
<script src="https://gist.github.com/codenart/6662d2ad9ed814a586d667541161a282.js">
</script>

To select all `descendants` of the `#topnav`, we can just remove the
greater-than-symbol `>`.

`CSS code:`
<script src="https://gist.github.com/codenart/ceed3366cb3931556ce5f81dfb14b17c.js">
</script>

`HTML code:`
<script src="https://gist.github.com/codenart/41ed191731484930e63d9a340aa8d8d3.js">
</script>

For all the examples in this tutorial, I've been using `id selectors` for better
explanation. But, the front selectors can be `class selectors` or `basic selectors`.

Our tutorial about
[combining-selectors](https://codenart.github.io{{ page.url }} "ext") has finished.
In the next tutorial, we'll talk about
[pseudo-classes](https://codenart.github.io{{ page.next.url }} "ext") which
can help us to create interactive effects: Something like when a visitor hovers
mouse pointer on a link and the link's color will be changed.
