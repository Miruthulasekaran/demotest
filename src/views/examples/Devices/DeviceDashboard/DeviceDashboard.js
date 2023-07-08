import React, { useEffect, useState } from 'react'
import {
    Card, CardHeader, Container, Table, Row, Col, Input, CardBody, Button, FormGroup
} from 'reactstrap'
import Pagination from 'rc-pagination';
import Header from 'components/Headers/Header'
import "react-datepicker/dist/react-datepicker.css";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';
import { FadeLoader } from "react-spinners";
import { useHistory } from 'react-router-dom';
import DateFilterEx from './DateFilterEx';

let globalvar = 0;
let viewfirst;
let ConditionView = true;
let setdate;

export default function DeviceDashboard() {
    const [loading, setloading] = useState(false);

    const history = useHistory();
    const [view, setview] = useState(true)
    const [device, setdevice] = useState([])
    const [deviceName, setdeviceName] = useState([])
    const [rawdata, setrawdata] = useState([])
    const [rawdata1, setrawdata1] = useState([])
    const [datacount, setdatacount] = useState({})
    const [imgsrc, setimgsrc] = useState("")
    let [matchedDate, setmatchedDate] = useState([])
    const [Temp, setTemp] = useState("")
    let [testState, settestState] = useState()
    const [rawdataapi, setrawdataapi] = useState([])
    const [allProducts, setAllProducts] = useState([])
    const [products, setProducts] = useState([])
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [view1, setview1] = useState(false)
    const [tempvar1, settempvar1] = useState("")
    const [tempvar, settempvar] = useState("")
    const [DynamicClass, setDynamicClass] = useState("")
    const [Objectkeys, setObjectkeys] = useState("")
    const [Objectvalues, setObjectvalues] = useState("")
    const [ObjectrawData, setObjectrawData] = useState([])
    const [OnlayoutVis, setOnlayoutVis] = useState(true);
    const [classObject, setclassObject] = useState([
        {
            class_name: "baby_crying",
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
            image_path: require("../../../../assets/img/GIfImages/man_screaming.gif")
        }
    ])
    const [datapresent, setdatapresent] = useState(true)
    let OnCardGrp1 = () => {
        setOnlayoutVis(true)

    }
    useEffect(() => {
        setloading(true)
        fetch("http://192.168.0.113:8090/api/v1/device", {
        }).then((result) => {
            result.json().then((resp) => {
                setdevice(resp)
                console.log("bbbbbbbbbbbbbb", resp.device_name);
                setdeviceName(resp.device_name)
                if (sessionStorage.getItem("Id") != null) {
                    viewfirst = sessionStorage.getItem("Id")
                    sessionStorage.clear()
                    let editValue = resp.find((value) => value.device_mac_id == viewfirst);
                    setdevice((oldValues) => {
                        return oldValues.filter((value, i) => value.device_mac_id !== viewfirst);
                    });
                    setdevice((oldValues) => {
                        return [editValue, ...oldValues]
                    })
                }
                else {
                    viewfirst = resp[0].device_mac_id
                    setdevice(resp)
                }
                fetch(`http://192.168.0.113:8090/api/v1/raw_data_dev_id/${viewfirst}`, {
                }).then((result) => {
                    result.json().then((resp) => {
                        setloading(false)
                        console.log("resp.parsed_data 333", resp)
                        if (resp.parsed_data.length == 0) {
                            setTemp(viewfirst)
                            setdatapresent(false);
                            return setdatapresent1(3)
                        }
                        setdatapresent1(1)
                        setAllProducts([resp.parsed_data])
                        setProducts([resp.parsed_data])
                        setrawdata([resp])
                        setrawdata1(resp)
                        console.log("raju", resp);
                        setTemp(viewfirst)
                        setrawdataapi([resp])
                        console.log("rawdataapi", rawdataapi);
                        setdatacount(resp.parsed_data[resp.parsed_data.length - 1])
                        let variable = resp.parsed_data[resp.parsed_data.length - 1]
                        let t = Object.values(variable)
                        let testarr = Object.keys(resp.parsed_data[resp.parsed_data.length - 1])
                        testarr.forEach((data) => {
                            if (data != "date" && data != "device_id" && data != "time") {
                                setDynamicClass(data)
                                settempvar(resp.parsed_data[resp.parsed_data.length - 1][data])
                            }
                        })
                        setObjectvalues(resp.parsed_data[resp.parsed_data.length - 1])
                        for (let index = 0; index < classObject.length; index++) {
                            t.forEach((_, index1) => {
                                if (t[index1] == classObject[index].class_name) {
                                    // console.log("i'm inside the fn")
                                    let source = classObject[index].image_path
                                    setimgsrc(source)
                                    // console.log("source", classObject)
                                }
                            })
                        }
                    })
                })
            })
        })
    }, [])

    const [datapresent1, setdatapresent1] = useState()
    // for calling functions 
    const [test, settest] = useState(true)
    const [val, setval] = useState()
    const [fortrue, setfortrue] = useState(true)
    const [onsetviewfirst, setviewfirst] = useState("")
    const [testvar, setestvar] = useState("");
    useEffect(() => {
        // console.log("raw data click", rawdata)
    }, [rawdata, rawdataapi]);
    const [checkflag, setcheckflag] = useState(false)
    useEffect(() => {
        // console.log("thisise", testvar)
        if (checkflag) {
            // console.log("entered")
            setview(true)  //this is for changing icon and changing view
        }
        setcheckflag(true)
    }, [testvar])
    let deviceMacId = (e) => {
        //this is for changing icon and changing view
        setestvar(e)
        // console.log("the function is clicked", testState);
        console.log("itemee", e)
        setTemp(e)
        // console.log("THIS IS RESULT", e)
        settestState(false)
        viewfirst = e
        fetch(`http://192.168.0.113:8090/api/v1/raw_data_dev_id/${e}`, {
        }).then((result) => {
            // console.log("THIS IS RESULT", result)
            result.json().then((resp) => {
                // console.log("resp.parsed_data.length", resp.parsed_data.length)
                if (resp.parsed_data.length == 0) {
                    setTemp(e)
                    setdatapresent(false)
                    return setdatapresent1(3)
                }
                setdatapresent1(1)
                setTemp(e)
                setdatapresent(true)
                setview1(false)
                setAllProducts([resp.parsed_data])
                setProducts([resp.parsed_data])
                setrawdata([resp])
                console.log("ccccccccccccccccccccccccccccccccc", resp);
                setrawdataapi([resp])
                setrawdata1(resp)
                console.log("raju", resp);
                let testarr = Object.keys(resp.parsed_data[resp.parsed_data.length - 1])
                let setDynamicClass1;
                testarr.forEach((data) => {
                    if (data != "date" && data != "device_id" && data != "time") {
                        setDynamicClass1 = data
                        setDynamicClass(data)
                        settempvar(resp.parsed_data[resp.parsed_data.length - 1][data])
                    }
                })
                setObjectvalues(resp.parsed_data[resp.parsed_data.length - 1])
                setdatacount(resp.parsed_data[resp.parsed_data.length - 1])
                let variable = resp.parsed_data[resp.parsed_data.length - 1]
                let t = Object.values(variable)
                for (let index = 0; index < classObject.length; index++) {
                    t.forEach((_, index1) => {
                        if (t[index1] == classObject[index].class_name) {
                            let source = classObject[index].image_path
                            setimgsrc(source)
                        }
                    })
                }
            })
        })
    }
    useEffect(() => {
        // console.log("raw data click", rawdata)
    }, [rawdata, rawdataapi]);
    const [filterdata, setfilterdata] = useState("")
    let filterView = () => {
        setview(false)
    }
    let setfilter = (date, id) => {
        setview(false)
        settestState(false)
        let temp = [];
        for (let index = 0; index < rawdata[0].parsed_data.length; index++) {
            if (date.target.value == rawdata[0].parsed_data[index].date) {
                temp.push(rawdata[0].parsed_data[index])
            }
        }
        setmatchedDate(temp)
    }
    useEffect(() => {
        setTimeout(() => {
            fetch(`http://192.168.0.113:8090/api/v1/raw_data_dev_id/${viewfirst}`, {
            }).then((result) => {
                result.json().then((resp) => {
                    console.log("trylength", resp)
                    if (resp.parsed_data.length == 0) {
                        setdatapresent1(3)
                        return setdatapresent(false)
                    }
                    if (ConditionView == true) {
                        setdatapresent1(1)
                    } else {
                        setdatapresent1(2)
                    }
                    setdatapresent(true)
                    setrawdata1(resp)
                    console.log("raju", resp);
                    setrawdataapi([resp])
                    if (resp.raw_data.length != val) {
                        setval(resp.raw_data.length)
                        // console.log("insidsssse")
                        setrawdata([resp])
                        setrawdataapi([resp])
                        // console.log("setrawdata", rawdata);
                        // console.log("rawdata", resp.parsed_data);
                        setdatacount(resp.parsed_data[resp.parsed_data.length - 1])
                        // console.log("response", resp.parsed_data[resp.parsed_data.length - 1]);
                        // console.log("data =====>", datacount);
                        let variable = resp.parsed_data[resp.parsed_data.length - 1]
                        let t = Object.values(variable)
                        setObjectvalues(resp.parsed_data[resp.parsed_data.length - 1])
                        console.log("data =====>", t);
                        let testarr = Object.keys(resp.parsed_data[resp.parsed_data.length - 1])
                        setObjectkeys(resp.parsed_data[resp.parsed_data.length - 1])
                        setObjectrawData(resp.parsed_data)
                        console.log("formatr", resp);
                        let setDynamicClass1;
                        console.log("testarr", testarr[3])
                        settempvar1(testarr)
                        console.log("tempvar", tempvar1);
                        // testarr.forEach((data) => {
                        //   if (data != "date" && data != "device_id" && data != "time") {
                        //     setDynamicClass1 = data
                        //     setDynamicClass(data)
                        //     settempvar(resp.parsed_data[resp.parsed_data.length - 1][data])
                        //     console.log("llldfa", resp.parsed_data[resp.parsed_data.length - 1][data])
                        //   }
                        // })
                        for (let index = 0; index < classObject.length; index++) {
                            t.forEach((_, index1) => {
                                if (t[index1] == classObject[index].class_name) {
                                    // console.log("i'm inside the fn")
                                    let source = classObject[index].image_path
                                    setimgsrc(source)
                                    // console.log("source", source)
                                }
                            })
                        }
                    }
                    resp.parsed_data = resp.parsed_data.reverse()
                })
            })
            settest(!test)
        }, 1000);
    }, [test])
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
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
    }
    const handleSelect = (date) => {
        ConditionView = false
        setdate = date
        setdatapresent1(2)
        let filtered = allProducts[0].filter((data) => {
            console.log("datadatadatadata", data);
            let productDate = new Date(data.received_time);
            var xxx = productDate.toLocaleDateString();
            console.log("productDate", xxx);
            var yyy = new Date(xxx);
            // console.log("yyyyyy", yyy);
            // console.log("productDdate333", date.selection.startDate, date.selection.endDate);
            if (date.selection.startDate == date.selection.endDate) {
                // console.log("inside if", productDate.toLocaleDateString(), date.selection.startDate.toLocaleDateString(), +" " + productDate.toLocaleDateString() == date.selection.startDate.toLocaleDateString())
                return (productDate.toLocaleDateString() === date.selection.startDate.toLocaleDateString())
            } else {
                return (yyy >= date.selection.startDate &&
                    yyy <= date.selection.endDate
                );
            }
        })
        setStartDate(date.selection.startDate)
        setEndDate(date.selection.endDate)
        setProducts(filtered)
    };

    function fn1() {
        setview1(true)
    }
    function cancel() {
        ConditionView = true
        setdatapresent1(1)
        setview1(false)
    }
    const [perPage1, setPerPage1] = useState(5);
    const [size1, setSize1] = useState(perPage);
    const [current1, setCurrent1] = useState(1);
    const PerPageChange1 = (value) => {
        setSize1(value);
        const newPerPage = Math.ceil(products.length / value);
        if (current1 > newPerPage) {
            setCurrent1(newPerPage);
        }
    }
    let getData1 = (current1, pageSize) => {
        return products.slice((current1 - 1) * pageSize, current1 * pageSize)
    };
    const PaginationChange1 = (page, pageSize) => {
        setCurrent1(page);
        setSize1(pageSize)
    }
    const PrevNextArrow1 = (current1, type1, originalElement1) => {
        if (type1 === 'prev') {
            return <button><i className="fa fa-angle-double-left"></i></button>;
        }
        if (type1 === 'next') {
            return <button><i className="fa fa-angle-double-right"></i></button>;
        }
        return originalElement1;
    }
    function DeviceRedirect() {
        // history.push("admin/Device")
        history.push('/admin/Device');
    }
    return (
        <>
            <Header />
            <Row className='m-1 p-1 mr-3'>
                <Col md="4">
                    <Input type="select" onClick={e => { deviceMacId(e.target.value); ConditionView = true }} className='text-dark' name="select" id="exampleSelect">
                        {
                            device.map((item, index) => {
                                return <>
                                    <option value={item.device_mac_id}  >{item.device_mac_id}</option>

                                </>
                            })
                        }
                    </Input>
                </Col>

            </Row>

            <Row className='m-1 p-1 mr-3'>
                <Col md="2">
                    <td className='text-dark'>Device name :</td>
                </Col>
                <Col md="2">
                    < >
                        {
                            rawdataapi.map((item, index) => {
                                console.log("cdddddddddddvmndbmfsdjkg", item.device_name);
                                return <>
                                    <td>{item.device_name}</td>
                                </>
                            })
                        }
                    </>
                </Col>

            </Row>
            <Container className=''>
                <Col md="12">
                    <Row className=' '>
                        <Col md="12">
                            {
                                view1 ? <Col>
                                    {/* <DateFilterEx /> */}
                                    <DateRangePicker
                                        ranges={[selectionRange]}
                                        onChange={handleSelect}
                                        className='dateselect'
                                    >  </DateRangePicker><button className='btn btn-danger btn-sm float-right mr-6 mb-3' onClick={cancel}>cancel</button>
                                </Col> :
                                    <button className='btn btn-primary btn-sm float-right' onClick={fn1}>Filter</button>
                            }
                        </Col>
                        <div className="col ">

                            {
                                datapresent1 == 1 ? <>
                                    <Row className='p-2'>
                                        <Col md="4" >
                                            <Card className=''>
                                                <CardBody>
                                                    <img src={imgsrc} alt='nnd,mn' style={{ height: "350px", width: "270px", objectFit: "cover" }}></img>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                        <Col md="8" className=''>
                                            <div className='' >
                                                <Card className='table-scroll-org4 ' >
                                                    <CardBody className='table-scroll-org4 '>
                                                        <Table className=" table-flush " responsive>
                                                            <thead className="thead-light ">
                                                                <tr>
                                                                    {
                                                                        Object.entries(getData(current, size)).map(([key, val], index) => {
                                                                            return index == 0 ? <tr>
                                                                                {Object.entries(val).map(([key, val], index) => {
                                                                                    return <>
                                                                                        <td className="text-justify text-dark text-wrap texting" ><b>{key}</b>
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
                                                                                        <td className="text-justify text-dark text-wrap texting" >{val}
                                                                                        </td>
                                                                                    </>
                                                                                })} </tr>
                                                                        }
                                                                        )
                                                                    }
                                                                </tr>
                                                            </tbody>
                                                        </Table>
                                                    </CardBody>
                                                </Card>
                                            </div>
                                        </Col>
                                    </Row>

                                </>
                                    :
                                    datapresent1 == 2 ?
                                        <>
                                            {/* <Row className='p-2'>
                                                <Col md="12" className=''> */}
                                            <Card className='table-scroll-org4'  >
                                                <CardBody className='table-scroll-org4'>
                                                    <Table className=" table-flush " >
                                                        <thead className="thead-light ">
                                                            <Row>
                                                                <Col md="12">
                                                                    <tr >
                                                                        {
                                                                            Object.entries(getData(current, size)).map(([key, val], index) => {
                                                                                return index == 0 ? <>
                                                                                    {Object.entries(val).map(([key, val], index) => {
                                                                                        return <>
                                                                                            <td className="text-justify text-dark text-wrap" style={{ width: "20rem" }}><b>{key}</b>
                                                                                            </td>
                                                                                        </>
                                                                                    })} </> : null
                                                                            }
                                                                            )
                                                                        }
                                                                    </tr>
                                                                </Col>
                                                            </Row>
                                                        </thead>
                                                        <tbody>
                                                            {products.length > 0 ? <>
                                                                <tr>
                                                                    {
                                                                        Object.entries(getData1(current1, size1)).map(([key, val], index) => {
                                                                            return <tr style={{ width: "1000px" }}>
                                                                                {Object.entries(val).map(([key, val], index) => {
                                                                                    return <>
                                                                                        <td className="text-justify text-dark text-wrap" style={{ width: "20rem" }}>{val}
                                                                                        </td>
                                                                                    </>
                                                                                })} </tr>
                                                                        }
                                                                        )
                                                                    }
                                                                </tr>
                                                            </>
                                                                : < div className="row">
                                                                    <div className="col-12" style={{ textAlign: "center" }}>
                                                                        <td className="text-dark"><b>No Data Found</b></td>
                                                                    </div>
                                                                </div>
                                                            }
                                                        </tbody>
                                                    </Table>
                                                </CardBody>
                                            </Card>
                                            {/*                                               
                                                </Col>
                                            </Row> */}
                                        </>
                                        :
                                        datapresent1 == 3 ? <> <Card className='table-scroll-org4 mt-5' >
                                            <CardBody className='table-scroll-org4'>
                                                <b style={{ marginLeft: "400px" }}>No data to display</b>
                                            </CardBody>
                                        </Card></> : null
                            }
                            {
                                datapresent1 == 1 ? <>
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
                                    </div>  </>

                                    : <div className="table-filter-info">

                                        <Pagination
                                            className="pagination-data"
                                            showTotal={(total, range) => `Showing ${range[0]}-${range[1]} of ${total}`}
                                            onChange={PaginationChange1}
                                            total={products.length}
                                            current={current1}
                                            pageSize={size1}
                                            showSizeChanger={false}
                                            itemRender={PrevNextArrow1}
                                            onShowSizeChange={PerPageChange1}
                                        />
                                    </div>
                            }
                        </div>
                    </Row>
                </Col>
            </Container>
        </>
    )
}

