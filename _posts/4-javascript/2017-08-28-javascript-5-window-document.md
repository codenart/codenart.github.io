---
layout: post
style:
script:

category: javascript
featured:
permalink:

title: The object - window
short: Window & Document
description: In this tutorial, we'll talk about 2 built-in objects of web browser (window & document). <br>They allow manipulating HTML document & browser window. <br>Let's start with the object - window.
keywords: web development, beginner, non-coder, kei nart, free, tutorial, coding, programming, code nart, javascript, object, dom, document object model, document, node, bom, browser object model, window

date: 2017-08-28 05:20:00
---

This is the biggest built-in object of web browser, also referred as BOM (Browser
Object Model). So, it's in-built and there must be a document somewhere with all
of its bundled stuff listed. Here they are:

- [Bundled variables](https://developer.mozilla.org/en-US/docs/Web/API/Window#Properties)
- [Bundled functions](https://developer.mozilla.org/en-US/docs/Web/API/Window#Methods)

Since our minds are very limited, they're just vehicles which are designed to
serve wondering in the reality, so trying to remember everything using the minds
is just a worst idea ever. Let's take it easy by just having a gentle introduction
to `what there are` in the document. We'll just care about some common stuff and
save the reference links for later use.

Let's start with the bundled variables. The object `window` bundles many other
objects which model various parts of the browser window. One of them is the
object `console` that we've used from the very first tutorial. -
[Console Reference](https://developer.mozilla.org/en-US/docs/Web/API/Console)

`JS code:`
<script src="https://gist.github.com/codenart/a8bec8b24224c0fff2407c1ab7d793a7.js">
</script>

Since the object `window` bundles so many things and it is frequently referred
to, the object itself is inferred by web browsers; And we can just omit its
reference while accessing its bundled stuff. That's why we can just say
`console.log` instead of `window.console.log`.

The next commonly used member is `window.location`. This object is used to
get the current URL address or redirect user to another address. -
[Location Reference](https://developer.mozilla.org/en-US/docs/Web/API/Location)

`JS code:`
<script src="https://gist.github.com/codenart/aa7a6dc4dbebbec9b599516a29922554.js">
</script>

Related to redirecting user to another address, another member `window.history`
is also frequently used. -
[History Reference](https://developer.mozilla.org/en-US/docs/Web/API/History)

`JS code:`
<script src="https://gist.github.com/codenart/1e3ddf8d4dc9541ea8cee97694a8efab.js">
</script>

And the most commonly used member is `window.document` which model the HTML
document. We're gonna save it for the next section. Let's checkout some bundled
functions of the object `window` before talking about manipulating HTML document.
