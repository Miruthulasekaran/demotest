import Header from 'components/Headers/Header';
import React, { useState, useEffect } from 'react'
import {
    Card, CardBody, FormGroup, Form, Input, Container, Row, Col, Button,
} from "reactstrap";
import { useHistory, useParams } from 'react-router-dom';
import ApiService from './Service/ApiService';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function UserProfileEdit() {
    const [profile, setProfile] = useState("")
    const [parameter, setParameter] = useState("")
    const [Paramvalue, setParamValue] = useState([])
    const [drpDwn, setDrpDwn] = useState("")
    const [id, setid] = useState(0);
    const [createObject, setCreateObject] = useState([])
    const [OnChangeBtn, setOnBtnChange] = useState("1")
    const [TempId, setTempId] = useState(null)
    const [errorProfile, seterrorProfile] = useState(false)
    const [errorparam, seterrorparam] = useState(false)
    const [errorProfile1, seterrorProfile1] = useState(false)
    const [errorparam1, seterrorparam1] = useState(false)
    const [errordataType, seterrordataType] = useState(false)
    const [Valuepresent, setValuepresent] = useState(false)
    const [finalArr, setFinalArr] = useState()
    const [Arr, setArr] = useState([])
    const [update, setupdate] = useState(false)
    const [idds, setId] = useState()
    const history = useHistory();
    const [organizationprofileedit, setorganizationprofileedit] = useState([])
    const params = useParams();
    let pattern = /^(\w+\s?)*\s*$/g;
    let pattern1 = /^(\w+\s?)*\s*$/g;


    useEffect(() => {
        var url = window.location.pathname
        var idds = url.substring(url.lastIndexOf('/') + 1);
        setId(idds)
        ApiService.UserProfileEditGet(params.id).then((resp) => {
            setorganizationprofileedit(resp);
            console.log("response", resp);
            setProfile(resp.user_profile_name)
            console.log("agzfgZ", resp.custom_data)
            setArr(resp.custom_data)
        })

    }, [])

    useEffect(() => {

        const unloadCallback = (event) => {
            event.preventDefault();
            event.returnValue = "";
            return "";
        };
        window.addEventListener("beforeunload", unloadCallback);
        return () => window.removeEventListener("beforeunload", unloadCallback);
    }, []);
    let OnProfileChange = (e) => {
        seterrorProfile(false)
        seterrorProfile1(false)
        setProfile(e.target.value)
    }

    let OnParameter = (e) => {
        seterrorparam(false)
        seterrorparam1(false)
        setParameter(e.target.value);
        // console.log("this is parameter: " + parameter)
    }
    let OnDataType = (e) => {
        seterrordataType(false)
        setDrpDwn(e.target.value)
    }
    let OnEdit = (e) => {
        let editValue = Arr.find((value) => value.parameter === e);
        if (editValue !== undefined) {
            setTempId(e)
        }
        setParameter(editValue.parameter)
        setDrpDwn(editValue.data_type)
        // console.log("this is edit item", editValue);
        // console.log("this is the id", e);
        setOnBtnChange(2)
        // console.log("on update", OnChangeBtn)
        setupdate(true)
        seterrorProfile(false)
        seterrorparam(false)
        seterrordataType(false)
    }
    let onUpdate = () => {
        if (profile.trim() == "") {
            seterrorProfile(true)
        }
        else if (!/^(\w+\s?)*\s*$/g.test(profile)) {
            seterrorProfile1(true)
        }
        else if (parameter.trim() == "") {
            seterrorparam(true)
        }
        else if (!/^(\w+\s?)*\s*$/g.test(parameter)) {
            seterrorparam1(true)
        }
        else {
            seterrorparam(false)
            setArr(Arr.map((element) => {

                if (element.parameter === TempId) {
                    return { ...element, parameter: parameter, data_type: drpDwn }
                }
                return element;
            }))
            toast('Profile updated successfully ', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                // theme: "light",
            })
            setOnBtnChange(1)
            setParameter("");
            setDrpDwn("")
            setupdate(true)
        }
    }
    useEffect(() => {


        setFinalArr({ created_by: "test", custom_data: Arr, user_profile_name: profile, updated_by: "TestUpdate" })
        // console.log("This is the useeffect data ", Arr)

    }, [Arr, profile]);

    // console.log("This is the normal data ", Paramvalue)
    let backendData = () => {
        if (profile.trim() == "") {
            seterrorProfile(true)
        }
        else if (!/^(\w+\s?)*\s*$/g.test(profile)) {
            seterrorProfile1(true)
        }
        else {
            ApiService.UserProfilePatch(params.id, finalArr).then((resp) => {
                if (resp.message) {
                    // alert("user profile name already exists !")
                    toast.error('Profile name already exists ', {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        // theme: "light",
                    })
                    console.log("resp", resp);
                }
                else {
                    toast('Profile edited successfully ', {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        // theme: "light",
                    })
                    console.log("resp", resp);
                    history.push('/admin/icons');
                }

            })
        }


    }
    let Ondelete = (e) => {
        setArr((oldValues) => {
            return oldValues.filter((_, i) => i !== e);
        });
        setOnBtnChange(true)
        setParameter("");
        setDrpDwn("")
        setupdate(false)
    }
    let OnCreateObj = () => {


        // e.preventDefault();
        if (profile.trim() == "" && parameter.trim() == "" && drpDwn == "") {
            seterrorProfile(true)
            seterrorparam(true)
            seterrordataType(true)
        }
        else if (profile.trim() == "") {
            seterrorProfile(false)
        }
        else if (!/^(\w+\s?)*\s*$/g.test(profile)) {
            seterrorProfile1(true)
        }
        else if (parameter.trim() == "") {
            seterrorparam(true)
        }
        else if (!/^(\w+\s?)*\s*$/g.test(parameter)) {
            seterrorparam1(true)
        }
        else if (drpDwn == "") {

            seterrordataType(true)
        }
        else if (Arr.find((value) => value.parameter == parameter) != undefined) {
            console.log(Arr.find((value) => value.parameter == parameter) != undefined);
            setValuepresent(true)
        }
        else {
            setValuepresent(false)
            setid(id => id + 1);
            let createObj = { parameter: parameter, data_type: drpDwn }
            setArr([...Arr, createObj])
            // console.log("Before", createObject)
            setParameter("");
            setDrpDwn("")
        }
    }
   
   
    let oncancelBtn = () => {
        setOnBtnChange(1)
        setParameter("")
        setDrpDwn("")
        setupdate(false)
    }
    function cancel() {
        history.push('/admin/icons');
    }

  
    return (
        <>
            <>            <Header />
                <Container className="mt-5" fluid>
                    <Row>
                        <Col className="order-xl-1" xl="12">
                            <Card className="bg-secondary shadow">
                                <CardBody>
                                    <Form>
                                        <div className="pl-lg-4">
                                            <Row>
                                                <Col md="12">
                                                    <FormGroup>
                                                        <label
                                                            className="form-control-label"
                                                            htmlFor="input-address"
                                                        >
                                                            Profile name
                                                        </label>
                                                        <Input
                                                            className="form-control-alternative"

                                                            id="input-address"
                                                            placeholder="Enter profile name"
                                                            type="text"
                                                            value={profile}
                                                            onChange={OnProfileChange}
                                                        />
                                                        {errorProfile ? <td style={{ color: "red" }}>Please enter  profile name</td> : null}
                                                        {errorProfile1 ? <td style={{ color: "red" }}>Please remove invaild characters</td> : null}
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            {console.log("thsisiarr", Arr)}
                                            <Row>
                                                <Col lg="5">
                                                    <FormGroup>
                                                        <label
                                                            className="form-control-label"
                                                            htmlFor="input-city"
                                                        >
                                                            Custom parameter
                                                        </label>
                                                        <Input
                                                            className="form-control-alternative"

                                                            id="input-city"
                                                            placeholder="Enter custom parameter"
                                                            type="text"
                                                            value={parameter} onChange={OnParameter}
                                                        />
                                                        {errorparam ? <td style={{ color: "red" }}>Please enter parameter</td> : null}
                                                        {Valuepresent ? <td style={{ color: "red" }}>Value already present</td> : null}
                                                        {errorparam1 ? <td style={{ color: "red" }}>Please remove invaild characters</td> : null}
                                                    </FormGroup>

                                                </Col>
                                                <Col lg="5">
                                                    <FormGroup>
                                                        <label
                                                            className="form-control-label"
                                                            htmlFor="input-country"
                                                        >
                                                            Add data type
                                                        </label>
                                                        <Input type="select" className='text-dark' onChange={OnDataType} value={drpDwn} name="select" id="exampleSelect">
                                                            <option value="" selected disabled>Select data type</option>
                                                            <option value="number" className='text-dark'>number</option>
                                                            <option value="email" className='text-dark'>email</option>
                                                            <option value="text" className='text-dark'>text</option>
                                                        </Input>
                                                        {errordataType ? <td style={{ color: "red" }}>Please select  data type</td> : null}
                                                    </FormGroup>
                                                </Col>
                                                <Col lg="2" >
                                                    <FormGroup >
                                                        <div className='text-center mr-5' style={{ marginTop: "35px" }}>
                                                            {update ? <Button color="warning" className='btn btn-primary btn-sm' onClick={onUpdate}>Update</Button> : <Button color="primary" className="btn" size="sm" onClick={OnCreateObj}>Add</Button>}

                                                        </div>
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Form>
                                    <div >
                                        <div >
                                            <FormGroup>
                                                {
                                                    Arr.map((item, index1) => {
                                                        return <div key={index1} class="row ml-3">
                                                            <div class="col-md-2 mb-4">
                                                                <div class="form-outline datepicker">
                                                                    <label for="exampleDatepicker1" class="form-label text-dark">{index1 + 1}</label>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-4 mb-4">
                                                                <div class="">
                                                                    <label for="exampleDatepicker1" class="form-label text-dark">{item.parameter}</label>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-3 mb-4">
                                                                <div class="">
                                                                    <label for="exampleDatepicker1" class="form-label text-dark">{item.data_type}</label>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-1 mb-4">
                                                                <div class="f">
                                                                    <button className='btn btn-primary btn-sm ml-3' onClick={(e) => OnEdit(item.parameter)}>Edit</button>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-1 mb-4">
                                                                <div class="form-outline datepicker">
                                                                    <button className='btn btn-danger btn-sm' onClick={(e) => Ondelete(index1)}>Delete</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    })
                                                }
                                            </FormGroup>
                                        </div>
                                    </div>
                                    <div className="row mb-4 pb-2 pb-md-0 mb-md-5 ml-3">
                                        <div className="col-md-12">
                                            {OnChangeBtn == 1 ? <>{Arr.length > 0 ? <> <button type="submit" className="btn btn-success btn-sm mb-2" onClick={backendData}>Submit</button>
                                                <button type="submit" className="btn  btn-danger btn-sm mb-2" onClick={cancel}>Cancel</button> </> : <button type="submit" className="btn  btn-danger btn-sm mb-2" onClick={cancel}>Cancel</button>}</>
                                                : OnChangeBtn == 2 ? <>
                                                    <button type="submit" className="btn btn-danger btn-sm mb-2" onClick={oncancelBtn}>Cancel</button> </> : null}
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </>
        </>
    )
}
