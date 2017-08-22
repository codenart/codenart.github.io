'use strict';

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Topnav
 */
$(document).ready(function() {
   const $button = $('#topnav').find('.navbar-toggle');
   const $icon = $button.find('.fa');

   $button.click(function(event) {
      $icon.toggleClass('fa-ellipsis-h')
           .toggleClass('fa-chevron-up');
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
   const $icon = $button.find('.fa');

   $button.click(function(event) {
      $icon.toggleClass('fa-list')
           .toggleClass('fa-chevron-right');
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
      const $icon = $(this).find('.fa');
      $icon.addClass('fa-filter')
           .removeClass('fa-remove');
   };

   $filterbutton.showClearIcon = function() {
      const $icon = $(this).find('.fa');
      $icon.addClass('fa-remove')
           .removeClass('fa-filter');
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
   $('#post').on('click', 'h2, h3', function (event) {
      const id = $(this).attr('id');
      var url = document.location.href;
          url = url.replace(/^(.+:\/\/[^\/]+\/)(.+)$/i, 'https://codenart.github.io/$2');
          url = url + '#' + id;

      const $tempinput = $('<input>', { style: 'position: fixed; left: -100%;' });
      $('body').append($tempinput);
      $tempinput.val(url).select();

      try
         { document.execCommand('copy'); }
      catch (err)
         { console.log(err); }
      finally
         { $tempinput.remove(); }
   });
}); // document ready
