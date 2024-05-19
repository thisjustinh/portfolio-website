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
							<img
								src="./ra.png"
								alt="Rockwell Automation"
								className="work-image"
							/>
							<div className="work-title">Rockwell Automation</div>
							<div className="work-subtitle">
								Data Scientist
							</div>
							<div className="work-duration">June 2023 - Present</div>
						</div>
						<div className="work">
							<img
								src="./umd.png"
								alt="UMD"
								className="work-image"
							/>
							<div className="work-title">REU-CAAR</div>
							<div className="work-subtitle">
								Undergraduate Researcher
							</div>
							<div className="work-duration">June 2022 - Aug 2022</div>
						</div>

						<div className="work">
							<img
								src="./psu.png"
								alt="PSU"
								className="work-image"
							/>
							<div className="work-title">PSU Statistical Learning and Data Mining Lab</div>
							<div className="work-subtitle">
								Undergraduate Researcher
							</div>
							<div className="work-duration">Dec 2020 - May 2023</div>
						</div>

						<div className="work">
							<img
								src="./sap.png"
								alt="SAP"
								className="work-image"
							/>
							<div className="work-title">SAP America</div>
							<div className="work-subtitle">
								Center of Excellence Intern
							</div>
							<div className="work-duration">June 2018 - Aug 2018</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
