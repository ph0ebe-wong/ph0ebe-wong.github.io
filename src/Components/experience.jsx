import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from "@mui/icons-material/Work";

const Experience = () =>{


	return (
		<div style={{}}>
			<VerticalTimeline>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
					contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
					date="June 2019"
					iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
					icon={<WorkIcon />}
				>
					<h3 className="vertical-timeline-element-title">Temporary Veterinary Clinic Support Staff</h3>
					<h4 className="vertical-timeline-element-subtitle">Animal World Veterinary Clinic</h4>
					<p>
						I gained hands-on experience in various aspects of clinic operations, encompassing reception, pharmacy management, patient consultation, and hospital room procedures.				
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--education"
					contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
					contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
					date="Jan 2017 - Dec 2020"
					iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
					icon={<SchoolIcon />}
				>
					<h3 className="vertical-timeline-element-title">Cambridge O Levels</h3>
					<h4 className="vertical-timeline-element-subtitle">Singapore, Singapore</h4>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
					contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
					date="Aug 2022 - Sept 2022"
					iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
					icon={<WorkIcon />}
				>
					<h3 className="vertical-timeline-element-title">Temporary Administrative Support Staff</h3>
					<h4 className="vertical-timeline-element-subtitle">Academy of Medicine</h4>
					<p>
						In my role, I actively contributed to event success, assisting with various tasks and managing administrative duties. My responsibilities included making key calls and handling essential paperwork, ensuring efficient coordination and organization.				
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
					contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
					date="Nov 2020 - Dec 2023"
					iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
					icon={<WorkIcon />}
				>
					<h3 className="vertical-timeline-element-title">Service Crew</h3>
					<h4 className="vertical-timeline-element-subtitle">Hot Palette Holdings co. ltd</h4>
					<p>
						In a fast-paced environment, I provided excellent customer service, efficiently managing food and beverage services and order coordination. I ensured accuracy in financial transactions and maintained a tidy workstation, enhancing the overall customer experience.				
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
					contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
					date="Sept 2023 - Present"
					iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
					icon={<WorkIcon />}
				>
					<h3 className="vertical-timeline-element-title">Business Analytics Intern</h3>
					<h4 className="vertical-timeline-element-subtitle">NUS Business Analytics Centre</h4>
					<p>
						I developed a Web3 Data Marketplace, using React.js and AWS to build a full-stack application with a focus on security. My efforts were centered on ensuring data integrity and user trust, emphasizing my dedication to creating dependable software solutions				
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--education"
					contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
					contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
					date="April 2021 - May 2024"
					iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
					icon={<SchoolIcon />}
				>
					<h3 className="vertical-timeline-element-title">Diploma in Cybersecurity and Digital Forensic</h3>
					<h4 className="vertical-timeline-element-subtitle">Nanyang Polytechnic</h4>
					{/* <p>
						Obtained Directors List for Semester AY
					</p> */}
				</VerticalTimelineElement>
			</VerticalTimeline>	
		</div>

	)
	}
	export default Experience 