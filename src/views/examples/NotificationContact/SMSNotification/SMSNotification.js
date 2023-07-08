

import React, { useState, useEffect } from 'react'
import {
  Card, CardHeader, Container, Row, Col, Button, Table, Form, FormGroup, InputGroupAddon, InputGroupText, Input, InputGroup, Modal, ModalHeader, ModalBody, ModalFooter,
} from "reactstrap";
import { Link } from 'react-router-dom';
import Header from 'components/Headers/Header';
import { useHistory } from 'react-router-dom';
import ApiService from 'views/examples/Service/ApiService';

export default function SMSNotification() {
  const [filtervalue, setfiltervalue] = useState('')
  const [searchApidata, setsearchApidata] = useState([])
  const [smsName, setsmsName] = useState([])
  const [Organization, setOrganization] = useState([])
  const [details, setdetails] = useState([])
  const [modal, setmodal] = useState(false)
  const [OrganizationList, setOrganizationList] = useState("")
  const [idds, setId] = useState()
  const [finalArr, setFinalArr] = useState()
  const [Temp, setTemp] = useState("")
  const history = useHistory();
  let views;
  let handleChange = (e) => {
    console.log("called", e);
    setTemp(e)
    // let Finddeviceprofile = Organization.find((value, i) => value.organization_id == id);
    // console.log("Finddeviceprofile",Organization.find((value, i) => value.organization_id == id));

  }
  let toggle = () => {

    setmodal(!modal);
  }


  useEffect(() => {
    ApiService.GettingSms().then((resp)=>{
      setdetails(resp)
      setsearchApidata(resp);
    })
   
  }, [])
  useEffect(() => {
    ApiService.GetSms().then((resp) => {
      setdetails(resp)
      setsearchApidata(resp);
    })

  }, [])
  function smsDelete(id) {
    if (window.confirm('Are you sure want to delete?')) {
      ApiService.DeleteSMs(id).then(() => {
        window.location.reload()
      })

    }
  }
  function smsEditFetch(id) {
    console.log(id);
    ApiService.SmsID(id).then((resp) => {
      setsmsName(resp.sms_content);
      console.log(resp.sms_content);
      toggle()
    })


  }
  const handlefilter = (e) => {
    if (e.target.value == '') {
      setdetails(searchApidata);
    } else {
      const filterResult = searchApidata.filter(item => item.sms_content.toLowerCase().includes(e.target.value.toLowerCase()) || item.content_name.toLowerCase().includes(e.target.value.toLowerCase()))
      if (filterResult.length > 0) {
        setdetails(filterResult);
      } else {
        setdetails([]);
      }
    }
    setfiltervalue(e.target.value)
  }
  useEffect(() => {
    ApiService.SmsOrganization().then((resp) => {
      console.log(resp);
      setOrganization(resp);
    })

  }, [])
  useEffect(() => {


    setFinalArr({
      selected_sms: {
        "content": smsName
      },
    })

  }, [smsName, OrganizationList]);



  let smsPatch = () => {
    console.log("finalArr", Temp);
    ApiService.AddSms(Temp,finalArr).then((resp)=>{
      console.log("submitRESP", resp);
      toggle()
    })
   
    // toggle();
    // history.push('/admin/SMSNotification');

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
                    Sms Messages
                  </label>
                  <Input
                    className="form-control-alternative"
                    value={smsName}
                    // onChange={e => setsmsName(e.target.value)}
                    id="input-address"
                    placeholder="Enter Profile Name"
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
              {/* <Col md="1">
              <Button color="primary" className='btn-sm mt-4' >Add</Button>
              </Col> */}
            </Row>
            {/* <div className="row mt-3">
                            <div className="col-md-12  mt-3">
                                {OncreateArr.map((item, index) => {
                                    return <div className="row" key={index}>
                                        <div className="col-md-1 text-dark">
                                            <p className='text-dark'> <b>{index + 1}</b></p>
                                        </div>
                                        <div className="col-md-4 text-dark">
                                            <p className='text-dark'><b>{item.IconName}</b> </p>
                                        </div>
                                        <div className="col-md-3">
                                            <img style={{ height: "2rem" }} src={item.IconImage} />
                                        </div>
                                        <div className="col-md-2">
                                            <button className='btn btn-primary btn-sm ml-5' onClick={() => EditModalFn(item.IconName)} >Edit</button>
                                        </div>
                                        <div className="col-md-2">
                                            <button className='btn btn-danger btn-sm ml--4' onClick={() => DeleteModalFn(index)}>Delete</button>
                                        </div>
                                    </div>
                                })
                                }
                            </div>
                        </div> */}
          </ModalBody>
          <ModalFooter>
            <Button color="success" className='btn-sm' onClick={smsPatch}>submit</Button>
            <Button color="danger" className='btn-sm' onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
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
                    <Link to="/admin/SMSNotificationAdd" >
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
                    <th scope="col" className="text-justify text-dark"><b>S.No</b></th>
                    <th scope="col" className="text-justify text-dark"><b>Notification Name</b></th>
                    <th scope="col" className="text-justify text-dark"><b>SMS notify Messages</b></th>
                    <th scope="col" className="text-justify text-dark"><b>Action</b></th>
                  </tr>
                </thead>

                <tbody>
                  {details.length > 0 ? details.map((item, index) => {
                    // console.log("details", item)
                    return <tr>
                      <th scope="row" className="text-justify text-dark">{index + 1}</th>
                      <td className="text-justify text-dark">{item.content_name}</td>
                      <td className="text-justify text-dark">{item.sms_content}</td>

                      <td>
                        {/* <i class="fa fa-eye  text-success" onClick={() => smsEditFetch(item.sms_config_id)}> </i> */}
                        <Link to={`/admin/SMSNotificationEdit/${item.sms_config_id}`}>  <i class="fas fa-edit ml-3 "></i> </Link>
                        <i class="fa fa-trash ml-3 text-danger" onClick={() => smsDelete(item.sms_config_id)} aria-hidden="true"></i>
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
    </>
  )
}
