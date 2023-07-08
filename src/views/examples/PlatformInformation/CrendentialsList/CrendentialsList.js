
import Header from "components/Headers/Header.js";
import React, { useState, useEffect, useRef } from 'react'
import {
  Card, CardHeader, Container, Row, Col, Button, Table, Form, FormGroup, InputGroupAddon, InputGroupText, Input, InputGroup,
} from "reactstrap";
import { Link } from 'react-router-dom';
export default function CrendentialsList() {
  return (
    <>
      <Header />
      <Container className="mt--6" fluid>
        <Row>
        </Row>
        <Row className="mt-5">
          <Col className="mb-5 mb-xl-0" xl="12">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <Form className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
                      <FormGroup className="mb-0">
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="fas fa-search text-dark" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input placeholder="Search" type="text" className="text-dark" />
                        </InputGroup>
                      </FormGroup>
                    </Form>
                  </div>
                  <div className="col text-right">
                    <Link to="/admin/AddCredentials" >
                      <Button
                        color="primary"
                        size="sm"
                      >Add Crendentials
                      </Button>
                    </Link>
                  </div>
                </Row>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col" className="text-dark"><b>S.No</b></th>
                    <th scope="col" className="text-dark"><b>Organization Name</b></th>
                    <th scope="col" className="text-dark"><b>User Name</b></th>
                    <th scope="col" className="text-dark"><b>Platform</b></th>
                    <th scope="col" className="text-dark"><b>Password</b></th>
                    <th scope="col" className="text-dark"><b>Action</b></th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-dark text-justify">
                    <th scope="row" >1</th>
                    <td>Eoxys</td>
                    <td>xxx</td>
                    <td>Jio</td>
                    <td>21435 <i class="fa fa-eye ml-3" aria-hidden="true"></i></td>
                    <td>
                      <Link to="/admin/EditCredentials" >  <i class="fas fa-edit "></i> </Link>
                    </td>
                  </tr>
                  <tr className="text-dark text-justify">
                    <th scope="row" >1</th>
                    <td>Eoxys</td>
                    <td>xxx</td>
                    <td>Jio</td>
                    <td>21435 <i class="fa fa-eye ml-3" aria-hidden="true"></i></td>
                    <td>
                      <Link to="/admin/EditCredentials" >  <i class="fas fa-edit "></i> </Link>
                    </td>
                  </tr>
                  <tr className="text-dark text-justify">
                    <th scope="row" >1</th>
                    <td>Eoxys</td>
                    <td>xxx</td>
                    <td>Jio</td>
                    <td>21435 <i class="fa fa-eye ml-3" aria-hidden="true"></i></td>
                    <td>
                      <Link to="/admin/EditCredentials" >  <i class="fas fa-edit "></i> </Link>
                    </td>
                  </tr>
                  <tr className="text-dark text-justify">
                    <th scope="row" >1</th>
                    <td>Eoxys</td>
                    <td>xxx</td>
                    <td>Jio</td>
                    <td>21435 <i class="fa fa-eye ml-3" aria-hidden="true"></i></td>
                    <td>
                      <Link to="/admin/EditCredentials" >  <i class="fas fa-edit "></i> </Link>
                    </td>
                  </tr>
                  <tr className="text-dark text-justify">
                    <th scope="row" >1</th>
                    <td>Eoxys</td>
                    <td>xxx</td>
                    <td>Jio</td>
                    <td>21435 <i class="fa fa-eye ml-3" aria-hidden="true"></i></td>
                    <td>
                      <Link to="/admin/EditCredentials" >  <i class="fas fa-edit "></i> </Link>
                    </td>
                  </tr>
                  <tr className="text-dark text-justify">
                    <th scope="row" >1</th>
                    <td>Eoxys</td>
                    <td>xxx</td>
                    <td>Jio</td>
                    <td>21435 <i class="fa fa-eye ml-3" aria-hidden="true"></i></td>
                    <td>
                      <Link to="/admin/EditCredentials" >  <i class="fas fa-edit "></i> </Link>
                    </td>
                  </tr>
                  <tr className="text-dark text-justify">
                    <th scope="row" >1</th>
                    <td>Eoxys</td>
                    <td>xxx</td>
                    <td>Jio</td>
                    <td>21435 <i class="fa fa-eye ml-3" aria-hidden="true"></i></td>
                    <td>
                      <Link to="/admin/EditCredentials" >  <i class="fas fa-edit "></i> </Link>
                    </td>
                  </tr>    <tr className="text-dark text-justify">
                    <th scope="row" >1</th>
                    <td>Eoxys</td>
                    <td>xxx</td>
                    <td>Jio</td>
                    <td>21435 <i class="fa fa-eye ml-3" aria-hidden="true"></i></td>
                    <td>
                      <Link to="/admin/EditCredentials" >  <i class="fas fa-edit "></i> </Link>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </Col>

        </Row>
      </Container>
    </>
  )
}
