'use strict';

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Topnav
 */
$(document).ready(function() {
   const $button = $('#topnav').find('.navbar-toggle');
   const $icon = $button.find('.glyphicon');

   $button.click(function(event) {
      $icon.toggleClass('glyphicon-option-horizontal')
           .toggleClass('glyphicon-chevron-up');
   });
});


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Display
 */
$(document).ready(function() {
   const $button = $('#display').find('a[href="#main"]');
   const readPosition = $('#main').offset().top - 39;

   $button.click(function(event) {
      event.preventDefault();
      $('html, body').animate({ scrollTop: readPosition }, 1000);
   });
});


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Sidenav
 */
$(document).ready(function() {
   const $button = $('#sidenav').find('.collapse-toggle');
   const $icon = $button.find('.glyphicon');

   $button.click(function(event) {
      $icon.toggleClass('glyphicon-list')
           .toggleClass('glyphicon-chevron-right');
   });
});


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Sidenav-Filter
 */
$(document).ready(function() {
   const $sidenav = $('#sidenav');
   const $textinput = $sidenav.find('input[name="filter"]');
   const $filterbutton = $sidenav.find('.input-group-addon');
   const $navpanel = $sidenav.find('.nav');

   /*
    * Utilities
    */
   $textinput.isEmpty = function() {
      const kwd = $(this).val().trim();
      return kwd == '';
   };

   $textinput.getKwd = function() {
      const kwd = $(this).val().trim().replace(/\s+/g, ' ');
      return kwd.toLowerCase();
   };

   $filterbutton.showFilterIcon = function() {
      const $icon = $(this).find('.glyphicon');
      $icon.addClass('glyphicon-filter')
           .removeClass('glyphicon-remove');
   };

   $filterbutton.showClearIcon = function() {
      const $icon = $(this).find('.glyphicon');
      $icon.addClass('glyphicon-remove')
           .removeClass('glyphicon-filter');
   };

   /*
    * Observe
    */
   $filterbutton.on('input:change', function(event) {
      if( $textinput.isEmpty() )
         $filterbutton.showFilterIcon();
      else
         $filterbutton.showClearIcon();
   });

   $navpanel.on('input:change', '.nav-link', function(event) {
               if( $textinput.isEmpty() )
                  $(this).trigger('input:empty');
               else
                  $(this).trigger('input:has');
            })
            .on('input:empty', '.nav-link', function(event) {
               const $linkcontainer = $(this).parent('li');
               $linkcontainer.removeClass('hidden');
            })
            .on('input:has', '.nav-link', function(event) {
               const $linkcontainer = $(this).parent('li');
               const linkTitle = $(this).text().toLowerCase();
               const kwd = $textinput.getKwd().toLowerCase();
               const matched = linkTitle.indexOf(kwd) != -1;

               if( matched )
                  $linkcontainer.removeClass('hidden');
               else
                  $linkcontainer.addClass('hidden');
            });

   /*
    * Notify
    */
   $textinput.on('keyup', function(event) {
      $filterbutton.trigger('input:change');
      $navpanel.find('.nav-link').trigger('input:change');
   });

   $filterbutton.click(function(event) {
      $textinput.val('');
      $filterbutton.trigger('input:change');
      $navpanel.find('.nav-link').trigger('input:change');
   });
}); // document ready


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Post
 */
$(document).ready(function() {
   const $post = $('#post');
   const $headings = $post.find('h2, h3');

   $headings.click(function (event) {
      const id = $(this).attr('id');
      const href = document.location.href;
      const url = href.replace(/^(.+:\/\/[^\/]+\/)(.+)$/i, 'https://codenart.github.io/$2');
      const clipboard = url + '#' + id;

      const $tempinput = $('<input>', { style: 'position: fixed; bottom: -100%;' });
      $('body').append($tempinput);
      $tempinput.val(clipboard).select();

      try
         { document.execCommand('copy'); }
      catch (err)
         { console.log(err); }
      finally
         { $tempinput.remove(); }
   });
});
