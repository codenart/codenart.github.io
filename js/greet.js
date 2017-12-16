'use strict'

$(document).ready(function() {
   const greet = function(h) {
      return ( 0 <= h && h < 12) ? 'Good morning :D' :
             (12 <= h && h < 18) ? 'Good afternoon :D' :
                                   'Good evening :D'
   }

   $('#greet').on('click', (event) => {
      var d = new Date()
      var h = d.getHours()
      var msg = greet(h)
      window.alert(msg)
   })
}) // document ready
