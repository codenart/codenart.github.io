---
layout: post
style:
script:

category: javascript
featured:
permalink:

title: What is Type?
short: Type & Variable
description: In this tutorial, we're gonna talk about two basic concepts in programming (Type & Variable); <br>And have a gentle introduction to the most two common Types. <br>Let's get started with the concept of Type.
keywords: web development, beginner, non-coder, kei nart, free, tutorial, coding, programming, code nart, javascript, type, number, string, variable

date: 2017-08-28 05:05:00
---

> Data type is a concept of classifying data for using in a program.  
> \_\_An academic & unhappy Mind

Well, actually, I'm not a fan of using academic words to describe things; Because
those words make everything look ugly. Let's ignore the ugly sentence above.
We're gonna find another way to grasp it. :D

## Let's play around with numbers

Do you love calculators?

![a calculator](/images/javascript/2/calculator.jpg)

We all know that calculators are great at dealing with numbers. You simply need
to push some buttons and the result will be there within a blink. Your computer
is even more superior than a calculator thousands times. Let's ask it to perform
an addition and print the result to your web browser's
[console](https://codenart.github.io/smart/#the-baby-first-javascript-statements "ext")
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

Yet, JavaScript provides a lot more efficient tools to work with numbers; But
we're gonna keep things simple now and save those tools for later tutorials.
Let's do something else.

## Get a string

![a string](/images/javascript/2/string.jpg)

Since numbers are not everything, there are other needs that people deserve from
daily computing. In daily life, most of us use `words` more frequently than
numbers. So, when we create a software solution to automate a task, it's 99
percent sure that we have to deal with text contents as well.

Now you see, there's a need to represent text contents in code and make your
computer treat them differently than `numbers`. This is where the concept of
Type gets in. We have the first basic type: `number`; And the next one is called
`string` which is used to represent text contents. In JavaScript, a string is
enclosed using single quotes `'` or double quotes `"`.

`JS code:`
<script src="https://gist.github.com/codenart/04c89eaaa262adcdefbb5e21bdcf5721.js">
</script>

You can place a plus sign `+` between two strings to concatenate them. Since
we're working with strings (not numbers), your computer will consider the plus
sign `+` as a concatenation operator instead of an addition operator.

`JS code:`
<script src="https://gist.github.com/codenart/091d76fcb44a1541f31d36b575217ed4.js">
</script>

There are also many other tools in JavaScript which allow us to manipulate
strings efficiently. But, we're not gonna bring them all here since our main
purpose in this tutorial is just getting to know the concept of Type; And we also
have another important concept to care about. Let's talk a little more about Type
in JavaScript before taking the concept of Variable.

## Automatic type conversion

Coding in JavaScript is just playful as cooking. Sometimes we can make a dish
taste salty by using cinnamon instead of salt. It is possible not because those
two are the same; But because they have quite the same meaning to the dish. And
the same possibility happens with JavaScript's types. Sometimes we can use `that
type` instead of `this type` in an expression which requires `this type`. :D

`JS code:`
<script src="https://gist.github.com/codenart/22ab375e9ab434ad549ec21ee64cd1f6.js">
</script>

In the example above, what we expect is a string concatenation; But, we've put
there a number and... it just works. This is a smart feature of JavaScript which
automatically converts the number to a string before the concatenation is
processed and helps us to simplify our work.

Generally, in many other programming languages, type conversion must be done
explicitly by writing extra lines of code. JavaScript also provides methods which
serve explicit type conversion and we're gonna talk about those tools in later
tutorials.

> JavaScript is out smart other programming languages.  
> \_\_A simple & happy Mind

## The concept of Variable

Let's assume that you are building your personal blog. Your blog's homepage will
contain some entries to the 10 latest posts. Each entry will contain an excerpt
made from a post's content. You decide to fully load the contents of articles to
the entry components then write some JavaScript code to trim those contents to
300 characters of each excerpt. So, here are steps needed to be done in order to
create an excerpt:

- Extract content of an entry from HTML document.
- Trim it down to 300 characters length.
- Append three dots `...` at the end of the trimmed content.
- Put the excerpt back to HTML document.

Since the string manipulation takes multiple steps to reach the final result,
there's a need to `temporarily store the content somewhere` to manipulate it step
by step until it reaches the final form. We need a Variable!

`JS code:`
<script src="https://gist.github.com/codenart/0d154adf692c8117c4bf933ac76176b5.js">
</script>

A variable in JavaScript is declared using the keyword `var` followed by a name.
To assign a value to a variable, an equal sign `=` is used. The operation will
take that `something` on the `right` side of the equal sign `=` and put inside
the box on the `left`. Whenever you want to use the stored value, just call the
variable name.

`JS code:`
<script src="https://gist.github.com/codenart/d07b0efd36b06a29f95eab9690efd8d2.js">
</script>

![a cat in a box](/images/javascript/2/cat.jpg)

You can both create a box and put something inside it at once as in the example
above. There's no difference. For the first example, I've broken the statement
just for better explanation. :D

> A variable is simply a box that you can put anything inside.  
> \_\_A simple & happy Mind

Ok. Let's create another box and perform a simple manipulation.

`JS code:`
<script src="https://gist.github.com/codenart/1e8bc0361bfa04545427eef9c61c2389.js">
</script>
![two cats in a box](/images/javascript/2/cats.jpg)

In the second statement, the assignment operator `=` will take something on the
right to put into the new box on the left. But, that `something` is an expression
and your computer firstly needs to perform a calculation to get the result: The
variable `box` is called to take out the string `'A cat'`; A concatenation is
processed and the result is a new string `'A cat and another cat'`.

You can also put the result back into the old box instead of a new box. But, I
prefer creating a new one since variable name is very useful to describe the
state of the stored content after each manipulation and it gives your code more
clarity.

About naming variables, we're freely to use other beautiful names for those boxes
but there're also some rules that we should take notes:

- A variable name can contain letters, digits, underscore `_`, and dollar sign
`$`.
- It must not begin with a number.
- Variable name is case sensitive. `box` and `Box` are two different variables.
- It cannot be any of reserved keywords. See list here:
[JavaScript reserved keywords](https://www.w3schools.com/js/js_reserved.asp "ext")

## Undefined variables and the value `null`

The main part of the tutorial has finished. This section is just for taking note
some little tiny things before heading to our the next tutorial.

If a variable is not assigned with any value, it is considered as an `undefined`
variable. Or we can say that the variable does not exist.

`JS code:`
<script src="https://gist.github.com/codenart/c6c8e4bc124062758dfc8b5b9cb7bc92.js">
</script>

If we want to make a variable exist as an empty box, we can assign the value
`null` to the variable. This value is considered as a worthless value.

`JS code:`
<script src="https://gist.github.com/codenart/0a87451d4cd285297e73e5d371b9b808.js">
</script>

Ok. We've known the first two basic programming concepts and some related common
stuff. Let's take a break then move on. :D
