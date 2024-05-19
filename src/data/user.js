const INFO = {
	main: {
		title: "Justin Huang",
		name: "Justin Huang",
		email: "justinhuang496@gmail.com",
		logo: "../logo.png",
	},

	socials: {
		// twitter: "https://twitter.com/",
		github: "https://github.com/thisjustinh",
		linkedin: "https://linkedin.com/in/justinhuang496",
		// instagram: "https://instagram.com/",
		// stackoverflow: "https://stackoverflow.com/",
		// facebook: "https://facebook.com/",
	},

	homepage: {
		title: "ML Engineer",
		description:
			"I am a machine learning engineer working on incorporating new technologies into business use cases. Currently at Rockwell Automation, I am a data scientist: in the industrial automation space, we work a lot with signals and hardware lifecycles, so creating AI/ML tools that can leverage predictive maintenance and streamline workflows presents lots of value. In my previous experience, I have worked a lot with machine learning on the side and in research, mostly in the fields of fairness, CV, and graphs. Usually I like Python and PyTorch for creating machine learning solutions, use R for statistical work, and otherwise focus on Java, C, and SQL for other cases.",
	},

	about: {
		title: "I’m Justin Huang.",
		description:
			"I am a machine learning engineer working on incorporating new technologies into business use cases. Currently at Rockwell Automation, I am a data scientist: in the industrial automation space, we work a lot with signals and hardware lifecycles, so creating AI/ML tools that can leverage predictive maintenance and streamline workflows presents lots of value. In my previous experience, I have worked a lot with machine learning on the side and in research, mostly in the fields of fairness, CV, and graphs. Usually I like Python and PyTorch for creating machine learning solutions, use R for statistical work, and otherwise focus on Java, C, and SQL for other cases.",
	},

	articles: {
		title: "I'm passionate about pushing the boundaries of what's possible and inspiring the next generation of innovators.",
		description:
			"Chronological collection of my long-form thoughts on programming, leadership, product design, and more.",
	},

	projects: [
		{
			title: "FairChurn",
			description:
				"Using an adversarial neural network, we can debias customer churn predictions with respect to age, proven with a 90% decrease in bias. Made with Python and PyTorch, with data from Kaggle.",
			logo: "https://raw.githubusercontent.com/thisjustinh/FairChurn/main/FairChurn_Logo.png",
			linkText: "View Project",
			link: "https://github.com/thisjustinh/FairChurn",
		},

		{
			title: "GM & SAE Autodrive Challenge II Object Detection",
			description:
				"Using YOLOv4-tiny, we implemented object detection for autonomous vehicles in Python using OpenVINO and OpenCV.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
			linkText: "Internal code can't be accessed",
			// link: "https://github.com",
		},

		{
			title: "ESGBoost",
			description:
				"For HackMIT 2021, we created a dashboard delivering S&P 500 sustainability information sourced from the EPA and created clusters and an XGBoost model to determine company performance against SPY.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/r/r.png",
			linkText: "View Project",
			link: "https://superbia-vice.shinyapps.io/ESGBoost/",
		},

		{
			title: "rsPCA-AManPG",
			description:
				"Matrix approximation using singular value decomposition can be used with the AManPG algorithm to induce closed-form subproblem solutions and preserve a guarantee of convergence, thus creating a cleaner algorithm for sparse PCA.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/r/r.png", 
			linkText: "View Project",
			link: "https://github.com/thisjustinh/rsPCA-AManPG"
		},

		{
			title: "AManPG Packages",
			description:
				"For one of my REUs, I worked on creating Python and R packages for a sparse PCA algorithm with guaranteed convergence, AManPG. The algorithm works quickly and can work on any k-rank sparse PCA (or CCA) problem.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
			linkText: "View Project",
			link: "https://github.com/thisjustinh/AManPG",
		},

		{
			title: "ARKanine",
			description:
				"By using compositional PCA on ARK Invest ETF holdings, we can analyze which holdings contain the largest amount of variance, and see how that tracks compared to ETF trade prices.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/r/r.png",
			linkText: "View Project",
			link: "https://superbia-vice.shinyapps.io/arkanine/",
		},
	],
};

export default INFO;
