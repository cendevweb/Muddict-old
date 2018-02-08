(function(){
	'use strict';
	function init() {
	    window.initGapi(); // Calls the init function defined on the window
    }

	angular
	.module('MuddictApp')
	.controller('playlistCtrl', playlistCtrl);

	function playlistCtrl($rootScope,$window, $sce, googleService, $scope, $timeout){
		const playlist = this;
		$rootScope.btnHome = true;
		$rootScope.btnBack = true;
		$rootScope.blur = true;
		playlist.isItemClicked = false;
		playlist.name = $rootScope.urlName;
		playlist.name = playlist.name.toUpperCase();
		playlist.fullList={};
		playlist.idList= [];
		playlist.initId="IfrznErzSVI";
		$scope.oneAtATime = true;
		playlist.config = {
			autoHideScrollbar: true,
			theme: 'minimal',
			advanced:{
				updateOnContentResize: true
			},
			scrollInertia: 500,
			keyboard: {
				enable: true
			}
		}

		$window.initGapi = function() {
			this.$apply(playlist.getList);
		};


		playlist.getList = function () {
			if (!playlist.token){
				googleService.googleApiClientReady().then(function (data) {
					playlist.fullList = data.items;
					playlist.token = data.nextPageToken;
					playlist.total = data.pageInfo.totalResults
					playlist.reRun();	
				}, function (error) {
					console.log('Failed: ' + error)
				});
			}else{
				googleService.googleApiClientReady(playlist.token).then(function (data2) {
					playlist.token = data2.nextPageToken;
					playlist.fullList = playlist.fullList.concat(data2.items);
					playlist.reRun();
				}, function (error) {
					console.log('Failed: ' + error)
				});
			}
		};
		playlist.reRun = function(){
			if(playlist.fullList.length<playlist.total){
				playlist.getList();
			}else{
				for (var i = 0 ; i < playlist.fullList.length; i++) {
					playlist.idList.push(playlist.fullList[i].snippet.resourceId.videoId);
				}
				console.log("done charging list");
	     	}

		}

		playlist.getList();

	    playlist.inter = false;
	    var playlistArray;
	    var playListArrayLength;
	    var maxNumber;
	    $scope.showEmbed = 0;
	    var oldNumber = 0;
	    var NewNumber = 0;
	    playlist.playerVars = {
	        rel : "0",
	        loop : "1",
	        origin : "http://127.0.0.1:8080",
	        opacity : "0"
	    };
	  //  console.log(playlist.bestPlayer);
	   // playlist.bestPlayer.setSize({width:"0px", height:"0px"})
	    playlist.prsAction = function(index) {
	        $timeout(function() {
			    angular.element(document.querySelector( '#ytBlock' ) ).addClass("ytShow");
			    	playlist.bestPlayer.cuePlaylist({playlist:playlist.idList})
		    }, 1000);  
	    	console.log("onclick:"+playlist.bestPlayer);
	    	playlist.playerStyle={"display":"block"}
	  	    playlist.isItemClicked = true;
		    $scope.showEmbed = 1;
			playlist.bestPlayer.playVideoAt(index);
	      //  playlist.bestPlayer.setSize({width:"500px", height:"500px"})
	        
	        playlist.inter= true
	    }
	};
})();
