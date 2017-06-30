module.exports = {

    setup: function(path, app, data) {

        // Default GET route to the home page
        app.get("/", function(req, res) {
            res.render('pages/index');
        });

        // GET route to the survey page
        app.get("/survey", function(req, res) {
          res.sendFile(path + "public/survey.html");
        });

    }

};
