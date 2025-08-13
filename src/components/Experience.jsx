import react, { useState } from 'react'
import myExperience from './../data/myExperience.json';
import { Row, Col, Card } from 'react-bootstrap';
import "../style/hoverEffects.css"; // Import the hover effects CSS

function Experience() {
    const [experiences, setExperiences] = useState(myExperience);
    return (
        <>
        {
            experiences.map((experience) => (
                <Row key={experience.id} >
                    <Card className='shadow-colored'>
                        <Row>
                            <Col md={9}>
                                <div style={{ display: 'flex', alignItems: 'center'}}>
                                    {/* if experience.picture exist, use it. else, don't */}
                                    {experience.pic_addr && (
                                        <a href={experience.imgLink} target='_blank' rel="noopener noreferrer">
                                        <img 
                                            src={experience.pic_addr}
                                            className='shadow-lift'
                                            style={{
                                                width: '48px',
                                                height: '48px',
                                                objectFit: 'cover',
                                                borderRadius: '0.25rem',
                                                marginRight: '1rem'
                                            }}
                                        />
                                        </a>
                                    )}
                                    <h2 className='titlecss'>{experience.title}</h2>
                                </div>
                                <a href={experience.companyLink} target='_blank' rel="noopener noreferrer" className='companyLinkcss'>
                                    <h5>{experience.companyName}</h5>                            
                                </a>
                                <p>{experience.duration}</p>
                                <p>{experience.location}</p>
                                <div>
                                    {experience.description.map((point, i) => (
                                        <li key={i}>{point}</li>
                                    ))}
                                </div>
                            </Col>
                            {/* <Col md={3} className="d-flex align-items-center justify-content-end">
                            <img
                                src="/rain_1.jpg"
                                style={{
                                width: '250px',
                                height: '250px',
                                objectFit: 'cover',
                                borderRadius: '0.5rem'
                                }}
                                alt="Experience"
                            />
                            </Col> */}
                        </Row>
                    </Card>
                </Row>
            ))
        }
        </>
    );
}

export default Experience;