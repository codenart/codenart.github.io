---
layout: post
style:
script:

category: bootstrap
featured: bingo
permalink: /magic/

title: How to Bootstrap a website?
short: Getting Started
description:
keywords: web development, beginner, non-coder, kei nart, free, tutorial, coding, programming, code nart, html, css, bootstrap

date: 2017-08-26 05:00:00
---

Don't mind about the grammar mistake in the title. I know that "Bootstrap" is not
a verb but it just looks Ok in my English. :D

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

We also have to create a blank CSS file named `override.css` and embed it right
after the Bootstrap's CSS file. We'll write some rules in this CSS file to override
some styles of used components. The purpose is to make our webpages look unique. :D

At the end of the `<body>` section, there are 3 JavaScript files. Don't worry.
You don't have to learn JavaScript to start using Bootstrap. These JavaScript
files contains pre-written codes that make some interactive components work out
of the box.

## Where to find Bootstrap components?

From Bootstrap's official homepage! - [http://www.getbootstrap.com/](http://www.getbootstrap.com/ "ext")

Sure. I've said that I'm not going to create `another` Bootstrap document on my
blog. My purpose is to share with you the most simple way to use Bootstrap and
apply it to create a webpage. So, throughout my Bootstrap series, we'll explore
the Bootstrap's official document and create a webpage together.

Let's peek in the document:
[Click here to see Bootstrap's official document.](http://getbootstrap.com/docs/4.0/getting-started/introduction/ "ext")

`Screenshot:`
![bootstrap's homepage](/images/bootstrap/1/official.jpg)

On the left bar of the website, there are 5 important menus which we'll frequently
use:

- [Getting Started](http://getbootstrap.com/docs/4.0/getting-started/introduction/ "ext") |
I recommend you to read this part later after finishing our tutorials. :D
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
talks about common styles of contents; and contains helper classes related to
typography and common content types.

## Let's create something with Bootstrap

Ok. Here we go. Please click on the following link to see the webpage which we're
gonna create.

[Bootstrap it!](https://codepen.io/codenart/full/bYvVNy/ "ext")

Feel free to enhance the design with your own favorite colors and images. You can
also change the design to make it look better and fit your taste. :D

Ready? Go!
