---
layout: post
style:
script:

category: javascript
featured:
permalink:

title: Why is function blissful?
short: Function & Scope
description: In this tutorial, we're gonna talk about a new type (Function) and a related concept (Scope). <br>Function is the most blissful type in almost any programming language. <br>Yes, I really mean to say - Function is "blissful". :D
keywords: web development, beginner, non-coder, kei nart, free, tutorial, coding, programming, code nart, javascript, function, scope, type

date: 2017-08-28 05:10:00
---

That word, `function`, is actually a typing mistake made by one of the first
programmers of the world. The original name of this type was `action` before the
mistake has occurred in documentation and spread over the earth. Somewhere down
the line, people started thinking the type is somewhat related to mathematics
and use it the mathematical way. Let's scroll up the calendar a bit and talk
about it in term of `action`. :D

If you practice some Zen living approaches, then you will know that any `simple`
action in our daily life can bring about blissful experience. Deeply influenced
by Zen living style, the first programmers of the world decided to bring the idea
into programming. The core concept is to allow people to divide a complex task
into simple actions. This is sure good, isn't it? Because we all know that a
complex task rarely brings about blissfulness. :D

## Using function in JavaScript

So, to define an action in JavaScript, the mistaken `keyword` is used. :D

`JS code:`
<script src="https://gist.github.com/codenart/cd6cc17aa35f74545b1ea9b50ea8b761.js">
</script>

All the statements which are put inside the couple of curly braces `{}` will not
be executed until the action is invoked.

`JS code:`
<script src="https://gist.github.com/codenart/ba02a7de4d0916af86a61db2cb4c94cb.js">
</script>

Do you remember the parentheses `()` which were mentioned in our
[first tutorial](https://codenart.github.io/smart/#the-baby-first-javascript-statements "ext")?
This is it! The `log` itself is an action, too. The only difference here is that
we've not put anything between the parentheses `()` when we invoke the `drink`.

## Invoking action with matter

Yes, just try and see what will happen. We're gonna invoke the action `drink` 2
times with various drinks.

`JS code:`
<script src="https://gist.github.com/codenart/4e94cd16ae793409fec1e0ef283a90a8.js">
</script>

What do you see in your console window? It's still taking `tea`, right? :D  
It is because the action definition does not take advantage of the provided
drinks. Let's change the definition a bit.

`JS code:`
<script src="https://gist.github.com/codenart/d84b97780efd98c56f408bea72b1aa23.js">
</script>

How about this time? Does it work? :D  
By declaring a variable named `liquid` between the parentheses `()` of the
definition, we've made the action more flexible and saved a lot of time writing
repetitive code. Just imagine if we had to write new action definition for every
new kind of drinks. Wew...

We can also have more than one variable between the parentheses `()` by
separating variables using commas `,` and give the action more details by
invoking it with values separated by commas `,` as well.

`JS code:`
<script src="https://gist.github.com/codenart/0fe0189e35e7d77df732423c5b6a02a4.js">
</script>

Those variables which are placed between the parentheses `()` are often called
`parameters`, another word borrowed from mathematics. Anyway, we'll keep calling
them variables because they are just `variables`. :D

## Just a little from mathematics

So, just a silly typing mistake and the whole world is referring to mathematics
wherever this type is mentioned. It really scares away many creative people when
they start thinking about coding. But, by borrowing ideas from mathematics, the
type also acquires a tremendous beauty if we don't take it so serious.

Back to the core concept of `function`, it allows us to divide a complex task
into simple actions. So, calculating is also considered as an action and
sometimes we would want to do something like this.

`JS code:`
<script src="https://gist.github.com/codenart/af6a65557f1b9cf5d7f85ab473969110.js">
</script>

The main task looks so clean and it's easy to guess what the code does because
we've moved away all the details by using functions: The first function
invocation `yielded something` and the result was stored in the variable
`content`. The second invocation also `yielded something` and the result was
stored in the variable `excerpt`.

Yes, a function invocation can `yield something`. And this idea is borrowed from
mathematics. To make a function able to yield, a statement is used to `return`
a value at the end of the function definition.

`JS code:`
<script src="https://gist.github.com/codenart/d263325733a166cbf9034ba69a74b25d.js">
</script>

And it's just about the keyword `return`. No more mathematics stuff gets involved
here. There's only one more little thing about the `return` statement that we
should take note: Once the statement is reached, the function execution will be
ended and all the statements afterward will be ignored.

`JS code:`
<script src="https://gist.github.com/codenart/1d640b60b07e62d9b1d269bce5400358.js">
</script>

## Function is a type

This section is just for reminding the most basic use of function as a type
before we go to take the concept of Scope.

Since function is a type, it means that we can consider a function as a value.
Instead of defining a function with a name, we can store a `no-name` function in
a variable like this.

`JS code:`
<script src="https://gist.github.com/codenart/793360f7dd9dfc11cd67eedf54b9bc3e.js">
</script>

We can also pass a function as a value when we're invoking another function.

`JS code:`
<script src="https://gist.github.com/codenart/703df2b4520cffbf33469c7ecc025fc7.js">
</script>

By using function this way, the function `whisper` can yield more than 1 value
when it is invoked. In many situations, this is more convenient than using a
`return` statement.

## The concept of Scope

The main part of the tutorial has finished. Here is just a simple concept related
to `function` and `variable`. We're gonna move through it quickly. Let's check
the following code snippet.

`JS code:`
<script src="https://gist.github.com/codenart/24082265f1fe6007c3594d67e7f8bc0d.js">
</script>

We've created a variable inside the function `just` and tried to refer to it from
outside; The computer cannot find the variable so it says the variable `box` is
`undefined`. In other words, the variable's scope is protected by the function
`just` and it is only visible inside the function.

The second note about the concept of `Scope` is that a function will always
prefer to use its inner variables.

`JS code:`
<script src="https://gist.github.com/codenart/e6fb3d20885bc689f6dff7704a27daaf.js">
</script>

Yet, it doesn't mean that the outer variable is not visible to the function. In
case there's no inner variable which has the same name as the outer one, the
function will refer to the outer variable.

`JS code:`
<script src="https://gist.github.com/codenart/e183bd7100dff450cbe84f251525bb08.js">
</script>

And that was all about the concept of `Scope`. So, we've known quite enough about
fundamental stuff. Just one more tutorial and we will start manipulating the HTML
document. Let’s take a break before heading to our next tutorial.

`Whispering:`
<div class="embed">
   <iframe src="https://bit.ly/2LCa9QY"
           width="100%" height="450"
           scrolling="no" frameborder="no">
   </iframe>
</div>
