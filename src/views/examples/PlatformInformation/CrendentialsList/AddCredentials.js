import React from 'react'
import {
    Button, Card, CardBody, FormGroup, Form, Input, Container, Row, Col,
} from "reactstrap";
import Header from 'components/Headers/Header';
export default function AddCredentials() {
    return (
        <>
            <Header />
            <Container className="mt-5" fluid>
                <Row>
                    <Col className="order-xl-1" xl="12">
                        <Card className="bg-secondary shadow">
                            <CardBody>
                                <Form>
                                    <div className="pl-lg-4">
                                        <Row>
                                            <Col lg="6">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-country"
                                                    >
                                                        Organization Name
                                                    </label>
                                                    <Input type="select" className='text-dark' name="select" id="exampleSelect">
                                                        <option value="" selected disabled>Select Data Type</option>
                                                        <option value="number" className='text-dark'>eoxys</option>
                                                        <option value="email" className='text-dark'>eoxys</option>
                                                        <option value="text" className='text-dark'>eoxys</option>
                                                    </Input>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col lg="6">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-city"
                                                    >
                                                        UserName
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        id="input-city"
                                                        placeholder="enter  UserName"
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col lg="6">
                                                <FormGroup     >
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-city"
                                                    >
                                                        Password
                                                    </label>
                                                    <div class="input-group mb-3">
                                                        <input type="password" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text" id="basic-addon1">  <i class="fa fa-eye " aria-hidden="true"></i>  </span>
                                                        </div>
                                                    </div>
                                                    <div className='float-right mt-3'>
                                                        <Button
                                                            color="success"
                                                            size="sm"
                                                        >
                                                            Submit
                                                        </Button>
                                                        <Button
                                                            color="danger"
                                                            size="sm"
                                                        >
                                                            Cancel
                                                        </Button>
                                                    </div>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                    </div>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
