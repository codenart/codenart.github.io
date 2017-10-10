---
layout: post
style:
script:

category: html
featured:
permalink:

title: Other common Input types
short: Other Inputs
description: In the previous tutorial, we've talked about Form and the most basic Inputs. <br>HTML supports various type of Inputs to make life better. :D <br>Let's talk more about Inputs and their uses.
keywords: web development, beginner, non-coder, kei nart, free, tutorial, coding, programming, code nart, html, input, form

date: 2017-07-27 05:35:00
---

There are 3 groups of common input types:

1. Text-field & Text-area
2. Radio-button & Check-box & Dropdown-list
3. File-browser & Others :D

## 1. Text-field & Text-area

Yes, we've seen text-fields in the previous tutorial.

A text-area is nothing but a text-field expanded to multiple lines. To create
a text-area, we use `<textarea> tags` instead of `<input> tags`.

`Sample code:`
<script src="https://gist.github.com/codenart/7992c7f17cb96977b2aa18d51fa69bcc.js">
</script>

`Result:`

<form method="post" style="display: inline-block; padding: 15px 15px 25px;
                           margin-bottom: 30px; border: 1px solid #000;">
   Recipient:<br>
   <input type="text" name="recipient"
          style="padding: 5px 15px; margin: 5px 0 8px;"><br>
   Message:<br>
   <textarea name="message"
             style="padding: 5px 15px; margin: 5px 0 15px;"></textarea><br>
   <button type="submit" style="padding: 5px 25px;">Send</button>
   <button type="button" style="padding: 5px 25px">Cancel</button>
</form>

## 2. Radio-button & Check-box & Dropdown-list

The next common input types are radio-button, check-box, and dropdown-list.
These input types help us to provide some options for visitors to choose.

### Radio-button & Check-box

Radio-button and check-box are created by using `<input> tags` and look quite
the same. While radio-buttons allow only 1 option checked, check-boxes allow
more than 1 option checked.

`Sample code:`
<script src="https://gist.github.com/codenart/8495195640b9ac2426c75ac7cd72640d.js">
</script>

`Result:`

<form style="display: inline-block; padding: 45px 35px 25px 15px; margin-bottom: 30px;
             width: 450px; max-width: 100%; border: 1px solid #000; line-height: 1.63;">
   <b>Radio-buttons:</b><br>
   Male <input type="radio" name="gender" value="male" checked> |
   Female <input type="radio" name="gender" value="female"> |
   Other <input type="radio" name="gender" value="other"><br>
   <br>
   <b>Check-boxes:</b><br>
   Red <input type="checkbox" name="favcolor" value="red"> |
   Green <input type="checkbox" name="favcolor" value="green" checked> |
   Blue <input type="checkbox" name="favcolor" value="blue"><br>
   <br>
   <button type="submit" style="padding: 5px 25px; margin-top: 10px;">Send</button>
</form>

You may noticed that there is some new attributes used here:
[value attribute](https://www.w3schools.com/tags/att_value.asp "ext") and
[checked attribute](https://www.w3schools.com/tags/att_input_checked.asp "ext").

As these inputs do not allow visitors to enter their own information (values).
We need to specify default value for each choice using
[value attribute](https://www.w3schools.com/tags/att_value.asp "ext").
The [value attribute](https://www.w3schools.com/tags/att_value.asp "ext")
can also be used to specify default value for text-field and text-area.

The [checked attribute](https://www.w3schools.com/tags/att_input_checked.asp "ext")
is used to set a choice checked by default.

### Dropdown-list

Dropdown-list is used in case there are over numbers of choices (for example:
a nationality list)

`Sample code:`
<script src="https://gist.github.com/codenart/3481b234e28644afe7a1f72d062f2804.js">
</script>

`Result:`

<form style="display: inline-block; padding: 35px 25px 35px 15px; margin-bottom: 30px;
             width: 360px; max-width: 100%; border: 1px solid #000; line-height: 1.63;">
   Hometown:
   <select name="hometown" style="padding: 0 5px">
      <option value="mars">Mars</option>
      <option value="moon">Moon</option>
      <option value="earth">Earth Planet</option>
   </select>
   <br>
   <button type="submit" style="padding: 5px 25px; margin-top: 25px;">Confirm :D</button>
</form>

## 3. File-browser & Others

Here is how to create a `Browse...` button which is used to open built-in
file-browser of web browsers:

`Sample code:`
<script src="https://gist.github.com/codenart/e5ae28418fe376702e89946927e516b2.js">
</script>

`Result:`

<form style="display: inline-block; padding: 45px 15px; margin-bottom: 30px;
             border: 1px solid #000; line-height: 1.63;">
   <input type="file" name="photo"><br>
   <button type="submit" style="padding: 5px 25px;">Upload Photos</button>
</form>

Besides basic common input types which were listed above, there're plenty of
other input types which are cool and supported by up-to-date browsers. Please,
click on the link below if you want to learn further about them.

References: [input type attribute](https://www.w3schools.com/tags/att_input_type.asp "ext")

## The `<label>` tags

This is a convenient to make radio-buttons and check-boxs more friendly to
mobile user. With `<label>` tags, we can create clickable areas that are bound
to radio-buttons and check-boxes. So, visitors can either tap on control
elements or label elements.

The most simple way to bind a label element to a control element is putting
the control element inside the label element.

`Sample code:`
<script src="https://gist.github.com/codenart/391429c4df6b8c659f6a1d655a0a090a.js">
</script>

`Result:`

<form style="display: inline-block; padding: 25px 35px 30px 15px; margin-bottom: 30px;
             width: 450px; max-width: 100%; border: 1px solid #000; line-height: 1.63;">
   <b>Nice colors:</b><br>
   <label>
      Red <input type="checkbox" name="favcolor" value="red"> |
   </label>
   <label>
      Green <input type="checkbox" name="favcolor" value="green"> |
   </label>
   <label>
      Blue <input type="checkbox" name="favcolor" value="blue"><br>
   </label>
   <br>
   <button type="submit" style="padding: 5px 25px; margin-top: 15px;">Send</button>
</form>

A label element can also be bound to a control element using
[for attribute](https://www.w3schools.com/tags/att_for.asp "ext"). In this case,
the control element must have an `id`.

`Sample code:`
<script src="https://gist.github.com/codenart/8c77b7f49a783e697bdf8aa6a0982b74.js">
</script>

`Result:`

<form style="display: inline-block; padding: 25px 35px 25px 15px; margin-bottom: 30px;
             width: 450px; max-width: 100%; border: 1px solid #000; line-height: 1.63;">
   <label for="accept">Click here</label><br>
   <br>
   <input id="accept" type="checkbox" name="confirm" value="accept"> I've read and agree to the terms.<br>
   <button type="submit" style="padding: 5px 25px; margin-top: 15px;">Submit</button>
</form>
