var app = angular.module('wikipediaViewer', ['angular-ladda']);


app.controller('WikipediaViewerController', [ '$scope', '$http', '$timeout',
  function($scope, $http, $timeout) {

    this.search = function() {
      $scope.loading = true; // start loading

      $http.jsonp('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          generator: 'search',
          gsrsearch: $scope.articleFilter,
          gsrlimit: 5,
          format: 'json',
          prop: 'extracts',
          exsentences: '2',
          exintro: '',
          explaintext: '',
          exlimit: 'max',
          callback: 'JSON_CALLBACK'
        }
      }).then(function (response) {
        $scope.articles = response.data.query.pages;
        $scope.loading = false;
      });
    };
  }]);