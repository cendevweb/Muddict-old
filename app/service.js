(function(){
	'use strict';
	angular
    .module('MuddictApp')
    .service('googleService', ['$http', '$q', function ($http, $q) {

    this.googleApiClientReady = function (PageToken) {
    var deferred = $q.defer();
    	var pageToken = PageToken;
        gapi.client.setApiKey('AIzaSyDr4GpZbh4H0Z_pzFhFxlvADUSu-6UPiks');
        gapi.client.load('youtube', 'v3', function() {
            var requestOptions = {
                part: 'snippet',
                playlistId: 'PLeCdlPO-XhWFzEVynMsmosfdRsIZXhZi0',
                maxResults: 50,
			    pageToken : pageToken

            };

		    var request = gapi.client.youtube.playlistItems.list(requestOptions)
            request.execute(function(response) {
                deferred.resolve(response.result);
            });
        });
        return deferred.promise;
    };

}])
})()