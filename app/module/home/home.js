(function(){

  'use strict';


	angular
    .module('MuddictApp')
    .controller('homeCtrl', homeCtrl);

    function homeCtrl($rootScope, $scope){
      const home = this;
      $rootScope.btnHome = false;
      $rootScope.btnBack = false;
      $rootScope.blur = false;
      $scope.isCollapsedHorizontal = true;
      var inter = false;
      var playlistArray;
      var playListArrayLength;
      var maxNumber;

      var oldNumber = 0;
      var NewNumber = 0;
      home.playerVars = {
               // list: 'PL-xQeDCvRYXMyEX2fgAjC2_LDnyBoH0Ak',
                list: 'LLRmPG23-ao586bxbZFPpvmw',
                index:'302',
                rel : "0",
                loop : "1",
                origin : "http://www.youtube.com"
              };
        home.prsAction = function() {
          playlistArray = home.bestPlayer.getPlaylist();
          if (!inter){
              playlistArray = home.bestPlayer.getPlaylist();
              playListArrayLength = playlistArray.length;
              maxNumber = playListArrayLength;
              NewNumber = home.newRandomNumber();
            //  home.bestPlayer.setShuffle(playlistArray)
              //home.bestPlayer.playVideoAt(home.newRandomNumber());
              home.bestPlayer.playVideo();
            inter = true;
          }else if(inter){
            home.bestPlayer.stopVideo();
            inter = false;
          }
        }
      home.newRandomNumber = function() {
          oldNumber = NewNumber;
          NewNumber = Math.floor(Math.random() * maxNumber);
              return NewNumber;
      }
    };

})();
