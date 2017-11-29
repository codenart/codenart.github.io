---
layout: post
style:
script:

category: bootstrap
featured:
permalink:

title: Bootstrap's components
short: Components & Utilities
description: In this tutorial, we'll have a gentle introduce to Bootstrap's Components and Utilities. <br>We'll also start building the sample webpage mentioned previously. <br>Let's start with introduction to Components.
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
codes and more information for customization. Let's peek in the `dropdowns` document:  
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
For example, we can quickly switch color of the button in the previous example
by changing the class `btn-secondary` to `btn-danger`. We can also change size
of the button by adding the class `btn-sm` or `btn-lg`.

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

Let's build the navigation bar and the header of
[the sample webpage](https://codepen.io/codenart/full/bYvVNy/ "ext") and see how
many line of CSS we have to write. :D

## The navigation bar

Now, we'll create the navigation bar of
[the sample webpage](https://codenart.github.io/magic/#here-is-what-were-gonna-create "ext")
as we've planned in the previous tutorial. Let's start again with
[the basic template](https://codenart.github.io/magic/ "ext") and copy/paste
[the navbar](https://getbootstrap.com/docs/4.0/components/navbar/#supported-content "ext")
from Bootstrap's document.

`HTML code:`
<script src="https://gist.github.com/codenart/aa41d35f24a6183489bea3abf2a87c36.js">
</script>

Since we expect a dark color navbar, let's make some changes to the `<nav>` element.
The class `navbar-light` should be changed to `navbar-dark`; And the class `bg-light`
should be replaced with `bg-dark`.

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
`mr-auto`. This
[utility class](https://getbootstrap.com/docs/4.0/utilities/spacing/#examples "ext")
will apply the CSS rule `margin-right: auto`. We only need it for the first
`navbar-nav` (which is on the left) to push the second `navbar-nav` to the right
corner of the navbar.

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
`bg-dark`'s style for later use with other components.

`CSS code:`
<script src="https://gist.github.com/codenart/4a9a07f3df03f2807d2ab5c54b3b6191.js">
</script>
(The keyword `!important` is required to beat the priority used in Bootstrap's CSS file)

`Result:` [Click here to see the result](https://codepen.io/codenart/full/rYrOQx/ "ext")

So, we've done building the navigation bar with only `3` lines of CSS!

## The header area

This part is very common in every websites (mostly seen on their homepages). The
common design is composition of a big big heading with a short paragraph, and a
button. Bootstrap has defined a component with a big big name so: `jumbotron`.

[Components -> Jumbotron](https://getbootstrap.com/docs/4.0/components/jumbotron/ "ext")

Since the sample webpage's header goes full width, we'll start with a `fluid
jumbotron`. Just append the example code from Bootstrap Jumbotron's document
into our HTML document.

`HTML code:`
<script src="https://gist.github.com/codenart/07531f675f6d2c324dc8a2bb02cfbe55.js">
</script>

To match the design of the sample webpage, we need to:

- add a button
- horizontally center everything
- change text color to white
- add background image.
- extra: for better sematic structure, the outer `<div>` should be replaced with `<header>`.

And here are some utility classes we'll use to achieve the expected result:

- [text-center](https://getbootstrap.com/docs/4.0/utilities/text/#text-alignment "ext") | used for `<header>` so everything inside its will be centered
- [text-white](https://getbootstrap.com/docs/4.0/utilities/colors/#color "ext") | also used for `<header>` so its children will inherit the color
- [bg-trees](https://getbootstrap.com/docs/4.0/utilities/colors/#background-color "ext") | to add
background image
- [py-7](https://getbootstrap.com/docs/4.0/utilities/spacing/ "ext") | to add
vertical paddings to make the area larger; so the background will look better
- Some more [spacing utilities](https://getbootstrap.com/docs/4.0/utilities/spacing/ "ext") will
also be used to enhance visual composition of components.

`HTML code:`
<script src="https://gist.github.com/codenart/f2ef42cef3b9990f6ef135a46145f0cd.js">
</script>

`Result:` [Click here to see the result](https://codepen.io/codenart/full/WXaPjQ/ "ext")

Does it work? No? :D  
I'm sorry. That was my bad. I have not told you that the 2 classes `bg-trees` and
`py-7` does not exist. :D

Firstly, about [background utilities](https://getbootstrap.com/docs/4.0/utilities/colors/#background-color "ext"),
Bootstrap offers many options with nice colors and gradients. But, for background
images, we need to do some work with CSS. Typically, people often create a class
name which can describe its use (like Bootstrap's Utilities). So, here we have
`bg-trees`. :D

Second, about [spacing utilities](https://getbootstrap.com/docs/4.0/utilities/spacing/ "ext"),
Bootstrap offers 5 level of paddings and margins. To add vertical paddings we
can use classes from `py-1` to `py-5`. The largest padding we have is `py-5`
which will add about `50px-height` spaces but we deserve more in this use case
(let's say `150px`). We can override the pre-defined classes but I recommend you
to create a padding level so we'll have more options for later uses.

Let's define those 2 classes in our `override.css` file.

`CSS code:`
<script src="https://gist.github.com/codenart/39aaa85719a5a8770983e0fd836b146e.js">
</script>

That's it! We've built 2 parts of the sample webpage with 14 lines of CSS. Our
tutorial about [Components & Utilities](https://codenart.github.io{{ page.url }} "ext")
has been finished. In the next tutorial, we'll have a quick introduction to
Bootstrap's layout toolset. We'll also create the next 2 parts of the sample
webpage.
