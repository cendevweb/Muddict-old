(function(){

  'use strict';
	angular
    .module('MuddictApp')
    .controller('catCtrl', catCtrl);

    function catCtrl($rootScope,$stateParams,$state){
      const cat = this;
      cat.catList = {
        "category1": {
          "image": "assets/graphique_content/Cat/cassette.svg",
          "span": "MIXTAPE",
          "text": "Long mixtape for a good music session, many genre !"
        },
        "category2": {
          "image": "assets/graphique_content/Cat/star.svg",
          "span": "FAVORITES",
          "text": "Our and Your favorites song"
        },
        "category3": {
          "image": "assets/graphique_content/Cat/disco-ball.svg",
          "span": "NU DISCO",
          "text": "Nu disco music, for funky and joyfull rythm"
        },
        "category4": {
          "image": "assets/graphique_content/Cat/beach-house.svg",
          "span": "TROPICAL HOUSE",
          "text": "the hot stuff right now, the famous Tropical House style"
        },
        "category5": {
          "image": "assets/graphique_content/Cat/headphones.svg",
          "span": "DEEP HOUSE",
          "text": "Calm song with cool beat to dance and sing to"
        },
        "category6": {
          "image": "assets/graphique_content/Cat/baseball-cap.svg",
          "span": "HIP HOP",
          "text": "Epic beats to rap too and underground us Hip Hop"
        },
        "category7": {
          "image": "assets/graphique_content/Cat/cord-microphone.svg",
          "span": "RAP",
          "text": "Us rap and french rap I often listen too, come give it a go !"
        },
        "category8": {
          "image": "assets/graphique_content/Cat/peace.svg",
          "span": "REGGAE",
          "text": "Perfect songs to chill to and you know... smoke a joint !"
        },
        "category9": {
          "image": "assets/graphique_content/Cat/music-player.svg",
          "span": "AMBIANT",
          "text": "Music with no lyrics, just magnificent sound"
        },
        "category10": {
          "image": "assets/graphique_content/Cat/camera.svg",
          "span": "VIDEO CLIP",
          "text": "Want to watch an amazing music video ? Click here !"
        }
      }
      $rootScope.btnHome = true;
      $rootScope.btnBack = false;
      $rootScope.blur = true;
      cat.setParams = function(name) {
            $rootScope.urlName = name;
            $rootScope.urlName = $rootScope.urlName.toLowerCase();
/*            url = object.from.factory.URL, // path to html file passed to be used in termplateurl from state
            // set stateParams.name to be used in URL*/
            $stateParams.name = $rootScope.urlName;

            // set params to be passed into URL when $state.go(); is called, they will be available for use then and update the URL with the state setup from above.
            $state.go( 'playlist', { name: $stateParams.name/*, url: url*/ } );
      }; 
    };

})();
