const express = require("express");
const supabase = require("../config/database");

const router = express.Router();
const chechIfIsAdmin = (req, res, next) => {
	if(supabase.auth.user() !== null) {
		supabase
		  .from('Profile')
		  .select('*')
		  .eq("user_id", supabase.auth.user().id)
		  .then(({data: Profile, error}) => {
		  	if(Profile[0].role == "admin") {
				next()
			} else {
				res.redirect('/signin')
			}
		  })
		  .catch(e => {
		  	console.log(e)
		  })
	} else {
		res.redirect('/signin')
	}
}

router.get('/', (req, res) => {
	res.show('routes/admin/index', {layout: "layouts/admin", title: "Dashboard"})
})

router.get('/deposit', (req, res) => {
	res.show('routes/admin/deposit', {layout: "layouts/admin", title: "Deposit"})
})

router.get('/withdraw', (req, res) => {
	res.show('routes/admin/withdraw', {layout: "layouts/admin", title: "Withdraw"})
})

router.get('/sendNotification', chechIfIsAdmin, (req, res) => {
	res.show('routes/admin/sendNotifications', {layout: "layouts/admin", title: "Send notification"})
})

router.post('/sendNotification', chechIfIsAdmin, (req, res) => {
	let {user_id, topic, body} = req.body;
	let errors = [];
	if(user_id == "", topic == "",body == "") {
		errors.push({msg: "All fields are required"});
	}
	if(errors.length > 0) {
		res.show('routes/admin/sendNotifications', {layout: "layouts/admin", errors, title: "Error sending notifications"})
	} else {
		supabase
		.from("Notifications")
		.insert({topic, user_id, body})
		.then(({data, error}) => {
			if(error) {
				res.show('routes/admin/sendNotifications', {layout: "layouts/admin", errors: [{msg: error.message}], title: "Error sending notifications"})
			} else {
				res.show('routes/admin/sendNotifications', {layout: "layouts/admin", success: "Notification sent successfully", title: "Send Notification"})
			}
		})
		.catch(e => {
			console.log(e)
		})
	}
})


router.post('/withdraw', (req, res) => {
	let errors = [];
	let {address, amount} = req.body;
	if(address == "" || amount == "") {
		errors.push({msg: "In other to make withdrawls you need to input your btc address"})
	} else {
		errors.push({msg: "Your account is not activated, visit our experts for activation."})
	}

	res.show('routes/admin/withdraw', {layout: "layouts/admin", title: "Error withdrawals", errors})
})

router.get('/users', chechIfIsAdmin, (req, res) => {
	supabase
	.from("Profile")
	.select("*")
	.then(({data: Profile, error}) => {
		res.show('routes/admin/users', {layout: "layouts/admin", title: "Users", users: Profile})
	})
	.catch(error => {
		res.show('routes/admin/users', {layout: "layouts/admin", title: "Users", errors: [{msg: "Error fetching users bro"}]})
	})
})

router.get('/update', chechIfIsAdmin, (req, res) => {
	res.show('routes/admin/update', {layout: "layouts/admin", title: "Update"})
})

router.post('/update', chechIfIsAdmin, (req, res) => {
	let {withdrawal, deposit, userid, earning, balance} = req.body;
	let errors = [];
	if(withdrawal == "" || deposit == "" || userid == "" || earning == "" || balance == "") {
		errors.push({msg: "All the fields are required"})
	}
	if(errors.length > 0) {
		res.show('routes/admin/update', {layout: "layouts/admin", title: "Update Error", errors, ...req.body})
 	} else {
 		supabase
		  .from('Profile')
		  .update({ withdrawals: withdrawal, deposit, balance, earning })
		  .eq('user_id', userid)
		  .then(({data, error}) => {
		  	if(error) {
		  		res.show('routes/admin/update', {layout: "layouts/admin", title: "Update Error", ...req.body, errors: [{msg: error.message.split(" ")[0] == "request" ? "Network Error Try Later!" : error.message}]})
		  	} else {
		  		res.show('routes/admin/update', {layout: "layouts/admin", title: "Update", success: "User Updated"})
		  	}
		  }).catch(e => {
		  	res.show('routes/admin/update', {layout: "layouts/admin", title: "Update Error", ...req.body, errors: [{msg: "Error in connection"}]})
		  })
 	}
})





router.get('/notifications', (req, res) => {
	supabase
	.from("Notifications")
	.select("*")
	.eq("user_id", supabase.auth.user().id)
	.then(({ data: Notifications, error }) => {
		console.log(Notifications)
		if(error) {
			res.show('routes/admin/notifications', {layout: "layouts/admin", title: "Notifications", errors: [{msg: error.message.split(" ")[0] == "request" ? "Network Error Try Later!" : error.message}]})
		} else {
			res.show('routes/admin/notifications', {layout: "layouts/admin", title: "Notifications", notifications: Notifications})
		}
	})
	.catch(e => {
		console.log(e)
	})
})

router.get('/notifications/:_id', (req, res) => {
	let {_id} = req.params;
	supabase
	.from("Notifications")
	.select("*")
	.eq("user_id", supabase.auth.user().id)
	.then(({ data: Notifications, error }) => {
		console.log(Notifications)
		if(error) {
			res.show('routes/admin/notifications', {layout: "layouts/admin", title: "Notifications", errors: [{msg: error.message.split(" ")[0] == "request" ? "Network Error Try Later!" : error.message}]})
		} else {
			let content = Notifications.filter(({id}) => id == _id.toString())
				console.log(1, content)
			res.show('routes/admin/notifications', {layout: "layouts/admin", title: "Notifications", notification: content})
		}
	})
	.catch(e => {
		console.log(e)
	})
})

const adminHandler = router;

module.exports = adminHandler;