$(() => { 'use strict';
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

function TicTacToe() {
   let player = '<i class="fa fa-times"></i>';
   let dao    = '<i class="fa fa-circle-o"></i>';
   let turn   = player;

   let deck      = [1, 2, 3, 4, 5, 6, 7, 8, 9];
   let playerSet = [];
   let daoSet    = [];
   let wonSet    = [];

   let win  = 0;
   let draw = 0;

   const msg = {
      turn : 'You first',
      win  : 'You won',
      draw : 'Draw',
      dao  : 'Be mindful'
   };

   const showMessenger = (str) => {
      $('#messenger').text(str);

      $('.app > div').not('.app-messenger').fadeOut(600);
      $('.app-messenger').not(':visible').fadeIn(600);
   };

   const showField = () => {
      $('.app-field-board > button').html('');
      $('.app-field-board > button').css('background', '');

      $('.app > div').fadeOut(600);
      $('.app-field').fadeIn(600);
   };

   const showMove = (num) => {
      $('button').each(function() {
         if ($(this).val() == num) {
            $(this).html(turn);
         }
      });
   };

   const setGame = () => {
      deck      = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      daoSet    = [];
      playerSet = [];
      wonSet    = [];

      turn = player;
      showMessenger(msg.turn);

      setTimeout(showField, 1600);
   };

   const updateWonSet = () => {
      let tempSet = (turn == player) ? playerSet : daoSet;
      let count = tempSet.length;
      if (count >= 3) {
         for (let i=0; i<count-2; i++) {
            let fst = tempSet[i];
            for (let j=i+1; j<count-1; j++) {
               let sec = tempSet[j];
               for (let k=j+1; k<count; k++) {
                  let trd = tempSet[k];
                  if (fst + sec + trd == 15) {
                     wonSet.push(fst);
                     wonSet.push(sec);
                     wonSet.push(trd);
                  }
               }
            }
         }
      }
   };

   const markWonSet = () => {
      wonSet.forEach((num) => {
         $('button').each(function() {
            if ($(this).val() == num) {
               $(this).css('background', '#eee');
            }
         });
      });
   };

   const playerWin = () => {
      win++;
      $('#win').text('Win: ' + win);

      markWonSet();
      setTimeout(() => {
         showMessenger(msg.win);
         setTimeout(setGame, 2600);
      }, 600);
   };

   const daoWin = () => {
      markWonSet();
      setTimeout(() => {
         showMessenger(msg.dao);
         setTimeout(setGame, 2600);
      }, 600);
   };

   const drawGame = () => {
      draw++;
      $('#draw').text('Draw: ' + draw);

      setTimeout(() => {
         showMessenger(msg.draw);
         setTimeout(setGame, 2600);
      }, 600);
   };

   /* * * * * * * * * * * * * * * * * *
    * Generate move
    */
   const shuffle = (set) => {
      let swap;
      for (let i=set.length; i; i--) {
         let j = Math.floor(Math.random() * i);
         swap = set[i-1];
         set[i-1] = set[j];
         set[j] = swap;
      }
   };

   const getWinNums = (owner) => {
      let tempSet = (owner == player) ? playerSet.map(num => num)
                                      : daoSet.map(num => num);
      let winNums = deck.reduce((list, num) => {
         for (let i=0; i<tempSet.length-1; i++) {
            for (let j=i+1; j<tempSet.length; j++) {
               if (num + tempSet[i] + tempSet[j] == 15) {
                  list.push(num);
               }
            }
         }
         return list;
      }, []);

      shuffle(winNums);
      return winNums;
   };

   const getSyncNums = (owner) => {
      let tempSet = (owner == player) ? playerSet.map(num => num)
                                      : daoSet.map(num => num);
      let syncNums = tempSet.reduce(function(list, num) {
         for (let i=0; i<deck.length-1; i++) {
            for (let j=i+1; j<deck.length; j++) {
               if (num + deck[i] + deck[j] == 15) {
                  list.push(deck[i]);
                  list.push(deck[j]);
               }
            }
         }
         return list;
      }, []);

      syncNums = syncNums.reduce(function(list, num, idx) {
         if (list.indexOf(num) == -1 && syncNums.indexOf(num, idx+1) != -1) {
            list.push(num);
         }
         return list;
      }, []);

      shuffle(syncNums);
      return syncNums;
   };

   const getAsyncNums = (owner) => {
      let tempSet = (owner == player) ? playerSet.map(num => num)
                                      : daoSet.map(num => num);
      let syncNums = getSyncNums(owner);
      let asyncNums = deck.reduce((list, num) => {
         if (list.indexOf(num) == -1 && syncNums.indexOf(num) == -1)
            list.push(num);
         return list;
      }, []);

      shuffle(asyncNums);
      return asyncNums;
   };

   const getNiceNums = (owner) => {
      let tempSet = (owner == player) ? playerSet.map(num => num) :
                       (owner == dao) ? daoSet.map(num => num) :
                                        deck.map(num => num);
      let niceNums = tempSet.reduce((list, num) => {
         if (num%2==0 || num==5)
            list.push(num);
         return list;
      }, []);

      shuffle(niceNums);
      return niceNums;
   };
   
   const getDaoMove = function() {
      let num;

      // 1 only try to take win if see double threads from player
      if (getWinNums(player).length >= 2) {
         num = getWinNums(dao).pop();
      }

      // 2 try to block a single threat
      if (! num) {
         num = getWinNums(player).pop();
      }

      // 3 try to create a single threat to redirect game state
      //   if player has 2 or more posibilities to create double threats
      if (! num && getSyncNums(player).length >= 2) {
         num = getAsyncNums(player).reduce((list, num) => {
            daoSet.push(num);
            list = getWinNums(dao).concat(list);
            daoSet.pop();
            return list;
         }, []).pop();
      }

      // 4 block if player has One posibility to create double threats
      if (! num) {
         num = getSyncNums(player).pop();
      }

      // 5 try to take an nice number for balancing game state
      if (! num && getNiceNums(dao).length == 0) {
         num = (deck.indexOf(5) != -1) ? 5 : getNiceNums(deck).pop();
      }
      
      // 7 random move cause all the important stuff done above
      if (! num) {
         shuffle(deck);
         num = deck[0];
      }

      return num;
   };

   /* * * * * * * * * * * * * * *
    * Methods
    */
   this.begin = function(chosen) {
      if (chosen == 'o') {
         player = dao;
         dao    = turn;
         turn   = player;
      }

      setGame();
   },

   this.playerMove = function(num) {
      const inDeck = deck.indexOf(num);
      if (inDeck == -1) { return; }

      deck.splice(inDeck, 1);
      playerSet.push(num);

      showMove(num);
      updateWonSet();

      if (wonSet.length > 0) {
         playerWin();
         return;
      }

      if (deck.length == 0) {
         drawGame();
         return;
      }

      turn = dao;
      $('button').attr('disabled', 'true');
      setTimeout(this.daoMove, 600);
   },

   this.daoMove = function() {
      $('button').removeAttr('disabled');
      const num = getDaoMove();
      const inDeck = deck.indexOf(num);

      deck.splice(inDeck, 1);
      daoSet.push(num);

      showMove(num);
      updateWonSet();

      if (wonSet.length > 0) {
         daoWin();
         return;
      }

      if (deck.length == 0) {
         drawGame()
         return;
      }

      turn = player;
      // playerMove
   }
}; // TicTacToe{}

/* * * * * * * * * * * * * * * * * *
 * Start & Route
 */
const app = new TicTacToe();

$('button').on('click', function() {
   var cmd = $(this).val();

   switch (true) {
      case /x|o/.test(cmd):
         app.begin(cmd);
         break;

      case /[1-9]/.test(cmd):
         app.playerMove(+cmd);
         break;

      default:
         console.log(cmd);
         break;
   } // switch
});

/* * * * * * * * * * * * * * * * * *
 * Visual Effect
 */
$('button').on('mousedown', function() {
   $(this).addClass('down');
});

$('button').on('mouseup', function() {
   $(this).removeClass('down');
});

$('button').on('mouseout', function() {
   $(this).removeClass('down');
});

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
}); // document ready
