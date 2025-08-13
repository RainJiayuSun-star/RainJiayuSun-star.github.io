import react, {useState} from 'react';
import { Card, Row, Col, Image, Container } from 'react-bootstrap';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import myProfile from '../data/myProfile.json';

function AboutMe() {
  //   return (
  //   <Card className="shadow-sm border-0">
  //     <Card.Body>
  //       <Row>
  //         <Col>
  //           <Image 
  //             src="../../public/rain_1.jpg" // Replace with your image path
  //             roundedCircle
  //             fluid
  //             style={{
  //               width: '300px',
  //               height: '300px',
  //               objectFit: 'cover',
  //               borderRadius: '0.5rem',
  //               border: '3px solid #f8f9fa',
  //               boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
  //             }}
  //           />
  //         </Col>
          
  //         <Col>
  //           <h2 className="mb-1">Jiayu (Rain) Sun</h2>
  //           <p className="lead">{myProfile.About}</p>
  //           <p className="text-muted">I like to code and build things.</p>
  //         </Col>
  //       </Row>
  //       <Row>
  //         <Col>Test1</Col>
  //         <Col>Test2</Col>
  //       </Row>
  //     </Card.Body>
  //   </Card>
  // );

  //const [activeTab, setActiveTab] = useState('languages');

  const tabContent = {
    languages: ['Java', 'Python', 'C', 'Javascript', 'SQL'],
    tools: ['Docker', 'MySQL', 'Google Cloud'],
    frameworks: ['React', "Node.js", "Next.js"]
  };

  function showTabs(){
    return (
      <Tabs>
        <TabList>
          <Tab>Language</Tab>
          <Tab>Tools</Tab>
          <Tab>Frameworks</Tab>
        </TabList>
        
        <div style={{ minHeight: "120px" }}>
        <TabPanel>
          <div>
            {tabContent.languages.map((skill, index) => (
              <div className="skill-item" key={`language-${index}`}>{skill}</div>
            ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div>
            {tabContent.tools.map((skill, index) => (
              <div className="skill-item" key={`tool-${index}`}>{skill}</div>
            ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div>
            {tabContent.frameworks.map((skill, index) => (
              <div className="skill-item" key={`framework-${index}`}>{skill}</div>
            ))}
          </div>
        </TabPanel>
        </div>
      </Tabs>
    );
  }

  return (
    <div>
      {/* section 1: image + intro */}
      <div style={{
        display:"flex",
        //alignItems: "center",
        alignItems: "flex-start",
        gap: "4rem",
        position: "relative"
      }}>
        {/* left side */}
        <div style={{flexShrink: 0}}>
          <img 
            src="/rain_1.jpg" // Replace with your image path
            style={{
              width: '450px',
              height: '450px',
              objectFit: 'cover',
              borderRadius: '0.5rem',
              //border: '3px solid #f8f9fa',
              //boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
            }}
          />
        </div> 

        {/* right side */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          width: "100%"
        }}>
          <div style={{
            marginBottom: "2rem"}}>
            <h1 style={{ marginTop: 0}}>Jiayu (Rain) Sun</h1>
            <h3 style={{
              fontWeight: 700,
              fontSize: '1.2 rem',
              lineHeight: 1.1,
              marginTop: "1.5rem",
              marginBottom: "1.5rem",
              color: "#1d2e3b"
            }}>3rd year Computer Science major @UW-Madison</h3>
            <p>{myProfile.Me}</p>
            <p>{myProfile.More}</p>
            {showTabs()}
          </div>
        </div>
      </div>
      {/* section 2: experience + education */}
      <div><p></p></div>
    </div>
  );
}

export default AboutMe;