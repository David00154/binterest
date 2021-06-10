module.exports = function() {
	return {
		title: "BINTREST TRADE",
		description: "We are reliable, simple and innovative",
		copywright: "© Copyright 2021 BINTREST CRYPTO TRADE. All Rights Reserved",
		plugins: {
			css: [
			// "https://unpkg.com/aos@next/dist/aos.css",
			"aos/aos.css",
			// "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",
			"https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css",
			"/plugins/themify-icons/themify-icons.css",
			"/plugins/magnific-popup/magnific-popup.css",
			"/plugins/slick/slick.css",
			"https://fonts.gstatic.com",
			"https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap",
			"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css",
			"/css/style.css",
			// "https://unpkg.com/swiper/swiper-bundle.css",
			"/css/custom.css",

			],
			scripts: [
			// "/aos/aos.js",
			"/plugins/jquery/jquery.min.js",
			"/aos/aos.js",
			// "https://unpkg.com/jquery-aniview@1.0.1/dist/jquery.aniview.js",
			"/plugins/bootstrap/bootstrap.min.js",
			"/plugins/slick/slick.min.js",
			"/plugins/shuffle/shuffle.min.js",
			"/plugins/magnific-popup/jquery.magnific-popup.min.js",
			"/plugins/lazy-load/lozad.min.js",
			"/plugins/google-map/map.js",
			"https://cdnjs.cloudflare.com/ajax/libs/js-cookie/2.2.1/js.cookie.min.js",
			"/js/faker.js",
			// "https://unpkg.com/swiper/swiper-bundle.js",
			// "/aos/aos.js",
			"/js/script.js",
			]
		},
		clients: ["client-1", "client-2", "client-3", "client-4", "client-5", "client-6"],
		about: {
			title: "About Us",
			about_item: [
				{
					icon: "ti-file",
					image: "/images/trusted-icon.png",
					duration: "",
			    	title: "Trusted Company",
			   		content: "Trusted by thousand of people all over the world. Good reviews on all social channels"

				},
			  	{
			  		icon: "ti-lock",
			  		image: "/images/secured-icon.png",
			    	title: "Secured",
			    	duration: "150",
			    	content: "Secured blockchain transactions, Secured investors data and personal information. Top level ssl certification."
			  	},
			  	{
			  		icon: "ti-shield",
			  		duration: "300",
			  		image: "/images/privacy-icon.png",
			    	title: "Privacy",
			    	content: "All private information remains private. BINTEREST CRYPTO TRADE never shares Private information to any third party"
			  	}
			]
		},
		menus: {
			navbar: [
				{
					name: "Home",
					href: "/"
				},
				{
					name: "About",
					href: "#about"
				},
				{
					name: "Pricing",
					href: "#pricing"
				},
				{
					name: "Contact",
					href: "#contact"
				},
				{
					name: "Dashboard",
					href: "/admin"
				},
				{
					name: "Log in",
					href: "/signin"
				}
			]
		},
		banner: {
			bg_image_webp: "/images/backgrounds/hero-area.jpg",
			bg_image: "/images/backgrounds/hero-area.jpg",
			icon: "",
			title: `JOIN THOUSANDS WHO HAS STARTED TRADING WITH BINTREST CRYPTO TRADE`,
			content: "We are reliable, simple and innovative",
			button: {
				label: "Sign Up",
				link: "/signup"
			}
		},
		contact: {
			title: "Contact Us",
			subtitle: "",
			contact_list: [
				{
					icon: "ti-location-pin",
					info: "Mariola Ct, Algardi Ave"
				},
				{
					icon: "ti-mobile",
					info: "Phone: + (531) 333-2212"
				},
				{
					icon: "ti-email",
					info: "Email: bintrest-trade@gmail.com"
				}
			],
			contact_form: {
				form_action: "#",
				name: "Your Name",
				email: "Your Email",
				subject: "Subject",
				message: "Message",
				submit: "Submit"
			}
		},
		feature: {
			enable: true,
			image: "/images/about/about-business-man.jpg",
			image_webp: "/images/about/about-business-man.webp",
			title: "We’re A Digital Currency Trading Company.",
			content: "Bintrest is a trading company focused on customer satisfaction both online and offline to ensure you make trades with the least margin for error.",
			feature_item: [
				{
					 // # feature item loop
			    	title: "you can exchange your bitcoin by eth.",
			    	icon: "ti-arrow-circle-left",
			    	content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus consectetur dolores repellendus eos saepe"
				},   
			      // # feature item loop
			    {
			    	title: "best profite bitco.exge for all over the world.",
			    	icon: "ti-arrow-circle-left",
			    	content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus consectetur dolores repellendus eos saepe"
			    },

			      // # feature item loop
			    {
			    	title: "we take a big missoin for growth business.",
			    	icon: "ti-arrow-circle-left",
			    	content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus consectetur dolores repellendus eos saepe"
			    },  
			      // # feature item loop
		      	{
		      		title: "Easy Customization",
			    	icon: "ti-arrow-circle-left",
			    	content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus consectetur dolores repellendus eos saepe"
		      	}
			]
		},
		testimonial: {
			enable: true,
			bg_image: "/images/backgrounds/bg-testimonial.jpg",
			bg_image_webp: "/images/backgrounds/bg-testimonial.webp",
			testimonial_item: [
				{
					name: "Ronne Galle",
				    image: "https://images.unsplash.com/photo-1572561300743-2dd367ed0c9a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=300",
				    image_webp: "/images/client/client-1.webp",
				    date: "Dec 26, 2018",
				    content: `“ Within one week of joining bintrest-trade, I profited enough
                  to pay two years worth of membership fees ”`
				},
				{
					name: "Missy Limana",
				    image: "https://images.unsplash.com/photo-1588361035994-295e21daa761?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=301&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=301",
				    image_webp: "/images/client/client-2.webp",
				    date: "Dec 26, 2018",
				    content: ` “ Great platform. Have doubled my account since joining. 12k
                  to 24k. And now I plan on scaling and turning this into 100k
                  in the next 2months. Excited to see where bintrest-trade takes
                  us next. ”`
				},
				{
					name: "Martha Brown",
					image: "https://images.unsplash.com/photo-1575377222312-dd1a63a51638?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=302&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=302",
					image_webp: "/images/client/client-1.webp",
					date: "Dec 26, 2018",
					content: `“ I invested in crypto because I was following what
                  bintrest-trade was saying and I was about to pull out all my
                  money but i felt confident keep staying in because i have a
                  proffessional guiding me so I made $50, 00in two months thanks
                  to bintrest-trade I really needed that ”`
				},
				{
					name: "Hanna Lisem",
					image: "https://images.unsplash.com/photo-1549836938-d278c5d46d20?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=303&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=303",
					image_webp: "/images/client/client-1.webp",
					date: "Dec 26, 2018",
					content: `“ My mind in blown away from the value in this trade group.
                  It's helped me make way less risky decisions thay by myself I
                  would have been making. Highly recomended joining if you
                  wanted to lower your risk if you are investing in crypto. ”`
				}
			]
		},
		socials: [
			{
				icon: "ti-facebook",
				link: "#"
			},
			{
				icon: "ti-twitter-alt",
				link: "#"
			},
			{
				icon: "ti-instagram",
				link: "#"
			},
			{
				icon: "ti-linkedin",
				link: "#"
			}
		],
		pricing: {
			title: "Our Plans",
			pricing_table: [
				{
					name: "KILO",
					price: "$200",
					unit: "",
					services: [
						`BITCOIN MINIG / TRADING`, 
						`BONUS 5%`
					],
					button: {
						label: "Sign Up",
						link: "/signup"
					}
				},
				{
					name: "MEGA",
					price: "$500",
					unit: "",
					services: [
						`BITCOIN MINIG / TRADING`,
						`BONUS 10%`
					],
					button: {
						label: "Sign Up",
						link: "/signup"
					}
				},
				{
					name: "GIGA",
					price: "$1,000",
					unit: "",
					services: [
						`BITCOIN MINIG / TRADING`,
						`BONUS 15%`
					],
					button: {
						label: "Sign Up",
						link: "/signup"
					}
				}
			]
		}
	}
}