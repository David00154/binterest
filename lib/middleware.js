const supabase = require("../config/database");
const user = async () => {
		if(supabase.auth.user() !== null) {
			// console.log(1, supabase.auth.user())
			let { data: Profile, error } = await supabase
			  .from('Profile')
			  .select('*')
			  .eq("user_id", supabase.auth.user().id)
			  console.log(Profile[0])
			  let profile = Profile[0];
			  	if(error) {
			  		console.log(error)
			  		return {};
			  	}
			  	return profile
				} else {
					return {}
				}
	}
	const showMiddleWare = async (req, res, next) => {
		// console.log(req.flash())
	res.show = async (path, options) => {
		res.render(path, {
			layout: options.layout, 
			params: {
				...options, 
				user: await user(), 
				success_msg: req.flash().success_msg, error_msg: req.flash().error_msg
			}, 
			siteData: {
				...require('../site.config.js')()
			}
		})
	}
	next()

}



module.exports = showMiddleWare;