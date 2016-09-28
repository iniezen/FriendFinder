// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendData 		= require('../data/friends.js');



// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
	// API GET Requests
	// Below code handles when users "visit" a page.
	// In each of the below cases when a user visits a link
	// (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
	// ---------------------------------------------------------------------------

	app.get('/api/friends', function (req, res) {
		res.json(friendData);

	});



	// API POST Requests
	// Below code handles when a user submits a form and thus submits data to the server.
	// In each of the below cases, when a user submits form data (a JSON object)
	// ...the JSON is pushed to the appropriate Javascript array
	// (ex. User fills out a reservation request... this data is then sent to the server...
	// Then the server saves the data to the tableData array)
	// ---------------------------------------------------------------------------

	app.post('/api/friends', function (req, res) {
		// Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
		// It will do this by sending out the value "true" have a table
	
			var newFriend = req.body;
			var differenceArray= [];

			
			var newFriendScores= newFriend.scores;
			console.log("newFriendScores "+newFriendScores)
			for(var i = 0; i<friendData.length; i++){

				var totalDifference = 0;
				var oldFriendScores = friendData[i].scores;
				console.log("friendname "+friendData[i].name);
				console.log("oldfriendscores "+oldFriendScores);
				
				for(var x = 0; x<newFriendScores.length; x++){

						
						var difference=Math.abs(newFriendScores[x] - oldFriendScores[x]);
						
						totalDifference = totalDifference+difference;
						console.log("difference "+difference);

						
						
				}

				console.log("totalDifference "+totalDifference);
				
			}
	
			friendData.push(newFriend);
		
		// else { // Or false if they don't have a table
		// 	waitListData.push(req.body);
		// 	res.json(false); // KEY LINE
		// }
	});

	// ---------------------------------------------------------------------------
	// I added this below code so you could clear out the table while working with the functionality.
	// Don't worry about it!

	// app.post('/api/clear', function () {
	// 	// Empty out the arrays of data
	// 	friendData = [];


	// 	console.log(friendData);
	// });
};