
import Header from 'components/Headers/Header';
import React, { useState, useEffect, useRef } from 'react'
import {
    Button, Card, CardBody, FormGroup, Form, Input, Container, Row, Col,
} from "reactstrap";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router-dom';
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import ApiService from 'views/examples/Service/ApiService';
// import { CloseButton } from 'react-toastify/dist/components';
const movieItems = [
    {
        id: 0,
        title: "baby_crying",

    },
    {
        id: 1,
        title: "gun_shot",

    },
    {
        id: 2,
        title: "dog_bark",

    },
    {
        id: 3,
        title: "drilling",

    },
    {
        id: 4,
        title: "car_theft_alarm",

    },
    {
        id: 5,
        title: "jack_hammer",

    },
    {
        id: 6,
        title: "fire_alarm",

    },
    {
        id: 7,
        title: "glass_break",

    },
    {
        id: 8,
        title: "hammer",

    },
    {
        id: 9,
        title: "women_scream",

    },
    {
        id: 10,
        title: "men_scream",

    },


];

const Rules1 = [
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


];

export default function DeviceAlarmAdd() {
    const [arr, setarr] = useState([])
    const [AlarmName, setAlarmName] = useState("")
    const [onData, setonData] = useState()
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
    const [onNotify1, setonNotify1] = useState([])
    const [onDataProfile, SetDataProfile] = useState("")
    const [onDataProfile1, SetDataProfile1] = useState([])
    const [AlarmRules, SetAlarmRules] = useState("")
    const [AlarmRules1, SetAlarmRules1] = useState(['&&', '||'])
    const [allArray, setAllArr] = useState([])
    const [createFinalObj, setcreateFinalObj] = useState()
    const [id, setid] = useState()
    const [index, setindex] = useState(0)
    const [onAlarmUpdate, setonAlarmUpdate] = useState(true);
    const [secondary, setsecondary] = useState(0);
    const [tempid, settempid] = useState();
    const [DataProfileArray, SetDataProfileArray] = useState([]);
    const [alarmNAme, SetalarmNAme] = useState([]);
    const [custom_data, setcustom_data] = useState([])
    const [custom_data1, setcustom_data1] = useState([])
    const [alarmnameval, setalarmnameval] = useState(false)
    const [alarmnameval1, setalarmnameval1] = useState(false)
    const [alarmnameval2, setalarmnameval2] = useState(false)
    const [devicedataproval, setdevicedataproval] = useState(false)
    const [alarmparameternameval, setalarmparameternameval] = useState(false)
    const [alarmconditionval, setalarmconditionval] = useState(false)
    const [datatypeval, setdatatypeval] = useState(false)
    const [alarmval, setalarmval] = useState(false)
    const [alarmval1, setalarmval1] = useState(false)
    const [alarmnotificationval, setalarmnotificationval] = useState(false)
    const [alarmnotificationval1, setalarmnotificationval1] = useState(false)
    const [Valuepresent, setValuepresent] = useState(false)
    const [alarmnamepresent, setalarmnamepresent] = useState(false)
    const [alarmRule, setalarmRule] = useState(false)
    const [alarmRule1, setalarmRule1] = useState(false)
    const [OnChangeBtn, setOnBtnChange] = useState("1")
    const [checkingtrue, setcheckingtrue] = useState([])
    const [disablerule, setdisablerule] = useState()
    const [disabled, setDisabled] = useState(true)
    // console.log(alarmConditions);
    // let pattern = /[^\s+|\s+$|\s+(?=\s)/w]/gi;
    // let pattern = /[^/w/s/]/gi;
    // let pattern = /[^\w\s]/gi;
    // let pattern = /[^\s+|\s+$|\s+(?=\s)]/gi;
    // let pattern = /^(\w+\s?)*\s*$/g;

    // let result = pattern.test(AlarmName);
    // console.log(result);

    let pattern = /^(\w+\s?)*\s*$/g;
    let pattern1 = /^(\w+\s?)*\s*$/g;
    let pattern2 = /^(\w+\s?)*\s*$/g;

    let OnAlarmCondition = (e) => {
        setAlarmCondValue(e.target.value)
        setalarmconditionval(false)
        setValuepresent(false)
    }
    // let editValue1 = []


    const [editValue1, seteditValue1] = useState([])
const[storee,setstoree]=useState()
    // let OnDataField = (e) => {
    //     setDataValue(e.target.value)
    //     setAlarmValue("")
    //     e.target.value == "text" ? seteditValue1(alarmConditions.filter(value => value.Name1)) :
    //         seteditValue1(alarmConditions.filter(value => value.Name))
    //     console.log("lk", editValue1)
    //     setdatatypeval(false)

    // }
    let OnAlarmParameter = (e) => {
        setstoree(e.target.value)
      let a =  custom_data.find(item=> item.parameter == e.target.value)
    //   console.log("OnAlarmParameter", a)
        setAlarmParameter(e.target.value)
        setAlarmValue("")
         a.data_type == "text" ? seteditValue1(alarmConditions.filter(value => value.Name1)) :
       seteditValue1(alarmConditions.filter(value => value.Name))
        setalarmparameternameval(false)
        setValuepresent(false)
    }
    let OnDataprofile = (e) => {
        // console.log("e.target.value", e.target.value)
        setdevicedataproval(false)
        let editValue = DataProfileArray.find((value, i) => value.data_profile_name === e.target.value);
        
        // console.log("datacustom_data", editValue.custom_data)

        setcustom_data(editValue.custom_data)
        custom_data.map((item, index) => {
            // console.log("custom", item.DataProfileFields);
        })
        // console.log("arr", arr)
        SetDataProfile(e.target.value)
        setonData(e.target.value)
        SetDataProfile1(onDataProfile)
        setAlarmParameter("")
        setValuepresent(false)
        setsecondary(1)
        // console.log("boolean", secondary)
    }
    let OnAlarmRules = (e) => {
        SetAlarmRules(e.target.value)
        setalarmRule(false)
        setDisabled(false)
        setalarmRule1(false)
        // setdisablerule(false)

    }
    let OnAlarmName = (e) => {


        setAlarmName(e.target.value)
        setalarmnameval(false)
        setalarmnameval1(false)

    }
    let OnAlarmValue = (e) => {
        // console.log("THIS IS CLICKED", e)
        // AlarmValue
        let alarmEmpty = document.getElementById("#AlarmValue")
        let p = e.target.value
        let c = p.replace(/[^a-z]+/g, " ")
        let d = p.replace(/[^0-9]+/g, " ")
        setValuepresent(false)
        // console.log(c)
        
      let djgsj =  custom_data.find(item=> item.parameter == storee)
    //   console.log("sbhhbkbkjkjkbnbzcn", djgsj)
      djgsj.data_type == "text" ?
            setAlarmValue(c)
            :
            setAlarmValue(d)
        setalarmval(false)
        // setalarmval1(false)
    }
    let OnNotification = (e) => {
        setonNotify(e.target.value)
        // setonNotify1(onNotify)
        setalarmnotificationval(false)
        setalarmnotificationval1(false)
    }


    // console.log("testing", Rules1.filter((value) => {
    //     return value.Name
    // }))

    useEffect(() => {
        { custom_data.length > 1 ? setsecondary(0) : setsecondary(1) }
        // setalarmConditions(Rules1)
        // console.log("useeffect", secondary)
    }, [])
    useEffect(() => {
        ApiService.DeviceAlarmGet().then((resp) => {
            SetalarmNAme(resp.message)
            // console.log("larmNAme", alarmNAme.message);
        })

    }, [])

    let changeall = () => {
        setdisablerule()
        setonAlarmUpdate(true)
        SetDataProfile("");
        setAlarmParameter("");
        setAlarmCondValue("");
        setDataValue("");
        setAlarmValue("");

        setOnBtnChange(1)
        setValuepresent(false)
    }
    // let clearall = () => {
    //     SetDataProfile("");
    //     setAlarmParameter("");
    //     setAlarmCondValue("");
    //     setDataValue("");
    //     setAlarmValue("");
    //     setonNotify("")
    //     history.push('/admin/DeviceAlarm');
    // }
    const history = useHistory();

    const [test, settest] = useState(allArray)

    useEffect(() => {

        // console.log("afdsdf", onNotify)

        // checkingtrue.length >= 1 ?

        setcreateFinalObj({
            created_by: "test", updated_by: "test", alarm_name: AlarmName, alarm_notify: onNotify, data_profile: onData, alarm_rules: allArray
        })


    }, [allArray, AlarmName, AlarmRules, onNotify, onData])
    useEffect(() => {
        var url = window.location.pathname
        var idds = url.substring(url.lastIndexOf('/') + 1);
        // console.log("last one", idds)
        ApiService.DeviceAlarmGets().then((resp) => {
            SetDataProfileArray(resp)
        })

    }, [])


    let try123;

    let AllFuncSave = () => {

        if (AlarmName == "" && onDataProfile == "" && AlarmParameter == "" && AlarmCondValue == ""  && onAlarmValue == "" && onNotify == "") {
            setalarmnameval(true)
            setdevicedataproval(true)
            setalarmparameternameval(true)
            setalarmconditionval(true)
            setdatatypeval(true)
            setalarmval(true)
            setalarmnotificationval(true)
        }

        else if (AlarmName.trim() == "") {
            setalarmnameval(true)
        }
        else if (!/^(\w+\s?)*\s*$/g.test(AlarmName)) {
            // console.log("jhd")
            setalarmnameval1(true)
        }
        else if (allArray.length == 0 ? null : AlarmRules == "") {

            setalarmRule(true)
            // console.log("passed")
        }
        else if (allArray.length == 0 ? onDataProfile == "" : null) {
            setdevicedataproval(true)
        }
        else if (AlarmParameter == "") {

            setalarmparameternameval(true)
        }
        else if (AlarmCondValue == "") {
            setalarmconditionval(true)
        }
        // else if (DataValue == "") {
        //     setdatatypeval(true)
        // }
        else if (onAlarmValue == "") {
            setalarmval(true)
        }
        // else if (!pattern1.test(onAlarmValue)) {
        //     setalarmval1(true)
        // }
        // else if (onNotify.trim() == "") {
        //     setalarmnotificationval(true)
        // }
        else if (!/^(\w+\s?)*\s*$/g.test(onNotify)) {
            setalarmnotificationval1(true)
        }
        else if (allArray.find((value) => value.alarm_value === onAlarmValue && value.alarm_parameter === AlarmParameter && value.alarm_condition === AlarmCondValue) != undefined) {
            setValuepresent(true)
        }

        else {
            // console.log("innn")

            setValuepresent(false)
            setindex(index + 1)
            let CreateObj = {
                id: index + 1, rule: AlarmRules, device_data_profile: onDataProfile, alarm_parameter: AlarmParameter, alarm_condition: AlarmCondValue, data_type: DataValue, alarm_value: onAlarmValue,
            }
            // console.log("indexAlrmRule", AlarmRules == "" ? "true" : "false")
            setAllArr((allArray) => {
                return [...allArray, CreateObj]
            })


            // setonNotify1(onNotify)
            SetDataProfile1(onDataProfile)
            setcheckingtrue(allArray)
            // console.log("setcheckingtrue", checkingtrue.length);
            // console.log("allArrayallArray", allArray);
            SetDataProfile("");
            setAlarmParameter("");
            setAlarmCondValue("");
            setDataValue("");
            setAlarmValue("");
            SetAlarmRules("")
            // setonNotify("")

        }
    }


    let editAlarm = (e) => {
        setdisablerule(e)
        // if (e == 0) {
        //     setdisablerule(true)
        //     // SetAlarmRules(disablerule)
        //     // alert("dddd")
        // } else {
        setonAlarmUpdate(false)
        let editValue = allArray.find((value, i) => i == e);
        // let editValue1 = DataProfileArray.find((value, i) => value.data_profile_name === editValue.device_data_profile);
        // setcustom_data(editValue1.custom_data)
        // console.log("ffqerwer", editValue)
        // setcustom_data
        settempid(editValue.id)
        // setonNotify(editValue.alarm_notify)
        setAlarmCondValue(editValue.alarm_condition)
        setAlarmParameter(editValue.alarm_parameter)
        setAlarmValue(editValue.alarm_value)
        setDataValue(editValue.data_type)
        SetDataProfile(editValue.device_data_profile)
        SetAlarmRules(editValue.rule)
        setalarmnameval(false)
        setalarmnameval1(false)
        setalarmnameval2(false)
        setdevicedataproval(false)
        setalarmparameternameval(false)
        setalarmconditionval(false)
        setdatatypeval(false)
        setalarmval(false)
        setalarmval1(false)
        setOnBtnChange(2)
        setalarmnotificationval(false)
        setalarmnotificationval1(false)
        setValuepresent(false)
        // }
    }
    let backend = () => {
        // console.log("createFinalObj", createFinalObj)
        if (AlarmName.trim() == "") {
            setalarmnameval(true)
        }
        else if (!/^(\w+\s?)*\s*$/g.test(AlarmName)) {
            // console.log("jhd")
            setalarmnameval1(true)
        }
        else if (onNotify == "") {
            setalarmnotificationval(true)
        }

        else {
            ApiService.DeviceAlarmPost(createFinalObj).then((resp) => {
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
                    // console.log("createFinalObj14125", resp)
                    toast('Alarm added successfully', {
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
    let checkingVriable;
    let checkingVriable1;
    let checkingVriable2;
    let checkingVriable3;
    let UpdateFuncSave = () => {
        setdisablerule()
        checkingVriable = allArray.filter((value, index) => index != disablerule)
        checkingVriable1 = checkingVriable.find((value) => value.alarm_value === onAlarmValue && value.alarm_parameter === AlarmParameter && value.alarm_condition === AlarmCondValue) != undefined
        // console.log("disablerule", checkingVriable1);
        if (AlarmName.trim() == "" && onDataProfile == "" && AlarmParameter == "" && AlarmCondValue == ""  && onAlarmValue == "" && onNotify.trim() == "") {
            setalarmnameval(true)
            setdevicedataproval(true)
            setalarmparameternameval(true)
            setalarmconditionval(true)
            setdatatypeval(true)
            setalarmval(true)
            setalarmnotificationval(true)
        }
        // else if (AlarmName.trim() == "") {
        //     setalarmnameval(true)
        //     // setalarmnameval1(true)
        //     // setalarmnameval2(true)
        // }
        // else if (AlarmName == "") {
        //     setalarmnameval(true)
        // }
        // else if (allArray.length == 0 ? null : AlarmRules == "") {

        //     setalarmRule(true)
        //     // console.log("passed")
        // }
        // else if (allArray.length == 1 ?  AlarmParameter == "" :null) {
        //     setalarmparameternameval(true)
        // }
        // else if (AlarmParameter == "") {
        //     setalarmparameternameval(true)
        // }
        else if (AlarmCondValue == "") {
            setalarmconditionval(true)
        }
        // else if (DataValue == "") {
        //     setdatatypeval(true)
        // }
        else if (onAlarmValue.trim() == "") {
            setalarmval(true)
        }
        else if (!/^(\w+\s?)*\s*$/g.test(onAlarmValue)) {
            setalarmval1(true)
        }
        // else if (onNotify == "") {
        //     setalarmnotificationval(true)
        // }
        // else if (!pattern2.test(onNotify)) {
        //     setalarmnotificationval1(true)
        // }

        else if (checkingVriable.find((value) => value.alarm_value === onAlarmValue && value.alarm_parameter === AlarmParameter && value.alarm_condition === AlarmCondValue) != undefined) {
            setValuepresent(true)
        }

        else {
            setValuepresent(false)
            setalarmnamepresent(false)
            if (allArray.length == 1) {
                setAllArr(allArray.map((element) => {
                    if (element.id === tempid) {
                        return {
                            ...element, id: tempid, rule: AlarmRules, device_data_profile: onDataProfile, alarm_parameter: AlarmParameter, alarm_condition: AlarmCondValue, alarm_value: onAlarmValue,

                        }
                    }
                    return element;
                }))
                // toast('Alarm updated successfully', {
                //     position: "top-right",
                //     autoClose: 2000,
                //     hideProgressBar: false,
                //     closeOnClick: true,
                //     pauseOnHover: true,
                //     draggable: true,
                //     progress: undefined,
                //     theme: "light",
                //     });
            }
            else {
                // checkingVriable3 = allArray.filter((value)=>value.id == disablerule)
                // console.log("cccc", checkingVriable3.find((value)=>value.device_data_profile === onDataProfile) != undefined)
                // let xxx = checkingVriable3.find((value)=>value.device_data_profile === onDataProfile) != undefined

                if (disablerule == 0) {
                    checkingVriable3 = allArray.find((value) => value.device_data_profile === onDataProfile) != undefined
                    // checkingVriable3 = allArray.find((value) => value.device_data_profile === onDataProfile || value.alarm_parameter === AlarmParameter) != undefined
                    // console.log("checkingVriable2", allArray.find((value) => value.device_data_profile === onDataProfile) != undefined);
                    if (!checkingVriable3) {
                        if (window.confirm('different data profile is not considered .Do you wish to delete')) {
                            allArray.length = 0
                        }
                    }
                    else {
                        setAllArr(allArray.map((element) => {
                            if (element.id === tempid) {
                                return {
                                    ...element, id: tempid, rule: AlarmRules, device_data_profile: onDataProfile, alarm_parameter: AlarmParameter, alarm_condition: AlarmCondValue, alarm_value: onAlarmValue,

                                }
                            }
                            return element;
                        }))
                        // toast('Alarm updated successfully', {
                        //     position: "top-right",
                        //     autoClose: 2000,
                        //     hideProgressBar: false,
                        //     closeOnClick: true,
                        //     pauseOnHover: true,
                        //     draggable: true,
                        //     progress: undefined,
                        //     theme: "light",
                        //     });
                    }
                }
                else {
                    // console.log("dddddddddddd");
                    setAllArr(allArray.map((element) => {
                        if (element.id === tempid) {
                            return {
                                ...element, id: tempid, rule: AlarmRules, device_data_profile: onDataProfile, alarm_parameter: AlarmParameter, alarm_condition: AlarmCondValue, alarm_value: onAlarmValue,

                            }
                        }
                        return element;
                    }))
                    // toast('Alarm updated successfully', {
                    //     position: "top-right",
                    //     autoClose: 2000,
                    //     hideProgressBar: false,
                    //     closeOnClick: true,
                    //     pauseOnHover: true,
                    //     draggable: true,
                    //     progress: undefined,
                    //     theme: "light",
                    //     });
                }

            }


            // setonNotify1(onNotify)
            SetDataProfile1(onDataProfile)
            // console.log("after_update", allArray)
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
    let alarmCount;
    let OnDeleteFunction = (e) => {


        setdisablerule()
        setAllArr((allArray) => {
            return allArray.filter((_, i) => i !== e)

        });

        // if(allArray.length == 0){
        //     setDisabled(true)

        // }
        // else{
        //     setDisabled(false)
        // }

        setonNotify("")
        setAlarmCondValue("")
        setAlarmParameter("")
        setAlarmValue("")
        setDataValue("")
        SetDataProfile("")
        setAlarmName("")
        setalarmnameval(false)
        setalarmnameval1(false)
        setalarmnameval2(false)
        setonAlarmUpdate(true)
        setdevicedataproval(false)
        setalarmparameternameval(false)
        setalarmconditionval(false)
        setdatatypeval(false)
        setalarmval(false)
        setalarmval1(false)
        setalarmRule(false)
        setalarmnotificationval(false)
        setalarmnotificationval1(false)
        setOnBtnChange(true)
    }

    function cancel() {
        history.push('/admin/DeviceAlarm');
    }
    const handleOnSearch = (string, results) => {
        // console.log(string, results);
    };

    const handleOnHover = (result) => {
        // console.log(result);
    };

    const handleOnSelect = (item) => {
        // console.log("selected", item);
        setAlarmValue(item.title)
        setalarmval(false)
        setalarmval1(false)
    };

    const handleOnFocus = () => {
        // console.log("Focused");
    };

    const handleOnClear = () => {
        // console.log("Cleared");
    };
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
                                                        id="input-address"
                                                        placeholder="Enter alarm name"
                                                        type="text"

                                                    />
                                                    {alarmnameval ? <td style={{ color: "red" }}>Please enter alarm name</td> : null}
                                                    {alarmnamepresent ? <td style={{ color: "red" }}>Alarm name  already present</td> : null}
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
                                                    // value={onNotify}
                                                    />
                                                    {alarmnotificationval ? <td style={{ color: "red" }}>Please enter alarm notification</td> : null}
                                                    {alarmnotificationval1 ? <td style={{ color: "red" }}>Please remove invaild characters</td> : null}
                                                </FormGroup>

                                            </Col>
                                            {
                                                allArray.length == 0 || disablerule == 0 ?
                                                    <Col lg="4" >
                                                        <FormGroup>
                                                            <label
                                                                className="form-control-label"
                                                                htmlFor="input-country"
                                                            >
                                                                Rule
                                                            </label>
                                                            <Input type="" className='text-dark' name="select" id="exampleSelect" disabled>
                                                                {/* disabled={disabled} */}
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
                                                                <option value="" >Select rules</option>
                                                                {/* <option value={AlarmRules}  >AND</option>
                                                            <option value={AlarmRules}  >OR</option> */}
                                                                {
                                                                    AlarmRules1.map((item, index) => {
                                                                        return <>
                                                                            <option key={index} value={item}>{item}</option>
                                                                        </>
                                                                    })
                                                                }
                                                            </Input>
                                                            {alarmRule ? <td style={{ color: "red" }}>* Please enter alarm rule</td> : null}
                                                            {/* {alarmRule1 ? <td style={{ color: "red" }}>* Please  rule</td> : null} */}
                                                        </FormGroup>
                                                    </Col>


                                            }



                                        </Row>
                                        <Row className='mt-5'>
                                            {
                                                allArray.length == 0 || disablerule == 0 ?

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
                                                            {devicedataproval ? <td style={{ color: "red" }}>* Please enter data profile</td> : null}
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

                                            <Col lg="4">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-country"
                                                    >
                                                        Alarm parameter
                                                    </label>
                                                    {/*  <Input type="select" onChange={OnAlarmParameter} value={AlarmParameter} className='text-dark' name="select" id="exampleSelect">
                                                        <option value="" selected disabled >Select parameter</option>
                                                        {secondary == 1 ? <> {custom_data.map((item, index) => {

                                                            return <option value={item.parameter} key={index} >{item.parameter}</option>

                                                        })}</> : <> <option value="number" className='text-dark' disabled>Please select data profile</option></>}
                                                    </Input> */}
                                                    {/* {console.log("onlike",AlarmParameter)} */}

                                                    <Input type="select" onChange={OnAlarmParameter} value={AlarmParameter} className='text-dark' name="select" id="exampleSelect">
                                                        <option value="" selected disabled >Select parameter</option>
                                                        <> {custom_data.map((item, index) => {

                                                            return <option key={index} value={item.parameter}  >{item.parameter}({item.data_type})</option>

                                                        })}</>
                                                    </Input>
                                                    {/* {custom_data.map(item =>(
    <option value={[item.data_type, item.parameter]}>{item.parameter}({item.data_type})</option>
))}    */}
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
                                                        Alarm  condition
                                                    </label>
                                                    <Input type="select" onChange={OnAlarmCondition} value={AlarmCondValue} className='text-dark' name="select" id="exampleSelect">
                                                        <option value="" selected disabled>Select alarm condition</option>
                                                        {/* {console.log("itemsddddddd", editValue1)} */}
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
                                                        value={onAlarmValue}
                                                        id=" AlarmValue"
                                                        placeholder="Enter alarm value"
                                                        type="text"
                                                    />
                                                    {alarmval ? <td style={{ color: "red" }}>Please enter alarm value</td> : null}
                                                    {Valuepresent ? <td style={{ color: "red" }}>Value already present</td> : null}
                                                    {/* {alarmval1 ? <td style={{ color: "red" }}>Please remove invaild characters</td> : null} */}
                                                </FormGroup>
                                            </Col>
                                            {/* <Col lg="6">
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

                                            </Col> */}
                                        </Row>
                                    </div>
                                </Form>

                                {
                                    allArray.map((item, index1) => {
                                        return <div key={index1} class="row">
                                            <div class="col-md-1 mb-4">
                                                <div class="form-outline datepicker">

                                                    <td className='text-dark'>{index1 + 1 + ')'}</td>
                                                </div>
                                            </div>
                                            <div class="col-md-1 mb-4">
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
                                            <div class="col-md-3 mb-4">
                                                <div class="form-outline datepicker">
                                                    <td className='text-dark'>{item.alarm_parameter}</td>
                                                </div>
                                            </div>
                                            <div class="col-md-1 mb-4">
                                                <div class="form-outline datepicker">
                                                    <td className='text-dark'>{item.alarm_condition}</td>
                                                </div>
                                            </div>
                                            <div class="col-md-2 mb-4">
                                                <div class="form-outline datepicker">
                                                    <td className='text-dark'>{item.data_type}</td>
                                                </div>
                                            </div>
                                            <div class="col-md-2 mb-4">
                                                <div class="form-outline datepicker">
                                                    <td className='text-dark'>{item.alarm_value}</td>
                                                </div>
                                            </div>

                                            <div class="col-md-1 mb-4">
                                                <div class="form-outline datepicker">
                                                    <button className='btn btn-primary btn-sm ml-4' onClick={() => { editAlarm(index1) }}>Edit</button>
                                                </div>
                                            </div>
                                            {
                                                allArray.length == 1 ?

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




                                        </div>
                                    })
                                }
                                <Col>
                                    {onAlarmUpdate ? <Button color="primary" className='mt-3' size="sm" onClick={AllFuncSave}>Add</Button> : <Button color="warning" className='mt-3' size="sm" onClick={UpdateFuncSave}>update</Button>}
                                    {onAlarmUpdate ? <></> : <Button color="danger" className='mt-3' size="sm" onClick={changeall}>Cancel</Button>}
                                </Col>
                                <div >
                                    <Row className='ml-3'>
                                        <Col style={{ textAlign: "right" }} className='mt-3'>
                                            {/* {
                                                allArray.length > 0 ? <> <Button color="success" size="sm" onClick={backend}>submit</Button>
                                                    <Button color="danger" size="sm" onClick={cancel}>cancel</Button> </> : <Button color="danger" size="sm" onClick={cancel}>cancel</Button>
                                            } */}


                                            <div className="col-md-12">
                                                {OnChangeBtn == 1 ? <>{allArray.length > 0 ? <> <button type="submit" className="btn btn-success btn-sm mb-2" onClick={backend}>Submit</button>
                                                    <button type="submit" className="btn  btn-danger btn-sm mb-2" onClick={cancel}>cancel</button></> : <button type="submit" className="btn  btn-danger btn-sm mb-2" onClick={cancel}>cancel</button>}
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
            </Container >

        </>
    )
}
