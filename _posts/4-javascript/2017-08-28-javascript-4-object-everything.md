---
layout: post
style:
script:

category: javascript
featured:
permalink:

title: An object in JavaScript
short: Object & Everything
description: In this tutorial, we're gonna talk about the most important type in JavaScript. It is Object. <br>Indeed, JavaScript treats everything as Object. Everything! :D <br>Let's get to know about the type.
keywords: web development, beginner, non-coder, kei nart, free, tutorial, coding, programming, code nart, javascript, type, class, prototype, object, everything

date: 2017-08-28 05:15:00
---

Whenever we lower down vibration to identify with the intellect which is the
inferior dimension of the mind, everything seems to be separated and definable.
Anything can be defined by some properties and abilities. For example: A tree
can be considered as an object which has name, age, and ability to produce.

To reflect this dimension of the mind into programming, the first programmers of
the world decided to allow modelling objects in code. This makes programming more
friendly and gives people more possibilities to turn their ideas into code. Let's
have a look at the example below.

`JS code:`
<script src="https://gist.github.com/codenart/3f26eff5db309303e01fa8a9823e3b4b.js">
</script>

Here we have an object stored in the variable `theTree`. An object in JavaScript
is just a bundle of `variables` and `functions` enclosed by a couple of curly
braces `{}`. The variables `name` and `age` are used to describe the tree's
properties; And the function `produce` is used to describe its ability to yield
fruits.

Please take note that we don't need to use the keywords `var` and `function` for
bundled stuff of an object; Values are bound with the variables using colons `:`
instead of equal signs; And things are separated by commas.

Normally, when referring to object, the variables are called `properties` and the
functions are called `methods`. But, it's just the words matter, isn't it? We're
gonna keep calling them `variables` and `functions` because they're just that.

To access the bundled variables and functions, a dot `.` is used to chain the object's
reference and the bundled stuff. This is it! The dot which was mentioned in our
[first tutorial](https://codenart.github.io/smart/#the-baby-first-javascript-statements).
We've used it many times with the statement `console.log()`. The `console` itself
is an object; And the function `log` is actually bundled in the object.

## Referring from the inside

In the section above, we've used the variable `theTree` to store the object's
reference; Then access the bundled stuff of the object from outside by calling
the variable `theTree`. To use the object's reference from the inside, the
keyword `this` is used to refer to the object itself.

`JS code:`
<script src="https://gist.github.com/codenart/0150dfbe42873ef9e298238d801e0673.js">
</script>

## Creating object using class

Yet, creating object in JavaScript can be done in a more elegance way. Let's
check the code snippet below.

`JS code:`
<script src="https://gist.github.com/codenart/4a55e1f18ab70b50cc8eb53798571f88.js">
</script>

The `class` keyword is used to create an object named `Thing` which serves as a
sketch. It does not have detail `color` and `age`; Instead, a `constructor` is
used to bind `givenColor` and `givenAge` when an actual object is created later.

And then we've created 2 objects using the keyword `new`, the sketch's name, and
feeding detail `color` and `age` of each object. By creating objects this way,
we don't have to write much repetitive code like variable names and the function
`whisper` which behaves the same in those 2 objects.

JavaScript also provides pre-defined sketches and objects which bring about
various conveniences. We're gonna talk about them in the next tutorials. Here
is a small example which use the pre-defined sketch `Date` to get time information
from system.

`JS code:`
<script src="https://gist.github.com/codenart/239e30c8ca1889f764fb3a29108f619b.js">
</script>

## Everything in JavaScript is Object

Not really. But, in fact, JavaScript treats almost everything as object. :D

A function is treated as an object. It's a bundle.

`JS code:`
<script src="https://gist.github.com/codenart/a50548b7618428a9c0583d75bede6040.js">
</script>

A number is also treated as an object.

`JS code:`
<script src="https://gist.github.com/codenart/c1926748e08df122e9cd15dd0d0ffcac.js">
</script>

A string is treated as an object, too.

`JS code:`
<script src="https://gist.github.com/codenart/666595fc9948e30ceb6176c913bcea09.js">
</script>

And we'll meet more and more objects from now on. Our tutorial about `object`
has finished. In the next tutorial, we'll meet 2 in-built objects of web browser
which allow us to manipulate HTML document and command browser window. Goodbye
and see you next time in the realm of `intellect`. :D

In case you wonder the realm beyond, here is an invitation to the superior
dimension of the mind, the dimension of `knowing`, where things are one, where
words and thoughts reach their limitation...

`Invitation:`
<div class="embed">
   <iframe width="560" height="315"
           src="https://www.youtube.com/embed/uIAhuVhA-V0"
           frameborder="0" allowfullscreen>
   </iframe>
</div>
