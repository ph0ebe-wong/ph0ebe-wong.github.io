import './Styling/projects.css';

const projectData = [
  {
    backgroundImage: "url('https://d21950x0o1sh55.cloudfront.net/assets/home/game-0e307d71d9838e8fbe4927b551f119bcd9e4748f2c2b70c7b81846702996ef94.jpg')",
    title: "SUPERMARKET",
    description: ["A e-commerce supermarket website allows user to browse, add and purchase grocery items with PayPal, and includes a membership point system through purchases or an in-app card game."]
  },
  {
    backgroundImage: "url('https://d21950x0o1sh55.cloudfront.net/uploads/inside_exclusif/picture/26/desktop_VALERIAN_BNP_68.jpg')",
    title: "FOOD COURT",
    description: ["An online food delivery service enables users to order and savor local cuisine, with an emphasis on ensuring website security."]
  },
  {
    backgroundImage: "url('https://d21950x0o1sh55.cloudfront.net/uploads/inside_exclusif/picture/50/desktop_guided_tour_2.jpg')",
    title: "MATCHABLE",
    description: ["An online dating website allows user to conveniently connect with potential partners regardless of distance, with emphasis on ensuring data and website security"]
  },
  {
    backgroundImage: "url('https://d21950x0o1sh55.cloudfront.net/uploads/inside_exclusif/picture/6/desktop_VALERIAN_BNP_02.jpg')",
    title: "SIMULATION",
    description: ["This project simulates the SolarWinds cyberattack by recreating its vulnerabilities in VMWare environments, implementing robust defence, monitoring, and backup systems to enhance security and ensure swift recovery from potential breaches"]
  },
  {
    backgroundImage: "url('https://d21950x0o1sh55.cloudfront.net/uploads/inside_exclusif/picture/6/desktop_VALERIAN_BNP_02.jpg')",
    title: "COGNIDEX",
    description: ["A decentralized application (DApp) that allows users to create, buy, sell data. The DApp is made using React.js, and AWS"]
  }

];

const Projects = () => {
  return (
    <div className="wrapper" style={{ background: 'black', width: '100%' }}>
      <h1>My Projects</h1>
      {projectData.map((project, index) => (
        <div key={index} className="card" style={{ backgroundImage: project.backgroundImage }}>
          <div className="card__content">
            <div className="card__content--description">
              <h3 className="roll-up">
                {project.title.split('').map((char, index) => (
                  <span key={index}>
                    <span>{char}</span><span>{char}</span>
                  </span>
                ))}
              </h3>
              <p className="text-reveal">
                <span>
                  {project.description.map((line, index) => (
                      <span key={index}>{line}</span>
                  ))}
                </span>
                <span>
                  {project.description.map((line, index) => (
                      <span key={index}>{line}</span>
                  ))}
                </span>

              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
