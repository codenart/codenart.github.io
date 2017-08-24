---
layout: post
style:
script:

category: html
featured:
permalink:

title: How to add videos into a webpage?
short: Embedded Content
description: Embedded content is content that imports another file into the HTML document. <br>We have embedded an image into an HTML document. <br>Let's do it a few times again.
keywords: web development, beginner, non-coder, kei nart, free, tutorial, coding, programming, code nart, html, css, intro, beautiful, website

date: 2017-07-27 05:15:00
---

This time we're gonna use video stored locally first:

- Put your video file in the same folder with the HTML document or in a sub-folder.
- Ask Atom to perform this 2-letters mantra: `vi`.
- You will see `<video src="" autoplay poster=""></video>` show up.
- Using [src](https://www.w3schools.com/tags/att_video_src.asp) to point to your
video file.
- Replace `poster=""` with
[controls](https://www.w3schools.com/tags/att_video_controls.asp).
- That's it.

`Screenshot:`
![embed a video stored locally in webpage](/images/html-3/vibe.jpg)

But!  
Video files are <b style="position: relative; top: 6px; font-size: 1.2rem">weight</b>.
So I prefer an online solution:
[Youtube](https://www.youtube.com/watch?v=eNzenkoeJcY) is free.

> Free is Life.  
> \_\_A simple & happy mind

You can upload your video to [Youtube](https://www.youtube.com/watch?v=eNzenkoeJcY)
then embed back in your website. Most of the websites which allow us to upload
and share media files, have a `share button` with an `embed option`. You only
need to copy the provided HTML code and paste it into your HTML document.

`Screenshot:`
![using video from Youtube](/images/html-3/youtube.jpg)

`Sample code:`
<script src="https://gist.github.com/codenart/1f99616711e453377866fbadd7cb15a7.js"></script>

About the `iframe tag`, we're gonna talk about it in the next section.

Reference: [Supported Video-Formats](https://developer.mozilla.org/en-US/docs/Web/HTML/Supported_media_formats)

## Adding a webpage into a webpage

HTML allows us to embed `a webpage` in a another webpage using
[iframe tag](https://www.w3schools.com/TAgs/tag_iframe.asp).

`Sample code:`
<script src="https://gist.github.com/codenart/92dfea3c2e8e70ec6c739c399be96e62.js"></script>

The [width](https://www.w3schools.com/tags/att_iframe_width.asp)
and [height](https://www.w3schools.com/tags/att_iframe_height.asp)
attributes are used to specify size (in pixel) of the inner window which is the
container of embedded content.

## How to add audios into a webpage?

We're gonna make another invocation:

- Ooommm... Atom, the new mantra is `au`.
- Poof! `<audio src=""></audio>`.
- Now we need to add a file path to the
[src](https://www.w3schools.com/tags/att_audio_src.asp).
- We also need [autoplay](https://www.w3schools.com/tags/att_audio_autoplay.asp)
and [controls](https://www.w3schools.com/tags/att_audio_controls.asp).

As you get more skilled in doing magic with Atom, I'll just show sample code
form now on. :D

`Screenshot:`
![embed audio file stored locally in a webpage](/images/html-3/blue.jpg)

And there's also a free solution for audio upload if you don't want to store
your audio files locally:
[SoundCloud](https://soundcloud.com/azliel/dj-okawari-bluebird-story-ft)

`Screenshot:`
![using audio from soundcloud.com](/images/html-3/soundcloud.jpg)

`Sample code:`
<script src="https://gist.github.com/codenart/23e5f6b69214cb08bb8ba9f0701e4a46.js"></script>

Waaaa... I've not noticed that this article is full of music now. :D  
I'm sorry if those stuff distracted you from learning process. :D

After 3 tutorials, now we've already know how to add common content-types into
webpages. The next important thing is grouping related content into parts
(navigation bar, main content, ...) and make them look aesthetic.
