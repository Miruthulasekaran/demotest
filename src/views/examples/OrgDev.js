// import Header from 'components/Headers/Header';
// import React, { useState, useEffect } from 'react'
// import {
//     Card,
//     CardBody,
//     FormGroup,
//     Form,
//     Input,
//     Container,
//     Row,
//     Col,
//     Button,
//     Table,
//     Modal, ModalHeader, ModalBody, ModalFooter,
//     CardHeader,
//     InputGroupAddon,
//     InputGroupText,

//     InputGroup,
// } from "reactstrap";
// import { useHistory } from 'react-router-dom';
// import DeviceAlarm from './Devices/DeviceAlarm/DeviceAlarm';
// export default function OrgDev() {
//     const history = useHistory();
//     const [OrganizationView, setOrganizationView] = useState(true);
//     const [view, setview] = useState('0');
//     const [view1, setview1] = useState('0');

//     const [organizationprofileedit, setorganizationprofileedit] = useState([])
//     function OrganizationInformation() {
//         setOrganizationView(true);
//     }
//     function DevicesInformation() {
//         setOrganizationView(false);
//     }
//     function DeviceData() {
//         setview('0')
//     }
//     function DeviceDetails() {
//         setview('1')
//     }
//     function DeviceAlarm() {
//         setview('2')
//     }
//     function AlarmEventList() {
//         setview1('0')
//     }
//     function GlobalAlarm() {
//         setview1('1')
//     }
//     const [Onorganizationname, setorganizationname] = useState("")
//     const [OnAddress, setAddress] = useState("");
//     const [DefaultContactName, setDefaultContactName] = useState("")
//     const [Defaultemail, setDefaultemail] = useState("")
//     const [phone, setphone] = useState()
//     const [DefaultDesignation, setDefaultDesignation] = useState("")
//     // contact modal
//     const [modalContactPersonname, setmodalContactPersonname] = useState("")
//     const [ModalContactEmailId, setModalContactEmailId] = useState("")
//     const [ModalDesignation, setModalDesignation] = useState("")
//     const [ModalPhone, setModalPhone] = useState()
//     const [ContactArray, setContactArray] = useState([])

//     const [savedContacts, setsavedContacts] = useState([])

//     const [modal, setmodal] = useState(false)
//     const [modal1, setmodal1] = useState(false)
//     const [onChange, setonChange] = useState(true)
//     const [tempvalue, settempvalue] = useState("")
//     const [AllValues, setAllValues] = useState([])

//     //update contact modal
//     const [UpdatecontactEmail, setUpdatecontactEmail] = useState("")
//     const [Updatecontactname, setUpdatecontactname] = useState("")
//     const [UpdatecontactPhonenumber, setUpdatecontactPhonenumber] = useState("")
//     const [Updatecontactdesignation, setUpdatecontactdesignation] = useState("")


//     // notificTION modal
//     const [modalNotificationContactPersonname, setmodalNotificationContactPersonname] = useState("")
//     const [modalNotificationContactPersonemail, setmodalNotificationContactPersonemail] = useState("")
//     const [modalNotificationContactPersonDesignation, setmodalNotificationContactPersonDesignation] = useState("")
//     const [modalNotificationContactPersonnumber, setmodalNotificationContactPersonnumber] = useState()
//     const [notificationarray, setnotificationarray] = useState([])
//     const [savenotificationArray, setsavenotificationArray] = useState([])
//     const [tempNotify, settempNotify] = useState("")


//     // Static notification
//     const [NotificationPerson, setNotificationPerson] = useState("")
//     const [NotificationEmail, setNotificationEmail] = useState("")
//     const [NotificationDesignation, setNotificationDesignation] = useState("")
//     const [NotificationPhone, setNotificationPhone] = useState()



//     //Update Notification
//     const [UpdateNotificationPerson, setUpdateNotificationPerson] = useState("")
//     const [UpdateNotificationEmail, setUpdateNotificationEmail] = useState("")
//     const [UpdateNotificationDesignation, setUpdateNotificationDesignation] = useState("")
//     const [UpdateNotificationPhone, setUpdateNotificationPhone] = useState()
//     const [userprofilechange, setuserprofilechange] = useState("")
//     const [userprofile, setuserprofile] = useState([])
//     const [FindedData, setFindedData] = useState([])
//     const [DataObject, setDataObject] = useState()

//     //for getting all organization details
//     // useEffect(() => {

//     //   // 
//     //   fetch("http://192.168.0.138:8088/api/v1/user").then((result) => {
//     //     result.json().then((resp) => {

//     //       console.log("users", resp);

//     //       // resp.organization.organization_name===

//     //       // setuserprofile(resp)

//     //     })
//     //   })

//     // }, [])

//     const [dummy, setdummy] = useState("")

//     useEffect(() => {


//         var url = window.location.pathname
//         var idds = url.substring(url.lastIndexOf('/') + 1);
//         // setId(idds)
//         console.log("last one", idds)

//         fetch(`http://127.0.0.1:8088/api/v1/organization/${idds}`).then((result) => {
//             result.json().then((resp) => {

//                 console.log("resp", resp);
//                 setFindedData(resp.user_profile[0].custom_data)
//                 console.log("tttt", resp.user_profile[0].user_profile_name)
//                 setdummy(resp.user_profile[0].user_profile_name)
//                 //for organization_name and address

//                 setorganizationname(resp.organization_name)
//                 setAddress(resp.address)


//                 //static contact
//                 setDefaultContactName(resp.contact_person.contactName)
//                 setDefaultemail(resp.contact_person.contactemail)
//                 setDefaultDesignation(resp.contact_person.contactDesignation)
//                 setphone(resp.contact_person.contactphone)

//                 //static notification
//                 setNotificationPerson(resp.notification_profile.NotifycontactName)
//                 setNotificationEmail(resp.notification_profile.Notifycontactemail)
//                 setNotificationDesignation(resp.notification_profile.NotifycontactDesignation)
//                 setNotificationPhone(resp.notification_profile.Notifycontactphone)


//                 //additional params

//                 console.log("params", resp.additional_contacts[0].AdditionalContactObjects)
//                 setContactArray(resp.additional_contacts[0].AdditionalContactObjects)
//                 setsavedContacts(resp.additional_contacts[0].AdditionalContactObjects)
//                 // console.log("params2",resp.additional_contacts[0].AdditionalNotificationObjects)
//                 setnotificationarray(resp.additional_contacts[0].AdditionalNotificationObjects)
//                 setsavenotificationArray(resp.additional_contacts[0].AdditionalNotificationObjects)

//                 //setuserProfile
//                 // fetch("http://192.168.0.138:8088/api/v1/user-profile").then((result) => {
//                 //   result.json().then((response) => {

//                 //     console.log("users100", response);



//                 //   })
//                 // })



//                 //setPrimary User

//                 fetch("http://127.0.0.1:8088/api/v1/user").then((result) => {
//                     result.json().then((response) => {

//                         console.log("users1", response);

//                         // resp.organization.organization_name===resp.organization_name
//                         response.forEach(element => {
//                             console.log("organizationE", element)
//                             if ((element.organization.organization_name === resp.organization_name) && (element.roles === "primary")) {

//                                 console.log("organizationfilter", element)

//                                 let primaryObj = { id: element.user_id, username: element.username };

//                                 setPrimaryUser((old) => {
//                                     // console.log("primary", old)
//                                     return [...old, primaryObj]
//                                 })

//                                 // console.log("elem", element.roles)
//                                 // if (element.roles === "primary") {
//                                 //   console.log("primary")
//                                 //   setPrimaryUser((old) => {
//                                 //     if (element.roles === "primary") {
//                                 //       return [...old, element]
//                                 //     }


//                                 //   })
//                                 // }
//                                 // else {
//                                 //   setsecondaryUser((old) => {
//                                 //     console.log("general")
//                                 //     return [...old, element]

//                                 //   })
//                                 // }
//                             }
//                             else if ((element.organization.organization_name === resp.organization_name) && (element.roles === "general")) {

//                                 console.log("organizationfiltere", element)
//                                 let generalObj = { id: element.user_id, username: element.username };

//                                 setgeneralUser((old) => {
//                                     return [...old, generalObj]
//                                 })
//                             }
//                             // element.find((value) => {
//                             //   console.log("find", value)
//                             // })



//                             // let Finddeviceprofile = element.find((value) => value.organization.organization_name === resp.organization_name);
//                             // console.log("user110", element.find((value) => value.organization.organization_name === resp.organization_name))
//                             // console.log("lem", element.organization.organization_name)
//                         });

//                         // setuserprofile(resp)




//                     })
//                 })


//             })
//         })

//     }, [])


//     //add functionality

//     let ProfileFind = (e) => {
//         setdummy(e)
//         console.log("ïnn")

//         setuserprofilechange(e)

//         let Finddeviceprofile = userprofile.find((value, i) => value.user_profile_name === e);

//         setFindedData(Finddeviceprofile.custom_data)

//         console.log("this is the finded data", Finddeviceprofile)

//     }

//     useEffect(() => {
//         let Finddeviceprofile = userprofile.find((value, i) => value.user_profile_name === userprofilechange);

//         // setDataObject({ id: Finddeviceprofile.user_profile_id, profile: Finddeviceprofile.user_profile_name, customData: Finddeviceprofile.custom_data })

//         setDataObject([Finddeviceprofile])

//         console.log("this is them DataObject", DataObject)


//     }, [userprofilechange])

//     let saveContact = () => {
//         setmodal(!modal);
//         setContactArray(savedContacts)
//     }

//     let toggle = () => {
//         setmodal(!modal);
//     }
//     let AddContactModal = () => {
//         let createObj = { contactperson: modalContactPersonname, contactEmail: ModalContactEmailId, contactDesignation: ModalDesignation, contactPhone: ModalPhone }
//         setsavedContacts((oldvalues) => {
//             return [...oldvalues, createObj]
//         })
//     }
//     let editContactPerson = (id) => {
//         settempvalue(id)
//         setonChange(false)
//         let Finddeviceprofile = ContactArray.find((value, i) => value.contactEmail === id);
//         console.log("console", Finddeviceprofile)
//         setUpdatecontactEmail(Finddeviceprofile.contactEmail)
//         setUpdatecontactname(Finddeviceprofile.contactperson)
//         setUpdatecontactPhonenumber(Finddeviceprofile.contactPhone)
//         setUpdatecontactdesignation(Finddeviceprofile.contactDesignation)
//     }
//     let cancelOrganiziation = () => {
//         settempvalue("")
//         // setUpdatecontactEmail("")
//         // setUpdatecontactname("")
//         // setUpdatecontactPhonenumber("")
//         // setUpdatecontactdesignation("")
//     }
//     let updateOrganiiziation = () => {
//         setContactArray(ContactArray.map((element) => {
//             if (element.contactEmail === tempvalue) {
//                 return { ...element, contactperson: Updatecontactname, contactEmail: UpdatecontactEmail, contactDesignation: Updatecontactdesignation, contactPhone: UpdatecontactPhonenumber }
//             }
//             return element;
//         }))
//         settempvalue("")
//     }

//     //Notification
//     let toggle1 = () => {

//         setmodal1(!modal1);
//     }


//     let OnsaveNotify = () => {
//         setnotificationarray(savenotificationArray)
//         setmodal1(!modal1);
//     }

//     let AddNotificationModal = () => {
//         let createObj = { Notificationcontactperson: modalNotificationContactPersonname, NotificationcontactEmail: modalNotificationContactPersonemail, NotificationcontactDesignation: modalNotificationContactPersonDesignation, NotificationcontactPhone: modalNotificationContactPersonnumber }
//         setsavenotificationArray((oldvalues) => {
//             return [...oldvalues, createObj]
//         })
//     }

//     //notify edit
//     let editNotificationPerson = (id) => {
//         let Finddeviceprofile = notificationarray.find((value, i) => value.NotificationcontactEmail === id);

//         console.log("finded", Finddeviceprofile)
//         settempNotify(Finddeviceprofile.NotificationcontactEmail)

//         // let createObj = { Notificationcontactperson: modalNotificationContactPersonname, NotificationcontactEmail: modalNotificationContactPersonemail, NotificationcontactDesignation: modalNotificationContactPersonDesignation, NotificationcontactPhone: modalNotificationContactPersonnumber }
//         setUpdateNotificationPerson(Finddeviceprofile.Notificationcontactperson)
//         setUpdateNotificationEmail(Finddeviceprofile.NotificationcontactEmail)
//         setUpdateNotificationDesignation(Finddeviceprofile.NotificationcontactDesignation)
//         setUpdateNotificationPhone(Finddeviceprofile.NotificationcontactPhone)
//     }
//     //Notify Update
//     let UpdateNotification = () => {
//         setnotificationarray(notificationarray.map((element) => {
//             if (element.NotificationcontactEmail === tempNotify) {

//                 return { ...element, Notificationcontactperson: UpdateNotificationPerson, NotificationcontactEmail: UpdateNotificationEmail, NotificationcontactDesignation: UpdateNotificationDesignation, NotificationcontactPhone: UpdateNotificationPhone }
//             }
//             return element;
//         }))
//         settempNotify("")
//     }
//     let NotifyCancel = () => {
//         settempNotify("")

//     }

//     useEffect(() => {
//         fetch("http://127.0.0.1:8088/api/v1/user_profile").then((result) => {
//             result.json().then((resp) => {

//                 console.log("user-profile", resp);
//                 setuserprofile(resp)

//             })
//         })

//     }, [])

//     const [users, setusers] = useState([])
//     const [secondaryUser, setsecondaryUser] = useState([])

//     useEffect(() => {
//         fetch("http://127.0.0.1:8088/api/v1/user").then((result) => {
//             result.json().then((resp) => {

//                 console.log("userbcvnv", resp);
//                 setusers(resp)
//                 setsecondaryUser(resp)

//             })
//         })

//     }, [])


//     //Primary user Array
//     const [PrimaryUser, setPrimaryUser] = useState([])
//     const [primartState, setPrimaryState] = useState("")

//     let OnprimaryUser = (e) => {


//         setPrimaryState("")

//         console.log("e", e)

//         let Finddeviceprofile = users.find((value, i) => value.username === e);

//         console.log("finded value", Finddeviceprofile)
//         let primaryObj = { id: Finddeviceprofile.user_id, username: Finddeviceprofile.username };

//         PrimaryUser.find(vendor => vendor['id'] === Finddeviceprofile.user_id) !== undefined ? window.alert("User already exists") :

//             setPrimaryUser((oldvalues) => {
//                 return [...oldvalues, primaryObj]
//             })

//         console.log("oldvalue", PrimaryUser)

//     }

//     useEffect(() => {

//         console.log("secondary user", PrimaryUser)
//         PrimaryUser.forEach((word) => {

//             console.log("word", word)
//             setsecondaryUser(secondaryUser.filter((value, i) => value.user_id !== word.id))



//             // console.log("result", result)

//         })

//     }, [PrimaryUser])

//     // general user

//     const [generalUser, setgeneralUser] = useState([])

//     let OngeneralUser = (e) => {

//         let Finddeviceprofile = secondaryUser.find((value, i) => value.username === e);

//         // console.log("log", Finddeviceprofile)

//         let generalObj = { id: Finddeviceprofile.user_id, username: Finddeviceprofile.username };

//         // generalUser.id.includes(Finddeviceprofile.user_id)
//         generalUser.find(vendor => vendor['id'] === Finddeviceprofile.user_id) !== undefined ? window.alert("User already exists") :

//             setgeneralUser((oldvalues) => {
//                 return [...oldvalues, generalObj]
//             })

//     }


//     useEffect(() => {

//         // console.log("secondary user", PrimaryUser)
//         generalUser.forEach((word) => {

//             console.log("word", word)
//             setusers(users.filter((value, i) => value.user_id !== word.id))

//             // console.log("result", result)

//         })

//     }, [generalUser])

//     //delete primary user

//     let OndeletePrimaryUser = (e) => {

//         let Finddeviceprofile = users.find((value, i) => {
//             console.log("valuesss", value)
//             return value.user_id === e
//         });

//         console.log("deleting", Finddeviceprofile)
//         // console.log("Ondelete primary user")


//         setPrimaryUser((PrimaryUser) => {

//             return PrimaryUser.filter((value, i) => value.id !== e);

//         });

//         console.log("e", e)

//         setsecondaryUser((oldvalues) => {

//             return [...oldvalues, Finddeviceprofile]

//         })


//     }


//     //delete general user

//     let OndeletegeneralUser = (e) => {


//         let Finddeviceprofile = secondaryUser.find((value, i) => {
//             console.log("valuesss", value)
//             return value.user_id === e
//         });

//         setgeneralUser((generalUser) => {

//             return generalUser.filter((value, i) => value.id !== e);

//         });

//         setusers((oldvalues) => {

//             return [...oldvalues, Finddeviceprofile]

//         })


//     }

//     //send all data

//     const [additionalFieldsArray, setadditionalFieldsArray] = useState([])

//     const [userprofileArray, setuserprofileArray] = useState([])


//     //Onsubmit action
//     const [AdditionalArray, setAdditionalArray] = useState([])
//     const [createFinalObj, setcreateFinalObj] = useState()

//     useEffect(() => {

//         let createcontactPersonObj = {
//             contactName: DefaultContactName, contactemail: Defaultemail, contactDesignation: DefaultDesignation, contactphone: phone
//         }

//         let createNotificationContactObj = {
//             NotifycontactName: NotificationPerson, Notifycontactemail: NotificationEmail, NotifycontactDesignation: NotificationDesignation, Notifycontactphone: NotificationPhone
//         }


//         setcreateFinalObj({


//             created_by: "test", updated_by: "test", organization_logo: iconimg, organization_name: Onorganizationname, address: OnAddress,

//             contact_person: createcontactPersonObj, notification_profile: createNotificationContactObj, additional_contacts: [{
//                 AdditionalContactObjects: ContactArray,
//                 AdditionalNotificationObjects: notificationarray
//             }],

//             organization_profile: null, user_profile: DataObject
//         })


//         // setAdditionalArray((oldvalues) => {

//         //   return [...oldvalues, AdditionalContactObj]

//         // })

//     }, [ContactArray, notificationarray,
//         DefaultContactName,
//         Defaultemail,
//         DefaultDesignation,
//         phone,
//         NotificationPerson,
//         NotificationEmail,
//         NotificationDesignation,
//         NotificationPhone, FindedData,
//         Onorganizationname,
//         OnAddress,
//         DataObject
//     ])

//     let onSubmit = () => {

//         // let user_profile = FindedData;

//         fetch("http://127.0.0.1:8088/api/v1/organization", {
//             method: 'POST',
//             headers: { "content-type": "application/json" },
//             body: JSON.stringify(createFinalObj)
//         }).then((result) => {
//             result.json().then((resp) => {
//                 console.log("resp", resp);
//                 // navigate('/OrganizationProfile');
//                 // history('/OrganizationProfile').then()
//                 console.log("success")
//                 console.log("resp", resp);

//                 let createObj = {
//                     updated_by: "testresp",
//                     organization: resp,
//                     roles: "primary"
//                 }

//                 let creategeneralObj = {
//                     updated_by: "testresp",
//                     organization: resp,
//                     roles: "general"
//                 }

//                 generalUser.forEach((data) => {
//                     console.log("nn")
//                     fetch(`http://127.0.0.1::8088/api/v1/edit_user_organization_role/${data.id}`, {
//                         method: 'PATCH',
//                         headers: { "content-type": "application/json" },
//                         body: JSON.stringify(creategeneralObj)
//                     }).then((result) => {
//                         result.json().then((resp) => {
//                             console.log("secondary", resp);
//                             // navigate('/OrganizationProfile');
//                             // history('/OrganizationProfile').then()

//                             // history.push('/admin/DeviceAlarm');
//                         })
//                     })
//                 })

//                 PrimaryUser.forEach((primaryData) => {

//                     console.log("mm")
//                     fetch(`http://127.0.0.1::8088/api/v1/edit_user_organization_role/${primaryData.id}`, {
//                         method: 'PATCH',
//                         headers: { "content-type": "application/json" },
//                         body: JSON.stringify(createObj)
//                     }).then((result) => {
//                         result.json().then((resp) => {
//                             console.log("primary", resp);
//                             // navigate('/OrganizationProfile');
//                             // history('/OrganizationProfile').then()

//                             // history.push('/admin/DeviceAlarm');
//                         })
//                     })




//                 })


//                 // history.push('/admin/DeviceCategory');
//             })
//         })


//     }

//     const [iconimg, seticonimg] = useState("")
//     function onCancel() {
//         history.push('/admin/OrganizationList');
//     }




//     const [test, settest] = useState("tab-list__link");
//     const [test1, settest1] = useState("tab-list__link");
//     const [test2, settest2] = useState("tab-list__link active");
//     const [test3, settest3] = useState("tab-list__link ");

//     const [HideContent, setHideContent] = useState(false);
//     const [cardGroups, setcardGroups] = useState("align-items-center table-flush ");
//     const [OnWidth, setOnWidth] = useState(12);
//     const [OnariaValue, setOnariaValue] = useState(true);
//     const [secondCol, setsecondCol] = useState(false);
//     const [OnlayoutVis, setOnlayoutVis] = useState(true);

//     let fn = () => {

//         settest2("tab-list__link active");
//         settest1("tab-list__link");
//         settest("tab-list__link");
//         settest3("tab-list__link");
//         setview('0')
//         setHideContent(false)
//     }

//     let fn1 = () => {
//         settest2("tab-list__link");
//         settest1("tab-list__link active");
//         settest("tab-list__link");
//         settest3("tab-list__link");
//         setview(false)
//         setHideContent(false)
//         setHideContent(false)
//         console.log(test1);
//         setview('1')

//     }

//     let fn2 = () => {
//         settest2("tab-list__link ");
//         settest1("tab-list__link ");
//         settest("tab-list__link active");
//         settest3("tab-list__link");
//         setview('2')
//         setHideContent(true)
//     }

//     let AlarmView = () => {
//         setview1(true)
//     }

//     let AlarmView2 = () => {
//         setview1(false)
//     }

//     let fn3 = () => {
//         settest2("tab-list__link ");
//         settest1("tab-list__link ");
//         settest("tab-list__link ");
//         settest3("tab-list__link active");
//         setview('3')
//         setHideContent(false)
//     }

//     let OnCardGrp = () => {

//         setcardGroups("align-items-center table-flush ")
//         setOnWidth(4)
//         setOnariaValue(false)
//         setsecondCol(true)
//         setOnlayoutVis(false)
//     }


//     let OnCardGrp1 = () => {
//         setOnlayoutVis(true)
//         setsecondCol(false)
//         setOnWidth(12)
//     }
//     const [device, setdevice] = useState([])
//     useEffect(() => {
//         fetch("http://127.0.0.1:8088/api/v1/device").then((result) => {
//             result.json().then((resp) => {
//                 console.log("response", resp);
//                 setdevice(resp);
//                 console.log("setdevice", resp)
//             })
//         })
//     }, [])
//     return (
//         <>
//             <Header />
//             <Container className="mt-4" fluid>
//                 <Row className="mb--4">
//                     <Col >
//                         <Button
//                             color="primary"
//                             onClick={OrganizationInformation}
//                             size="md"
//                         >
//                             Organization Information
//                         </Button>
//                         <Button
//                             color="primary"
//                             onClick={DevicesInformation}
//                             size="md"
//                         >
//                             Devices Information
//                         </Button>
//                     </Col>
//                 </Row>
//             </Container>
//             {
//                 OrganizationView ?
//                     //Oraganization Edit Starts

//                     <>
//                         <div>
//                             <Modal size="lg" isOpen={modal} toggle={toggle} >
//                                 <ModalHeader toggle={toggle}><h3>Add Contact Persons</h3></ModalHeader>
//                                 <ModalBody>
//                                     <div className="pl-lg-4">
//                                         <Row>
//                                             <Col lg="6">
//                                                 <FormGroup>
//                                                     <label
//                                                         className="form-control-label"
//                                                         htmlFor="input-username"
//                                                     >
//                                                         Contact Person Name
//                                                     </label>
//                                                     <Input
//                                                         className="form-control-alternative text-dark"
//                                                         id="input-username"
//                                                         placeholder="Contact Person Name"
//                                                         type="text"
//                                                         onChange={e => setmodalContactPersonname(e.target.value)} value={modalContactPersonname}
//                                                     />
//                                                 </FormGroup>
//                                             </Col>
//                                             <Col lg="6">
//                                                 <FormGroup>
//                                                     <label
//                                                         className="form-control-label"
//                                                         htmlFor="input-email"
//                                                     >
//                                                         Email address
//                                                     </label>
//                                                     <Input
//                                                         className="form-control-alternative text-dark"
//                                                         id="input-email"
//                                                         placeholder="jesse@example.com"
//                                                         type="email"
//                                                         value={ModalContactEmailId} onChange={e => setModalContactEmailId(e.target.value)}
//                                                     />
//                                                 </FormGroup>
//                                             </Col>
//                                         </Row>
//                                         <Row>
//                                             <Col lg="6">
//                                                 <FormGroup>
//                                                     <label
//                                                         className="form-control-label"
//                                                         htmlFor="input-first-name"
//                                                     >
//                                                         Designation
//                                                     </label>
//                                                     <Input
//                                                         className="form-control-alternative text-dark"
//                                                         id="input-first-name"
//                                                         placeholder=" Designation"
//                                                         type="text"
//                                                         onChange={e => setModalDesignation(e.target.value)} value={ModalDesignation}
//                                                     />
//                                                 </FormGroup>
//                                             </Col>
//                                             <Col lg="6">
//                                                 <FormGroup>
//                                                     <label
//                                                         className="form-control-label"
//                                                         htmlFor="input-last-name"
//                                                     >
//                                                         Phone Number
//                                                     </label>
//                                                     <Input
//                                                         className="form-control-alternative text-dark"
//                                                         id="input-last-name"
//                                                         placeholder="9025478002"
//                                                         onChange={e => setModalPhone(e.target.value)} value={ModalPhone}
//                                                     />
//                                                 </FormGroup>
//                                             </Col>

//                                         </Row>

//                                         <Row>
//                                             <Col>
//                                                 <Button
//                                                     color="primary"
//                                                     onClick={AddContactModal}
//                                                 >
//                                                     Add
//                                                 </Button>
//                                             </Col>
//                                         </Row>
//                                         {
//                                             savedContacts.map((item, index) => {

//                                                 return <>
//                                                     <hr />  <Row>
//                                                         <Col md="3">
//                                                             <label>{item.contactperson}</label>
//                                                             {/* <input  value={item.contactperson} type='text' /> */}
//                                                         </Col>
//                                                         <Col md="3">
//                                                             <label>{item.contactEmail}</label>
//                                                             {/* <input type='email'  value={item.contactEmail} /> */}
//                                                         </Col>
//                                                         <Col md="3">
//                                                             <label>{item.contactDesignation}</label>
//                                                             {/* <input type='text' value={item.contactDesignation}/> */}
//                                                         </Col>
//                                                         <Col md="3">
//                                                             <label>{item.contactPhone}</label>
//                                                             {/* <input type='number'value={item.contactPhone}/> */}
//                                                         </Col>
//                                                     </Row></>
//                                             })
//                                         }
//                                     </div>
//                                 </ModalBody>
//                                 <ModalFooter>
//                                     <Button color="success" onClick={saveContact}>save</Button>{' '}
//                                     <Button color="danger" onClick={toggle}>Cancel</Button>
//                                 </ModalFooter>
//                             </Modal>
//                         </div>
//                         <div>
//                             <Modal size="lg" isOpen={modal1} toggle={toggle1} >
//                                 <ModalHeader toggle={toggle1}><b><h3>Add Notification Contact</h3></b></ModalHeader>
//                                 <ModalBody>
//                                     <div className="pl-lg-4  ">
//                                         <Row>
//                                             <Col lg="6">
//                                                 <FormGroup>
//                                                     <label
//                                                         className="form-control-label"
//                                                         htmlFor="input-username"
//                                                     >
//                                                         Contact Person Name
//                                                     </label>
//                                                     <Input
//                                                         className="form-control-alternative text-dark"
//                                                         id="input-username"
//                                                         placeholder="Contact Person Name"
//                                                         type="text"
//                                                         onChange={e => setmodalNotificationContactPersonname(e.target.value)} value={modalNotificationContactPersonname}
//                                                     />
//                                                 </FormGroup>
//                                             </Col>
//                                             <Col lg="6">
//                                                 <FormGroup>
//                                                     <label
//                                                         className="form-control-label"
//                                                         htmlFor="input-email"
//                                                     >
//                                                         Email address
//                                                     </label>
//                                                     <Input
//                                                         className="form-control-alternative text-dark"
//                                                         id="input-email"
//                                                         placeholder="jesse@example.com"
//                                                         type="email"
//                                                         onChange={e => setmodalNotificationContactPersonemail(e.target.value)} value={modalNotificationContactPersonemail}
//                                                     />
//                                                 </FormGroup>
//                                             </Col>
//                                         </Row>
//                                         <Row>
//                                             <Col lg="6">
//                                                 <FormGroup>
//                                                     <label
//                                                         className="form-control-label"
//                                                         htmlFor="input-first-name"
//                                                     >
//                                                         Designation
//                                                     </label>
//                                                     <Input
//                                                         className="form-control-alternative text-dark"
//                                                         id="input-first-name"
//                                                         placeholder=" Designation"
//                                                         type="text"
//                                                         onChange={e => setmodalNotificationContactPersonDesignation(e.target.value)} value={modalNotificationContactPersonDesignation}
//                                                     />
//                                                 </FormGroup>
//                                             </Col>
//                                             <Col lg="6">
//                                                 <FormGroup>
//                                                     <label
//                                                         className="form-control-label"
//                                                         htmlFor="input-last-name"
//                                                     >
//                                                         Phone Number
//                                                     </label>
//                                                     <Input
//                                                         className="form-control-alternative text-dark"
//                                                         id="input-last-name"
//                                                         placeholder="9025478002"
//                                                         type="text"
//                                                         onChange={e => setmodalNotificationContactPersonnumber(e.target.value)} value={modalNotificationContactPersonnumber}
//                                                     />
//                                                 </FormGroup>
//                                             </Col>
//                                         </Row>

//                                         <Row>
//                                             <Col>
//                                                 <Button
//                                                     color="primary"
//                                                     // size='md'
//                                                     onClick={AddNotificationModal}
//                                                 >
//                                                     Add
//                                                 </Button>
//                                             </Col>
//                                         </Row>
//                                         {
//                                             savenotificationArray.map((item, index) => {

//                                                 return <>
//                                                     <hr />  <Row key={index}>
//                                                         <Col md="3">
//                                                             <label>{item.Notificationcontactperson}</label>
//                                                             {/* <input  value={item.contactperson} type='text' /> */}
//                                                         </Col>
//                                                         <Col md="3">
//                                                             <label>{item.NotificationcontactEmail}</label>
//                                                             {/* <input type='email'  value={item.contactEmail} /> */}
//                                                         </Col>
//                                                         <Col md="3">
//                                                             <label>{item.NotificationcontactDesignation}</label>
//                                                             {/* <input type='text' value={item.contactDesignation}/> */}
//                                                         </Col>
//                                                         <Col md="3">
//                                                             <label>{item.NotificationcontactPhone}</label>
//                                                             {/* <input type='number'value={item.contactPhone}/> */}
//                                                         </Col>
//                                                     </Row></>
//                                             })
//                                         }
//                                     </div>
//                                 </ModalBody>
//                                 <ModalFooter>
//                                     <Button color="success" onClick={OnsaveNotify}>save</Button>{' '}
//                                     <Button color="danger" onClick={toggle1}>Cancel</Button>
//                                 </ModalFooter>
//                             </Modal>
//                         </div>
//                         <Container className="mt-5" fluid>
//                             <Row>

//                                 <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
//                                     <Card className=" shadow" style={{ height: "400px" }}>
//                                         <CardBody className="pt-0 pt-md-4">
//                                             <Row>
//                                                 <div className="col">
//                                                     <label
//                                                         className="form-control-label"
//                                                         htmlFor="input-last-name"
//                                                     >
//                                                         Upload Image
//                                                     </label>
//                                                     <input type="file" onChange={e => seticonimg(URL.createObjectURL(e.target.files[0]))} className="form-control input-sm" />
//                                                 </div>

//                                             </Row>
//                                             {iconimg === "" ?

//                                                 <img src={iconimg}  ></img> :
//                                                 <img src={iconimg} className='mt-4' style={{ height: "270px", width: "270px" }} ></img>}
//                                         </CardBody>
//                                     </Card>
//                                 </Col>
//                                 <Col className="order-xl-1" xl="8">
//                                     <Card className="bg-secondary shadow">
//                                         <CardHeader className="bg-white border-0">
//                                             <Row className="align-items-center">
//                                                 <Col xs="6">
//                                                     <FormGroup>
//                                                         <label
//                                                             className="form-control-label"
//                                                             htmlFor="input-username"
//                                                         >
//                                                             Organization Name
//                                                         </label>
//                                                         <Input
//                                                             className="form-control-alternative"
//                                                             value={Onorganizationname} onChange={e => { setorganizationname(e.target.value) }}
//                                                             id="input-username"
//                                                             placeholder="Organization Name"
//                                                             type="text"
//                                                         />
//                                                     </FormGroup>
//                                                 </Col>
//                                                 <Col className="" xs="6">
//                                                     <FormGroup>
//                                                         <label
//                                                             className="form-control-label"
//                                                             htmlFor="input-username"
//                                                         >
//                                                             Address
//                                                         </label>
//                                                         <Input
//                                                             className="form-control-alternative"
//                                                             value={OnAddress} onChange={e => setAddress(e.target.value)}
//                                                             id="input-username"
//                                                             placeholder="Address"
//                                                             type="textarea"
//                                                         />
//                                                     </FormGroup>
//                                                 </Col>
//                                             </Row>
//                                         </CardHeader>
//                                         <Card className='table-scroll-org'>
//                                             <CardBody className='table-scroll-height-org'>
//                                                 <Form >
//                                                     <Row className="align-items-center mt-5">
//                                                         <Col xs="6">
//                                                             <h1 className="heading text-dark mt--5 mb-3">
//                                                                 Contact Persons
//                                                             </h1>
//                                                         </Col>
//                                                         <Col className="text-right mt--6 mb-1" xs="6">
//                                                             <Button
//                                                                 color="primary"
//                                                                 onClick={toggle}
//                                                             // size="xs"

//                                                             >
//                                                                 Add
//                                                             </Button>
//                                                         </Col>
//                                                     </Row>
//                                                     <div className="pl-lg-4">
//                                                         <Row>
//                                                             <Col lg="6">
//                                                                 <FormGroup>
//                                                                     <label
//                                                                         className="form-control-label"
//                                                                         htmlFor="input-username"
//                                                                     >
//                                                                         Contact Person Name
//                                                                     </label>
//                                                                     <Input
//                                                                         className="form-control-alternative text-dark"
//                                                                         onChange={e => setDefaultContactName(e.target.value)} value={DefaultContactName}
//                                                                         id="input-username"
//                                                                         placeholder="Contact Person Name"
//                                                                         type="text"
//                                                                     />
//                                                                 </FormGroup>
//                                                             </Col>
//                                                             <Col lg="6">
//                                                                 <FormGroup>
//                                                                     <label
//                                                                         className="form-control-label"
//                                                                         htmlFor="input-email"
//                                                                     >
//                                                                         Email address
//                                                                     </label>
//                                                                     <Input
//                                                                         className="form-control-alternative text-dark"
//                                                                         id="input-email"
//                                                                         onChange={e => setDefaultemail(e.target.value)} value={Defaultemail}
//                                                                         placeholder="jesse@example.com"
//                                                                         type="email"
//                                                                     />
//                                                                 </FormGroup>
//                                                             </Col>
//                                                         </Row>
//                                                         <Row>
//                                                             <Col lg="6">
//                                                                 <FormGroup>
//                                                                     <label
//                                                                         className="form-control-label"
//                                                                         htmlFor="input-first-name"
//                                                                     >
//                                                                         Designation
//                                                                     </label>
//                                                                     <Input
//                                                                         className="form-control-alternative text-dark"
//                                                                         onChange={e => setDefaultDesignation(e.target.value)} value={DefaultDesignation}
//                                                                         id="input-first-name"
//                                                                         placeholder=" Designation"
//                                                                         type="text"
//                                                                     />
//                                                                 </FormGroup>
//                                                             </Col>
//                                                             <Col lg="6">
//                                                                 <FormGroup>
//                                                                     <label
//                                                                         className="form-control-label"
//                                                                         htmlFor="input-last-name"
//                                                                     >
//                                                                         Phone Number
//                                                                     </label>
//                                                                     <Input
//                                                                         className="form-control-alternative text-dark"
//                                                                         id="input-last-name"
//                                                                         onChange={e => setphone(e.target.value)} value={phone}
//                                                                         placeholder="9025478002"
//                                                                         type="text"
//                                                                     />
//                                                                 </FormGroup>
//                                                             </Col>
//                                                         </Row></div>

//                                                 </Form>

//                                             </CardBody>

//                                             <CardBody className='table-scroll-height-org'>

//                                                 {/* <h1 className="heading text-dark mt--5 mb-3">
//                     Contact Persons
//                   </h1> */}
//                                                 {ContactArray.length >= 1 ? <Row className="align-items-center">
//                                                     <Col xs="6">
//                                                         <h1 className="heading text-dark ">
//                                                             Additional Contact Persons
//                                                         </h1>
//                                                     </Col>

//                                                 </Row> : null}
//                                                 <div className="pl-lg-4">
//                                                     {
//                                                         ContactArray.map((item, index) => {
//                                                             return <>

//                                                                 <Row>
//                                                                     <Col lg="12">
//                                                                         <FormGroup>
//                                                                             {item.contactEmail === tempvalue ? <>
//                                                                                 <button className='btn btn-success btn-sm float-right' onClick={updateOrganiiziation}>update</button>
//                                                                                 <button className='btn btn-sm float-right ' onClick={cancelOrganiziation}>Cancel</button></> :
//                                                                                 <button className='btn btn-primary btn-sm float-right' onClick={() => editContactPerson(item.contactEmail)}>Edit</button>}
//                                                                         </FormGroup>
//                                                                     </Col>
//                                                                 </Row>
//                                                                 {item.contactEmail === tempvalue ?
//                                                                     <>
//                                                                         <Row>

//                                                                             <Col lg="6">
//                                                                                 <FormGroup>
//                                                                                     <label
//                                                                                         className="form-control-label"
//                                                                                         htmlFor="input-username"
//                                                                                     >
//                                                                                         {index + 1} Contact Person Name
//                                                                                     </label>
//                                                                                     <Input
//                                                                                         className="form-control-alternative text-dark"
//                                                                                         onChange={e => setUpdatecontactname(e.target.value)} value={Updatecontactname}
//                                                                                         id="input-username"
//                                                                                         placeholder="Contact Person Name"
//                                                                                         type="text"
//                                                                                     />
//                                                                                 </FormGroup>
//                                                                             </Col>
//                                                                             <Col lg="6">
//                                                                                 <FormGroup>
//                                                                                     <label
//                                                                                         className="form-control-label"
//                                                                                         htmlFor="input-email"
//                                                                                     >
//                                                                                         Email address
//                                                                                     </label>
//                                                                                     <Input
//                                                                                         className="form-control-alternative text-dark"
//                                                                                         id="input-email"
//                                                                                         onChange={e => setUpdatecontactEmail(e.target.value)} value={UpdatecontactEmail}
//                                                                                         placeholder="jesse@example.com"
//                                                                                         type="email"
//                                                                                     />
//                                                                                 </FormGroup>
//                                                                             </Col>
//                                                                         </Row>
//                                                                         <Row>
//                                                                             <Col lg="6">
//                                                                                 <FormGroup>
//                                                                                     <label
//                                                                                         className="form-control-label"
//                                                                                         htmlFor="input-first-name"
//                                                                                     >
//                                                                                         Designation
//                                                                                     </label>
//                                                                                     <Input
//                                                                                         className="form-control-alternative text-dark"
//                                                                                         onChange={e => setUpdatecontactdesignation(e.target.value)}
//                                                                                         value={Updatecontactdesignation}
//                                                                                         id="input-first-name"
//                                                                                         placeholder=" Designation"
//                                                                                         type="text"
//                                                                                     />
//                                                                                 </FormGroup>
//                                                                             </Col>
//                                                                             <Col lg="6">
//                                                                                 <FormGroup>
//                                                                                     <label
//                                                                                         className="form-control-label"
//                                                                                         htmlFor="input-last-name"
//                                                                                     >
//                                                                                         Phone Number
//                                                                                     </label>
//                                                                                     <Input
//                                                                                         className="form-control-alternative text-dark"
//                                                                                         id="input-last-name"
//                                                                                         onChange={e => setUpdatecontactPhonenumber(e.target.value)}
//                                                                                         value={UpdatecontactPhonenumber}
//                                                                                         placeholder="9025478002"
//                                                                                         type='number'
//                                                                                     />
//                                                                                 </FormGroup>
//                                                                             </Col>
//                                                                         </Row> <hr></hr></> :
//                                                                     <>
//                                                                         <Row>

//                                                                             <Col lg="6">

//                                                                                 <FormGroup>

//                                                                                     <label
//                                                                                         className="form-control-label"
//                                                                                         htmlFor="input-username"
//                                                                                     >
//                                                                                         {index + 1}  Contact Person Name
//                                                                                     </label>
//                                                                                     <Input
//                                                                                         className="form-control-alternative text-dark"
//                                                                                         onChange={e => setUpdatecontactname(e.target.value)} value={item.contactperson}
//                                                                                         id="input-username"
//                                                                                         placeholder="Contact Person Name"
//                                                                                         type="text"
//                                                                                         disabled
//                                                                                     />
//                                                                                 </FormGroup>
//                                                                             </Col>
//                                                                             <Col lg="6">
//                                                                                 <FormGroup>
//                                                                                     <label
//                                                                                         className="form-control-label"
//                                                                                         htmlFor="input-email"
//                                                                                     >
//                                                                                         Email address
//                                                                                     </label>
//                                                                                     <Input
//                                                                                         className="form-control-alternative text-dark"
//                                                                                         id="input-email"
//                                                                                         o onChange={e => setUpdatecontactEmail(e.target.value)} value={item.contactEmail}
//                                                                                         placeholder="jesse@example.com"
//                                                                                         type="email"
//                                                                                         disabled
//                                                                                     />
//                                                                                 </FormGroup>
//                                                                             </Col>
//                                                                         </Row>
//                                                                         <Row>
//                                                                             <Col lg="6">
//                                                                                 <FormGroup>
//                                                                                     <label
//                                                                                         className="form-control-label"
//                                                                                         htmlFor="input-first-name"
//                                                                                     >
//                                                                                         Designation
//                                                                                     </label>
//                                                                                     <Input
//                                                                                         className="form-control-alternative text-dark"
//                                                                                         onChange={e => setUpdatecontactdesignation(e.target.value)} value={item.contactDesignation}
//                                                                                         id="input-first-name"
//                                                                                         placeholder=" Designation"
//                                                                                         type="text"
//                                                                                         disabled
//                                                                                     />
//                                                                                 </FormGroup>
//                                                                             </Col>
//                                                                             <Col lg="6">
//                                                                                 <FormGroup>
//                                                                                     <label
//                                                                                         className="form-control-label"
//                                                                                         htmlFor="input-last-name"
//                                                                                     >
//                                                                                         Phone Number
//                                                                                     </label>
//                                                                                     <Input
//                                                                                         className="form-control-alternative text-dark"
//                                                                                         id="input-last-name"
//                                                                                         onChange={e => setUpdatecontactPhonenumber(e.target.value)} value={item.contactPhone}
//                                                                                         placeholder="9025478002"
//                                                                                         type="text"
//                                                                                         disabled
//                                                                                     />
//                                                                                 </FormGroup>
//                                                                             </Col>
//                                                                         </Row>  <hr></hr>
//                                                                     </>}
//                                                             </>
//                                                         })
//                                                     }</div>

//                                             </CardBody>
//                                         </Card>
//                                         <Card className='table-scroll-org'>
//                                             <CardBody className='table-scroll-height-org' >
//                                                 <Form>
//                                                     <Row className="align-items-center">
//                                                         <Col xs="6">
//                                                             <h1 className="heading text-dark ">
//                                                                 Notification Contacts
//                                                             </h1>
//                                                         </Col>
//                                                         <Col className="text-right " xs="6">
//                                                             <Button
//                                                                 color="primary"
//                                                                 // size="xs"
//                                                                 onClick={toggle1}
//                                                             >
//                                                                 Add
//                                                             </Button>
//                                                         </Col>
//                                                     </Row>
//                                                     {/* <h1 className="heading text-dark mt--5 mb-3">
//                     Notification Contacts
//                   </h1> */}
//                                                     <div className="pl-lg-4">
//                                                         <Row>
//                                                             <Col lg="6">
//                                                                 <FormGroup>
//                                                                     <label
//                                                                         className="form-control-label"
//                                                                         htmlFor="input-username"
//                                                                     >
//                                                                         Contact Person Name
//                                                                     </label>
//                                                                     <Input
//                                                                         className="form-control-alternative text-dark"
//                                                                         value={NotificationPerson} onChange={e => setNotificationPerson(e.target.value)}
//                                                                         id="input-username"
//                                                                         placeholder="Contact Person Name"
//                                                                         type="text"
//                                                                     />
//                                                                 </FormGroup>
//                                                             </Col>
//                                                             <Col lg="6">
//                                                                 <FormGroup>
//                                                                     <label
//                                                                         className="form-control-label"
//                                                                         htmlFor="input-email"
//                                                                     >
//                                                                         Email address
//                                                                     </label>
//                                                                     <Input
//                                                                         className="form-control-alternative text-dark"
//                                                                         id="input-email"
//                                                                         value={NotificationEmail} onChange={e => setNotificationEmail(e.target.value)}
//                                                                         placeholder="jesse@example.com"
//                                                                         type="email"
//                                                                     />
//                                                                 </FormGroup>
//                                                             </Col>
//                                                         </Row>
//                                                         <Row>
//                                                             <Col lg="6">
//                                                                 <FormGroup>
//                                                                     <label
//                                                                         className="form-control-label"
//                                                                         htmlFor="input-first-name"
//                                                                     >
//                                                                         Designation
//                                                                     </label>
//                                                                     <Input
//                                                                         className="form-control-alternative text-dark"
//                                                                         value={NotificationDesignation} onChange={e => setNotificationDesignation(e.target.value)}
//                                                                         id="input-first-name"
//                                                                         placeholder=" Designation"
//                                                                         type="text"
//                                                                     />
//                                                                 </FormGroup>
//                                                             </Col>
//                                                             <Col lg="6">
//                                                                 <FormGroup>
//                                                                     <label
//                                                                         className="form-control-label"
//                                                                         htmlFor="input-last-name"
//                                                                     >
//                                                                         Phone Number
//                                                                     </label>
//                                                                     <Input
//                                                                         className="form-control-alternative text-dark"
//                                                                         id="input-last-name"
//                                                                         value={NotificationPhone} onChange={e => setNotificationPhone(e.target.value)}
//                                                                         placeholder="9025478002"
//                                                                         type="text"
//                                                                     />
//                                                                 </FormGroup>
//                                                             </Col>
//                                                         </Row>

//                                                     </div>
//                                                 </Form>
//                                             </CardBody>

//                                             <CardBody className='table-scroll-height-org'>

//                                                 {notificationarray.length >= 1 ? <Row className="align-items-center">
//                                                     <Col xs="6">
//                                                         <h1 className="heading text-dark ">
//                                                             Additional Notify Persons
//                                                         </h1>
//                                                     </Col>

//                                                 </Row> : null}
//                                                 {/* <h1 className="heading text-dark mt--5 mb-3">
//                     Notification Contacts
//                   </h1> */}
//                                                 <div className="pl-lg-4">

//                                                     {notificationarray.map((item, index) => {
//                                                         return <>


//                                                             <Row>
//                                                                 <Col lg="12">
//                                                                     <FormGroup>

//                                                                         {item.NotificationcontactEmail === tempNotify ? <>
//                                                                             <button className='btn btn-success btn-sm float-right' onClick={UpdateNotification}>update</button>
//                                                                             <button className='btn btn-sm float-right' onClick={NotifyCancel}>Cancel</button></> :
//                                                                             <button className='btn btn-primary btn-sm float-right' onClick={() => editNotificationPerson(item.NotificationcontactEmail)}>Edit</button>}
//                                                                     </FormGroup>
//                                                                 </Col>
//                                                             </Row>
//                                                             {item.NotificationcontactEmail === tempNotify ? <>
//                                                                 <Row>

//                                                                     <Col lg="6">
//                                                                         <FormGroup>
//                                                                             <label
//                                                                                 className="form-control-label"
//                                                                                 htmlFor="input-username"
//                                                                             >
//                                                                                 Contact Person Name
//                                                                             </label>
//                                                                             <Input
//                                                                                 className="form-control-alternative text-dark"
//                                                                                 value={UpdateNotificationPerson} onChange={e => setUpdateNotificationPerson(e.target.value)}
//                                                                                 id="input-username"
//                                                                                 placeholder="Contact Person Name"
//                                                                                 type="text"
//                                                                             />
//                                                                         </FormGroup>
//                                                                     </Col>
//                                                                     <Col lg="6">
//                                                                         <FormGroup>
//                                                                             <label
//                                                                                 className="form-control-label"
//                                                                                 htmlFor="input-email"
//                                                                             >
//                                                                                 Email address
//                                                                             </label>
//                                                                             <Input
//                                                                                 className="form-control-alternative text-dark"
//                                                                                 id="input-email"
//                                                                                 value={UpdateNotificationEmail} onChange={e => setUpdateNotificationEmail(e.target.value)}
//                                                                                 placeholder="jesse@example.com"
//                                                                                 type="email"
//                                                                             />
//                                                                         </FormGroup>
//                                                                     </Col>
//                                                                 </Row>
//                                                                 <Row>
//                                                                     <Col lg="6">
//                                                                         <FormGroup>
//                                                                             <label
//                                                                                 className="form-control-label"
//                                                                                 htmlFor="input-first-name"
//                                                                             >
//                                                                                 Designation
//                                                                             </label>
//                                                                             <Input
//                                                                                 className="form-control-alternative text-dark"
//                                                                                 value={UpdateNotificationDesignation} onChange={e => setUpdateNotificationDesignation(e.target.value)}
//                                                                                 id="input-first-name"
//                                                                                 placeholder=" Designation"
//                                                                                 type="text"
//                                                                             />
//                                                                         </FormGroup>
//                                                                     </Col>
//                                                                     <Col lg="6">
//                                                                         <FormGroup>
//                                                                             <label
//                                                                                 className="form-control-label"
//                                                                                 htmlFor="input-last-name"
//                                                                             >
//                                                                                 Phone Number
//                                                                             </label>
//                                                                             <Input
//                                                                                 className="form-control-alternative text-dark"
//                                                                                 id="input-last-name"
//                                                                                 value={UpdateNotificationPhone} onChange={e => setUpdateNotificationPhone(e.target.value)}
//                                                                                 placeholder="9025478002"
//                                                                                 type="text"
//                                                                             />
//                                                                         </FormGroup>
//                                                                     </Col>
//                                                                 </Row><hr></hr>
//                                                             </> :
//                                                                 <>
//                                                                     <Row>

//                                                                         <Col lg="6">
//                                                                             <FormGroup>
//                                                                                 <label
//                                                                                     className="form-control-label"
//                                                                                     htmlFor="input-username"
//                                                                                 >
//                                                                                     Contact Person Name
//                                                                                 </label>
//                                                                                 <Input
//                                                                                     className="form-control-alternative text-dark"
//                                                                                     value={item.Notificationcontactperson}
//                                                                                     id="input-username"
//                                                                                     placeholder="Contact Person Name"
//                                                                                     type="text"
//                                                                                     disabled
//                                                                                 />
//                                                                             </FormGroup>
//                                                                         </Col>
//                                                                         <Col lg="6">
//                                                                             <FormGroup>
//                                                                                 <label
//                                                                                     className="form-control-label"
//                                                                                     htmlFor="input-email"
//                                                                                 >
//                                                                                     Email address
//                                                                                 </label>
//                                                                                 <Input
//                                                                                     className="form-control-alternative text-dark"
//                                                                                     id="input-email"
//                                                                                     value={item.NotificationcontactEmail}
//                                                                                     placeholder="jesse@example.com"
//                                                                                     type="email"
//                                                                                     disabled
//                                                                                 />
//                                                                             </FormGroup>
//                                                                         </Col>
//                                                                     </Row>
//                                                                     <Row>
//                                                                         <Col lg="6">
//                                                                             <FormGroup>
//                                                                                 <label
//                                                                                     className="form-control-label"
//                                                                                     htmlFor="input-first-name"
//                                                                                 >
//                                                                                     Designation
//                                                                                 </label>
//                                                                                 <Input
//                                                                                     className="form-control-alternative text-dark"
//                                                                                     value={item.NotificationcontactDesignation}
//                                                                                     id="input-first-name"
//                                                                                     placeholder=" Designation"
//                                                                                     type="text"
//                                                                                     disabled
//                                                                                 />
//                                                                             </FormGroup>
//                                                                         </Col>
//                                                                         <Col lg="6">
//                                                                             <FormGroup>
//                                                                                 <label
//                                                                                     className="form-control-label"
//                                                                                     htmlFor="input-last-name"
//                                                                                 >
//                                                                                     Phone Number
//                                                                                 </label>
//                                                                                 <Input
//                                                                                     className="form-control-alternative text-dark"
//                                                                                     id="input-last-name"
//                                                                                     value={item.NotificationcontactPhone}
//                                                                                     placeholder="9025478002"
//                                                                                     type="text"
//                                                                                     disabled
//                                                                                 />
//                                                                             </FormGroup>
//                                                                         </Col>
//                                                                     </Row><hr></hr></>
//                                                             }
//                                                         </>
//                                                     })
//                                                     }
//                                                 </div>

//                                             </CardBody>
//                                         </Card>
//                                         <hr className="my-4" />
//                                         <div className="pl-lg-4">
//                                             <Row>
//                                                 <Col lg="6">
//                                                     <FormGroup>
//                                                         <label
//                                                             className="form-control-label"
//                                                             htmlFor="input-username"
//                                                         >
//                                                             Primary Users
//                                                         </label>
//                                                         <Input onChange={e => OnprimaryUser(e.target.value)} type="select" className='text-dark' name="select" id="exampleSelect">
//                                                             <option selected disabled>Select primary User</option>
//                                                             {users.map((item, index) => {
//                                                                 return <>
//                                                                     <option key={index} value={item.username} className='text-dark'>{item.username}</option>
//                                                                 </>
//                                                             })
//                                                             }
//                                                         </Input>

//                                                         {
//                                                             PrimaryUser.map((item, index) => {

//                                                                 return <p
//                                                                     key={index}
//                                                                     className="form-control-label"
//                                                                     htmlFor="input-country"
//                                                                 >
//                                                                     {index + 1 + ")"} {item.username} <i class="fa fa-trash text-danger ml-3" onClick={() => OndeletePrimaryUser(item.id)}></i>
//                                                                 </p>
//                                                             })
//                                                         }
//                                                     </FormGroup>
//                                                 </Col>
//                                                 <Col lg="6">
//                                                     <FormGroup>
//                                                         <label
//                                                             className="form-control-label"
//                                                             htmlFor="input-email"
//                                                         >
//                                                             General Users
//                                                         </label>
//                                                         <Input type="select" onChange={e => OngeneralUser(e.target.value)} className='text-dark' name="select" id="exampleSelect">

//                                                             <option value="" selected disabled>Select General User</option>
//                                                             {secondaryUser.map((item, index) => {

//                                                                 // {console.log("option",item.parameter)}
//                                                                 return <>
//                                                                     <option key={index} value={item.username} className='text-dark'>{item.username}</option>
//                                                                 </>
//                                                             })
//                                                             }


//                                                         </Input>
//                                                         {
//                                                             generalUser.map((item, index) => {

//                                                                 return <p
//                                                                     key={index}
//                                                                     className="form-control-label"
//                                                                     htmlFor="input-country"
//                                                                 >
//                                                                     {index + 1 + ")"} {item.username} <i class="fa fa-trash text-danger ml-3" onClick={() => OndeletegeneralUser(item.id)}></i>
//                                                                 </p>
//                                                             })
//                                                         }

//                                                     </FormGroup>
//                                                 </Col>
//                                                 <Col lg="6">
//                                                     <FormGroup>
//                                                         <label
//                                                             className="form-control-label"
//                                                             htmlFor="input-email"
//                                                         >
//                                                             User Profile
//                                                         </label>

//                                                         <Input onChange={e => ProfileFind(e.target.value)} value={dummy} type="select" className='text-dark' name="select" id="exampleSelect">
//                                                             <option value="" selected disabled>Select User Profile</option>

//                                                             {userprofile.map((item, index) => {
//                                                                 return <option key={index} value={item.user_profile_name} className='text-dark'>{item.user_profile_name}</option>
//                                                             })
//                                                             }

//                                                         </Input>
//                                                         {FindedData.map((item, index) => {

//                                                             return <p key={index} value={item.parameter} className='text-dark mt-3'><b>{index + 1 + ")"}  {item.parameter}</b></p>
//                                                         })

//                                                         }
//                                                     </FormGroup>
//                                                 </Col>

//                                             </Row>
//                                             <Row>
//                                                 <Col>
//                                                     {/* {/ <button className='btn btn-warning'>Add</button > /} */}

//                                                     <Button color="success" size="sm" onClick={onSubmit} className='mb-3'>submit</Button>
//                                                     <Button color="danger" size="sm" onClick={onCancel} className='mb-3'>Cancel</Button>
//                                                 </Col>
//                                             </Row>
//                                         </div>

//                                     </Card>
//                                 </Col>
//                             </Row>
//                         </Container>
//                     </>

//                     :
//                     //Oraganization Edit Ends

//                     //Device Information Startsss
//                     <>
//                         <Container className='mt-5'>
//                             <Row>
//                                 <Col md="4">
//                                     {/* <Card className=''>
//                                     <CardHeader className='table-scroll '>
//                                 <Table className="align-items-center table-flush table-scroll-height" style={{height:"550px"}} responsive>
//                                     <thead className="thead-light">
//                                         <tr>
//                                             <th scope="col">Timestamp</th>
//                                             <th scope="col">Date & Time</th>
//                                             <th scope="col">Class Id</th>
//                                             <th scope="col">Class Name</th>
//                                         </tr>
//                                     </thead>
//                                     <tbody>
//                                         <tr>
//                                             <th scope="row">/argon/</th>
//                                             <td>4,569</td>
//                                             <td>340</td>
//                                             <td>
//                                                 46,53%
//                                             </td>
//                                         </tr>
//                                         <tr>
//                                             <th scope="row">/argon/</th>
//                                             <td>4,569</td>
//                                             <td>340</td>
//                                             <td>
//                                                 46,53%
//                                             </td>
//                                         </tr>
//                                         <tr>
//                                             <th scope="row">/argon/</th>
//                                             <td>4,569</td>
//                                             <td>340</td>
//                                             <td>
//                                                 46,53%
//                                             </td>
//                                         </tr>
//                                         <tr>
//                                             <th scope="row">/argon/</th>
//                                             <td>4,569</td>
//                                             <td>340</td>
//                                             <td>
//                                                 46,53%
//                                             </td>
//                                         </tr>

//                                           <tr>
//                                             <th scope="row">/argon/</th>
//                                             <td>4,569</td>
//                                             <td>340</td>
//                                             <td>
//                                                 46,53%
//                                             </td>
//                                         </tr>
//                                           <tr>
//                                             <th scope="row">/argon/</th>
//                                             <td>4,569</td>
//                                             <td>340</td>
//                                             <td>
//                                                 46,53%
//                                             </td>
//                                         </tr>
//                                           <tr>
//                                             <th scope="row">/argon/</th>
//                                             <td>4,569</td>
//                                             <td>340</td>
//                                             <td>
//                                                 46,53%
//                                             </td>
//                                         </tr>
//                                         <tr>
//                                             <th scope="row">/argon/</th>
//                                             <td>4,569</td>
//                                             <td>340</td>
//                                             <td>
//                                                 46,53%
//                                             </td>
//                                         </tr>
//                                         <tr>
//                                             <th scope="row">/argon/</th>
//                                             <td>4,569</td>
//                                             <td>340</td>
//                                             <td>
//                                                 46,53%
//                                             </td>
//                                         </tr>
//                                         <tr>
//                                             <th scope="row">/argon/</th>
//                                             <td>4,569</td>
//                                             <td>340</td>
//                                             <td>
//                                                 46,53%
//                                             </td>
//                                         </tr>
//                                         <tr>
//                                             <th scope="row">/argon/</th>
//                                             <td>4,569</td>
//                                             <td>340</td>
//                                             <td>
//                                                 46,53%
//                                             </td>
//                                         </tr>
//                                         <tr>
//                                             <th scope="row">/argon/</th>
//                                             <td>4,569</td>
//                                             <td>340</td>
//                                             <td>
//                                                 46,53%
//                                             </td>
//                                         </tr>
//                                     </tbody>
//                                 </Table>
//                                 </CardHeader>
//                                 </Card> */}
//                                     <Card className="table-scroll3">
//                                         <Table responsive >
//                                             <thead className="thead-light">
//                                                 <tr>
//                                                     <th scope="col" className="text-justify text-dark"><b>S.No</b></th>

//                                                     <th scope="col" className="text-justify text-dark" ><b>Device Id</b></th>
//                                                     {/* style={{textAlign:"center"}} */}

//                                                     <th scope="col" className="text-justify text-dark"><b>Action</b></th>
//                                                 </tr>
//                                             </thead>
//                                             <tbody className="text-justify text-dark">

//                                                 <tr >
//                                                     <td className='text-dark text-justify'>1</td>
//                                                     <td className='text-dark text-justify'>123QWER2435</td>
//                                                     <td className='text-dark text-justify'><i className='fa fa-eye'></i></td>
//                                                 </tr>
//                                                 <tr >
//                                                     <td className='text-dark text-justify'>1</td>
//                                                     <td className='text-dark text-justify'>123QWER2435</td>
//                                                     <td className='text-dark text-justify'><i className='fa fa-eye'></i></td>
//                                                 </tr>
//                                                 <tr >
//                                                     <td className='text-dark text-justify'>1</td>
//                                                     <td className='text-dark text-justify'>123QWER2435</td>
//                                                     <td className='text-dark text-justify'><i className='fa fa-eye'></i></td>
//                                                 </tr>
//                                                 <tr >
//                                                     <td className='text-dark text-justify'>1</td>
//                                                     <td className='text-dark text-justify'>123QWER2435</td>
//                                                     <td className='text-dark text-justify'><i className='fa fa-eye'></i></td>
//                                                 </tr>

//                                                 <tr >
//                                                     <td className='text-dark text-justify'>1</td>
//                                                     <td className='text-dark text-justify'>123QWER2435</td>
//                                                     <td className='text-dark text-justify'><i className='fa fa-eye'></i></td>
//                                                 </tr>
//                                                 <tr >
//                                                     <td className='text-dark text-justify'>1</td>
//                                                     <td className='text-dark text-justify'>123QWER2435</td>
//                                                     <td className='text-dark text-justify'><i className='fa fa-eye'></i></td>
//                                                 </tr>


//                                             </tbody>
//                                         </Table>
//                                     </Card>
//                                 </Col>
//                                 <Col className="mb-5 mb-xl-0" xl="8" >
//                                     <Card className="shadow ">
//                                         <CardHeader className="border-0">
//                                             <Row className="align-items-center">
//                                                 <ul className="text-center d-flex justify-content-center" style={{ padding: "0px" }}>
//                                                     <div className="row text-center d-flex justify-content-center">
//                                                         <div className="col-md-3  text-center d-flex justify-content-center">
//                                                             <li class={test2} >
//                                                                 <a class="tab-list__link" onClick={fn} href="#tab1" data-toggle="tab">
//                                                                     <span class="step text-light"><i class='fas fa-tv' ></i></span>
//                                                                     <span class="desc ml-2 text-light" >Dashboard</span>
//                                                                 </a>
//                                                             </li>
//                                                         </div>
//                                                         <div className="col-md-3  ">
//                                                             <li class={test1} >
//                                                                 <a class="tab-list__link" href="#tab2" onClick={fn1} data-toggle="tab">
//                                                                     <span class="step text-light"><i class='fas fa-microchip' ></i></span>
//                                                                     <span class="desc  ml-2 text-light">Device </span>
//                                                                 </a>
//                                                             </li>
//                                                         </div>

//                                                         <div className="col-md-3  ">
//                                                             <li class={test} >
//                                                                 <a class="tab-list__link" href="#tab2" onClick={fn2} data-toggle="tab">
//                                                                     <span class="step text-light"><i class='fas fa-bell' ></i></span>
//                                                                     <span class="desc  ml-2 text-light">Alarms </span>
//                                                                 </a>
//                                                             </li>
//                                                         </div>
//                                                         <div className="col-md-3  ">
//                                                             <li class={test} >
//                                                                 <a class="tab-list__link" href="#tab4" onClick={fn3} data-toggle="tab">
//                                                                     <span class="step text-light"><i class="fa fa-building " ></i></span>
//                                                                     <span class="desc  ml-2 text-light">Organization</span>
//                                                                 </a>
//                                                             </li>
//                                                         </div>
//                                                     </div>
//                                                 </ul>
//                                             </Row>
//                                             <Row className="align-items-center">
//                                                 <div className="col">

//                                                     {view == '0' ? <p>  <Row >
//                                                         <Col className="table-scroll" xl="12">
//                                                             <Table className="align-items-center table-flush " style={{ height: '500px' }} responsive>
//                                                                 <thead className="thead-light">
//                                                                     <tr>
//                                                                         <th scope="col">Timestamp</th>
//                                                                         <th scope="col">Date & Time</th>
//                                                                         <th scope="col">Class Id</th>
//                                                                         <th scope="col">Class Name</th>

//                                                                     </tr>
//                                                                 </thead>
//                                                                 <tbody>
//                                                                     <tr>
//                                                                         <th scope="row">/argon/</th>
//                                                                         <td>4,569</td>
//                                                                         <td>340</td>
//                                                                         <td>
//                                                                             46,53%
//                                                                         </td>
//                                                                     </tr>

//                                                                     <tr>
//                                                                         <th scope="row">/argon/</th>
//                                                                         <td>4,569</td>
//                                                                         <td>340</td>
//                                                                         <td>
//                                                                             46,53%
//                                                                         </td>
//                                                                     </tr>
//                                                                     <tr>
//                                                                         <th scope="row">/argon/</th>
//                                                                         <td>4,569</td>
//                                                                         <td>340</td>
//                                                                         <td>
//                                                                             46,53%
//                                                                         </td>
//                                                                     </tr>
//                                                                     <tr>
//                                                                         <th scope="row">/argon/</th>
//                                                                         <td>4,569</td>
//                                                                         <td>340</td>
//                                                                         <td>
//                                                                             46,53%
//                                                                         </td>
//                                                                     </tr>
//                                                                     <tr>
//                                                                         <th scope="row">/argon/</th>
//                                                                         <td>4,569</td>
//                                                                         <td>340</td>
//                                                                         <td>
//                                                                             46,53%
//                                                                         </td>
//                                                                     </tr>
//                                                                     <tr>
//                                                                         <th scope="row">/argon/</th>
//                                                                         <td>4,569</td>
//                                                                         <td>340</td>
//                                                                         <td>
//                                                                             46,53%
//                                                                         </td>
//                                                                     </tr>
//                                                                     <tr>
//                                                                         <th scope="row">/argon/</th>
//                                                                         <td>4,569</td>
//                                                                         <td>340</td>
//                                                                         <td>
//                                                                             46,53%
//                                                                         </td>
//                                                                     </tr>
//                                                                     <tr>
//                                                                         <th scope="row">/argon/</th>
//                                                                         <td>4,569</td>
//                                                                         <td>340</td>
//                                                                         <td>
//                                                                             46,53%
//                                                                         </td>
//                                                                     </tr>
//                                                                     <tr>
//                                                                         <th scope="row">/argon/</th>
//                                                                         <td>4,569</td>
//                                                                         <td>340</td>
//                                                                         <td>
//                                                                             46,53%
//                                                                         </td>
//                                                                     </tr>
//                                                                 </tbody>
//                                                             </Table>
//                                                         </Col>
//                                                     </Row></p> : view == '1' ?

//                                                         <div class="container  table-scroll center-block " >

//                                                             <div class="row mt-3 " >
//                                                                 <div class="col">
//                                                                     <b>Device Id</b>
//                                                                 </div>
//                                                                 <div class="col">
//                                                                     1234567890
//                                                                 </div>
//                                                                 <div class="col">
//                                                                     <b>Device Name</b>
//                                                                 </div>
//                                                                 <div class="col">
//                                                                     Device 1
//                                                                 </div>
//                                                             </div>
//                                                             <div class="row mt-5" >
//                                                                 <div class="col">
//                                                                     <b>Device Category</b>
//                                                                 </div>
//                                                                 <div class="col">
//                                                                     Category 1
//                                                                 </div>
//                                                                 <div class="col">
//                                                                     <b>Device Data Profile</b>
//                                                                 </div>
//                                                                 <div class="col">
//                                                                     <ol>
//                                                                         <li>Temperature</li>
//                                                                         <li className="mt-2">Temperature</li>
//                                                                         <li className="mt-2">Temperature</li>
//                                                                         <li className="mt-2">Temperature</li>
//                                                                         <li className="mt-2">Temperature</li>

//                                                                     </ol>
//                                                                 </div>
//                                                             </div>
//                                                             <div class="row mt-5" >
//                                                                 <div class="col">
//                                                                     <b>Device Profile</b>
//                                                                 </div>
//                                                                 <div class="col">
//                                                                     <ol>
//                                                                         <li>Temperature</li>
//                                                                         <li className="mt-2">Temperature</li>
//                                                                         <li className="mt-2">Temperature</li>
//                                                                         <li className="mt-2">Temperature</li>
//                                                                         <li className="mt-2">Temperature</li>

//                                                                     </ol>
//                                                                 </div>
//                                                                 <div class="col">
//                                                                     <b>Device Alarm</b>
//                                                                 </div>
//                                                                 <div class="col">
//                                                                     <ol>
//                                                                         <li>Temperature</li>
//                                                                         <li className="mt-2">Temperature</li>
//                                                                         <li className="mt-2">Temperature</li>
//                                                                         <li className="mt-2">Temperature</li>
//                                                                         <li className="mt-2">Temperature</li>

//                                                                     </ol>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                         : view == '2' ? <></> : view == '3' ?
//                                                             <div class="container  mt-3 table-scroll "  >

//                                                                 <div className="col text-left" style={{ padding: "0px" }}>
//                                                                     <div className="row">
//                                                                         <div class="col-6">
//                                                                             <b>Organization Name</b>
//                                                                         </div>
//                                                                         <div class="col-6">
//                                                                             Customer 1
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                                 <div className="col mt-6 text-left" style={{ padding: "0px" }}>
//                                                                     <div className="row">
//                                                                         <div class="col-6">
//                                                                             <b>Phone Number</b>
//                                                                         </div>
//                                                                         <div class="col-6">
//                                                                             9025471102
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                                 <div className="col mt-6 text-left" style={{ padding: "0px" }}>
//                                                                     <div className="row">
//                                                                         <div class="col-6">
//                                                                             <b>Email</b>
//                                                                         </div>
//                                                                         <div class="col-6">
//                                                                             Customer@gmail.com
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                                 <div className="col mt-6 text-left" style={{ padding: "0px" }}>
//                                                                     <div className="row">
//                                                                         <div class="col-6">
//                                                                             <b>Address</b>
//                                                                         </div>
//                                                                         <div class="col-6">
//                                                                             22, 7th Cross,
//                                                                             KHB Main Road, Kaval Bairasandra Extn,
//                                                                             RT Nagar,
//                                                                             Bengaluru, Karnataka, 560032, India.
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                             </div> : view
//                                                     }
//                                                     {view == '0' ? <></> : view == '1' ? <></> : view == '2' ? <>  <Button
//                                                         color="primary"

//                                                         onClick={AlarmView}
//                                                         size="md"
//                                                         className="mt-4"
//                                                     >
//                                                         Alarm Event List
//                                                     </Button>  <Button
//                                                         color="primary"

//                                                         onClick={AlarmView2}
//                                                         size="md"
//                                                         className="mt-4"
//                                                     >
//                                                             Alarm Rules
//                                                         </Button></> : view == '3' ? <></> : <></>}
//                                                     {HideContent ? <>{view1 ? <Container className="mt-4 " fluid >

//                                                         <Row className="mt-2 table-scroll1 " style={{ padding: "0px" }}>
//                                                             <Col className="mb-5 mb-xl-0 table-scroll-height1" xl="12" style={{ padding: "0px" }}>

//                                                                 <Card className="shadow">
//                                                                     <CardHeader className="border-0">
//                                                                         <Row className="align-items-center">
//                                                                             <div className="col">
//                                                                                 <Form className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
//                                                                                     <FormGroup className="mb-0">
//                                                                                         <InputGroup className="input-group-alternative">
//                                                                                             <InputGroupAddon addonType="prepend">
//                                                                                                 <InputGroupText>
//                                                                                                     <i className="fas fa-search text-dark" />
//                                                                                                 </InputGroupText>
//                                                                                             </InputGroupAddon>
//                                                                                             <Input placeholder="Search" type="text" className="text-dark" />
//                                                                                         </InputGroup>
//                                                                                     </FormGroup>
//                                                                                 </Form>

//                                                                             </div>

//                                                                         </Row>
//                                                                     </CardHeader>
//                                                                     <Table className="align-items-center table-flush table-scroll" responsive>
//                                                                         <thead className="thead-light ">
//                                                                             <tr>
//                                                                                 <th scope="col">S.No</th>
//                                                                                 <th scope="col">Date & Time</th>
//                                                                                 <th scope="col">Alarm Name</th>
//                                                                                 <th scope="col">Alarm Parameter Name</th>
//                                                                                 <th scope="col">Alarm Condition</th>
//                                                                                 <th scope="col">Alarm Value</th>
//                                                                                 <th scope="col">Alarm Message</th>
//                                                                                 <th scope="col">Action</th>
//                                                                             </tr>
//                                                                         </thead>
//                                                                         <tbody>
//                                                                             <tr>
//                                                                                 <th scope="row">1</th>
//                                                                                 <td>12.32.23 & 12:23:43</td>
//                                                                                 <td>Alarm 1</td>
//                                                                                 <td>
//                                                                                     Temperature
//                                                                                 </td>
//                                                                                 <td>
//                                                                                     ==
//                                                                                 </td>
//                                                                                 <td>
//                                                                                     32
//                                                                                 </td>
//                                                                                 <td>
//                                                                                     Temperature is high
//                                                                                 </td>
//                                                                                 <td>
//                                                                                     <i class="fa fa-edit" aria-hidden="true"></i>

//                                                                                 </td>
//                                                                             </tr>
//                                                                             <tr>
//                                                                                 <th scope="row">1</th>
//                                                                                 <td>12.32.23 & 12:23:43</td>
//                                                                                 <td>Alarm 1</td>
//                                                                                 <td>
//                                                                                     Temperature
//                                                                                 </td>
//                                                                                 <td>
//                                                                                     ==
//                                                                                 </td>
//                                                                                 <td>
//                                                                                     32
//                                                                                 </td>
//                                                                                 <td>
//                                                                                     Temperature is high
//                                                                                 </td>
//                                                                                 <td>
//                                                                                     <i class="fa fa-edit" aria-hidden="true"></i>

//                                                                                 </td>
//                                                                             </tr>
//                                                                             <tr>
//                                                                                 <th scope="row">1</th>
//                                                                                 <td>12.32.23 & 12:23:43</td>
//                                                                                 <td>Alarm 1</td>
//                                                                                 <td>
//                                                                                     Temperature
//                                                                                 </td>
//                                                                                 <td>
//                                                                                     ==
//                                                                                 </td>
//                                                                                 <td>
//                                                                                     32
//                                                                                 </td>
//                                                                                 <td>
//                                                                                     Temperature is high
//                                                                                 </td>
//                                                                                 <td>
//                                                                                     <i class="fa fa-edit" aria-hidden="true"></i>

//                                                                                 </td>
//                                                                             </tr>
//                                                                             <tr>
//                                                                                 <th scope="row">1</th>
//                                                                                 <td>12.32.23 & 12:23:43</td>
//                                                                                 <td>Alarm 1</td>
//                                                                                 <td>
//                                                                                     Temperature
//                                                                                 </td>
//                                                                                 <td>
//                                                                                     ==
//                                                                                 </td>
//                                                                                 <td>
//                                                                                     32
//                                                                                 </td>
//                                                                                 <td>
//                                                                                     Temperature is high
//                                                                                 </td>
//                                                                                 <td>
//                                                                                     <i class="fa fa-edit" aria-hidden="true"></i>

//                                                                                 </td>
//                                                                             </tr>
//                                                                             <tr>
//                                                                                 <th scope="row">1</th>
//                                                                                 <td>12.32.23 & 12:23:43</td>
//                                                                                 <td>Alarm 1</td>
//                                                                                 <td>
//                                                                                     Temperature
//                                                                                 </td>
//                                                                                 <td>
//                                                                                     ==
//                                                                                 </td>
//                                                                                 <td>
//                                                                                     32
//                                                                                 </td>
//                                                                                 <td>
//                                                                                     Temperature is high
//                                                                                 </td>
//                                                                                 <td>
//                                                                                     <i class="fa fa-edit" aria-hidden="true"></i>

//                                                                                 </td>
//                                                                             </tr>
//                                                                             <tr>
//                                                                                 <th scope="row">1</th>
//                                                                                 <td>12.32.23 & 12:23:43</td>
//                                                                                 <td>Alarm 1</td>
//                                                                                 <td>
//                                                                                     Temperature
//                                                                                 </td>
//                                                                                 <td>
//                                                                                     ==
//                                                                                 </td>
//                                                                                 <td>
//                                                                                     32
//                                                                                 </td>
//                                                                                 <td>
//                                                                                     Temperature is high
//                                                                                 </td>
//                                                                                 <td>
//                                                                                     <i class="fa fa-edit" aria-hidden="true"></i>

//                                                                                 </td>
//                                                                             </tr>
//                                                                             <tr>
//                                                                                 <th scope="row">1</th>
//                                                                                 <td>12.32.23 & 12:23:43</td>
//                                                                                 <td>Alarm 1</td>
//                                                                                 <td>
//                                                                                     Temperature
//                                                                                 </td>
//                                                                                 <td>
//                                                                                     ==
//                                                                                 </td>
//                                                                                 <td>
//                                                                                     32
//                                                                                 </td>
//                                                                                 <td>
//                                                                                     Temperature is high
//                                                                                 </td>
//                                                                                 <td>
//                                                                                     <i class="fa fa-edit" aria-hidden="true"></i>

//                                                                                 </td>
//                                                                             </tr>
//                                                                             <tr>
//                                                                                 <th scope="row">1</th>
//                                                                                 <td>12.32.23 & 12:23:43</td>
//                                                                                 <td>Alarm 1</td>
//                                                                                 <td>
//                                                                                     Temperature
//                                                                                 </td>
//                                                                                 <td>
//                                                                                     ==
//                                                                                 </td>
//                                                                                 <td>
//                                                                                     32
//                                                                                 </td>
//                                                                                 <td>
//                                                                                     Temperature is high
//                                                                                 </td>
//                                                                                 <td>
//                                                                                     <i class="fa fa-edit" aria-hidden="true"></i>

//                                                                                 </td>
//                                                                             </tr>

//                                                                         </tbody>
//                                                                     </Table>
//                                                                 </Card>
//                                                             </Col>

//                                                         </Row>
//                                                     </Container> : <Container className="mt-4" fluid >

//                                                         <Row className="mt-2 table-scroll1">
//                                                             <Col className="mb-5 mb-xl-0 table-scroll-height1" xl="12" style={{ padding: "0px" }}>

//                                                                 <Card className="shadow">
//                                                                     <CardHeader className="border-0">
//                                                                         <Row className="align-items-center">
//                                                                             <div className="col">
//                                                                                 <Form className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
//                                                                                     <FormGroup className="mb-0">
//                                                                                         <InputGroup className="input-group-alternative">
//                                                                                             <InputGroupAddon addonType="prepend">
//                                                                                                 <InputGroupText>
//                                                                                                     <i className="fas fa-search text-dark" />
//                                                                                                 </InputGroupText>
//                                                                                             </InputGroupAddon>
//                                                                                             <Input placeholder="Search" type="text" className="text-dark" />
//                                                                                         </InputGroup>
//                                                                                     </FormGroup>
//                                                                                 </Form>

//                                                                             </div>

//                                                                         </Row>
//                                                                     </CardHeader>
//                                                                     <Table className="align-items-center table-flush " responsive>
//                                                                         <thead className="thead-light">
//                                                                             <tr>
//                                                                                 <th scope="col">S.No</th>
//                                                                                 <th scope="col">Alarm Name</th>
//                                                                                 <th scope="col">Alarm Parameter Name</th>
//                                                                                 <th scope="col">Alarm Condition</th>
//                                                                                 <th scope="col">Alarm Value</th>
//                                                                                 <th scope="col">Alarm Message</th>
//                                                                                 <th scope="col">Action</th>
//                                                                             </tr>
//                                                                         </thead>
//                                                                         <tbody>
//                                                                             <tr>
//                                                                                 <th scope="row">1</th>

//                                                                                 <td>Alarm 1</td>
//                                                                                 <td>
//                                                                                     Temperature
//                                                                                 </td>
//                                                                                 <td>
//                                                                                     ==
//                                                                                 </td>
//                                                                                 <td>
//                                                                                     32
//                                                                                 </td>
//                                                                                 <td>
//                                                                                     Temperature is high
//                                                                                 </td>
//                                                                                 <td>
//                                                                                     <i class="fa fa-edit" aria-hidden="true"></i>

//                                                                                 </td>
//                                                                             </tr>
//                                                                             <tr>
//                                                                                 <th scope="row">1</th>

//                                                                                 <td>Alarm 1</td>
//                                                                                 <td>
//                                                                                     Temperature
//                                                                                 </td>
//                                                                                 <td>
//                                                                                     ==
//                                                                                 </td>
//                                                                                 <td>
//                                                                                     32
//                                                                                 </td>
//                                                                                 <td>
//                                                                                     Temperature is high
//                                                                                 </td>
//                                                                                 <td>
//                                                                                     <i class="fa fa-edit" aria-hidden="true"></i>

//                                                                                 </td>
//                                                                             </tr>
//                                                                             <tr>
//                                                                                 <th scope="row">1</th>

//                                                                                 <td>Alarm 1</td>
//                                                                                 <td>
//                                                                                     Temperature
//                                                                                 </td>
//                                                                                 <td>
//                                                                                     ==
//                                                                                 </td>
//                                                                                 <td>
//                                                                                     32
//                                                                                 </td>
//                                                                                 <td>
//                                                                                     Temperature is high
//                                                                                 </td>
//                                                                                 <td>
//                                                                                     <i class="fa fa-edit" aria-hidden="true"></i>

//                                                                                 </td>
//                                                                             </tr>
//                                                                             <tr>
//                                                                                 <th scope="row">1</th>

//                                                                                 <td>Alarm 1</td>
//                                                                                 <td>
//                                                                                     Temperature
//                                                                                 </td>
//                                                                                 <td>
//                                                                                     ==
//                                                                                 </td>
//                                                                                 <td>
//                                                                                     32
//                                                                                 </td>
//                                                                                 <td>
//                                                                                     Temperature is high
//                                                                                 </td>
//                                                                                 <td>
//                                                                                     <i class="fa fa-edit" aria-hidden="true"></i>

//                                                                                 </td>
//                                                                             </tr>
//                                                                             <tr>
//                                                                                 <th scope="row">1</th>

//                                                                                 <td>Alarm 1</td>
//                                                                                 <td>
//                                                                                     Temperature
//                                                                                 </td>
//                                                                                 <td>
//                                                                                     ==
//                                                                                 </td>
//                                                                                 <td>
//                                                                                     32
//                                                                                 </td>
//                                                                                 <td>
//                                                                                     Temperature is high
//                                                                                 </td>
//                                                                                 <td>
//                                                                                     <i class="fa fa-edit" aria-hidden="true"></i>

//                                                                                 </td>
//                                                                             </tr>
//                                                                             <tr>
//                                                                                 <th scope="row">1</th>

//                                                                                 <td>Alarm 1</td>
//                                                                                 <td>
//                                                                                     Temperature
//                                                                                 </td>
//                                                                                 <td>
//                                                                                     ==
//                                                                                 </td>
//                                                                                 <td>
//                                                                                     32
//                                                                                 </td>
//                                                                                 <td>
//                                                                                     Temperature is high
//                                                                                 </td>
//                                                                                 <td>
//                                                                                     <i class="fa fa-edit" aria-hidden="true"></i>

//                                                                                 </td>
//                                                                             </tr>
//                                                                             <tr>
//                                                                                 <th scope="row">1</th>

//                                                                                 <td>Alarm 1</td>
//                                                                                 <td>
//                                                                                     Temperature
//                                                                                 </td>
//                                                                                 <td>
//                                                                                     ==
//                                                                                 </td>
//                                                                                 <td>
//                                                                                     32
//                                                                                 </td>
//                                                                                 <td>
//                                                                                     Temperature is high
//                                                                                 </td>
//                                                                                 <td>
//                                                                                     <i class="fa fa-edit" aria-hidden="true"></i>

//                                                                                 </td>
//                                                                             </tr>
//                                                                             <tr>
//                                                                                 <th scope="row">1</th>

//                                                                                 <td>Alarm 1</td>
//                                                                                 <td>
//                                                                                     Temperature
//                                                                                 </td>
//                                                                                 <td>
//                                                                                     ==
//                                                                                 </td>
//                                                                                 <td>
//                                                                                     32
//                                                                                 </td>
//                                                                                 <td>
//                                                                                     Temperature is high
//                                                                                 </td>
//                                                                                 <td>
//                                                                                     <i class="fa fa-edit" aria-hidden="true"></i>

//                                                                                 </td>
//                                                                             </tr>

//                                                                         </tbody>
//                                                                     </Table>
//                                                                 </Card>
//                                                             </Col>

//                                                         </Row>
//                                                     </Container>}</> : null}
//                                                 </div>
//                                             </Row>
//                                         </CardHeader>

//                                     </Card>
//                                 </Col>
//                             </Row>


//                         </Container>

//                     </>
//             }






//         </>
//     )
// }
