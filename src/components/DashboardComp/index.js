import React from "react";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './dashBoardComp.scss'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import ProductCardIcon from "../../assets/icon/ProductCardIcon";
import CompanyProductIcon from "../../assets/icon/CompanyProductIcon";
const DashboardComp = () => {
    const options = {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Cheapest and Costliest for the products'
        },
        yAxis: {
            min: 0,
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 600
                },
                chartOptions: {
                    chart: {
                        height: 250
                    },
                    subtitle: {
                        text: null
                    },
                    navigator: {
                        enabled: false
                    }
                }
            }]
        },
        series: [{
            name: 'Costliest',
            data: [1, 2, 3, 4, 5]
        },
        {
            name: 'Cheapest',
            data: [1, 2, 3, 4, 5]
        }]
    };
    return (
        <>
            <div className="dashboard-main-comp">
                <Row>
                    <Col sm={6}>
                        <Row>
                            <Col className="col-12 col-lg-6 responsive-card">
                                <Card>
                                    <Card.Body>
                                        <Card.Title>Product <div className="card-icon-bg"><ProductCardIcon /></div></Card.Title>
                                        <Card.Subtitle>Brands <span>20 Products</span></Card.Subtitle>
                                        <Card.Subtitle>Category <span>20 Products</span></Card.Subtitle>
                                        <Card.Subtitle>Make <span>20 Products</span></Card.Subtitle>
                                        <hr style={{ borderColor: '#E8EAEE' }} />
                                        <Card.Subtitle>Total Product <span>20 Products</span></Card.Subtitle>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <Card.Body>
                                        <Card.Title>Company <div className="card-icon-bg"><CompanyProductIcon /></div></Card.Title>
                                        <Card.Subtitle className="mb-4 pt-3">In Stocks <span>20 Products</span></Card.Subtitle>
                                        <Card.Subtitle>Out Of Stocks <span>20 Products</span></Card.Subtitle>
                                        <hr style={{ borderColor: '#E8EAEE' }} />
                                        <Card.Subtitle>Total Product <span>20 Products</span></Card.Subtitle>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <Row className="position-sec-icon">
                            <Col>
                                <Card className="sec-main-card-one">
                                    <Card.Body>
                                        <Card.Title>Position <div className="card-title-more"><span>(+5) more</span> in 2024</div></Card.Title>
                                        <hr style={{ borderColor: '#E8EAEE' }} />
                                        <HighchartsReact highcharts={Highcharts} options={options} />
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                    <Col className="col-sec-contain " >
                        <Card className="sec-main-card-one">
                            <Card.Body>
                                <Card.Title>Competitor <div className="card-title-more"><span>(+5) more</span> in 2024</div></Card.Title>
                                <hr style={{ borderColor: '#E8EAEE' }} />
                            </Card.Body>
                        </Card>
                        <Row className=" pb-4">
                            <Col lg={6} >
                                <Card className="sec-main-card">
                                    <Card.Body>
                                        <Card.Title className="competitor-title">Injured gadgets <div className="card-icon-bg"><ProductCardIcon /></div></Card.Title>
                                        <Card.Subtitle className="">In Stocks <span>20 Products</span></Card.Subtitle>
                                        <Card.Subtitle>Out Of Stocks <span>20 Products</span></Card.Subtitle>
                                        <hr style={{ borderColor: '#E8EAEE' }} />
                                        <Card.Subtitle>Total Product <span>20 Products</span></Card.Subtitle>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={6}>
                                <Card className="sec-main-card">
                                    <Card.Body>
                                        <Card.Title className="competitor-title">Mobiles matrix <div className="card-icon-bg"><ProductCardIcon /></div></Card.Title>
                                        <Card.Subtitle className=" ">In Stocks <span>20 Products</span></Card.Subtitle>
                                        <Card.Subtitle>Out Of Stocks <span>20 Products</span></Card.Subtitle>
                                        <hr style={{ borderColor: '#E8EAEE' }} />
                                        <Card.Subtitle>Total Product <span>20 Products</span></Card.Subtitle>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={6} className="pt-4">
                                <Card className="sec-main-card">
                                    <Card.Body>
                                        <Card.Title className="competitor-title">Gadget fix <div className="card-icon-bg"><ProductCardIcon /></div></Card.Title>
                                        <Card.Subtitle className=" ">In Stocks <span>20 Products</span></Card.Subtitle>
                                        <Card.Subtitle>Out Of Stocks <span>20 Products</span></Card.Subtitle>
                                        <hr style={{ borderColor: '#E8EAEE' }} />
                                        <Card.Subtitle>Total Product <span>20 Products</span></Card.Subtitle>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default DashboardComp