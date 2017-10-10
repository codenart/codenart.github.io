---
layout: post
style:
script:

category: html
featured:
permalink:

title: Creating Lists and Tables
short: Lists & Tables
description: As you've got more familiar with HTML, we're gonna go fast in this tutorial. <br>Lists and Tables are popular way to represent data. <br>Let's create some of them.
keywords: web development, beginner, non-coder, kei nart, free, tutorial, coding, programming, code nart, html, ordered, unordered, list, table

date: 2017-07-27 05:20:00
---

There are 3 types of Lists in HTML:

- `unordered` list
- `ordered` list
- `definition` list

The last one is very rarely used, so we're gonna talk about unordered list,
ordered list and tables.

## Unordered Lists

To create an unordered list, we firstly need to create a container using
`<ul></ul>` tags.  
The second step is specifying list items using `<li></li>` tags.

`Sample code:`
<script src="https://gist.github.com/codenart/27549a909e71ffd70d9b8a98e0a9b6b5.js">
</script>

`Result:`

- Strawberry
- Watermelon
- Blueberry

## Ordered Lists

Creating an ordered list is almost the same as creating an unordered one.

`Sample code:`
<script src="https://gist.github.com/codenart/1babf924dd1c4ded2bbcdf5bb95c80bc.js">
</script>

`Result:`
1. Strawberry
2. Watermelon
3. Blueberry

## Tables

A table in HTML is created row by row. Here are steps to create a table:

- Create a table container using `<table></table>` tags.
- Create table's row(s) using `<tr></tr>` tags.
- Inside each row, add table's data cell(s) using `<td></td>` tags.
- For the cells which you want to use as row headings or column headings, use `th` instead of `td`.

`Sample code:`
<script src="https://gist.github.com/codenart/7b49f6a66484ebcba0ce71f8496e44a3.js">
</script>

`Result:`
<table class="table">
   <tr>
      <th>Name</th>
      <th>Age</th>
      <th>Place</th>
   </tr>

   <tr>
      <td>Methuselah</td>
      <td>4,800</td>
      <td>California</td>
   </tr>

   <tr>
      <td>Senator</td>
      <td>3,500</td>
      <td>Florida</td>
   </tr>

   <tr>
      <td>Sarv-e Abarqu</td>
      <td>4,000</td>
      <td>Iran</td>
   </tr>
</table>

There are also attributes which are used with `<td>` or `<th>` to expand cells
by columns and rows. And here are reference links to the attributes:

- [colspan attribute](https://www.w3schools.com/tags/att_colspan.asp "ext")
- [rowspan attribute](https://www.w3schools.com/tags/att_rowspan.asp "ext")

## Comments

In the previous example, there was a line of code which has not appeared in the
result:

`<!-- The row above is for headings -->`

This line is used for explanation in HTML document without affecting the output
on webpage view. It is called a `comment`.

A comment in HTML is created using an opening tag `<!--` and a ending tag `-->`.

Another benefit of using comments is to temporarily cancel a blocks of code
without deleting or moving your code to a temporary place.

`Sample code:`
<script src="https://gist.github.com/codenart/585351dc0921ef2bdd9363b5bb9455ab.js">
</script>
