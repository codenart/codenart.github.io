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
first. I love `magic` and Atom has it:

- Open Atom.
- Choose `File` option from menu panel, then `New File`.
- Save file and give it a nice name as you want.
- In the editor, type `im` then press `Enter`.

`Screenshot:`
![atom editor](/images/html-2/atom.jpg)

That is Magic!  
We've just put there `2 letters` and Atom knows that we want to add an
[image](https://www.w3schools.com/tags/tag_img.asp) into the webpage. Now, we
only need to tell web browsers `where` to get the image:

- Copy/Paste this url
[https://s19.postimg.org/9zaosqzdf/trees.jpg](https://s19.postimg.org/9zaosqzdf/trees.jpg)
into the `src`.
- Save file again and open it using your web browser.

`Screenshot:`
![img tag](/images/html-2/trees.jpg)

> Image - credit to [Psyperl](https://github.com/psyperl)

We've used an image stored on [postimg.org](https://postimg.org/image/5dekkedu7/).
You can create a free account to upload and use your own image. After uploading
an image, just `right click` on the image and choose `Copy Image Location` then
paste into the `src`.

> Free is always good.  
> \_\_A <span id="simple">simple</span> & happy Mind

`Screenshot:`
![postimage.org](/images/html-2/postimage.jpg)

In case you don't want to store your image on another website, you can create a
folder named something like `images` and put all image-files there. In the
`src`, type `the folder's name` followed by a slash `/` and `image's filename`.

`Screenshot:`
![using an image stored locally](/images/html-2/relative.jpg)

In this example, web browsers will start at the folder contains the `HTML
document` and follow the `path` to look for the `image`.

Reference: [Supported Image-Formats](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#Supported_image_formats)

## Single HTML tags

You may notice that there are something `strange` in the previous example. We've
only seen HTML tags come in pairs. But the
[img tag](https://www.w3schools.com/tags/tag_img.asp) stands alone.

And yes. There are some HTML tags designed to stand alone. They're called
`single tags`. There's nothing special. It just means that none of them need a
`closing tag` to pair with.

Another example of single tags is [br](https://www.w3schools.com/tags/tag_br.asp),
this tag will insert a `line br`  
`eak` and commonly used in paragraphs when you want to write poetry.

> Code is Poet  
> ry.  
> \_\_quote by WordPress.org

Let's talk about the next `strange` thing, the
[HTML attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes).

## HTML attributes

[Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes) help
us to describe some related information about HTML tags as we've given a location
to tell web browsers about the image `source` using the
[src](https://www.w3schools.com/tags/att_img_src.asp) attribute.

The [alt](https://www.w3schools.com/tags/att_img_alt.asp) stands for `alternative`,
you can put there some words to describe the image in case your neighbor's web
browser cannot find the image (slow connection, image has been removed, your
website doesn't like him/her, etc...).

## How to add links into a webpage?

Yes! It's time for `magic` again:

- In the
[Atom](https://codenart.github.io/begin/#how-to-have-fun-doing-a-boring-task)
editor, the second line, type `a` then press `Enter`.
- I guess you'll see this pair `<a href="#"></a>` show up.
- Replace the hash `#` with this url
[https://en.wikipedia.org/wiki/List_of_oldest_trees](https://en.wikipedia.org/wiki/List_of_oldest_trees).
- Move the [img tag](https://www.w3schools.com/tags/tag_img.asp) into the
position between the [anchor tags](https://www.w3schools.com/tags/tag_a.asp).
- Save file and refresh your web browser.
- Click on the image
- Then read about the wisest masters of the world.

`Sample code:`
<script src="https://gist.github.com/codenart/52baa4b077a7d30928c7019fdf357a7e.js"></script>

Have you found some wise messages from them? Wanna be
<a style="color: #009900" href="https://www.youtube.com/watch?v=rRZ-IxZ46ng">green</a>?

Actually, we can use [anchor tags](https://www.w3schools.com/tags/tag_a.asp) to
wrap anything like text, images, a block of content include headings and
paragraphs, etc... to create a
[clickable area](https://www.youtube.com/watch?v=zsCD5XCu6CM) that link to
[somewhere](https://www.youtube.com/watch?v=zsCD5XCu6CM) (Linkin Park).

Oh, and now we know that HTML elements can be `nested`. We've just put an HTML
element inside another. It means that we're freely to compose our documents to
suite our needs.

## What if... ?

Do you wonder `what if` we want to create links between our webpages but not to
other websites?

It's ~~not~~ `easy`. (I'm sorry. There's a typo here. :D)  
Just do the same thing as we've done in examples about [img tag]((#simple)):

- Put all your webpages in the same place.
- In the [href](https://www.w3schools.com/tags/att_a_href.asp), just point to
which document you want to link to.

`Screenshot:`
![link to local webpage](/images/html-2/link.jpg)

Do you wonder `what if` we want to creates a link to move to a specific part of
the webpage like the [Start Reading ;](#display) button on the top of my website?

It's `not` not easy. (This is double negative in my English. Not a typo. :D)  
There is an HTML attribute called [id](https://www.w3schools.com/tags/att_id.asp).
You can use it to give any HTML element an `identity`, then use the
[id](https://www.w3schools.com/tags/att_id.asp) as an `url` (forwarded by a hash `#`).

`Sample code:`
<script src="https://gist.github.com/codenart/18129eafaa4f82931c6aa5fcee4ac443.js"></script>

Does it work? If it doesn't, so you need a longer text which can make your
website scrollable. (vertically)

Oooops. I've not noticed that our tutorial is too loooong now.  
It's time for [Music](https://www.youtube.com/watch?v=rRZ-IxZ46ng)!

<div class="video">
   <iframe width="560" height="315"
           src="https://www.youtube.com/embed/rRZ-IxZ46ng"
           frameborder="0" allowfullscreen>
   </iframe>
</div>

> "What if being green is not easy?"  
> "How about being blue or yellow instead?"  
> "But green is beautiful."  
> "Then why wonder?"  
> \_\_A simple & happy mind
