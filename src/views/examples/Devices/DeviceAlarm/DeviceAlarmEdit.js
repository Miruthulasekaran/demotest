
import Header from 'components/Headers/Header';
import React, { useState, useEffect, useRef } from 'react'
import {
    Button, Card, CardBody, FormGroup, Form, Input, Container, Row, Col,
} from "reactstrap";
import { useHistory, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ApiService from 'views/examples/Service/ApiService';
export default function DeviceAlarmEdit() {
    const [arr, setarr] = useState([])
    const [AlarmRules, SetAlarmRules] = useState("")
    const [AlarmRules1, SetAlarmRules1] = useState(['&&', '||'])
    const [AlarmName, setAlarmName] = useState("")
    const [AlarmParameter, setAlarmParameter] = useState("")
    const [alarmConditions, setalarmConditions] = useState([
        {
            "id": 1,
            "rule": "==",
            "Name": 'number',
            "Name1": 'text'
        },
        {
            "id": 2,
            "rule": "!=",
            "Name": 'number',
            "Name1": 'text'
        },
        {
            "id": 3,
            "rule": "<",
            "Name": 'number'
        },
        {
            "id": 4,
            "rule": ">",
            "Name": 'number'
        },
        {
            "id": 5,
            "rule": "<=",
            "Name": 'number'
        },
        {
            "id": 6,
            "rule": ">=",
            "Name": 'number'
        },


    ])
    const [AlarmCondValue, setAlarmCondValue] = useState("")
    const [DataValue, setDataValue] = useState("")
    const [onAlarmValue, setAlarmValue] = useState("")
    const [onNotify, setonNotify] = useState("")
    const [onDataProfile, SetDataProfile] = useState("")
    const [allArray, setAllArr] = useState([])
    const [createFinalObj, setcreateFinalObj] = useState()
    const [id, setid] = useState()
    const [index, setindex] = useState(0)
    const [onAlarmUpdate, setonAlarmUpdate] = useState(true);
    const [secondary, setsecondary] = useState(0);
    const [tempid, settempid] = useState();
    const [DataProfileArray, SetDataProfileArray] = useState([]);
    const [custom_data, setcustom_data] = useState([])
    const [Valuepresent, setValuepresent] = useState(false)
    const [alarmnameval, setalarmnameval] = useState(false)
    const [alarmnameval1, setalarmnameval1] = useState(false)
    const [finalArr, setFinalArr] = useState()
    const [onNotify1, setonNotify1] = useState([])
    const [devicedataproval, setdevicedataproval] = useState(false)
    const [alarmparameternameval, setalarmparameternameval] = useState(false)
    const [alarmconditionval, setalarmconditionval] = useState(false)
    const [datatypeval, setdatatypeval] = useState(false)
    const [alarmval, setalarmval] = useState(false)
    const [alarmnotificationval, setalarmnotificationval] = useState(false)
    const [alarmval1, setalarmval1] = useState(false)
    const [alarmnotificationval1, setalarmnotificationval1] = useState(false)
    const [idds, setId] = useState()
    const [deviceprofileedit, setdeviceprofileedit] = useState([])
    const [Arr, setArr] = useState([])
    const [onData, setonData] = useState()
    const [alarmRule, setalarmRule] = useState(false)
    const params = useParams();
    const [OnChangeBtn, setOnBtnChange] = useState("1")
    let pattern = /^(\w+\s?)*\s*$/g;
    let pattern1 = /^(\w+\s?)*\s*$/g;
    let pattern2 = /^(\w+\s?)*\s*$/g;
    const [disablerule, setdisablerule] = useState()
    useEffect(() => {
        { custom_data.length > 1 ? setsecondary(0) : setsecondary(1) }
        // console.log("useeffect", secondary)
    }, [])
    let changeall = () => {
        setdisablerule()
        setonAlarmUpdate(true)
        SetDataProfile("");
        setAlarmParameter("");
        setAlarmCondValue("");
        setDataValue("");
        setAlarmValue("");
        // setonNotify("")
        setOnBtnChange(1)
    }
    let clearall = () => {
        SetDataProfile("");
        setAlarmParameter("");
        setAlarmCondValue("");
        setDataValue("");
        setAlarmValue("");
        setonNotify("")
        history.push('/admin/DeviceAlarm');
    }
    const history = useHistory();
    let OnAlarmCondition = (e) => {
        setAlarmCondValue(e.target.value)
        setalarmconditionval(false)
    }
    const [editValue1, seteditValue1] = useState([])
    const[storee,setstoree]=useState()
    // let OnDataField = (e) => {




    //     setDataValue(e.target.value)
    //     setAlarmValue("")
    //     console.log("rtrt", e.target.value)
    //     e.target.value == "text" ? seteditValue1(alarmConditions.filter(value => value.Name1)) :
    //         seteditValue1(alarmConditions.filter(value => value.Name))
    //     console.log("lk", editValue1)
    //     setdatatypeval(false)
    // }
    let OnAlarmParameter = (e) => {
        
        setstoree(e.target.value)
        // console.log("OnAlarmParameter", e.target.value)
        setAlarmParameter(e.target.value)
        
      let a =  custom_data.find(item=> item.parameter == e.target.value)
      console.log("OnAlarmParameter", a)
        // setAlarmParameter(e.target.value)
        setAlarmValue("")
         a.data_type == "text" ? seteditValue1(alarmConditions.filter(value => value.Name1)) :
       seteditValue1(alarmConditions.filter(value => value.Name))
        setalarmparameternameval(false)
    }
    let OnDataprofile = (e) => {
        // console.log("e.target.value", e.target.value)
        setdevicedataproval(false)
        let editValue = DataProfileArray.find((value, i) => value.data_profile_name === e.target.value);
        console.log("data", editValue)
        setcustom_data(editValue.custom_data)
        custom_data.map((item, index) => {
            // console.log("custom", item.DataProfileFields);
        })
        // console.log("arr", arr)
        SetDataProfile(e.target.value)
        setonData(e.target.value)
        setAlarmParameter("")
        setsecondary(1)
        // console.log("boolean", secondary)

    }

    let OnAlarmName = (e) => {
        setAlarmName(e.target.value)
        setalarmnameval(false)
        setalarmnameval1(false)
    }
    let OnAlarmValue = (e) => {
        // console.log("THIS IS CLICKED")
        // setAlarmValue(e.target.value)
        let p = e.target.value
        let c = p.replace(/[^a-z]+/g, " ")
        let d = p.replace(/[^0-9]+/g, " ")
        let djgsj =  custom_data.find(item=> item.parameter == storee)
        console.log("sbhhbkbkjkjkbnbzcn", djgsj)
  
        console.log(c)
        djgsj.data_type == "text" ?
        setAlarmValue(c)
            :
            setAlarmValue(d)
        setalarmval(false)
        setalarmval1(false)
    }
    let OnNotification = (e) => {
        setonNotify(e.target.value)
        setalarmnotificationval(false)
        setalarmnotificationval1(false)
        setonNotify1(onNotify)
    }
    useEffect(() => {
        setFinalArr({
            created_by: "test", updated_by: "test", alarm_name: AlarmName, alarm_notify: onNotify, data_profile: onData, alarm_rules: Arr
        })
        console.log("finalArrfinalArrfinalArr", finalArr)
    }, [AlarmName, Arr, AlarmName, AlarmRules, onNotify, onData]);
    useEffect(() => {
        var url = window.location.pathname
        var idds = url.substring(url.lastIndexOf('/') + 1);
        ApiService.DeviceAlarmEditDevicedataprofile().then((resp) => {
            SetDataProfileArray(resp)
        })

    }, [])
    let AllFuncSave = () => {
        if (AlarmName.trim() == "" && onDataProfile == "" && AlarmParameter == "" && AlarmCondValue == ""  && onAlarmValue.trim() == "" && onNotify.trim() == "") {
            setalarmnameval(true)
            setdevicedataproval(true)
            setalarmparameternameval(true)
            setalarmconditionval(true)
            setdatatypeval(true)
            setalarmval(true)
            setalarmnotificationval(true)
        }
        else if (AlarmName.trim() == "") {
            // console.log("AlarmName", AlarmName)
            setalarmnameval(true)
        }
        else if (!/^(\w+\s?)*\s*$/g.test(AlarmName)) {
            console.log("jhd")
            setalarmnameval1(true)
        }
        // else if (onDataProfile == "") {
        //     setdevicedataproval(true)
        // }
        else if (Arr.length == 0 ? null : AlarmRules == "") {

            setalarmRule(true)
            // console.log("passed")
        }
        else if (Arr.length == 0 ? onDataProfile == "" : null) {
            setdevicedataproval(true)
        }
        else if (AlarmParameter == "") {
            setalarmparameternameval(true)
        }
        else if (AlarmCondValue == "") {
            setalarmconditionval(true)
        }
      
        else if (onAlarmValue.trim() == "") {
            setalarmval(true)
        }
        // else if (!pattern1.test(onAlarmValue)) {
        //     console.log("jhd")
        //     setalarmval1(true)
        // }
        else if (onNotify.trim() == "") {
            setalarmnotificationval(true)
        }
        else if (!/^(\w+\s?)*\s*$/g.test(onNotify)) {
            console.log("jhd")
            setalarmnotificationval1(true)
        }

        else if (Arr.find((value) => value.alarm_value === onAlarmValue && value.alarm_parameter === AlarmParameter && value.alarm_condition === AlarmCondValue) != undefined) {
            setValuepresent(true)
        }


        else {
            setValuepresent(false)
            setindex(index + 1)
            let CreateObj = {
                id: Arr.length + 1, rule: AlarmRules, device_data_profile: onDataProfile, alarm_parameter: AlarmParameter, alarm_condition: AlarmCondValue, alarm_value: onAlarmValue,

            }

            // if (allArray.length == 0) {

            console.log("indexAlrmRule", AlarmRules == "" ? "true" : "false")
            setArr((Arr) => {
                return [...Arr, CreateObj]
            })

            console.log("Arr", Arr);


            // else {

            //     // rule
            //     let testrule = CreateObj.rule; //&&
            //     try123 = { ...CreateObj, rule: "" } //&& --null
            //     console.log("dfsdfsdf111", try123)
            //     let indexAlrmRule = allArray.filter(value => value.rule == "")  // null--check
            //     console.log("dfsdfsdf", indexAlrmRule[0].id) /// 
            //     setArr(Arr.map((element) => {
            //         console.log("try", element)
            //         console.log("try", indexAlrmRule)
            //         if (element.id == indexAlrmRule[0].id) {
            //             console.log("dfgdfg", element)
            //             return { ...element, rule: testrule } // replace --&&
            //         }
            //         return element
            //     })
            //     )
            //     console.log("tryq3", allArray)
            //     setArr((old) => {
            //         return [...old, try123]
            //     })
            // }
            // setArr((Arr) => {
            //     return [...Arr, CreateObj]
            // })
            // console.log("CreateObj", CreateObj)
            SetDataProfile("");
            setonNotify1(onNotify)
            setAlarmParameter("");
            setAlarmCondValue("");
            setDataValue("");
            setAlarmValue("");
            // setonNotify("")
            // console.log("this is final value", createFinalObj)
        }
    }

    let editAlarm = (e, finddev) => {
        setdisablerule(e)
        setonAlarmUpdate(false)
        // console.log("editAlarm and e", e)
        let editValue = Arr.find((value, i) => i === e);
        let editValue1 = DataProfileArray.find((value, i) => value.data_profile_name === editValue.device_data_profile);
        // console.log("data", editValue1)
        // setcustom_data(editValue1.custom_data)
        console.log("dsfssss", editValue);
        settempid(editValue.id)
        // setonNotify(editValue.alarm_notify)
        // setAlarmCondValue
        setAlarmCondValue(editValue.alarm_condition)
        // let editValue_user = DataProfileArray.find((value, i) => value.data_profile_name === e.target.value);

        setAlarmParameter(editValue.alarm_parameter)
        // console.log("eeditVa", editValue.alarm_parameter)
        setAlarmValue(editValue.alarm_value)
        setDataValue(editValue.data_type)

        console.log("rgsrger", DataProfileArray)
        // let editValue_One = DataProfileArray.find((value, i) => value.data_profile_name === finddev);
        // setcustom_data(editValue_One.custom_data)
        SetDataProfile(editValue.device_data_profile)
        setalarmnameval(false)
        setalarmnameval1(false)
        setdevicedataproval(false)
        setalarmparameternameval(false)
        SetAlarmRules(editValue.rule)
        setalarmconditionval(false)
        setdatatypeval(false)
        setalarmval(false)
        setalarmval1(false)
        setalarmnotificationval(false)
        setalarmnotificationval1(false)
        setOnBtnChange(2)
        // setArr(resp.custom_data[0].main_rule.sub_rules)
        // setalarmnameval(false)
        // setdevicedataproval(false)
        // setalarmparameternameval(false)
        // setalarmconditionval(false)
        // setdatatypeval(false)
        // setalarmval(false)
        // setalarmnotificationval(false)
    }
    let checkingVriable;
    let checkingVriable1;
    let checkingVriable2;
    let checkingVriable3;

    let UpdateFuncSave = (e) => {
        setdisablerule()
        checkingVriable = Arr.filter((value, index) => index != disablerule)
        checkingVriable1 = checkingVriable.find((value) => value.alarm_value === onAlarmValue && value.alarm_parameter === AlarmParameter && value.alarm_condition === AlarmCondValue) != undefined
        console.log("disablerule", checkingVriable1);
        if (AlarmName.trim() == "" && onDataProfile == "" && AlarmParameter == "" && AlarmCondValue == ""  && onAlarmValue.trim() == "" && onNotify.trim() == "") {
            setalarmnameval(true)
            // setalarmrulesval(true)
            setdevicedataproval(true)
            setalarmparameternameval(true)
            setalarmconditionval(true)
            setdatatypeval(true)
            setalarmval(true)
            setalarmnotificationval(true)
        }
        // else if (AlarmName.trim() == "") {
        //     setalarmnameval(true)
        // }
        // else if (!/^(\w+\s?)*\s*$/g.test(AlarmName)) {
        //     console.log("jhd")
        //     setalarmnameval1(true)
        // }
        // else if (onDataProfile == "") {
        //     setdevicedataproval(true)
        // }
        // else if (AlarmParameter == "") {
        //     setalarmparameternameval(true)
        // }
        // else if (AlarmCondValue == "") {
        //     setalarmconditionval(true)
        // }
        // else if (DataValue == "") {
        //     setdatatypeval(true)
        // }
        // else if (onAlarmValue.trim() == "") {
        //     setalarmval(true)
        // }
        // else if (!pattern1.test(onAlarmValue)) {
        //     console.log("jhd")
        //     setalarmval1(true)
        // }
        // else if (onNotify == "") {
        //     setalarmnotificationval(true)
        // }
        // else if (!/^(\w+\s?)*\s*$/g.test(onNotify)) {
        //     console.log("jhd")
        //     setalarmnotificationval1(true)
        // }
        // else if (checkingVriable1) {
        //     setValuepresent(true)
        // }
        else {
            setValuepresent(false)
            if (Arr.length == 1) {
                setArr(Arr.map((element) => {
                    if (element.id === tempid) {
                        return {
                            ...element, id: tempid, rule: AlarmRules, device_data_profile: onDataProfile, alarm_parameter: AlarmParameter, alarm_condition: AlarmCondValue, alarm_value: onAlarmValue,
                        }
                    }
                    return element;
                }))
            }
            else {
                if (disablerule == 0) {
                    checkingVriable3 = Arr.find((value) => value.device_data_profile === onDataProfile) != undefined
                    // checkingVriable3 = allArray.find((value) => value.device_data_profile === onDataProfile || value.alarm_parameter === AlarmParameter) != undefined
                    console.log("checkingVriable2", Arr.find((value) => value.device_data_profile === onDataProfile) != undefined);
                    if (!checkingVriable3) {
                        if (window.confirm('different data profile is not considered .Do you wish to delete')) {
                            Arr.length = 0
                        }
                    }
                    else {
                        setArr(Arr.map((element) => {
                            if (element.id === tempid) {
                                return {
                                    ...element, id: tempid, rule: AlarmRules, device_data_profile: onDataProfile, alarm_parameter: AlarmParameter, alarm_condition: AlarmCondValue,  alarm_value: onAlarmValue,

                                }
                            }
                            return element;
                        }))
                    }
                }
                else {

                    console.log("dddddddddddd");
                    setArr(Arr.map((element) => {
                        if (element.id === tempid) {
                            return {
                                ...element, id: tempid, rule: AlarmRules, device_data_profile: onDataProfile, alarm_parameter: AlarmParameter, alarm_condition: AlarmCondValue, data_type: DataValue, alarm_value: onAlarmValue,
                            }
                        }
                        return element;
                    }))



                    // disablerule
                }
            }
            setonNotify1(onNotify)
            setonAlarmUpdate(true)
            SetDataProfile("");
            setAlarmParameter("");
            setAlarmCondValue("");
            setDataValue("");
            setAlarmValue("");
            // setonNotify("")
            setOnBtnChange(1)
        }
    }
    let OnDeleteFunction = (e) => {
        setdisablerule()
        setArr((Arr) => {
            return Arr.filter((_, i) => i !== e);
        });


        setAlarmCondValue("")
        setAlarmParameter("")
        setAlarmValue("")
        setDataValue("")
        SetDataProfile("")


        setalarmnameval(false)
        setalarmnameval1(false)
        setonAlarmUpdate(true)
        setdevicedataproval(false)
        setalarmparameternameval(false)
        setalarmconditionval(false)
        setdatatypeval(false)
        setalarmval(false)
        setalarmval1(false)
        setalarmnotificationval(false)
        setalarmnotificationval1(false)
        setOnBtnChange(true)

    }
    let backend = () => {
        console.log("finalArr", finalArr);
        if (AlarmName.trim() == "") {
            setalarmnameval(true)
        }
        else if (!/^(\w+\s?)*\s*$/g.test(AlarmName)) {
            console.log("jhd")
            setalarmnameval1(true)
        }
        else if (onNotify == "") {
            setalarmnotificationval(true)
        }
        else {
            ApiService.DeviceAlarmEditPatch(params.id, finalArr).then((resp) => {
                if (resp.message) {
                    // alert("alarm rule name already exists !")
                    toast.error('Alarm rule name already exists ', {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                }
                else {
                    toast('Alarm edited successfully', {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                    history.push('/admin/DeviceAlarm');
                }

            })
        }


    }
    let try123;
    useEffect(() => {
        var url = window.location.pathname
        var idds = url.substring(url.lastIndexOf('/') + 1);
        setId(idds)
        ApiService.DeviceAlarmEditGet(params.id).then((resp) => {
            setdeviceprofileedit([resp]);
            console.log("response", resp.data_profile);
            setAlarmName(resp.alarm_name)
            setonNotify(resp.alarm_notify)
            setArr(resp.alarm_rules)
            // SetDataProfile(resp.data_profile)
            // setAlarmParameter(resp.alarm_rules.alarm_parameter)
            setonNotify(resp.alarm_notify)
            // console.log("sfsd", resp.alarm_rules[0].device_data_profile)
            SetDataProfile(resp.data_profile)
            setonData(resp.data_profile)
            resp.data_type == "text" ? seteditValue1(alarmConditions.filter(value => value.Name1)) :
                seteditValue1(alarmConditions.filter(value => value.Name))
            ApiService.DeviceAlarmGets().then((resp1) => {
                console.log("respss", resp1)
                SetDataProfileArray(resp1)
                let editValue1 = resp1.find((value, i) => value.data_profile_name == resp.alarm_rules[0].device_data_profile);
                console.log("datadfsdf", editValue1)
                setcustom_data(editValue1.custom_data)
                console.log("editValue144444444444444", editValue1);
            })
        })

    }, [])

    function cancel() {
        history.push('/admin/DeviceAlarm');
    }
    let OnAlarmRules = (e) => {
        SetAlarmRules(e.target.value)
        setalarmRule(false)


    }

    return (
        <>
            <Header />
            <Container className="mt-5" fluid>
                <Row>
                    <Col className="order-xl-1" xl="12">
                        <Card className="bg-secondary shadow">
                            <CardBody>
                                <Form id="create-course-form">
                                    <div className="pl-lg-4">
                                        <Row>
                                            <Col md="4">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-address"
                                                    >
                                                        Alarm name
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        onChange={OnAlarmName}
                                                        value={AlarmName}
                                                        id="input-address"
                                                        placeholder="Enter alarm name"
                                                        type="text"

                                                    />
                                                    {alarmnameval ? <td style={{ color: "red" }}>Please enter alarm name</td> : null}
                                                    {alarmnameval1 ? <td style={{ color: "red" }}>Please remove invaild characters</td> : null}
                                                </FormGroup>
                                            </Col>
                                            <Col lg="4">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-city">
                                                        Alarm notification
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        onChange={OnNotification}
                                                        id="input-city"
                                                        placeholder="Enter alarm notification"
                                                        type="textarea"
                                                        value={onNotify}
                                                    />
                                                    {alarmnotificationval ? <td style={{ color: "red" }}>Please enter alarm notification</td> : null}
                                                    {alarmnotificationval1 ? <td style={{ color: "red" }}>Please remove invaild characters</td> : null}
                                                </FormGroup>

                                            </Col>
                                            {
                                                Arr.length == 0 || disablerule == 0 ?


                                                    <Col lg="4" >
                                                        <FormGroup>
                                                            <label
                                                                className="form-control-label"
                                                                htmlFor="input-country"
                                                            >
                                                                Rule
                                                            </label>
                                                            <Input type="" className='text-dark' name="select" id="exampleSelect" disabled>
                                                                {/* <option value="Select rule" selected disabled>Select rules</option> */}
                                                            </Input>
                                                        </FormGroup>
                                                    </Col>
                                                    :
                                                    <Col lg="4">

                                                        <FormGroup>
                                                            <label
                                                                className="form-control-label"
                                                                htmlFor="input-country"
                                                            >
                                                                Rule
                                                            </label>
                                                            <Input type="select" onChange={OnAlarmRules} value={AlarmRules} className='text-dark' name="select" id="exampleSelect">
                                                                <option value="" disabled>Select rules</option>
                                                                {/* <option value={AlarmRules}  >AND</option>
                                                            <option value={AlarmRules}  >OR</option> */}
                                                                {
                                                                    AlarmRules1.map((item, index) => {
                                                                        return <>
                                                                            <option key={index} value={item}  >{item}</option>
                                                                        </>
                                                                    })
                                                                }
                                                            </Input>
                                                            {alarmRule ? <td style={{ color: "red" }}>* Please enter alarm rule</td> : null}
                                                        </FormGroup>
                                                    </Col>
                                            }

                                        </Row>
                                        <Row className='mt-5'>


                                            {
                                                Arr.length == 0 || disablerule == 0 ?

                                                    <Col md="4">
                                                        <FormGroup>
                                                            <label
                                                                className="form-control-label"
                                                                htmlFor="input-country"
                                                            >
                                                                Data profile
                                                            </label>

                                                            <Input type="select" onChange={OnDataprofile} value={onDataProfile} className='text-dark' name="select" id="exampleSelect">
                                                                <option value="" selected disabled>Select data profile</option>
                                                                {DataProfileArray.map((items, index) => {
                                                                    return <option key={index} value={items.data_profile_name} className='text-dark'>{items.data_profile_name}</option>
                                                                })
                                                                }
                                                            </Input>
                                                            {devicedataproval ? <td style={{ color: "red" }}>Please Enter data profile</td> : null}
                                                        </FormGroup>
                                                    </Col>
                                                    :
                                                    <Col md="4">
                                                        <FormGroup>
                                                            <label
                                                                className="form-control-label"
                                                                htmlFor="input-country"
                                                            >
                                                                Data profile
                                                            </label>

                                                            <Input type="select" onChange={OnDataprofile} value={onDataProfile} disabled className='text-dark' name="select" id="exampleSelect">

                                                            {DataProfileArray.map((items, index) => {
                                                                    return <option key={index} value={items.data_profile_name} className='text-dark'>{items.data_profile_name}</option>
                                                                })
                                                                }
                                                            </Input>
                                                            {/* {devicedataproval ? <td style={{ color: "red" }}>* Please enter data profile</td> : null} */}
                                                        </FormGroup>
                                                    </Col>
                                            }
                                            {/* <Col md="4">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-country"
                                                    >
                                                        Data profile
                                                    </label>

                                                    <Input type="select" onChange={OnDataprofile} value={onDataProfile} className='text-dark' name="select" id="exampleSelect">
                                                        <option value="" selected disabled>Select data profile</option>

                                                        {DataProfileArray.map((items, index) => {
                                                            return <option key={index} value={items.data_profile_name} className='text-dark'>{items.data_profile_name}</option>
                                                        })
                                                        }
                                                    </Input>
                                                    {devicedataproval ? <td style={{ color: "red" }}>Please Enter data profile</td> : null}
                                                </FormGroup>
                                            </Col> */}

                                            <Col lg="4">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-country"
                                                    >
                                                        Alarm parameter
                                                    </label>
                                                    {console.log("AlarmParameter", AlarmParameter)}

                                                    <Input type="select" onChange={OnAlarmParameter} value={AlarmParameter} className='text-dark' id="exampleSelect">
                                                        <option value="" selected disabled >Select parameter </option>
                                                        {secondary == 1 ? <> {custom_data.map((item, index) => {

                                                            // console.log("logging", item)
                                                            return <option value={item.parameter} key={index} >{item.parameter}({item.data_type})</option>
                                                        })}</> : <> 
                                                        <option value="number" className='text-dark' disabled>Please select data profile</option></>}
                                                    </Input>
                                                    {alarmparameternameval ? <td style={{ color: "red" }}>Please enter alarm parameter</td> : null}
                                                </FormGroup>
                                            </Col>
                                            {/* <Col lg="4">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-country"
                                                    >
                                                        Data type
                                                    </label>
                                                    <Input type="select" onChange={e => OnDataField(e)} value={DataValue} className='text-dark' name="select" id="exampleSelect">
                                                        <option value="" selected disabled>Select data type</option>

                                                        <option value="text" className='text-dark'>text</option>
                                                        <option value="number" className='text-dark'>number</option>
                                                    </Input>
                                                    {datatypeval ? <td style={{ color: "red" }}>Please enter data type</td> : null}
                                                </FormGroup>
                                            </Col> */}
  <Col lg="4">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-country"
                                                    >
                                                        Alarm condition
                                                    </label>
                                                    <Input type="select" onChange={OnAlarmCondition} value={AlarmCondValue} className='text-dark' name="select" id="exampleSelect">
                                                        <option value="" selected disabled>Select alarm condition</option>
                                                        {

                                                            editValue1.map((item, index) => {

                                                                return <option value={item.rule} selected >{item.rule}</option>



                                                            })
                                                        }
                                                    </Input>
                                                    {alarmconditionval ? <td style={{ color: "red" }}>Please enter alarm condition</td> : null}
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row className='mt-5'>
                                          

                                            <Col lg="4">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-city"
                                                    >
                                                        Alarm value
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        onChange={OnAlarmValue}
                                                        id=" Alarm Value"
                                                        placeholder="Enter alarm value"
                                                        type="text"
                                                        value={onAlarmValue}
                                                    />

                                                    {alarmval ? <td style={{ color: "red" }}>Please enter alarm value</td> : null}
                                                    {Valuepresent ? <td style={{ color: "red" }}>Value already present</td> : null}
                                                    {alarmval1 ? <td style={{ color: "red" }}>Please remove invaild characters</td> : null}
                                                </FormGroup>
                                            </Col>

                                        </Row>
                                    </div>
                                </Form>

                                {
                                    Arr.map((item, index1) => {
                                        // console.log("conslepg", item)
                                        return <div key={index1} class="row">
                                            <div class="col-md-1 mb-4">
                                                <div class="form-outline datepicker">
                                                    <td className='text-dark'>{index1 + 1 + ')'}</td>
                                                </div>
                                            </div>
                                            <div class="col-md-3 mb-4">
                                                <div class="form-outline datepicker">
                                                    {
                                                        item.rule == "" ? <td className='text-dark'>null</td> :
                                                            <td className='text-dark'>{item.rule}</td>
                                                    }
                                                </div>
                                            </div>
                                            {/* <div class="col-md-2 mb-4">
                                                <div class="form-outline datepicker">
                                                    <td className='text-dark'>{item.device_data_profile}</td>
                                                </div>
                                            </div> */}
                                            <div class="col-md-1 mb-4">
                                                <div class="form-outline datepicker">
                                                    <td className='text-dark'>{item.alarm_parameter}</td>
                                                </div>
                                            </div>
                                            <div class="col-md-2 mb-4">
                                                <div class="form-outline datepicker">
                                                    <td className='text-dark'>{item.alarm_condition}</td>
                                                </div>
                                            </div>
                                            <div class="col-md-2 mb-4">
                                                <div class="form-outline datepicker">
                                                    <td className='text-dark'>{item.data_type}</td>
                                                </div>
                                            </div>
                                            <div class="col-md-1 mb-4">
                                                <div class="form-outline datepicker">
                                                    <td className='text-dark'>{item.alarm_value}</td>
                                                </div>
                                            </div>

                                            <div class="col-md-1 mb-4">
                                                <div class="form-outline datepicker">
                                                    <button className='btn btn-primary btn-sm ml-4' onClick={() => { editAlarm(index1, item.device_data_profile) }}>Edit</button>
                                                </div>
                                            </div>

                                            {
                                                Arr.length == 1 ?

                                                    index1 == 0 ? <div class="col-md-1 mb-4">
                                                        <div class="form-outline datepicker">
                                                            <button className='btn btn-danger btn-sm' onClick={() => OnDeleteFunction(index1)}>Delete</button>
                                                        </div>
                                                    </div> : <div class="col-md-1 mb-4">
                                                        <div class="form-outline datepicker">
                                                            <button className='btn btn-danger btn-sm' onClick={() => OnDeleteFunction(index1)}>Delete</button>
                                                        </div>
                                                    </div>
                                                    : index1 == 0 ? <div class="col-md-1 mb-4">
                                                        <div class="form-outline datepicker">
                                                            <button className='btn btn-danger btn-sm' onClick={() => OnDeleteFunction(index1)} disabled>Delete</button>
                                                        </div>
                                                    </div> : <div class="col-md-1 mb-4">
                                                        <div class="form-outline datepicker">
                                                            <button className='btn btn-danger btn-sm' onClick={() => OnDeleteFunction(index1)}>Delete</button>
                                                        </div>
                                                    </div>
                                            }

                                            {/* <div class="col-md-1 mb-4">
                                                <div class="form-outline datepicker">
                                                    <button className='btn btn-danger btn-sm' onClick={() => { OnDeleteFunction(index1) }} >Delete</button>
                                                </div>
                                            </div> */}
                                        </div>
                                    })
                                }
                                <Col>
                                    {onAlarmUpdate ? <Button color="primary" className='mb-5' size="sm" onClick={AllFuncSave}>Add</Button> : <Button color="warning" className='mt-3' size="sm" onClick={() => UpdateFuncSave(disablerule)}>update</Button>}
                                    {onAlarmUpdate ? <></> : <Button color="danger" className='mt-3' size="sm" onClick={changeall}>Cancel</Button>}
                                </Col>
                                <div >
                                    {/* <Row className='ml-3'>
                                      <Col style={{ textAlign: "right" }} className='mt-3'>
                                            {
                                                Arr.length > 0 ? <> <Button color="success" size="sm" onClick={backend}>submit</Button>
                                                    <Button color="danger" size="sm" onClick={cancel}>cancel</Button> </> : <Button color="danger" size="sm" onClick={cancel}>cancel</Button>
                                            }
                                        </Col> 

                                        <div className="col-md-12">
                                            {OnChangeBtn == 1 ? <>{Arr.length > 0 ? <> <button type="submit" className="btn btn-success btn-sm mb-2 float-right" onClick={backend}>Submit</button>
                                                <button type="submit" className="btn  btn-danger btn-sm mb-2 " onClick={cancel}>cancel</button></> : <button type="submit" className="btn  btn-danger btn-sm mb-2" onClick={cancel}>cancel</button>}
                                            </>
                                                : OnChangeBtn == 2 ? <>
                                                </> : null}
                                        </div>
                                    </Row> */}



                                    <Row className='ml-3'>
                                        <Col style={{ textAlign: "right" }} className='mt-3'>
                                            {/* {
                                                allArray.length > 0 ? <> <Button color="success" size="sm" onClick={backend}>submit</Button>
                                                    <Button color="danger" size="sm" onClick={cancel}>cancel</Button> </> : <Button color="danger" size="sm" onClick={cancel}>cancel</Button>
                                            } */}


                                            <div className="col-md-12">
                                                {OnChangeBtn == 1 ? <>{Arr.length > 0 ? <> <button type="submit" className="btn btn-success btn-sm mb-2" onClick={backend}>Submit</button>
                                                    <button type="submit" className="btn  btn-danger btn-sm mb-2 float-right" onClick={cancel}>cancel</button></> : <button type="submit" className="btn  btn-danger btn-sm mb-2" onClick={cancel}>cancel</button>}
                                                </>
                                                    : OnChangeBtn == 2 ? <>
                                                    </> : null}
                                            </div>

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
