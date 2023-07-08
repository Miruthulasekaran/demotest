import {
    Button, Card, CardBody, FormGroup, Form, Input, Container, Row, Col,
} from "reactstrap";
import Header from 'components/Headers/Header';
import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import ApiService from "views/examples/Service/ApiService";
export default function EmailNotificationAdd() {
    const [NotificationName, setNotificationName] = useState("")
    const [NotificationMessage, setNotificationMessage] = useState("")
    const [update, setupdate] = useState(false)
    const [Array, setArray] = useState([])
    const [findedValue, setfindedValue] = useState("")
    const [notProfile, setnotProfile] = useState(false)
    const [notmessage, setnotmessage] = useState(false)
    const [notProfile1, setnotProfile1] = useState(false)
    const [notmessage1, setnotmessage1] = useState(false)
    const history = useHistory();
    let pattern = /^(\w+\s?)*\s*$/g;
    let pattern1 = /^(\w+\s?)*\s*$/g;
    let AddEmail = () => {
        if (NotificationMessage.includes("$device_id") && NotificationMessage.includes("$alert_message")) {
            const createObj = { NotificationName: NotificationName, NotificationMessage: NotificationMessage }
            setArray((old) => {
                return [...old, createObj]
            })

            setNotificationName("")
            setNotificationMessage("")

        }
        else if (NotificationName == "" && NotificationMessage == "") {
            setnotProfile(true)
            setnotmessage(true)

        }

        else if (NotificationName == "") {
            setnotProfile(true)
        }
        else if (!pattern.test(NotificationName)) {
            setnotProfile1(true)
          }
        else if (NotificationMessage == "") {
            setnotmessage(true)
        }
        // else if (!pattern1.test(NotificationMessage)) {
        //     setnotmessage1(true)
        //   }
        else if (!NotificationMessage.includes("$device_id")) {
            alert(" Notification Message should inculde `$device_id `")
        }
        else if (!NotificationMessage.includes("$alert_message")) {
            alert("Notification Message should inculde `$alert_message `  ")
        }


    }
    let DeleteEmail = (id) => {
        setArray((oldValues) => {
            return oldValues.filter((_, i) => i !== id);
        })
        setNotificationName("")
        setNotificationMessage("")
    }
    let EditEmail = (id) => {
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
        else if (!pattern.test(NotificationName)) {
            setnotProfile1(true)
          }
        else if (NotificationMessage == "") {
            setnotmessage(false)
        }
    }
    let UpdateEmail = () => {

        if (NotificationMessage.includes("$device_id") && NotificationMessage.includes("$alert_message")) {
            setArray(Array.map((item, index) => {
                if (item.NotificationName === findedValue) {
                    return { ...item, NotificationName: NotificationName, NotificationMessage: NotificationMessage }
                }
                return item;
            }))
            setNotificationName("")
            setNotificationMessage("")
            setupdate(false)
        }
        else if (NotificationName == "") {
            setnotProfile(true)
        }
        else if (!pattern.test(NotificationName)) {
            setnotProfile1(true)
          }
        else if (NotificationMessage == "") {
            setnotmessage(true)
        }
        // else if (!pattern1.test(NotificationMessage)) {
        //     setnotmessage1(true)
        //   }
        else if (!NotificationMessage.includes("$device_id")) {
            alert(" Notification Message should inculde `$device_id`")
        }
        else if (!NotificationMessage.includes("$alert_message")) {
            alert(" Notification Message should inculde `$alert_message`")
        }
    }
    function cancelEmail() {
        history.push('/admin/EmailNotification');
    }
    let SendEmail = () => {
        Array.forEach((oldvalues) => {
            let NotificationName = oldvalues.NotificationName;
            let NotificationMessage = oldvalues.NotificationMessage
            let createFinalObj = { created_by: "test", updated_by: "test", content_name: NotificationName, email_content: NotificationMessage }
            ApiService.EmailPost(createFinalObj).then((resp) => {
                if (resp.message) {
                    console.log(resp);
                    alert("content name already exists !")
                } else {
                    history.push('/admin/EmailNotification');
                }

            })

        })
    }
    let onName = (e) => {
        setnotProfile(false)
        setnotProfile1(false)
        setNotificationName(e.target.value)
    }
    let onMessage = (e) => {
        setnotmessage(false)
        setnotmessage1(false)
        setNotificationMessage(e.target.value)
    }
    return (
        <>
            <Header />
            <Container className="mt-5" fluid>
                <Row>
                    <Col className="order-xl-1" xl="12">
                        <Card className="bg-secondary shadow"  >
                            <CardBody>
                                <Form>
                                    <div className="pl-lg-4">
                                        <Row>
                                            <Col md="5">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-address"
                                                    >
                                                        Notification name
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        onChange={onName}
                                                        value={NotificationName}
                                                        id="input-address"
                                                        placeholder="Enter notification name"
                                                        type="text"
                                                    />
                                                    {notProfile ? <td style={{ color: "red" }}>Please enter notification name</td> : null}
                                                    {notProfile1 ? <td style={{ color: "red" }}>Please remove invaild characters</td> : null}
                                                </FormGroup>
                                            </Col>
                                            <Col md="5">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-address"
                                                    >
                                                        Email notify messages
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        onChange={onMessage}
                                                        value={NotificationMessage}
                                                        id="input-address"
                                                        placeholder="Enter email notify messages"
                                                        type="textarea"
                                                    />
                                                    {notmessage ? <td style={{ color: "red" }}>Please enter message</td> : null}
                                                    {notmessage1 ? <td style={{ color: "red" }}>Please remove invaild characters</td> : null}
                                                </FormGroup>
                                            </Col>
                                            <Col md="2" className="mt-4">
                                                {update ? <Button color="warning" className='btn btn-primary btn-sm' onClick={UpdateEmail}>Update</Button> : <Button color="warning" className="btn" size="sm" onClick={AddEmail}>Add</Button>}
                                            </Col>
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
                                                    <button className='btn btn-primary btn-sm' onClick={() => EditEmail(index)}>Edit</button>
                                                </div>
                                            </div>
                                            <div class="col-md-1 mb-4">
                                                <div class="form-outline datepicker">
                                                    <button className='btn btn-danger btn-sm' onClick={() => DeleteEmail(index)}>Delete</button>
                                                </div>
                                            </div>
                                        </div>
                                    })
                                }
                                <Row className='ml-3 mt-5'>
                                    <Col>
                                        {
                                            Array.length > 0 ? <>
                                                <Button color="success" className="btn " size="sm" onClick={SendEmail}>Save</Button>
                                                <Button color="danger" size="sm" onClick={cancelEmail}>Cancel</Button>  </>
                                                : <Button color="danger" size="sm" onClick={cancelEmail}>Cancel</Button>
                                        }
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
