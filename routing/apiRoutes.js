module.exports = {
    setup: function(path, app, friends) {

        /*
        // GET route to get the set of friends
        app.get("/api/friends(/:name)?", function(req, res) {
          var name = req.params.name;

          if (name) {
            console.log(name);

            for (var friend of friends) {
              if (name === friends[i].name) {
                return res.json(friends);
              }
            }
            return res.json(false);
          }
          return res.json(friends);
        });
        */

        // Create New Characters - takes in JSON input
        app.post("/api/friends", function(req, res) {
          // req.body hosts is equal to the JSON post sent from the user
          var newfriend = req.body;

          console.log(newfriend);
          console.log("YO!!!!!!!!");

          // We then add the json the user sent to the character array
          friends.push(newfriend);

          // We then display the JSON to the users
          res.json(newfriend);
        });

    }
};
