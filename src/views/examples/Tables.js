
import { useState } from "react";
import {
  Badge,
  Card,

  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,

  Table,
  Container,
  Row,
  UncontrolledTooltip,
  Button,

  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Col,
  Form,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  InputGroup,
} from "reactstrap";
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "variables/charts.js";
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// core components
import Header from "components/Headers/Header.js";
import "../examples/Test.css";


const body = [
  {
    id: 1,
    Devicename: "Device 1",
    DeviceId:
      "1234567890MB56",
    DeviceCategory:
      "Category 1",
  }, {
    id: 2,
    Devicename: "Device 2",
    DeviceId:
      "1234567890MB56",
    DeviceCategory:
      "Category 2",
  },
  {
    id: 3,
    Devicename: "Device 3",
    DeviceId:
      "1234567890MB56",
    DeviceCategory:
      "Category 3",
  },
  {
    id: 4,
    Devicename: "Device 4",
    DeviceId:
      "1234567890MB56",
    DeviceCategory:
      "Category 4",
  },
  {
    id: 5,
    Devicename: "Device 5",
    DeviceId:
      "1234567890MB56",
    DeviceCategory: "Category 5",
  },


]

const Tables = (props) => {
  const [activeNav, setActiveNav] = useState(1);
  const [chartExample1Data, setChartExample1Data] = useState("data1");

  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }

  const toggleNavs = (e, index) => {
    e.preventDefault();
    setActiveNav(index);
    setChartExample1Data("data" + index);
  };

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

  let fn3 = () => {
    settest2("tab-list__link ");
    settest1("tab-list__link ");
    settest("tab-list__link ");
    settest3("tab-list__link active");
    setview('3')
    setHideContent(false)
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


      <Container className="mt-7" fluid>
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
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      Add Device
                    </Button>
                    {OnlayoutVis ? null : <i class="fa fa-expand " onClick={OnCardGrp1}></i>}

                  </div>
                </Row>
              </CardHeader>
              <Table className={cardGroups} style={{ height: '525px' }} responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">S.No</th>
                    {OnlayoutVis ? <th scope="col">Device Name</th> : null}
                    <th scope="col" style={{ textAlign: "center" }} >Device Id</th>
                    {/* style={{textAlign:"center"}} */}
                    {OnlayoutVis ? <th scope="col">Device Category</th> : null}
                    <th scope="col">Action</th>

                  </tr>
                </thead>
                <tbody>
                  {body.map((item, index) => (
                    <tr>
                      <th scope="row" key={index}>{item.id}</th>

                      <td>{item.DeviceId} </td>
                      {OnlayoutVis ? <td>{item.Devicename} </td> : null}
                      {OnlayoutVis ? <td>{item.DeviceCategory} </td> : null}
                      <td>   <i class="fa fa-eye " aria-hidden="true" onClick={OnCardGrp}></i>
                        <i class="fas fa-edit ml-3 " ></i>
                      </td>
                    </tr>
                  ))
                  }

                </tbody>
              </Table>
            </Card>
          </Col>
          {/* Second Column start */}
          {secondCol ?

            <Col className="mb-5 mb-xl-0" xl="8" >
              <Card className="shadow ">
                <CardHeader className="border-0">
                  <Row className="align-items-center">
                    <ul className="text-center d-flex justify-content-center" style={{ padding: "0px" }}>
                      <div className="row text-center d-flex justify-content-center">
                        <div className="col-md-3  text-center d-flex justify-content-center">
                          <li class={test2} >
                            <a class="tab-list__link" onClick={fn} href="#tab1" data-toggle="tab">
                              <span class="step"><i class='fas fa-tv' ></i></span>
                              <span class="desc ml-2">Dashboard</span>
                            </a>
                          </li>
                        </div>
                        <div className="col-md-3  ">
                          <li class={test1} >
                            <a class="tab-list__link" href="#tab2" onClick={fn1} data-toggle="tab">
                              <span class="step"><i class='fas fa-microchip' ></i></span>
                              <span class="desc  ml-2">Device </span>
                            </a>
                          </li>
                        </div>

                        <div className="col-md-3  ">
                          <li class={test} >
                            <a class="tab-list__link" href="#tab2" onClick={fn2} data-toggle="tab">
                              <span class="step"><i class='fas fa-bell' ></i></span>
                              <span class="desc  ml-2">Alarms </span>
                            </a>
                          </li>
                        </div>
                        <div className="col-md-3  ">
                          <li class={test} >
                            <a class="tab-list__link" href="#tab4" onClick={fn3} data-toggle="tab">
                              <span class="step"><i class="fa fa-building " ></i></span>
                              <span class="desc  ml-2">Organization</span>
                            </a>
                          </li>
                        </div>
                      </div>
                    </ul>
                  </Row>
                  <Row className="align-items-center">
                    <div className="col">

                      {view == '0' ? <p>  <Row >
                        {/* <Col className="col-4" >
                     
                        <Card className="justify-content-center p-2" style={{ width: "100%", height: "100%" }}>
                          <img style={{ height: "250px", objectFit: "cover" }}
                            alt="image"
                          />
                        </Card>
                      </Col> */}
                        <Col className="table-scroll" xl="12">
                          <Table className="align-items-center table-flush " style={{ height: '500px' }} responsive>
                            <thead className="thead-light">
                              <tr>
                                <th scope="col">Timestamp</th>
                                <th scope="col">Date & Time</th>
                                <th scope="col">Class Id</th>
                                <th scope="col">Class Name</th>

                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th scope="row">/argon/</th>
                                <td>4,569</td>
                                <td>340</td>
                                <td>
                                  46,53%
                                </td>
                              </tr>

                              <tr>
                                <th scope="row">/argon/</th>
                                <td>4,569</td>
                                <td>340</td>
                                <td>
                                  46,53%
                                </td>
                              </tr>
                              <tr>
                                <th scope="row">/argon/</th>
                                <td>4,569</td>
                                <td>340</td>
                                <td>
                                  46,53%
                                </td>
                              </tr>
                              <tr>
                                <th scope="row">/argon/</th>
                                <td>4,569</td>
                                <td>340</td>
                                <td>
                                  46,53%
                                </td>
                              </tr>
                              <tr>
                                <th scope="row">/argon/</th>
                                <td>4,569</td>
                                <td>340</td>
                                <td>
                                  46,53%
                                </td>
                              </tr>
                              <tr>
                                <th scope="row">/argon/</th>
                                <td>4,569</td>
                                <td>340</td>
                                <td>
                                  46,53%
                                </td>
                              </tr>
                              <tr>
                                <th scope="row">/argon/</th>
                                <td>4,569</td>
                                <td>340</td>
                                <td>
                                  46,53%
                                </td>
                              </tr>
                              <tr>
                                <th scope="row">/argon/</th>
                                <td>4,569</td>
                                <td>340</td>
                                <td>
                                  46,53%
                                </td>
                              </tr>
                              <tr>
                                <th scope="row">/argon/</th>
                                <td>4,569</td>
                                <td>340</td>
                                <td>
                                  46,53%
                                </td>
                              </tr>
                            </tbody>
                          </Table>
                        </Col>
                      </Row></p> : view == '1' ?
                        // <div class="container table-scroll " >
                        //   <div class="row table-scroll-height">
                        //     <div class="col ">
                        //       <div class="row">
                        //         <div class="col-sm-6">
                        //           <h3 class="mb-0"><b>Device Name</b></h3>
                        //         </div>
                        //         <div class="col-sm-6 ">
                        //           Device 1
                        //         </div>
                        //       </div>
                        //     </div>
                        //     <div class="col">
                        //       <div class="row">
                        //         <div class="col-sm-6">
                        //           <h3 class="mb-0"><b>Device Id</b></h3>
                        //         </div>
                        //         <div class="col-sm-6 ">
                        //           1233257DSAFDS658769
                        //         </div>
                        //       </div>
                        //     </div>
                        //   </div>
                        //   <div class="row " style={{marginTop:"-300px"}}>
                        //     <div class="col">
                        //       <div class="row">
                        //         <div class="col-sm-6">
                        //           <h3 class="mb-0"><b>Device Category</b></h3>
                        //         </div>
                        //         <div class="col-sm-6 ">
                        //           Category 1
                        //         </div>
                        //       </div>
                        //     </div>
                        //     <div class="col">
                        //       <div class="row">
                        //         <div class="col-sm-6">
                        //           <h3 class="mb-0"><b>Device Data Profile</b></h3>
                        //         </div>
                        //         <div class="col-sm-6 ">
                        //           <ol>
                        //             <li>bzjbdjk</li>
                        //             <li className="mt-2">bzjbdjk</li>
                        //             <li className="mt-2">bzjbdjk</li>
                        //             <li className="mt-2">bzjbdjk</li>
                        //             <li className="mt-2">bzjbdjk</li>

                        //           </ol>
                        //         </div>
                        //       </div>
                        //     </div>
                        //   </div>
                        //   <div class="row ">
                        //     <div class="col">
                        //       <div class="row">
                        //         <div class="col-sm-6">
                        //           <h3 class="mb-0"><b>Device Profile</b></h3>
                        //         </div>
                        //         <div class="col-sm-6 ">
                        //           <ol>
                        //             <li>bzjbdjk</li>
                        //             <li className="mt-2">bzjbdjk</li>
                        //             <li className="mt-2">bzjbdjk</li>
                        //             <li className="mt-2">bzjbdjk</li>
                        //             <li className="mt-2">bzjbdjk</li>
                        //           </ol>
                        //         </div>
                        //       </div>
                        //     </div>
                        //     <div class="col">
                        //       <div class="row">
                        //         <div class="col-sm-6">
                        //           <h3 class="mb-0"><b>Device Alarm</b></h3>
                        //         </div>
                        //         <div class="col-sm-6 ">
                        //           <ol >
                        //             <li >bzjbdjk</li>
                        //             <li className="mt-2">bzjbdjk</li>
                        //             <li className="mt-2">bzjbdjk</li>
                        //             <li className="mt-2">bzjbdjk</li>
                        //             <li className="mt-2">bzjbdjk</li>
                        //           </ol>
                        //         </div>
                        //       </div>
                        //     </div>


                        //   </div>
                        // </div>
                        <div class="container  table-scroll center-block " >
                          {/* <div class="row " >
                            <div class="col mt-3">
                              <div className="row">
                                <div class="col-4">
                                <b>Device Category</b>
                                </div>
                                <div class="col-8">
                                Category 1
                                </div>
                              </div>
                              <div className="row mt-5">
                                <div class="col-4">
                                <b>Device Data Profile</b>
                                </div>
                                <div class="col-8">
                                <ol>
                                <li>Temperature</li>
                                <li className="mt-2">Temperature</li>
                                <li className="mt-2">Temperature</li>
                                <li className="mt-2">Temperature</li>
                                <li className="mt-2">Temperature</li>
                              </ol>
                                </div>
                              </div>
                            </div>
                            <div class="col mt-3">
                              <div className="row">
                                <div class="col-4 ">
                                <b>Device Profile</b>
                                </div>
                                <div class="col-8">
                                <ol>
                                <li>Temperature</li>
                                <li className="mt-2">Temperature</li>
                                <li className="mt-2">Temperature</li>
                                <li className="mt-2">Temperature</li>
                                <li className="mt-2">Temperature</li>
                              </ol>
                                </div>
                              </div>
                              <div className="row">
                                <div class="col-4">
                                <b>Device Alarm</b>
                                </div>
                                <div class="col-8">
                                <ol>
                                <li>Temperature</li>
                                <li className="mt-2">Temperature</li>
                                <li className="mt-2">Temperature</li>
                                <li className="mt-2">Temperature</li>
                                <li className="mt-2">Temperature</li>
                              </ol>
                                </div>
                              </div>
                            </div>
                          </div> */}
                          <div class="row mt-3 " >
                            <div class="col">
                              <b>Device Id</b>
                            </div>
                            <div class="col">
                              1234567890
                            </div>
                            <div class="col">
                              <b>Device Name</b>
                            </div>
                            <div class="col">
                              Device 1
                            </div>
                          </div>
                          <div class="row mt-5" >
                            <div class="col">
                              <b>Device Category</b>
                            </div>
                            <div class="col">
                              Category 1
                            </div>
                            <div class="col">
                              <b>Device Data Profile</b>
                            </div>
                            <div class="col">
                              <ol>
                                <li>Temperature</li>
                                <li className="mt-2">Temperature</li>
                                <li className="mt-2">Temperature</li>
                                <li className="mt-2">Temperature</li>
                                <li className="mt-2">Temperature</li>

                              </ol>
                            </div>
                          </div>
                          <div class="row mt-5" >
                            <div class="col">
                              <b>Device Profile</b>
                            </div>
                            <div class="col">
                              <ol>
                                <li>Temperature</li>
                                <li className="mt-2">Temperature</li>
                                <li className="mt-2">Temperature</li>
                                <li className="mt-2">Temperature</li>
                                <li className="mt-2">Temperature</li>

                              </ol>
                            </div>
                            <div class="col">
                              <b>Device Alarm</b>
                            </div>
                            <div class="col">
                              <ol>
                                <li>Temperature</li>
                                <li className="mt-2">Temperature</li>
                                <li className="mt-2">Temperature</li>
                                <li className="mt-2">Temperature</li>
                                <li className="mt-2">Temperature</li>

                              </ol>
                            </div>
                          </div>
                        </div>
                        : view == '2' ? <></> : view == '3' ?
                          <div class="container  mt-3 table-scroll "  >
                            {/* <div class="row table-scroll-height">
                            <div class="col">
                              <div class="row">
                                <div class="col-sm-6">
                                  <h3 class="mb-0"><b>Organization Name</b></h3>
                                </div>
                                <div class="col-sm-6 ">
                                  Customer 1
                                </div>
                              </div>
                            </div>
                            <div class="col">
                              <div class="row">
                                <div class="col-sm-6">
                                  <h3 class="mb-0"><b>Phone Number</b></h3>
                                </div>
                                <div class="col-sm-6 ">
                                  9025471102
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="row " >
                            <div class="col">
                              <div class="row">
                                <div class="col-sm-6">
                                  <h3 class="mb-0"><b>Email</b></h3>
                                </div>
                                <div class="col-sm-6 ">
                                  Customer@gmail.com
                                </div>
                              </div>
                            </div>
                            <div class="col">
                              <div class="row">
                                <div class="col-sm-6">
                                  <h3 class="mb-0"><b>Address</b></h3>
                                </div>
                                <div class="col-sm-6 ">
                                  22, 7th Cross,
                                  KHB Main Road, Kaval Bairasandra Extn,
                                  RT Nagar,
                                  Bengaluru, Karnataka, 560032, India.
                                </div>
                              </div>
                            </div>
                          </div>
                         */}
                            {/* <div class="row mt-3 " >
                              <div class="col">
                                <b>Organization Name</b>
                              </div>
                              <div class="col">
                                Customer 1
                              </div>
                              <div class="col">
                                <b>Phone Number</b>
                              </div>
                              <div class="col">
                                9025471102
                              </div>
                            </div>
                            <div class="row mt-5" >
                              <div class="col">
                                <b>Email</b>
                              </div>
                              <div class="col">
                                Customer@gmail.com
                              </div>
                              <div class="col">
                                <b>Address</b>
                              </div>
                              <div class="col text-center">
                                22, 7th Cross,
                                KHB Main Road, Kaval Bairasandra Extn,
                                RT Nagar,
                                Bengaluru, Karnataka, 560032, India.
                              </div>
                            </div> */}
                            <div className="col text-left" style={{padding:"0px"}}>
                              <div className="row">
                                <div class="col-6">
                                  <b>Organization Name</b>
                                </div>
                                <div class="col-6">
                                  Customer 1
                                </div>
                              </div>
                            </div>
                            <div className="col mt-6 text-left" style={{padding:"0px"}}>
                              <div className="row">
                                <div class="col-6">
                                  <b>Phone Number</b>
                                </div>
                                <div class="col-6">
                                9025471102
                                </div>
                              </div>
                            </div>
                            <div className="col mt-6 text-left" style={{padding:"0px"}}>
                              <div className="row">
                                <div class="col-6">
                                  <b>Email</b>
                                </div>
                                <div class="col-6">
                                Customer@gmail.com
                                </div>
                              </div>
                            </div>
                            <div className="col mt-6 text-left" style={{padding:"0px"}}>
                              <div className="row">
                                <div class="col-6">
                                  <b>Address</b>
                                </div>
                                <div class="col-6">
                                22, 7th Cross,
                                KHB Main Road, Kaval Bairasandra Extn,
                                RT Nagar,
                                Bengaluru, Karnataka, 560032, India.
                                </div>
                              </div>
                            </div>
                          </div> : view
                      }
                      {view == '0' ? <></> : view == '1' ? <></> : view == '2' ? <>  <Button
                        color="primary"

                        onClick={AlarmView}
                        size="md"
                        className="mt-4"
                      >
                        Alarm Event List
                      </Button>  <Button
                        color="primary"

                        onClick={AlarmView2}
                        size="md"
                        className="mt-4"
                      >
                          Alarm Rules
                        </Button></> : view == '3' ? <></> : <></>}
                      {HideContent ? <>{view1 ? <Container className="mt-4 " fluid >

                        <Row className="mt-2 table-scroll1 " style={{ padding: "0px" }}>
                          <Col className="mb-5 mb-xl-0 table-scroll-height1" xl="12" style={{ padding: "0px" }}>

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

                                </Row>
                              </CardHeader>
                              <Table className="align-items-center table-flush table-scroll" responsive>
                                <thead className="thead-light ">
                                  <tr>
                                    <th scope="col">S.No</th>
                                    <th scope="col">Date & Time</th>
                                    <th scope="col">Alarm Name</th>
                                    <th scope="col">Alarm Parameter Name</th>
                                    <th scope="col">Alarm Condition</th>
                                    <th scope="col">Alarm Value</th>
                                    <th scope="col">Alarm Message</th>
                                    <th scope="col">Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <th scope="row">1</th>
                                    <td>12.32.23 & 12:23:43</td>
                                    <td>Alarm 1</td>
                                    <td>
                                      Temperature
                                    </td>
                                    <td>
                                      ==
                                    </td>
                                    <td>
                                      32
                                    </td>
                                    <td>
                                      Temperature is high
                                    </td>
                                    <td>
                                      <i class="fa fa-edit" aria-hidden="true"></i>

                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row">1</th>
                                    <td>12.32.23 & 12:23:43</td>
                                    <td>Alarm 1</td>
                                    <td>
                                      Temperature
                                    </td>
                                    <td>
                                      ==
                                    </td>
                                    <td>
                                      32
                                    </td>
                                    <td>
                                      Temperature is high
                                    </td>
                                    <td>
                                      <i class="fa fa-edit" aria-hidden="true"></i>

                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row">1</th>
                                    <td>12.32.23 & 12:23:43</td>
                                    <td>Alarm 1</td>
                                    <td>
                                      Temperature
                                    </td>
                                    <td>
                                      ==
                                    </td>
                                    <td>
                                      32
                                    </td>
                                    <td>
                                      Temperature is high
                                    </td>
                                    <td>
                                      <i class="fa fa-edit" aria-hidden="true"></i>

                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row">1</th>
                                    <td>12.32.23 & 12:23:43</td>
                                    <td>Alarm 1</td>
                                    <td>
                                      Temperature
                                    </td>
                                    <td>
                                      ==
                                    </td>
                                    <td>
                                      32
                                    </td>
                                    <td>
                                      Temperature is high
                                    </td>
                                    <td>
                                      <i class="fa fa-edit" aria-hidden="true"></i>

                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row">1</th>
                                    <td>12.32.23 & 12:23:43</td>
                                    <td>Alarm 1</td>
                                    <td>
                                      Temperature
                                    </td>
                                    <td>
                                      ==
                                    </td>
                                    <td>
                                      32
                                    </td>
                                    <td>
                                      Temperature is high
                                    </td>
                                    <td>
                                      <i class="fa fa-edit" aria-hidden="true"></i>

                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row">1</th>
                                    <td>12.32.23 & 12:23:43</td>
                                    <td>Alarm 1</td>
                                    <td>
                                      Temperature
                                    </td>
                                    <td>
                                      ==
                                    </td>
                                    <td>
                                      32
                                    </td>
                                    <td>
                                      Temperature is high
                                    </td>
                                    <td>
                                      <i class="fa fa-edit" aria-hidden="true"></i>

                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row">1</th>
                                    <td>12.32.23 & 12:23:43</td>
                                    <td>Alarm 1</td>
                                    <td>
                                      Temperature
                                    </td>
                                    <td>
                                      ==
                                    </td>
                                    <td>
                                      32
                                    </td>
                                    <td>
                                      Temperature is high
                                    </td>
                                    <td>
                                      <i class="fa fa-edit" aria-hidden="true"></i>

                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row">1</th>
                                    <td>12.32.23 & 12:23:43</td>
                                    <td>Alarm 1</td>
                                    <td>
                                      Temperature
                                    </td>
                                    <td>
                                      ==
                                    </td>
                                    <td>
                                      32
                                    </td>
                                    <td>
                                      Temperature is high
                                    </td>
                                    <td>
                                      <i class="fa fa-edit" aria-hidden="true"></i>

                                    </td>
                                  </tr>

                                </tbody>
                              </Table>
                            </Card>
                          </Col>

                        </Row>
                      </Container> : <Container className="mt-4" fluid >

                        <Row className="mt-2 table-scroll1">
                          <Col className="mb-5 mb-xl-0 table-scroll-height1" xl="12" style={{ padding: "0px" }}>

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

                                </Row>
                              </CardHeader>
                              <Table className="align-items-center table-flush " responsive>
                                <thead className="thead-light">
                                  <tr>
                                    <th scope="col">S.No</th>
                                    <th scope="col">Alarm Name</th>
                                    <th scope="col">Alarm Parameter Name</th>
                                    <th scope="col">Alarm Condition</th>
                                    <th scope="col">Alarm Value</th>
                                    <th scope="col">Alarm Message</th>
                                    <th scope="col">Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <th scope="row">1</th>

                                    <td>Alarm 1</td>
                                    <td>
                                      Temperature
                                    </td>
                                    <td>
                                      ==
                                    </td>
                                    <td>
                                      32
                                    </td>
                                    <td>
                                      Temperature is high
                                    </td>
                                    <td>
                                      <i class="fa fa-edit" aria-hidden="true"></i>

                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row">1</th>

                                    <td>Alarm 1</td>
                                    <td>
                                      Temperature
                                    </td>
                                    <td>
                                      ==
                                    </td>
                                    <td>
                                      32
                                    </td>
                                    <td>
                                      Temperature is high
                                    </td>
                                    <td>
                                      <i class="fa fa-edit" aria-hidden="true"></i>

                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row">1</th>

                                    <td>Alarm 1</td>
                                    <td>
                                      Temperature
                                    </td>
                                    <td>
                                      ==
                                    </td>
                                    <td>
                                      32
                                    </td>
                                    <td>
                                      Temperature is high
                                    </td>
                                    <td>
                                      <i class="fa fa-edit" aria-hidden="true"></i>

                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row">1</th>

                                    <td>Alarm 1</td>
                                    <td>
                                      Temperature
                                    </td>
                                    <td>
                                      ==
                                    </td>
                                    <td>
                                      32
                                    </td>
                                    <td>
                                      Temperature is high
                                    </td>
                                    <td>
                                      <i class="fa fa-edit" aria-hidden="true"></i>

                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row">1</th>

                                    <td>Alarm 1</td>
                                    <td>
                                      Temperature
                                    </td>
                                    <td>
                                      ==
                                    </td>
                                    <td>
                                      32
                                    </td>
                                    <td>
                                      Temperature is high
                                    </td>
                                    <td>
                                      <i class="fa fa-edit" aria-hidden="true"></i>

                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row">1</th>

                                    <td>Alarm 1</td>
                                    <td>
                                      Temperature
                                    </td>
                                    <td>
                                      ==
                                    </td>
                                    <td>
                                      32
                                    </td>
                                    <td>
                                      Temperature is high
                                    </td>
                                    <td>
                                      <i class="fa fa-edit" aria-hidden="true"></i>

                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row">1</th>

                                    <td>Alarm 1</td>
                                    <td>
                                      Temperature
                                    </td>
                                    <td>
                                      ==
                                    </td>
                                    <td>
                                      32
                                    </td>
                                    <td>
                                      Temperature is high
                                    </td>
                                    <td>
                                      <i class="fa fa-edit" aria-hidden="true"></i>

                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row">1</th>

                                    <td>Alarm 1</td>
                                    <td>
                                      Temperature
                                    </td>
                                    <td>
                                      ==
                                    </td>
                                    <td>
                                      32
                                    </td>
                                    <td>
                                      Temperature is high
                                    </td>
                                    <td>
                                      <i class="fa fa-edit" aria-hidden="true"></i>

                                    </td>
                                  </tr>

                                </tbody>
                              </Table>
                            </Card>
                          </Col>

                        </Row>
                      </Container>}</> : null}
                    </div>
                  </Row>
                </CardHeader>

              </Card>
            </Col> : null
          }
          {/* Second Column Ends */}
        </Row>





      </Container>

    </>
  );




}



export default Tables;


