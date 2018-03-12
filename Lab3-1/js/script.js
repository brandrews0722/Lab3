angular.module('YTApp')
    .controller('YTAppController', ['$scope', '$http', function ($scope, $http) {
        $scope.showVideos = false;
        $scope.showVideoPlayer = false;
        $scope.search = function () {

            var inputs = document.getElementById("topicInput");
            var searchTerm = inputs.value;

            var url = createUrl(searchTerm);

            if (url == "")
                return;

            $http.get(url)
                .then(function (response) {
                    $scope.videos = [];
                    $scope.showVideos = true;
                    $scope.videos = response.data.items;
                    //$scope.tempVideos = $scope.videos.splice();
                });
        };


        var createUrl = function (search) {
            var searchTermHasValue = search != null && search != "";
            var tempUrl = "";
            var baseUrl = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=";
            var apiKey = "AIzaSyD3Usvgq_Tz5oD9Cv04plywVwmRv61OZ5k";

            if (searchTermHasValue) {
                tempUrl = baseUrl + search + "&" + "&type=video&key=" + apiKey;
            }

            return tempUrl;
        };

        $scope.openVideo = function (videoId) {
            //var ele = document.getElementById("videoPlayer");
            var ele = document.getElementById("videoPlayer");

            if(ele.childNodes[3] != null)
                ele.removeChild(ele.childNodes[3]);

            var videoEle = document.createElement('iframe');
            videoEle.src = "https://www.youtube.com/embed/" + videoId + "?autoplay=1";
            ele.appendChild(videoEle);
            $scope.showVideoPlayer = true;
            //ele.href = "https://www.youtube.com/embed/" + videoId;
            //$scope.videoLink = "https://www.youtube.com/embed/" + videoId;
            //$scope.videoPlayerLink = "https://www.youtube.com/embed/" + videoId;
        };

    }]);

//<embed-video data-ng-href="videoLink" controls=0 id="videoPlayer"><a data-ng-href="videoLink" id="videoPlayerLink">Watch</a></embed-video>

// // Helper function to display JavaScript value on HTML page.
//         function showResponse(response) {
//             var responseString = JSON.stringify(response, '', 2);
//             document.getElementById('response').innerHTML += responseString;
//         }
//
// // Called automatically when JavaScript client library is loaded.
//         function onClientLoad() {
//             gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
//         }
//
// // Called automatically when YouTube API interface is loaded (see line 9).
//         function onYouTubeApiLoad() {
//             // This API key is intended for use only in this lesson.
//             // See https://goo.gl/PdPA1 to get a key for your own applications.
//             gapi.client.setApiKey('AIzaSyCOIdPPdXGuTtVxT6iNNnsNTdSiWIMIw1g');
//
//             search();
//         }
//
//         function search() {
//             // Use the JavaScript client library to create a search.list() API call.
//             var request = gapi.client.youtube.search.list({
//                 part: 'snippet',
//
//             });
//
//             // Send the request to the API server,
//             // and invoke onSearchRepsonse() with the response.
//             request.execute(onSearchResponse);
//         }
//
// // Called automatically with the response of the YouTube API request.
//         function onSearchResponse(response) {
//             showResponse(response);
//         }

////