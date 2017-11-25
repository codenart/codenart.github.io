---
layout: post
style:
script:

category: bootstrap
featured:
permalink:

title: Bootstrap's components
short: Components & Utilities
description: In this tutorial, we'll have a gentle introduce to Bootstrap's Components and Utilities. <br>We'll also start building the sample webpage (the navigation bar). <br>Let's start with introduction to Components.
keywords: web development, beginner, non-coder, kei nart, free, tutorial, coding, programming, code nart, html, css, bootstrap, components, utilities

date: 2017-08-26 05:05:00
---

The current version of Bootstrap (v4) comes with 21 pre-built components
which are ready-to-use and very composable. We can find the list of all
components on the left sidebar of Bootstrap's official website:  
[getbootstrap.com -> Documentation -> Components](https://getbootstrap.com/docs/4.0/components/alerts/ "ext")

`Screenshot:`
![Bootstrap's components](/images/bootstrap/2/components.jpg)

For each component, there is a long-read document which contains sample
codes and much more information for customization. Let's peek in the
`dropdowns` document:  
[Components -> Dropdowns](https://getbootstrap.com/docs/4.0/components/dropdowns/ "ext")

`Screenshot:`
![Bootstrap's dropdowns](/images/bootstrap/2/dropdowns.jpg)

You can use the document's index on the right sidebar to navigate to the
`Examples` section. Just copy the sample code and try it on your own sample webpage.

`Screenshot:`
![Examples section](/images/bootstrap/2/examples.jpg)

`HTML code:`
<script src="https://gist.github.com/codenart/3c0ae21cda6edd9347f384951640a1ba.js">
</script>

`Result:`
<p data-height="500" data-theme-id="light" data-slug-hash="yPEmqM"
   data-default-tab="result" data-user="codenart" data-embed-version="2"
   data-pen-title="Todos" class="codepen">
   See the Pen <a href="https://codepen.io/codenart/pen/yPEmqM/">Todos</a>
   by Kei Nart (<a href="https://codepen.io/codenart">@codenart</a>) on
   <a href="https://codepen.io">CodePen</a>.
</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js">
</script>

Can we call that a magic? We've done nothing but copy/paste and the dropdown
appear on our webpage. Yet, its design looks nice and it just works like a
charm. :D

## Customizing components

Some Bootstrap's components are delivered with various pre-defined styles.
For example, we can quickly switch color of the button using in the previous
example by changing the class `btn-secondary` to `btn-danger`. We can also
change size of the button by adding the class `btn-sm` or `btn-lg`.

You can checkout some more button's options in the following document:  
[Components -> Buttons](http://getbootstrap.com/docs/4.0/components/buttons/#examples "ext")

For the components which do not have various pre-defined styles, Bootstrap
offers other toolsets for customization. They are called `utilities` or
`helper classes`. You can find the utilities menu below the components
menu on the left sidebar.

[getbootstrap.com -> Documentation -> Utilities](https://getbootstrap.com/docs/4.0/utilities/borders/ "ext")

`Screenshot:`
![Bootstrap's utilities](/images/bootstrap/2/utilities.jpg)

As you noticed, there're not only color utilities but also many other
toolsets like `position`, `sizing`, `spacing`, etc.... If you try out all
these things and build some webpages, you will realize that you only have
to write very little CSS code to build a nice website.

Let's build the navigation bar of [the sample webpage](https://codepen.io/codenart/full/bYvVNy/ "ext") and see how many line of CSS we have to write. :D

## The navigation bar

Now, we'll create the navigation bar of
[the sample webpage](https://codenart.github.io/magic/#here-is-what-were-gonna-create "ext")
as we've planned in the previous tutorial.

Let's start again with [the basic template](https://codenart.github.io/magic/ "ext")
and copy/paste
[the navbar](https://getbootstrap.com/docs/4.0/components/navbar/#supported-content "ext")
from Bootstrap's document.

`HTML code:`
<script src="https://gist.github.com/codenart/aa41d35f24a6183489bea3abf2a87c36.js">
</script>

Since we expect a dark color navbar, let's make some changes to the `<nav>` element.
The class `navbar-light` should be changed to `navbar-dark`; And the class `bg-light`
should be changed to `bg-dark`.

Reference documents:
- [Navbar color schemes](https://getbootstrap.com/docs/4.0/components/navbar/#color-schemes "ext")
- [Background color utilities](https://getbootstrap.com/docs/4.0/utilities/colors/#background-color "ext")

`HTML code:`
<script src="https://gist.github.com/codenart/5b27db6d6054a6d67b0a9db90b6a71d5.js">
</script>

The next task is remove the unneeded `dropdown` and `disbaled link`. Now, the
left part of the navbar (inside `navbar-collapse`) contains only 2 links.

`HTML code:`
<script src="https://gist.github.com/codenart/75e96aa6b8d189ed98e5c18ba0ca11c1.js">
</script>

Next, duplicate the second nav-item element several times to have 6 items in total.
You may notice that the class `active` will make a nav-item appear slightly
different from others. This is a convenient used to help a visitor indicate the
current page's location.

`HTML code:`
<script src="https://gist.github.com/codenart/bdcf6e081561676790eb438ba461c9f6.js">
</script>

The last task is replacing the `search form` with 3 social links to match our
expected result. We only need to duplicate the whole `navbar-nav` component.
There is a small difference in the second `navbar-nav`: we don't need the class
`mr-auto`. This utility class will apply the CSS rule `margin-right: auto`. We
only need it for the first `navbar-nav` (which is on the left) to push the second
`navbar-nav` to the right corner of the navbar.

`HTML code:`
<script src="https://gist.github.com/codenart/8e920c127d778e7a668329dd9b76792d.js">
</script>

And here is the final HTML code of the navbar.

`HTML code:`
<script src="https://gist.github.com/codenart/e932b6f158ffaf951159b6b463f2a68a.js">
</script>

Oh wait! The navbar's background color is not absolute `black` as we expected.
Let's open the file `override.css` and write something. We can override the
`background-color` property using the class `navbar` or `bg-dark`. Since I intend
to use `black` background in other components too, I choose to override the class
`bg-dark`'s style.

`CSS code:`
<script src="https://gist.github.com/codenart/4a9a07f3df03f2807d2ab5c54b3b6191.js">
</script>
(The `!important` keyword is required to beat the priority used in Bootstrap's CSS file)

`Result:` [Click here to see the result](https://codepen.io/codenart/full/rYrOQx/ "ext")
