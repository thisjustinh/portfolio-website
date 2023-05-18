import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							{/* <img
								src="./facebook.png"
								alt="facebook"
								className="work-image"
							/> */}
							<div className="work-title">REU-CAAR</div>
							<div className="work-subtitle">
								Undergraduate Researcher
							</div>
							<div className="work-duration">June 2022 - Aug 2022</div>
						</div>

						<div className="work">
							{/* <img
								src="./twitter.png"
								alt="twitter"
								className="work-image"
							/> */}
							<div className="work-title">PSU Statistical Learning and Data Mining Lab</div>
							<div className="work-subtitle">
								Undergraduate Researcher
							</div>
							<div className="work-duration">Dec 2020 - May 2023</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
