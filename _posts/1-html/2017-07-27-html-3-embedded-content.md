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
keywords: web development, beginner, non-coder, kei nart, free, tutorial, coding, programming, code nart, html, embedded, content, video, audio, music, image

date: 2017-07-27 05:15:00
---

This time we're gonna use
[video](https://www.w3schools.com/tags/tag_video.asp "ext") files stored locally first:

- Put your video file in the same folder with the HTML document or in a sub-folder.
- Ask Atom to perform this 2-letters mantra: `vi`.
- You will see something show up: `<video src="" autoplay poster=""></video>`.
- Using [src](https://www.w3schools.com/tags/att_video_src.asp "ext") to point
to your video file.
- Replace `poster=""` with
[controls](https://www.w3schools.com/tags/att_video_controls.asp "ext").
- That's it.

`Screenshot:`
![embed a video stored locally in webpage](/images/html/3/vibe.jpg)

You can also upload your video to
[Youtube](https://www.youtube.com/watch?v=eNzenkoeJcY "ext") then embed back in
your website. Most of the websites which allow us to upload and share media
files, have a `share button` with an `embed option`. You only need to copy the
provided HTML code and paste it into your HTML document.

`Screenshot:`
![using video from Youtube](/images/html/3/youtube.jpg)

`Sample code:`
<script src="https://gist.github.com/codenart/1f99616711e453377866fbadd7cb15a7.js">
</script>

`Result:`
<div class="embed">
   <iframe width="560" height="315"
           src="https://www.youtube.com/embed/eNzenkoeJcY?ecver=1"
           frameborder="0" allowfullscreen>
   </iframe>
</div>

About the `iframe tag`, we're gonna talk about it in the next section.

Reference:
[Supported Video-Formats](https://developer.mozilla.org/en-US/docs/Web/HTML/Supported_media_formats "ext")

## The iframe tag

The [iframe tag](https://www.w3schools.com/TAgs/tag_iframe.asp "ext") is allows
us to embed `a webpage` in another webpage.

`Sample code:`
<script src="https://gist.github.com/codenart/92dfea3c2e8e70ec6c739c399be96e62.js">
</script>

The [width](https://www.w3schools.com/tags/att_iframe_width.asp "ext")
and [height](https://www.w3schools.com/tags/att_iframe_height.asp "ext")
attributes are used to specify size (in pixel) of the inner window which is the
container of embedded content.

## How to add audios into a webpage?

Adding audios into a webpage is just similar to adding videos. We're gonna make
another mantra and send to Atom:

- Ooommm... Atom, the new mantra is `au`.
- Poof! `<audio src=""></audio>`.
- Now we need to add a file path to the
[src](https://www.w3schools.com/tags/att_audio_src.asp "ext").
- We also need to add
[autoplay](https://www.w3schools.com/tags/att_audio_autoplay.asp "ext") and
[controls](https://www.w3schools.com/tags/att_audio_controls.asp "ext") attributes.

As you get more skilled in doing magic with Atom, I'll just show sample code
from now on. :D

`Screenshot:`
![embed audio file stored locally in a webpage](/images/html/3/blue.jpg)

And there's also a free solution for audio upload if you don't want to store
your audio files locally:
[SoundCloud](https://soundcloud.com/azliel/dj-okawari-bluebird-story-ft "ext").

`Screenshot:`
![using audio from soundcloud.com](/images/html/3/soundcloud.jpg)

`Sample code:`
<script src="https://gist.github.com/codenart/23e5f6b69214cb08bb8ba9f0701e4a46.js">
</script>

`Result:`
<div class="embed">
   <iframe src="https://goo.gl/aVu5AP"
           width="100%" height="450"
           scrolling="no" frameborder="no">
   </iframe>
</div>

Waaaa... I've not noticed that this article is full of music now. :D  
I'm sorry if those stuff distracted you. :D

After 3 tutorials, now we've already known how to add basic content-types into
webpages. The next important thing is grouping related contents into parts
(navigation bar, main content, footer, ...) and make them look aesthetic.
