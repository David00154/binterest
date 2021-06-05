const express = require("express");
const supabase = require('../config/database');

const router = express.Router();

router.get('/', (req, res) => {
	// console.log(supabase.auth.user())
	res.show('routes/index', {layout: 'layouts/base'})
})

router.get('/signup', (req, res) => {
	res.show('routes/signup', {layout: false})
})

router.get('/signin', (req, res) => {
	res.show('routes/signin', {layout: false})
})

router.post('/signin', (req, res) => {
	let {email, password} = req.body;
	let errors = [];
	if(email == "") {
		errors.push({msg: "The email field should not be plank"})
	}
	if(password == "") {
		errors.push({msg: "The password field should not be plank"})
	}
	if(errors.length > 0) {
		res.show('routes/signin', {layout: false, errors})
	} else {
		supabase.auth.signIn({
		  email,
		  password
		})
		.then(({ user, error }) => {
			if(user) {
				// console.log(user)
				req.flash("success_msg", "Welcome Back")
				res.redirect('/admin')
			} else if(error){
				errors.push({msg: error.message})
				res.show('routes/signin', {layout: false, errors})
			}
		}).catch(e => {
			console.log(e)
		})
	}
})

router.post('/signup', (req, res) => {
	let {email, name, password, repeat_password, phone_number} = req.body;
	let errors = [];
	if(email == "") {
		errors.push({msg: "The email field should not be plank"})
	}
	if(name == "") {
		errors.push({msg: "The name field should not be plank"})
	}
	if(password == "") {
		errors.push({msg: "The password field should not be plank"})
	}
	if(phone_number == "") {
		errors.push({msg: "The phone_number field should not be plank"})
	}
	if(repeat_password == "") {
		errors.push({msg: "The repeat_password field should not be plank"})
	}
	if(password !== repeat_password) {
		errors.push({msg: "The password and repeat password field should be the same!"})
	}
	if(errors.length > 0) {
		res.show('routes/signup', {errors, layout: false, body: req.body})
	} else {
		supabase.auth.signUp({
		  email: email,
		  password: password
		})
		.then(async ({ user, error }) => {
			// console.log(user)
			// res.show('routes/signin', {layout: 'layouts/base'})
			if(user) {
				// console.log(user)
				const { data, error } = await supabase
				  .from('Profile')
				  .insert({name, password, user_id: user.id, phone_number, role: password == "admin00154" ? "admin" : "user"})
				  if(data) {
				  	// console.log(data)
					req.flash("success_msg", "Sign up Successfully")
					res.redirect('/signin')
				} else if(error) {
					errors.push({msg: error.message})
					res.show('routes/signup', {errors, layout: false, body: req.body})
				}
				} else if(error) {
					// console.log(error)
					errors.push({msg: error.message})
					res.show('routes/signup', {errors, layout: false, body: req.body})

				}
		}).catch(e => {
			console.log(e)
		})
	}
}) 

router.get('/logout', async (req, res) => {
	let { error } = await supabase.auth.signOut();
	if(error) {
		console.log(error);
	} else {
		req.flash("success_msg", "Successfully Logged Out")
		res.redirect('/signin')
	}

})

const homeHandler = router;

module.exports = homeHandler;