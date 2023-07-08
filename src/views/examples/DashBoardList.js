
import Header from "components/Headers/Header.js";
import OrganizationProfileEdit from "./OrganizationProfileEdit";
import { useHistory } from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react'
import {
    Card, CardHeader, Container, Row, Col, Button, Table, Form, FormGroup, InputGroupAddon, InputGroupText, Input, InputGroup,
} from "reactstrap";
import { Link } from 'react-router-dom';
import Pagination from 'rc-pagination';
import { FadeLoader } from "react-spinners";
import ApiService from "./Service/ApiService";
export default function DashBoardList() {
    const [device, setdevice] = useState([])
    const [device1, setdevice1] = useState([])
    const history = useHistory();
    useEffect(() => {
        fetch("http://192.168.0.113:8090/api/v1/device").then((result) => {
            result.json().then((resp) => {
                console.log("resp", resp);
                setdevice(resp)
                setdevice1(resp)
            })
        })
    }, [])
    function deviceMacId() {
        history.push("/admin/DeviceDashboard")
    }
    return (
        <>
            <Header />
            <Container className="mt-4" fluid>
                <Row>
                </Row>
                <Row className="mt-4">
                    <Col className="mb-5 mb-xl-0" xl="12">
                        <Card className="shadow table-scroll">

                            <Table className="align-items-center table-flush" responsive>
                                <thead className="thead-light thead-primary table-sorting">
                                    <tr>
                                        <th scope="col" className="text-justify text-dark col-1"><b>S.No</b></th>
                                        <th scope="col" className="text-justify text-dark  col-3" ><b>Dashboard Name</b></th>
                                        <th scope="col" className="text-justify text-dark col-4" ><b>Category Name</b></th>
                                        {/* <th scope="col" className="text-justify text-dark"><b>Organization Name</b></th> */}
                                        <th scope="col" className="text-justify text-dark col-4"><b>Action</b></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {device.length > 0 ? device.map((data, index) => {
                                        return <tr key={index}>
                                            <td className="text-justify text-dark col-1">{index + 1}</td>
                                            <td className="text-justify text-dark  col-3">ACD Dashboard</td>
                                            <td className="text-justify text-dark col-4" >
                                                {data.device_category.map((item, index) => {
                                                    return <>
                                                        <li className="table-borderless  text-justify text-dark" style={{ listStyle: "none" }} >{item.category_name}</li>
                                                    </>
                                                })
                                                }
                                            </td>
                                            {/* <td>
                                                {data.organization_id}
                                            </td> */}
                                            <td  className="text-justify text-dark col-4">   <i class="fa fa-eye-slash" aria-hidden="true" onClick={deviceMacId}></i></td>
                                        </tr>
                                    }) :
                                        < div className="row">
                                            <div className="col-12" style={{ textAlign: "center" }}>
                                                <td className="text-dark"><b>No Data Found</b></td>
                                            </div>
                                        </div>
                                    }
                                </tbody>
                            </Table>
                        </Card>

                    </Col>
                </Row>
            </Container>
        </>
    )
}




