---
layout: post
style:
script:

category: html
featured:
permalink:

title: HTML container tags
short: Container Tags
description: In this tutorial, we're gonna talk about HTML container tags and their uses. <br>A container is something that contains something. <br>Is it a correct sentence? :D :D :D
keywords: web development, beginner, non-coder, kei nart, free, tutorial, coding, programming, code nart, html, container, basic, template, css, intro

date: 2017-07-27 05:15:00
---

> A container is something that contains something.  
> \_\_A simple and happy mind

So... everything in an HTML document is container.  
`<p></p>` may contains other elements like links and images.  
`<a></a>` can do the same thing.  

That's true. But in this tutorial we're gonna talk about `big big containers`
which do not describe specific content type like text or image. They are commonly
used to group other HTML elements into components like `navigation bar`, `main
content area`, `footer`, ...

And here are commons container tags that you can choose to manage your webpage:

1| `<nav></nav>` -- This container tags are used to group
[navigation links](https://www.w3schools.com/tags/tag_nav.asp "ext").  
You can have more than one navigation panel in your website as people commonly
use these tag for top navigation panel, side navigation panel or document index.

2| `<header></header>` -- This container tags are used to group introductory
content. (Big heading and introduction paragraph, logo, branding stuff...)

3| `<article></article>` -- Just an
[article](https://www.w3schools.com/tags/tag_article.asp "ext").  
People consider an article is a block of content which is independent from other
sections of a webpage. (blog post, facebook post, ...)

4| `<section></section>` -- A
[section](https://www.w3schools.com/tags/tag_section.asp "ext") is a block of
contents is does not fully contain a post.  
It is commonly used to create an entry which has a heading, an excerpt and a
`read more`.

5| `<main></main>` -- If our webpage is not a blog post and it contains a list
of category entries, then we should group up all entries using
[main tags](https://www.w3schools.com/tags/tag_main.asp "ext").

6| `<aside></aside>` -- I guess you have seen many webpages which have a small
column placed [aside](https://www.w3schools.com/tags/tag_aside.asp "ext") their
main content area. It can be a block of reference links or small widgets.

7| `<footer></footer>` -- A block of contents at
[bottom](https://www.w3schools.com/TAgs/tag_footer.asp "ext") of a webpage.  

8| `<div></div>` -- This container tags have no meaning to your webpage's
structure. But it's the most commonly used container. When you don't know
which container to use then simple
[division](https://www.w3schools.com/tags/tag_div.asp "ext") is the choice.

## HTML containers in action

Let's take an example that we're creating a simple webpage which has some
`navigation` links at top, some `sections` to introduce yourself, and a
`footer` contains copyright text.

We also assume that the `navigation` bar will have dark color background and
white text.  
The `sections` will have nice background images.  
And the `footer` will have dark color background and white text.  
So, our HTML document should look like this:

`Sample code:`
<script src="https://gist.github.com/codenart/d24a7671123cdc6105d2295150fa7e2f.js"></script>

`Result:`
![credit to Psyperl](/images/html-4/atree.jpg)
> Image - credit to [Psyperl](https://github.com/psyperl)

Does it work?  
No? :D  
I'm sorry. That was my bad. :D  
I've not told you something about container tags. They are simply used to group
other HTML elements and produce no effect on the output.

Let's add this line of code right before the `<nav>`, save file and refresh your
web browser again:

`<link rel="stylesheet" href="https://codenart.github.io/css/atree.css">`

How about this time? Do you see a magic? :D  
That is CSS!

## What is CSS? Why do we need it?

There are `some` important things that I would want to tell you at the beginning.
But my mind has been drawn by Music and ...

[HTML](https://developer.mozilla.org/en-US/docs/Web/HTML "ext") can only help
us to tell web browser `what` to display.  
To tell web browser `how` to display our contents aesthetically, we need some
help from [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS "ext").

As you've already known the most common HTML tags, this is a perfect time to
learn CSS. My HTML tutorials will be continued but I recommend you to use them
as references. You don't need to read them all at the time. Cause it's `boring`.
I promise. :D

Learning HTML is just that. Trying some HTML tags and refreshing web browsers.  
There's no more fun.

Learning CSS is different. We'll try some CSS code and refresh web browsers.  
And there will be more fun.

Oh wait... It seems that there is no difference in the CSS learning process.
It's still about typing something and refreshing web browser. And CSS is just
another simplified version of English. There must be another reason for learning
CSS...

[Beauty!](https://www.youtube.com/watch?v=wTeRQ16O798 "ext") It's beauty!
Creating beautiful stuff is our nature joy.  
So, let's do CSS: [Re-introduce CSS](https://codenart.github.io/beauty/ "int").

Wait! There's another important thing I've to tell you about HTML. Just give me
30 seconds more to finish this tutorial before we start our
[first CSS tutorial](https://codenart.github.io/beauty/ "int").

## The extreme containers

Yes. There are some special HTML containers that I've not told you in the first
section.  
Just do this:

- Create a new HTML document.
- Give Atom this new mantra: `ht`

`Poof!`
<script src="https://gist.github.com/codenart/862e4da903b23cd62d38aee05726889a.js"></script>

This is the basic HTML template and it is a standard for any HTML document.  

Our previous examples have worked well because all the modern web browsers have
a smart feature which automatically apply this template and put all of our
contents inside the
[body](https://www.w3schools.com/tags/tag_body.asp "ext") container.

The [head](https://www.w3schools.com/tags/tag_head.asp "ext") container is used
to group some HTML elements that provide related information about our webpage
to search engines (Google, Bing, ...). Those elements will not be display on our
webpages but they silently benefit your website.

The `<link>` element which we used in the previous section, is normally placed
inside the `<head>` container.

As you see that there is a `<meta>` tag. This element will allow us to used
[Unicode](https://en.wikipedia.org/wiki/Unicode "ext") characters in our HTML
document.

The `<html>` container is the root container of the document. Something like a
`<div>`. It's just that.

And `<!DOCTYPE html>` is not an element, it tell web browsers that `this
document is an HTML document`. You don't need to know details about this tag
because we only need it to stay `there`. Its story is about history of
[Markup Languages](https://en.wikipedia.org/wiki/Markup_language "ext"). It's better
to just leave the history at top of our HTML documents.

Our tutorial about HTML containers has finished! It's time for ~~css~~
[Music](https://www.youtube.com/watch?v=n-BXNXvTvV4 "ext")!

<div class="embed">
   <iframe width="560" height="315"
           src="https://www.youtube.com/embed/wTeRQ16O798?ecver=1"
           frameborder="0" allowfullscreen>
   </iframe>
</div>

> Mother Earth is so generous. If only we give her the chance, she will restore
> everything in absolute abundance and beauty.  
> \_\_Sadhguru Wisdom

[Start learing CSS here!](https://codenart.github.io/beauty/ "int").
