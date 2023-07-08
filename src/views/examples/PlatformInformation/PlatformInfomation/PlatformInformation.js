
import { useState } from "react";
import {
  Card, Table, Container, Row, CardHeader, Col, Form, FormGroup, InputGroupAddon, InputGroupText, Input, InputGroup,
} from "reactstrap";
import Header from "components/Headers/Header.js";
const body = [
  {
    id: 1,
    Devicename: "Device 1",
    DeviceId:
      "1234567890MB56",
    DeviceCategory:
      "Category 1",
    Platform: "jio",
    PlatformNotification: "Received"
  }, {
    id: 2,
    Devicename: "Device 2",
    DeviceId:
      "1234567890MB56",
    DeviceCategory:
      "Category 2",
    Platform: "jio",
    PlatformNotification: "Received"
  },
  {
    id: 3,
    Devicename: "Device 3",
    DeviceId:
      "1234567890MB56",
    DeviceCategory:
      "Category 3",
    Platform: "jio",
    PlatformNotification: "Received"
  },
  {
    id: 4,
    Devicename: "Device 4",
    DeviceId:
      "1234567890MB56",
    DeviceCategory:
      "Category 4",
    Platform: "jio",
    PlatformNotification: "Received"
  },
  {
    id: 5,
    Devicename: "Device 5",
    DeviceId:
      "1234567890MB56",
    DeviceCategory: "Category 5",
    Platform: "jio",
    PlatformNotification: "Received"
  },
]
export default function PlatformInformation() {
  const [test, settest] = useState("tab-list__link");
  const [test1, settest1] = useState("tab-list__link");
  const [test2, settest2] = useState("tab-list__link active");
  const [test3, settest3] = useState("tab-list__link ");
  const [view, setview] = useState('0');
  const [view1, setview1] = useState(true);
  const [HideContent, setHideContent] = useState(false);
  const [cardGroups, setcardGroups] = useState("align-items-center table-flush ");
  const [OnWidth, setOnWidth] = useState(12);
  const [OnariaValue, setOnariaValue] = useState(true);
  const [secondCol, setsecondCol] = useState(false);
  const [OnlayoutVis, setOnlayoutVis] = useState(true);
  let fn = () => {
    settest2("tab-list__link active");
    settest1("tab-list__link");
    settest("tab-list__link");
    settest3("tab-list__link");
    setview('0')
    setHideContent(false)
  }
  let fn1 = () => {
    settest2("tab-list__link");
    settest1("tab-list__link active");
    settest("tab-list__link");
    settest3("tab-list__link");
    setview(false)
    setHideContent(false)
    setHideContent(false)
    console.log(test1);
    setview('1')
  }
  let fn2 = () => {
    settest2("tab-list__link ");
    settest1("tab-list__link ");
    settest("tab-list__link active");
    settest3("tab-list__link");
    setview('2')
    setHideContent(true)
  }
  let AlarmView = () => {
    setview1(true)
  }
  let AlarmView2 = () => {
    setview1(false)
  }
  let OnCardGrp = () => {
    setcardGroups("align-items-center table-flush ")
    setOnWidth(4)
    setOnariaValue(false)
    setsecondCol(true)
    setOnlayoutVis(false)
  }
  let OnCardGrp1 = () => {
    setOnlayoutVis(true)
    setsecondCol(false)
    setOnWidth(12)
  }
  return (
    <>
      <Header />
      <Container className="mt--6" fluid>
        <Row className="mt-5">
          <Col xl={OnWidth}>
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col-6">
                    <Form className="  d-none d-md-flex ml-lg-auto" >
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
                  <div className="col-6 text-right">

                    {OnlayoutVis ? null : <i class="fa fa-expand ml-2" onClick={OnCardGrp1}></i>}

                  </div>
                </Row>
              </CardHeader>
              <Table className={cardGroups} style={{ height: '525px' }} responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col" className="text-dark"><b>S.No</b></th>
                    {OnlayoutVis ? <th scope="col" className="text-dark"><b>Device Name</b></th> : null}
                    <th scope="col" style={{ textAlign: "center" }} className="text-dark"><b>Device Id</b></th>
                    {OnlayoutVis ? <th scope="col" className="text-dark"><b>Device Category</b></th> : null}
                    {OnlayoutVis ? <th scope="col" className="text-dark" style={{ textAlign: "center" }} ><b>Platform</b></th> : null}
                    {OnlayoutVis ? <th scope="col" className="text-dark" style={{ textAlign: "center" }} ><b>PlatformNotification</b></th> : null}
                    <th scope="col" className="text-dark"><b>Action</b></th>
                  </tr>
                </thead>
                <tbody>
                  {body.map((item, index) => (
                    <tr className="text-dark text-justify">
                      <th scope="row" key={index}>{item.id}</th>
                      <td>{item.DeviceId} </td>
                      {OnlayoutVis ? <td>{item.Devicename} </td> : null}
                      {OnlayoutVis ? <td>{item.DeviceCategory} </td> : null}
                      {OnlayoutVis ? <td>{item.Platform} </td> : null}
                      {OnlayoutVis ? <td>{item.PlatformNotification} </td> : null}
                      <td>   <i class="fa fa-eye text-success" aria-hidden="true" onClick={OnCardGrp}></i>
                      </td>
                    </tr>
                  ))
                  }
                </tbody>
              </Table>
            </Card>
          </Col>
          {secondCol ?
            <Col className="mb-5 mb-xl-0" xl="8" >
              <Card className="shadow ">
                <CardHeader className="border-0">
                  <Row className="align-items-center">
                    <ul className="text-center d-flex justify-content-center" style={{ padding: "0px" }}>
                      <div className="row text-center d-flex justify-content-center">
                        <div className="col-md-6  text-center d-flex justify-content-center">
                          <li class={test2} >
                            <a class="tab-list__link" onClick={fn} href="#tab1" data-toggle="tab"  >
                              <span class="step"><i class='fas fa-tv' ></i></span>
                              <span class="desc " >Login</span>
                            </a>
                          </li>
                        </div>
                        <div className="col-md-6  ">
                          <li class={test1} >
                            <a class="tab-list__link" href="#tab2" onClick={fn1} data-toggle="tab">
                              <span class="step"><i class='fas fa-microchip' ></i></span>
                              <span class="desc ">Device  </span>
                            </a>
                          </li>
                        </div>
                      </div>
                    </ul>
                  </Row>
                  <Row className="align-items-center">
                    <div className="col">
                      {view == '0' ? <p>  <Row >
                        <Container>
                          <Row>
                            <Col>
                              <div class="container  mt-3 table-scroll "  >
                                <div className="col text-left text-dark" style={{ padding: "0px" }}>
                                  <div className="row">
                                    <div class="col-6 text-dark">
                                      <b>Platform Name</b>
                                    </div>
                                    <div className="col-6 text-dark">
                                      Jio
                                    </div>
                                  </div>
                                </div>
                                <div className="col mt-5 text-left text-dark" style={{ padding: "0px" }}>
                                  <div className="row">
                                    <div class="col-6">
                                      <b>Last Login Date And Time</b>
                                    </div>
                                    <div class="col-6">
                                      24-03-2023 & 19:02:34
                                    </div>
                                  </div>
                                </div>
                                <div className="col mt-5   text-left text-dark" style={{ padding: "0px" }}>
                                  <div className="row">
                                    <div class="col-6">
                                      <b>User Name</b>
                                    </div>
                                    <div class="col-6">
                                      Customer
                                    </div>
                                  </div>
                                </div>
                                <div className="col mt-5  text-left text-dark" style={{ padding: "0px" }}>
                                  <div className="row">
                                    <div class="col-6">
                                      <b>Failed Login Attempt</b>
                                    </div>
                                    <div class="col-6">
                                      22
                                    </div>
                                  </div>
                                </div>
                                <div className="col mt-5  text-left text-dark" style={{ padding: "0px" }}>
                                  <div className="row">
                                    <div class="col-6">
                                      <b>Password</b>
                                    </div>
                                    <div class="col-6">
                                      ****************<i class="fa fa-eye ml-3" aria-hidden="true"></i>
                                    </div>
                                  </div>
                                </div>
                                <div className="col mt-5  text-left text-dark" style={{ padding: "0px" }}>
                                  <div className="row text-dark">
                                    <div class="col-6 text-dark">
                                      <b>Success Login Attempt</b>
                                    </div>
                                    <div class="col-6 text-dark">
                                      22
                                    </div>
                                  </div>
                                </div>
                                <div className="col mt-5  text-left text-dark" style={{ padding: "0px" }}>
                                  <div className="row">
                                    <div class="col-6 text-dark">
                                      <b>Token Expiry Time</b>
                                    </div>
                                    <div class="col-6 text-dark">
                                      5:00 mins
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Col>
                          </Row>
                        </Container>
                      </Row></p> : view == '1' ?
                        <div class="container  mt-3 table-scroll "  >

                          <div className="col text-left text-dark" style={{ padding: "0px" }}>
                            <div className="row">
                              <div class="col-6">
                                <b>pld</b>
                              </div>
                              <div class="col-6 text-dark">
                                41353467486709780
                              </div>
                            </div>
                          </div>
                          <div className="col mt-5 text-left text-dark" style={{ padding: "0px" }}>
                            <div className="row">
                              <div class="col-6">
                                <b>didType</b>
                              </div>
                              <div class="col-6 text-dark">
                                imei/pl
                              </div>
                            </div>
                          </div>
                          <div className="col mt-5   text-left text-dark" style={{ padding: "0px" }}>
                            <div className="row">
                              <div class="col-6">
                                <b>appId</b>
                              </div>
                              <div class="col-6 text-dark">
                                32546
                              </div>
                            </div>
                          </div>
                          <div className="col mt-5   text-left text-dark" style={{ padding: "0px" }}>
                            <div className="row">
                              <div class="col-6 text-dark">
                                <b>ttl</b>
                              </div>
                              <div class="col-6 text-dark">
                                *****
                              </div>
                            </div>
                          </div> <div className="col mt-5   text-left text-dark" style={{ padding: "0px" }}>
                            <div className="row">
                              <div class="col-6 text-dark">
                                <b>msg</b>
                              </div>
                              <div class="col-6 text-dark">
                                User
                              </div>
                            </div>
                          </div>
                        </div>

                        : null
                      }
                    </div>
                  </Row>
                </CardHeader>
              </Card>
            </Col> : null
          }
        </Row>
      </Container>
    </>
  )
}
