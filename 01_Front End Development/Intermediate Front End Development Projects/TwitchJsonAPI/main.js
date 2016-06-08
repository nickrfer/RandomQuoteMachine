var app = angular.module('twitchClient', []);
var streamApiUrl = 'https://api.twitch.tv/kraken/streams/';
var channelApiUrl = 'https://api.twitch.tv/kraken/channels/';

app.controller('TwitchClientController', [ '$scope', '$http', '$timeout',
  function($scope, $http, $timeout) {
    $scope.statusFilter = "all";
    $scope.users = [];

    $scope.hideByStatus = function(user) {
      if (user.isOnline && $scope.statusFilter == 'offline') {
        return true;
      } else if ($scope.statusFilter != 'all' && !user.isAccountExists || (!user.isOnline && $scope.statusFilter == 'online')) {
        return true;
      }
      return false;
    };

    var createUser = function(streamData, channelData, channel) {
      var user;
      if (streamData != null) {
        user = new TwitchUser(streamData.channel, streamData);
      } else if (channelData != null) {
        user = new TwitchUser(channelData.data);
      } else {
        user = new TwitchUser();
        user.displayName = channel;
      }
      $scope.users.push(user);
    };    

    $scope.fetchChannel = function(channel) {
      $http.get(channelApiUrl+channel).then(function(channelResponse) {
        createUser(null, channelResponse);
      });
    };

    channelArr.forEach(function(channel) {
      $http.get(streamApiUrl+channel).success(function(streamResponse) {
        if (streamResponse.stream == null) {
          $scope.fetchChannel(channel);
        } else {
          createUser(streamResponse.stream);
        }
      })
      .error(function(streamResponse) {
        createUser(null, null, channel);
      }); 
    });

  }]);

var TwitchUser = function(channel, streamData) {
  this.isOnline = false;
  this.isAccountExists = false;
  
  if (channel != null) {
    this.isAccountExists = true;
    this.logo = channel.logo;
    this.url = channel.url;
    this.displayName = channel.display_name;
    this.status = channel.status;

    if (streamData != null) {
      this.isOnline = true;
      this.streamGame = streamData.game;
    }
  }
}

var channelArr = [
"jackpattillo",
"sirlarr",
"funhausteam",
"freecodecamp",
"ESL_SC2", 
"OgamingSC2", 
"cretetion",  
"storbeck", 
"brunofin",
"comster404",
"habathcx", 
"RobotCaleb", 
"noobs2ninjas",
"MedryBW"
];