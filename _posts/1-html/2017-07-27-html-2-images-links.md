---
layout: post
style:
script:

category: html
featured:
permalink:

title: How to add images into a webpage?
short: Images & Links
description: I've missed something in the first tutorial. So they're flying over here. <br>Adding images into your webpage, creating links. <br>And... see Atom in Action.
keywords: web development, beginner, non-coder, kei nart, free, tutorial, coding, programming, code nart, html, image, link

date: 2017-07-27 05:05:00
---

[Atom](https://codenart.github.io/begin/#how-to-have-fun-doing-a-boring-task)
first. I love `magic` and
[Atom](https://codenart.github.io/begin/#how-to-have-fun-doing-a-boring-task)
has it:

- Open [Atom](https://codenart.github.io/begin/#how-to-have-fun-doing-a-boring-task).
- Choose `File` option from menu panel, then `New File`.
- Save file and give it a nice name as you want.
- In the editor, type `im` then press `Enter`.

![](/images/atom.jpg)

That is `magic`. We've just put there `2 letters` and Atom knows that we want
to add an `image` into the webpage. Now, we only need to tell web browsers
[where](http://i.imgur.com/hg167Vq.jpg) to get the `image`:

- Copy/Paste this url [http://i.imgur.com/hg167Vq.jpg](http://i.imgur.com/hg167Vq.jpg)
into the `src`.
- Save file again and open it using your web browser.

![credit to Psyperl](/images/trees.jpg)

> Image - credit to [Psyperl](https://github.com/psyperl)

## Single HTML tags and attributes

You may notice that there are something strange in the previous example. We've
only seen [HTML tags](https://developer.mozilla.org/en/docs/Web/HTML/Element)
come in pairs. But the `<img> tag` stands alone.

And yes. There are some [HTML tags](https://developer.mozilla.org/en/docs/Web/HTML/Element)
designed to stand alone. They're called `single tags`. There's nothing special.
It just means none of them need a `closing tag` to pair with. So let's move to
the next strange thing, the [attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes).

[Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes) help
us to describe some related information to
[HTML tags](https://developer.mozilla.org/en/docs/Web/HTML/Element) as we've
given a location to tell web browsers the image `source` using the `src`
attribute.

The `alt` stands for `alternative`, you can put there some words to describe the
image in case your neighbor's web browser cannot load the image (slow connection,
image has been removed, ...).

## How to create links to other webpages?

Yes! It's time for `magic` again:

- In the
[Atom](https://codenart.github.io/begin/#how-to-have-fun-doing-a-boring-task)
editor, the second line, type `a` then press `Enter`.
- I guess you'll see this pair `<a href="#"></a>` show up.
- Replace the hash `#` with this this url
[https://en.wikipedia.org/wiki/List_of_oldest_trees](https://en.wikipedia.org/wiki/List_of_oldest_trees).
- Move the `<img> tag` into the position between the `anchor tags`.
- Save file and refresh your web browser.
- Click on the image
- Then read about the wisest masters of the world.

<script src="https://gist.github.com/codenart/52baa4b077a7d30928c7019fdf357a7e.js"></script>

Have you found some wise messages from them? Wanna be
<a style="color: #009900" href="https://www.youtube.com/watch?v=rRZ-IxZ46ng">green</a>?

Actually, we can use `anchor tags` to wrap anything like text, images, ... to
create a [clickable area](https://www.youtube.com/watch?v=zsCD5XCu6CM) and link to
[somewhere](https://www.youtube.com/watch?v=zsCD5XCu6CM) (Linkin Park).

Oh, and now we know that
[HTML elements](https://developer.mozilla.org/en/docs/Web/HTML/Element) can be
`nested`. We've just put an HTML element inside others. It means we're freely to
compose our document to suite our needs.

## What if... ?

Do you wonder what if we need to use images stored locally but not from other websites?  
Or what if we want to create links between our webpages but not to other websites?  
Or even what if we want to create links to move between parts of the same page?

Those stuff are a little bit tricky so we're gonna make a
[single tutorial]((https://codenart.github.io{{ page.next.url }})) for them. Agree?

Wait! Don't click on the link. It's time for
[music](https://www.youtube.com/watch?v=rRZ-IxZ46ng):

<div class="video">
   <iframe width="560" height="315"
           src="https://www.youtube.com/embed/rRZ-IxZ46ng"
           frameborder="0" allowfullscreen>
   </iframe>
</div>

> "What if being green is not easy?"  
> "How about being blue or yellow instead?"  
> __A simple & happy mind
