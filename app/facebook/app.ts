/// <reference path="../../typings/tsd.d.ts" />

class FacebookController {
  constructor($scope) {
    console.log("TEST")
  }
}

angular.module('facebook', ['ng'])
  .controller('FacebookController', FacebookController);
