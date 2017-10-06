---
layout: post
style:
script:

category: html
featured:
permalink:

title: The most basic inputs
short: Inputs & Forms
description: In this tutorial, we're gonna talk about basics of Inputs and Forms. <br>They're used to create login-field, search-box, etc... <br>Let's start with some text-fields.
keywords: web development, beginner, non-coder, kei nart, free, tutorial, coding, programming, code nart, html, input, form, button

date: 2017-07-27 05:30:00
---

The most basic type of inputs which is seen in almost every website, is `text-field`.
A text-field is a small box that visitors can put there a single line of text.

`Sample text-fields:`

Normal text field:  
<input type="text" placeholder="You can type here..."
       style="padding: 5px 15px; margin: 5px 0 8px;">  
Password text field:  
<input type="password" placeholder="Password will be covered."
       style="padding: 5px 15px; margin: 5px 0 8px;">

Text-fields can be created using [input tags](https://www.w3schools.com/TagS/tag_input.asp "ext").

`Sample code:`
<script src="https://gist.github.com/codenart/a919acbeb34e84eb8a7cc86a8b078043.js">
</script>

References: [type attribute](https://www.w3schools.com/tags/att_input_type.asp "ext")

## The `<form>` container

In order to submit collected information of inputs to a server (register, login,
messaging, etc...), the inputs must be wrapped in a `<form> container` which has
a `submit button`.

`Sample code:`
<script src="https://gist.github.com/codenart/e8bdfe4555c15b244942a0441ca11aa5.js">
</script>

`Result:`

<form style="display: inline-block; padding: 15px;
             margin-bottom: 30px; border: 1px solid #000;">
   Your Name:<br>
   <input type="text" name="nickname"
          style="padding: 5px 15px; margin: 5px 0 8px;"><br>
   Message:<br>
   <input type="text" name="message"
          style="padding: 5px 15px; margin: 5px 0 13px;"><br>
   <button type="submit" style="padding: 5px 25px;">Send</button>
   <button type="reset" style="padding: 5px 25px">Reset</button>
</form>

(The border is made using CSS.)

When inputs are used in a form for collecting and submitting information, every
inputs must have a `name` specified using
[name attribute](https://www.w3schools.com/tags/att_name.asp). This is a
convention for working with collected information at server-side.

The `reset button` is optional. It is used for resetting all inputs of the form.

## Secure method for submitting data

By default, when a form is submitted, collected information will be displayed
right on browser's address bar.

`Screenshot:`
![submitted](/images/html/7/submitted.jpg)

This is just OK with non-sensitive information like search keywords. But! In
case the collected information is sensitive like login info, we need to use form's
[method attribute](https://www.w3schools.com/tags/att_form_method.asp "ext") to
keep the information secured.

The [method attribute](https://www.w3schools.com/tags/att_form_method.asp "ext")
can be used with 1 of these 2 values: `get`, `post`.

The `method="get"` is implicitly used by default. The `method="post"` is the one
that can help us to prevent sensitive information form being displayed on web
browser's address bar.

`Sample code:`
<script src="https://gist.github.com/codenart/aef5aba5957501d760b7347ff4d2e18d.js">
</script>
