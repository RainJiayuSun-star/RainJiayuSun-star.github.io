import react, { useState } from "react";
import { Card, Row, Col, Image } from "react-bootstrap";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import hoverEffect from "../style/hoverEffects.css";

function Contact() {
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText("jsun424@wisc.edu");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    }
    
    return (
        <Card style={{ border: "1px solid transparent"}}>
            <Card.Body>
                <Card.Title className="text-start">Let's Connect</Card.Title>
                <Card.Text>I'm always looking to work on cool projects. Regardless, feel free to contact me!</Card.Text>
                <Row className="align-items-center mt-3">
                    <Col xs="auto">
                        <a href="https://github.com/RainJiayuSun-star" target="_blank" rel="noopener noreferrer">
                            <FaGithub size={32} color="#1d2e3b" style={{ cursor: "pointer" }} />
                        </a>
                    </Col>

                    <Col xs="auto">
                        <a href="https://www.linkedin.com/in/rain-jy-sun/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={32} color="#1d2e3b" style={{ cursor: "pointer"}} />
                        </a>
                    </Col>
                    
                    <Col xs="auto">
                        <FaEnvelope size={32} color="#1d2e3b" style={{ cursor: "pointer" }} onClick={handleCopyEmail} />
                        {copied && (
                            //<span style={{ marginLeft: 8, color: "#1d2e3b", fontWeight: "bold"}} >Email address copied!</span>
                            <span
                                style={{
                                    //position: "absolute",
                                    bottom: "20%",
                                    left: "50%",
                                    background: "#fff",
                                    color: "#1d2e3b",
                                    padding: "4px 10px",
                                    borderRadius: "6px",
                                    boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
                                    fontWeight: "bold",
                                    whiteSpace: "nowrap",
                                    zIndex: 10,
                                }}>
                            Email address copied!
                            </span>
                        )}
                    
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}

export default Contact;