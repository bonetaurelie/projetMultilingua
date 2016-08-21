angular.module('ProjetLangue.services', [])

    .factory("Auth", function($firebaseAuth) {
      var usersRef = new Firebase("https://multilingua-c2e9b.firebaseio.com/user.json");
      return $firebaseAuth(usersRef);
    })

    .factory('Events', function($q) {

      var incrementDate = function (date) {
        var tmpDate = new Date(date);
        tmpDate.setDate(tmpDate.getDate());
        var options = { weekday: "long", year: "numeric", month: "short",
          day: "numeric" };
        return tmpDate.toLocaleTimeString("fr-FR",options);
      };

      //create fake events, but make it dynamic so they are in the next week
      var fakeEvents = [];
      fakeEvents.push(
          {
            "id":1,
            "title":"Session en présentiel",
            "description":"Session d'anglais",
            "date": incrementDate(new Date('08/10/2016 10:00'))
          }
      );
      fakeEvents.push(
          {
            "id":2,
            "title":"Session en présentiel",
            "description":"Session d'espagnol",
            "date": incrementDate(new Date('08/12/2016 13:00'))
          }
      );
      fakeEvents.push(
          {
            "id":3,
            "title":"Session en présentiel",
            "description":"Session de portugais",
            "date":incrementDate(new Date('08/16/2016 16:00'))
          }
      );
      fakeEvents.push(
          {
            "id":4,
            "title":"Session en présentiel",
            "description":"Session d'allemand",
            "date": incrementDate(new Date('08/18/2016 09:00'))
          }
      );
      fakeEvents.push(
          {
            "id":5,
            "title":"Session en présentiel",
            "description":"Session d'anglais",
            "date": incrementDate(new Date('08/22/2016 09:00'))
          }
      );
      fakeEvents.push(
          {
            "id":6,
            "title":"Session en présentiel",
            "description":"Session d'espagnol",
            "date": incrementDate(new Date('08/26/2016 08:00'))
          }
      );
      fakeEvents.push(
          {
            "id":7,
            "title":"Session en présentiel",
            "description":"Session de portugais",
            "date":incrementDate(new Date('08/31/2016 13:00'))
          }
      );
      var getEvents = function() {
        var deferred = $q.defer();
        deferred.resolve(fakeEvents);
        return deferred.promise;
      }

      return {
        get: getEvents
      }
    });