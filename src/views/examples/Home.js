
import React from 'react'
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from "react";
import Header from 'components/Headers/Header';
import ApiService from './Service/ApiService';


// import s from "../../../../public/manifest.json"


export default function Home() {
  const history = useHistory();
  const [devicesCount, setdevicesCount] = useState([])
  const [organizationCount, setorganizationCount] = useState([])
  const [userCount, setuserCount] = useState([])
  const [alarmCount, setalarmCount] = useState([])
  useEffect(() => {
    ApiService.DeviceCount().then((resp)=>{
      setdevicesCount(resp);
    })
  }, [])


  useEffect(() => {
    ApiService.organizationCount().then((resp)=>{
      setorganizationCount(resp);
    })
  }, [])
  
  useEffect(() => {
    ApiService.userCount().then((resp)=>{
      setuserCount(resp);
    })
  
  }, [])
  useEffect(() => {
    ApiService.alarmCount().then((resp)=>{
      setalarmCount(resp);
    })
  
  }, [])
  function organization() {
    history.push('/admin/OrganizationList');
  }
  function users() {
    history.push('/admin/index');
  }
  function devices() {
    history.push('/admin/Device');
  }
  function alarms(){
    history.push('/admin/DeviceAlarm');
  }
  return (
    <>
      <Header />
      <Container fluid className='mt-5 mb-5'>
        <div className="header-body">
        </div>
      </Container>
      <Container>
        <Row>
          <Col lg="6" xl="6">
            <Card style={{ boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)" }} onClick={organization}>
              <CardBody>
                <Row>
                  <Col md="2" >
                    <div className="text-dark  shadow">
                      <i className="fa fa-users fa-2x" />
                    </div>
                  </Col>
                  <Col md="6" >
                    <CardTitle
                      className=" text-center "
                    >
                      <h1><b>Organizations</b></h1>
                    </CardTitle>
                  </Col>
                  <Col md="4" >
                    <div className="icon icon-shape text-dark rounded-circle shadow border border-dark" style={{ backgroundColor: "#f1f58c" }}>
                      {organizationCount}
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col lg="6" xl="6" onClick={users}>
            <Card style={{ boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)" }}>
              <CardBody>
                <Row>
                  <Col md="2" >
                    <div className=" text-dark  shadow">
                      <i className="fa fa-user fa-2x" />
                    </div>
                  </Col>
                  <Col md="6" >
                    <CardTitle
                      className=" text-center "
                    >
                      <h1><b>Users</b></h1>
                    </CardTitle>
                  </Col>
                  <Col md="4" >
                    <div className="icon icon-shape text-dark rounded-circle shadow border border-dark" style={{ backgroundColor: "#b282ed" }}>
                      {userCount}
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col lg="6" xl="6" className='mt-5 ' onClick={devices}>
            <Card style={{ boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)" }}>
              <CardBody>
                <Row>
                  <Col md="2" >
                    <div className=" text-dark shadow">
                      <i className="fas fa-chalkboard-teacher fa-2x" />
                    </div>
                  </Col>
                  <Col md="6" >
                    <CardTitle
                      className=" text-center "
                    >
                      <h1><b>  Devices</b></h1>
                    </CardTitle>
                  </Col>
                  <Col md="4" >
                    <div className="icon icon-shape text-dark rounded-circle shadow border border-dark" style={{ backgroundColor: "#92bcf0" }}>
                      {devicesCount}
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col lg="6" xl="6" className='mt-5 ' onClick={alarms}>
            <Card style={{ boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)" }}>
              <CardBody>
                <Row>
                  <Col md="2" >
                    <div className=" text-dark shadow">
                      <i className="fas fa-bell fa-2x" />
                    </div>
                  </Col>
                  <Col md="6" >
                    <CardTitle
                      className=" text-center "
                    >
                      <h1><b>Alarms</b></h1>
                    </CardTitle>
                  </Col>
                  <Col md="4" >
                    <div className="icon icon-shape text-dark rounded-circle shadow border border-dark" style={{ backgroundColor: "#92bcf0" }}>
                      {alarmCount}
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>

      </Container>

    </>
  )
}
