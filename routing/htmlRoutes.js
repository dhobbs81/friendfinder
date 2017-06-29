module.exports = {

    setup: function(path, app) {

        // Default GET route to the home page
        app.get("/", function(req, res) {
          res.sendFile(path + "public/home.html");
        });


        // GET route to the survey page
        app.get("/survey", function(req, res) {
          res.sendFile(path + "public/survey.html");
        });

    }
};
