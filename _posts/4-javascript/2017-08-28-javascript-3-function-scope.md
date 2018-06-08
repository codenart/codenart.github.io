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
the line, people started thinking that the type is somewhat related to mathematics
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

Do you remember the parentheses `()` which are mentioned in our
[first tutorial](https://codenart.github.io/smart/#the-baby-first-javascript-statements)?
This is it! The `log` itself is an action, too. The only difference in the `drink`
is that we've not put anything between its parentheses `()` when we invoke it.
Let's talk more about this point.

## Invoking action with matter

Yeah, just try and see what will happen. We're gonna invoke the action `drink`
2 times with various drinks.

`JS code:`
<script src="https://gist.github.com/codenart/4e94cd16ae793409fec1e0ef283a90a8.js">
</script>

What do you see in your console window? It's still taking `tea`, right? :D  
It is because the action definition does not take advantage of the provided drinks.
Let's change the definition a bit.

`JS code:`
<script src="https://gist.github.com/codenart/d84b97780efd98c56f408bea72b1aa23.js">
</script>

How about this time? Does it work? :D  
By declaring a variable named `liquid` inside the parentheses `()` of the definition,
we've made the action more flexible and saved a lot of time writing repetitive
code. Just imagine if we had to write new action definition for every new kind
of drinks. Wew...

We can also have more than one variable inside the parentheses `()` of the
definition by separating variables using commas `,` and give the action more
details by invoking it with values separated by commas `,` as well.

`JS code:`
<script src="https://gist.github.com/codenart/0fe0189e35e7d77df732423c5b6a02a4.js">
</script>

Those variables which are placed inside the parentheses `()` are often called
`parameters`, another word borrowed from mathematics. Anyway, we'll keep calling
them variables because they are just `variables`. :D

## Just a little from mathematics

So, just a silly typing mistake and the whole world is referring to mathematics
wherever this type is mentioned. It really scares away many creative people when
they start thinking about coding. But, by borrowing ideas from mathematics, the
type also acquires a tremendous beauty if we don't make it so serious.

Back to the core concept of `function`, I mean `action`, it allows us to divide
a complex task into simple actions. So, calculating is also considered as an
action. Sometimes, we would want to do something like this.

`JS code:`
<script src="https://gist.github.com/codenart/af6a65557f1b9cf5d7f85ab473969110.js">
</script>

The main task look so clean and it's easy to guess what does the code do because
we've moving away all the details using functions. This is possible because we
can receive a value at the place a function is invoked. To do so, a statement is
used to `return` a value at the end of the function definition.

`JS code:`
<script src="https://gist.github.com/codenart/d263325733a166cbf9034ba69a74b25d.js">
</script>

So, it's just about the keyword `return`. There's no more mathematics stuff get
involved here. We can just take note of this: a function can return a value when
being invoked.

Ah.. There's one more little thing about the `return` statement, once the statement
is reached the function execution will be ended and all the statements afterward
will be ignored.

`JS code:`
<script src="https://gist.github.com/codenart/1d640b60b07e62d9b1d269bce5400358.js">
</script>

## Function is a type

## The concept of Scope
