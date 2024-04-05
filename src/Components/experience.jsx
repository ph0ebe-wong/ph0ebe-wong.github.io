import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from "@mui/icons-material/Work";

const Experience = () =>{


	return (
		<>
            <div className="div-container" style={{alignItems: 'start', height: '100%'}}>
                <div class='intro-container' style={{alignItems: 'start', flexDirection: 'column'}}>
					<div className="header-container" style={{marginBottom: 70}}>
                        <h2 className='header-title'>Where I've worked</h2>
                        <div className='header-divider'/>
                    </div>

					<VerticalTimeline >
						<VerticalTimelineElement
							className="vertical-timeline-element--work"
							contentStyle={{ background: '#468B98', color: 'rgba(255,255,255,0.7)' }}
							iconStyle={{ background: '#29464B', color: '#fff' }}
							contentArrowStyle={{ borderRight: '7px solid  #468B98' }}
							date="June 2019"
							icon={<WorkIcon />}
						>
							<h3 className="vertical-timeline-element-title">Animal World Veterinary Clinic</h3>
							<h4 className="vertical-timeline-element-subtitle">Temporary Veterinary Clinic Support Staff</h4>
							<p>
								I gained hands-on experience in various aspects of clinic operations, encompassing reception, pharmacy management, patient consultation, and hospital room procedures.				
							</p>
						</VerticalTimelineElement>

						<VerticalTimelineElement
							className="vertical-timeline-element--education"
							contentStyle={{ background: '#468B98', color: 'rgba(255,255,255,0.7)' }}
							iconStyle={{ background: '#29464B', color: '#fff' }}
							contentArrowStyle={{ borderRight: '7px solid  #468B98' }}
							date="Jan 2017 - Dec 2020"
							icon={<SchoolIcon />}
						>
							<h3 className="vertical-timeline-element-title">Cambridge O Levels</h3>
							<h4 className="vertical-timeline-element-subtitle">Singapore, Singapore</h4>
						</VerticalTimelineElement>
							
						<VerticalTimelineElement
							className="vertical-timeline-element--work"
							contentStyle={{ background: '#468B98', color: 'rgba(255,255,255,0.7)' }}
							iconStyle={{ background: '#29464B', color: '#fff' }}
							contentArrowStyle={{ borderRight: '7px solid  #468B98' }}
							date="Aug 2022 - Sept 2022"
							icon={<WorkIcon />}
						>
							<h3 className="vertical-timeline-element-title">Academy of Medicine Singapore</h3>
							<h4 className="vertical-timeline-element-subtitle">Temporary Administrative Support Staff</h4>
							<p>
								I actively contributed to event success, assisting with various tasks and managing administrative duties. My responsibilities included making key calls and handling essential paperwork, ensuring efficient coordination and organization.				
							</p>
						</VerticalTimelineElement>
							
						<VerticalTimelineElement
							className="vertical-timeline-element--work"
							contentStyle={{ background: '#468B98', color: 'rgba(255,255,255,0.7)' }}
							iconStyle={{ background: '#29464B', color: '#fff' }}
							contentArrowStyle={{ borderRight: '7px solid  #468B98' }}
							date="Nov 2020 - Dec 2023"
							icon={<WorkIcon />}
						>
							<h3 className="vertical-timeline-element-title">Hot Palette Holdings Co. Ltd</h3>
							<h4 className="vertical-timeline-element-subtitle">Service Crew</h4>
							<p>
								In a fast-paced environment, I provided excellent customer service, efficiently managing food and beverage services and order coordination. I ensured accuracy in financial transactions and maintained a tidy workstation, enhancing the overall customer experience.				
							</p>
						</VerticalTimelineElement>

						<VerticalTimelineElement
							className="vertical-timeline-element--work"
							contentStyle={{ background: '#468B98', color: 'rgba(255,255,255,0.7)' }}
							iconStyle={{ background: '#29464B', color: '#fff' }}
							contentArrowStyle={{ borderRight: '7px solid  #468B98' }}
							date="Sept 2023 - Present"
							icon={<WorkIcon />}
						>
							<h3 className="vertical-timeline-element-title">NUS Business Analytics Centre</h3>
							<h4 className="vertical-timeline-element-subtitle">Business Analytics Intern</h4>
							<p>
								I developed a Web3 Data Marketplace, using React.js and AWS to build a full-stack application with a focus on security. My efforts were centered on ensuring data integrity and user trust, emphasizing my dedication to creating dependable software solutions.				
							</p>
						</VerticalTimelineElement>
							
						<VerticalTimelineElement
							className="vertical-timeline-element--education"
							contentStyle={{ background: '#468B98', color: 'rgba(255,255,255,0.7)' }}
							iconStyle={{ background: '#29464B', color: '#fff' }}
							contentArrowStyle={{ borderRight: '7px solid  #468B98' }}
							date="April 2021 - May 2024"
							icon={<SchoolIcon />}
							
						>
							<h3 className="vertical-timeline-element-title">Diploma in Cybersecurity and Digital Forensic</h3>
							<h4 className="vertical-timeline-element-subtitle">Nanyang Polytechnic</h4>

						</VerticalTimelineElement>
					</VerticalTimeline>	

					<div className='extension-container'/>
                </div>
            </div>
		</>

	)
	}
	export default Experience 