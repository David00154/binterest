const supabase = require('../config/database');
module.exports = (req, res, next) => {
	if(supabase.auth.user() !== null) {
		return next();
	} else {
		req.flash("error_msg", "Please log in to view this resource..");
    	res.redirect("/signin");
	}
}