---
layout: post
style:
script:

category: javascript
featured:
permalink:

title: Type? Which type?
short: Type & Variable
description: In this tutorial, we're gonna talk about two basic concepts in programming (Type & Variable); <br>And have a gentle introduce to the most two common Types. <br>Let's get started with the concept of Type.
keywords: web development, beginner, non-coder, kei nart, free, tutorial, coding, programming, code nart, javascript, type, number, string, variable

date: 2017-08-28 05:05:00
---

My type is thin, medium height, smiley, and dreamy. How about yours?

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
an addition and print the result to your web browser's
[console](https://codenart.github.io/smart/#the-baby-first-javascript-statements)
using JavaScript.

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

Yet, JavaScript provides a lot more tools to work with numbers. But we're gonna
keep things simple now and talk about those tools in later tutorials. Let's
do something else.

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
to care about. Let's talk a little more about Type in JavaScript before taking
the concept of Variable.

## Automatic type conversion

Besides `Number` and `String`, there are some more common types which are designed
to make programming languages more flexible and give us more possibilities to
express our needs to computers. Learning fundamental programming is just like
learning to cook. We simply get to know all the common spices and how does each of
them taste; And later we're freely to use them our own way to cook a meal.

Sometimes we can make a dish taste salty by using cinnamon instead of salt. It is
possible not because those two are the same but they have quite the same meaning
to the dish. The same possibility happens in programming. Sometimes you can use
`that type` instead of `this type` in an expression which requires `this type`. :D

`JS code:`
<script src="https://gist.github.com/codenart/22ab375e9ab434ad549ec21ee64cd1f6.js">
</script>

In the example above, what we expect is a string concatenation. But I've put
there a number and it just works. This is a smart feature of JavaScript which
automatically convert the number to a string before the operation is processed
and help us to simplify our works. Generally, in many other programming languages,
type conversion must be done explicitly by writing extra lines of code. We'll
talk about explicit conversion in a few later tutorials.

Since automatic type conversion is a very important feature in JavaScript, we'll
mention it again and again whenever we meet a new Type. For the two basic Types
we're talking about in this tutorial, there's only 1 way automatic conversion
`Number -> String`. No vice-versa. Please take note of this. :D

## The concept of Variable

Let's assume that you are building your personal blog. Your blog's homepage will
contain some entries to the ten latest posts. Each entry will contain an excerpt
made from a post's content. You decide to fully load the content of articles to
the entry component then write some JavaScript code to trim those contents to
300 characters of each excerpt. So, here are steps needed to do in JavaScript:

- Extract content of an article from HTML document.
- Trim it down to 300 characters long (included spaces).
- Append three dots at the end of the trimmed content.
- Put the excerpt back to HTML document.
- Repeat those steps above for each of other entries.

There's a need to temporarily store the content somewhere to manipulate it step
by step before reaching its final form and put the result back to HTML document.
We need a Variable!

> A variable is simply a box that you can put anything inside
> A simple & happy Mind

A variable in JavaScript is declared using the keyword `var` followed by a name.

`JS code:`
<script src="https://gist.github.com/codenart/1cdf13eaf423122c77323193d4729015.js">
</script>

You can give the box any other name that you want. Just make sure that it follows
these rules:

- A variable name can contains letters, digits, underscores `_`, and dollar sign `$`.
- It must not begin with a number
- Variable name is case sensitive. `box` and `Box` are different variables.
- It cannot be any of reserved keywords. See list here:
[JavaScript reversed keywords](https://www.w3schools.com/js/js_reserved.asp)

So, we've created a box. Let's put something inside. Maybe a number, a huge number,
a string, or ...a cat.

![a cat in a box](/images/javascript/2/cat.jpg)

`JS code:`
<script src="https://gist.github.com/codenart/0d154adf692c8117c4bf933ac76176b5.js">
</script>

To assign a value to a variable, an equal sign `=` is used. The operation will
take that something on the `right` side of the equal sign `=` and put inside the
box on the `left`. Whenever you want to use the stored value, just call the
variable name.

`JS code:`
<script src="https://gist.github.com/codenart/d07b0efd36b06a29f95eab9690efd8d2.js">
</script>

You can both create a box and put something inside it at once as in the example
above. There's no different but I've broken the statement for easier explanation.
Let's manipulate the stored string.

`JS code:`
<script src="https://gist.github.com/codenart/1e8bc0361bfa04545427eef9c61c2389.js">
</script>

In the second statement, the equal sign `=` will take something on the right to
put into the new box on the left. But, that `something` is an expression and
your computer firstly need to perform a calculation the get the result.

The variable name on the right is called to take out the string `A cat`. A
concatenation is processed and the result is a new string `A cat and another cat`.
Then the result is put into the new box by the operator `=`.

You can put the result back into the old box instead of a new box. But, I prefer
creating a new one since variable name is very useful to note about the state of
the content after each manipulation. It makes your code more readable.

Well, that was a long read. Let's take a break. I'm gonna take a nap and dream
about
[my type](https://www.youtube.com/watch?v=W72LiPMNs9E&index=1&t=0s&list=PLsDw7WMCyjCoJcvMGQgm95c6KXzHvT_xS).
See you then.

`My type:`
<div class="embed">
   <iframe width="560" height="315"
           src="https://www.youtube.com/embed/W72LiPMNs9E"
           frameborder="0" allowfullscreen>
   </iframe>
</div>
