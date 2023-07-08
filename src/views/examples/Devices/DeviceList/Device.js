
import { useEffect, useState } from "react";
import {
  Card, Table, Container, Row, Button, CardHeader, Col, Form, FormGroup, InputGroupAddon, InputGroupText, Input, InputGroup,
  Modal, ModalHeader, ModalBody, ModalFooter, CardBody
} from "reactstrap";
import Header from "components/Headers/Header.js";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import Pagination from 'rc-pagination';
import { FadeLoader } from "react-spinners";
import ApiService from "views/examples/Service/ApiService";
import { reach } from "yup";
const Device = (props) => {
  const [activeNav, setActiveNav] = useState(1);
  const [loading, setloading] = useState(false);
  // useEffect(() => {
  //   setloading(true)
  //   setTimeout(() => {
  //     setloading(false)
  //   }, 1000)
  // }, [])
  const [test, settest] = useState("tab-list__link");
  const [test1, settest1] = useState("tab-list__link");
  const [test2, settest2] = useState("tab-list__link active");
  const [test3, settest3] = useState("tab-list__link ");
  const [view, setview] = useState('0');
  const [view1, setview1] = useState(true);
  const [view2, setview2] = useState(true);
  const [HideContent, setHideContent] = useState(false);
  const [HideContent1, setHideContent1] = useState(false);
  const [cardGroups, setcardGroups] = useState("align-items-center table-flush ");
  const [OnWidth, setOnWidth] = useState(12);
  const [OnariaValue, setOnariaValue] = useState(true);
  const [secondCol, setsecondCol] = useState(false);
  const [OnlayoutVis, setOnlayoutVis] = useState(true);
  //List device
  const [deviceList, setDeviceList] = useState([])
  const [DeviceId, setDeviceId] = useState()
  const [DeviceCategory, setDeviceCategory] = useState("")
  const [DeviceName, setDeviceName] = useState("")
  const [device_data_profile, setdevice_data_profile] = useState([])
  const [device_profile, setdevice_profile] = useState([])
  const [global_alarm_rule, setglobal_alarm_rule] = useState([])
  const [OrganizationName, setOrganizationName] = useState([])
  const [OrganizationLogo, setOrganizationLogo] = useState([])
  const [Organizationcontact, setOrganizationcontact] = useState([])
  const [OrganizationNotcontact, setOrganizationNotcontact] = useState([])
  const [organizationAddress, setorganizationAddress] = useState()
  const [filtervalue, setfiltervalue] = useState('')
  const [searchApidata, setsearchApidata] = useState([])
  const [rawdataapi, setrawdataapi] = useState([])
  const [DynamicClass, setDynamicClass] = useState("")
  const [ALarmRules, setALarmRules] = useState([])
  const [alarmparmater, setalarmparmater] = useState([])
  const [alarmname, setalarmname] = useState([])
  const [alarmid, setalarmid] = useState([])
  // const [perPage, setPerPage] = useState(10);
  // const [size, setSize] = useState(perPage);
  // const [current, setCurrent] = useState(1);

  const history = useHistory();
  const [modal, setmodal] = useState(false)
  // for devcie profile
  const [modal1, setmodal1] = useState(false)
  // for global alarm
  const [modal2, setmodal2] = useState(false)
  const [devDatProf, setdevDatProf] = useState([])
  const [Objectkeys, setObjectkeys] = useState("")
  const [classObject, setclassObject] = useState([
    {
      class_name: "baby_crying",
      //  image_path: require("../../assets/img/GIfImages/bby-2.gif")
      // image_path: require("../../../../assets/img/GIfImages/bby-2.gif")
      image_path: require("../../../../assets/img/GIfImages/bby-2.gif")

    },
    {
      class_name: "gun_shot",
      image_path: require("../../../../assets/img/GIfImages/gun_shot.gif")
    },
    {
      class_name: "dog_bark",
      image_path: require("../../../../assets/img/GIfImages/dogbarking.gif")
    },
    {
      class_name: "drilling",
      image_path: require("../../../../assets/img/GIfImages/drilling.gif")
    },
    {
      class_name: "car_theft_alarm",
      image_path: require("../../../../assets/img/GIfImages/original.webp")
    },
    {
      class_name: "jack_hammer",
      image_path: require("../../../../assets/img/GIfImages/jack_hammer.gif")
    },
    {
      class_name: "fire_alarm",
      image_path: require("../../../../assets/img/GIfImages/fire_alarm.gif")
    },
    {
      class_name: "glass_break",
      image_path: require("../../../../assets/img/GIfImages/glass_braking.gif")
    },
    {
      class_name: "hammer",
      image_path: require("../../../../assets/img/GIfImages/hammer1.gif")
    },

    {
      class_name: "women_scream",
      image_path: require("../../../../assets/img/GIfImages/angry-mad.gif")
    },
    {
      class_name: "men_scream",
      image_path: require("../../../../assets/img/GIfImages/hammer1.gif")
    }
  ])
  let fn = () => {
    settest2("tab-list__link active");
    settest1("tab-list__link");
    settest("tab-list__link");
    settest3("tab-list__link");
    setview('4')
    setHideContent(false)
    setHideContent1(false)
  }
  let fn1 = () => {
    settest2("tab-list__link");
    settest1("tab-list__link active");
    settest("tab-list__link");
    settest3("tab-list__link");
    setview(false)
    setHideContent(false)
    setHideContent1(true)
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
    setHideContent1(false)
  }
  let AlarmView = () => {
    setview1(true)
  }
  let AlarmView2 = () => {
    setview1(false)
  }
  let DeviceView = () => {
    setview2(true)
  }
  let DeviceView2 = () => {
    setview2(false)
  }
  let fn3 = () => {
    settest2("tab-list__link ");
    settest1("tab-list__link ");
    settest("tab-list__link ");
    settest3("tab-list__link active");
    setview('3')
    setHideContent(false)
    setHideContent1(false)
  }
  const [imgsrc, setimgsrc] = useState("")
  const [Temp, setTemp] = useState("")
  const [Objectvalues, setObjectvalues] = useState("")
  const [GlobAlarm, setGlobAlarm] = useState([])
  const [platform, setplatform] = useState([])
  const [protocol_type, setprotocol_type] = useState([])
  const [devicedataprofile, setdevicedataprofile] = useState([])
  const [ObjectrawData, setObjectrawData] = useState([])
  let OnCardGrp = (id) => {

    setTemp(id)
    fetch(`http://192.168.0.113:8090/api/v1/device/${id}`, {
    }).then((result) => {
      result.json().then((resp) => {
        console.log("devicedataCategoryId", resp.device_category[0].global_alarm_rule[0].alarm_rules);
        //For Device Details
        setDeviceId(resp.device_mac_id)
        // setOrganizationLogo(resp.organization_id)
        // setOrganizationNotcontact(resp.organization_id.notification_profile
        // )
        setplatform(resp.platform)
        setprotocol_type(resp.protocol_type)
        // setOrganizationcontact(resp.organization_id.contact_person)
        setalarmparmater(resp.device_category[0].global_alarm_rule[0].alarm_rules)
        var deviceid = resp.device_mac_id
        // console.log("deviceid", deviceid);
        setDeviceName(resp.device_name)
        setalarmname(resp.device_category[0].global_alarm_rule[0])
        setDeviceCategory(resp.device_category[0].category_name)
        setdevice_data_profile(resp.device_category[0].device_data_profile)
        setdevice_profile(resp.device_category[0].device_profile)
        setdevDatProf(resp.device_category[0].device_profile[0].custom_data)
        setdevicedataprofile(resp.device_category[0].device_data_profile[0].custom_data)
        setglobal_alarm_rule(resp.device_category[0].global_alarm_rule)

        // console.log("setGlobAlarm",GlobAlarm);
        // setOrganizationName(resp.organization_id.organization_name)
        // setorganizationAddress(resp.organization_id.address)
        fetch(`http://192.168.0.113:8090/api/v1/raw_data_dev_id/${deviceid}`, {
        }).then((result) => {
          result.json().then((resp) => {
            if (resp.parsed_data.length == 0) {
              return null
            }
            console.log("cvcdsdsd", resp);
            setrawdataapi([resp])
            let variable = resp.parsed_data[0]
            // let t = Object.values(variable)l
            setObjectkeys(resp.parsed_data[resp.parsed_data.length - 1])
            console.log("gjhfkgkugkhlihli", resp.parsed_data[resp.parsed_data.length - 1]);
            // let testarr = Object.keys(resp.parsed_data[0])
            setObjectrawData(resp.parsed_data)
            let t = Object.values(variable)
            setObjectvalues(resp.parsed_data[resp.parsed_data.length - 1])
            for (let index = 0; index < classObject.length; index++) {
              t.forEach((_, index1) => {
                if (t[index1] == classObject[index].class_name) {
                  // console.log("i'm inside the fn")
                  let source = classObject[index].image_path
                  setimgsrc(source)
                  console.log("source", imgsrc)
                }
              })
            }
          })
        })
        fetch(`http://192.168.0.113:8090/api/v1/alarm_device_id/${deviceid}`, {
        }).then((result) => {
          result.json().then((resp) => {
            console.log("alarm_device_id", resp);
            setalarmid(resp)
            // console.log("setALarmEvent", resp);
          })
        })
      })
    })

    // console.log("onCard", id);
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
    setTemp("")
  }
  useEffect(() => {
    setloading(true)
    ApiService.Device1().then((resp) => {
      setloading(false)
      setDeviceList(resp)
      console.log("setDeviceList", resp);
      setsearchApidata(resp);
      // var deviceId = resp[0].device_mac_id
    })

  }, [])
  const handlefilter = (e) => {

    if (e.target.value == '') {
      setDeviceList(searchApidata);
    } else {
      const filterResult = searchApidata.filter(item => item.device_name.toLowerCase().includes(e.target.value.toLowerCase()) || item.device_mac_id.toLowerCase().includes(e.target.value.toLowerCase())
        || item.device_category[0].category_name.toLowerCase().includes(e.target.value.toLowerCase()) || item.device_mac_id.toLowerCase().includes(e.target.value.toLowerCase())
      )
      if (filterResult.length > 0) {
        setDeviceList(filterResult);
      } else {
        // setorganizationprofile([{organization_profile_name:"no"}])
        setDeviceList([]);

      }
    }
    setfiltervalue(e.target.value)
  }
  function navigateDashbord() {
    let editValue = deviceList.find((value) => value.device_id == Temp);
    sessionStorage.setItem("Id", editValue.device_mac_id)
    history.push('/admin/DeviceDashboard');
  }


  let toggle = () => {

    setmodal(!modal);
  }

  let toggle1 = (e) => {

    setmodal1(!modal1);

  }

  let toggle2 = (e) => {

    setmodal2(!modal2);
  }
  let func = (e) => {
    console.log("fdddddddddddddddddddddg", e);
    setGlobAlarm(e.alarm_rules)
  }
  const [dataprofile, setdataprofile] = useState([])
  const [deviceprofile, setdeviceprofile] = useState([])
  useEffect(() => {

    ApiService.deviceProfileList().then((resp) => {
      setdeviceprofile(resp);
    })
  }, [])
  let deviceProfile = (e) => {
    let Finddeviceprofile = deviceprofile.find((value, i) => value.device_profile_name === e);
    setdataprofile(Finddeviceprofile.custom_data)
    console.log("timimgg", Finddeviceprofile);
  }
  const [perPage, setPerPage] = useState(5);
  const [size, setSize] = useState(perPage);
  const [current, setCurrent] = useState(1);
  const PerPageChange = (value) => {
    setSize(value);
    const newPerPage = Math.ceil(ObjectrawData.length / value);
    if (current > newPerPage) {
      setCurrent(newPerPage);
    }
  }
  let getData = (current, pageSize) => {
    console.log("current", ObjectrawData)

    return ObjectrawData.slice((current - 1) * pageSize, current * pageSize)

  };
  const PaginationChange = (page, pageSize) => {
    setCurrent(page);
    setSize(pageSize)
  }
  const PrevNextArrow = (current, type, originalElement) => {
    if (type === 'prev') {
      return <button><i className="fa fa-angle-double-left"></i></button>;
    }
    if (type === 'next') {
      return <button><i className="fa fa-angle-double-right"></i></button>;
    }
    return originalElement;
  }









  const [perPage1, setPerPage1] = useState(5);
  const [size1, setSize1] = useState(perPage1);
  const [current1, setCurrent1] = useState(1);
  const PerPageChange1 = (value) => {
    setSize1(value);
    const newPerPage1 = Math.ceil(alarmid.length / value);
    // console.log("newPerPage", newPerPage);
    if (current1 > newPerPage1) {
      setCurrent1(newPerPage1);
    }
  }
  // console.log("organizationprofile", deviceprofile.length);
  const getData1 = (current1, pageSize1) => {
    // console.log("current", current, pageSize)
    return alarmid.slice((current1 - 1) * pageSize1, current1 * pageSize1);
  };

  const PaginationChange1 = (page1, pageSize1) => {
    // console.log("pages", page, pageSize)
    setCurrent1(page1);
    setSize1(pageSize1)
  }

  const PrevNextArrow1 = (current, type1, originalElement1) => {
    if (type1 === 'prev') {
      return <button><i className="fa fa-angle-double-left"></i></button>;
    }
    if (type1 === 'next') {
      return <button><i className="fa fa-angle-double-right"></i></button>;
    }
    return originalElement1;
  }
  return (
    <>
      {/* for alarm */}


      <Modal size="md" isOpen={modal2} toggle={toggle2} backdrop="static">
        <ModalHeader toggle={toggle2}>Device alarm</ModalHeader>
        <ModalBody>
          <Table className="align-items-center table-flush" responsive>
            <thead className="thead-light">
              <tr>
                <tr>
                  <th className="text-center text-dark col-3 text-wrap" style={{width:"12rem"}}><b>Parameter</b></th>
                  {/* <th className="text-center text-dark col-3 text-wrap" style={{width:"12rem"}}><b>Data Type</b></th> */}
                  <th className="text-center text-dark col-3 text-wrap" style={{width:"12rem"}}><b>Alarm Condition</b></th>
                  <th className="text-center text-dark col-3 text-wrap" style={{width:"12rem"}}><b>Alarm Value</b></th>
                  
                  <th className="text-center text-dark col-3 text-wrap" style={{width:"12rem"}}><b>Alarm rules</b></th>

                </tr>
              </tr>
            </thead>
            <tbody>
              <tr>
                {
                  GlobAlarm.map((item, index) => {
                    return <tr >
                      <td className="text-justify text-dark col-3 text-wrap" style={{width:"12rem"}}>{item.alarm_parameter}</td>
                      <td className="text-justify text-dark col-3 text-wrap" style={{width:"12rem"}}>{item.alarm_condition}</td>
                      <td className="text-justify text-dark col-3 text-wrap" style={{width:"12rem"}}>{item.alarm_value}</td>
                      <td className="text-justify text-dark col-3 text-wrap" style={{width:"12rem"}}>{item.rule}</td>

                    </tr>
                  })
                }


              </tr>
            </tbody>
          </Table>
        </ModalBody>
        <ModalFooter>
          {
            <>
              <Button color="danger" className='btn-sm' onClick={toggle2}>Close</Button>
            </>
          }

        </ModalFooter>
      </Modal>

      {/* for device profile */}
      <Modal size="md" isOpen={modal1} toggle={toggle1} backdrop="static">
        <ModalHeader toggle={toggle1}>Device profile</ModalHeader>
        <ModalBody>
          <Table className="align-items-center table-flush" responsive>
            <thead className="thead-light">
              <tr>
                <tr>
                  <th scope="col-4" className="text-center text-dark col-1" style={{ textAlign: "center" }}><b>S.No</b></th>
                  <th scope="col-4" className="text-center text-dark col-6" style={{ textAlign: "center" }}><b>Parameter</b></th>
                  <th scope="col-4" className="text-center text-dark col-5" style={{ textAlign: "center" }}><b>Data Type</b></th>
                </tr>
              </tr>
            </thead>
            <tbody>
              {devDatProf.map((item, index) => {
                return <tr key={index}>
                  <>
                    <tr >
                      <td className="text-center text-dark col-1" style={{ textAlign: "center" }}>{index + 1}</td>
                      <td className="text-center text-dark col-6" style={{ textAlign: "center" }}>{item.parameter}</td>
                      <td className="text-center text-dark col-5" style={{ textAlign: "center" }}>{item.data_type}</td>
                    </tr>
                  </>
                </tr>
              })
              }
            </tbody>
          </Table>
        </ModalBody>
        <ModalFooter>
          {
            <>
              <Button color="danger" className='btn-sm' onClick={toggle1}>Close</Button>
            </>
          }

        </ModalFooter>
      </Modal>

      {/* for device data profile */}
      <Modal size="md" isOpen={modal} toggle={toggle} backdrop="static">
        <ModalHeader toggle={toggle}> Data profile</ModalHeader>
        <ModalBody>
          <Table className="align-items-center table-flush" responsive>
            <thead className="thead-light">
              <tr>
                <tr>
                  <th scope="col" className="text-center text-dark col-1" style={{ textAlign: "center" }}><b>S.No</b></th>
                  <th scope="col" className="text-center text-dark col-11" style={{ textAlign: "center" }}><b>Parameter</b></th>

                </tr>
              </tr>
            </thead>
            <tbody>
              {devicedataprofile.map((item, index) => {
                return <tr key={index}>
                  <>
                    <tr >
                      <td className="text-center text-dark  " style={{ textAlign: "center" }}>{index + 1}</td>
                      <td className="text-center text-dark col-11" style={{ textAlign: "center" }}>{item.parameter}</td>

                    </tr>
                  </>
                </tr>
              })
              }
            </tbody>
          </Table>
        </ModalBody>
        <ModalFooter>
          {
            <>
              <Button color="danger" className='btn-sm' onClick={toggle}>Close</Button>
            </>
          }

        </ModalFooter>
      </Modal>
      <Header />
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
            <Row className="mt-5">
              <Col xl={OnWidth}>
                <Card className="shadow table-scroll-height-device" style={{ height: "600px" }}>
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
                              <Input placeholder="Search" type="search" className="text-dark" value={filtervalue} onInput={(e) => handlefilter(e)}>
                              </Input>
                            </InputGroup>
                          </FormGroup>
                        </Form>
                      </div>
                      <div className="col-6 text-right">
                        <Link to="/admin/AddDevice" >
                          <Button
                            color="primary"
                            size="sm"
                            className="ml--4 mr-1"
                          >Add
                          </Button>
                        </Link>
                        {OnlayoutVis ? null : <i class="fa fa-expand " onClick={OnCardGrp1}></i>}
                      </div>
                    </Row>
                  </CardHeader>
                  <Table className={cardGroups} responsive>
                    <thead className="thead-light">
                      <tr>
                        <th scope="col" className="text-justify text-dark"><b>Device Id</b></th>
                        {OnlayoutVis ? <th scope="col" className="text-justify text-dark"><b>Device Name</b></th> : null}
                        {OnlayoutVis ? <th scope="col" className="text-justify text-dark"><b>Device Category</b></th> : null}
                        <th scope="col" className="text-justify text-dark"><b>Action</b></th>
                      </tr>
                    </thead>
                    <tbody>
                      {deviceList.length > 0 ? deviceList.map((item, index) => {
                        { console.log("itemtfyf", item) }
                        return <tr key={index}>
                          {/* <th scope="row" className="text-justify text-dark">{((current * perPage) - perPage) + index + 1}</th> */}
                          <td className="text-justify text-dark">{item.device_mac_id}</td>
                          {OnlayoutVis ? <td>{item.device_name} </td> : null}
                          {OnlayoutVis ? <td>{item.device_category[0].category_name} </td> : null}
                          {Temp === item.device_id ?
                            <td>   <i class="fa fa-eye text-success" aria-hidden="true" ></i>
                              <Link to={`/admin/DeviceEdit/${item.device_id}`} >  <i class="fas fa-edit ml-2"></i> </Link>
                            </td> :
                            <td>   <i class="fa fa-eye-slash" aria-hidden="true" onClick={() => { OnCardGrp(item.device_id, item.device_mac_id) }}></i>
                              <Link to={`/admin/DeviceEdit/${item.device_id}`} >  <i class="fas fa-edit ml-2"></i> </Link>
                            </td>
                          }
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
                {/* <div className="table-filter-info">
                  <Pagination
                    className="pagination-data"
                    showTotal={(total, range) => `Showing ${range[0]}-${range[1]} of ${total}`}
                    onChange={PaginationChange}
                    total={deviceList.length}
                    current={current}
                    pageSize={size}
                    showSizeChanger={false}
                    itemRender={PrevNextArrow}
                    onShowSizeChange={PerPageChange}
                  />
                </div> */}
              </Col>
              {secondCol ?
                <Col className="mb-5 mb-xl-0" xl="8" >
                  <Card className="shadow " style={{ height: "600px" }}>
                    <CardHeader className="border-0">
                      <Row className="align-items-center">
                        <></>

                        <ul className="text-center d-flex justify-content-center" style={{ padding: "0px" }}>
                          <div className="row text-center d-flex justify-content-center">
                            <div className="col-md-3  text-center d-flex justify-content-center">
                              <li class={test} >
                                <a class="tab-list__link" onClick={fn3} href="#tab1" data-toggle="tab">
                                  <span class="step text-light"><i class='fas fa-tv' ></i></span>
                                  <span class="desc ml-2 text-light">Dashboard</span>
                                </a>
                              </li>
                            </div>
                            <div className="col-md-3  text-center d-flex justify-content-center">
                              <li class={test2} >
                                <a class="tab-list__link" onClick={fn} href="#tab1" data-toggle="tab">
                                  <span class="step text-light"><i class='fas fa-tv' ></i></span>
                                  <span class="desc ml-2 text-light">Device data</span>
                                </a>
                              </li>
                            </div>
                            <div className="col-md-3   ">
                              <li class={test1} >
                                <a class="tab-list__link" href="#tab2" onClick={fn1} data-toggle="tab">
                                  <span class="step text-light"><i class='fas fa-microchip' ></i></span>
                                  <span class="desc  text-light">Device </span>
                                </a>
                              </li>
                            </div>
                            <div className="col-md-3  ">
                              <li class={test} >
                                <a class="tab-list__link" href="#tab2" onClick={fn2} data-toggle="tab">
                                  <span class="step text-light"><i class='fas fa-bell' ></i></span>
                                  <span class="desc   text-light">Alarms </span>
                                </a>
                              </li>
                            </div>
                          </div>
                        </ul>

                      </Row>
                      <Row className="">
                        <div className="col">
                          {
                            view == '0' ?

                              <Col md="12" >
                                <Row className='table-scroll-org4'>
                                  <Col md="6" >
                                    <Card className='table-scroll-org4'>
                                      <CardBody>
                                        <img src={(imgsrc)} alt='nnd,mn' style={{ height: "300px", width: "240px", objectFit: "cover" }}></img>
                                      </CardBody>
                                    </Card>
                                  </Col>
                                  <Col md="6"
                                  >
                                    <Card className='table-scroll-org4'>
                                      <CardBody>
                                        {
                                          Objectkeys.length > 0 ?
                                            <Row>
                                              {
                                                Object.entries(Objectkeys).map(([key, val]) =>
                                                  <>
                                                    <Col md="6" className='mt-4'>
                                                      <td><b>{key} </b></td>
                                                    </Col>
                                                    <Col md="6" className='mt-4'>
                                                      <td><b> {val}  </b></td>
                                                    </Col>
                                                  </>
                                                )
                                              }
                                            </Row> : <p className="text-dark"><b>No Data Found</b></p>
                                        }
                                      </CardBody>
                                    </Card>
                                  </Col>
                                  <Col>
                                  </Col>
                                  <Col>
                                  </Col>
                                </Row>
                              </Col>


                              :
                              view == '4' ? <p>

                                <Row className="">
                                  {


                                    ObjectrawData.length > 0 ?
                                      <Col className='table-scroll-org4'>

                                        <Table className=" table-flush " responsive>
                                          <thead className="thead-light ">
                                            <tr>
                                              {
                                                Object.entries(getData(current, size)).map(([key, val], index) => {
                                                  return index == 0 ? <tr>
                                                    {Object.entries(val).map(([key, val], index) => {
                                                      return <>
                                                        <td className="text-justify text-dark text-wrap " style={{ width: "40rem" }} ><b>{key}</b>
                                                        </td>
                                                      </>
                                                    })} </tr> : null
                                                }
                                                )
                                              }
                                            </tr>
                                          </thead>
                                          <tbody>
                                            <tr>
                                              {
                                                Object.entries(getData(current, size)).map(([key, val], index) => {
                                                  return <tr>
                                                    {Object.entries(val).map(([key, val], index) => {
                                                      return <>
                                                        <td className="text-justify text-dark text-wrap " style={{ width: "40rem" }}>{val}
                                                        </td>
                                                      </>
                                                    })} </tr>
                                                }
                                                )
                                              }
                                            </tr>
                                          </tbody>
                                        </Table>

                                      </Col>
                                      : <p><b className="text-dark">No Data  Found</b></p>}
                                </Row>
                                <div className="table-filter-info">
                                  <Pagination
                                    className="pagination-data"
                                    showTotal={(total, range) => `Showing ${range[0]}-${range[1]} of ${total}`}
                                    onChange={PaginationChange}
                                    total={ObjectrawData.length}
                                    current={current}
                                    pageSize={size}
                                    showSizeChanger={false}
                                    itemRender={PrevNextArrow}
                                    onShowSizeChange={PerPageChange}
                                  />
                                </div>

                              </p> : view == '0' ? <></> :
                                view == '1' ? <>  <Button
                                  color="primary"
                                  onClick={DeviceView}
                                  size="sm"
                                  className="mt-4"
                                >
                                  Device info
                                </Button>
                                  {/* <Button
                                  color="primary"
                                  onClick={DeviceView2}
                                  size="sm"
                                  className="mt-4"
                                >
                                    Organization  Info
                                  </Button> */}
                                </>


                                  : view == '2' ? <></> : view == "1" ? <></> : view == "0" ? view == '3' : view == '3' ?

                                    <Col md="12" >
                                      <Row className='table-scroll-org4'>
                                        <Col md="6" >
                                          <Card className='table-scroll-org4'>
                                            <CardBody>
                                              <img src={(imgsrc)} alt='nnd,mn' style={{ height: "300px", width: "240px", objectFit: "cover" }}></img>
                                            </CardBody>
                                          </Card>
                                        </Col>
                                        <Col md="6"
                                        >

                                          <Card className='table-scroll-org4'>
                                            <CardBody>
                                              <Row>
                                                {
                                                  Object.entries(Objectkeys).map(([key, val]) =>
                                                    <>

                                                      <Col md="6" className='mt-4'>
                                                        <td ><b>{key} </b></td>
                                                      </Col>
                                                      <Col md="6" className='mt-4'>
                                                        <td> {val}  </td>
                                                      </Col>
                                                    </>
                                                  )
                                                }

                                              </Row>
                                            </CardBody>
                                          </Card>
                                        </Col>
                                        <Col>
                                        </Col>
                                        <Col>
                                        </Col>
                                      </Row>
                                    </Col>
                                    : view
                          }
                          {view == '0' ? <></>
                            : view == '1' ? <></> : view == '2' ?
                              <>  <Button
                                color="primary"
                                onClick={AlarmView}
                                size="sm"
                                className="mt-4"
                              >
                                Alarm event list
                              </Button>  <Button
                                color="primary"
                                onClick={AlarmView2}
                                size="sm"
                                className="mt-4"
                              >
                                  Alarm rules
                                </Button></> : view == '3' ? <></> : <></>}
                          {HideContent ? <>{view1 ?
                            <Container className="mt-4 " >
                              <Row className="mt-5 ">
                                <Col className="mb-5 mb-xl-0 " xl="12">
                                  <Card className="shadow alarm-event" >
                                    <CardHeader className="border-0 ">
                                      <Row className="align-items-center">
                                        <div className="col">
                                        </div>
                                      </Row>
                                    </CardHeader>
                                    {alarmid.length > 0 ?
                                      <Table className="align-items-center table-flush  " responsive>
                                        <thead className="thead-light">
                                          <tr>
                                            <th scope="col" className="text-justify text-dark"><b>S.No</b></th>
                                            <th scope="col" className="text-justify text-dark"><b>Date & Time</b></th>
                                            <th scope="col" className="text-justify text-dark"><b>Alarm name</b></th>
                                            {/* <th scope="col" className="text-justify text-dark"><b>Alarm parameter name</b></th> */}
                                            <th scope="col" className="text-justify text-dark"><b>Alarm Condition</b></th>
                                            <th scope="col" className="text-justify text-dark"><b>Alarm value</b></th>
                                            <th scope="col" className="text-justify text-dark"><b>Alarm notification</b></th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          {getData1(current1, size1).map((item, index) => {
                                            return <tr key={index}>
                                              <th scope="row" className="text-justify text-dark">{index + 1}</th>
                                              <td className="text-justify text-dark">{item.date_time}</td>
                                              <td className="text-justify text-dark">{item.alarm_name}</td>
                                              {/* <td className="text-justify text-dark">{item.alarm_parameter_name}</td> */}
                                              <td className="text-justify text-dark">{item.alarm_condition}</td>
                                              <td className="text-justify text-dark">{item.alarm_value}</td>
                                              <td className="text-justify text-dark">{item.notification}</td>
                                            </tr>
                                          })
                                          }
                                        </tbody>

                                      </Table>

                                      :
                                      < div className="row text-center">
                                        <div className="col-12  text-center" style={{ textAlign: "center" }}>
                                          <td className="text-dark"><b>No Data Found</b></td>
                                        </div>
                                      </div>
                                    }
                                  </Card>
                                </Col>
                                <div className="table-filter-info">

                                  <Pagination
                                    className="pagination-data"
                                    showTotal={(total, range) => `Showing ${range[0]}-${range[1]} of ${total}`}
                                    onChange={PaginationChange1}
                                    total={alarmid.length}
                                    current={current1}
                                    pageSize={size1}
                                    showSizeChanger={false}
                                    itemRender={PrevNextArrow1}
                                    onShowSizeChange={PerPageChange1}
                                  />
                                </div>
                              </Row>
                            </Container> :
                            <Container className="mt-4" fluid >
                              <Row className="mt-2 ">
                                <Col className="mb-5 mb-xl-0 " xl="12" style={{ padding: "0px" }}>
                                  <Card className="shadow">
                                    <CardHeader className="border-0">
                                    </CardHeader>
                                    <Table className="align-items-center table-flush " responsive>
                                      <thead className="thead-light">
                                        <tr>
                                          <th scope="col" className='text-dark text-center'><b>Alarm Name</b></th>
                                          <th scope="col" className='text-dark text-center'><b>Alarm Parameter Name</b></th>

                                          <th scope="col" className='text-dark text-center'><b>Alarm rules</b></th>
                                          <th scope="col" className='text-dark text-center'><b>Alarm Value</b></th>
                                          <th scope="col" className='text-dark text-center'><b>Alarm Condition</b></th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr className='text-dark text-center'>
                                          <td>
                                            {
                                              alarmname.alarm_name
                                            }
                                          </td>
                                          <td>
                                            {
                                              alarmparmater.map((item, index) => {
                                                return <>
                                                  <li key={index} className="text-justify  text-dark">{item.alarm_parameter}</li>
                                                </>
                                              })
                                            }
                                          </td>
                                          <td>
                                            {
                                              alarmparmater.map((item, index) => {
                                                return <>
                                                  <li key={index} className="text-justify  text-dark">{item.rule
                                                  }</li>
                                                </>
                                              })
                                            }
                                          </td>
                                          <td>
                                            {
                                              alarmparmater.map((item, index) => {
                                                return <>
                                                  <li key={index} className="text-justify  text-dark">{item.alarm_value}</li>
                                                </>
                                              })
                                            }
                                          </td>
                                          <td>
                                            {
                                              alarmparmater.map((item, index) => {
                                                return <>
                                                  <li key={index} className="text-justify  text-dark">{item.alarm_condition}</li>
                                                </>
                                              })
                                            }
                                          </td>

                                        </tr>
                                      </tbody>
                                    </Table>
                                  </Card>
                                </Col>
                              </Row>
                            </Container>}</> : null}

                          {HideContent1 ? <>{view2 ?
                            <div class="container  table-scroll center-block " >
                              <div class="row mt-3 " >
                                <div class="col-6">
                                  <td><b>Device id</b></td>
                                </div>
                                <div class="col-6">
                                  {console.log("dfgsdgdg", DeviceName)}
                                  <td> {DeviceId}</td>
                                </div>
                                <div class="col-6 mt-4">
                                  <td> <b>Device name</b></td>
                                </div>
                                <div class="col-6 mt-4">
                                  <td> {DeviceName}</td>
                                </div>
                              </div>
                              <div class="row" >
                                <div class="col-6  mt-4">
                                  <td><b>Device category</b></td>
                                </div>
                                <div class="col-6 mt-4">
                                  <td>{DeviceCategory}</td>
                                </div>
                                <div class="col-6 mt-4">
                                  <td> <b>Data profile</b></td>
                                </div>
                                <div class="col-6 mt-4">
                                  <td>
                                    <ol>
                                      {device_data_profile.map((item, index) => {
                                        return <li key={index} className="ml--4">{item.deviceprofileName}  <i class="fa fa-eye  text-success" onClick={toggle} aria-hidden="true"> </i></li>
                                      })
                                      }
                                    </ol>
                                  </td>
                                </div>
                              </div>
                              <div class="row " >
                                <div class="col-6 mt-4">
                                  <td>     <b>Device profile</b></td>
                                </div>
                                <div class="col-6 mt-4">
                                  <td>
                                    <ol>
                                      {device_profile.map((item, index) => {
                                        return <li key={index} value={item.deviceprofileName} className="ml--4">{item.deviceprofileName} <i class="fa fa-eye text-success" onClick={toggle1} aria-hidden="true"></i></li>
                                      })
                                      }
                                    </ol>
                                  </td>
                                </div>
                                <div class="col-6 mt-4">
                                  <td>   <b>Device alarm</b></td>
                                </div>
                                <div class="col-6 mt-4">
                                  <td>
                                    <ol>
                                      {global_alarm_rule.map((item, index) => {
                                        return <li key={index} className="ml--4">{item.alarm_name}  <i class="fa fa-eye text-success" onClick={() => { toggle2(); func(item) }} aria-hidden="true"> </i></li>
                                      })
                                      }
                                    </ol>
                                  </td>
                                </div>

                              </div>
                              <div class="row " >
                                {/* <div class="col-6  mt-3">
                                  <td><b>platform </b></td>
                                </div>
                                <div class="col-6  mt-3">
                                  <td>  {platform}   </td>
                                </div> */}
                                <div class="col-6  mt-3">
                                  <td><b> Protocol type</b></td>
                                </div>
                                <div class="col-6  mt-3">
                                  <td> {protocol_type} </td>
                                </div>
                              </div>
                              <div class="row mt-3 " >
                                <div class="col-6">
                                  <td>  <b>Dashboard</b></td>
                                </div>
                                <div class="col-6">
                                  <td>  <button type="submit" className="btn btn-success btn-sm mb-2" onClick={navigateDashbord}><i className="fas fa-chalkboard text-dark"></i> Dashboard</button></td>
                                </div>

                              </div>

                            </div>

                            :
                            <div>

                            </div>

                            // <div class="container  table-scroll-org11 " >


                            //   <div class="row mt-3 " >
                            //     <div class="col-6">
                            //       <td>  <b>Dashboard</b></td>
                            //     </div>
                            //     <div class="col-6">
                            //       <td>  <button type="submit" className="btn btn-success btn-sm mb-2" onClick={navigateDashbord}><i className="fas fa-chalkboard text-dark"></i> Dashboard</button></td>
                            //     </div>

                            //   </div>
                            //   <div class="row mt-3 " >
                            //     <div class="col-6">
                            //       <td>  <b>Organization Name</b></td>
                            //     </div>
                            //     <div class="col-6">
                            //       <td>  {OrganizationName}</td>
                            //     </div>
                            //     <div class="col-6 mt-4">
                            //       <td> <b>Address</b></td>
                            //     </div>
                            //     <div class="col-6 mt-4">
                            //       <td>   {organizationAddress}</td>
                            //     </div>
                            //     <div class="col-6 mt-4">
                            //       <td> <b>Organization Image</b></td>
                            //     </div>
                            //     <div class="col-6 mt-4">
                            //       <td>  <img src={OrganizationLogo} style={{ height: "30px", width: "30px" }}></img> </td>
                            //     </div>
                            //     <th className="mt-4 ml-3 text-center"><b>Contact Person Details :</b></th>
                            //   </div>
                            //   <div class="row " >
                            //     <div class="col-6 mt-4">
                            //       <td> <b>Contact Name</b></td>
                            //     </div>
                            //     <div class="col-6 mt-4">
                            //       <td>   {Organizationcontact.contactName}</td>
                            //     </div>
                            //     <div class="col-6 mt-4">
                            //       <td> <b>Contact Designation</b></td>
                            //     </div>
                            //     <div class="col-6 mt-4">
                            //       <td>   {Organizationcontact.contactDesignation}</td>
                            //     </div>
                            //     <div class="col-6 mt-4">
                            //       <td> <b>Contact Email</b></td>
                            //     </div>
                            //     <div class="col-6 mt-4">
                            //       <td>   {Organizationcontact.contactemail}</td>
                            //     </div>
                            //     <div class="col-6 mt-4">
                            //       <td> <b>Contact phone</b></td>
                            //     </div>
                            //     <div class="col-6 mt-4">
                            //       <td>   {Organizationcontact.contactphone}</td>
                            //     </div>
                            //     <th className="mt-4 ml-3 text-center"><b>Notification Person Details :</b></th>
                            //   </div>
                            //   <div class="row " >
                            //     <div class="col-6 mt-4 ">
                            //       <td> <b>Notification Contact Name</b></td>
                            //     </div>
                            //     <div class="col-6 mt-4">
                            //       <td>   {OrganizationNotcontact.NotifycontactName}</td>
                            //     </div>
                            //     <div class="col-6 mt-4">
                            //       <td> <b>Notification Contact Designation</b></td>
                            //     </div>
                            //     <div class="col-6 mt-4">
                            //       <td>   {OrganizationNotcontact.NotifycontactDesignation
                            //       }</td>
                            //     </div>
                            //     <div class="col-6 mt-4">
                            //       <td> <b>Notification Contact Email</b></td>
                            //     </div>
                            //     <div class="col-6 mt-4">
                            //       <td>   {OrganizationNotcontact.Notifycontactemail}</td>
                            //     </div>
                            //     <div class="col-6 mt-4">
                            //       <td> <b>Notification Contact phone</b></td>
                            //     </div>
                            //     <div class="col-6 mt-4 mb-5">
                            //       <td>   {OrganizationNotcontact.Notifycontactphone
                            //       }</td><br />
                            //     </div>
                            //     {/* <th className="mt--4  mb-5  ml-3 text-center"><b>Notification Person Details</b></th> */}
                            //   </div>

                            // </div>

                          }</> : null}
                        </div>
                      </Row>
                    </CardHeader>

                  </Card>
                </Col> : null
              }
            </Row>
          </Container >
      }
    </>
  );




}



export default Device;


