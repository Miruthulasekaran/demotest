
import React, { useState, useEffect } from 'react'
import {
  Card, CardHeader, Container, Row, Col, Button, Table, Form, FormGroup, Modal, ModalHeader, ModalBody, ModalFooter, InputGroupAddon, InputGroupText, Input, InputGroup,
} from "reactstrap";
import { Link } from 'react-router-dom';
import Header from 'components/Headers/Header';
import { useHistory } from 'react-router-dom';
import Pagination from 'rc-pagination';
import { FadeLoader } from "react-spinners";
import ApiService from 'views/examples/Service/ApiService';
export default function EmailNotification() {
  const [EmailDetails, setEmailDetails] = useState([])
  const [filtervalue, setfiltervalue] = useState('')
  const [searchApidata, setsearchApidata] = useState([])
  const [Organization, setOrganization] = useState([])
  const [finalArr, setFinalArr] = useState()
  const [emailName, setemailName] = useState([])
  const [loading, setloading] = useState(false);
  const [modal, setmodal] = useState(false)
  const [Temp, setTemp] = useState("")
  const history = useHistory();
  let handleChange = (e) => {
    console.log("called", e);
    setTemp(e)
  }
  let toggle = () => {
    setmodal(!modal);
  }
  useEffect(() => {
    setloading(true)
    ApiService.EmailGet().then((resp) => {
      setloading(false)
      setEmailDetails(resp)
      setsearchApidata(resp);
    })

  }, [])
  function EmailDelete(id) {
    if (window.confirm('Are you sure want to delete?')) {
      ApiService.EmailDelete(id).then(() => {
        window.location.reload()
      })

    }
  }
  useEffect(() => {
    ApiService.EmailOrganiation().then((resp) => {
      console.log(resp);
      setOrganization(resp);
    })

  }, [])
  
  function emailEditFetch(id) {
    console.log(id);
    ApiService.EmailId(id).then((resp) => {
      setemailName(resp.email_content);
      toggle()
    })

  }
  useEffect(() => {
    setFinalArr({
      selected_email: {
        "content": emailName
      },
    })
  }, [emailName, Organization]);
  let emailPatch = () => {
    console.log("finalArr", Temp);
    ApiService.emailPatch(Temp, finalArr).then(() => {
      toggle()
    })

  }
  const handlefilter = (e) => {
    if (e.target.value == '') {
      setEmailDetails(searchApidata);
    } else {
      const filterResult = searchApidata.filter(item => item.email_content.toLowerCase().includes(e.target.value.toLowerCase()) || item.content_name.toLowerCase().includes(e.target.value.toLowerCase()))
      if (filterResult.length > 0) {
        setEmailDetails(filterResult);
      } else {
        setEmailDetails([]);
      }
    }
    setfiltervalue(e.target.value)
  }
  return (
    <>
      <Header />
      <div>
        <Modal size="lg" isOpen={modal} toggle={toggle} >
          <ModalHeader toggle={toggle}>Add Icons</ModalHeader>
          <ModalBody>

            <Row>
              <Col md="6">
                <FormGroup>
                  <label
                    className="form-control-label"
                    htmlFor="input-address"
                  >
                    Email messages
                  </label>
                  <Input
                    className="form-control-alternative"
                    value={emailName}
                    // onChange={e => setsmsName(e.target.value)}
                    id="input-address"
                    placeholder="Enter email messages"
                    type="text"
                  />

                </FormGroup>
              </Col>
              <Col md="5">
                <FormGroup>
                  <label
                    className="form-control-label"
                    htmlFor="input-country"
                  >
                    Organization
                  </label>
                  <Input type="select" className='text-dark' onClick={e => handleChange(e.target.value)} name="select" id="exampleSelect">

                    <option value="" selected disabled>Select Data Type</option>
                    {
                      Organization.map((item, index) => {
                        return <>
                          <option key={index} value={item.organization_id} className='text-dark' >{item.organization_name}</option>
                        </>
                      })
                    }
                  </Input>
                </FormGroup>
              </Col>

            </Row>

          </ModalBody>
          <ModalFooter>
            <Button color="success" className='btn-sm' onClick={emailPatch}>submit</Button>
            <Button color="danger" className='btn-sm' onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
      {
        loading ?
          <Col md="12" className="text-center mt-9 spinner" >
            <FadeLoader
              color={"#1E90FF"}
              loading={loading}
              size={100}
              aria-label="Loading Spinner"
              data-testid="loader"
              className="text-center  spinner"
            />
          </Col>
          :
          <Container className="mt--6" fluid>
            <Row>
            </Row>
            <Row className="mt-5">
              <Col className="mb-5 mb-xl-0" xl="12">
                <Card className="shadow" style={{ height: "500px" }}>
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
                              <Input placeholder="Search" type="search" className="text-dark" value={filtervalue} onInput={(e) => handlefilter(e)}>
                              </Input>
                            </InputGroup>
                          </FormGroup>
                        </Form>
                      </div>
                      <div className="col text-right">
                        <Link to="/admin/EmailNotificationAdd" >
                          <Button
                            color="primary"
                            size="sm"
                          >Add
                          </Button>
                        </Link>
                      </div>
                    </Row>
                  </CardHeader>
                  <Table className="align-items-center table-flush" responsive>
                    <thead className="thead-light">
                      <tr>
                        <th scope="col" className='text-dark text-justify'><b>S.No</b></th>
                        <th scope="col" className='text-dark text-justify'><b>Notification Name</b></th>
                        <th scope="col" className='text-dark text-justify'><b> Email notify Messages</b></th>
                        <th scope="col" className='text-dark text-justify'><b>Action</b></th>
                      </tr>
                    </thead>
                    <tbody>
                      {EmailDetails.length > 0 ? EmailDetails.map((item, index) => {
                        // console.log("details", item)
                        return <tr>
                          <th scope="row" >{index + 1}</th>
                          <td className="text-justify text-dark">{item.content_name}</td>
                          <td className="text-justify text-dark">{item.email_content}</td>
                          <td >
                            {/* <i class="fa fa-eye  text-success" onClick={() => emailEditFetch(item.email_config_id)}> </i> */}

                            <Link to={`/admin/EmailNotificationEdit/${item.email_config_id}`}  >  <i class="fas fa-edit ml-3"></i> </Link>
                            <i class="fa fa-trash ml-3 text-danger" onClick={() => EmailDelete(item.email_config_id)} aria-hidden="true"></i>
                          </td>
                        </tr>
                      })
                        :
                        < div className="row">
                          <div className="col-12" style={{ textAlign: "center" }}>
                            <td className="text-dark"><b>No Data Found</b></td>
                          </div>
                        </div>
                      }
                    </tbody>
                  </Table>
                </Card>
              </Col>
            </Row>
          </Container>
      }

    </>
  )
}
