---
layout: post
style:
script:

category: bootstrap
featured: bingo
permalink: /magic/

title: How to Bootstrap a website?
short: Getting Started
description: Don't mind about the grammar mistake in the title. :D<br>I know that "Bootstrap" is not a verb but it just looks Ok in my English. :D<br>Bootstrap is something magical to the one who is in love with HTML, CSS and an easy life. :D
keywords: web development, beginner, non-coder, kei nart, free, tutorial, coding, programming, code nart, html, css, bootstrap, getting started

date: 2017-08-26 05:00:00
---

If you've been following my blog from the CSS tutorial about
[Frameworks & Icons](https://codenart.github.io/css/2017/08/24/css-14-frameworks-icons.html "ext")
then you already knew what Bootstrap is. But, I still want to re-introduce `the
thing` in this tutorial in case someone just accidently comes here and join our tutorial.

Bootstrap is the most popular HTML/CSS frameworks which provides common components
(navigation bar, dropdown, image slider, grid layout tools, ...) to help us build
websites easier, faster, and smarter. :D

To start using Bootstrap, we need to use the following template to initialize
every HTML documents.

`HTML code:`
<script src="https://gist.github.com/codenart/6efb4d9dbe8577033631e7ee012874d8.js">
</script>

As you noticed that, we have embedded a CSS file named `bootstrap.min.css` from
somewhere on the internet. This CSS file will contains pre-written styles for
common components.

There's also blank CSS file named `override.css` which is embedded after the
Bootstrap's CSS file. This CSS file can be used to write some rules to override
some styles of used components. The purpose is to make our webpages look unique. :D

At the end of the `<body>` section, there are 3 JavaScript files which contain
pre-written codes that make some interactive components work out of the box.
So, you don't have to learn JavaScript to start using Bootstrap.

## Where to find Bootstrap components?

From Bootstrap's official homepage! - [http://www.getbootstrap.com/](http://www.getbootstrap.com/ "ext")

Sure. I've said that I'm not going to create `another` Bootstrap document on my
blog. My purpose is to share with you the most simple way to use Bootstrap and
apply it to create a webpage. So, throughout my Bootstrap series, we'll explore
the Bootstrap's official document and create a simple webpage together.

Let's peek in the document:
[Click here to see Bootstrap's official document.](http://getbootstrap.com/docs/4.0/getting-started/introduction/ "ext")

`Screenshot:`
![bootstrap's homepage](/images/bootstrap/1/official.jpg)

On the left bar of the website, there are 4 important menus which we'll frequently
use:

- [Components](http://getbootstrap.com/docs/4.0/components/alerts/ "ext") | This
part contains all the pre-built components which are ready to used.
- [Utilities](http://getbootstrap.com/docs/4.0/utilities/borders/ "ext") | Many
utility classes which help us to quickly enhance any components without writing
much CSS code in our `override.css` file.
- [Layout](http://getbootstrap.com/docs/4.0/layout/overview/ "ext") | Some layout
classes which help us to create responsive grid. Let's say if we want to create
an e-commerce site with a product list which will display as 4 columns on laptops
and 1 column on mobile devices, this task can be done very easily with the layout
classes.
- [Content](http://getbootstrap.com/docs/4.0/content/reboot/ "ext") | This part
 contains helper classes related to typography and common content types.

## Here is what we're gonna create

`Sample webpage:` [Bootstrap it!](https://codepen.io/codenart/full/bYvVNy/ "ext")

In the next tutorial, we'll talk about Bootstrap's components and utilities
classes. We'll also apply them to create the navigation bar of the sample
webpage above.
