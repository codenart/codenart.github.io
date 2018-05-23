---
layout: post
style:
script:

category: css
featured:
permalink:

title: The auto value
short: Width & Height
description: In this tutorial, we'll meet the width & height properties again and discuss more about them.<br> We'll start with a special and very useful value. It is the `auto` value.<br> Later, we'll talk about some related properties.
keywords: web development, beginner, non-coder, kei nart, free, tutorial, coding, programming, code nart, css, size, properties, width, height, min-width, max-width, min-height, max-height, auto

date: 2017-08-24 05:50:00
---

That word, `auto`, it sounds `smart`. Do you think so? :D  
It's our nature to love something which is automatic. I love automatic dishwasher,
automatic coffee machine, automatic cat feeder, etc.... And here, in CSS, we have
the `auto` value. This value will tell web browsers to automatically calculate
suitable values for our CSS properties.


Let's assume that we have 3 images and their actual sizes are 1920x1080, 1600x1000
and 1000x1000. When we embed these images to a webpage, a clever move is specifying
their widths using `%`, some thing like `width: 100%;` to make the images fit into
various screen sizes. But, wait! How about height?

These images have different aspect ratios. So, to keep them not stretched, we
may have to specify their heights one by one. Nope, we won't do that. This is
the point where we need help from the `auto` value.

`HTML:`
<script src="https://gist.github.com/codenart/e16739a33cd36cff313a8b242d4664aa.js">
</script>

`CSS:`
<script src="https://gist.github.com/codenart/ecf296dbbcc28a1b7107e056f061c242.js">
</script>

`Result:`

<p data-height="500" data-theme-id="light" data-slug-hash="rGqjjw"
   data-default-tab="result" data-user="codenart" data-embed-version="2"
   data-pen-title="Auto" class="codepen">
   See the Pen <a href="https://codepen.io/codenart/pen/rGqjjw/">Auto</a>
   by Kei Nart (<a href="https://codepen.io/codenart">@codenart</a>) on
   <a href="https://codepen.io">CodePen</a>.
</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

Is that a magic? We don't even have to make any calculation. Web browsers
automatically take care of the complex task and maintain those images' aspect
ratio. I've no idea why web browsers know exactly what we want. :D

Note that the `auto` value can be used with various CSS properties and we'll meet
it again and again.

## Minimum and maximum values

Besides the width and height properties that we've already known, CSS also offer
some related properties like `min-width`, `max-width`, `min-height` and `max-height`.
These properties are used to create some constraints that help us to make sure
components will look good in any situation.

Let's say, the common line length for good reading experience is maximum 90
characters or less; Combine with common font-size (around 16-18px) will give
the result in ~700-800px. So, You may want to make sure your blog/website will
use maximum line length as 800px. This can be
done by using `max-width` property:

`.post { max-width: 800px }`

So, your blog post will display as fluid a container in small screen. But when
people see it in a large display (let's say a 21" full HD display), those content
will stay at 800px wide and provide a good reading experience. It's cool, isn't it?

These properties are also used in `media query syntax` which allows us to write
CSS code for each certain screen sizes. We'll meet them in a few next tutorials.
Just try those properties around in your sample document to get familiar with
them. This preparation will benefit you in various way when you start creating
responsive components. As usual, here are reference links:

- [min-width](https://www.w3schools.com/cssref/pr_dim_min-width.asp "ext")
- [max-width](https://www.w3schools.com/cssref/pr_dim_max-width.asp "ext")
- [min-height](https://www.w3schools.com/cssref/pr_dim_min-height.asp "ext")
- [max-height](https://www.w3schools.com/cssref/pr_dim_max-height.asp "ext")

In the next tutorial, we'll meet some new amazing tools which are used to size
up elements and position them in a different way of thinking.
