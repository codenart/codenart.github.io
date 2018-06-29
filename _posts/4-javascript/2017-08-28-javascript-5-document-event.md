---
layout: post
style:
script:

category: javascript
featured:
permalink:

title: The object - document
short: Document & Event
description: In this tutorial, we'll talk about a built-in object which allows manipulating HTML document; <br>And get to know how to make our webpages become interactive. <br>Let's start with the object - document.
keywords: web development, beginner, non-coder, kei nart, free, tutorial, coding, programming, code nart, javascript, object, dom, document object model, document, event

date: 2017-08-28 05:20:00
---

Since the object is in-built, we don't have to care about how it was created and
our purpose is simply exploring how to use it to manipulate HTML document. Before
taking the discussion, please have a quick look at the following reference link
in which all the bundled stuff of the object `document` are fully listed:
[Document Reference](https://www.w3schools.com/jsref/dom_obj_document.asp "ext")

About manipulating HTML document, the object `document` provides some possibilities
as listed below:

1. Finding and modifying specific HTML elements
2. Altering document's structure and creating new elements
3. Binding event listeners/actions to make components become interactive

Along with exploring the object `document`, we'll apply some of its features to
create a dropdown. So, I've prepared HTML and CSS code here; And we can just start
talking about JS stuff. Please copy the code snippets below to your sample HTML
document and CSS file; And create a blank JS file linked to the HTML document.

`HTML code:`
<script src="https://gist.github.com/codenart/ef2d53f28af5dc19d7b6f96edfbbbebe.js">
</script>

`CSS code:`
[Click here to see CSS code](https://gist.github.com/codenart/e35ac23245ec8d2d506c280cd6751ef2 "ext")

And here is the expected result with the dropdown working properly.

<p data-height="500" data-theme-id="light"
   data-slug-hash="LrQXGj" data-default-tab="result" data-user="codenart"
   data-embed-version="2" data-pen-title="A weird dropdown :D" class="codepen">
   See the Pen <a href="https://codepen.io/codenart/pen/LrQXGj/">A weird dropdown :D</a>
   by Kei Nart (<a href="https://codepen.io/codenart">@codenart</a>) on
   <a href="https://codepen.io">CodePen</a>.
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

You may notice that the dropdown is a little weird. Normally, a dropdown has only
1 button but the dropdown we're working with comes with 2 buttons. We'll talk
about this at the end of the tutorial. And please don't peek in the JS source
code on CodePen. We're gonna make it from scratch. It's so simple and won't take
much time. :D

## 1. Finding & Modifying specific elements

The object `document` is actually a model of the root element of the HTML document
which is created by `<html></html>` tags. All of other nested elements are also
modeled by objects and nested inside the object `document` with the same hierarchy
as in the HTML document. So, to select an element, we can travel from the root
element following the HTML document's hierarchy. Let's get the 2 elements `<head>`
and `<body>`.

`JS code:`
<script src="https://gist.github.com/codenart/657270bc00782b7f1a2d3b59b859c41b.js">
</script>

Nested elements like `head`, `body`, and others, are created from the same class
which is fully documented in the following reference link. -
[Element Reference](https://www.w3schools.com/jsref/dom_obj_all.asp "ext")

Start from one element, we can travel to its parent, sibling, and children
elements like this.

`JS code:`
<script src="https://gist.github.com/codenart/af4d7d421f7a2677d0bd0b7e9ebd7ab8.js">
</script>

Traversing among nested elements is a bit inconvenient when we want to select a
deeply nested element. So, the another way is looking up using bundled functions
of the object `document`. Here is how to look up an element using `id`.

`JS code:`
<script src="https://gist.github.com/codenart/5c3bd5136ef3e0074a93ddb29fc3786b.js">
</script>

Now we know how to find specific elements. Let's make some changes to an element's
text content and its related attributes. An element's text content can be accessed
and changed through the variable `textContent`.

`JS code:`
<script src="https://gist.github.com/codenart/5aefa995ad4db72341142e857a06e35b.js">
</script>

Accessing and modifying attributes can also be done with the same approach. We
just need to find the related variables listed in the reference link or
`console.log` the element object to see the variables' names. In the example
below, the variable `className` is used to refer to the attribute `class` of the
dropdown list.

`JS code:`
<script src="https://gist.github.com/codenart/cc8882cafe26715010f90c794a28e3e0.js">
</script>

## 2. Altering HTML structure & Creating elements

> ...in progress

## 3. Making components become interactive

> ...in progress

`JS code:`
[Click here to see JS code](https://gist.github.com/codenart/d99f103094679673c6a95e7966e72ce3 "ext")
