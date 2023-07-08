


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
  Col,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Modal, ModalHeader, ModalBody, ModalFooter, Table
} from "reactstrap";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory, useParams } from 'react-router-dom';
import ApiService from 'views/examples/Service/ApiService';
export default function DeviceCategoryEdit() {
  const [CategoryArr, setCategoryArr] = useState([])
  const [deviceCategory, setdeviceCategory] = useState([])
  const [imageCategory, setimageCategory] = useState()
  const [categorname, setcategorname] = useState("")
  const [device, setdevice] = useState("")
  // const [dataprofile, setdataprofile] = useState("")
  const [devicealarm, setdevicealarm] = useState("")
  const [categoryAdd, setcategoryAdd] = useState([])
  const [deviceprofileArray, setdeviceprofileArray] = useState([])
  const [deviceprofileArray1, setdeviceprofileArray1] = useState("")

  const [OnDeviceDataProfile, setOnDeviceDataProfile] = useState([])
  const [OnDeviceDataProfile1, setOnDeviceDataProfile1] = useState("")
  const [alarmArray, setalarmArray] = useState([])
  const [alarmArray1, setalarmArray1] = useState("")
  const [idds, setidds] = useState()
  const [edit1, setEdit1] = useState()
  const [idcat, setidcat] = useState(0)
  const [imageset, setimage] = useState()
  const [OnDevice, setOnDevice] = useState("")
  const [dev, set] = useState({})
  const [devdataProfile, setdevdataProfile] = useState({})
  const [devALarm, setdevALarm] = useState({})
  const [dataprofile, setdataprofile] = useState("")

  const [imageVal, setimageVal] = useState(false)
  const [CatNameVal, setCatNameVal] = useState(false)
  const [CatNameVal1, setCatNameVal1] = useState(false)
  const [devProVal, setdevProVal] = useState(false)
  const [devDataProVal, setdevDataProVal] = useState(false)
  const [devAlarmVal, setdevAlarmVal] = useState(false)
  // let /^(\w+\s?)*\s*$/g = /^(\w+\s?)*\s*$/g;
  //formodel 
  const [modal, setmodal] = useState(false)
  // for devcie profile
  const [modal1, setmodal1] = useState(false)
  // for global alarm
  const [modal2, setmodal2] = useState(false)
  const [datas, setdatas] = useState([])
  const params = useParams();
  let toggle = () => {

    setmodal(!modal);
  }

  let toggle1 = () => {

    setmodal1(!modal1);
  }

  let toggle2 = () => {

    setmodal2(!modal2);
  }

  // dev data profile
  const [devDatProf, setdevDatProf] = useState([])

  //device profile
  const [dataprofilee, setdataprofilee] = useState([])

  // for global alarm
  const [GlobAlarm, setGlobAlarm] = useState([])
  const [GlobAlarmid, setGlobAlarmid] = useState([])
  const [category1, setcategory1] = useState()
  const [category, setcategory] = useState([])
  let dataprofileSelect;
  const [alarmparams, setalarmparams] = useState([])
  let functionAlarm = (e) => {
    setGlobAlarmid(e)
    setGlobAlarm(e.alarm_rules)
  }
  const [id, setid] = useState()

  let arrayTest;

  useEffect(() => {
    var url = window.location.pathname
    var idds = url.substring(url.lastIndexOf('/') + 1);

    console.log("last one", idds)


    setidds(idds)

    ApiService.getCategory_id(params.id).then((resp) => {

      // console.log("resp11111111111", resp)
      // console.log("sDHAISUDAHSD", resp.global_alarm_rule.filter((value) => value.alarm_name != alarmArray1))
      // let Finddeviceprofile = category.find((value, i) => value.alarm_name === e);
      // setcategory(resp.filter((value) => value.alarm_name = resp.alarm_name))
      console.log("start", resp);
      resp.global_alarm_rule.forEach((element, index) => {
        // console.log("afZfzx", index)
        // setcategory(resp1.filter((value, i) => index != i))
      })
      setdeviceCategory(resp.device_profile);
      set(resp.device_profile[0])
      setdevdataProfile(resp.device_data_profile[0])
      // setdevALarm(resp.global_alarm_rule[0])
      console.log("response-cat", resp);
      setdeviceprofileArray(resp.device_profile)
      setdeviceprofileArray1(resp.device_profile[0].deviceprofileName)
      console.log("resp.device_profile", resp.global_alarm_rule)
      setOnDeviceDataProfile(resp.device_data_profile)
      setOnDeviceDataProfile1(resp.device_data_profile[0].deviceprofileName)
      setalarmArray(resp.global_alarm_rule)
      // setalarmArray1(resp.global_alarm_rule[0].alarm_name)
      setcategorname(resp.category_name)
      setimage(resp.device_image)
      console.log("response-image", resp.device_image)
      setimageCategory(resp.device_image)
      setdataprofilee(resp.device_profile[0].custom_data)
      // setdevDatProf
      setalarmparams(resp.global_alarm_rule)
      setdevDatProf(resp.device_data_profile[0].custom_data)
      setGlobAlarm(resp.global_alarm_rule[0].alarm_rules)
      // let checks = category.filter((value,i)=> value.alarm_name == resp.global_alarm_rule.alarm_name)
      fetch(`http://192.168.0.113:8090/api/v1/data_profile_alarm/${resp.device_data_profile[0].deviceprofileName}`, {
      }).then((result) => {
        result.json().then((resp1) => {
          setdatas(resp1)
          setcategory(resp1)
          resp.global_alarm_rule.forEach((element, index1) => {
            // let dsfbjdsk = resp1.find((value) => value.global_alarm_id == element.global_alarm_id)
            console.log("categoryRdit",resp1.filter((value) => value.global_alarm_id != element.global_alarm_id));
            console.log("checkingfdf",element);
            
          setcategory((resp1)=>resp1.filter((value) => value.global_alarm_id != element.global_alarm_id))
            console.log("afZfzx", resp1.find((value) => value ))
          })
          // console.log("resp1", resp1.filter((index) => index != resp.global_alarm_rule ))
          // console.log("respglobal",resp.global_alarm_rule);
   
      
          console.log("dfkjdkhnldkfl")
          // setalarmArray1(resp1);
        })
      })
    })
  }, [])

  const [deviceprofile, setdeviceprofile] = useState([])
  useEffect(() => {

    ApiService.deviceProfileList().then((resp) => {
      console.log("response", resp);
      setdeviceprofile(resp);
      console.log("device profile response", resp)
    })

    // fetch("http://127.0.0.1:8088/api/v1/device_profile").then((result) => {
    //   result.json()
    // })

  }, [])

  const [devicedataprofile, setdevicedataprofile] = useState([])
  useEffect(() => {

    ApiService.listDevice_dataProfile().then((resp) => {

      setdevicedataprofile(resp);

    })

    // fetch("http://127.0.0.1:8088/api/v1/device_data_profile", {

    // }).then((result) => {
    //   result.json().then((resp) => {
    //     setdevicedataprofile(resp);
    //     console.log("device data profile", resp);
    //   })
    // })
  }, [])

  const [alarmrule, setalarmrule] = useState([])
  useEffect(() => {
    ApiService.List_Alarm().then((resp) => { setalarmrule(resp) })
  }, [])



  let categoryAdding = () => {
    let Finddeviceprofile = deviceprofile.find((value, i) => value.device_profile_name === device);

    console.log("Finddeviceprofile", Finddeviceprofile)

    let creatdevice = { deviceprofileId: Finddeviceprofile.device_profile_id, deviceprofileName: Finddeviceprofile.device_profile_name, custom_data: Finddeviceprofile.custom_data }

    console.log("creatdevice", creatdevice)

    setdeviceprofileArray((deviceOlddata) => {
      // FinalObj.DeviceProfile = deviceOlddata
      return [...deviceOlddata, creatdevice]

    })

    console.log("deviceprofileArray", deviceprofileArray)

    let FinddeviceDataprofile = devicedataprofile.find((value, i) => value.data_profile_name === dataprofile);

    console.log("devicedataprofile", FinddeviceDataprofile);

    let createDatadevice = { deviceDataprofileId: FinddeviceDataprofile.device_data_profile_id, deviceprofileName: FinddeviceDataprofile.data_profile_name, custom_data: FinddeviceDataprofile.custom_data }

    console.log("createDatadevice", createDatadevice);

    setOnDeviceDataProfile((OldData) => {
      return [...OldData, createDatadevice]

    })

    console.log("OnDeviceDataProfile", OnDeviceDataProfile)
    let Findalarm = alarmrule.find((value, i) => value.alarm_name === devicealarm);
    console.log("Findalarm", Findalarm);
    let createAlarm = { deviceAlarmId: Findalarm.global_alarm_id, alarm_name: Findalarm.alarm_name, alarm_rules: Findalarm.alarm_rules }

    console.log("createAlarm", createAlarm)


    setalarmArray((oldvalues) => {
      return [...oldvalues, createAlarm]

    })
  }


  let ondeleteprofile = (e) => {

    setdeviceprofileArray((EditArray) => {

      return EditArray.filter((_, i) => i !== e);
    });

  }

  let ondeleteDataProfile = (e) => {

    setOnDeviceDataProfile((EditArray) => {

      return EditArray.filter((_, i) => i !== e);
    });

  }

  let ondeletealarm = (e) => {


    setalarmArray((EditArray) => {

      return EditArray.filter((_, i) => i !== e);
    });

  }

  let file = document.getElementById("fileName");
  let UploadCATEdit = (e) => {







    const data = new FileReader()


    data.readAsDataURL(e.target.files[0])
    setimageVal(false)
    var fileName = file.value,
      idxDot = fileName.lastIndexOf(".") + 1,
      extFile = fileName.substr(idxDot, fileName.length).toLowerCase();
    if (extFile == "jpg" || extFile == "jpeg" || extFile == "png" || extFile == "gif" || extFile == "jfif" || extFile == "webp") {
      data.addEventListener('load', () => {
        setimage(data.result)
      })
    } else {
      alert("Only jpg/jpeg,png,gif,jfif,webp files are allowed!");
      file.value = "";
    }







  }





  useEffect(() => {

    setEdit1({
      created_by: "test",
      updated_by: "test",
      category_name: categorname,
      device_image: imageCategory,
      device_image: imageset,
      device_profile: [dev],
      device_data_profile: [devdataProfile],
      global_alarm_rule: alarmparams,
    })

  }, [categorname, imageCategory, imageset, dev, devdataProfile, devALarm, alarmparams]);

  const history = useHistory();
  function cancel() {
    history.push('/admin/DeviceCategory');
  }

  let backendData = () => {

    console.log("edit1", edit1);

    if (imageset == "") {
      setimageVal(true)
    }
    else if (categorname.trim() == "") {
      setCatNameVal(true)
    }
    else if (!/^(\w+\s?)*\s*$/g.test(categorname)) {
      setCatNameVal1(true)
    }
    else if (deviceprofileArray1 == "") {
      setdevProVal(true)
    }
    else if (OnDeviceDataProfile1 == "") {
      setdevDataProVal(true)
    }
    else if (alarmparams == "") {
      setdevAlarmVal(true)
    }
    else {

      console.log("edit1", edit1);
      ApiService.update_category(params.id, edit1).then((resp) => {
        if (resp.message) {

          // alert("category name already exists!")
          toast.error('Category name already exists', {
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
          toast('Category edited successfully', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          history.push('/admin/DeviceCategory')
        }


      })



    }
  }

  let deviceprofileFunc = (e) => {
    // let Finddeviceprofile = deviceprofile.find((value, i) => value.device_profile_name === e);

    let Finddeviceprofile = deviceprofile.find((value, i) => value.device_profile_name === e);
    console.log("Finddeviceprofile", Finddeviceprofile)
    setdataprofilee(Finddeviceprofile.custom_data)
    console.log("dataprofile1", Finddeviceprofile.custom_data)
    let creatdevice = { deviceprofileId: Finddeviceprofile.device_profile_id, deviceprofileName: Finddeviceprofile.device_profile_name, custom_data: Finddeviceprofile.custom_data }
    console.log("creatdevice", creatdevice)
    console.log("deviceprofileArray", deviceprofileArray)
    set(creatdevice)
    setdeviceprofileArray1(e)
    setdevProVal(false)

  }

  let DeviceDataProfileFunc = (e) => {
    // let FinddeviceDataprofile = devicedataprofile.find((value, i) => value.data_profile_name === e);
    // dataprofileSelect = FinddeviceDataprofile.data_profile_name
    // setdevDatProf(FinddeviceDataprofile.custom_data)
    // console.log("devicedataprofile", FinddeviceDataprofile);
    // let FinddeviceDataprofile = devicedataprofile.find((value, i) => value.data_profile_name === e);
    // setdevDatProf(FinddeviceDataprofile.custom_data)
    // let createDatadevice = { deviceDataprofileId: FinddeviceDataprofile.device_data_profile_id, deviceprofileName: FinddeviceDataprofile.data_profile_name, custom_data: FinddeviceDataprofile.custom_data }

    // console.log("createDatadevice", createDatadevice);
    // setdevdataProfile(createDatadevice)
    // console.log("devdataProfile", devdataProfile)

    setdevDataProVal(false)

    let FinddeviceDataprofile = devicedataprofile.find((value, i) => value.data_profile_name === e);
    console.log("setcategory1", FinddeviceDataprofile.data_profile_name);
    dataprofileSelect = FinddeviceDataprofile.data_profile_name
    console.log("dataprofileSelect", dataprofileSelect);
    setdevDatProf(FinddeviceDataprofile.custom_data)
    console.log("devicedataprofile", FinddeviceDataprofile.custom_data);
    let createDatadevice = { deviceDataprofileId: FinddeviceDataprofile.device_data_profile_id, deviceprofileName: FinddeviceDataprofile.data_profile_name, custom_data: FinddeviceDataprofile.custom_data }
    console.log("createDatadevice", createDatadevice);
    setdevdataProfile(createDatadevice)
    console.log("devdataProfile", devdataProfile)
    setOnDeviceDataProfile1(e)
    console.log("setdeviceAlarmSelect1", dataprofileSelect);
    setdevDataProVal(false)
    fetch(`http://192.168.0.113:8090/api/v1/data_profile_alarm/${dataprofileSelect}`, {
    }).then((result) => {
      result.json().then((resp) => {
        setdatas(resp)
        setcategory(resp)
        setalarmArray1(resp);

      })
    })

      ;
    // setPrimaryObj((oldvaluesPrimary) => {
    //   return [...oldvaluesPrimary, Finddeviceprofile]
    // })
    // PrimaryUser.find(vendor => vendor['id'] === Finddeviceprofile.user_id) !== undefined ? window.alert("User already exists") :
    //   setPrimaryUser((oldvalues) => {
    //     return [...oldvalues, primaryObj]
    //   })
    setalarmArray1("")
    setalarmparams([])
  }


  let AlarmFunc = (e) => {
    // let createAlarm = { deviceAlarmId: Findalarm.global_alarm_id, alarm_name: Findalarm.alarm_name, custom_data: Findalarm.custom_data }

    // console.log("createAlarm", createAlarm)
    // setdevALarm(createAlarm)
    // console.log("devALarm", devALarm)
    // setalarmArray1(e)
    // setdevAlarmVal(false)

    let Findalarm = alarmrule.find((value, i) => value.alarm_name === e);
    let Finddeviceprofile = category.find((value, i) => value.alarm_name === e);

    setalarmparams((oldvalues) => {
      return [...oldvalues, Finddeviceprofile]
    })
    setdevALarm(alarmparams)
    console.log("fiprimaryndedvalue ", devALarm)
    let check = category.filter((value) => value.alarm_name != Finddeviceprofile.alarm_name);
    console.log("chaeckinggg", alarmparams);
    setcategory(category.filter((value) => value.alarm_name != Finddeviceprofile.alarm_name))
    console.log("createAlarm", category.filter((value) => value.alarm_name != Finddeviceprofile.alarm_name))
    setGlobAlarm(Findalarm.alarm_rules)
    console.log(Findalarm.alarm_rules);
    let createAlarm = { deviceAlarmId: Findalarm.global_alarm_id, alarm_name: Findalarm.alarm_name, alarm_notify: Findalarm.alarm_notify, alarm_rules: Findalarm.alarm_rules, data_profile: Findalarm.data_profile }
    console.log("createAlarm", createAlarm)
    console.log("devALarm", e)
    setalarmArray1(e)
    setdevAlarmVal(false)
    document.getElementById("alrmselect").value = "select one"
  }

  let deleteAlarms = (id) => {
    setid(id)
    console.log("sdffffffffffffffffffg", id);

    setalarmparams(alarmparams.filter((value, i) => value.global_alarm_id != id));

    console.log("hjhjn", datas)

    let checkdelete = datas.find(value => value.global_alarm_id == id)
    //flter will eturn array of objects
    console.log("deleting", datas)
    console.log("deleting", datas)
    setcategory((old) => {
      return [...old, checkdelete]
    })
    console.log("e", category)
  }



  return (
    <>
      {/* for alarm */}
      <Modal size="md" isOpen={modal2} toggle={toggle2} backdrop="static">
        <ModalHeader toggle={toggle2}>Device alarm</ModalHeader>
        <ModalBody>
          <Table className="align-items-center table-flush" responsive>
            <thead className="thead-light">
              <tr>
                <tr>
                  <th className="text-center text-dark col-3 text-wrap" style={{ width: "12rem" }}><b>Parameter</b></th>
                  {/* <th className="text-center text-dark col-2" style={{ width: "12rem" }}><b>Data Type</b></th> */}
                  <th className="text-center text-dark col-1 text-wrap" style={{ width: "12rem" }}><b>Alarm Condition</b></th>
                  <th className="text-center text-dark col-3 text-wrap" style={{ width: "12rem" }}><b>Alarm Value</b></th>
                  <th className="text-center text-dark col-3 text-wrap" style={{ width: "12rem" }}><b>Alarm rules</b></th>

                </tr>
              </tr>
            </thead>
            <tbody>
              <tr>
                {
                  GlobAlarm.map((item) => {

                    return <>   <tr >
                      <td className="text-justify text-dark col-3 text-wrap" style={{ width: "12rem" }}>{item.alarm_parameter}</td>
                      {/* <td className="text-justify text-dark col-3" style={{ width: "12rem" }}>{item.data_type}</td> */}
                      <td className="text-justify text-dark col-3 text-wrap" style={{ width: "12rem" }} >{item.alarm_condition}</td>
                      <td className="text-justify text-dark col-3 text-wrap" style={{ width: "12rem" }}>{item.alarm_value}</td>
                      <td className="text-justify text-dark col-3 text-wrap" style={{ width: "12rem" }}>{item.rule}</td>
                    </tr>
                    </>

                  })
                }

                {/* {
                  GlobAlarm.map((item,index)=>{
                    return<>
                    {
                      item.alarm_rules.map((item,index)=>{

                        return <>   <tr >
                        <td className="text-justify text-dark col-3" style={{ width: "6rem" }}>{item.da}</td>
                        <td className="text-justify text-dark col-3" style={{ width: "6rem" }}>{item.data_type}</td>
                        <td className="text-justify text-dark col-3" style={{ width: "12rem" }} >{item.alarm_condition}</td>
                        <td className="text-justify text-dark col-3" style={{ width: "6rem" }}>{item.alarm_value}</td>
                        <td className="text-justify text-dark col-3" style={{ width: "6rem" }}>{item.rule}</td>
                      </tr>
                      </>
                      })
                    }
                    </>
                  })
                } */}
              </tr>
            </tbody>
          </Table>
        </ModalBody>
        <ModalFooter>
          {
            <>
              <Button color="danger" className='btn-sm' onClick={toggle2}>Close</Button>
            </>
          }

        </ModalFooter>
      </Modal>

      {/* for device profile */}
      <Modal size="md" isOpen={modal1} toggle={toggle1} backdrop="static">
        <ModalHeader toggle={toggle1}>Device profile</ModalHeader>
        <ModalBody>
          <Table className="align-items-center table-flush" responsive>
            <thead className="thead-light">
              <tr>
                <tr>
                  <th scope="col-4" className="text-center text-dark col-1" style={{ textAlign: "center" }}><b>S.No</b></th>
                  <th scope="col-4" className="text-center text-dark col-6" style={{ textAlign: "center" }}><b>Parameter</b></th>
                  <th scope="col-4" className="text-center text-dark col-5" style={{ textAlign: "center" }}><b>Data Type</b></th>
                </tr>
              </tr>
            </thead>
            <tbody>
              {dataprofilee.map((item, index) => {
                return <tr key={index}>
                  <>
                    <tr >
                      <td className="text-center text-dark col-1" style={{ textAlign: "center" }}>{index + 1}</td>
                      <td className="text-center text-dark col-6" style={{ textAlign: "center" }}>{item.parameter}</td>
                      <td className="text-center text-dark col-5" style={{ textAlign: "center" }}>{item.data_type}</td>
                    </tr>
                  </>
                </tr>
              })
              }
            </tbody>
          </Table>
        </ModalBody>
        <ModalFooter>
          {
            <>
              <Button color="danger" className='btn-sm' onClick={toggle1}>Close</Button>
            </>
          }

        </ModalFooter>
      </Modal>

      {/* for device data profile */}
      <Modal size="md" isOpen={modal} toggle={toggle} backdrop="static">
        <ModalHeader toggle={toggle}> Data profile</ModalHeader>
        <ModalBody>
          <Table className="align-items-center table-flush" responsive>
            <thead className="thead-light">
              <tr>
                <tr>
                  <th scope="col" className="text-center text-dark col-1" style={{ textAlign: "center" }}><b>S.No</b></th>
                  <th scope="col" className="text-center text-dark col-11" style={{ textAlign: "center" }}><b>Parameter</b></th>

                </tr>
              </tr>
            </thead>
            <tbody>
              {devDatProf.map((item, index) => {
                return <tr key={index}>
                  <>
                    <tr >
                      <td className="text-center text-dark  " style={{ textAlign: "center" }}>{index + 1}</td>
                      <td className="text-center text-dark col-11" style={{ textAlign: "center" }}>{item.parameter}</td>

                    </tr>
                  </>
                </tr>
              })
              }
            </tbody>
          </Table>
        </ModalBody>
        <ModalFooter>
          {
            <>
              <Button color="danger" className='btn-sm' onClick={toggle}>Close</Button>
            </>
          }

        </ModalFooter>
      </Modal>
      <Header />
      <Container className="mt-4" fluid>
        {/* <h2 className=" text-center mb-4">
          Edit Device Category
        </h2> */}
        <Row>
          <Col className="order-xl-1" xl="4">
            <Card style={{ height: "400px" }}>
              <CardHeader>
                <h3 className='text-center'>Device image</h3>
                <CardBody className='text-center'>
                  {/* {console.log("Device Image", imageset)} */}
                  {imageset == undefined ? <td>Please upload image</td> :
                    <img class="text-center" src={imageset} style={{ height: "200px", width: "200px" }} />}

                  <input type="file" onChange={e => UploadCATEdit(e)} className="form-control mt-2" placeholder='Enter the Icon name' id="fileName" accept=".jpg,.jpeg,.png,.gif,.jfif,.webp" />
                  {imageVal ? <td style={{ color: "red" }}>Please select image</td> : null}
                </CardBody>
              </CardHeader>
            </Card>
          </Col>
          <Col className="order-xl-1" xl="8">
            <Card className="bg-secondary shadow" style={{ height: "400px" }}>
              <CardBody>
                <Form>
                  <div className="pl-lg-4">
                    <Row>
                      {/* <Col md="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-address"
                          >
                            Upload Image
                          </label>
                          <div>
                            <div class="">
                              <div >
                                <input type="file" onChange={e => UploadCATEdit(e)}  className="form-control" placeholder='Enter the Icon name' id="Form" />
                              </div>
                              {imageVal ? <td style={{ color: "red" }}>* Please Select Image</td> : null}
                            </div>  </div>

                        </FormGroup>


                      </Col> */}
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-city"
                          >
                            Category name
                          </label>
                          <Input
                            className="form-control-alternative"
                            onChange={e => { setcategorname(e.target.value); setCatNameVal(false); setCatNameVal1(false) }}
                            value={categorname}
                            id="input-city"
                            placeholder="Enter category name"
                            type="text"

                          />
                          {CatNameVal ? <td style={{ color: "red" }}>Please enter category name</td> : null}
                          {CatNameVal1 ? <td style={{ color: "red" }}>Please remove invaild characters</td> : null}
                        </FormGroup>

                      </Col>

                    </Row>
                    <Row className='mt-3'>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Device profile
                          </label>

                          {dataprofilee == "" ? null : <a> <i class="fa fa-eye text-success ml-2" data-toggle="tooltip" data-placement="top" title="view  device  profile" onClick={toggle1} aria-hidden="true"> </i> </a>}
                          <Input type="select" value={deviceprofileArray1} onChange={e => deviceprofileFunc(e.target.value)} className='text-dark' name="select" id="exampleSelect">
                            <option value="" selected disabled>Select device profile</option>
                            {deviceprofile.map((item, index) => {
                              return <option key={index} value={item.device_profile_name} className='text-dark'>{item.device_profile_name}</option>
                            })
                            }
                          </Input>
                          {devProVal ? <td style={{ color: "red" }}>Select device profile</td> : null}
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Data profile
                          </label>
                          {devDatProf == "" ? null : <a> <i class="fa fa-eye text-success ml-2" data-toggle="tooltip" data-placement="top" title="view  device data profile" onClick={toggle} aria-hidden="true"> </i> </a>}
                          <Input type="select" value={OnDeviceDataProfile1} onChange={e => DeviceDataProfileFunc(e.target.value)} className='text-dark' name="select" id="exampleSelect">
                            <option value="" selected disabled>Select data profile</option>
                            {devicedataprofile.map((item, index) => {
                              return <option key={index} value={item.data_profile_name} className='text-dark'>{item.data_profile_name}</option>
                            })
                            }
                          </Input>
                          {devDataProVal ? <td style={{ color: "red" }}>Select data profile</td> : null}

                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Alarm rules
                          </label>

                          <Input type="select" onChange={e => AlarmFunc(e.target.value)} className='text-dark' name="select" id="alrmselect">
                            <option value="select one" selected disabled>Select alarm</option>
                            {category.map((item, index) => {
                              console.log("categorycategory", item);
                              return <option key={index} value={item.alarm_name} className='text-dark'>{item.alarm_name}</option>
                            })
                            }
                          </Input>
                          {
                            alarmparams.map((item, index) => {
                              console.log("itemitemitemitemitemitemitem", item.alarm_name);
                              return <p
                                key={index}
                                className="form-control-label"
                                htmlFor="input-country"
                              >
                                {index + 1 + ")"} {item.alarm_name} <i class="fa fa-trash text-danger ml-3" onClick={() => deleteAlarms(item.global_alarm_id)}></i>
                                {GlobAlarm == "" ? null : <a> <i class="fa fa-eye text-success ml-2" data-toggle="tooltip" data-placement="top" title="view global alarm rules" onClick={() => { toggle2(); functionAlarm(item) }} aria-hidden="true"> </i> </a>}

                              </p>
                              // return <option value={item.alarm_name} className='text-dark'>{item.alarm_name}</option>
                            })
                          }
                          {devAlarmVal ? <td style={{ color: "red" }}>Select alarm</td> : null}
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                </Form>
                <div >
                  <Row className='float-right'>
                    <Col>
                      <Button color="success" className='btn-success ' size="sm" onClick={backendData}>Submit</Button>
                      <Button color="danger" className='btn-success ' size="sm" onClick={cancel}>cancel</Button>
                    </Col>
                  </Row>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>

    </>
  )
}
