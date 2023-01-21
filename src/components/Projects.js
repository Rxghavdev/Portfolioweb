import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.png";
import projImg9 from "../assets/img/project-img9.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Projects = () => {

  const projects = [
    {
      title: "Edtech Startup",
      description: "Education & Development",
      imgUrl: projImg1,
    },
    {
      title: "Edtech Startup",
      description: "Education & Development",
      imgUrl: projImg2,
    },
    {
      title: "Edtech Startup",
      description: "Education & Development",
      imgUrl: projImg3,
    },
    
  ];
  const projects3 = [
    {
      title: "Hostel Management Platform",
      description: "Education & Development",
      imgUrl: projImg4,
    },
    {
      title: "Hostel Management Platform",
      description: "Education & Development",
      imgUrl: projImg5,
    },
    {
      title: "Hostel Management Platform",
      description: "Education & Development",
      imgUrl: projImg6,
    },
    
  ];
  const projects2 = [
    {
      title: "Blockchain based Verification System",
      description: "Blockhain & Development",
      imgUrl: projImg7,
    },
    {
      title: "Blockchain based Verification System",
      description: "Blockchain & Development",
      imgUrl: projImg8,
    },
    {
      title: "Blockchain based Verification System",
      description: "Blockchain & Development",
      imgUrl: projImg9,
    },
    
  ];
  

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>
                  These are my projects. I have worked on a lot of projects in my College and University life. I have also worked on some projects in my free time. I have also worked on some projects in my free time. I have also worked on some projects in my free time.
                </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Project 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Project 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Project 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      <p> <b>Uni-LInk  is The connection that every college needs.</b> We know there exist hundreds of clubs inside a University. 
                        So Every club has a different website or most of the clubs have no website at all. Hence our platform helps in linking them together, helping students save time and effort, and Uni-Link being one Stop Destination for all the Extra Co-curricular activities </p>
                     <p>Our platform Uni-Link  gives features for Students to connect with their Batchmates and Seniors so they can learn with each other and Grow together</p>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard

                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                        
                    <p><b>D auth is a Web3 KYC Verification System</b></p>
                    <p>The main concept on which D-Auth works is the zero knowledge proof. The idea behind the proof is to reveal as less as information possible to formulate a result in full confidence. Here, that information is user documents.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          projects3.map((project, index) => {
                            return (
                              <ProjectCard

                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      <p>Hostelite is Web Platform for all  day to day Hostel hastle in our colleges. Hostelite offers us hastle free and paperless Experience in managing our Hostel’s Health reports and Day to day tasks</p>
                      <p>Hostelite brings us the feature of reporting Health reports in Hostel in which a roommate can report health issue of the sick inmate or the sick person himself hence making Hostel Authorities alert ASAP so needful action could be taken and Health issues of students can be taken more seriously.Hostelite is also loaded with tons of features like Room cleaning,Leave Requests, Complaints etc</p>
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
