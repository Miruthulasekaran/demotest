import {
    Button, Card, CardBody, FormGroup, Form, Input, Container, Row, Col,
} from "reactstrap";
import Header from 'components/Headers/Header';
import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import ApiService from "views/examples/Service/ApiService";
export default function EmailNotificationEdit() {
    const history = useHistory();
    const [NotificationName, setNotificationName] = useState("")
    const [NotificationMessage, setNotificationMessage] = useState("")
    const [NotificationEmail, setNotificationEmail] = useState([])
    const [idds, setId] = useState()
    const [finalArr, setFinalArr] = useState()
    const [notProfile, setnotProfile] = useState(false)
    const [notmessage, setnotmessage] = useState(false)
    const params = useParams();
    useEffect(() => {
        var url = window.location.pathname
        var idds = url.substring(url.lastIndexOf('/') + 1);
        setId(idds)
        console.log("last one", idds)
        ApiService.EditemailGet(params.id).then((resp)=>{
            setNotificationEmail([resp]);
            setNotificationName(resp.content_name)
            setNotificationMessage(resp.email_content)
        })
      
    }, [])


    function CancelEmail() {
        history.push('/admin/EmailNotification');
    }
    useEffect(() => {
        setFinalArr({ created_by: "test", updated_by: "test", content_name: NotificationName, email_content: NotificationMessage })
    }, [NotificationName, NotificationMessage]);
    let backendData = () => {
        console.log("finalArr", finalArr);

        if (NotificationMessage.includes("$device_id") && NotificationMessage.includes("$alert_message")) {
            console.log("finalArr", finalArr);
            ApiService.EditEmailPatch(params.id,finalArr).then((resp)=>{
                if (resp.message) {
                    console.log(resp);
                    alert("content name already exists !")
                } else {
                    history.push('/admin/EmailNotification');
                }
              
            })
           
         

        }
        else if (NotificationName == "") {
            setnotProfile(true)
        }
        else if (NotificationMessage == "") {
            setnotmessage(true)
        }
        else if (!NotificationMessage.includes("$device_id")) {
            alert("write $device_id ")
        }
        else if (!NotificationMessage.includes("$alert_message")) {
            alert("write $alert_message ")
        }
    }
    let onName = (e) => {
        setnotProfile(false)
        setNotificationName(e.target.value)
    }
    let onMessage = (e) => {
        setnotmessage(false)
        setNotificationMessage(e.target.value)
    }
    return (
        <>
            <Header />
            <Container className="mt-5" fluid>
                <Row>
                    <Col className="order-xl-1" xl="12">
                        <Card className="bg-secondary shadow">
                            <CardBody>
                                <Form>
                                    <div className="pl-lg-4">
                                        <Row>
                                            <Col md="6">
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
                                                    {notProfile ? <p style={{ color: "red" }}>Please Enter profile name</p> : null}
                                                </FormGroup>
                                            </Col>
                                            <Col md="6">
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
                                                        type="text"
                                                    />
                                                    {notmessage ? <p style={{ color: "red" }}>Please enter profile name</p> : null}
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row className='ml-3'>
                                            <Col>
                                                <Button color="success" className="btn " size="sm" onClick={backendData}>Save</Button>
                                                <Button color="danger" size="sm" onClick={CancelEmail}>Cancel</Button>
                                            </Col>
                                        </Row>
                                    </div>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
