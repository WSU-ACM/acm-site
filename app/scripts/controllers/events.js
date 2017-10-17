'use strict';

/**
 * @ngdoc function
 * @name acmSiteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the acmSiteApp
 */
angular.module('acmSiteApp')
  .controller('EventsCtrl', function ($scope) {

    $scope.calendar = [
      {
        year: "2017",
        months: [
          {
            month: "October",
            events: [
              {
                date: "24th",
                time: "5:30-7pm",
                location: "TBD",
                name: "Resume Review + Interviewing Workshop"
              },
            ]
          },
          {
            month: "September",
            events: [
              {
                date: "26th",
                time: "5:30pm-7pm",
                location: "Reaney Park",
                name: "Multiclub BBQ"
              },
              {
                date: "19th",
                time: "5:30pm-6:30pm",
                location: "ACM Room, Sloan 327",
                name: "ACM Intro Meeting"
              },
              {
                date: "6th",
                time: "5:30pm-6:30pm",
                location: "Sloan 169",
                name: "CrimsonCode Hackathon - Interest Meeting"
              },
            ]
          },
        ]
      }
    ]

  });
