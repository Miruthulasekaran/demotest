
import React, { useState, useEffect } from 'react'
// import { Card, CardBody, CardTitle, Container, Row, Col, FormGroup, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
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
  Modal, ModalHeader, ModalBody, ModalFooter
} from "reactstrap";
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { decode as base64_decode, encode as base64_encode } from 'base-64';
import Header from "components/Headers/Header.js";
import ApiService from '../Service/ApiService';
export default function DeviceDataProfile() {
  const [Onorganizationname, setorganizationname] = useState("")
  const [Onorganizationname1, setorganizationname1] = useState("")
  const [Onorganizationname2, setorganizationname2] = useState("")
  const [OnAddress, setAddress] = useState("");
  const [OnAddress1, setAddress1] = useState("");
  const [OnAddress2, setAddress2] = useState("");
  const [DefaultContactName, setDefaultContactName] = useState("")
  const [DefaultContactName1, setDefaultContactName1] = useState("")
  const [DefaultContactName2, setDefaultContactName2] = useState("")
  const [Defaultemail, setDefaultemail] = useState("")
  const [Defaultemail1, setDefaultemail1] = useState("")
  const [phone, setphone] = useState()
  const [phone1, setphone1] = useState()
  const [DefaultDesignation, setDefaultDesignation] = useState("")
  const [DefaultDesignation1, setDefaultDesignation1] = useState("")
  const [DefaultDesignation2, setDefaultDesignation2] = useState("")
  // contact modal
  const [modalContactPersonname, setmodalContactPersonname] = useState("")
  const [ModalContactEmailId, setModalContactEmailId] = useState("")
  const [ModalDesignation, setModalDesignation] = useState("")
  const [ModalPhone, setModalPhone] = useState("")

  const [modalContactPersonname1, setmodalContactPersonname1] = useState("")
  const [modalContactPersonname2, setmodalContactPersonname2] = useState("")
  const [ModalContactEmailId1, setModalContactEmailId1] = useState("")
  const [ModalDesignation1, setModalDesignation1] = useState("")
  const [ModalDesignation2, setModalDesignation2] = useState("")
  const [ModalPhone1, setModalPhone1] = useState()


  const [ContactArray, setContactArray] = useState([])

  const [savedContacts, setsavedContacts] = useState([])

  const [modal, setmodal] = useState(false)
  const [modal1, setmodal1] = useState(false)
  const [onChange, setonChange] = useState(true)
  const [tempvalue, settempvalue] = useState("")
  const [AllValues, setAllValues] = useState([])

  //update contact modal
  const [UpdatecontactEmail, setUpdatecontactEmail] = useState("")
  const [Updatecontactname, setUpdatecontactname] = useState("")
  const [UpdatecontactPhonenumber, setUpdatecontactPhonenumber] = useState("")
  const [Updatecontactdesignation, setUpdatecontactdesignation] = useState("")

  const [UpdatecontactEmail1, setUpdatecontactEmail1] = useState("")
  const [Updatecontactname1, setUpdatecontactname1] = useState("")
  const [Updatecontactname2, setUpdatecontactname2] = useState("")
  const [UpdatecontactPhonenumber1, setUpdatecontactPhonenumber1] = useState("")
  const [Updatecontactdesignation1, setUpdatecontactdesignation1] = useState("")
  const [Updatecontactdesignation2, setUpdatecontactdesignation2] = useState("")
  // notificTION modal
  const [modalNotificationContactPersonname, setmodalNotificationContactPersonname] = useState("")
  const [modalNotificationContactPersonemail, setmodalNotificationContactPersonemail] = useState("")
  const [modalNotificationContactPersonDesignation, setmodalNotificationContactPersonDesignation] = useState("")
  const [modalNotificationContactPersonnumber, setmodalNotificationContactPersonnumber] = useState("")


  const [modalNotificationContactPersonname1, setmodalNotificationContactPersonname1] = useState("")
  const [modalNotificationContactPersonname2, setmodalNotificationContactPersonname2] = useState("")
  const [modalNotificationContactPersonemail1, setmodalNotificationContactPersonemail1] = useState("")
  const [modalNotificationContactPersonDesignation1, setmodalNotificationContactPersonDesignation1] = useState("")
  const [modalNotificationContactPersonDesignation2, setmodalNotificationContactPersonDesignation2] = useState("")
  const [modalNotificationContactPersonnumber1, setmodalNotificationContactPersonnumber1] = useState("")


  const [notificationarray, setnotificationarray] = useState([])
  const [savenotificationArray, setsavenotificationArray] = useState([])
  const [tempNotify, settempNotify] = useState("")


  // Static notification
  const [NotificationPerson, setNotificationPerson] = useState("")
  const [NotificationPerson1, setNotificationPerson1] = useState("")
  const [NotificationPerson2, setNotificationPerson2] = useState("")
  const [NotificationEmail, setNotificationEmail] = useState("")
  const [NotificationEmail1, setNotificationEmail1] = useState("")
  const [NotificationDesignation, setNotificationDesignation] = useState("")
  const [NotificationDesignation1, setNotificationDesignation1] = useState("")
  const [NotificationDesignation2, setNotificationDesignation2] = useState("")
  const [NotificationPhone, setNotificationPhone] = useState()
  const [NotificationPhone1, setNotificationPhone1] = useState()
  const history = useHistory();
  const [clearPrimaryState, setclearPrimaryState] = useState()

  //Update Notification
  const [UpdateNotificationPerson, setUpdateNotificationPerson] = useState("")
  const [UpdateNotificationEmail, setUpdateNotificationEmail] = useState("")
  const [UpdateNotificationDesignation, setUpdateNotificationDesignation] = useState("")
  const [UpdateNotificationPhone, setUpdateNotificationPhone] = useState("")

  const [UpdateNotificationPerson1, setUpdateNotificationPerson1] = useState("")
  const [UpdateNotificationPerson2, setUpdateNotificationPerson2] = useState("")
  const [UpdateNotificationEmail1, setUpdateNotificationEmail1] = useState("")
  const [UpdateNotificationDesignation1, setUpdateNotificationDesignation1] = useState("")
  const [UpdateNotificationDesignation2, setUpdateNotificationDesignation2] = useState("")
  const [UpdateNotificationPhone1, setUpdateNotificationPhone1] = useState("")


  const [userprofilechange, setuserprofilechange] = useState("")

  const [userprofile, setuserprofile] = useState([])
  const [FindedData, setFindedData] = useState([])
  const [DataObject, setDataObject] = useState()

  let pattern =  /^(\w+\s?)*\s*$/g;
  let pattern1 = /^(\w+\s?)*\s*$/g;
  let pattern2 = /^(\w+\s?)*\s*$/g;
  let pattern3 = /^(\w+\s?)*\s*$/g;
  let pattern4 = /^(\w+\s?)*\s*$/g;
  let pattern5 = /^(\w+\s?)*\s*$/g;
  let pattern6 = /^(\w+\s?)*\s*$/g;
  let pattern7 = /^(\w+\s?)*\s*$/g;
  let pattern8 = /^(\w+\s?)*\s*$/g;
  let pattern9 = /^(\w+\s?)*\s*$/g;
  let pattern10 = /^(\w+\s?)*\s*$/g;
  let pattern11 = /^(\w+\s?)*\s*$/g;
  let pattern12 = /^(\w+\s?)*\s*$/g;
  let pattern13 = /^(\w+\s?)*\s*$/g;
  let file = document.getElementById("fileName");

  let setonChangeImage = (e) => {
    console.log("iconimage", e.target.value)
    seticonimg1(false)
    const data = new FileReader()


    data.readAsDataURL(e.target.files[0])
    // setimageVal(false)
    var fileName = file.value,
      idxDot = fileName.lastIndexOf(".") + 1,
      extFile = fileName.substr(idxDot, fileName.length).toLowerCase();
    if (extFile == "jpg" || extFile == "jpeg" || extFile == "png" || extFile == "gif" || extFile == "jfif" || extFile == "webp") {
      data.addEventListener('load', () => {
        seticonimg(data.result)
      })
    } else {
      alert("Only jpg/jpeg,png,gif,jfif,webp files are allowed!");
      file.value = "";
    }
  };
  //add functionality
  let ProfileFind = (e) => {
    console.log("ïnn")
    setuserprofilechange(e)
    let Finddeviceprofile = userprofile.find((value, i) => value.user_profile_name === e);
    setFindedData(Finddeviceprofile.custom_data)
    console.log("this is the finded data", Finddeviceprofile)
    setuserprofile1(false)
  }
  useEffect(() => {
    let Finddeviceprofile = userprofile.find((value, i) => value.user_profile_name === userprofilechange);
    // setDataObject({ id: Finddeviceprofile.user_profile_id, profile: Finddeviceprofile.user_profile_name, customData: Finddeviceprofile.custom_data })
    setDataObject([Finddeviceprofile])
    console.log("this is them DataObject", DataObject)
  }, [userprofilechange])
  let saveContact = () => {


    setmodal(!modal);
    setContactArray(savedContacts)
    // }
  }
  let toggle = () => {
    setmodal(!modal);
  }
  let AddContactModal = () => {
    if (modalContactPersonname == "" && ModalContactEmailId == "" && ModalDesignation == "" && ModalPhone == "") {
      setmodalContactPersonname1(true)
      setModalContactEmailId1(true)
      setModalDesignation1(true)
      setModalPhone1(true)
    }
    else if (modalContactPersonname.trim() == "") {
      setmodalContactPersonname1(true)
    }
    else if (!/^(\w+\s?)*\s*$/g.test(modalContactPersonname)) {
      setmodalContactPersonname2(true)
    }
    else if (ModalContactEmailId.trim() == "") {
      setModalContactEmailId1(true)
    }
    else if (ModalDesignation.trim() == "") {
      setModalDesignation1(true)
    }
    else if (!/^(\w+\s?)*\s*$/g.test(ModalDesignation)) {
      setModalDesignation2(true)
    }
    else if (ModalPhone == "") {
      setModalPhone1(true)
    }
    else {
      let createObj = { contactperson: modalContactPersonname, contactEmail: ModalContactEmailId, contactDesignation: ModalDesignation, contactPhone: ModalPhone }
      setsavedContacts((oldvalues) => {
        return [...oldvalues, createObj]
      })
      setmodalContactPersonname("")
      setModalContactEmailId("")
      setModalDesignation("")
      setModalPhone("")

    }

  }
  let editContactPerson = (id) => {
    settempvalue(id)
    setonChange(false)
    let Finddeviceprofile = ContactArray.find((value, i) => value.contactEmail === id);
    console.log("console", Finddeviceprofile)
    setUpdatecontactEmail(Finddeviceprofile.contactEmail)
    setUpdatecontactname(Finddeviceprofile.contactperson)
    setUpdatecontactPhonenumber(Finddeviceprofile.contactPhone)
    setUpdatecontactdesignation(Finddeviceprofile.contactDesignation)
  }
  let cancelOrganiziation = () => {
    settempvalue("")
  }
  let updateOrganiiziation = () => {
    if (Updatecontactname == "" && UpdatecontactEmail == "" && Updatecontactdesignation == "" && UpdatecontactPhonenumber == "") {
      setUpdatecontactname1(true)
      setUpdatecontactEmail1(true)
      setUpdatecontactdesignation1(true)
      setUpdatecontactPhonenumber1(true)
    }
    else if (Updatecontactname.trim() == "") {
      setUpdatecontactname1(true)
    }
    else if (!/^(\w+\s?)*\s*$/g.test(Updatecontactname)) {
      setUpdatecontactname2(true)
    }
    else if (UpdatecontactEmail.trim() == "") {
      setUpdatecontactEmail1(true)
    }
    else if (Updatecontactdesignation.trim() == "") {
      setUpdatecontactdesignation1(true)
    }
    else if (!/^(\w+\s?)*\s*$/g.test(Updatecontactdesignation)) {
      setUpdatecontactdesignation2(true)
    }
    else if (UpdatecontactPhonenumber == "") {
      setUpdatecontactPhonenumber1(true)
    } else {
      setContactArray(ContactArray.map((element) => {
        if (element.contactEmail === tempvalue) {
          return { ...element, contactperson: Updatecontactname, contactEmail: UpdatecontactEmail, contactDesignation: Updatecontactdesignation, contactPhone: UpdatecontactPhonenumber }
        }
        return element;
      }))
      settempvalue("")
    }

  }



  //Notification
  let toggle1 = () => {
    setmodal1(!modal1);
  }
  let OnsaveNotify = () => {

    setnotificationarray(savenotificationArray)
    setmodal1(!modal1);


  }
  let AddNotificationModal = () => {
    if (modalNotificationContactPersonname == "" && modalNotificationContactPersonemail == "" &&
      modalNotificationContactPersonDesignation == "" && modalNotificationContactPersonnumber == "") {
      setmodalNotificationContactPersonname1(true)
      setmodalNotificationContactPersonemail1(true)
      setmodalNotificationContactPersonDesignation1(true)
      setmodalNotificationContactPersonnumber1(true)
    }
    else if (modalNotificationContactPersonname.trim() == "") {
      console.log("lkcgbjkldgjhldjhl");
      setmodalNotificationContactPersonname1(true)
    }

    else if (!/^(\w+\s?)*\s*$/g.test(modalNotificationContactPersonname)) {
      setmodalNotificationContactPersonname2(true)
    }
    else if (modalNotificationContactPersonemail.trim() == "") {
      setmodalNotificationContactPersonemail1(true)
    }
    else if (modalNotificationContactPersonDesignation.trim() == "") {
      setmodalNotificationContactPersonDesignation1(true)
    }
    else if (!/^(\w+\s?)*\s*$/g.test(modalNotificationContactPersonDesignation)) {
      setmodalNotificationContactPersonDesignation2(true)
    }
    else if (modalNotificationContactPersonnumber == "") {
      setmodalNotificationContactPersonnumber1(true)
    }
    else {
      let createObj = {
        Notificationcontactperson: modalNotificationContactPersonname, NotificationcontactEmail: modalNotificationContactPersonemail,
        NotificationcontactDesignation: modalNotificationContactPersonDesignation, NotificationcontactPhone: modalNotificationContactPersonnumber
      }
      setsavenotificationArray((oldvalues) => {
        return [...oldvalues, createObj]
      })
      setmodalNotificationContactPersonname("")
      setmodalNotificationContactPersonemail("")
      setmodalNotificationContactPersonDesignation("")
      setmodalNotificationContactPersonnumber("")
    }

  }


  //notify edit
  let editNotificationPerson = (id) => {
    let Finddeviceprofile = notificationarray.find((value, i) => value.NotificationcontactEmail === id);
    console.log("finded", Finddeviceprofile)
    settempNotify(Finddeviceprofile.NotificationcontactEmail)
    // let createObj = { Notificationcontactperson: modalNotificationContactPersonname, NotificationcontactEmail: modalNotificationContactPersonemail, NotificationcontactDesignation: modalNotificationContactPersonDesignation, NotificationcontactPhone: modalNotificationContactPersonnumber }
    setUpdateNotificationPerson(Finddeviceprofile.Notificationcontactperson)
    setUpdateNotificationEmail(Finddeviceprofile.NotificationcontactEmail)
    setUpdateNotificationDesignation(Finddeviceprofile.NotificationcontactDesignation)
    setUpdateNotificationPhone(Finddeviceprofile.NotificationcontactPhone)
  }
  //Notify Update
  let UpdateNotification = () => {
    if (UpdateNotificationPerson.trim() == "") {
      setUpdateNotificationPerson1(true)
    }

    else if (!/^(\w+\s?)*\s*$/g.test(UpdateNotificationPerson)) {
      setUpdateNotificationPerson2(true)
    }
    else if (UpdateNotificationEmail.trim() == "") {
      setUpdateNotificationEmail1(true)
    }
    else if (UpdateNotificationDesignation.trim() == "") {
      setUpdateNotificationDesignation1(true)
    }
    else if (!/^(\w+\s?)*\s*$/g.test(UpdateNotificationDesignation)) {
      setUpdateNotificationDesignation2(true)
    }
    else if (UpdateNotificationPhone == "") {
      setUpdateNotificationPhone1(true)
    }
    else {
      setnotificationarray(notificationarray.map((element) => {
        if (element.NotificationcontactEmail === tempNotify) {
          return {
            ...element, Notificationcontactperson: UpdateNotificationPerson, NotificationcontactEmail: UpdateNotificationEmail,
            NotificationcontactDesignation: UpdateNotificationDesignation, NotificationcontactPhone: UpdateNotificationPhone
          }
        }
        return element;
      }))
      settempNotify("")
    }

  }
  let NotifyCancel = () => {
    settempNotify("")
  }


  useEffect(() => {

    //for listing user profile
    ApiService.ListUser_profile().then((resp) => {
      setuserprofile(resp)
    })


  }, [])


  const [users, setusers] = useState([])
  const [secondaryUser, setsecondaryUser] = useState([])
  const [value, setvalue] = useState(true)

  useEffect(() => {

    ApiService.userlist().then((resp) => {

      console.log("resssp", resp)
      resp.forEach((user) => {

        if (user.organization == null) {
          console.log("loop", user)

          if (value) {   //=> here the values is for not rerender and push the values once again

            setusers((old) => {

              // console.log("userwww", user)
              return [...old, user]
            })
            setsecondaryUser((old) => {
              return [...old, user]
            })
          }
        }

      })
    })

    setvalue(false)
  }, [])


  //Primary user Array
  const [PrimaryUser, setPrimaryUser] = useState([])
  const [primartState, setPrimaryState] = useState("")
  const [newPrimaryObj, setPrimaryObj] = useState([])
  const [valuePrimary, setvaluePrimary] = useState("")
  const [primary, setprimary] = useState("")
  const [userprofile1, setuserprofile1] = useState("")

  let OnprimaryUser = (e) => {

    setclearPrimaryState(e)
    setPrimaryState("")
    console.log("e", e)
    let Finddeviceprofile = users.find((value, i) => value.user_id == e);
    console.log("finded value primary", Finddeviceprofile)
    let primaryObj = { id: Finddeviceprofile.user_id, username: Finddeviceprofile.username };
    setPrimaryObj((oldvaluesPrimary) => {
      return [...oldvaluesPrimary, Finddeviceprofile]
    })
    PrimaryUser.find(vendor => vendor['id'] === Finddeviceprofile.user_id) !== undefined ? window.alert("User already exists") :
      setPrimaryUser((oldvalues) => {
        return [...oldvalues, primaryObj]
      })
    console.log("oldvalue", PrimaryUser)

    setprimary(false)
  }


  useEffect(() => {
    console.log("secondary user", PrimaryUser)
    PrimaryUser.forEach((word) => {
      console.log("word", word)
      setsecondaryUser(secondaryUser.filter((value, i) => value.user_id !== word.id))
    })
  }, [PrimaryUser])

  // general user
  const [generalUser, setgeneralUser] = useState([])
  const [newGeneralObj, setgeneralObj] = useState([])

  // for null
  const [GeneralNull, setGeneralNull] = useState([])

  const [tempId, settempId] = useState()

  let OngeneralUser = (e) => {

    settempId(e)
    console.log("es", e)
    let Finddeviceprofile = secondaryUser.find((value, i) => {
      return value.user_id == e
    });
    console.log("general user", Finddeviceprofile)

    setgeneralObj((old) => {
      return [...old, Finddeviceprofile]
    })
    let generalObj = { id: Finddeviceprofile.user_id, username: Finddeviceprofile.username };
    generalUser.find(vendor => vendor['id'] === Finddeviceprofile.user_id) !== undefined ? window.alert("User already exists") :
      setgeneralUser((oldvalues) => {
        return [...oldvalues, generalObj]
      })
  }
  useEffect(() => {
    generalUser.forEach((word) => {
      console.log("word", word)
      setusers(users.filter((value, i) => value.user_id !== word.id))
      // console.log("result", result)
    })
  }, [generalUser])

  //Set User null
  const [UserCheck, setUserCheck] = useState([])

  //delete primary user
  let OndeletePrimaryUser = (e) => {



    console.log("Ondelete primary user", e)
    setPrimaryObj((newPrimaryObj) => {
      return newPrimaryObj.filter((value) => value.user_id !== e)
    })
    let Finddeviceprofile = users.find((value, i) => {
      console.log("valuesss", value)
      return value.user_id === e
    });
    console.log("deleting", Finddeviceprofile)
    setPrimaryUser((PrimaryUser) => {

      return PrimaryUser.filter((value, i) => value.id !== e);
    });
    console.log("e", e)

    //for setting user to null
    setUserCheck((oldvalues) => {
      return [...oldvalues, Finddeviceprofile]
    })

    setsecondaryUser((oldvalues) => {
      return [...oldvalues, Finddeviceprofile]
    })

    if (Finddeviceprofile.user_id == clearPrimaryState) {
      document.getElementById("exampleSelect4").value = ""
    }

  }



  //delete general user
  let OndeletegeneralUser = (e) => {
    let Finddeviceprofile = secondaryUser.find((value, i) => {
      console.log("valuesss", value)
      return value.user_id === e
    });

    setgeneralObj((newGeneralObj) => {
      return newGeneralObj.filter((value, i) => value.user_id !== e)
    })

    setgeneralUser((generalUser) => {
      return generalUser.filter((value, i) => value.id !== e);
    });
    setusers((oldvalues) => {
      return [...oldvalues, Finddeviceprofile]
    })

    setGeneralNull((oldvalues) => {
      return [...oldvalues, Finddeviceprofile]
    })

    console.log("gern", tempId)

    if (Finddeviceprofile.user_id == tempId) {
      console.log("secondaryUser", secondaryUser)
      document.getElementById("exampleSelect2").value = ""


    }
  }

  //for mapping
  const [primaryArr, setprimaryArr] = useState()
  const [Note, setNote] = useState(false)
  const [Note1, setNote1] = useState(false)

  const [email, setemail] = useState([])
  const [sms, setsms] = useState([])
  const [FindEmail, setFindEmail] = useState("")
  const [FindEmail1, setFindEmail1] = useState(false)
  const [FindEmail2, setFindEmail2] = useState("")
  const [FindSms, setFindSms] = useState([])
  const [ËmailValue, setËmailValue] = useState({})
  const [FindSms1, setFindSms1] = useState(false)
  const [FindSms2, setFindSms2] = useState(false)
  const [disabled, setDisabled] = useState(true)
  const [disabled1, setDisabled1] = useState(true)
  useEffect(() => {
    fetch("http://192.168.0.113:8090/api/v1/email_config", {
    }).then((result) => {
      result.json().then((resp) => {
        setemail(resp)

        console.log("EMAIL", resp);
      })
    })
  }, [])
  let EmailFind = (e) => {
    let FindEmailMessage = email.find((value, i) => value.content_name === e);
    console.log("email", FindEmailMessage)
    setFindEmail1(true)
    setFindEmail2(false)
    setFindEmail(FindEmailMessage.email_content)
    setNote(false)

  }

  let onMessage = (e) => {
    let FindEmailMessage = email.find((value, i) => value.content_name === e);
    console.log("email", FindEmailMessage)
    setNote(true)
    setFindEmail(e)


  }
  let EmailEdit = (e) => {
    // setËmailValue(e)
    // setFindEmail(e)
    setDisabled(false)
    onMessage()
    // setFindEmail(e)
    console.log("ËmailValue", ËmailValue);
    setFindEmail2(false)
  }
  let SMSFind = (e) => {
    let FindSMsMessage = sms.find((value, i) => value.content_name === e);
    // console.log("email", FindEmailMessage)
    setFindSms1(true)
    setFindSms2(false)
    // setFindSms2(true)
    setFindSms(FindSMsMessage.sms_content)
    setNote1(false)
    // console.log("FindEmail", FindEmailMessage.email_content)
  }
  let onMessage1 = (e) => {
    let FindSMsMessage = sms.find((value, i) => value.content_name === e);
    // console.log("email", FindEmailMessage)
    // setFindSms1(true)
    // setFindSms([FindSMsMessage.sms_content])
    setFindSms(e)
    setNote1(true)

    setFindSms2(true)

  }
  let smsEdit = (e) => {
    // setËmailValue(e)
    // setFindEmail(e)
    setDisabled1(false)
    onMessage1()
    setFindSms2(false)
    // setFindEmail(e)
    // console.log("ËmailValue", ËmailValue);
  }
  useEffect(() => {
    fetch("http://192.168.0.113:8090/api/v1/sms_config", {
    }).then((result) => {
      result.json().then((resp) => {
        setsms(resp)

        console.log("SMS", resp);
      })
    })
  }, [FindEmail])
  //send all data

  const [additionalFieldsArray, setadditionalFieldsArray] = useState([])
  const [userprofileArray, setuserprofileArray] = useState([])
  //Onsubmit action
  const [AdditionalArray, setAdditionalArray] = useState([])
  const [createFinalObj, setcreateFinalObj] = useState()

  useEffect(() => {
    let createcontactPersonObj = {
      contactName: DefaultContactName, contactemail: Defaultemail, contactDesignation: DefaultDesignation, contactphone: phone
    }
    let createNotificationContactObj = {
      NotifycontactName: NotificationPerson, Notifycontactemail: NotificationEmail, NotifycontactDesignation: NotificationDesignation, Notifycontactphone: NotificationPhone
    }
    setcreateFinalObj({
      created_by: "test", updated_by: "test", organization_logo: iconimg, organization_name: Onorganizationname, address: OnAddress,
      contact_person: createcontactPersonObj, notification_profile: createNotificationContactObj, additional_contacts: [{
        contact_person: ContactArray,
        notification_profile: notificationarray
      }],
      organization_profile: null, user_profile: DataObject, primary_users: newPrimaryObj, general_users: newGeneralObj,
      "selected_sms": {
        "content": FindSms
      }

      , "selected_email": {
        "content": FindEmail
      }
    })
  }, [ContactArray, notificationarray,
    DefaultContactName,
    Defaultemail,
    DefaultDesignation,
    phone,
    NotificationPerson,
    NotificationEmail,
    NotificationDesignation,
    NotificationPhone, FindedData,
    Onorganizationname,
    OnAddress,
    DataObject,
    newGeneralObj,
    iconimg,
    newPrimaryObj,
    FindSms,
    FindEmail
  ])
  // var email = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let onSubmit = () => {


    console.log("hisisfibak", createFinalObj)
    let user_profile = FindedData;
    if (Onorganizationname.trim() == "") {
      setorganizationname1(true)
    }
    else if (!/^(\w+\s?)*\s*$/g.test(Onorganizationname)) {
      setorganizationname2(true)
    }
    else if (OnAddress.trim() == "") {
      setAddress1(true)
    }
    else if (!/^(\w+\s?)*\s*$/g.test(OnAddress)) {
      setAddress2(true)
    }
    else if (iconimg == "") {
      seticonimg1(true)
    }
    else if (DefaultContactName.trim() == "") {
      setDefaultContactName1(true)
    }
    else if (!/^(\w+\s?)*\s*$/g.test(DefaultContactName)) {
      setDefaultContactName2(true)
    }
    else if (Defaultemail.trim() == "") {
      setDefaultemail1(true)
    }
    else if (DefaultDesignation.trim() == "") {
      setDefaultDesignation1(true)
    }
    else if (!/^(\w+\s?)*\s*$/g.test(DefaultDesignation)) {
      setDefaultDesignation2(true)
    }
    else if (phone.trim() == "") {
      setphone1(true)
    }
    else if (NotificationPerson.trim() == "") {
      setNotificationPerson1(true)
    }
    else if (!/^(\w+\s?)*\s*$/g.test(NotificationPerson)) {
      setNotificationPerson2(true)
    }
    else if (NotificationEmail.trim() == "") {
      setNotificationEmail1(true)
    }
    else if (!/^(\w+\s?)*\s*$/g.test(NotificationDesignation)) {
      setNotificationDesignation2(true)
    }
    else if (NotificationDesignation.trim() == "") {
      setNotificationDesignation1(true)
    }
    else if (NotificationPhone.trim() == "") {
      setNotificationPhone1(true)
    }
    
    
    else if ( users.length == 0 ? null: PrimaryUser == "") {
      setprimary(true)
    }
    // {
    //   secondaryUser != "" ? <option value="" selected disabled>Select general user</option> : <option value="" selected disabled>All users mapped</option>
    // }
    else if (FindedData == "") {
      setuserprofile1(true)
    }
    else if (FindSms == "") {
      setFindSms2(true)
    }
    else if (FindEmail == "") {
      setFindEmail2(true)
    }








    else {
      ApiService.organizationAdd(createFinalObj).then((resp) => {
        console.log("sajajajajajajajaj", resp);
        if (resp.message) {
          //  alert("organization already exists !")
           return  toast.error('Organization already exists !', {
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
        let createObj = {
          updated_by: "testresp",
          organization: resp,
          roles: "primary"
        }
        let creategeneralObj = {

          updated_by: "testresp",
          organization: resp,
          roles: "general"

        }

        generalUser.forEach((data) => {
          console.log("nn")
          ApiService.Edit_UserOrganization_Role(data.id, creategeneralObj)
            .then((result) => {
              result.json().then((resp) => {
                console.log("secondary", resp);
              })
            })
        })

        PrimaryUser.forEach((primaryData) => {

          console.log("mm")

          ApiService.Edit_UserOrganization_Role(primaryData.id, creategeneralObj).then((result) => {
            result.json().then((resp) => {
              console.log("primary", resp);
            })
          })


        })
        toast('Organization added successfully', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
        history.push('/admin/OrganizationList');


      })
    }


  }

  const [iconimg, seticonimg] = useState("")
  const [iconimg1, seticonimg1] = useState(false)
  useEffect(() => {
    console.log("set icon", iconimg)
    // console.log("set iconD", base64_decode("iconimg"))
  }, [iconimg])
  function onCancel() {
    history.push('/admin/OrganizationList');
  }

  return (
    <>
      <Header />
      <div>
        <Modal size="lg" isOpen={modal} toggle={toggle} backdrop="static">
          <ModalHeader toggle={toggle}><h3>Add contact person</h3></ModalHeader>
          <ModalBody>
            <div className="pl-lg-4">
              <Row>
                <Col lg="6">
                  <FormGroup>
                    <label
                      className="form-control-label"
                      htmlFor="input-username"
                    >
                      Contact person name
                    </label>
                    <Input
                      className="form-control-alternative text-dark text-wrap"
                      id="input-username"
                      placeholder="Enter contact person name"
                      type="text"

                      onChange={e => {
                        setmodalContactPersonname(e.target.value);
                        setmodalContactPersonname1(false); setmodalContactPersonname2(false)
                      }}
                      value={modalContactPersonname}
                    />
                    {modalContactPersonname1 ? <td style={{ color: "red" }}>Please enter contact person name</td> : null}
                    {modalContactPersonname2 ? <td style={{ color: "red" }}>Please remove invaild characters</td> : null}
                  </FormGroup>
                </Col>
                <Col lg="6">
                  <FormGroup>
                    <label
                      className="form-control-label"
                      htmlFor="input-email"

                    >
                      Email address
                    </label>
                    <Input
                      className="form-control-alternative text-dark  text-wrap"
                      id="input-email"
                      placeholder="Enter email address"
                      type="email"

                      value={ModalContactEmailId} onChange={e => { setModalContactEmailId(e.target.value); setModalContactEmailId1(false) }}
                    />
                    {ModalContactEmailId1 ? <td style={{ color: "red" }}>Please enter email address</td> : null}
                  </FormGroup>
                </Col>

              </Row>
              <Row>
                <Col lg="6">
                  <FormGroup>
                    <label
                      className="form-control-label"
                      htmlFor="input-first-name"
                    >
                      Designation
                    </label>
                    <Input
                      className="form-control-alternative text-dark text-wrap"
                      id="input-first-name"
                      placeholder="Enter designation"
                      type="text"

                      onChange={e => { setModalDesignation(e.target.value); setModalDesignation1(false); setModalDesignation2(false) }} value={ModalDesignation}
                    />
                    {ModalDesignation1 ? <td style={{ color: "red" }}>Please enter designation</td> : null}
                    {ModalDesignation2 ? <td style={{ color: "red" }}>Please remove invaild characters</td> : null}
                  </FormGroup>
                </Col>

                <Col lg="6">
                  <FormGroup>
                    <label
                      className="form-control-label"
                      htmlFor="input-last-name"
                    >
                      Phone number
                    </label>
                    <Input
                      className="form-control-alternative text-dark text-wrap"
                      id="input-last-name"
                      placeholder="Enter phone number "
                      type='number'

                      onChange={e => { setModalPhone(e.target.value); setModalPhone1(false) }} value={ModalPhone}
                    />
                    {ModalPhone1 ? <td style={{ color: "red" }}>Please enter phone number</td> : null}
                  </FormGroup>

                </Col>

              </Row>

              <Row>
                <Col>
                  <Button
                    color="primary"
                    size='sm'
                    onClick={AddContactModal}
                  >
                    Add
                  </Button>
                </Col>
              </Row>
              {
                savedContacts.map((item, index) => {

                  return <>
                    <hr />  <Row   >
                      <Col md="3" style={{ width: "6rem" }}>
                        <label className='text-wrap' style={{ width: "6rem" }} >{item.contactperson}</label>
                        {/* <input  value={item.contactperson} type='text' /> */}
                      </Col>
                      <Col md="3" style={{ width: "6rem" }}>
                        <label className='text-wrap' style={{ width: "6rem" }}>{item.contactEmail}</label>
                        {/* <input type='email'  value={item.contactEmail} /> */}
                      </Col>
                      <Col md="3" style={{ width: "6rem" }}>
                        <label className='text-wrap' style={{ width: "6rem" }}>{item.contactDesignation}</label>
                        {/* <input type='text' value={item.contactDesignation}/> */}
                      </Col>
                      <Col md="3" style={{ width: "6rem" }}>
                        <label className='text-wrap' style={{ width: "6rem" }}>{item.contactPhone}</label>
                        {/* <input type='number'value={item.contactPhone}/> */}
                      </Col>
                    </Row></>
                })
              }
            </div>
          </ModalBody>
          <ModalFooter>
            {
              savedContacts.length > 0 ? <>
                <Button color="success" size='sm' onClick={saveContact}>save</Button>{' '}
                <Button color="danger" size='sm' onClick={toggle}>Cancel</Button>
              </> : null
            }

          </ModalFooter>
        </Modal>
      </div>
      <div>
        <Modal size="lg" isOpen={modal1} toggle={toggle1} backdrop="static">
          <ModalHeader toggle={toggle1}><b><h3>Add notification contact</h3></b></ModalHeader>
          <ModalBody>
            <div className="pl-lg-4  ">
              <Row>
                <Col lg="6">
                  <FormGroup>
                    <label
                      className="form-control-label"
                      htmlFor="input-username"
                    >
                      Contact person name
                    </label>
                    <Input
                      className="form-control-alternative text-dark"
                      id="input-username"
                      placeholder="Enter contact person name"
                      type="text"
                      onChange={e => {
                        setmodalNotificationContactPersonname(e.target.value);
                        setmodalNotificationContactPersonname1(false); setmodalNotificationContactPersonname2(false)
                      }}
                      value={modalNotificationContactPersonname} />
                    {modalNotificationContactPersonname1 ? <td style={{ color: "red" }}>Please enter contact person name</td> : null}
                    {modalNotificationContactPersonname2 ? <td style={{ color: "red" }}>Please remove invaild characters</td> : null}
                  </FormGroup>
                </Col>
                <Col lg="6">
                  <FormGroup>
                    <label
                      className="form-control-label"
                      htmlFor="input-email"
                    >
                      Email address
                    </label>
                    <Input
                      className="form-control-alternative text-dark"
                      id="input-email"
                      placeholder="Enter email address"
                      type="email"
                      onChange={e => { setmodalNotificationContactPersonemail(e.target.value); setmodalNotificationContactPersonemail1(false) }}
                      value={modalNotificationContactPersonemail}
                    />
                    {modalNotificationContactPersonemail1 ? <td style={{ color: "red" }}>Please enter email address</td> : null}

                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col lg="6">
                  <FormGroup>
                    <label
                      className="form-control-label"
                      htmlFor="input-first-name"
                    >
                      Designation
                    </label>
                    <Input
                      className="form-control-alternative text-dark"
                      id="input-first-name"
                      placeholder="Enter designation"
                      type="text"
                      onChange={e => {
                        setmodalNotificationContactPersonDesignation(e.target.value);
                        setmodalNotificationContactPersonDesignation1(false);
                        setmodalNotificationContactPersonDesignation2(false)
                      }}
                      value={modalNotificationContactPersonDesignation}
                    />
                    {modalNotificationContactPersonDesignation1 ? <td style={{ color: "red" }}>Please enter designation</td> : null}
                    {modalNotificationContactPersonDesignation2 ? <td style={{ color: "red" }}>Please remove invaild characters</td> : null}
                  </FormGroup>
                </Col>
                <Col lg="6">
                  <FormGroup>
                    <label
                      className="form-control-label"
                      htmlFor="input-last-name"
                    >
                      Phone number
                    </label>
                    <Input
                      className="form-control-alternative text-dark"
                      id="input-last-name"
                      placeholder="Enter phone number"
                      type="number"
                      onChange={e => { setmodalNotificationContactPersonnumber(e.target.value); setmodalNotificationContactPersonnumber1(false) }}
                      value={modalNotificationContactPersonnumber}
                    />
                    {modalNotificationContactPersonnumber1 ? <td style={{ color: "red" }}>Please enter phone number</td> : null}

                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Button
                    color="primary"
                    // size='md'
                    size='sm'
                    onClick={AddNotificationModal}
                  >
                    Add
                  </Button>
                </Col>
              </Row>

              {
                savenotificationArray.map((item, index) => {

                  return <>
                    <hr />  <Row key={index}>
                      <Col md="3" style={{ width: "6rem" }}>
                        <label className='text-wrap' style={{ width: "6rem" }}>{item.Notificationcontactperson}</label>
                        {/* <input  value={item.contactperson} type='text' /> */}
                      </Col>
                      <Col md="3" style={{ width: "6rem" }}>
                        <label className='text-wrap' style={{ width: "6rem" }}>{item.NotificationcontactEmail}</label>
                        {/* <input type='email'  value={item.contactEmail} /> */}
                      </Col>
                      <Col md="3" style={{ width: "6rem" }}>
                        <label className='text-wrap' style={{ width: "6rem" }}>{item.NotificationcontactDesignation}</label>
                        {/* <input type='text' value={item.contactDesignation}/> */}
                      </Col>
                      <Col md="3" style={{ width: "6rem" }}>
                        <label className='text-wrap' style={{ width: "6rem" }}>{item.NotificationcontactPhone}</label>
                        {/* <input type='number'value={item.contactPhone}/> */}
                      </Col>
                    </Row></>
                })
              }
            </div>
          </ModalBody>
          <ModalFooter>
            {
              savenotificationArray.length > 0 ? <>
                <Button color="success" size='sm' onClick={OnsaveNotify}>save</Button>{' '}
                <Button color="danger" size='sm' onClick={toggle1}>Cancel</Button>
              </> : null
            }


          </ModalFooter>
        </Modal>
      </div>
      <Container className="mt-4" fluid>
        <Row>

          <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
            <Card className=" shadow" style={{ height: "400px" }}>
              <CardBody className="pt-0 pt-md-4">
                <Row>
                  <div className="col">
                    <label
                      className="form-control-label"
                      htmlFor="input-last-name"
                    >
                      Upload image
                    </label>
                    <input type="file"

                      className="form-control input-sm"

                      onChange={setonChangeImage}
                      placeholder='Select image' id="fileName"
                      accept=".jpg,.jpeg,.png,.gif,.jfif,.webp" />
                  </div>
                </Row>
                {iconimg === "" ?

                  null :
                  <img src={(iconimg)} className='mt-4' style={{ height: "270px", width: "270px" }} ></img>}
                {iconimg1 ? <td style={{ color: "red" }}>Please select image</td> : null}
              </CardBody>
            </Card>
          </Col>
          <Col className="order-xl-1" xl="8">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="6">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-username"
                      >
                        Organization name
                      </label>
                      <Input
                        className="form-control-alternative"
                        value={Onorganizationname} onChange={e => { setorganizationname(e.target.value); setorganizationname1(false); setorganizationname2(false) }}
                        id="input-username"
                        placeholder="Enetr organization name"
                        type="text"
                      />
                      {Onorganizationname1 ? <td style={{ color: "red" }}>Please enter organization name</td> : null}
                      {Onorganizationname2 ? <td style={{ color: "red" }}>Please remove invaild characters</td> : null}
                    </FormGroup>
                  </Col>
                  <Col className="" xs="6">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-username"
                      >
                        Address
                      </label>
                      <Input
                        className="form-control-alternative"
                        value={OnAddress} onChange={e => { setAddress(e.target.value); setAddress1(false); setAddress2(false) }}
                        id="input-username"
                        placeholder="Enter address"
                        type="textarea"
                      />
                      {OnAddress1 ? <td style={{ color: "red" }}>Please enter organization address</td> : null}
                      {OnAddress2 ? <td style={{ color: "red" }}>Please remove invaild characters</td> : null}
                    </FormGroup>
                  </Col>
                </Row>
              </CardHeader>
              <Card className=' table-scroll-org11 '>
                <CardBody className='table-scroll-organization'>
                  <Form >

                    <Row className="align-items-center mt-5">
                      <Col xs="6">
                        <h1 className="heading text-dark mt--5 mb-3">
                          Contact persons
                        </h1>
                      </Col>
                      <Col className="text-right mt--6 mb-1" xs="6">
                        <Button
                          color="primary"
                          onClick={toggle}
                          size="sm"

                        >
                          Add
                        </Button>
                      </Col>
                    </Row>
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-username"
                            >
                              Contact person name
                            </label>
                            <Input
                              className="form-control-alternative text-dark"
                              onChange={e => { setDefaultContactName(e.target.value); setDefaultContactName1(false); setDefaultContactName2(false) }}
                              value={DefaultContactName}
                              id="input-username"
                              placeholder="Enter contact person name"
                              type="text"
                            />
                            {DefaultContactName1 ? <td style={{ color: "red" }}>Please enter contact person name</td> : null}
                            {DefaultContactName2 ? <td style={{ color: "red" }}>Please remove invaild characters</td> : null}
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-email"
                            >
                              Email address
                            </label>
                            <Input
                              className="form-control-alternative text-dark"
                              id="input-email"
                              onChange={e => { setDefaultemail(e.target.value); setDefaultemail1(false) }} value={Defaultemail}
                              placeholder="Enter email address"
                              type="email"
                              required
                            />
                            {Defaultemail1 ? <td style={{ color: "red" }}>Please enter email address</td> : null}
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-first-name"
                            >
                              Designation
                            </label>
                            <Input
                              className="form-control-alternative text-dark"
                              onChange={e => { setDefaultDesignation(e.target.value); setDefaultDesignation1(false); setDefaultDesignation2(false) }} value={DefaultDesignation}
                              id="input-first-name"
                              placeholder="Enter designation"
                              type="text"
                            />
                            {DefaultDesignation1 ? <td style={{ color: "red" }}>Please enter designation</td> : null}
                            {DefaultDesignation2 ? <td style={{ color: "red" }}>Please remove invaild characters</td> : null}
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-last-name"
                            >
                              Phone number
                            </label>
                            <Input
                              className="form-control-alternative text-dark"
                              id="input-last-name"
                              onChange={e => { setphone(e.target.value); setphone1(false) }} value={phone}
                              placeholder="Enter phone number"
                              type="number"
                            />
                            {phone1 ? <td style={{ color: "red" }}>Please enter phone number</td> : null}
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                  </Form>

                </CardBody>

                <CardBody className='table-scroll'>

                  {/* <h1 className="heading text-dark mt--5 mb-3">
                    Contact Persons
                  </h1> */}
                  {ContactArray.length >= 1 ? <Row className="align-items-center mt-7">
                    <Col xs="12">
                      <h1 className="heading text-dark ">
                        Additional contact persons
                      </h1>
                    </Col>

                  </Row> : null}
                  <div className="pl-lg-4">
                    {
                      ContactArray.map((item, index) => {
                        return <>
                          {/* {item.contactEmail === tempvalue ? <>
                            <button className='btn btn-success btn-sm float-right' onClick={updateOrganiiziation}>update</button>
                            <button className='btn btn-sm float-right ' onClick={cancelOrganiziation}>Cancel</button></> :
                            <button className='btn btn-primary btn-sm float-right' onClick={() => editContactPerson(item.contactEmail)}>Edit</button>} */}
                          <Row>
                            <Col lg="12">
                              <FormGroup>
                                {item.contactEmail === tempvalue ? <>
                                  <button className='btn btn-success btn-sm float-right' onClick={updateOrganiiziation}>update</button>
                                  <button className='btn btn-sm float-right ' onClick={cancelOrganiziation}>Cancel</button></> :
                                  <button className='btn btn-primary btn-sm float-right' onClick={() => editContactPerson(item.contactEmail)}>Edit</button>}
                              </FormGroup>
                            </Col>
                          </Row>
                          {item.contactEmail === tempvalue ?
                            <>
                              <Row>


                                <Col lg="6">
                                  <FormGroup>
                                    <label
                                      className="form-control-label"
                                      htmlFor="input-username"
                                    >
                                      {index + 1} Contact person name
                                    </label>
                                    <Input
                                      className="form-control-alternative text-dark"
                                      onChange={e => { setUpdatecontactname(e.target.value); setUpdatecontactname1(false); setUpdatecontactname2(false) }}
                                      value={Updatecontactname}
                                      id="input-username"
                                      placeholder="Enter contact person name"
                                      type="text"
                                    />
                                    {Updatecontactname1 ? <td style={{ color: "red" }}>Please enter contact person name</td> : null}
                                    {Updatecontactname2 ? <td style={{ color: "red" }}>Please remove invaild characters</td> : null}
                                  </FormGroup>
                                </Col>
                                <Col lg="6">
                                  <FormGroup>
                                    <label
                                      className="form-control-label"
                                      htmlFor="input-email"
                                    >
                                      Email address
                                    </label>
                                    <Input
                                      className="form-control-alternative text-dark"
                                      id="input-email"
                                      onChange={e => { setUpdatecontactEmail(e.target.value); setUpdatecontactEmail1(false) }} value={UpdatecontactEmail}
                                      placeholder="Enter email address"
                                      type="email"
                                    />
                                    {UpdatecontactEmail1 ? <td style={{ color: "red" }}>Please enter email address</td> : null}
                                  </FormGroup>
                                </Col>
                              </Row>
                              <Row>
                                <Col lg="6">
                                  <FormGroup>
                                    <label
                                      className="form-control-label"
                                      htmlFor="input-first-name"
                                    >
                                      Designation
                                    </label>
                                    <Input
                                      className="form-control-alternative text-dark"
                                      onChange={e => { setUpdatecontactdesignation(e.target.value); setUpdatecontactdesignation1(false); setUpdatecontactdesignation2(false) }}
                                      value={Updatecontactdesignation}
                                      id="input-first-name"
                                      placeholder="Enter designation"
                                      type="text"
                                    />
                                    {Updatecontactdesignation1 ? <td style={{ color: "red" }}>Please enter designation</td> : null}
                                    {Updatecontactdesignation2 ? <td style={{ color: "red" }}>Please remove invaild characters</td> : null}
                                  </FormGroup>
                                </Col>
                                <Col lg="6">
                                  <FormGroup>
                                    <label
                                      className="form-control-label"
                                      htmlFor="input-last-name"
                                    >
                                      Phone number
                                    </label>
                                    <Input
                                      className="form-control-alternative text-dark"
                                      id="input-last-name"
                                      onChange={e => { setUpdatecontactPhonenumber(e.target.value); setUpdatecontactPhonenumber1(false) }}
                                      value={UpdatecontactPhonenumber}
                                      placeholder="Enter phone number"
                                      type='number'
                                    />
                                    {UpdatecontactPhonenumber1 ? <td style={{ color: "red" }}>Please enter phone number</td> : null}
                                  </FormGroup>
                                </Col>
                              </Row></> :
                            <>
                              <Row>

                                <Col lg="6">

                                  <FormGroup>

                                    <label
                                      className="form-control-label"
                                      htmlFor="input-username"
                                    >
                                      {index + 1}  Contact person name
                                    </label>
                                    <Input
                                      className="form-control-alternative text-dark"
                                      onChange={e => { setUpdatecontactname(e.target.value) }} value={item.contactperson}
                                      id="input-username"
                                      placeholder="Enter contact person name"
                                      type="text"
                                      disabled
                                    />

                                  </FormGroup>
                                </Col>
                                <Col lg="6">
                                  <FormGroup>
                                    <label
                                      className="form-control-label"
                                      htmlFor="input-email"
                                    >
                                      Email address
                                    </label>
                                    <Input
                                      className="form-control-alternative text-dark"
                                      id="input-email"
                                      o onChange={e => setUpdatecontactEmail(e.target.value)} value={item.contactEmail}
                                      placeholder="Enter email address"
                                      type="email"
                                      disabled
                                    />
                                  </FormGroup>
                                </Col>
                              </Row>
                              <Row>
                                <Col lg="6">
                                  <FormGroup>
                                    <label
                                      className="form-control-label"
                                      htmlFor="input-first-name"
                                    >
                                      Designation
                                    </label>
                                    <Input
                                      className="form-control-alternative text-dark"
                                      onChange={e => setUpdatecontactdesignation(e.target.value)} value={item.contactDesignation}
                                      id="input-first-name"
                                      placeholder="Enter designation"
                                      type="text"
                                      disabled
                                    />
                                  </FormGroup>
                                </Col>
                                <Col lg="6">
                                  <FormGroup>
                                    <label
                                      className="form-control-label"
                                      htmlFor="input-last-name"
                                    >
                                      Phone number
                                    </label>
                                    <Input
                                      className="form-control-alternative text-dark"
                                      id="input-last-name"
                                      onChange={e => setUpdatecontactPhonenumber(e.target.value)} value={item.contactPhone}
                                      placeholder="Enter phone number"
                                      type="text"
                                      disabled
                                    />
                                  </FormGroup>
                                </Col>
                              </Row>
                            </>}
                        </>
                      })
                    }</div>



                </CardBody>

              </Card>

              <hr className='mt-4 text-primary'></hr>
              <Card className='table-scroll-org11'>
                <CardBody className='table-scroll-organization'>
                  <Form>
                    <Row className="align-items-center">
                      <Col xs="6">
                        <h1 className="heading text-dark ">
                          Notification contacts
                        </h1>
                      </Col>
                      <Col className="text-right " xs="6">
                        <Button
                          color="primary"
                          size="sm"
                          onClick={toggle1}
                        >
                          Add
                        </Button>
                      </Col>
                    </Row>
                    {/* <h1 className="heading text-dark mt--5 mb-3">
                    Notification Contacts
                  </h1> */}
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-username"
                            >
                              Contact person name
                            </label>
                            <Input
                              className="form-control-alternative text-dark"
                              value={NotificationPerson}
                              onChange={e => { setNotificationPerson(e.target.value); setNotificationPerson1(false); setNotificationPerson2(false) }}
                              id="input-username"
                              placeholder="Enter contact person name"
                              type="text"
                            />
                            {NotificationPerson1 ? <td style={{ color: "red" }}>Please enter contact person name</td> : null}
                            {NotificationPerson2 ? <td style={{ color: "red" }}>Please remove invaild characters</td> : null}
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-email"
                            >
                              Email address
                            </label>
                            <Input
                              className="form-control-alternative text-dark"
                              id="input-email"
                              value={NotificationEmail} onChange={e => { setNotificationEmail(e.target.value); setNotificationEmail1(false) }}
                              placeholder="Enter email address"
                              type="email"
                            />
                            {NotificationEmail1 ? <td style={{ color: "red" }}>Please enter contact person name</td> : null}
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-first-name"
                            >
                              Designation
                            </label>
                            <Input
                              className="form-control-alternative text-dark"
                              value={NotificationDesignation} onChange={e => { setNotificationDesignation(e.target.value); setNotificationDesignation1(false); setNotificationDesignation2(false) }}
                              id="input-first-name"
                              placeholder="Enter designation"
                              type="text"
                            />
                            {NotificationDesignation1 ? <td style={{ color: "red" }}>Please enter contact person name</td> : null}
                            {NotificationDesignation2 ? <td style={{ color: "red" }}>Please remove invaild characters</td> : null}
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-last-name"
                            >
                              Phone number
                            </label>
                            <Input
                              className="form-control-alternative text-dark"
                              id="input-last-name"
                              value={NotificationPhone} onChange={e => { setNotificationPhone(e.target.value); setNotificationPhone1(false) }}
                              placeholder="Enter phone number"
                              type="number"
                            />
                            {NotificationPhone1 ? <td style={{ color: "red" }}>Please enter contact person name</td> : null}
                          </FormGroup>
                        </Col>
                      </Row>

                    </div>
                  </Form>
                </CardBody>

                <CardBody className='table-scroll'>

                  {notificationarray.length >= 1 ? <Row className="align-items-center  mt-7">
                    <Col xs="12">
                      <h1 className="heading text-dark ">
                        Additional notify persons
                      </h1>
                    </Col>

                  </Row> : null}
                  {/* <h1 className="heading text-dark mt--5 mb-3">
                    Notification Contacts
                  </h1> */}
                  <div className="pl-lg-4">

                    {notificationarray.map((item, index) => {
                      return <>

                        {/* {item.NotificationcontactEmail === tempNotify ? <>
                        <button className='btn btn-success btn-sm float-right' onClick={UpdateNotification}>update</button>
                        <button className='btn btn-sm float-right' onClick={NotifyCancel}>Cancel</button></> :
                        <button className='btn btn-primary btn-sm float-right' onClick={() => editNotificationPerson(item.NotificationcontactEmail)}>Edit</button>} */}

                        <Row>
                          <Col lg="12">
                            <FormGroup>

                              {item.NotificationcontactEmail === tempNotify ? <>
                                <button className='btn btn-success btn-sm float-right' onClick={UpdateNotification}>update</button>
                                <button className='btn btn-sm float-right' onClick={NotifyCancel}>Cancel</button></> :
                                <button className='btn btn-primary btn-sm float-right' onClick={() => editNotificationPerson(item.NotificationcontactEmail)}>Edit</button>}
                            </FormGroup>
                          </Col>
                        </Row>

                        {item.NotificationcontactEmail === tempNotify ? <>
                          <Row>

                            <Col lg="6">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-username"
                                >
                                  Contact person name
                                </label>
                                <Input
                                  className="form-control-alternative text-dark"
                                  value={UpdateNotificationPerson}
                                  onChange={e => { setUpdateNotificationPerson(e.target.value); setUpdateNotificationPerson1(false); setUpdateNotificationPerson2(false) }}
                                  id="input-username"
                                  placeholder="Enter contact person name"
                                  type="text"
                                />
                                {UpdateNotificationPerson1 ? <td style={{ color: "red" }}>Please enter contact person name</td> : null}
                                {UpdateNotificationPerson2 ? <td style={{ color: "red" }}>Please remove invaild characters</td> : null}
                              </FormGroup>
                            </Col>
                            <Col lg="6">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-email"
                                >
                                  Email address
                                </label>
                                <Input
                                  className="form-control-alternative text-dark"
                                  id="input-email"
                                  value={UpdateNotificationEmail} onChange={e => { setUpdateNotificationEmail(e.target.value); setUpdateNotificationEmail1(false) }}
                                  placeholder="Enter email address"
                                  type="email"
                                />
                                {UpdateNotificationEmail1 ? <td style={{ color: "red" }}>Please enter email address</td> : null}

                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col lg="6">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-first-name"
                                >
                                  Designation
                                </label>
                                <Input
                                  className="form-control-alternative text-dark"
                                  value={UpdateNotificationDesignation} onChange={e => { setUpdateNotificationDesignation(e.target.value); setUpdateNotificationDesignation1(false); setUpdateNotificationDesignation2(false) }}
                                  id="input-first-name"
                                  placeholder="Enter designation"
                                  type="text"
                                />
                                {UpdateNotificationDesignation1 ? <td style={{ color: "red" }}>Please enter designation</td> : null}
                                {UpdateNotificationDesignation2 ? <td style={{ color: "red" }}>Please remove invaild characters</td> : null}
                              </FormGroup>
                            </Col>
                            <Col lg="6">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-last-name"
                                >
                                  Phone number
                                </label>
                                <Input
                                  className="form-control-alternative text-dark"
                                  id="input-last-name"
                                  value={UpdateNotificationPhone} onChange={e => { setUpdateNotificationPhone(e.target.value); setUpdateNotificationPhone1(false) }}
                                  placeholder="Enter phone number"
                                  type="text"
                                />
                                {UpdateNotificationPhone1 ? <td style={{ color: "red" }}>Please enter phone number</td> : null}

                              </FormGroup>
                            </Col>
                          </Row>
                        </> :
                          <>
                            <Row>

                              <Col lg="6">
                                <FormGroup>
                                  <label
                                    className="form-control-label"
                                    htmlFor="input-username"
                                  >
                                    Contact person name
                                  </label>
                                  <Input
                                    className="form-control-alternative text-dark"
                                    value={item.Notificationcontactperson}
                                    id="input-username"
                                    placeholder="Enter contact person name"
                                    type="text"
                                    disabled
                                  />
                                </FormGroup>
                              </Col>
                              <Col lg="6">
                                <FormGroup>
                                  <label
                                    className="form-control-label"
                                    htmlFor="input-email"
                                  >
                                    Email address
                                  </label>
                                  <Input
                                    className="form-control-alternative text-dark"
                                    id="input-email"
                                    value={item.NotificationcontactEmail}
                                    placeholder="Enter email address"
                                    type="email"
                                    disabled
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col lg="6">
                                <FormGroup>
                                  <label
                                    className="form-control-label"
                                    htmlFor="input-first-name"
                                  >
                                    Designation
                                  </label>
                                  <Input
                                    className="form-control-alternative text-dark"
                                    value={item.NotificationcontactDesignation}
                                    id="input-first-name"
                                    placeholder="Enter designation"
                                    type="text"
                                    disabled
                                  />
                                </FormGroup>
                              </Col>
                              <Col lg="6">
                                <FormGroup>
                                  <label
                                    className="form-control-label"
                                    htmlFor="input-last-name"
                                  >
                                    Phone number
                                  </label>
                                  <Input
                                    className="form-control-alternative text-dark"
                                    id="input-last-name"
                                    value={item.NotificationcontactPhone}
                                    placeholder="Enter phone number"
                                    type="text"
                                    disabled
                                  />
                                </FormGroup>
                              </Col>
                            </Row></>
                        }
                      </>
                    })
                    }
                  </div>

                </CardBody>
              </Card>
              <hr className="my-4" />
              <div className="pl-lg-4">
                <Row>
                  <Col lg="6">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-username"
                      >
                        Primary users
                      </label>
                      <Input onChange={e => OnprimaryUser(e.target.value)} type="select" className='text-dark' name="select" id="exampleSelect4">
                        {users != "" ?
                          <option value="" selected disabled>Select primary user</option> : <option value="" selected disabled>All users mapped</option>}
                        {users.map((item, index) => {
                          return <>
                            <option key={index} value={item.user_id} className='text-dark'>{item.username}</option>
                          </>
                        })
                        }
                      </Input>

                      {
                        PrimaryUser.map((item, index) => {

                          return <p
                            key={index}
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            {index + 1 + ")"} {item.username} <i class="fa fa-trash text-danger ml-3" onClick={() => OndeletePrimaryUser(item.id)}></i>
                          </p>
                        })
                      }
                      {primary ? <td style={{ color: "red" }}>select primary user</td> : null}
                    </FormGroup>
                  </Col>

                  <Col lg="6" className='ml--2'>
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-email"
                      >
                        General users
                      </label>
                      <Input type="select" onChange={e => OngeneralUser(e.target.value)} className='text-dark' name="select" id="exampleSelect2">
                        {
                          secondaryUser != "" ? <option value="" selected disabled>Select general user</option> : <option value="" selected disabled>All users mapped</option>
                        }

                        {secondaryUser.map((item, index) => {

                          // {console.log("option",item.parameter)}
                          return <>
                            <option key={index} value={item.user_id} className='text-dark'>{item.username}</option>
                          </>
                        })
                        }


                      </Input>
                      {
                        generalUser.map((item, index) => {

                          return <p
                            key={index}
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            {index + 1 + ")"} {item.username} <i class="fa fa-trash text-danger ml-3" onClick={() => OndeletegeneralUser(item.id)}></i>
                          </p>
                        })
                      }

                    </FormGroup>
                  </Col>
                  <Col lg="6">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-email"
                      >
                        User profile
                      </label>

                      <Input onChange={e => ProfileFind(e.target.value)} type="select" className='text-dark' name="select" id="exampleSelect">
                        <option value="" selected disabled>Select user profile</option>

                        {userprofile.map((item, index) => {
                          return <option key={index} value={item.user_profile_name} className='text-dark'>{item.user_profile_name}</option>
                        })
                        }

                      </Input>


                      {FindedData.map((item, index) => {

                        return <p key={index} value={item.parameter} className='text-dark mt-3'><b>{index + 1 + ")"} {item.parameter}</b></p>

                      })

                      }
                      {userprofile1 ? <td style={{ color: "red" }}>select  user profile</td> : null}
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col lg="6">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-username"
                      >
                        Sms notification
                      </label>
                      <Input type="select" onChange={e => SMSFind(e.target.value)} className='text-dark' name="select" id="exampleSelect">
                        <option value="" selected disabled>Select sms  notification</option>
                        {
                          sms.map((item, index) => {
                            return <>
                              <option className='text-dark'>{item.content_name}</option>
                            </>
                          })
                        }
                      </Input>
                      {
                        FindSms1 ? <>
                          <i class="fa fa-edit text-primary mt-2 mb-2 text-center float-right" onClick={smsEdit} ></i>
                          <Input
                            className="form-control-alternative mt-4 text-dark "
                            onChange={e => { onMessage1(e.target.value); setFindSms2(false) }}
                            disabled={disabled1}
                            id="input-address"
                            placeholder="Enter Notification Message"
                            type="textarea"
                            defaultValue={FindSms}
                          ></Input>
                          {Note1 ? <p style={{ color: "red" }}> Note : SMS content should contain `$device_id` && `$alert_message`</p> : null}
                          {/* <i class="fa fa-edit text-primary ml-3" onClick={smsEdit} ></i>  */}
                        </> :
                          null
                      }
                      {FindSms2 ? <td style={{ color: "red" }}>Select SMS notification</td> : null}
                    </FormGroup>
                  </Col>
                  <Col lg="6" className='ml--2'>
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-email"
                      >
                        Email notification
                      </label>
                      <Input type="select" onChange={e => EmailFind(e.target.value)} className='text-dark' name="select" id="exampleSelect">
                        <option value="" selected disabled>Select email  notification</option>
                        {
                          email.map((item, index) => {
                            return <>
                              <option className='text-dark'>{item.content_name}</option>
                            </>
                          })
                        }
                      </Input>

                      {FindEmail2 ? <td style={{ color: "red" }}>Select  email notification</td> : null}
                      {
                        FindEmail1 ? <>
                          <i class="fa fa-edit text-primary mt-2  mb-2 text-center float-right" onClick={EmailEdit} ></i>
                          <Input
                            className="form-control-alternative text-dark mt-4"
                            onChange={e => { onMessage(e.target.value); setFindEmail2(false) }}
                            disabled={disabled}
                            id="input-address"
                            defaultValue={FindEmail}
                            type="textarea"
                          ></Input>
                          {Note ? <p style={{ color: "red" }}> Note : Email content should conatin `$device_id` && `$alert_message`</p> : null}
                          {/* <i class="fa fa-edit text-primary ml-3" onClick={EmailEdit}></i> */}
                        </>
                          : null
                      }
                    </FormGroup>
                  </Col>

                </Row>

                <Row>
                  <Col>
                    <Button color="success" size="sm" onClick={onSubmit} className='mb-3'>submit</Button>
                    <Button color="danger" size="sm" onClick={onCancel} className='mb-3'>Cancel</Button>
                  </Col>
                </Row>
              </div>

            </Card>
          </Col>
        </Row>
      </Container>

    </>
  )
}
