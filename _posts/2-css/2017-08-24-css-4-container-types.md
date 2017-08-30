---
layout: post
style:
script:

category: css
featured:
permalink:

title: Not every container can be sized
short: Container Types
description: We've known that every HTML elements is a container that hold some content. <br>We've also sized some elements in the previous tutorial. <br>It's time to know more about containers.
keywords: web development, beginner, non-coder, kei nart, free, tutorial, coding, programming, code nart, html, css, display, property

date: 2017-08-24 05:15:00
---

In the previous tutorial, we've sized some `div` containers using `width` and
`height` properties. But if you try to do the same thing with an element created
by `<a></a>` tags, you will see that It just doesn't work. It's the containers'
Types cause the difference.

There are 3 common container-Types:

- `block` containers
- `inline` containers
- `inline-block` containers

`block` containers take 100% width of parent containers by default.  
This container-type can be sized by sizing properties.  
Ex: headings, paragraphs, div, nav, etc...

`inline` containers won't take space, they keep their size as small as possible
(just wrapping around the content inside).  
This container-type can NOT be sized.  
Ex: links, span, etc...

`inline-block` containers have the default look like `inline` containers.  
But they can be sized as `block` containers.  
Ex: buttons, images, etc...

## Changing Type of a container

Sometimes we want to help visitors to have better experience using our websites.
If they use mobile devices and want to tap a link, the anchor element should be
sized up a little bit to make sure that the visitor don't have to tap few times
to hit the link.

There is a CSS property called `display` which can help us to change the type of
the container. Let's make some `buttons` using an `anchor element`. :D  

Actually, HTML elements come with default looks but you can use CSS to change
everything. You can make a heading look like a normal paragraph. You can make
this look like that. And here we're gonna make some links look like buttons. :D

`HTML code:`
<script src="https://gist.github.com/codenart/6c2bbe34a1aa628ea3ed8f95af208d04.js"></script>

`CSS code:`
<script src="https://gist.github.com/codenart/b2587f37a88d04ea92a337e5c327f706.js"></script>

`Result:`
![which is which](/images/css-4/which.jpg)

Beside 3 common values `block`, `inline` and `inline-block`; The `display`
property can use with various values which are useful in some cases. As usual,
I prefer keep things simple. We don't need to use everything to create a nice website.

Here is also reference link if you want to go further:
[CSS display](https://www.w3schools.com/cssref/pr_class_display.asp "ext")

Our tutorial about [Container Types](https://codenart.github.io{{ page.url }})
has finished. In the next tutorial, we're gonna talk about
[Sizing Properties](https://codenart.github.io{{ page.next.url }}).
