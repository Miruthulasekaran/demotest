import React, { useEffect, useState } from 'react'
import { Card, CardHeader, Container, Table, Row, Col, Input, CardBody } from 'reactstrap'
import Header from 'components/Headers/Header'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { Button } from 'bootstrap'
import { contains } from 'jquery'
export default function Dashboard() {



    const [view, setview] = useState(true)
    const [device, setdevice] = useState([])
    const [rawdata, setrawdata] = useState([])
    const [datacount, setdatacount] = useState({})
    const [startDate, setStartDate] = useState(new Date());
    const [imgsrc, setimgsrc] = useState("")
    // const [imgsrc1, setimgsrc] = useState("")
    let [matchedDate, setmatchedDate] = useState([])
    const [Temp, setTemp] = useState("")
    let [testState, settestState] = useState()
    let firstView = {};

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
            image_path: require("../../assets/img/GIfImages/dog_barking.gif")
        },
        {
            class_name: "drilling",
            image_path: require("../../assets/img/GIfImages/drilling.gif")
        },
        {
            class_name: "car_theft_alarm",
            image_path: require("../../assets/img/GIfImages/car_theft.gif")
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
            image_path: require("../../assets/img/GIfImages/women_screaming.jfif")
        },
        {
            class_name: "men_scream",
            image_path: require("../../assets/img/GIfImages/man_screaming.gif")
        }
    ])
    // settestState(false)
    useEffect(() => {
        fetch("http://hubeoxys.com:8086/api/v1/device", {

        }).then((result) => {
            result.json().then((resp) => {
                setdevice(resp)
                console.log("devicedataCategory", resp);
            })
        })
    }, [])
    let img = "";
    const [dummy, setdummy] = useState()
    useEffect(() => {
        // settestState(false)
        fetch("http://hubeoxys.com:8086/api/v1/device", {
        }).then((result) => {
            result.json().then((resp) => {
                setdevice(resp)
                let viewfirst = resp[0].device_mac_id
                console.log("view firstt", viewfirst);
                fetch(`http://hubeoxys.com:8086/api/v1/raw_data_dev_id/${viewfirst}`, {
                }).then((result) => {
                    result.json().then((resp) => {
                        console.log("yyyR", datacount);
                        setdummy(resp.parsed_data[0])
                        // setdummy(false)
                        console.log("tested", resp.parsed_data[resp.parsed_data.length - 1]);
                        firstView = resp.parsed_data[0]
                        settestState(resp.parsed_data[resp.parsed_data.length - 1])
                        for (let index = 0; index < classObject.length; index++) {

                            if (resp.parsed_data[resp.parsed_data.length - 1].class_name == classObject[index].class_name) {
                                // console.log("For loop ==> ", classObject[index].class_name);
                                let source = classObject[index].image_path
                                setimgsrc(source)
                                img = source

                                console.log("testState.class_name", img)
                            }
                        }
                    })
                })
            })
        })

    }, [])

    useEffect(() => {
        console.log("raw data click", rawdata)
    }, [rawdata]);


    let deviceMacId = (e) => {
        console.log("item", e)
        setTemp(e)
        settestState(false)

        fetch(`http://hubeoxys.com:8086/api/v1/raw_data_dev_id/${e}`, {
        }).then((result) => {
            result.json().then((resp) => {
                setrawdata([resp])
                console.log("setrawdata", resp);
                console.log("rawdata", resp.parsed_data);
                setdatacount(resp.parsed_data[resp.parsed_data.length - 1])
                console.log("response", resp.parsed_data[resp.parsed_data.length - 1]);
                console.log("data =====>", datacount);
                let variable = resp.parsed_data[resp.parsed_data.length - 1]
                for (let index = 0; index < classObject.length; index++) {
                    if (variable.class_name == classObject[index].class_name) {
                        // console.log("For loop ==> ", classObject[index].class_name);
                        let source = classObject[index].image_path
                        setimgsrc(source)
                        console.log("source", source)
                    }
                }

            })
        })
        // window.location.reload();

    }

    useEffect(() => {
        // deviceMacId()
        console.log("raw data click", rawdata)
    }, [rawdata]);

    const [filterdata, setfilterdata] = useState("")

    let filterView = () => {
        setview(false)

    }

    let setfilter = (date, id) => {
        setview(false)
        console.log("dev_id ==> ", id);
        console.log("filterdata", date.target.value)
        let temp = [];
        for (let index = 0; index < rawdata[0].parsed_data.length; index++) {
            if (date.target.value == rawdata[0].parsed_data[index].date) {
                temp.push(rawdata[0].parsed_data[index])
            }
        }
        setmatchedDate(temp)
        console.log("matched date => ", matchedDate);
        console.log("date matches");

    }



    return (
        <>
            <Header />
            {console.log("this is the data1", testState)}
            {/* <div class="dropdown float-right mt-4 mr-7" >
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Filter
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" onClick={() => { setview(false) }}>Two Days</a>
                </div>
            </div> */}
            {/* <div onClick={() => { filterView(false) }} >
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}  className='mt-4 mr-7 float-left'/>
            </div> */}
            <Container className='mt-4'  >
                <h2 className=" text-center mb-4">
                    ACD Dashboard
                </h2>
                <Row>
                    <Col md="5">
                        <Card className='table-scroll-filter'>
                            <CardHeader>
                                <Table className="align-items-center table-flush" responsive>
                                    <thead className="thead-light">
                                        <tr>
                                            <th scope="col" className="text-justify text-dark"><b>S.No</b></th>
                                            <th scope="col" className="text-justify text-dark"><b>Device Id</b></th>
                                            <th scope="col" className="text-justify text-dark"><b>Action</b></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            device.map((item, index) => {
                                                return <tr key={index}>
                                                    <th scope="row" className="text-justify text-dark">{index + 1}</th>
                                                    <td className="text-justify text-dark">{item.device_mac_id}</td>
                                                    {/* {Temp === item.device_mac_id ?
                                                        <td>   <i class="fa fa-eye text-success" aria-hidden="true" onClick={() => { setview(true) }}></i>
                                                        </td> :
                                                        <td>   <i class="fa fa-eye text-succe" aria-hidden="true" onClick={() => { deviceMacId(item.device_mac_id) }}></i>
                                                        </td>
                                                    } */}
                                                    <td>
                                                    <i class="fa fa-eye text-success" aria-hidden="true" onClick={() => { deviceMacId(item.device_mac_id) }}></i>
                                                    </td>
                                                    {/* <td className="text-justify text-dark" >
                                                        <i class="fas fa-eye " onClick={() => { deviceMacId(item.device_mac_id) }} ></i>
                                                    </td> */}
                                                </tr>
                                            })
                                        }
                                    </tbody>
                                </Table>
                            </CardHeader>
                        </Card>
                    </Col>

                    {
                        testState ? <>
                            {/* <p>{testState.date}</p> */}
                            <Col md="7" >
                                <Row>
                                    <Col md="5" >
                                        <Card className='table-scroll-filter'>
                                            <CardBody>
                                                <img src={(imgsrc)} alt='nnd,mn' style={{ height: "300px", width: "150px" }}></img>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                    <Col md="7" >
                                        <Card className='table-scroll-filter'>
                                            <CardBody>
                                                <Row>
                                                    <Col md="6" className='mt-4'>
                                                        <td><b>Device_mac_id:</b></td>
                                                    </Col>
                                                    <Col md="6" className='mt-4'>
                                                        <td>{testState.device_id}</td>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col md="6" className='mt-3'>
                                                        <td><b>Date :</b></td>
                                                    </Col>
                                                    <Col md="6" className='mt-3'>
                                                        <td>{testState.date}</td>
                                                    </Col>
                                                    <Col md="6" className='mt-3'>
                                                        <td><b>class name :</b></td>
                                                    </Col>
                                                    <Col md="6" className='mt-3'>
                                                        <td>{testState.class_name}</td>
                                                    </Col>
                                                    <Col md="6" className='mt-3'>
                                                        <td><b>Time :</b></td>
                                                    </Col>
                                                    <Col md="6" className='mt-3'>
                                                        <td>{testState.time}</td>
                                                    </Col>
                                                </Row>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                </Row>
                            </Col>
                        </>
                            : null
                    }


                    {
                        view ? <>
                            <Col md="7" >
                                <Row>
                                    {
                                        rawdata.map((item, index) => {
                                            console.log("test111", item)
                                            console.log("ccc", item.parsed_data[item.parsed_data.length - 1].class_name)
                                            console.log("xxx", datacount.class_name)
                                            return <>
                                                <Col md="5" >
                                                    <Card className='table-scroll-filter'>
                                                        <CardBody>
                                                            <img src={(imgsrc)} alt='nnd,mn' style={{ height: "300px", width: "150px" }}></img>
                                                        </CardBody>
                                                    </Card>
                                                </Col>
                                                <Col md="7" >
                                                    <Card className='table-scroll-filter'>
                                                        <CardBody>
                                                            <Row>
                                                                <Col md="12">
                                                                    {/* <input type='date' data-date-format="dd/mm/yyyy" onChange={event => setfilter(event, item.device_mac_id)} id='dateinput' className='mr--5 text-dark text-justify' ></input> */}
                                                                    {/* <Button id="dateSelect"></Button> */}
                                                                    {/* <button className='btn btn-primary' id='filter_button' >fdhdg</button> */}
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col md="6" className='mt-4'>
                                                                    <td><b>device_mac_id:</b></td>
                                                                </Col>
                                                                <Col md="6" className='mt-4'>
                                                                    <td>{item.device_mac_id}</td>
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col md="6" className='mt-3'>
                                                                    <td><b>Date :</b></td>
                                                                </Col>
                                                                <Col md="6" className='mt-3'>
                                                                    <td>{datacount.date}</td>
                                                                </Col>
                                                                <Col md="6" className='mt-3'>
                                                                    <td><b>className :</b></td>
                                                                </Col>
                                                                <Col md="6" className='mt-3'>
                                                                    <td>{datacount.class_name}</td>
                                                                </Col>
                                                                <Col md="6" className='mt-3'>
                                                                    <td><b>Time :</b></td>
                                                                </Col>
                                                                <Col md="6" className='mt-3'>
                                                                    <td>{datacount.time}</td>
                                                                </Col>
                                                            </Row>
                                                        </CardBody>
                                                    </Card>
                                                </Col>
                                            </>
                                        })
                                    }
                                </Row>
                            </Col>
                        </> : <>
                            {/* <Col md="7">

                                <Card className='table-scroll-filter'>
                                    <Row className='mt-4 float-right' style={{marginLeft:"300px"}}>
                                        <Col md="12" className='float-right'>
                                            <input type='date' data-date-format="dd/mm/yyyy" onChange={event => setfilter(event)} id='dateinput' className='mr--5 text-dark float-right' ></input>
                                         
                                        </Col>
                                    </Row>
                                    <CardHeader>
                                        <Table className="align-items-center table-flush" responsive>
                                            <thead className="thead-light">
                                                <tr>
                                                    <th scope="col" className="text-justify text-dark"><b>S.No</b></th>
                                                    <th scope="col" className="text-justify text-dark"><b>Date</b></th>
                                                    <th scope="col" className="text-justify text-dark"><b>Time</b></th>
                                                    <th scope="col" className="text-justify text-dark"><b>Device id</b></th>
                                                    <th scope="col" className="text-justify text-dark"><b>Class name</b></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    matchedDate.length > 0 ?
                                                        matchedDate.map((item, index) => {
                                                            console.log("TestMatch", item)
                                                            return <> <tr>
                                                                <th scope="row" className="text-justify text-dark">{index + 1}</th>
                                                                <td className="text-justify text-dark">{item.date}</td>
                                                                <td className="text-justify text-dark">{item.time}</td>
                                                                <td className="text-justify text-dark">{item.device_id}</td>
                                                                <td className="text-justify text-dark">{item.class_name}</td>

                                                            </tr>

                                                            </>
                                                        })
                                                        : <td><b>No Data Found</b></td>
                                                }
                                            </tbody>
                                        </Table>
                                    </CardHeader>

                                </Card>
                            </Col> */}
                        </>
                    }
                </Row>
            </Container>
        </>
    )
}
