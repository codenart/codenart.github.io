---
layout: post
style:
script:

category: javascript
featured:
permalink:

title: Type? Which type?
short: Type & Variable
description: In this tutorial, we're gonna talk about two basic concepts in programming (Type & Variable); <br>And have a gentle introduce to the most two common Types. <br>
keywords: web development, beginner, non-coder, kei nart, free, tutorial, coding, programming, code nart, javascript, type, number, string, variable

date: 2017-08-28 05:05:00
---

My type is blonde, medium height, smiley, and dreamy. How about yours?

Oooops! Sorry! That type is not related to JavaScript. :D

> Data type is a concept of classifying data for using in a program.  
> An academic & unhappy Mind

Well, actually, I'm not a fan of using academic words to describe things. Because
those words make everything looks ugly. Let's keep using the simple word `type`
and ignore the ugly sentence above. We're gonna find another way to grasp it. :D

## Let's play around with numbers

Do you love calculators?

![a calculator](/images/javascript/2/calculator.jpg)

We all know that calculators are great at dealing with numbers. You simply need
to push some buttons and the result will be there within a blink. Your computer
is even more superior than a calculator thousands times. Let's ask it to perform
an addition and print the result to your web browser's `console` using JavaScript.

`JS code:`
<script src="https://gist.github.com/codenart/50eb5a9b1c7e7bcc92ddfcb38f15c3e4.js">
</script>

Sure, we can give it a bit more complex task.

`JS code:`
<script src="https://gist.github.com/codenart/4549a1ae9566cee8c5d016fe0e0fcec6.js">
</script>

You can easily find division remainder as well.

`JS code:`
<script src="https://gist.github.com/codenart/ae8da240dc80c8cd5bee4fc663b9cec7.js">
</script>

Yet, JavaScript provides a lot more tools to work with numbers. We'll talk about
them in later tutorials. Let's do something else.

## Get a string

![a string](/images/javascript/2/string.jpg)

Since numbers are not everything, there are other needs that people deserve from
daily computing. In daily life, most of us use `words` more frequently than
numbers. So, when we create a software solution to automate a task, it's 99
percent sure that we have to deal with text contents, too.

Now you see, there's a need to represent text contents in code and make your
computer treat them differently than `numbers`. This is where the concept of
Type gets in. Different content type should be treated differently, right?

We have the first basic type is `Number`; And the next one is called `String`
which is used to represent text content. In JavaScript, a string is enclosed
using a couple of single quote `'` or double quote `"`.

`JS code:`
<script src="https://gist.github.com/codenart/04c89eaaa262adcdefbb5e21bdcf5721.js">
</script>

You can place a plus sign `+` between two strings to concatenate them. Since
we're working with strings (not numbers), your computer will consider the plus
sign `+` as a concatenation instead of an addition.

`JS code:`
<script src="https://gist.github.com/codenart/091d76fcb44a1541f31d36b575217ed4.js">
</script>

There are many tools in JavaScript which allow us to manipulate strings efficiently.
But, we're not gonna talk about them here since our main purpose in this tutorial
is getting to know the concept of Type; And we also have another important concept
to care about. Let's talk a little more about Type in JavaScript before talking
about Variable.

## Automatic type conversion
