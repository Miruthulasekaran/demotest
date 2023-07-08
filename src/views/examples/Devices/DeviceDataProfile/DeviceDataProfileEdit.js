

import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    Container,
    Row,
    Col,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    Modal, ModalHeader, ModalBody, ModalFooter, Label
} from "reactstrap";
import Header from 'components/Headers/Header';
import { useHistory, useParams } from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react'
import ApiService from "views/examples/Service/ApiService";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import ApiService from "views/examples/Service/ApiService";
export default function DeviceDataProfileEdit() {
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
    const [errordataType, seterrordataType] = useState(false)
    const [Valuepresent, setValuepresent] = useState(false)
    const [finalArr, setFinalArr] = useState()
    const [Arr, setArr] = useState([])
    const [idds, setId] = useState()
    const [edit, setEdit] = useState([])
    const [edit1, setEdit1] = useState()
    const [OnIcons, setOnIcons] = useState();
    const [OnDataTypevalue, setOnDataTypevalue] = useState("");
    const [OnUnits, setOnUnits] = useState();
    const [OnDeviceDataProfile, setOnDeviceDataProfile] = useState();
    const [OnProtocol, setOnProtocol] = useState();
    const [Ondataformat, setOndataformat] = useState();
    const [Onprofilename, setOnprofilename] = useState();
    const [AddIcons, setAddIcons] = useState("");
    const [idtest, setidtest] = useState(0)
    const [DataProfile, setDataProfile] = useState("");
    const [DataType, setDataType] = useState("");
    const [AllValues, setAllValues] = useState([]);
    const [iconname, seticonname] = useState("");
    const [iconimg, seticonimg] = useState("")
    const [OncreateArr, setCreateArr] = useState([]);
    const [updateimg, setupdateimg] = useState(1)
    const [TempModel, setTempModel] = useState(1)
    const [IconName1, setIconName1] = useState("");
    const [modal, setmodal] = useState(false)
    // const[resp1,setresp]=useState()
    const history = useHistory();
    const [deviceprofileedit, setdeviceprofileedit] = useState([])
    const [iconnameval, seticonnameval] = useState(false)
    const [iconimgval, seticonimgval] = useState(false)

    const [pronameval, setpronameval] = useState(false)
    const [dataformat, setdataformat] = useState(false)
    const [DataProfileFieldsval, setDataProfileFieldsval] = useState(false)
    const [unitsval, setunitsval] = useState(false)
    const [datatypeval, setdatatypeval] = useState(false)
    const [iconval, seticonval] = useState(false)
    const [update, setupdate] = useState(false)
    const [pronameval1, setpronameval1] = useState(false)
    const [DataProfileFieldsval1, setDataProfileFieldsval1] = useState(false)
    let pattern = /^(\w+\s?)*\s*$/g;
    let pattern1 = /^(\w+\s?)*\s*$/g;
    const params = useParams();
    useEffect(() => {


        var url = window.location.pathname
        var idds = url.substring(url.lastIndexOf('/') + 1);
        setId(idds)
        // console.log("last one", idds)

        ApiService.DeviceDataProfileGet(params.id).then((resp) => {
            setEdit(resp.custom_data);
            // console.log("resposeest", resp.custom_data.data_type)
            setCreateArr(resp.icon_image)
            setOnDataTypevalue(resp.data_type)
            setOndataformat(resp.data_format)
            setOnprofilename(resp.data_profile_name)
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

    const [icons, seticons] = useState()

    let editIconName = (e) => {

        // e.preventDefault();
        let editValue = OncreateArr.find((value) => value.IconName === e.target.value);
        // edit
        // console.log("editValue", editValue)
        seticonval(false)
        setAddIcons(editValue.IconImage);
        setIconName1(editValue.IconName);
        // console.log("editValue.IconImage", editValue.IconName)
        // setplaceholdervalue(editValue.IconName);
        // setAddIcons1(editValue.IconName)

    }

    let CancelAll = () => {
        setOnDeviceDataProfile("")
        setOnUnits("")
        setOnDataTypevalue("")
        setIconName1("")

    }
    let oncancelBtn = () => {
        setOnBtnChange(1)
        setOnDeviceDataProfile("")
        setOnUnits("")
        setOnDataTypevalue("")
        setIconName1("")
    }
    let SetArray = (e) => {
        if (OnDeviceDataProfile.trim() == "") {
            // setpronameval(true)
            // setdataformat(true)
            setDataProfileFieldsval(true)
        }

        else if (Onprofilename.trim() == "") {

            setpronameval(true)
        }
        else if (!/^(\w+\s?)*\s*$/g.test(Onprofilename)) {
            setpronameval1(true)
        }

        else if (Ondataformat == "") {
            setdataformat(true)
        }
        else if (OnDeviceDataProfile.trim() == "") {
            setDataProfileFieldsval(true)
        }
        else if(OnDataTypevalue == ""){
            setdatatypeval(true)
        }
        else if (!/^(\w+\s?)*\s*$/g.test(OnDeviceDataProfile)) {
            setDataProfileFieldsval1(true)
        }
        else {
            setidtest(idtest + 1)
            e.preventDefault();
            let CreateObj = { parameter: OnDeviceDataProfile,data_type: OnDataTypevalue}

            setEdit((values) => {
                return [...values, CreateObj]
            })
            // console.log("array", edit)
            setOnDeviceDataProfile("")
            setOnUnits("")
            setOnDataTypevalue("")
            setIconName1("")
        }
    }


    let Ondelete = (e) => {
        setEdit((edit) => {
            return edit.filter((_, i) => i !== e);
        });
        setOnDeviceDataProfile("")
        setOnUnits("")
        setOnDataTypevalue("")
        setIconName1("")
        setOnBtnChange(true)
        setupdate(false)
        setpronameval1(false)
        setDataProfileFieldsval1(false)
    }

    let OnEdit = (e) => {
        // e.preventDefault();
        let editValue = edit.find((value) => value.parameter === e);

        if (editValue !== undefined) {
            setTempId(e)
        }
        console.log("editValue", editValue)
        setOnDeviceDataProfile(editValue.parameter)
        // setOnUnits(editValue.Units)
        setOnDataTypevalue(editValue.data_type)
        // setOndataformat(editValue.data_type)
        // setOnIcons(editValue.IconName) 
        //  AddIcons
        // setIconName1(editValue.IconName)
        setOnBtnChange(2)
        setupdate(true)
        setpronameval(false)
        setdataformat(false)
        setDataProfileFieldsval(false)
        setunitsval(false)
        setdatatypeval(false)
        seticonval(false)
    }

    let backendData = () => {
        console.log("finbalccc", finalArr)
        if (Onprofilename.trim() == "") {
            setpronameval(true)
        }
        else if (!/^(\w+\s?)*\s*$/g.test(Onprofilename)) {
            setpronameval1(true)
        }
        
        else {


            ApiService.DeviceDataProfilePatch(params.id, edit1).then((resp) => {
                if (resp.message) {
                    toast.error('Data profile name already exists ', {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        });
                    // alert("data profile name already exists !")
                } else {
                    toast('Data profile edited successfully!', {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        });
                    history.push('/admin/DeviceDataProfile');
                }

            })


        }
    }
    useEffect(() => {
        // setEdit1({DataProfileFields: OnDeviceDataProfile, Units: OnUnits, DataType: OnDataTypevalue, AddIcons: AddIcons, IconName: IconName1  })
        setEdit1({ created_by: "test", custom_data: edit, data_profile_name: Onprofilename, data_format: Ondataformat, updated_by: "TestUpdate", icon_image: OncreateArr })
        // console.log("This is the useeffect data ", Arr)

    }, [edit, OncreateArr, Onprofilename, Ondataformat]);


    let toggle = () => {

        seticonimg("")
        seticonname("")
        setmodal(!modal);
    }


    useEffect(() => {
        const unloadCallback = (event) => {
            event.preventDefault();
            event.returnValue = "";
            return "";
        };

        window.addEventListener("beforeunload", unloadCallback);
        return () => window.removeEventListener("beforeunload", unloadCallback);
    }, []);


    let EditModalFn = (e) => {
        console.log('EditVsfrsdfalue', e)
        let editValue = OncreateArr.find((value, i) => value.IconName === e);

        seticonname(editValue.IconName)
        setTempModel(editValue.AddIcons)
        setIconName1(editValue.IconName)
        setupdateimg(2)
        seticonimgval(false)
        seticonnameval(false)
    }
    let DeleteModalFn = (e) => {
        setCreateArr((OncreateArr) => {

            return OncreateArr.filter((_, i) => {
                // { console.log("Delete", i) }
                return i !== e
            });
        });
        // console.log('Delete', e);
    }

    let UpdateArr1 = () => {
        setupdateimg(1)
        seticonname("")
        seticonimg("")
    }
    let UpdateArr = () => {
        if (iconimg == "" && iconname == "") {
            seticonnameval(true)
            seticonimgval(true)
        }
        else if (iconname == "") {
            seticonnameval(true)
        }
        // else if (iconimg == "") {
        //     seticonimgval(true)
        // }
        else {

            setCreateArr(OncreateArr.map((element) => {
                if (element.IconName === TempModel) {
                    return { ...element, IconName: iconname, IconImage: iconimg }
                }
                return element;
            }))
            setupdateimg(1)
            seticonname("")
            seticonimg("")
        }
    }
    let Oniconname = (e) => {
        seticonname(e.target.value)
        seticonnameval(false)
    }
    let Oniconimage = (e) => {
        // console.log("iconimage", e.target.value)
        // seticonimg(e.target.file)

        // seticonimg(URL.createObjectURL(e.target.files[0]))
        seticonimgval(false)
        e.preventDefault();
        // console.log("iconimage", e.target.value)

        // console.log(e.target.files)
        const data = new FileReader()

        data.addEventListener('load', () => {
            seticonimg(data.result)
        })
        data.readAsDataURL(e.target.files[0])
        seticonimgval(false)
    };
    let createArr = () => {
        if (iconimg == "" && iconname == "") {
            seticonnameval(true)
            seticonimgval(true)
        }
        else if (iconname == "") {
            seticonnameval(true)
        }
        else if (iconimg == "") {
            seticonimgval(true)
        }
        else {
            seticonname("")
            let CreateObjs = { IconName: iconname, IconImage: iconimg }

            setCreateArr([...OncreateArr, CreateObjs])
            // console.log(OncreateArr)
        }
    }
    let onUpdate = () => {
        if (Onprofilename.trim() == "") {

            setpronameval(true)
        }
        else if (!/^(\w+\s?)*\s*$/g.test(Onprofilename)) {
            setpronameval1(true)
        }
        else if (Ondataformat == "") {
            setdataformat(true)
        }
        else if (OnDeviceDataProfile.trim() == "") {
            setDataProfileFieldsval(true)
        }
        else if (!/^(\w+\s?)*\s*$/g.test(OnDeviceDataProfile)) {
            setDataProfileFieldsval1(true)
        }
        else if(OnDataTypevalue == ""){
            setdatatypeval(true)
        }

        else {
            setEdit(edit.map((element) => {
                // console.log("mnmndb", edit)
                console.log("element", element);
                if (element.parameter === TempId) {
                    // console.log("mnmndb", element)
                    return { ...element, parameter: OnDeviceDataProfile, Units: OnUnits, data_type: OnDataTypevalue }

                }
                return element;

            }))
            toast('profile updated successfully!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            setOnBtnChange(1)
            setOnDeviceDataProfile("")
            setOnUnits("")
            setOnDataTypevalue("")
            setIconName1("")
            setupdate(false)
        }

    }
    function cancel() {
        history.push('/admin/DeviceDataProfile');
    }
    function oncancel() {
        setOnDeviceDataProfile("")
        setOnUnits("")
        setOnDataTypevalue("")
        setIconName1("")
        setpronameval(false)
        setdataformat(false)
        setpronameval1(false)
        setDataProfileFieldsval(false)
        setDataProfileFieldsval1(false)
        setunitsval(false)
        setdatatypeval(false)
        seticonval(false)
        setupdate(false)
    }
    return (
        <>
            {/* <div>
                <Modal size="lg" isOpen={modal} toggle={toggle} >
                    <ModalHeader toggle={toggle}>Add Icons</ModalHeader>
                    <ModalBody>
                        <div className="row">
                            <div className="col-md-4">
                                {updateimg == 1 ? <Label for="exampleSelect">Icon name</Label> : updateimg == 2 ? <Label for="exampleSelect">Update Icon name</Label> : null}
                                <input type="text" onChange={Oniconname} value={iconname} className="form-control" placeholder='Enter the Icon name' id="Form" />
                                {iconnameval ? <p style={{ color: "red" }}>* Please Select the icon name</p> : null}
                            </div>
                            <div className="col-md-5">
                                {updateimg == 1 ? <Label for="exampleSelect">Select Icon</Label> : updateimg == 2 ? <Label for="exampleSelect">Update Icon</Label> : null}
                                {updateimg == 1 ?
                                    <input onChange={Oniconimage} type="file" className="form-control" placeholder='Select the Icon' id="Form1" /> :
                                    updateimg == 2 ? <input onChange={Oniconimage} type="file" className="form-control" placeholder='Update the Icon' id="Form1" /> : null
                                }
                                {iconimgval ? <p style={{ color: "red" }}>* Please Select the image</p> : null}
                            </div>
                            <div className="col-md-3 mt-4">
                                {updateimg == 1 ? <>
                                    <div className='text-center mr-5' style={{ marginTop: "10px" }}>
                                        <Button color="primary" onClick={createArr} className="btn-sm ">
                                            Add
                                        </Button></div></> : updateimg == 2 ? <> <Button color="warning" size="sm" onClick={UpdateArr} className="">
                                            Update
                                        </Button>  <Button color="danger" size="sm" onClick={UpdateArr1} className="">
                                                cancel
                                            </Button> </> : null
                                }
                            </div>
                       
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-12 mt-3">
                                {OncreateArr.map((item, index) => {
                                    return <div className="row" key={index}>
                                        <div className="col-md-1">
                                            <p className="text-dark"> <b>{index + 1}</b></p>
                                        </div>
                                        <div className="col-md-4">
                                            <p className="text-dark"> <b>{item.IconName}</b></p>
                                        </div>
                                        <div className="col-md-3">
                                            <img style={{ height: "2rem" }} src={item.IconImage} />
                                        </div>
                                        <div className="col-md-2">
                                            <button className='btn btn-primary btn-sm ml-5' onClick={() => EditModalFn(item.IconName)} >Edit</button>
                                        </div>
                                        <div className="col-md-2">
                                            <button className='btn btn-danger btn-sm ml--4' onClick={() => DeleteModalFn(index)}>Delete</button>
                                        </div>
                                    </div>
                                })
                                }
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="success" className="btn-sm" onClick={toggle}>save</Button>{' '}
                        <Button color="danger" className="btn-sm" onClick={toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div> */}
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
                                                        Profile name
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        value={Onprofilename}
                                                        onChange={e => { setOnprofilename(e.target.value); setpronameval(false); setpronameval1(false) }}
                                                        id="input-address"
                                                        placeholder="Enter profile name"
                                                        type="text"

                                                    />
                                                    {pronameval ? <td style={{ color: "red" }}>Please enter profile name</td> : null}
                                                    {pronameval1 ? <td style={{ color: "red" }}>Please remove invaild characters</td> : null}
                                                </FormGroup>
                                            </Col>
                                            <Col md="6">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-country"
                                                    >
                                                        Data format
                                                    </label>
                                                    <Input value={Ondataformat} onChange={e => { setOndataformat(e.target.value); setdataformat(false) }} type="select" className='text-dark' name="select" id="exampleSelect">
                                                        <option value="" selected disabled>Select data format</option>
                                                        <option value="JSON" className='text-dark'>JSON</option>
                                                        <option value="HEX" className='text-dark'>HEX</option>
                                                        <option value="CSV" className='text-dark'>CSV</option>

                                                    </Input>
                                                    {dataformat ? <td style={{ color: "red" }}>Please enter data format</td> : null}
                                                </FormGroup>
                                            </Col>
                                            {/* <Col md="2">
                                                <Button color="primary" size="sm" className="mt-5" onClick={toggle}>Add Icons</Button>
                                            </Col> */}
                                            {/* <Col md="2" >
                                                <FormGroup >
                                                    <div className='text-center mr-5' style={{ marginTop: "15px" }}>
                                                        <Button color="primary" className='mt-4' size="sm" onClick={toggle}>Add Icons </Button>
                                                    </div>
                                                </FormGroup>
                                            </Col> */}
                                        </Row>
                                        <Row className='mt-5'>
                                            <Col lg="6">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-city"
                                                    >
                                                        Custom parameter
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        value={OnDeviceDataProfile}
                                                        // onChange={()=>{setOnDeviceDataProfile(e.target.value)}}
                                                        onChange={e => { setOnDeviceDataProfile(e.target.value); setDataProfileFieldsval(false); setDataProfileFieldsval1(false) }}
                                                        id="input-city"
                                                        placeholder="Enter custom parameter"
                                                        type="text"
                                                    />
                                                    {DataProfileFieldsval1 ? <td style={{ color: "red" }}>Please remove invaild characters</td> : null}
                                                    {DataProfileFieldsval ? <td style={{ color: "red" }}>Please enter Custom parameter</td> : null}
                                                </FormGroup>

                                            </Col>
                                            {/* <Col lg="6">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-country"
                                                    >
                                                        Add Units
                                                    </label>
                                                    <Input type="text" placeholder="Please add Units" onChange={e => { setOnUnits(e.target.value); setunitsval(false) }} value={OnUnits} className='text-dark' name="select" id="exampleSelect">
                                                      
                                                    </Input>
                                                    {unitsval ? <p style={{ color: "red" }}>* Please Enter the Add Units</p> : null}
                                                </FormGroup>
                                            </Col> */}
                                              <Col lg="6">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-country"
                                                    >
                                                        Add Data Types
                                                    </label>
                                                    <Input type="select" onChange={e => { setOnDataTypevalue(e.target.value); setdatatypeval(false) }} className='text-dark' value={OnDataTypevalue} name="select" id="exampleSelect">
                                                        <option value="" selected disabled>Select Data Type</option>
                                                        <option value="number" className='text-dark'>number</option>
                                                        <option value="text" className='text-dark'>text</option>
                                                        {/* <option value="email" className='text-dark'>email</option> */}
                                                    </Input>
                                                    {datatypeval ? <td style={{ color: "red" }}>Please select data types</td> : null}
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row className='mt-5'>
                                          
                                            {/* <Col lg="6">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-country"
                                                    >
                                                        Add Icons
                                                    </label>

                                                    <Input type="select" value={IconName1} onChange={editIconName} className='text-dark' name="select" id="exampleSelect">
                                                        <option value="" selected disabled>Select Icons</option>
                                                        {OncreateArr.map((item, index) => {
                                                            // console.log("map item",item)
                                                            return <option key={index} value={item.IconName}>{item.IconName} </option>
                                                        })
                                                        }
                                                    </Input>
                                                    {iconval ? <p style={{ color: "red" }}>* Please Enter the  Icons</p> : null}

                                                </FormGroup>
                                            </Col> */}
                                        </Row>
                                    </div>
                                </Form>
                                <div >
                                    <Row className='ml-3 mb-5'>
                                        <Col>
                                            {update ? <><Button color="warning" className='btn btn-primary btn-sm' onClick={onUpdate}>Update</Button> <Button color="warning" className='btn btn-danger btn-sm' onClick={oncancel}>cancel</Button></> : <Button color="primary" className="btn" size="sm" onClick={SetArray}>Add</Button>}

                                        </Col>

                                    </Row>

                                </div>
                                {
                                    edit.map((item, index1) => {
                                        return <div key={index1} class="row">
                                            <div class="col-md-1 mb-4">
                                                <div class="form-outline datepicker">
                                                    <label for="exampleDatepicker1" class="form-label text-dark">{index1 + 1}</label>
                                                </div>
                                            </div>
                                            <div class="col-md-3 mb-4">
                                                <div class="form-outline datepicker">
                                                    <label for="exampleDatepicker1" class="form-label text-dark">{item.parameter}</label>
                                                </div>
                                            </div>

                                            <div class="col-md-2 mb-4">
                                                    <div class="form-outline datepicker">

                                                        <label for="exampleDatepicker1" class="form-label text-dark">{item.data_type}</label>
                                                    </div>


                                                </div>



                                            <div class="col-md-1 mb-4">
                                                <div class="form-outline datepicker">
                                                    {console.log("sdgfdzggf", item.parameter)}
                                                    {/* let editValue = Arr.find((value) => value.parameter === e); */}
                                                    <button className='btn btn-primary btn-sm ml-3' onClick={(e) => OnEdit(item.parameter)} >Edit</button>
                                                    {/* <button className='btn btn-primary btn-sm' onClick={(e) => OnEdit(item.parameter)}>Edit</button> */}
                                                </div>

                                            </div>
                                            <div class="col-md-1 mb-4">
                                                <div class="form-outline datepicker">
                                                    {/* <button className='btn btn-danger btn-sm'  >Delete</button> */}
                                                    <button className='btn btn-danger btn-sm' onClick={(e) => Ondelete(index1)}>Delete</button>
                                                </div>

                                            </div>
                                        </div>

                                    })
                                }
                                <div className="row mb-4 pb-2 pb-md-0 mb-md-5 ml-3">
                                    <div className="col-md-12">
                                        {OnChangeBtn == 1 ? <>{edit.length > 0 ? <div className="float-right mt-5"><button type="submit" className="btn btn-success btn-sm mb-2" onClick={backendData}>Submit</button>
                                            <button type="submit" className="btn btn-danger btn-sm mb-2" onClick={cancel}>cancel</button></div>
                                            : null}
                                        </>
                                            : OnChangeBtn == 2 ? <></> : null}
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}