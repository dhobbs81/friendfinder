module.exports = {
    setup: function(path, app, data) {

        const friends = data.friends;

        // GET route to get the set of friends
        app.get("/api/friends(/:name?)", function(req, res) {
          var name = req.params.name;

          // If the user supplied a name, return a matching friend
          if (name) {
            console.log(name);

            for (var friend of friends) {
              if (name === friend.name) {
                return res.json(friend);
              }
            }
            return res.json({ error: `Unable to find ${name} in the set of friends. Please try again.`} );
          }
          return res.json(friends);
        });

        // POST route to create a new friend
        app.post("/api/friends", function(req, res) {
            // req.body is populated with form data
            var formdata = req.body;

            // match form answer keys
            var pattern = /a\d/;

            // store the form data as a friend object
            var newfriend = {
                name: formdata.name,
                photo: formdata.photo,
                scores: []
            };

            // search the form data for answers
            for (var key in formdata) {
                if (formdata.hasOwnProperty(key) && pattern.test(key)) {
                    newfriend.scores.push(formdata[key]);
                }
            }

            // add the new friend
            friends.push(newfriend);

            // let the user know who their new best friend is
            res.render('pages/friend', {
                friend: data.findBestFriend()
            });
        });

    }
};
