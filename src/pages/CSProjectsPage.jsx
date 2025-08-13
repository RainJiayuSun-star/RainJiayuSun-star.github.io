import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

export default function CSProjectsPage() {
    return (
        <Container>
            <Row style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
                <Col xs={12} lg={6} xl={4} xxl={3} className="order-first order-lg-last">
                    <Image 
                        src="/rain_1.jpg"
                        style={{
                            width: '100%',
                            maxWidth: '450px',
                            height: '100%',
                            maxHeight: '450px',
                            aspectRatio: '1 / 1',
                            objectFit: 'cover',
                            borderRadius: '0.5rem',
                            //border: '3px solid #f8f9fa',
                            //boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                        }}    
                    />
                </Col>
                <Col xs={12} lg={6} xl={4} xxl={3} className="order-last order-lg-first">
                    <h1>CS Projects</h1>
                </Col>
            </Row>

        </Container>

    );
}