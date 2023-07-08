
// import {
//     Button, Card, CardBody, FormGroup, Form, Input, Container, Row, Col,
// } from "reactstrap";
// import Header from 'components/Headers/Header';
// import { useState } from "react";
// import { useHistory } from 'react-router-dom';
// import ApiService from "views/examples/Service/ApiService";
// export default function SMSNotificationAdd() {
//     const [NotificationName, setNotificationName] = useState("")
//     const [NotificationMessage, setNotificationMessage] = useState("")
//     const [update, setupdate] = useState(false)
//     const [Array, setArray] = useState([])
//     const [findedValue, setfindedValue] = useState("")
//     const [notProfile, setnotProfile] = useState(false)
//     const [notmessage, setnotmessage] = useState(false)
//     const history = useHistory();
//     var xxx = "$alert_message";
//     var yyy = "$device_id"
//     let text = "$alert_message, $device_id";
//     let result = text.includes("$device_id");
//     // console.log("result",result);
//     let AddFunc = () => {
//         // if (NotificationMessage  == xxx && yyy) {
//         //     alert("$alert_message && $device_id mention")

//         // }
//         if (NotificationMessage.includes("$device_id") && NotificationMessage.includes("$alert_message")) {
//             // console.log("result",NotificationMessage == result);
//             // alert("$alert_message && $device_id mention")
//             const createObj = { NotificationName: NotificationName, NotificationMessage: NotificationMessage }
//             setArray((old) => {
//                 return [...old, createObj]
//             })
//             setNotificationName("")
//             setNotificationMessage("")

//         }
//         else if (NotificationName == "" && NotificationMessage == "") {
//             setnotProfile(true)
//             setnotmessage(true)

//         }

//         else if (NotificationName == "") {
//             setnotProfile(true)
//         }
//         else if (NotificationMessage == "") {
//             setnotmessage(true)
//         }
//         else if (!NotificationMessage.includes("$device_id")) {
//             alert(" Notification Message should inculde `$device_id `")
//         }
//         else if (!NotificationMessage.includes("$alert_message")) {
//             alert("Notification Message should inculde `$alert_message `  ")
//         }
//         // else if (!NotificationMessage.includes("$device_id") || NotificationMessage.includes("$alert_message")) {
//         //     alert("write $device_id && $alert_message ")
//         // }
//         // setNotificationName("")
//         // setNotificationMessage("")
//     }
//     let SendData = () => {
//         Array.forEach((oldvalues) => {
//             let NotificationName = oldvalues.NotificationName;
//             let NotificationMessage = oldvalues.NotificationMessage
//             let createFinalObj = { created_by: "test", updated_by: "test", content_name: NotificationName, sms_content: NotificationMessage }
//             ApiService.SmsAdd(createFinalObj).then((resp)=>{
//                 if (resp.message) {
//                     console.log(resp);
//                     alert("content name already exists !")
//                 } else {
//                     history.push('/admin/SMSNotification');
//                 }

//             })

//         })
//     }
//     let DeleteFn = (id) => {
//         setArray((oldValues) => {
//             return oldValues.filter((_, i) => i !== id);
//         })
//         setNotificationName("")
//         setNotificationMessage("")
//     }

//     let UpdateFn = () => {
//         if (NotificationMessage.includes("$device_id") && NotificationMessage.includes("$alert_message")) {

//             setArray(Array.map((item, index) => {
//                 if (item.NotificationName === findedValue) {
//                     return { ...item, NotificationName: NotificationName, NotificationMessage: NotificationMessage }
//                 }
//                 return item;
//             }))
//             setnotProfile(false)
//             setNotificationName("")
//             setNotificationMessage("")
//             setupdate(false)
//         }
//         else if (NotificationName == "") {
//             setnotProfile(true)
//         }
//         else if (NotificationMessage == "") {
//             setnotmessage(true)
//         }
//         else if (!NotificationMessage.includes("$device_id")) {
//             alert(" Notification Message should inculde `$device_id `")
//         }
//         else if (!NotificationMessage.includes("$alert_message")) {
//             alert(" Notification Message should inculde `$alert_message`")
//         }

//     }
//     let EditFn = (id) => {
//         let editValue = Array.find((value, index) => index == id);
//         // console.log("this is edit", editValue)
//         setNotificationName(editValue.NotificationName)
//         setNotificationMessage(editValue.NotificationMessage)
//         setupdate(true)
//         setfindedValue(editValue.NotificationName)
//         // console.log(editValue.NotificationName)
//         if (NotificationName == "" && NotificationMessage == "") {
//             setnotProfile(false)
//             setnotmessage(false)
//         }
//         else if (NotificationName == "") {
//             setnotProfile(false)
//         }
//         else if (NotificationMessage == "") {
//             setnotmessage(false)
//         }
//     }

//     let cancelFn = (e) => {
//         setNotificationName("")
//         setNotificationMessage("")
//         setupdate(false)
//         history.push('/admin/SMSNotification');
//     }
//     let onName = (e) => {
//         setnotProfile(false)
//         setNotificationName(e.target.value)
//     }
//     let onMessage = (e) => {
//         setnotmessage(false)
//         // alert("dn,vmdfn")
//         setNotificationMessage(e.target.value)
//     }
//     return (
//         <>
//             <Header />
//             <Container className="mt-5" fluid>
//                 <Row>
//                     <Col className="order-xl-1" xl="12">
//                         <Card className="bg-secondary shadow">
//                             <CardBody>
//                                 <Form>
//                                     <div className="pl-lg-4">
//                                         {/* <Row>
//                                             <Col md="6">
//                                                 <FormGroup>
//                                                     <label
//                                                         className="form-control-label"
//                                                         htmlFor="input-address"
//                                                     >
//                                                         User Name
//                                                     </label>
//                                                     <Input
//                                                         className="form-control-alternative"
//                                                         id="input-address"
//                                                         placeholder="Enter Notification Name"
//                                                         type="text"
//                                                     />
//                                                 </FormGroup>
//                                             </Col>
//                                             <Col md="6">
//                                                 <FormGroup>
//                                                     <label
//                                                         className="form-control-label"
//                                                         htmlFor="input-address"
//                                                     >
//                                                         Password
//                                                     </label>
//                                                     <Input
//                                                         className="form-control-alternative"
//                                                         id="input-address"
//                                                         placeholder="Enter Notification Message"
//                                                         type="password"
//                                                     />
//                                                 </FormGroup>
//                                             </Col>
//                                         </Row>
//                                         <Row>
//                                             <Col md="6">
//                                                 <FormGroup>
//                                                     <label
//                                                         className="form-control-label"
//                                                         htmlFor="input-address"
//                                                     >
//                                                         Port Number
//                                                     </label>
//                                                     <Input
//                                                         className="form-control-alternative"
//                                                         id="input-address"
//                                                         placeholder="Enter Notification Name"
//                                                         type="text"
//                                                     />
//                                                 </FormGroup>
//                                             </Col>
//                                             <Col md="6">
//                                                 <FormGroup>
//                                                     <label
//                                                         className="form-control-label"
//                                                         htmlFor="input-address"
//                                                     >
//                                                         Domain Name
//                                                     </label>
//                                                     <Input
//                                                         className="form-control-alternative"
//                                                         id="input-address"
//                                                         placeholder="Enter Notification Message"
//                                                         type="text"
//                                                     />
//                                                 </FormGroup>
//                                             </Col>
//                                         </Row> */}
//                                         <Row>
//                                             <Col md="5">
//                                                 <FormGroup>
//                                                     <label
//                                                         className="form-control-label"
//                                                         htmlFor="input-address"
//                                                     >
//                                                         Notification name
//                                                     </label>
//                                                     <Input
//                                                         className="form-control-alternative"
//                                                         onChange={onName}
//                                                         id="input-address"
//                                                         value={NotificationName}
//                                                         placeholder="Enter notification name"
//                                                         type="text"
//                                                     />
//                                                     {notProfile ? <p style={{ color: "red" }}>Please Enter notification name</p> : null}
//                                                 </FormGroup>
//                                             </Col>
//                                             <Col md="5">
//                                                 <FormGroup>
//                                                     <label
//                                                         className="form-control-label"
//                                                         htmlFor="input-address"
//                                                     >
//                                                         SMS notify messages
//                                                     </label>
//                                                     <Input
//                                                         className="form-control-alternative"
//                                                         id="input-address"
//                                                         value={NotificationMessage}
//                                                         onChange={onMessage}
//                                                         placeholder="Enter SMS notify messages"
//                                                         type="textarea"
//                                                     />
//                                                     {notmessage ? <p style={{ color: "red" }}>Please enter message</p> : null}
//                                                 </FormGroup>
//                                             </Col>
//                                             <Col md="2" className="mt-4">
//                                                 {update ? <Button color="warning" className='btn btn-primary btn-sm' onClick={UpdateFn}>Update</Button> : <Button color="primary" className="btn" size="sm" onClick={AddFunc}>Add</Button>}
//                                             </Col>
//                                         </Row>
//                                     </div>
//                                 </Form>
//                                 {
//                                     Array.map((item, index) => {
//                                         return <div key={index} class="row ml-3">
//                                             <div class="col-md-2 mb-4">
//                                                 <div class="form-outline datepicker">
//                                                     <label for="exampleDatepicker1" class="form-label text-dark">{index + 1}</label>
//                                                 </div>
//                                             </div>
//                                             <div class="col-md-4 mb-4">
//                                                 <div class="">
//                                                     <label for="exampleDatepicker1" class="form-label text-dark">{item.NotificationName}</label>
//                                                 </div>
//                                             </div>
//                                             <div class="col-md-3 mb-4">
//                                                 <div class="">
//                                                     <label for="exampleDatepicker1" class="form-label text-dark">{item.NotificationMessage}</label>
//                                                 </div>
//                                             </div>
//                                             <div class="col-md-1 mb-4">
//                                                 <div class="f">
//                                                     <button className='btn btn-primary btn-sm' onClick={() => EditFn(index)}>Edit</button>
//                                                 </div>
//                                             </div>
//                                             <div class="col-md-1 mb-4">
//                                                 <div class="form-outline datepicker">
//                                                     <button className='btn btn-danger btn-sm' onClick={() => DeleteFn(index)}>Delete</button>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     })
//                                 }
//                                 <Row className='ml-3 mt-5'>
//                                     <Col>
//                                         {
//                                             Array.length > 0 ? <>
//                                                 <Button color="success" className="btn " size="sm" onClick={SendData}>Save</Button>
//                                                 <Button color="danger" size="sm" onClick={e => cancelFn(e)}>Cancel</Button>   </>
//                                                 : <Button color="danger" size="sm" onClick={e => cancelFn(e)}>Cancel</Button>

//                                         }

//                                     </Col>
//                                 </Row>
//                             </CardBody>
//                         </Card>
//                     </Col>
//                 </Row>
//             </Container>
//         </>
//     )
// }



import {
    Button, Card, CardBody, FormGroup, Form, Input, Container, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter
} from "reactstrap";
import Header from 'components/Headers/Header';
import { useState } from "react";
import { useHistory } from 'react-router-dom';
import ApiService from "views/examples/Service/ApiService";
// import AutoSuggest from 'react-autosuggest';
import { useEffect } from "react";
import { useRef } from "react";

const references = [
    { id: 1, name: "$alert_message" },
    { id: 2, name: "$device_id" },
    { id: 3, name: "$value" },
    { id: 4, name: "$username" },
];


// let addOpion = '';
export default function SMSNotificationAdd() {


    const [addOpion, setaddOpion] = useState("")
    const [isOpen, setisOpen] = useState(false)
    const [NotificationName, setNotificationName] = useState("")
    const [NotificationMessage, setNotificationMessage] = useState("")
    const [update, setupdate] = useState(false)
    const [Array, setArray] = useState([])
    const [findedValue, setfindedValue] = useState("")
    const [notProfile, setnotProfile] = useState(false)
    const [notmessage, setnotmessage] = useState(false)
    const history = useHistory();

    const [checked1, setchecked1] = useState("fa fa-exclamation-circle text-info ml-2")
    const [checked2, setchecked2] = useState("fa fa-exclamation-circle text-info ml-2")
    const [checked3, setchecked3] = useState("fa fa-exclamation-circle text-info ml-2")
    const [checked4, setchecked4] = useState("fa fa-exclamation-circle text-info ml-2")

    const [modelName, setmodelName] = useState("SampleName")
    const [modelMessage, setmodelMessage] = useState(`Hi $username ,
This is from the device $device_id and the value is $value and the alert message is $alert_message `)


    //this is for model
    const [modal, setmodal] = useState(false)

    var xxx = "$alert_message";
    var yyy = "$device_id"
    let text = "$alert_message, $device_id";
    let result = text.includes("$device_id");

    const [FocusInput, setFocusInput] = useState("")

    const [valid, setvalid] = useState()

    const [notmessage1, setnotmessage1] = useState(false)
    const [notmessage2, setnotmessage2] = useState(false)
    const [notmessage3, setnotmessage3] = useState(false)
    const [notmessage4, setnotmessage4] = useState(false)
    const [validTrue, settrue] = useState(false)
    useEffect(() => {

        console.log("executed")

        if (FocusInput.includes("$username")) {
            // setchecked1(true)
            setchecked1("fa fa-check-circle text-success ml-2")
            // setvalid(true)
            // setnotmessage1(false)

        }
        else if (!FocusInput.includes("$username")) {
            // setchecked1(false)
            setchecked1("fa fa-times-circle text-danger ml-2")
            // setvalid(false)
            // setnotmessage1(true)
        }

        if (FocusInput.includes("$value")) {
            // setchecked2(true)
            setchecked2("fa fa-check-circle text-success ml-2")
            // setvalid(true)
            // setnotmessage2(false)
        }
        else if (!FocusInput.includes("$value")) {
            // setchecked2(false)
            setchecked2("fa fa-times-circle text-danger ml-2")
            // setvalid(false)
            // setnotmessage2(true)
        }

        if (FocusInput.includes("$alert_message")) {
            // setchecked3(true)
            setchecked3("fa fa-check-circle text-success ml-2")
            // setvalid(true)
            // setnotmessage3(false)
        }
        else if (!FocusInput.includes("$alert_message")) {
            // setchecked3(false)
            setchecked3("fa fa-times-circle text-danger ml-2")
            // setvalid(false)
            // setnotmessage3(true)
        }

        if (FocusInput.includes("$device_id")) {
            // setchecked4(true)
            setchecked4("fa fa-check-circle text-success ml-2")
            // setvalid(true)
            // setnotmessage4(false)
        }
        else if (!FocusInput.includes("$device_id")) {
            // setchecked4(false)
            setchecked4("fa fa-times-circle text-danger ml-2")
            // setvalid(false)
            // setnotmessage4(true)
        }

    }, [FocusInput, validTrue])

    // console.log("result",result);
    let AddFunc = () => {



        // }
        // if (NotificationMessage.includes("$device_id") && NotificationMessage.includes("$alert_message")) {
        //     // console.log("result",NotificationMessage == result);
        //     // alert("$alert_message && $device_id mention")
        //     const createObj = { NotificationName: NotificationName, NotificationMessage: NotificationMessage }

        //     console.log("test", createObj)

        //     setArray((old) => {
        //         return [...old, createObj]
        //     })
        //     setNotificationName("")
        //     setNotificationMessage("")

        // }
        // else if (NotificationName == "" && NotificationMessage == "") {
        //     setnotProfile(true)
        //     setnotmessage(true)

        // }

        // else if (NotificationName == "") {
        //     setnotProfile(true)
        // }
        // else if (NotificationMessage == "") {
        //     setnotmessage(true)
        // }
        // else if (!NotificationMessage.includes("$device_id")) {
        //     alert(" Notification Message should inculde `$device_id `")
        // }
        // else if (!NotificationMessage.includes("$alert_message")) {
        //     alert("Notification Message should inculde `$alert_message `  ")
        // }
        // else if (!NotificationMessage.includes("$device_id") || NotificationMessage.includes("$alert_message")) {
        //     alert("write $device_id && $alert_message ")
        // }
        // setNotificationName("")
        // setNotificationMessage("")

    }
    let SendData = () => {

        console.log("executedfunc")
        settrue(!validTrue)
        // const createObj = { NotificationName: NotificationName, NotificationMessage: NotificationMessage }
        setFocusInput(NotificationMessage)

        if (!NotificationMessage.includes('$username')) {

            console.log("executedfunc1")
            setnotmessage1(true)

        }
        else if (!NotificationMessage.includes('$value')) {
            setnotmessage1(true)
            console.log("executedfunc2")

        }
        else if (!NotificationMessage.includes('$alert_message')) {
            setnotmessage1(true)
            console.log("executedfunc3")
        }
        else if (!NotificationMessage.includes('$device_id')) {
            setnotmessage1(true)
            console.log("executedfunc4")
        }

        else {

            setnotmessage1(false)

            const createObj = { NotificationName: NotificationName, NotificationMessage: NotificationMessage }


            console.log("test", createObj)

            setArray((old) => {

                return [...old, createObj]
            })
            setNotificationName("")
            setNotificationMessage("")

        }

        // Array.forEach((oldvalues) => {
        //     let NotificationName = oldvalues.NotificationName;
        //     let NotificationMessage = oldvalues.NotificationMessage
        //     let createFinalObj = { created_by: "test", updated_by: "test", content_name: NotificationName, sms_content: NotificationMessage }
        //     ApiService.SmsAdd(createFinalObj).then((resp) => {
        //         if (resp.message) {
        //             console.log(resp);
        //             alert("content name already exists !")
        //         } else {
        //             history.push('/admin/SMSNotification');
        //         }

        //     })

        // })
    }


    let DeleteFn = (id) => {
        setArray((oldValues) => {
            return oldValues.filter((_, i) => i !== id);
        })
        setNotificationName("")
        setNotificationMessage("")
    }

    let UpdateFn = () => {
        if (NotificationMessage.includes("$device_id") && NotificationMessage.includes("$alert_message")) {

            setArray(Array.map((item, index) => {
                if (item.NotificationName === findedValue) {
                    return { ...item, NotificationName: NotificationName, NotificationMessage: NotificationMessage }
                }
                return item;
            }))
            setnotProfile(false)
            setNotificationName("")
            setNotificationMessage("")
            setupdate(false)
        }
        else if (NotificationName == "") {
            setnotProfile(true)
        }
        else if (NotificationMessage == "") {
            setnotmessage(true)
        }
        else if (!NotificationMessage.includes("$device_id")) {
            alert(" Notification Message should inculde `$device_id `")
        }
        else if (!NotificationMessage.includes("$alert_message")) {
            alert(" Notification Message should inculde `$alert_message`")
        }

    }
    let EditFn = (id) => {
        let editValue = Array.find((value, index) => index == id);
        // console.log("this is edit", editValue)
        setNotificationName(editValue.NotificationName)
        setNotificationMessage(editValue.NotificationMessage)
        setupdate(true)
        setfindedValue(editValue.NotificationName)
        // console.log(editValue.NotificationName)
        if (NotificationName == "" && NotificationMessage == "") {
            setnotProfile(false)
            setnotmessage(false)
        }
        else if (NotificationName == "") {
            setnotProfile(false)
        }
        else if (NotificationMessage == "") {
            setnotmessage(false)
        }
    }

    let cancelFn = (e) => {
        setNotificationName("")
        setNotificationMessage("")
        setupdate(false)
        history.push('/admin/SMSNotification');
    }
    let onName = (e) => {
        setnotProfile(false)
        setNotificationName(e.target.value)
    }

    useEffect(() => {

        console.log("this is a notification", NotificationMessage.includes("$value"))
        if (NotificationMessage.includes("$username")) {
            // setchecked1(true)
            setchecked1("fa fa-check-circle text-success ml-2")
        }
        else if (!NotificationMessage.includes("$username")) {
            // setchecked1(false)
            setchecked1("fa fa-exclamation-circle text-info ml-2")
        }
        if (NotificationMessage.includes("$value")) {
            // setchecked2(true)
            setchecked2("fa fa-check-circle text-success ml-2")
        }
        else if (!NotificationMessage.includes("$value")) {
            // setchecked2(false)
            setchecked2("fa fa-exclamation-circle text-info ml-2")
        }

        if (NotificationMessage.includes("$alert_message")) {
            // setchecked3(true)
            setchecked3("fa fa-check-circle text-success ml-2")
        }
        else if (!NotificationMessage.includes("$alert_message")) {
            // setchecked3(false)
            setchecked3("fa fa-exclamation-circle text-info ml-2")
        }

        if (NotificationMessage.includes("$device_id")) {
            // setchecked4(true)
            setchecked4("fa fa-check-circle text-success ml-2")
        }
        else if (!NotificationMessage.includes("$device_id")) {
            // setchecked4(false)
            setchecked4("fa fa-exclamation-circle text-info ml-2")
        }
        // if (!NotificationMessage.includes("$username")){

        //     setchecked1(false)
        //     setchecked2(false)
        //     setchecked3(false)
        //      setchecked4(false)


        // }

    }, [NotificationMessage])

    let toggle = () => {

        setmodal(!modal);
    }

    let onMessage = (e) => {

        setnotmessage1(false)
        // setnotmessage(false)s
        // alert("dn,vmdfn")

        console.log("dn,vmdfn", e.target.value[e.target.value.length - 1])

        if (e.target.value[e.target.value.length - 1] == `$`) {
            // alert("the $ symbol is inn")

            setisOpen(true)
            return setNotificationMessage(e.target.value)
            // console.log("Sdfsdgszdg", e.target.value + addOpion)
            // let createtxt = + addOpion

        }
        else {
            console.log("Sdfsdgszdg", e.target.value)
            setisOpen(false)
            setNotificationMessage(e.target.value)
        }

    }

    let addingFn = (e) => {

        // setmodelName("SampleName")
        // setmodelMessage(`Hi $username ,
        // This is from the device $device_id and the value is $value and the alert message is $alert_message `)
        // addOpion =

        setaddOpion(e.target.value)

        setNotificationMessage(NotificationMessage + e.target.value)
        setisOpen(false)

        // console.log("Sdfsdgszdg", FocusInput.current)
        // FocusInput.current.focus()

        document.getElementById('input-address1').focus()

    }


    let UseFn = () => {

        setNotificationName(modelName)

        setNotificationMessage(modelMessage)
        setmodal(!modal);
    }

    return (
        <>
            <Header />

            <Modal size="lg" isOpen={modal} toggle={toggle} >
                <ModalHeader toggle={toggle}>SMS Notification Template</ModalHeader>
                <ModalBody>
                    <Row>
                        <Col md='5'>

                            <label className="form-control-label"><b>SMS Notification Name</b></label>
                            <br />
                            <br />
                            <label className="form-control-label">SampleName</label>
                        </Col>
                        <Col md='7'>

                            <label className="form-control-label"><b>SMS notify Messages</b></label>
                            <br />
                            <br />
                            <label className="form-control-label">Hi <b>$username</b> ,
                                <br />
                                This is from the device <b>$device_id</b> the value is <b>$value</b>
                                <br /> and the alert message is <b>$alert_message</b> </label>
                        </Col>
                        {/* <Col md='3'>
                            <label className="form-control-label"><b>Validation</b></label>
                            <label>

                                <i class="fa fa-check-circle text-success ml-2" aria-hidden="true"> </i>    $username
                            </label>
                            <br />
                            <label>

                                <i class="fa fa-check-circle text-success ml-2" aria-hidden="true"> </i>       $value
                            </label>
                            <br />
                            <label>

                                <i class="fa fa-check-circle text-success ml-2" aria-hidden="true"> </i> $alert_message
                            </label>
                            <br />
                            <label>

                                <i class="fa fa-check-circle text-success ml-2" aria-hidden="true"> </i>      $device_id
                            </label>
                        </Col> */}

                    </Row>
                </ModalBody>
                <ModalFooter>
                    {
                        <>
                            <Button color="success" className='btn-sm' onClick={UseFn}>Use</Button>
                            <Button color="danger" className='btn-sm' onClick={toggle}>Close</Button>
                        </>
                    }

                </ModalFooter>
            </Modal>
            <Container className="mt-5" fluid>
                <Row>
                    <Col className="order-xl-1" xl="12">
                        <Card className="bg-secondary shadow">
                            <CardBody>
                                <Form>
                                    <div className="pl-lg-4">
                                        {/* <Row>
                                            <Col md="6">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-address"
                                                    >
                                                        User Name
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        id="input-address"
                                                        placeholder="Enter Notification Name"
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col md="6">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-address"
                                                    >
                                                        Password
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        id="input-address"
                                                        placeholder="Enter Notification Message"
                                                        type="password"
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md="6">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-address"
                                                    >
                                                        Port Number
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        id="input-address"
                                                        placeholder="Enter Notification Name"
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col md="6">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-address"
                                                    >
                                                        Domain Name
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        id="input-address"
                                                        placeholder="Enter Notification Message"
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row> */}
                                        <Row>
                                            <Col md="5">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-address"
                                                    >
                                                        SMS Notification Name
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        onChange={onName}
                                                        id="input-address"
                                                        value={NotificationName}
                                                        placeholder="Enter Notification Name"
                                                        type="text"
                                                    />

                                                    {notProfile ? <p style={{ color: "red" }}>* Please Enter the notification name</p> : null}
                                                </FormGroup>
                                            </Col>
                                            <Col md="5">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-address"
                                                    >
                                                        SMS notify Messages
                                                    </label>
                                                    <Input
                                                        // ref={FocusInput}
                                                        className="form-control-alternative"
                                                        id="input-address1"
                                                        value={NotificationMessage}
                                                        rows="3" cols="33"
                                                        onChange={onMessage}
                                                        placeholder="Enter Notification Message"
                                                        type="textarea"
                                                    />
                                                    {isOpen ? <>

                                                        <option value="username " className='text-dark' onClick={addingFn}>$username</option>
                                                        <option value="value " className='text-dark' onClick={addingFn}>$value</option>
                                                        <option value="alert_message " className='text-dark' onClick={addingFn}>$alert_message</option>
                                                        <option value="device_id " className='text-dark' onClick={addingFn}>$device_id</option>
                                                    </> : null

                                                    }
                                                    {notmessage1 ? <p style={{ color: "red" }}>* Please Enter the<i class="fa fa-times-circle text-danger ml-2"></i> Fields</p> : null}
                                                    {/* {notmessage2 ? <p style={{ color: "red" }}>* Please Enter the <b>$value</b> </p> : null}
                                                    {notmessage3 ? <p style={{ color: "red" }}>* Please Enter the <b>$alert_message</b> </p> : null}
                                                    {notmessage4 ? <p style={{ color: "red" }}>* Please Enter the <b>$device_id</b> </p> : null} */}
                                                </FormGroup>
                                            </Col>
                                            <Col md="2" className="mt-4">
                                                {update ? <Button color="warning" className='btn btn-primary btn-sm' onClick={UpdateFn}>Update</Button> : <> <a> <i class="fa fa-info-circle text ml-2" onClick={toggle} aria-hidden="true"> </i> </a></>}
                                            </Col>
                                            {/* <Col md='5'>
                                                <AutoSuggest
                                                    suggestions={suggestions}
                                                    onSuggestionsClearRequested={() => setSuggestions([])}
                                                    onSuggestionsFetchRequested={({ value }) => {
                                                        console.log(value);
                                                        setValue(value);
                                                        setSuggestions(getSuggestions(value));
                                                    }}
                                                    onSuggestionSelected={(_, { suggestionValue }) =>
                                                        console.log("Selected: " + suggestionValue)
                                                    }
                                                    getSuggestionValue={suggestion => suggestion.name}
                                                    renderSuggestion={suggestion => <span>{suggestion.name}</span>}
                                                    inputProps={{
                                                        placeholder: "Type 'c'",
                                                        value: value,
                                                        onChange: (_, { newValue, method }) => {
                                                            setValue(newValue);
                                                        }
                                                    }}
                                                    highlightFirstSuggestion={true}
                                                />
                                            </Col> */}

                                        </Row>

                                    </div>
                                </Form>
                                {
                                    Array.map((item, index) => {
                                        return <div key={index} class="row ml-3">
                                            <div class="col-md-2 mb-4">
                                                <div class="form-outline datepicker">
                                                    <label for="exampleDatepicker1" class="form-label text-dark">{index + 1}</label>
                                                </div>
                                            </div>
                                            <div class="col-md-4 mb-4">
                                                <div class="">
                                                    <label for="exampleDatepicker1" class="form-label text-dark">{item.NotificationName}</label>
                                                </div>
                                            </div>
                                            <div class="col-md-3 mb-4">
                                                <div class="">
                                                    <label for="exampleDatepicker1" class="form-label text-dark">{item.NotificationMessage}</label>
                                                </div>
                                            </div>
                                            <div class="col-md-1 mb-4">
                                                <div class="f">
                                                    <button className='btn btn-primary btn-sm' onClick={() => EditFn(index)}>Edit</button>
                                                </div>
                                            </div>
                                            <div class="col-md-1 mb-4">
                                                <div class="form-outline datepicker">
                                                    <button className='btn btn-danger btn-sm' onClick={() => DeleteFn(index)}>Delete</button>
                                                </div>
                                            </div>
                                        </div>
                                    })
                                }
                                <Row className='ml-3 mt-5'>
                                    <Col>

                                        <Button color="success" className="btn " size="sm" onClick={SendData}>Save</Button>
                                        <Button color="danger" size="sm" onClick={e => cancelFn(e)}>Cancel</Button>

                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col >


                        <label>

                            $username

                            {console.log("asfasfdf", checked1)}
                            {checked1 === "fa fa-exclamation-circle text-info ml-2" ? <a class={checked1} title="please Use this text" aria-hidden="true" /> : checked1.includes("fa fa-check-circle text-success ml-2") ? <a class={checked1} title="Looks Good" aria-hidden="true" /> : checked1.includes("fa fa-times-circle text-danger ml-2") ? <a class={checked1} title="Mandatory Text" aria-hidden="true" /> : null}

                        </label>
                        <br />
                        <label>

                            $value
                            {checked2 === "fa fa-exclamation-circle text-info ml-2" ? <a class={checked2} title="please Use this text" aria-hidden="true" /> : checked2.includes("fa fa-check-circle text-success ml-2") ? <a class={checked2} title="Looks Good" aria-hidden="true" /> : checked2.includes("fa fa-times-circle text-danger ml-2") ? <a class={checked2} title="Mandatory Text" aria-hidden="true" /> : null}

                            {/* <a class={checked2} title="please Use this text" aria-hidden="true" /> */}
                        </label>
                        <br />
                        <label>

                            $alert_message

                            {checked3 === "fa fa-exclamation-circle text-info ml-2" ? <a class={checked3} title="please Use this text" aria-hidden="true" /> : checked3.includes("fa fa-check-circle text-success ml-2") ? <a class={checked3} title="Looks Good" aria-hidden="true" /> : checked3.includes("fa fa-times-circle text-danger ml-2") ? <a class={checked3} title="Mandatory Text" aria-hidden="true" /> : null}

                            {/* <a class={checked3} title="please Use this text" aria-hidden="true" /> */}
                        </label>
                        <br />
                        <label>

                            $device_id
                            {checked4 === "fa fa-exclamation-circle text-info ml-2" ? <a class={checked4} title="please Use this text" aria-hidden="true" /> : checked4.includes("fa fa-check-circle text-success ml-2") ? <a class={checked4} title="Looks Good" aria-hidden="true" /> : checked4.includes("fa fa-times-circle text-danger ml-2") ? <a class={checked4} title="Mandatory Text" aria-hidden="true" /> : null}


                            {/* <a class={checked4} title="please Use this text" aria-hidden="true" /> */}
                        </label>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
