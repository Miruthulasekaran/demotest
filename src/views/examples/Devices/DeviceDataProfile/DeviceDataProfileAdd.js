



import Header from 'components/Headers/Header';
import React, { useState, useEffect, useRef } from 'react'
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
    Modal, ModalHeader, ModalBody, ModalFooter,
    Col,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    Label
} from "reactstrap";
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ApiService from 'views/examples/Service/ApiService';
// import ApiService from 'views/examples/Service/ApiService';
export default function DeviceDataProfileAdd() {
    const [DataProfile, setDataProfile] = useState("");
    const [DataProfileFields, setDataProfileFields] = useState("");
    const [Units, setUnits] = useState("");
    const [DataType, setDataType] = useState("");
    const [AddIcons, setAddIcons] = useState("");
    const [DataFormat, setOnDataFormat] = useState("");
    const [AllValues, setAllValues] = useState([]);
    const [CreateAllObj, setAllObj] = useState("")
    const [Tempname, setTempname] = useState(null)
    const [Onupdate, setOnupdate] = useState(true)
    const [errorProfile, seterrorProfile] = useState(false)
    const [errorUnits, seterrorUnits] = useState(false)
    const [errorDataType, seterrorDataType] = useState(false)
    const [errorIcons, seterrorIcons] = useState(false)
    const [errorDataFormat, seterrorDataFormat] = useState(false)
    const [errorDataProfileFields, seterrorDataProfileFields] = useState(false)
    const [show, setShow] = useState(false);
    const [iconname, seticonname] = useState("");
    const [iconimg, seticonimg] = useState("")
    const [OncreateArr, setCreateArr] = useState([]);
    const [updateimg, setupdateimg] = useState(1)
    const [ArrayContains, setArrayContains] = useState(2);
    const [TempModel, setTempModel] = useState(1)
    const [profile, setProfile] = useState("")
    const [modal, setmodal] = useState(false)
    const [finalArr, setFinalArr] = useState()
    const [placeholdervalue, setplaceholdervalue] = useState()
    const [AddIcons1, setAddIcons1] = useState("")
    const [iconnameval, seticonnameval] = useState(false)
    const [iconimgval, seticonimgval] = useState(false)

    const [pronameval, setpronameval] = useState(false)
    const [dataformat, setdataformat] = useState(false)
    const [DataProfileFieldsval, setDataProfileFieldsval] = useState(false)
    const [pronameval1, setpronameval1] = useState(false)
    const [DataProfileFieldsval1, setDataProfileFieldsval1] = useState(false)
    let pattern = /^(\w+\s?)*\s*$/g;
    let pattern1 = /^(\w+\s?)*\s*$/g;

    let toggle = () => {
        seticonimg("")
        seticonname("")
        setmodal(!modal);
    }

    const handleClose = () => {
        setShow(false);
        setArrayContains(1)
    }
    const handleShow = () => setShow(true);

    useEffect(() => {
        const unloadCallback = (event) => {
            event.preventDefault();
            event.returnValue = "";
            return "";
        };

        window.addEventListener("beforeunload", unloadCallback);
        return () => window.removeEventListener("beforeunload", unloadCallback);
    }, []);


    let OnDataProfileChange = (e) => {
        setDataProfile(e.target.value);
        setpronameval(false)
        setpronameval1(false)
        if (DataProfile != "") {
            seterrorProfile(false)
        }
    }

    let OnCustomDataProfile = (e) => {
        setDataProfileFields(e.target.value);
        setDataProfileFieldsval(false)
        setDataProfileFieldsval1(false)
        if (DataProfile != "") {
            seterrorDataProfileFields(false)
        }

    }

    let OnDataFormat = (e) => {
        setOnDataFormat(e.target.value)
        setdataformat(false)
        if (DataFormat != "") {
            seterrorDataFormat(false)
        }

    }

    let Ondelete = (e) => {
        setOnupdate(true)
        setpronameval1(false)
        setDataProfileFieldsval1(false)
        seterrorDataType(false)

        setDataProfileFields(""); setUnits(""); setDataType(""); setAddIcons("")
        setAllValues((oldValues) => {
            return oldValues.filter((_, i) => i !== e);
        });

    }

    let OnEdit = (e) => {
        setOnupdate(false)
        let editValue = AllValues.find((value) => value.parameter === e);
        // console.log("parameterc", editValue);
        if (editValue !== undefined) {
            setTempname(e)
        }
        setDataProfileFields(editValue.parameter)
        // setUnits(editValue.Units)
        setDataType(editValue.data_type)
        // setAddIcons(editValue.AddIcons)
        // setAddIcons1(editValue.IconName)
        setpronameval(false)
        setdataformat(false)
        setDataProfileFieldsval(false)
         
        seterrorDataType(false)
        
    }

    let OnCreateObj = (e) => {
        if (DataProfile.trim() == "" && DataFormat == "" && DataProfileFields.trim() == "" && DataType=="") {
            setpronameval(true)
            setdataformat(true)
            setDataProfileFieldsval(true)
            
            seterrorDataType(true)
           
        }
        else if (DataProfile.trim() == "") {
            setpronameval(true)
        }
        else if (!/^(\w+\s?)*\s*$/g.test(DataProfile)) {
            setpronameval1(true)
        }
        else if (DataFormat == "") {
            setdataformat(true)
        }
        else if (DataType == "") {
            seterrorDataType(true)
        }

        else if (DataProfileFields.trim() == "") {
            setDataProfileFieldsval(true)
        }
        else if (!/^(\w+\s?)*\s*$/g.test(DataProfileFields)) {
            setDataProfileFieldsval1(true)
        }
        
        else {
            e.preventDefault();
            let CreateObj = { parameter: DataProfileFields, Units: Units, data_type: DataType, }
            setAllValues((values) => {
                return [...values, CreateObj]
            })
            setAllObj({ Label: DataProfile, Format: DataFormat, values: AllValues })
            setDataProfileFields("");
            setUnits("");
            setDataType("");
            setAddIcons1("");
        }
    }
    const history = useHistory();
    let EditModalFn = (e) => {
        let editValue = OncreateArr.find((value, i) => value.IconName === e);
        // console.log('EditValue', editValue)
        seticonname(editValue.IconName)
        setTempModel(editValue.IconName)

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
        seticonimg("")
        seticonname("")
        setupdateimg(1)
        // console.log('Delete', e);
    }

    let popuptab = (e) => {
        e.preventDefault()
    }

    let OnUpdateElem = (e) => {
        if (DataProfile.trim() == "" && DataFormat == "" && DataProfileFields.trim() == "" && DataType == "" ) {
            setpronameval(true)
            setdataformat(true)
            setDataProfileFieldsval(true)
           
        }
        else if (DataProfile.trim() == "") {
            setpronameval(true)
        }
        else if (!/^(\w+\s?)*\s*$/g.test(DataProfile)) {
            setpronameval1(true)
        }
        else if (DataType == "") {
            seterrorDataType(true)
        }
        else if (DataFormat == "") {
            setdataformat(true)
        }
        else if (DataProfileFields.trim() == "") {
            setDataProfileFieldsval(true)
        }
        else if (!/^(\w+\s?)*\s*$/g.test(DataProfileFields)) {
            setDataProfileFieldsval1(true)
        }
        else {
            // e.preventDefault();
            // setDataProfileFields(""); setUnits(""); setDataType(""); setAddIcons("")
            setDataProfileFieldsval(false)
            setOnupdate(true)
            setAllValues(AllValues.map((element) => {
                if (element.parameter === Tempname) {
                    // console.log("DataProfileFields", element.DataProfileFields)
                    return { ...element, parameter: DataProfileFields, Units: Units, data_type: DataType, AddIcons: AddIcons }
                }
                return element;
            }))
            toast(' profile updated successfully!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            setDataProfileFields("");
            setUnits("");
            setDataType("");
            setAddIcons1("");
        }
      
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
        else if (iconimg == "") {
            seticonimgval(true)
        }
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
        e.preventDefault();
        // console.log("iconimage", e.target.value)
        // seticonimg(e.target.file)

        // console.log(e.target.files)
        const data = new FileReader()

        data.addEventListener('load', () => {
            seticonimg(data.result)
        })
        data.readAsDataURL(e.target.files[0])
        // seticonimg(URL.createObjectURL(e.target.files[0]))

        // console.log("llk", e.target.files[0])
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
            document.getElementById("Form1").value = ""
            seticonname("")
            seticonimg("")
            setArrayContains(1)
            let CreateObjs = { IconName: iconname, IconImage: iconimg }
            setShow(true)
            setCreateArr([...OncreateArr, CreateObjs])
            // console.log(OncreateArr)
        }
    }

    useEffect(() => {

        // let testValue = AllValues.length+1
        // console.log("leng", typeof(testValue))
        // console.log("OncreateArr", OncreateArr)
        // console.log("setFinalArr", finalArr)

        setFinalArr({
            created_by: "test", custom_data: AllValues, data_profile_name: DataProfile, updated_by: "TestUpdate", data_format: DataFormat, icon_image: OncreateArr
        })


    }, [AllValues, OncreateArr, DataProfile
        , DataFormat
    ]);

    let Devicedata = () => {

        console.log("finbal", finalArr)
        if (DataProfile.trim() == "") {
            setpronameval(true)
            setdataformat(true)

        }
        else if (DataProfile.trim() == "") {
            setpronameval(true)
        }
        // else if (DataFormat.trim() == "") {
        //     setdataformat(true)
        // }
        else if (!/^(\w+\s?)*\s*$/g.test(DataProfile)) {
            setpronameval1(true)
        }
        else {
            console.log("finalArrfinalArr",finalArr);
            ApiService.DeviceDataProfilePost(finalArr).then((resp)=>{
                if (resp.message) {
                    console.log(resp);
                    toast.error('Data profile name already exists', {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        });
                  } else {
                    toast('Data profile added successfully!', {
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
    const [file, setFile] = useState(null);
    function cancel() {
        history.push('/admin/DeviceDataProfile');
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
                                    updateimg == 2 ? <input onChange={Oniconimage} type="file" className="form-control" placeholder='Update the Icon' /> : null
                                }
                                {iconimgval ? <p style={{ color: "red" }}>* Please Select the image</p> : null}
                            </div>

                            <div className="col-md-3 mt-4">
                                {updateimg == 1 ? <>
                                    <div className='text-center mr-5' style={{ marginTop: "10px" }}>
                                        <Button color="primary" onClick={createArr} className="btn-sm ">
                                            Add
                                        </Button></div></> : updateimg == 2 ? <>
                                            <Button color="warning" onClick={UpdateArr} size="sm" className="">
                                                Update
                                            </Button>  <Button color="danger" size="sm" onClick={UpdateArr1} className="">
                                                cancel
                                            </Button> </> : null
                                }
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-12  mt-3">
                                {OncreateArr.map((item, index) => {
                                    return <div className="row" key={index}>
                                        <div className="col-md-1 text-dark">
                                            <p className='text-dark'> <b>{index + 1}</b></p>
                                        </div>
                                        <div className="col-md-4 text-dark">
                                            <p className='text-dark'><b>{item.IconName}</b> </p>
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
                        {
                            OncreateArr.length > 0 ? <>
                                <Button color="success" className='btn-sm' onClick={toggle}>submit</Button>
                                <Button color="danger" className='btn-sm' onClick={toggle}>Cancel</Button></> : null
                        }

                    </ModalFooter>
                </Modal>
            </div> */}
            <Header />
            <Container className="mt-4" fluid>
                <Row>
                    <Col className="order-xl-1" xl="12">
                        <Card className="bg-secondary shadow">
                            <CardBody>
                                <Form onSubmit={e => e.preventDefault()}>
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
                                                        onChange={OnDataProfileChange}
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
                                                        Data Format
                                                    </label>
                                                    <Input type="select" onChange={OnDataFormat} className='text-dark' name="select" id="exampleSelect">
                                                        <option value="" selected disabled>Select data format</option>
                                                        <option value="JSON" className='text-dark'>JSON</option>
                                                        <option value="HEX" className='text-dark'>HEX</option>
                                                        <option value="CSV" className='text-dark'>CSV</option>

                                                    </Input>
                                                    {dataformat ? <td style={{ color: "red" }}>Please enter data format</td> : null}
                                                </FormGroup>
                                            </Col>

                                            {/* <Col md="2" >
                                                <FormGroup >
                                                    <div className='text-center mr-5' style={{ marginTop: "15px" }}>
                                                        <Button color="primary" className='mt-3' size="sm" onClick={toggle}>Add Icons </Button>
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
                                                        value={DataProfileFields} onChange={OnCustomDataProfile}
                                                        id="input-city"
                                                        placeholder="Enter custom parameter"
                                                        type="text"
                                                    />
                                                    {DataProfileFieldsval ? <td style={{ color: "red" }}>Please enter custom parameter </td> : null}
                                                    {DataProfileFieldsval1 ? <td style={{ color: "red" }}>Please remove invaild characters</td> : null}
                                                </FormGroup>
                                            </Col>
                                            <Col lg="6">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-country"
                                                    >
                                                 Data types
                                                    </label>
                                                    {/* value={DataType} onChange={OnDataType} */}
                                                    <Input  type="select" value={DataType} onChange={(e)=>{setDataType(e.target.value);seterrorDataType(false)}} className='text-dark' name="select" id="exampleSelect">
                                                        <option value="" selected disabled>Select Data Type</option>
                                                        <option value="number" className='text-dark'>number</option>
                                                        <option value="text" className='text-dark'>text</option>
                                                    </Input>
                                                    {errorDataType ? <td style={{ color: "red" }}>Please select data types</td> : null}
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
                                                    <Input value={Units} onChange={OnUnits} type="text " className='text-dark' name="select" id="exampleSelect">
                                                    </Input>
                                                    {unitsval ? <p style={{ color: "red" }}>* Please Enter the Add Units</p> : null}
                                                </FormGroup>
                                            </Col> */}
                                        </Row>
                                        {/* <Row className='mt-5'> */}
                                
                                            {/* <Col lg="6">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-country"
                                                    >
                                                        Icons
                                                    </label>
                                                    <Input type="select" value={AddIcons1} onChange={OnAddIcons} name="Icons" className='text-dark'>
                                                        {ArrayContains == '1' ? <option value="" selected disabled>Icons</option> : ArrayContains == '2' ? <option value="" selected disabled>Please Add Icons</option> : null}
                                                        {OncreateArr.map((item, index) => {
                                                            return <option key={index} value={item.IconName} className='text-dark'><b>{item.IconName}</b></option>
                                                        })
                                                        }
                                                    </Input>
                                                    {iconval ? <p style={{ color: "red" }}>* Please Enter the  Icons</p> : null}
                                                </FormGroup>
                                            </Col>  */}
                                        {/* </Row> */}
                                    </div>
                                </Form>
                                <div >

                                    {
                                        AllValues.map((item, index1) => {
                                            return <div key={index1} class="row">
                                                {/* {console.log("234234", item)} */}
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

                                                {/* <div class="col-md-2 mb-4">
                                                    <div class="form-outline datepicker">

                                                        <label for="exampleDatepicker1" class="form-label text-dark">{item.Units}</label>
                                                    </div>

                                                </div>

                                                <div class="col-md-2 mb-4">
                                                    <div class="form-outline datepicker">

                                                        <img style={{ height: "2rem" }} for="exampleDatepicker1" src={item.AddIcons} class="zoom"></img>
                                                    </div>
                                                </div> */}
                                                <div class="col-md-1 mb-4">
                                                    <div class="form-outline datepicker">

                                                        {/* {console.log("item.DataProfileFields",item.DataProfileFields)} */}
                                                        <button className='btn btn-primary btn-sm ml-3' onClick={(e) => OnEdit(item.parameter)}>Edit</button>
                                                        {/* <button className='btn btn-primary btn-sm' onClick={(e) => OnEdit(item.parameter)}>Edit</button> */}
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
                                    <Row className='ml-3'>
                                        <Col>
                                            {Onupdate ? <button type="submit" className="btn btn-primary btn-sm mb-2" onClick={OnCreateObj}>Add</button> :
                                                <><button type="submit" className="btn btn-warning btn-sm mb-2" onClick={OnUpdateElem}>Update</button><button type="submit" className="btn btn-danger btn-sm mb-2" onClick={() => { setOnupdate(true); setDataProfileFields(""); setUnits(""); setDataType(""); setAddIcons1("") }}>cancel</button></>}
                                        </Col>
                                    </Row>
                                    <div className='float-right'>
                                        {
                                            AllValues.length >0  ? <> <button type="submit" className="btn btn-success btn-sm mb-2 " onClick={Devicedata}>Submit</button>
                                                <button type="submit" className="btn  btn-danger btn-sm mb-2 " onClick={cancel}>cancel</button></> : <button type="submit" className="btn  btn-danger btn-sm mb-2 " onClick={cancel}>cancel</button>
                                        }

                                    </div>

                                </div>


                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                {/* <div className="App">
            <h2>Add Image:</h2>
            <input type="file" onChange={handleChange} />
            <img src={file} />
  
        </div> */}
            </Container>
        </>
    )
}