import React, { useEffect, useState, useCallback } from 'react'
import {
  Card, CardHeader, Container, Table, Row, Col, Input, CardBody,
} from 'reactstrap'
import Header from 'components/Headers/Header'
import DatePicker from "react-datepicker";
import './Pagination.css';
import "react-datepicker/dist/react-datepicker.css";
import { Button } from 'bootstrap'
import { contains } from 'jquery'
import { convertTypeAcquisitionFromJson } from 'typescript';
import Pagination from 'rc-pagination';






export default function Paginationnn() {
  const [view, setview] = useState(true)
  const [device, setdevice] = useState([])
  const [rawdata, setrawdata] = useState([])
  const [datacount, setdatacount] = useState({})
  const [startDate, setStartDate] = useState(new Date());
  const [imgsrc, setimgsrc] = useState("")
  let globalvar = 0;
  // const [imgsrc1, setimgsrc] = useState("")
  let [matchedDate, setmatchedDate] = useState([])
  const [Temp, setTemp] = useState("")
  let [testState, settestState] = useState()
  const [rawdataapi, setrawdataapi] = useState([])
  let firstView = {};
  const [perPage, setPerPage] = useState(10);
  const [size, setSize] = useState(perPage);
  const [current, setCurrent] = useState(1);
  const [classObject, setclassObject] = useState([
    {
      class_name: "baby_crying",
      image_path: require("../../assets/img/GIfImages/bby-2.gif")
    },
    {
      class_name: "gun_shot",
      image_path: require("../../assets/img/GIfImages/gun_shot.gif")
    },
    {
      class_name: "dog_bark",
      // image_path: require("../../assets/img/GIfImages/dog_barking.gif")
      // D:\NB IOT\argon-dashboard-react-master\src\assets\img\GIfImages\dogbarking.gif

      // image_path: require("../../assets/img/GIfImages/barking-lab.gif")
      image_path: require("../../assets/img/GIfImages/dogbarking.gif")
    },
    {
      class_name: "drilling",
      image_path: require("../../assets/img/GIfImages/drilling.gif")
    },
    {
      class_name: "car_theft_alarm",

      image_path: require("../../assets/img/GIfImages/original.webp")
      // image_path: require("../../assets/img/GIfImages/car_theft.gif")
    },
    {
      class_name: "jack_hammer",
      image_path: require("../../assets/img/GIfImages/jack_hammer.gif")
    },
    {
      class_name: "fire_alarm",
      image_path: require("../../assets/img/GIfImages/fire_alarm.gif")
    },
    {
      class_name: "glass_break",
      image_path: require("../../assets/img/GIfImages/glass_braking.gif")
    },
    {
      class_name: "hammer",
      image_path: require("../../assets/img/GIfImages/hammer1.gif")
    },

    {
      class_name: "women_scream",
      // image_path: require("../../assets/img/GIfImages/women_screaming.jfif")
      image_path: require("../../assets/img/GIfImages/women-screaming.gif")
    },
    {
      class_name: "men_scream",

      image_path: require("../../assets/img/GIfImages/man_screaming.gif")
    }
  ])
  useEffect(() => {
    fetch("http://192.168.0.138:8088/api/v1/device", {
    }).then((result) => {
      result.json().then((resp) => {
        setdevice(resp)
        console.log("devicedataCategory", resp);
      })
    })
  }, [])
  useEffect(() => {
    // settestState(false)
    fetch("http://192.168.0.138:8088/api/v1/device", {
    }).then((result) => {
      result.json().then((resp) => {



        setdevice(resp)

        let viewfirst;

        console.log("view firstt", resp);
        //this is for eye icon
        console.log("vvvvv11", view)
        // let getId;

        if (sessionStorage.getItem("Id") != null) {
          console.log("ifcondition")
          viewfirst = sessionStorage.getItem("Id")
          sessionStorage.clear()
          setTemp(viewfirst);
          let editValue = resp.find((value) => value.device_mac_id == viewfirst);
          console.log("thisiseditValue", editValue)
          setdevice((oldValues) => {
            return oldValues.filter((value, i) => value.device_mac_id !== viewfirst);
          });
          setdevice((oldValues) => {
            return [editValue, ...oldValues]
          })
        }
        else {
          viewfirst = resp[0].device_mac_id
          console.log("else part")
          setTemp(viewfirst)
          setdevice(resp)
        }
        fetch(`http://192.168.0.138:8088/api/v1/raw_data_dev_id/${viewfirst}`, {
        }).then((result) => {
          console.log("the condition reached")
          result.json().then((resp) => {
            setrawdata([resp])
            setrawdataapi([resp])
            console.log("rawdataapi", rawdataapi);
            console.log("rawdata", resp.parsed_data);
            setdatacount(resp.parsed_data[resp.parsed_data.length - 1])
            console.log("response", resp.parsed_data[resp.parsed_data.length - 1]);
            console.log("data =====>", datacount);
            let variable = resp.parsed_data[resp.parsed_data.length - 1]
            for (let index = 0; index < classObject.length; index++) {
              if (variable.class_name == classObject[index].class_name) {
                console.log("i'm inside the fn")
                let source = classObject[index].image_path
                setimgsrc(source)
                console.log("source", source)
              }
            }

          })
        })
      })
    })

  }, [])
  const [test, settest] = useState(true)
  const [val, setval] = useState()
  const [fortrue, setfortrue] = useState(true)
  const [onsetviewfirst, setviewfirst] = useState("")
  const [testvar, setestvar] = useState("");

  const [checkflag, setcheckflag] = useState(false)

  useEffect(() => {

    console.log("thisise", testvar)
    if (checkflag) {
      console.log("entered")
      setview(true)

    }

    setcheckflag(true)
  }, [testvar])
  let deviceMacId = (e) => {
    setestvar(e)
    console.log("the function is clicked", testState);
    console.log("itemee", e)
    setTemp(e)
    settestState(false)
    fetch(`http://192.168.0.138:8088/api/v1/raw_data_dev_id/${e}`, {
    }).then((result) => {
      result.json().then((resp) => {
        setrawdata([resp])
        setrawdataapi([resp])
        console.log("setrawdata", rawdata);
        console.log("rawdata", resp.parsed_data);
        setdatacount(resp.parsed_data[resp.parsed_data.length - 1])
        console.log("response", resp.parsed_data[resp.parsed_data.length - 1]);
        console.log("data =====>", datacount);
        let variable = resp.parsed_data[resp.parsed_data.length - 1]
        for (let index = 0; index < classObject.length; index++) {
          if (variable.class_name == classObject[index].class_name) {
            // console.log("For loop ==> ", classObject[index].class_name);
            console.log("i'm inside the fn")
            let source = classObject[index].image_path
            setimgsrc(source)
            console.log("source", source)
          }
        }

      })
    })
  }
  useEffect(() => {
    console.log("raw data click", rawdata)
  }, [rawdata]);
  const [filterdata, setfilterdata] = useState("")
  let filterView = () => {
    setview(false)
  }
  useEffect(() => {
    console.log("raw data click", rawdata)
  }, [rawdata]);
  const PerPageChange = (value) => {
    setSize(value);
    const newPerPage = Math.ceil(rawdata.length / value);
    if (current > newPerPage) {
      setCurrent(newPerPage);
    }
  }

  const getData = (current, pageSize) => {
    // Normally you should get the data from the server
    return rawdata.slice((current - 1) * pageSize, current * pageSize);
  };

  const PaginationChange = (page, pageSize) => {
    setCurrent(page);
    setSize(pageSize)
  }

  const PrevNextArrow = (current, type, originalElement) => {
    if (type === 'prev') {
      return <button><i className="fa fa-users"></i></button>;
    }
    if (type === 'next') {
      return <button><i className="fa fa-angle-double-right"></i></button>;
    }
    return originalElement;
  }
  return (
    <>

      <Col md="12">
        <Row className='mt-5'>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">

                {rawdataapi.map((item, index) => {
                  return <div key={index}>
                    <td className="text-justify text-dark">{item.device_mac_id}</td>
                    {/* <th scope="row" className="text-justify text-dark">{index + 1}</th> */}


                  </div>
                })
                }
              </CardHeader>
              <Col>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>

                      <Col>
                        <Row>

                          <Col md="1" className='table-borderless'>
                            <th scope="col" className="text-justify text-dark"><b>S.No</b></th>
                          </Col>

                          <Col md="3" className='table-borderless'>
                            <th scope="col" className="text-justify text-dark"><b>Timestamp</b></th>
                          </Col>
                          <Col md="2" className='table-borderless'>
                            <th scope="col" className="text-justify text-dark"><b>class name</b></th>
                          </Col>

                          <Col md="2" className='table-borderless'>
                            <th scope="col" className="text-justify text-dark"><b>Date</b></th>
                          </Col>
                          <Col md="2" className='table-borderless'>
                            <th scope="col" className="text-justify text-dark"><b>Time</b></th>
                          </Col>
                        </Row>
                      </Col>
                    </tr>
                  </thead>
                  <tbody >
                    {rawdataapi.map((item, index) => {
                      return <div key={index}>
                        {/* <th scope="row" className="text-justify text-dark">{index + 1}</th> */}

                        {item.parsed_data.map((item, index) => {
                          return <>
                            <Col>
                              <Row>
                                <Col md="1" className='table-borderless'>
                                  <td className="text-justify text-dark">{index + 1}</td>
                                </Col>
                                <Col md="3" className='table-borderless'>
                                  <td className="text-justify text-dark">{item.date} {item.time}</td>
                                </Col>

                                <Col md="2" className='table-borderless'>
                                  <td className="text-justify text-dark">{item.date}</td>
                                </Col>

                                <Col md="2" className='table-borderless'>
                                  <td className="text-justify text-dark">{item.time}</td>
                                </Col>

                                <Col md="2" className='table-borderless'>
                                  <td className="text-justify text-dark">{item.class_name}</td>
                                </Col>
                              </Row>
                            </Col>
                          </>
                        })
                        }
                      </div>
                    })
                    }
                  </tbody>
                </Table>
              </Col>
            
            </Card>
          </div>
        </Row>
      </Col>

  
  

    </>
  )
}

