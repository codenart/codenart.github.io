---
layout: post
style:
script:

category: css
featured:
permalink:

title: What is a framework?
short: Frameworks & Icons
description: In this tutorial, we'll talk about how to use a framework to speed up our tasks; <br>And how to use free icons for user interface components. <br>These stuff will change the way you code.
keywords: web development, beginner, non-coder, kei nart, free, tutorial, coding, programming, code nart, html, css, framework, bootstrap, icons, font, awesome

date: 2017-08-24 06:05:00
---

From the very early tutorials on this website, we've met many free & cool stuff:
Atom Editor, Github Pages, Free Images Hosting, etc... And now, we're gonna add
some more things to the list. :D

A framework is `free` code that is shared by experienced developer to help us
build things easier. Just imagine that you were the code star, you've create
common components: navigation bar, dropdown, images slider, etc... Now, you want
to share your code by allowing me to download your CSS file and a document to show
me examples about those components. So, I can use your components by embedding
your CSS file to my HTML documents.

It does not mean that my website will have the same look as yours. I can add my
own CSS file to override the outlook of any component and my website still look
very personalized.

`HTML code:`
<script src="https://gist.github.com/codenart/39514653f97b326cb884336ef4dc7184.js">
</script>

In the HTML snippet above, let's assume that the `.navbar` is a component that
is pre-styled in `your-framework.css` with nice paddings, responsive ready and
light background. Now, I want to override its background to `Black` to fit my
taste. I only need to write a single CSS rule in my `personalized.css`.

`CSS code`
<script src="https://gist.github.com/codenart/a0418d2311f721c9a13a28346f6879b7.js">
</script>

That is the idea how we share and use a framework. It's quite simple, isn't it? :D

## Which framework to start with?

There are many CSS frameworks out there, maybe thousands of them. You can start
with the most popular one - [Bootstrap](http://getbootstrap.com/ "ext"). This
framework provides common components that help you quickly build responsive
websites. After getting familiar with using document and applying the framework
to create some websites, you can try other frameworks to find the one that can
touch the bottom of your heart.

You can learn Bootstrap yourself using its official page
[http://getbootstrap.com/](http://getbootstrap.com/ "ext"). My blog also has
Bootstrap tutorials but I'm not gonna create `another Bootstrap document`; My
purpose is to show the most simple way to apply Bootstrap to create a website.
Hopefully that you will join me in learning Bootstrap the simple way.

[Start learning Bootstrap here!](https://codenart.github.io/magic/ "ext")

You can start learning Bootstrap right now even our CSS series will be continued
in a few more tutorials to cover basic knowledge about animation. I'll also
mention some extra stuff and resources in the last CSS tutorial for further
learning if you want to complete your vanilla CSS knowledge.

## Using icons

People also love [Font Awesome](http://fontawesome.io/ "ext") - a CSS framework
and iconic font. This framework can help us to quickly insert nice icons into
user interface components like buttons, social links, etc...

Using [Font Awesome](http://fontawesome.io/ "ext") is so simple and explainable
in just a single section; So, we're gonna make an example for it right now.

Firstly, we need to add Font Awesome's CSS file into our document using this:

`<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">`

Inside body of the document, whenever you want to insert an icon, just create an
element using `<i>` tags with provided class names from
[Font Awesome homepage](http://fontawesome.io/icons/ "ext"):

`<i class="fa fa-facebook"></i>`

Let's create a simple footer with some social links to use on your website.

`HTML code:`
<script src="https://gist.github.com/codenart/49bc9bb5c647b599df8c0898e0c6811f.js">
</script>

`CSS code:`
<script src="https://gist.github.com/codenart/597183dd00b988b2c62602500c965acd.js">
</script>

`Result:`
<p data-height="500" data-theme-id="light" data-slug-hash="PONMYJ"
   data-default-tab="result" data-user="codenart" data-embed-version="2"
   data-pen-title="Somewhere" class="codepen">
   See the Pen <a href="https://codepen.io/codenart/pen/PONMYJ/">Somewhere</a>
   by Kei Nart (<a href="https://codepen.io/codenart">@codenart</a>) on
   <a href="https://codepen.io">CodePen</a>.
</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

Our tutorial about [Frameworks & Icons](https://codenart.github.io{{ page.url }})
has finished. In the next tutorial, we'll talk about basic animations in CSS.
