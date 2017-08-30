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
(just wrapping around the content inside). Web browsers treat the containers as
texts (words).  
This container-type can NOT be sized.  
Ex: links, span, etc...

`inline-block` containers are special. Web browsers treat them as `inline`
containers.  
But they can also be sized as `block` containers at once.  
Ex: buttons, images, etc...

## Changing Type of a container

Sometimes we want to help visitors to have better experience using our websites.
If they use mobile devices and want to tap a link, the anchor element should be
sized up a little bit to make sure that the visitor don't have to tap few times
to hit the link.

There is a CSS property called `display` which can help us to change the type of
the container. Let's make some `buttons` using an `anchor elements`. :D  

Actually, HTML elements come with default looks but you can use CSS to change
everything. You can make a normal paragraph look like a heading. You can make
this look like that. And here we're gonna make some links look like buttons. :D

`HTML code:`
<script src="https://gist.github.com/codenart/6c2bbe34a1aa628ea3ed8f95af208d04.js"></script>

`CSS code:`
<script src="https://gist.github.com/codenart/b2587f37a88d04ea92a337e5c327f706.js"></script>

`Result:`
![which is which](/images/css-4/which.jpg)

Beside 3 common values `block`, `inline` and `inline-block`; The `display`
property can use with various values which are useful in some ways. Some new
values like `flex` are great for up-to-date web browsers. Here is the reference
link in case you want to go further:
[CSS display](https://www.w3schools.com/cssref/pr_class_display.asp "ext").

As usual, I prefer keep things simple. You can use these 3 common values to
create a nice website without any limitation. You can save the reference link
for future learning. We still have so many common and important things to learn.

Our tutorial about [Container Types](https://codenart.github.io{{ page.url }})
has finished. In the next tutorial, we're gonna talk about
[Sizing Properties](https://codenart.github.io{{ page.next.url }}).
