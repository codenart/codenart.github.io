---
layout: post
style:
script:

category: css
featured:
permalink:

title: Using media query syntax
short: Media Query
description: In this tutorial, we'll learn about media query syntax which allows us to create responsive websites. <br>In fact, the syntax is used to target specific devices and screen sizes. <br>Let's talk about this amazing tool.
keywords: web development, beginner, non-coder, kei nart, free, tutorial, coding, programming, code nart, html, css, @media, media query, responsive

date: 2017-08-24 06:00:00
---

So, you are on Earth planet and someone has told you that you can write CSS code
target to specific screen sizes. It's true. Let's take a look at the following
example. If you resize your web browser window to make its width smaller than
`600px`, the background will be `red`. Otherwise, the background will be `yellow`.

`CSS code:`
<script src="https://gist.github.com/codenart/37d35f1579a85be21a263a26758b825c.js">
</script>

`HTML code:`
<script src="https://gist.github.com/codenart/945f19d09b2c26472e08e4ca080accea.js">
</script>

`Result:`

[Click here to see result](https://codepen.io/codenart/full/VMoGNp/ "ext")

As you noticed, there are 2 media query blocks which wrap some normal stuff
inside. I call them conditional styles. Because the CSS code inside a media
query block is inactive unless a certain condition is satisfied.

In the example, the condition of the first media query is: viewport's width is
not larger than `599px`. The second media query's condition is: viewport's width
is greater than or equals to `600px`.

## More about media query conditions

Besides, creating constrains based on viewport's dimensions. We also have other
choices:

- Media type: `screen`, `print`, `speech`, `all`
- Viewport's orientation: `portrait` or `landscape`

Let's say if you're publishing your book's content on your website as blog posts
(not in pdf form). You may want to help your audiences to print only main contents
of the webpages if they want. So, you can create specific styles target printers
to hide all ads and navigation bars. We also assume that the contents will be
printed in portrait mode:

`CSS code:`
<script src="https://gist.github.com/codenart/d89cbac3a1238b395b527d233b894694.js">
</script>

## Make your navigation bar responsive

As we've planned. Let's create a real navigation bar which is responsive and
toggleable on mobile devices. To keep this post simple and purely focus on
introducing media query syntax, I have to move this section to a single article.
So, please keep this tab open and click on the link below to go to the article:

Tutorial: [Creating a responsive navigation bar](https://codenart.github.io/sample/2017/09/03/sample-2-responsive-navbar.html "ext")

Have you finished the tutorial and successfully created a responsive navigation
bar? :D  
Found some joyful moment? :D

I know that was a tough job. Just a simple responsive navigation bar and it takes
us ~100 lines of CSS code. What if I tell you that you don't have to write that
much CSS code to achieve the same result (or even better)? :D.

See you in the next tutorial.
