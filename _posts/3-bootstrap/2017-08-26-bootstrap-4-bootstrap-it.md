---
layout: post
style:
script:

category: bootstrap
featured:
permalink:

title: Creating a simple homepage
short: Bootstrap It !
description: In this tutorial, we'll build a simple homepage using the framework - Bootstrap. <br>If you haven't tried all Bootstrap's stuff yet, don't worry; <br>You don't have to. Just begin. :D
keywords: web development, beginner, non-coder, kei nart, free, tutorial, coding, programming, code nart, html, css, bootstrap, simple, homepage

date: 2017-08-26 05:15:00
---

Ready to see some magic? :D  
We're gonna build a homepage with just a few lines of CSS!  
Before writing actual code, let's have a look at the expected result.  
Please click on the following link:
[Simple Homepage - Bootstrap It!](https://codepen.io/codenart/full/bYvVNy/ "ext")

There are 6 parts of the webpage and we're gonna craft them one by one:

1. Navigation bar
2. Jumbotron
3. Featured contents
4. Testimonials
5. Contact form
6. Footer

Don't forget to prepare the basic template. :D

`HTML code:`
<script src="https://gist.github.com/codenart/6efb4d9dbe8577033631e7ee012874d8.js">
</script>

Ok. Let's begin.

## 1. The navigation bar

Navigation bar is a must-have component in any website. Sure, Bootstrap provides
a pre-defined navbar which is responsive and ready-to-use. Just copy/paste the
sample code into our homepage.

[getbootstrap.com -> Documentation -> Components -> Navbar](https://getbootstrap.com/docs/4.0/components/navbar/#supported-content "ext")

`HTML code:`
<script src="https://gist.github.com/codenart/aa41d35f24a6183489bea3abf2a87c36.js">
</script>

Since we expect a dark design, let's change some navbar's helper classes.
`navbar-light` should be changed to `navbar-dark` and `bg-light` should be
changed to `bg-dark`.

`HTML code:`
<script src="https://gist.github.com/codenart/5b27db6d6054a6d67b0a9db90b6a71d5.js">
</script>

For the navigation link block which is nested inside `collapse`, we don't need a
dropdown. So, just remove it and the `disabled` link.

`HTML code:`
<script src="https://gist.github.com/codenart/75e96aa6b8d189ed98e5c18ba0ca11c1.js">
</script>

Add some more navigation links.

`HTML code:`
<script src="https://gist.github.com/codenart/bdcf6e081561676790eb438ba461c9f6.js">
</script>

Duplicate the `navbar-nav` block to replace the search form on the right side.
We only need 3 social links for the second `navbar-nav`. Since the helper class
`mr-auto` is not necessary for the second `navbar-nav`, just remove it.

`HTML code:`
<script src="https://gist.github.com/codenart/8e920c127d778e7a668329dd9b76792d.js">
</script>

And here is the final HTML snippet of our navigation bar.

`HTML code:`
<script src="https://gist.github.com/codenart/e932b6f158ffaf951159b6b463f2a68a.js">
</script>

Oh wait! We expected an absolute `black` background but Bootstrap's pre-defined
style is dark gray. Let's fix it. We can override `background-color` of the
class `navbar` or `bg-dark`. If we override the helper class `bg-dark`, we can
re-use this helper class for the footer. :D

`CSS code:`
<script src="https://gist.github.com/codenart/4a9a07f3df03f2807d2ab5c54b3b6191.js">
</script>

References:

- [Navbar](https://getbootstrap.com/docs/4.0/components/navbar/ "ext")
- [Collapse](https://getbootstrap.com/docs/4.0/components/collapse/ "ext")
- [Colors](https://getbootstrap.com/docs/4.0/utilities/colors/#background-color "ext")
- [Spacing](https://getbootstrap.com/docs/4.0/utilities/spacing/ "ext")

## 2. The jumbotron

Besides navbar, jumbotron is also a common component which is often seen in
homepage of many website. Let's checkout the Bootstrap's pre-defined Jumbotron
and append the sample code right after our navigation bar.

[getbootstrap.com -> Documentation -> Components -> Jumbotron](https://getbootstrap.com/docs/4.0/components/jumbotron/ "ext")

`HTML code:`
<script src="https://gist.github.com/codenart/07531f675f6d2c324dc8a2bb02cfbe55.js">
</script>

To achieve the expected result, we have to finish the following todo list:

- Add a button (actually a link with visual style looks like a button)
- Add background image using a helper class `bg-trees`
- Add vertical paddings to the `jumbotron` using a helper class `py-7`
- (Optional) Change the most outer `<div>` of the `jumbotron` to `<header>`
for better semantic markup.

`HTML code:`
<script src="https://gist.github.com/codenart/f2ef42cef3b9990f6ef135a46145f0cd.js">
</script>

Does it work? No? :D  
I'm sorry. That was my bad. I've not told you that Bootstrap doesn't have the two
helper classes like `bg-trees` and `py-7`.

For background utilities, Bootstrap only offers colors & gradients. We have to
define the class `bg-trees` on our own. For padding utilities, Bootstrap offer
5 levels of paddings. Let's say for vertical padding, they've defined `py-1` to
`py-5`. The largest padding is `py-5` will add about `50px height` top & bottom
paddings to the container. But, it's still not large enough to make our background
looks beautiful. We're gonna define our own helper class `py-7`, too. Let's write
a few more lines of CSS.

`CSS code:`
<script src="https://gist.github.com/codenart/39aaa85719a5a8770983e0fd836b146e.js">
</script>

References:

- [Jumbotron](https://getbootstrap.com/docs/4.0/components/jumbotron/ "ext")
- [Buttons](https://getbootstrap.com/docs/4.0/components/buttons/ "ext")
- [Typography](https://getbootstrap.com/docs/4.0/content/typography/ "ext")
- [Text](https://getbootstrap.com/docs/4.0/utilities/text/ "ext")
- [Borders](https://getbootstrap.com/docs/4.0/utilities/borders/#border-radius "ext")

## 3. The featured section

This section is an example of Bootstrap's grid implementation. We're gonna make
responsive layout which has 3 blocks. These blocks will display as 1 column on
mobile devices and 3 columns on large screen devices. Let's start with a blank
`<section>` container and give it nice vertical paddings.

`HTML code:`
<script src="https://gist.github.com/codenart/2a3c730960265efbbdd6f755d1899a6e.js">
</script>

Copy/paste the sample code from Bootstrap's grid document:  
[getbootstrap.com -> Documentation -> Layout -> Grid](https://getbootstrap.com/docs/4.0/layout/grid/#how-it-works "ext")

`HTML code:`
<script src="https://gist.github.com/codenart/dadc9205f7d60d28f58872fa63472d69.js">
</script>

Here we have some works need to be done:

- Add a heading level 2 before the `row` container.
- The 3-column layout may look well on tablet or larger screens. So, let's change
the breakpoint from `col-sm` to `col-lg`; And also add nice vertical paddings to
each blocks.
- Each block will contain a heading level 3, a short paragraph, and a `read more`
button (actually a link with a visual look of a button).

`HTML code:`
<script src="https://gist.github.com/codenart/eeb6a2f2974d5f8e33b4c31c09526193.js">
</script>

Too easy? :D

## 4. Finish it yourself :D

I believe that you've found no difficulty crafting the next 2 sections and the
footer. So, I'll just leave final version of source code here:

`HTML code:`
[Click here to see final HTML code](https://gist.github.com/codenart/e36a8fb1e1ea97e5fcec063e10d21c03 "ext")

`CSS code:`
[Click here to see final CSS code](https://gist.github.com/codenart/ab6db0dbd23cf61bf5c585e8ec467711 "ext")

Our Bootstrap crash series has been finished. Now you know how to Bootstrap a
webpage. It's time to move on.

Commonly, when somebody comes to this field (web development), it's important to
know that HTML and CSS are 2 of 3 must-learn languages. The third language is
JavaScript which is considered as the next version of English. :D

Do you want to know what is JavaScript? :D  
[Click here to join me learning JavaScript.](http://codenart.github.io/smart/ "ext")
