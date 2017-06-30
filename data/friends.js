module.exports = {

    // The friends array stores data on how to match friends
    friends : [
        {
            "name": "Marcus",
            "photo": "https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/3/000/26a/04d/20ffa08.jpg",
            "scores":[ 5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
        },
    ],

    findBestFriend : function(myself = this.friends[0], friends = this.friends) {

        let bestFriend = myself;
        let bestFriendDifference = 1000;

        // Loop through the set of friends
        // Calculate total difference between myself and each friend
        // Whichever stranger has the smallest total difference is my new best friend
        for (var i = 0; i < friends.length; i++) {

            const stranger = friends[i];

            // Obviously, I am my own best friend. No need to calculate differences.
            if (stranger.name === myself.name) continue;

            let totalDifferences = 0;

            // For each stranger in the set of friends
            // Calculate the total difference in scores
            for (var j = 0; j < stranger.scores; j++) {

               totalDifferences += Math.abs(myself.scores[j] - stranger.scores[j]);

            }

            // If the total differences between myself and this stranger
            // are less than my current best friend, I now have a new best
            // friend
            if (totalDifferences < bestFriendDifference) {

                bestFriendDifference = totalDifferences;
                bestFriend = stranger;

            }

        }

        // Let the user know who the new best friend is
        return bestFriend;
    }
};
