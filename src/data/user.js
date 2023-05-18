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
		title: "Data Scientist & Dev",
		description:
			"I am a developer of new technologies and data scientist looking for new problems to solve. I love applying different forms of machine learning and deep learning to create real-world solutions. My work has taught me a lot about using Python and PyTorch, R, database management, and other skills. I hope to apply these skills into other fields.",
	},

	about: {
		title: "I’m Justin Huang.",
		description:
			"I'm a CS and Statistics graduate from the Schreyer Honors College at Penn State. I've worked on a variety of projects hosted on GitHub over the years and I'm proud of the progress I've made. In particular, I'm familiar with convolutional and graph neural networks, fairness, data modeling, time series analysis, and more. Although I've worked with GANs before, I hope to learn more about generative AI, like LLMs and audio creation.",
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
				"Using an adversarial neural network, we can debias customer churn predictions with respect to age, proven with a 90% decreas in bias. Made with Python and PyTorch, with data from Kaggle.",
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
