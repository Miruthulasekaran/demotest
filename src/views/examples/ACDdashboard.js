// import React, { useEffect, useState } from 'react'
// import {
//   Card, CardHeader, Container, Table, Row, Col, Input, CardBody,
// } from 'reactstrap'
// import Pagination from 'rc-pagination';
// import Header from 'components/Headers/Header'
// import "react-datepicker/dist/react-datepicker.css";
// import 'react-date-range/dist/styles.css';
// import 'react-date-range/dist/theme/default.css';
// import { DateRangePicker } from 'react-date-range';
// import { FadeLoader } from "react-spinners";

// let globalvar = 0;
// let viewfirst;
// let ConditionView = true;
// let setdate;
// export default function ACDdashboard() {
//   const [loading, setloading] = useState(false);
//   // useEffect(()=>{
//   //   setloading(true)
//   //   setTimeout(()=>{
//   //     setloading(false)
//   //   },1000)
//   // },[])
//   const [view, setview] = useState(true)
//   const [device, setdevice] = useState([])
//   const [rawdata, setrawdata] = useState([])
//   const [datacount, setdatacount] = useState({})
//   const [imgsrc, setimgsrc] = useState("")
//   let [matchedDate, setmatchedDate] = useState([])
//   const [Temp, setTemp] = useState("")
//   let [testState, settestState] = useState()
//   const [rawdataapi, setrawdataapi] = useState([])
//   const [allProducts, setAllProducts] = useState([])
//   const [products, setProducts] = useState([])
//   const [startDate, setStartDate] = useState(new Date());
//   const [endDate, setEndDate] = useState(new Date());
//   const [view1, setview1] = useState(false)
//   const [tempvar, settempvar] = useState("")
//   const [DynamicClass, setDynamicClass] = useState("")
//   const [classObject, setclassObject] = useState([
//     {
//       class_name: "baby_crying",
//       image_path: require("../../assets/img/GIfImages/bby-2.gif")

//     },
//     {
//       class_name: "gun_shot",
//       image_path: require("../../assets/img/GIfImages/gun_shot.gif")
//     },
//     {
//       class_name: "dog_bark",
//       image_path: require("../../assets/img/GIfImages/dogbarking.gif")
//     },
//     {
//       class_name: "drilling",
//       image_path: require("../../assets/img/GIfImages/drilling.gif")
//     },
//     {
//       class_name: "car_theft_alarm",
//       image_path: require("../../assets/img/GIfImages/original.webp")
//     },
//     {
//       class_name: "jack_hammer",
//       image_path: require("../../assets/img/GIfImages/jack_hammer.gif")
//     },
//     {
//       class_name: "fire_alarm",
//       image_path: require("../../assets/img/GIfImages/fire_alarm.gif")
//     },
//     {
//       class_name: "glass_break",
//       image_path: require("../../assets/img/GIfImages/glass_braking.gif")
//     },
//     {
//       class_name: "hammer",
//       image_path: require("../../assets/img/GIfImages/hammer1.gif")
//     },

//     {
//       class_name: "women_scream",
//       image_path: require("../../assets/img/GIfImages/angry-mad.gif")
//     },
//     {
//       class_name: "men_scream",
//       image_path: require("../../assets/img/GIfImages/man_screaming.gif")
//     }
//   ])
//   const [datapresent, setdatapresent] = useState(true)
//   useEffect(() => {
//     setloading(true)
//     fetch("http://hubeoxys.com:8083/api/v1/device", {
//     }).then((result) => {
//       result.json().then((resp) => {
//         setdevice(resp)
//         // console.log("view firstt", resp);
//         // console.log("vvvvv11", view)
//         if (sessionStorage.getItem("Id") != null) {
//           // console.log("ifcondition")
//           viewfirst = sessionStorage.getItem("Id")
//           sessionStorage.clear()
//           let editValue = resp.find((value) => value.device_mac_id == viewfirst);
//           // console.log("thisiseditValue", editValue)
//           setdevice((oldValues) => {
//             return oldValues.filter((value, i) => value.device_mac_id !== viewfirst);
//           });
//           setdevice((oldValues) => {
//             return [editValue, ...oldValues]
//           })
//         }
//         else {
//           viewfirst = resp[0].device_mac_id
//           // console.log("else part", viewfirst)
//           setdevice(resp)
//         }
//         fetch(`http://hubeoxys.com:8083/api/v1/raw_data_dev_id/${viewfirst}`, {
//         }).then((result) => {
//           result.json().then((resp) => {
//             setloading(false)
//             // console.log("resp.parsed_data 333", resp.parsed_data)
//             if (resp.parsed_data.length == 0) {
//               setTemp(viewfirst)
//               setdatapresent(false);
//               return setdatapresent1(3)
//             }
//             setdatapresent1(1)
//             setAllProducts([resp.parsed_data])
//             setProducts([resp.parsed_data])
//             setrawdata([resp])
//             setTemp(viewfirst)
//             // console.log("theconditionreached", resp.parsed_data)
//             setrawdataapi([resp])
//             // console.log("rawdataapi", rawdataapi);
//             // console.log("rawdata", resp.parsed_data);
//             setdatacount(resp.parsed_data[resp.parsed_data.length - 1])
//             // console.log("response", resp.parsed_data[resp.parsed_data.length - 1]);
//             // console.log("data =====>", datacount);
//             let variable = resp.parsed_data[resp.parsed_data.length - 1]
//             let t = Object.values(variable)
//             // console.log("thisist", t)
//             let testarr = Object.keys(resp.parsed_data[resp.parsed_data.length - 1])
//             testarr.forEach((data) => {
//               if (data != "date" && data != "device_id" && data != "time") {
//                 // console.log("setrawo", data)
//                 // console.log("lki", data)
//                 // console.log("ddddddf", resp.parsed_data[resp.parsed_data.length - 1].data)
//                 setDynamicClass(data)
//                 settempvar(resp.parsed_data[resp.parsed_data.length - 1][data])
//                 // console.log("llldfa", resp.parsed_data[resp.parsed_data.length - 1][data])
//               }
//             })
//             // console.log("variablesdsds", variable)
//             for (let index = 0; index < classObject.length; index++) {
//               t.forEach((_, index1) => {
//                 if (t[index1] == classObject[index].class_name) {
//                   // console.log("i'm inside the fn")
//                   let source = classObject[index].image_path
//                   setimgsrc(source)
//                   // console.log("source", classObject)
//                 }
//               })
//             }
//           })
//         })
//       })
//     })
//   }, [])
//   const [datapresent1, setdatapresent1] = useState()
//   // for calling functions 
//   const [test, settest] = useState(true)
//   const [val, setval] = useState()
//   const [fortrue, setfortrue] = useState(true)
//   const [onsetviewfirst, setviewfirst] = useState("")
//   const [testvar, setestvar] = useState("");
//   useEffect(() => {
//     // console.log("raw data click", rawdata)
//   }, [rawdata, rawdataapi]);
//   const [checkflag, setcheckflag] = useState(false)
//   useEffect(() => {
//     // console.log("thisise", testvar)
//     if (checkflag) {
//       // console.log("entered")
//       setview(true)  //this is for changing icon and changing view
//     }
//     setcheckflag(true)
//   }, [testvar])
//   let deviceMacId = (e) => {
//     //this is for changing icon and changing view
//     setestvar(e)
//     // console.log("the function is clicked", testState);
//     // console.log("itemee", e)
//     setTemp(e)
//     // console.log("THIS IS RESULT", e)
//     settestState(false)
//     viewfirst = e
//     fetch(`http://hubeoxys.com:8083/api/v1/raw_data_dev_id/${e}`, {
//     }).then((result) => {
//       // console.log("THIS IS RESULT", result)
//       result.json().then((resp) => {
//         // console.log("resp.parsed_data.length", resp.parsed_data.length)
//         if (resp.parsed_data.length == 0) {
//           setTemp(e)
//           setdatapresent(false)
//           return setdatapresent1(3)
//         }
//         setdatapresent1(1)
//         setTemp(e)
//         setdatapresent(true)
//         setview1(false)
//         setAllProducts([resp.parsed_data])
//         setProducts([resp.parsed_data])
//         setrawdata([resp])
//         setrawdataapi([resp])
//         let testarr = Object.keys(resp.parsed_data[resp.parsed_data.length - 1])
//         let setDynamicClass1;
//         // console.log("testarrtestarr", testarr)
//         testarr.forEach((data) => {
//           if (data != "date" && data != "device_id" && data != "time") {
//             // console.log("setrawo", data)
//             // console.log("lki", data)
//             // console.log("ddddddf", resp.parsed_data[resp.parsed_data.length - 1].data)
//             setDynamicClass1 = data
//             setDynamicClass(data)
//             settempvar(resp.parsed_data[resp.parsed_data.length - 1][data])
//             // console.log("llldfa", resp.parsed_data[resp.parsed_data.length - 1][data])
//           }
//         })
//         // console.log("setrawdataresp", resp);
//         // console.log("rawdata", resp.parsed_data);
//         setdatacount(resp.parsed_data[resp.parsed_data.length - 1])
//         // console.log("response", resp.parsed_data[resp.parsed_data.length - 1]);
//         // console.log("data =====>", datacount);
//         let variable = resp.parsed_data[resp.parsed_data.length - 1]
//         let t = Object.values(variable)
//         // console.log("deviceMacId", t)
//         for (let index = 0; index < classObject.length; index++) {
//           // console.log("tttt", t[index] == classObject[index].class_name)
//           t.forEach((_, index1) => {
//             if (t[index1] == classObject[index].class_name) {
//               // console.log("For loop ==> ", t[index1] == classObject[index].class_name);
//               // console.log("i'm inside the fn")
//               let source = classObject[index].image_path
//               setimgsrc(source)
//               // console.log("source", source)
//             }
//           })
//         }
//       })
//     })
//   }
//   useEffect(() => {
//     // console.log("raw data click", rawdata)
//   }, [rawdata, rawdataapi]);
//   const [filterdata, setfilterdata] = useState("")
//   let filterView = () => {
//     setview(false)
//   }
//   let setfilter = (date, id) => {
//     setview(false)
//     settestState(false)
//     // console.log("dev_id ==> ", date.target.value);
//     // console.log("filterdata", id)
//     let temp = [];
//     for (let index = 0; index < rawdata[0].parsed_data.length; index++) {
//       if (date.target.value == rawdata[0].parsed_data[index].date) {
//         temp.push(rawdata[0].parsed_data[index])
//       }
//     }
//     setmatchedDate(temp)
//     // console.log("matched date => ", matchedDate);
//     // console.log("date matches");
//   }
//   useEffect(() => {
//     setTimeout(() => {
//       fetch(`http://hubeoxys.com:8083/api/v1/raw_data_dev_id/${viewfirst}`, {
//       }).then((result) => {
//         result.json().then((resp) => {
//           // console.log("trylength", val)
//           if (resp.parsed_data.length == 0) {
//             setdatapresent1(3)
//             return setdatapresent(false)
//           }
//           if (ConditionView == true) {
//             setdatapresent1(1)
//           } else {
//             setdatapresent1(2)
//           }
//           setdatapresent(true)
//           setrawdataapi([resp])
//           if (resp.raw_data.length != val) {
//             setval(resp.raw_data.length)
//             // console.log("insidsssse")
//             setrawdata([resp])
//             setrawdataapi([resp])
//             // console.log("setrawdata", rawdata);
//             // console.log("rawdata", resp.parsed_data);
//             setdatacount(resp.parsed_data[resp.parsed_data.length - 1])
//             // console.log("response", resp.parsed_data[resp.parsed_data.length - 1]);
//             // console.log("data =====>", datacount);
//             let variable = resp.parsed_data[resp.parsed_data.length - 1]
//             let t = Object.values(variable)
//             let testarr = Object.keys(resp.parsed_data[resp.parsed_data.length - 1])
//             let setDynamicClass1;
//             // console.log("testarr", testarr)
//             testarr.forEach((data) => {
//               if (data != "date" && data != "device_id" && data != "time") {
//                 // console.log("setrawo", data)
//                 // console.log("lki", data)
//                 // console.log("ddddddf", resp.parsed_data[resp.parsed_data.length - 1].data)
//                 setDynamicClass1 = data
//                 setDynamicClass(data)
//                 settempvar(resp.parsed_data[resp.parsed_data.length - 1][data])
//                 // console.log("llldfa", resp.parsed_data[resp.parsed_data.length - 1][data])
//               }
//             })
//             for (let index = 0; index < classObject.length; index++) {
//               t.forEach((_, index1) => {
//                 if (t[index1] == classObject[index].class_name) {
//                   // console.log("i'm inside the fn")
//                   let source = classObject[index].image_path
//                   setimgsrc(source)
//                   // console.log("source", source)
//                 }
//               })
//             }
//           }
//           resp.parsed_data = resp.parsed_data.reverse()
//         })
//       })
//       settest(!test)
//     }, 1000);
//   }, [test])
//   const [perPage, setPerPage] = useState(5);
//   const [size, setSize] = useState(perPage);
//   const [current, setCurrent] = useState(1);
//   const PerPageChange = (value) => {
//     setSize(value);
//     const newPerPage = Math.ceil(rawdataapi[0].parsed_data.length / value);
//     if (current > newPerPage) {
//       setCurrent(newPerPage);
//     }
//   }
//   let getData = (current, pageSize) => {
//     // console.log("current", current, pageSize)
//     if (rawdataapi.length > 0) {
//       return rawdataapi[0].parsed_data.slice((current - 1) * pageSize, current * pageSize)
//     } else {
//       return [];
//     }
//   };
//   const PaginationChange = (page, pageSize) => {
//     setCurrent(page);
//     setSize(pageSize)
//   }
//   const PrevNextArrow = (current, type, originalElement) => {
//     if (type === 'prev') {
//       return <button><i className="fa fa-angle-double-left"></i></button>;
//     }
//     if (type === 'next') {
//       return <button><i className="fa fa-angle-double-right"></i></button>;
//     }
//     return originalElement;
//   }
//   const handleSelect = (date) => {
//     ConditionView = false
//     setdate = date
//     setdatapresent1(2)
//     let filtered = allProducts[0].filter((data) => {
//       // console.log("datadatadatadata", data);
//       let productDate = new Date(data.date);
//       var xxx = productDate.toLocaleDateString();
//       // console.log("productDate", xxx);
//       var yyy = new Date(xxx);
//       // console.log("yyyyyy", yyy);
//       // console.log("productDdate333", date.selection.startDate, date.selection.endDate);
//       if (date.selection.startDate == date.selection.endDate) {
//         // console.log("inside if", productDate.toLocaleDateString(), date.selection.startDate.toLocaleDateString(), +" " + productDate.toLocaleDateString() == date.selection.startDate.toLocaleDateString())
//         return (productDate.toLocaleDateString() === date.selection.startDate.toLocaleDateString())
//       } else {
//         return (yyy >= date.selection.startDate &&
//           yyy <= date.selection.endDate
//         );
//       }
//     })
//     setStartDate(date.selection.startDate)
//     setEndDate(date.selection.endDate)
//     setProducts(filtered)
//     // console.log("filtered", filtered);
//     // console.log(date);
//     // console.log("datedatedate", date.selection.endDate);
//   };
//   const selectionRange = {
//     startDate: startDate,
//     endDate: endDate,
//     key: 'selection',
//   }
//   function fn1() {
//     setview1(true)
//   }
//   function cancel() {
//     ConditionView = true
//     setdatapresent1(1)
//     setview1(false)
//   }
//   const [perPage1, setPerPage1] = useState(5);
//   const [size1, setSize1] = useState(perPage);
//   const [current1, setCurrent1] = useState(1);
//   const PerPageChange1 = (value) => {
//     setSize1(value);
//     const newPerPage = Math.ceil(products.length / value);
//     if (current1 > newPerPage) {
//       setCurrent1(newPerPage);
//     }
//   }
//   let getData1 = (current1, pageSize) => {
//     return products.slice((current1 - 1) * pageSize, current1 * pageSize)
//   };
//   const PaginationChange1 = (page, pageSize) => {
//     setCurrent1(page);
//     setSize1(pageSize)
//   }
//   const PrevNextArrow1 = (current1, type1, originalElement1) => {
//     if (type1 === 'prev') {
//       return <button><i className="fa fa-angle-double-left"></i></button>;
//     }
//     if (type1 === 'next') {
//       return <button><i className="fa fa-angle-double-right"></i></button>;
//     }
//     return originalElement1;
//   }
//   return (
//     <>
//       <Header />
//       {
//         loading ?
//           <Col md="12" className="text-center mt-9 spinner" >
//             <FadeLoader
//               color={"#1E90FF"}
//               loading={loading}
//               size={100}
//               aria-label="Loading Spinner"
//               data-testid="loader"
//               className="text-center  spinner"
//             />
//           </Col>
//           :
//           <Container className='mt-6'  >
//             {/* <h2 className=" text-center mb-4">
//               ACD Dashboard
//             </h2> */}
//             <Row>
//               <Col md="4">
//                 <Card className='table-scroll-filter'>
//                   <CardHeader>
//                     <Table className="align-items-center table-flush" responsive>
//                       <thead className="thead-light">
//                         <tr>
//                           <th scope="col" className="text-justify text-dark"><b>S.No</b></th>
//                           <th scope="col" className="text-justify text-dark"><b>Device Id</b></th>
//                           <th scope="col" className="text-justify text-dark"><b>Action</b></th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {
//                           device.map((item, index) => {
//                             return <tr key={index}>
//                               <th scope="row" className="text-justify text-dark">{index + 1}</th>
//                               <td className="text-justify text-dark">{item.device_mac_id}</td>
//                               {/* {console.log("vvvvv1122", item.device_mac_id)} */}
//                               {Temp === item.device_mac_id ?

//                                 <td>   <i class="fa fa-eye text-success" aria-hidden="true" onClick={() => { setview(true) }}></i>
//                                 </td> :
//                                 <td>   <i class="fa fa-eye-slash" aria-hidden="true" onClick={() => { deviceMacId(item.device_mac_id); ConditionView = true }}></i>
//                                 </td>
//                               }
//                             </tr>
//                           })
//                         }
//                       </tbody>
//                     </Table>
//                   </CardHeader>
//                 </Card>
//               </Col>
//               {
//                 view ? <>
//                   <Col md="8" >
//                     <Row>
//                       {/* {console.log("lll", rawdata)} */}
//                       {
//                         datapresent ?
//                           rawdata.map((item, index) => {
//                             return <>
//                               <Col md="6" >
//                                 <Card className='table-scroll-filter'>
//                                   <CardBody>
//                                     {/* {console.log("imgsrrc2", imgsrc)} */}
//                                     <img src={(imgsrc)} alt='nnd,mn' style={{ height: "350px", width: "270px", objectFit: "cover" }}></img>
//                                   </CardBody>
//                                 </Card>
//                               </Col>
//                               <Col md="5"
//                               >
//                                 <Card className='table-scroll-filter'>
//                                   <CardBody>
//                                     <Row>
//                                       <Col md="6" className='mt-5'>
//                                         <td><b>Device mac id</b></td>
//                                       </Col>
//                                       <Col md="6" className='mt-5'>
//                                         <td>{item.device_mac_id}</td>
//                                       </Col>
//                                     </Row>
//                                     <Row>
//                                       <Col md="6" className='mt-4'>
//                                         <td><b>Date :</b></td>
//                                       </Col>
//                                       <Col md="6" className='mt-4'>
//                                         <td>{datacount.date}</td>
//                                       </Col>
//                                       <Col md="6" className='mt-4'>
//                                         <td><b>class name :</b></td>
//                                       </Col>
//                                       <Col md="6" className='mt-4'>
//                                         <td>{tempvar}</td>
//                                       </Col>
//                                       <Col md="6" className='mt-4'>
//                                         <td><b>Time :</b></td>
//                                       </Col>
//                                       <Col md="6" className='mt-4'>
//                                         <td>{datacount.time}</td>
//                                       </Col>
//                                     </Row>
//                                   </CardBody>
//                                 </Card>
//                               </Col>
//                               <Col>

//                               </Col>

//                             </>
//                           }) :

//                           <>
//                             <Col md="6" >
//                               <Card className='table-scroll-filter'>
//                                 <CardBody>
//                                   {/* {console.log("imgsrrc2", imgsrc)} */}
//                                   <p>No data present</p>
//                                 </CardBody>
//                               </Card>
//                             </Col>
//                             <Col md="5"
//                             >
//                               <Card className='table-scroll-filter'>
//                                 <CardBody>
//                                   <Row>
//                                     <Col md="6" className='mt-5'>
//                                       <td><b>device_mac_id:</b></td>
//                                     </Col>
//                                     <Col md="6" className='mt-5'>
//                                       <td>No data</td>
//                                     </Col>
//                                   </Row>
//                                   <Row>
//                                     <Col md="6" className='mt-4'>
//                                       <td><b>Date :</b></td>
//                                     </Col>
//                                     <Col md="6" className='mt-4'>
//                                       <td>No data</td>
//                                     </Col>
//                                     <Col md="6" className='mt-4'>
//                                       <td><b>className :</b></td>
//                                     </Col>
//                                     <Col md="6" className='mt-4'>
//                                       <td>No data</td>
//                                     </Col>
//                                     <Col md="6" className='mt-4'>
//                                       <td><b>Time :</b></td>
//                                     </Col>
//                                     <Col md="6" className='mt-4'>
//                                       <td>No data</td>
//                                     </Col>
//                                   </Row>
//                                 </CardBody>
//                               </Card>
//                             </Col>
//                             <Col>
//                             </Col>
//                           </>
//                       }
//                     </Row>
//                   </Col>
//                 </> : <>
//                   <Col md="7" className=''>
//                     <div className='table-scroll-org2' >
//                       <Card className=''>
//                         <Row className='mt-4 float-right' style={{ marginLeft: "300px" }}>
//                         </Row>
//                         <CardHeader>
//                           <Table className="align-items-center table-flush " responsive>
//                             <thead className="thead-light">
//                               <tr>
//                                 <th scope="col" className="text-justify text-dark"><b>S.No</b></th>
//                                 <th scope="col" className="text-justify text-dark"><b>Date</b></th>
//                                 <th scope="col" className="text-justify text-dark"><b>Time</b></th>
//                                 <th scope="col" className="text-justify text-dark"><b>Device id</b></th>
//                                 <th scope="col" className="text-justify text-dark"><b>Class name</b></th>
//                               </tr>
//                             </thead>
//                             <tbody>
//                               {
//                                 matchedDate.length > 0 ?
//                                   matchedDate.map((item, index) => {
//                                     // console.log("TestMatch", item)
//                                     return <> <tr>
//                                       <th scope="row" className="text-justify text-dark">{index + 1}</th>
//                                       <td className="text-justify text-dark">{item.date}</td>
//                                       <td className="text-justify text-dark">{item.time}</td>
//                                       <td className="text-justify text-dark">{item.device_id}</td>
//                                       <td className="text-justify text-dark">{item.class_name}</td>
//                                     </tr>
//                                     </>
//                                   })
//                                   :
//                                   <>
//                                     <div className="row table-scroll-org3">
//                                       <div className="col-12" style={{ textAlign: "center" }}>
//                                         <td className="text-dark"><b>No Data Found</b></td>
//                                       </div>
//                                     </div>
//                                   </>
//                               }
//                             </tbody>
//                           </Table>
//                         </CardHeader>
//                       </Card>
//                     </div>
//                   </Col>
//                 </>
//               }
//             </Row>
//             <Col md="12">
//               <Row className='mt-5 '>
//                 <Col md="12">
//                   {
//                     view1 ? <Col>
//                       <DateRangePicker
//                         ranges={[selectionRange]}
//                         onChange={handleSelect}
//                         className='dateselect'
//                       >  </DateRangePicker><button className='btn btn-danger btn-sm float-right mr-6 mb-3' onClick={cancel}>cancel</button> </Col> : <button className='btn btn-primary btn-sm float-right mb-3' onClick={fn1}>Filter</button>
//                   }
//                 </Col>
//                 <div className="col ">
//                   <Card className="shadow ">
//                     <CardHeader className=" ">
//                       {rawdataapi.map((item, index) => {
//                         return <div key={index}>
//                           <td className="text-justify text-dark"><b>{item.device_mac_id}</b></td>
//                         </div>
//                       })
//                       }
//                     </CardHeader>
//                     <Col className=''>
//                       <Table className="align-items-center table-flush " responsive>
//                         <thead className="thead-light">
//                           <tr>
//                             <Col>
//                               <Row>
//                                 <Col md="1" className='table-borderless'>
//                                   <th scope="col" className="text-justify text-dark"><b>S.No</b></th>
//                                 </Col>
//                                 <Col md="3" className='table-borderless'>
//                                   <th scope="col" className="text-justify text-dark"><b>Timestamp</b></th>
//                                 </Col>
//                                 <Col md="3" className='table-borderless'>
//                                   <th scope="col" className="text-justify text-dark"><b>Date</b></th>
//                                 </Col>
//                                 <Col md="2" className='table-borderless'>
//                                   <th scope="col" className="text-justify text-dark"><b>Time</b></th>
//                                 </Col>
//                                 <Col md="3" className='table-borderless'>
//                                   <th scope="col" className="text-justify text-dark"><b>class name</b></th>
//                                 </Col>
//                               </Row>
//                             </Col>
//                           </tr>
//                         </thead>
//                         <tbody >
//                           {
//                             datapresent1 == 1 ? <>
//                               {getData(current, size).map((data, index) => {
//                                 let date = new Date(data.date);
//                                 return <tr key={index}>
//                                   {/* {console.log("======", data)} */}
//                                   <Col>
//                                     <Row>
//                                       <Col md="1" className='table-borderless'>
//                                         <th scope="row" className="text-justify text-dark">{((current * perPage) - perPage) + index + 1}</th>
//                                       </Col>
//                                       <Col md="3" className='table-borderless'>
//                                         <td className="text-justify text-dark">{data.date} {data.time}</td>
//                                       </Col>
//                                       <Col md="3" className='table-borderless'>
//                                         <td className="text-justify text-dark">{date.toLocaleDateString()}</td>
//                                       </Col>
//                                       <Col md="2" className='table-borderless'>
//                                         <td className="text-justify text-dark">{data.time}</td>
//                                       </Col>
//                                       <Col md="3" className='table-borderless'>
//                                         <td className="text-justify text-dark">{data[DynamicClass]}</td>
//                                       </Col>
//                                     </Row>
//                                   </Col>
//                                 </tr>
//                               })
//                               }
//                             </> : datapresent1 == 2 ? <>
//                               {products.length > 0 ? getData1(current1, size1).map((data, index) => {
//                                 let date = new Date(data.date);
//                                 return <tr key={index}>
//                                   {/* {console.log("======", data)} */}
//                                   <Col>
//                                     <Row>
//                                       <Col md="1" className='table-borderless'>
//                                         <th scope="row" className="text-justify text-dark">{((current1 * perPage1) - perPage1) + index + 1}</th>
//                                       </Col>
//                                       <Col md="3" className='table-borderless'>
//                                         <td className="text-justify text-dark">{data.date} {data.time}</td>
//                                       </Col>
//                                       <Col md="3" className='table-borderless'>
//                                         <td className="text-justify text-dark">{date.toLocaleDateString()}</td>
//                                       </Col>
//                                       <Col md="2" className='table-borderless'>
//                                         <td className="text-justify text-dark">{data.time}</td>
//                                       </Col>
//                                       <Col md="3" className='table-borderless'>
//                                         <td className="text-justify text-dark">{data[DynamicClass]}</td>
//                                       </Col>
//                                     </Row>
//                                   </Col>
//                                 </tr>
//                               })
//                                 : < div className="row">
//                                   <div className="col-12" style={{ textAlign: "center" }}>
//                                     <td className="text-dark"><b>No Data Found</b></td>
//                                   </div>
//                                 </div>
//                               }
//                             </>
//                               : datapresent1 == 3 ? <><p className='mt-2'>No data to display</p></> : null
//                           }
//                         </tbody>
//                       </Table>
//                     </Col>
//                   </Card>
//                   {
//                     datapresent1 == 1 ? <>

//                       <div className="table-filter-info">

//                         <Pagination
//                           className="pagination-data"
//                           showTotal={(total, range) => `Showing ${range[0]}-${range[1]} of ${total}`}
//                           onChange={PaginationChange}
//                           total={rawdataapi.length > 0 ? rawdataapi[0].parsed_data.length : rawdataapi}
//                           current={current}
//                           pageSize={size}
//                           showSizeChanger={false}
//                           itemRender={PrevNextArrow}
//                           onShowSizeChange={PerPageChange}
//                         />
//                       </div>   </>
//                       : datapresent1 == 2 ? <>
//                         <div className="table-filter-info">

//                           <Pagination
//                             className="pagination-data"
//                             showTotal={(total, range) => `Showing ${range[0]}-${range[1]} of ${total}`}
//                             onChange={PaginationChange1}
//                             total={products.length}
//                             current={current1}
//                             pageSize={size1}
//                             showSizeChanger={false}
//                             itemRender={PrevNextArrow1}
//                             onShowSizeChange={PerPageChange1}
//                           />
//                         </div>
//                       </>
//                         : null
//                   }
//                 </div>
//               </Row>
//             </Col>
//           </Container >
//       }
//     </>
//   )
// }








import React, { useEffect, useState } from 'react'
import {
  Card, CardHeader, Container, Table, Row, Col, Input, CardBody, Button
} from 'reactstrap'
import Pagination from 'rc-pagination';
import Header from 'components/Headers/Header'
import "react-datepicker/dist/react-datepicker.css";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';
import { FadeLoader } from "react-spinners";
import { useHistory } from 'react-router-dom';

let globalvar = 0;
let viewfirst;
let ConditionView = true;
let setdate;
export default function ACDdashboard() {
  const [loading, setloading] = useState(false);

  const history = useHistory();
  const [view, setview] = useState(true)
  const [device, setdevice] = useState([])
  const [rawdata, setrawdata] = useState([])
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
      image_path: require("../../assets/img/GIfImages/bby-2.gif")

    },
    {
      class_name: "gun_shot",
      image_path: require("../../assets/img/GIfImages/gun_shot.gif")
    },
    {
      class_name: "dog_bark",
      image_path: require("../../assets/img/GIfImages/dogbarking.gif")
    },
    {
      class_name: "drilling",
      image_path: require("../../assets/img/GIfImages/drilling.gif")
    },
    {
      class_name: "car_theft_alarm",
      image_path: require("../../assets/img/GIfImages/original.webp")
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
      image_path: require("../../assets/img/GIfImages/angry-mad.gif")
    },
    {
      class_name: "men_scream",
      image_path: require("../../assets/img/GIfImages/man_screaming.gif")
    }
  ])
  const [datapresent, setdatapresent] = useState(true)
  let OnCardGrp1 = () => {
    setOnlayoutVis(true)

  }
  useEffect(() => {
    setloading(true)
    fetch("http://hubeoxys.com:8086/api/v1/device", {
    }).then((result) => {
      result.json().then((resp) => {
        setdevice(resp)
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
        fetch(`http://hubeoxys.com:8086/api/v1/raw_data_dev_id/${viewfirst}`, {
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
    // console.log("itemee", e)
    setTemp(e)
    // console.log("THIS IS RESULT", e)
    settestState(false)
    viewfirst = e
    fetch(`http://hubeoxys.com:8086/api/v1/raw_data_dev_id/${e}`, {
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
        setrawdataapi([resp])
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
    // console.log("dev_id ==> ", date.target.value);
    // console.log("filterdata", id)
    let temp = [];
    for (let index = 0; index < rawdata[0].parsed_data.length; index++) {
      if (date.target.value == rawdata[0].parsed_data[index].date) {
        temp.push(rawdata[0].parsed_data[index])
      }
    }
    setmatchedDate(temp)
    // console.log("matched date => ", matchedDate);
    // console.log("date matches");
  }
  useEffect(() => {
    setTimeout(() => {
      fetch(`http://hubeoxys.com:8086/api/v1/raw_data_dev_id/${viewfirst}`, {
      }).then((result) => {
        result.json().then((resp) => {
          // console.log("trylength", val)
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
            console.log("formatr", resp.parsed_data);
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
    const newPerPage = Math.ceil(rawdataapi[0].parsed_data.length / value);
    if (current > newPerPage) {
      setCurrent(newPerPage);
    }
  }
  let getData = (current, pageSize) => {
    // console.log("current", current, pageSize)
    if (rawdataapi.length > 0) {
      return rawdataapi[0].parsed_data.slice((current - 1) * pageSize, current * pageSize)
    } else {
      return [];
    }
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
  const handleSelect = (date) => {
    ConditionView = false
    setdate = date
    setdatapresent1(2)
    let filtered = allProducts[0].filter((data) => {
      // console.log("datadatadatadata", data);
      let productDate = new Date(data.date);
      var xxx = productDate.toLocaleDateString();
      // console.log("productDate", xxx);
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
    // console.log("filtered", filtered);
    // console.log(date);
    // console.log("datedatedate", date.selection.endDate);
  };
  
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  }
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
          <Container className='mt-6'  >
            {/* <h2 className=" text-center mb-4">
              ACD Dashboard
            </h2> */}
            <Row>
              <Col md="4">`

                <Card className='table-scroll-filter mt--4' >
                  {/* <Row>
                    <Col md="2">
                      <button type="submit" className="btn  btn-danger btn-sm mt-2" onClick={DeviceRedirect}>Device</button>
                    </Col>
                    <Col md="2">
                      {OnlayoutVis ? <Button onClick={OnCardGrp1}>ccz</Button> : null}

                    </Col>
                  </Row> */}
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
                              {/* {console.log("vvvvv1122", item.device_mac_id)} */}
                              {Temp === item.device_mac_id ?

                                <td>   <i class="fa fa-eye text-success" aria-hidden="true" onClick={() => { setview(true) }}></i>
                                </td> :
                                <td>   <i class="fa fa-eye-slash" aria-hidden="true" onClick={() => { deviceMacId(item.device_mac_id); ConditionView = true }}></i>
                                </td>
                              }
                            </tr>
                          })
                        }
                      </tbody>
                    </Table>
                  </CardHeader>
                </Card>
              </Col>
              {
                view ? <>
                  <Col md="8" >
                    <Row>
                      {
                        datapresent ?
                          rawdata.map((item, index) => {
                            return <>
                              <Col md="6" >
                                <Card className='table-scroll-filter'>
                                  <CardBody>
                                    <img src={(imgsrc)} alt='nnd,mn' style={{ height: "350px", width: "270px", objectFit: "cover" }}></img>
                                  </CardBody>
                                </Card>
                              </Col>
                              <Col md="5"
                              >
                                <Card className='table-scroll-filter'>
                                  <CardBody>
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
                                    </Row>
                                  </CardBody>
                                </Card>
                              </Col>
                              <Col>
                              </Col>
                            </>
                          })
                          :
                          <>
                            <Col md="6" >
                              <Card className='table-scroll-filter'>
                                <CardBody>
                                  {/* {console.log("imgsrrc2", imgsrc)} */}
                                  <p>No data present</p>
                                </CardBody>
                              </Card>
                            </Col>
                            <Col md="5"
                            >
                              <Card className='table-scroll-filter'>
                                <CardBody>
                                  <Row>
                                    <Col md="6" className='mt-5'>
                                      <td><b>device_mac_id:</b></td>
                                    </Col>
                                    <Col md="6" className='mt-5'>
                                      <td>No data</td>
                                    </Col>
                                  </Row>
                                  <Row>
                                    <Col md="6" className='mt-4'>
                                      <td><b>Date :</b></td>
                                    </Col>
                                    <Col md="6" className='mt-4'>
                                      <td>No data</td>
                                    </Col>
                                    <Col md="6" className='mt-4'>
                                      <td><b>className :</b></td>
                                    </Col>
                                    <Col md="6" className='mt-4'>
                                      <td>No data</td>
                                    </Col>
                                    <Col md="6" className='mt-4'>
                                      <td><b>Time :</b></td>
                                    </Col>
                                    <Col md="6" className='mt-4'>
                                      <td>No data</td>
                                    </Col>
                                  </Row>
                                </CardBody>
                              </Card>
                            </Col>
                            <Col>
                            </Col>
                          </>
                      }
                    </Row>
                  </Col>
                </> : <>
                  <Col md="7" className=''>
                    <div className='table-scroll-org2' >
                      <Card className=''>
                        <Row className='mt-4 float-right' style={{ marginLeft: "300px" }}>
                        </Row>
                        <CardHeader>
                          <Table className="align-items-center table-flush " responsive>
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
                                    // console.log("TestMatch", item)
                                    return <> <tr>
                                      <th scope="row" className="text-justify text-dark">{index + 1}</th>
                                      <td className="text-justify text-dark">{item.date}</td>
                                      <td className="text-justify text-dark">{item.time}</td>
                                      <td className="text-justify text-dark">{item.device_id}</td>
                                      <td className="text-justify text-dark">{item.class_name}</td>
                                    </tr>
                                    </>
                                  })
                                  :
                                  <>
                                    <div className="row table-scroll-org3">
                                      <div className="col-12" style={{ textAlign: "center" }}>
                                        <td className="text-dark"><b>No Data Found</b></td>
                                      </div>
                                    </div>
                                  </>
                              }
                            </tbody>
                          </Table>
                        </CardHeader>
                      </Card>
                    </div>
                  </Col>
                </>
              }
            </Row>
            <Col md="12">
              <Row className='mt-5 '>
                <Col md="12">
                  {
                    view1 ? <Col>
                      <DateRangePicker
                        ranges={[selectionRange]}
                        onChange={handleSelect}
                        className='dateselect'
                      >  </DateRangePicker><button className='btn btn-danger btn-sm float-right mr-6 mb-3' onClick={cancel}>cancel</button> </Col> : <button className='btn btn-primary btn-sm float-right mb-3' onClick={fn1}>Filter</button>
                  }
                </Col>
                <div className="col ">
                  <Card className="shadow ">
                    <CardHeader className=" ">
                      {rawdataapi.map((item, index) => {
                        return <div key={index}>
                          <td className="text-justify text-dark"><b>{item.device_mac_id}</b></td>
                        </div>
                      })
                      }
                    </CardHeader>
                    <Col className=''>
                      <Table className="align-items-center table-flush bvvv" responsive>
                        <thead className="thead-light">
                          {
                            Object.entries(ObjectrawData).map(([key, val], index) => {
                              return index == 0 ? <>
                                {
                                  Object.entries(val).map(([key1, val], index) => {
                                    console.log("qdfasdf", index)
                                    return <>
                                      <td className="text-justify text-dark bvvv"><b>{key1}</b></td>
                                    </>
                                  })
                                }
                              </> : null
                            }
                            )
                          }
                        </thead>
                        <tbody >
                          {
                            datapresent1 == 1 ? <>
                              {
                                Object.entries(ObjectrawData).map(([key, val], index) => {
                                  console.log("valu78ty8", val);
                                  return <tr>
                                    {Object.entries(val).map(([key, val], index) => {

                                      {/* <Col md="3" className='table-borderless'> <th scope="row" className="text-justify text-dark">{key}</th></Col> */ }
                                      return <>
                                        <td className="text-justify text-dark bvvv">{val}
                                        </td>

                                      </>
                                    })} </tr>
                                }
                                )
                              }
                            </> : datapresent1 == 2 ? <>
                              {products.length > 0 ? getData1(current1, size1).map((data, index) => {
                                let date = new Date(data.date);
                                return <tr key={index}>
                                  {/* {console.log("======", data)} */}
                                  <Col>
                                    <Row>
                                      <Col md="1" className='table-borderless'>
                                        <th scope="row" className="text-justify text-dark">{((current1 * perPage1) - perPage1) + index + 1}</th>
                                      </Col>
                                      <Col md="3" className='table-borderless'>
                                        <td className="text-justify text-dark">{data.date} {data.time}</td>
                                      </Col>
                                      <Col md="3" className='table-borderless'>
                                        <td className="text-justify text-dark">{date.toLocaleDateString()}</td>
                                      </Col>
                                      <Col md="2" className='table-borderless'>
                                        <td className="text-justify text-dark">{data.time}</td>
                                      </Col>
                                      <Col md="3" className='table-borderless'>
                                        <td className="text-justify text-dark">{data[DynamicClass]}</td>
                                      </Col>
                                    </Row>
                                  </Col>
                                </tr>
                              })
                                : < div className="row">
                                  <div className="col-12" style={{ textAlign: "center" }}>
                                    <td className="text-dark"><b>No Data Found</b></td>
                                  </div>
                                </div>
                              }
                            </>
                              : datapresent1 == 3 ? <><p className='mt-2'>No data to display</p></> : null
                          }
                        </tbody>
                      </Table>
                    </Col>
                  </Card>
                  {
                    datapresent1 == 1 ? <>
                      <div className="table-filter-info">
                        <Pagination
                          className="pagination-data"
                          showTotal={(total, range) => `Showing ${range[0]}-${range[1]} of ${total}`}
                          onChange={PaginationChange}
                          total={rawdataapi.length > 0 ? rawdataapi[0].parsed_data.length : rawdataapi}
                          current={current}
                          pageSize={size}
                          showSizeChanger={false}
                          itemRender={PrevNextArrow}
                          onShowSizeChange={PerPageChange}
                        />
                      </div>   </>
                      : datapresent1 == 2 ? <>
                        <div className="table-filter-info">

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
                      </>
                        : null
                  }
                </div>
              </Row>
            </Col>
          </Container >
      }
    </>
  )
}



