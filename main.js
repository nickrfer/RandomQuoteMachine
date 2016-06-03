var app = angular.module('randomQuote', ['ngResource', 'angular-ladda']);


app.config(['$resourceProvider', function($resourceProvider) {
  // Don't strip trailing slashes from calculated URLs
  $resourceProvider.defaults.stripTrailingSlashes = false;
}]);

app.controller('RandomQuoteController', [ '$scope', '$http', '$timeout',
  function($scope, $http, $timeout) {

    this.getQuote = function() {
      $scope.loading = true; // start loading

      var result = $http.get('http://api.forismatic.com/api/1.0/', {
        params: {
          method: 'getQuote',
          lang: 'en',
          format: 'jsonp',
          jsonp: 'jsonp'
        }
      }).
      success(function(data) {
        $timeout(function() {
          $scope.loading = false; // stop loading
          $scope.quote = eval(data);
        }, 800);
      });
    };

    this.twitterShare = function() {
      var twtTitle = document.title;
      var twtUrl = location.href;
      var maxLength = 140 - (twtUrl.length + 1);
      if (twtTitle.length > maxLength) {
        twtTitle = twtTitle.substr(0, (maxLength - 3)) + '...';
      }
      var twtLink = 'https://twitter.com/intent/tweet?text=' 
      + $scope.quote.quoteText + '- ' + $scope.quote.quoteAuthor;
      window.open(twtLink);
    };

    this.getQuote();
  }]);

function jsonp(response) { return response; };

