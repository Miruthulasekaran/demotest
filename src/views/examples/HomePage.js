import React, { useState, useEffect } from 'react'
import { Card, CardBody, CardTitle, Container, Row, Col, FormGroup, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter, } from "reactstrap";
export default function HomePage() {
  let home = [{ title: "123456789", img: "assets/img/theme/babyCry.gif" }]

  const [Onorganizationname, setorganizationname] = useState("")
  const [OnAddress, setAddress] = useState("");
  const [DefaultContactName, setDefaultContactName] = useState("")
  const [Defaultemail, setDefaultemail] = useState("")
  const [phone, setphone] = useState()
  const [DefaultDesignation, setDefaultDesignation] = useState("")
  // contact modal
  const [modalContactPersonname, setmodalContactPersonname] = useState("")
  const [ModalContactEmailId, setModalContactEmailId] = useState("")
  const [ModalDesignation, setModalDesignation] = useState("")
  const [ModalPhone, setModalPhone] = useState()
  const [ContactArray, setContactArray] = useState([])
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



  // notificTION modal
  const [modalNotificationContactPersonname, setmodalNotificationContactPersonname] = useState("")
  const [modalNotificationContactPersonemail, setmodalNotificationContactPersonemail] = useState("")
  const [modalNotificationContactPersonDesignation, setmodalNotificationContactPersonDesignation] = useState("")
  const [modalNotificationContactPersonnumber, setmodalNotificationContactPersonnumber] = useState()
  const [notificationarray, setnotificationarray] = useState([])
  const [tempNotify, settempNotify] = useState("")


  // Static notification
  const [NotificationPerson, setNotificationPerson] = useState("")
  const [NotificationEmail, setNotificationEmail] = useState("")
  const [NotificationDesignation, setNotificationDesignation] = useState("")
  const [NotificationPhone, setNotificationPhone] = useState()



  //Update Notification
  const [UpdateNotificationPerson, setUpdateNotificationPerson] = useState("")
  const [UpdateNotificationEmail, setUpdateNotificationEmail] = useState("")
  const [UpdateNotificationDesignation, setUpdateNotificationDesignation] = useState("")
  const [UpdateNotificationPhone, setUpdateNotificationPhone] = useState()
  const [userprofilechange, setuserprofilechange] = useState("")
  const [userprofile, setuserprofile] = useState([])
  const [FindedData, setFindedData] = useState([])


  //add functionality

  let ProfileFind = (e) => {
    console.log("ïnn")

    setuserprofilechange(e)

    let Finddeviceprofile = userprofile.find((value, i) => value.user_profile_name === e);

    setFindedData(Finddeviceprofile.custom_data)


    console.log("this is the finded data", Finddeviceprofile)

  }


  let toggle = () => {
    setmodal(!modal);
  }
  let AddContactModal = () => {
    let createObj = { contactperson: modalContactPersonname, contactEmail: ModalContactEmailId, contactDesignation: ModalDesignation, contactPhone: ModalPhone }
    setContactArray((oldvalues) => {
      return [...oldvalues, createObj]
    })
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
    // setUpdatecontactEmail("")
    // setUpdatecontactname("")
    // setUpdatecontactPhonenumber("")
    // setUpdatecontactdesignation("")
  }
  let updateOrganiiziation = () => {
    setContactArray(ContactArray.map((element) => {
      if (element.contactEmail === tempvalue) {
        return { ...element, contactperson: Updatecontactname, contactEmail: UpdatecontactEmail, contactDesignation: Updatecontactdesignation, contactPhone: UpdatecontactPhonenumber }
      }
      return element;
    }))
    settempvalue("")
  }

  //Notification
  let toggle1 = () => {

    setmodal1(!modal1);
  }

  let AddNotificationModal = () => {
    let createObj = { Notificationcontactperson: modalNotificationContactPersonname, NotificationcontactEmail: modalNotificationContactPersonemail, NotificationcontactDesignation: modalNotificationContactPersonDesignation, NotificationcontactPhone: modalNotificationContactPersonnumber }
    setnotificationarray((oldvalues) => {
      return [...oldvalues, createObj]
    })
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
    setnotificationarray(notificationarray.map((element) => {
      if (element.NotificationcontactEmail === tempNotify) {

        return { ...element, Notificationcontactperson: UpdateNotificationPerson, NotificationcontactEmail: UpdateNotificationEmail, NotificationcontactDesignation: UpdateNotificationDesignation, NotificationcontactPhone: UpdateNotificationPhone }
      }
      return element;
    }))
    settempNotify("")
  }
  let NotifyCancel = () => {
    settempNotify("")
  }


  useEffect(() => {
    fetch("http://127.0.0.1:8088/api/v1/user_profile").then((result) => {
      result.json().then((resp) => {

        console.log("user-profile", resp);
        setuserprofile(resp)

      })
    })

  }, [])

  const [users, setusers] = useState([])
  const [secondaryUser, setsecondaryUser] = useState([])

  useEffect(() => {
    fetch("http://127.0.0.1:8088/api/v1/user").then((result) => {
      result.json().then((resp) => {
        console.log("user", resp);
        setusers(resp)
        setsecondaryUser(resp)

      })
    })

  }, [])


  //Primary user Array
  const [PrimaryUser, setPrimaryUser] = useState([])
  const [primartState, setPrimaryState] = useState("")

  let OnprimaryUser = (e) => {


    setPrimaryState("")

    console.log("e", e)

    let Finddeviceprofile = users.find((value, i) => value.username === e);

    console.log("finded value", Finddeviceprofile)
    let primaryObj = { id: Finddeviceprofile.user_id, username: Finddeviceprofile.username };

    PrimaryUser.find(vendor => vendor['id'] === Finddeviceprofile.user_id) !== undefined ? window.alert("User already exists") :

      setPrimaryUser((oldvalues) => {
        return [...oldvalues, primaryObj]
      })

    console.log("oldvalue", PrimaryUser)



  }


  useEffect(() => {

    console.log("secondary user", PrimaryUser)
    PrimaryUser.forEach((word) => {

      console.log("word", word)
      setsecondaryUser(secondaryUser.filter((value, i) => value.user_id !== word.id))

      // console.log("result", result)

    })

  }, [PrimaryUser])

  // general user

  const [generalUser, setgeneralUser] = useState([])

  let OngeneralUser = (e) => {

    let Finddeviceprofile = secondaryUser.find((value, i) => value.username === e);

    let generalObj = { id: Finddeviceprofile.user_id, username: Finddeviceprofile.username };

    // generalUser.id.includes(Finddeviceprofile.user_id)
    generalUser.find(vendor => vendor['id'] === Finddeviceprofile.user_id) !== undefined ? window.alert("User already exists") :

      setgeneralUser((oldvalues) => {
        return [...oldvalues, generalObj]
      })

  }


  useEffect(() => {

    // console.log("secondary user", PrimaryUser)
    generalUser.forEach((word) => {

      console.log("word", word)
      setusers(users.filter((value, i) => value.user_id !== word.id))

      // console.log("result", result)

    })

  }, [generalUser])

  //delete primary user

  let OndeletePrimaryUser = (e) => {

    let Finddeviceprofile = users.find((value, i) => {
      console.log("valuesss", value)
      return value.user_id === e
    });

    console.log("deleting", Finddeviceprofile)
    // console.log("Ondelete primary user")


    setPrimaryUser((PrimaryUser) => {

      return PrimaryUser.filter((value, i) => value.id !== e);

    });

    console.log("e", e)

    setsecondaryUser((oldvalues) => {

      return [...oldvalues, Finddeviceprofile]

    })

    // let generalObj = { id: e, name: Finddeviceprofile.username }
    // console.log("generalObj", generalObj)

    // setsecondaryUser((oldvalues) => {

    //   return [...oldvalues, generalObj]

    // })

  }


  //delete general user

  let OndeletegeneralUser = (e) => {


    let Finddeviceprofile = secondaryUser.find((value, i) => {
      console.log("valuesss", value)
      return value.user_id === e
    });

    setgeneralUser((generalUser) => {

      return generalUser.filter((value, i) => value.id !== e);

    });

    setusers((oldvalues) => {

      return [...oldvalues, Finddeviceprofile]

    })


  }

  //send all data

  const [additionalFieldsArray, setadditionalFieldsArray] = useState([])

  const [userprofileArray, setuserprofileArray] = useState([])



  // let onSubmit = () => {

  //   let staticContactperson = {



  //   }

  //   let StaticNotificationContact = {}

  //   let additionalFields = {
  //     contactAdditionalField: ,
  //     NotificationAdditionalField: ,

  //   }

  //   setadditionalFieldsArray((oldArray) => {

  //     [...oldArray, additionalFields]

  //   })


  //   setuserprofileArray(() => {



  //   })


  //   let createFinalObj = {

  //     created_by: "test", updated_by: "test", organization_logo: iconimg, organization_name: Onorganizationname, address: OnAddress,

  //     contact_person: staticContactperson, notification_profile: StaticNotificationContact, additional_contacts: additionalFieldsArray,

  //     organization_profile: null, user_profile: userprofileArray

  //   }


  // }


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
        AdditionalContactObjects: ContactArray,
        AdditionalNotificationObjects: notificationarray
      }],

      organization_profile: null, user_profile: FindedData
    })


    // setAdditionalArray((oldvalues) => {

    //   return [...oldvalues, AdditionalContactObj]

    // })

  }, [ContactArray, notificationarray,
    DefaultContactName,
    Defaultemail,
    DefaultDesignation,
    phone,
    NotificationPerson,
    NotificationEmail,
    NotificationDesignation,
    NotificationPhone, FindedData
  ])

  let onSubmit = () => {



    // let user_profile = FindedData;

    fetch("http://127.0.0.1:8088/api/v1/organization", {
      method: 'POST',
      headers: { "content-type": "application/json" },
      body: JSON.stringify(createFinalObj)
    }).then((result) => {
      result.json().then((resp) => {
        console.log("resp", resp);
        // navigate('/OrganizationProfile');
        // history('/OrganizationProfile').then()
        console.log("success")
        console.log("resp", resp);

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
          fetch(`http://127.0.0.1:8088/api/v1/edit_user_organization_role/${data.id}`, {
            method: 'PATCH',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(creategeneralObj)
          }).then((result) => {
            result.json().then((resp) => {
              console.log("secondary", resp);
              // navigate('/OrganizationProfile');
              // history('/OrganizationProfile').then()

              // history.push('/admin/DeviceAlarm');
            })
          })
        })

        PrimaryUser.forEach((primaryData) => {

          console.log("mm")
          fetch(`http://127.0.0.1:8088/api/v1/edit_user_organization_role/${primaryData.id}`, {
            method: 'PATCH',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(createObj)
          }).then((result) => {
            result.json().then((resp) => {
              console.log("primary", resp);
              // navigate('/OrganizationProfile');
              // history('/OrganizationProfile').then()

              // history.push('/admin/DeviceAlarm');
            })
          })




        })


        // history.push('/admin/DeviceCategory');
      })
    })


  }

  const [iconimg, seticonimg] = useState("")
  return (
    <>
      <div>
        <Modal size="lg" isOpen={modal} toggle={toggle} >
          <ModalHeader toggle={toggle}>Add Icons</ModalHeader>
          <ModalBody>
            <div className="row">

              <Col md="6">
                <label>Contact person name</label>
                <input onChange={e => setmodalContactPersonname(e.target.value)} value={modalContactPersonname} className="form-control" type='text' />
              </Col>
              <Col md="6" >
                <label>Contact Person emailid</label>
                <input className="form-control" value={ModalContactEmailId} onChange={e => setModalContactEmailId(e.target.value)} type='email' />
              </Col>
              <Col md="6" className='mt-5'>
                <label>Designation</label>
                <input className="form-control" onChange={e => setModalDesignation(e.target.value)} value={ModalDesignation} type='text' />
              </Col>
              <Col md="6" className='mt-5'>
                <label>Phone Number</label>
                <input className="form-control" onChange={e => setModalPhone(e.target.value)} value={ModalPhone} type='number' />
              </Col>
              {
                ContactArray.map((item, index) => {

                  return <>
                    <hr />  <Row>
                      <Col md="6">
                        <label>{item.contactperson}</label>
                        {/* <input  value={item.contactperson} type='text' /> */}
                      </Col>
                      <Col md="6">
                        <label>{item.contactEmail}</label>
                        {/* <input type='email'  value={item.contactEmail} /> */}
                      </Col>
                      <Col md="6">
                        <label>{item.contactDesignation}</label>
                        {/* <input type='text' value={item.contactDesignation}/> */}
                      </Col>
                      <Col md="6">
                        <label>{item.contactPhone}</label>
                        {/* <input type='number'value={item.contactPhone}/> */}
                      </Col>
                    </Row></>
                })
              }
              <div className="col-md-2">
                <Button color="primary" onClick={AddContactModal} className="mt-4">
                  Add
                </Button>

              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>save</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
      <div className="header  pb-8 pt-5 pt-md-9">
        <Container fluid className='mt--5'>
          <Row>
            <Col md="3">
              <Card>
                <CardBody>
                  <input type='file' onChange={e => seticonimg(URL.createObjectURL(e.target.files[0]))}>
                  </input>
                </CardBody>
              </Card>
            </Col>
            <Col md="9">
              <Card>
                <CardBody>
                  <Row>
                    <Col md="6">
                      <label>Organization Name</label>
                      <input type='text' value={Onorganizationname} onChange={e => { setorganizationname(e.target.value) }} />

                    </Col>
                    <Col md="6">
                      <label>Organization Address</label>
                      <input type='text ' value={OnAddress} onChange={e => setAddress(e.target.value)} />
                    </Col>
                  </Row>
                </CardBody>
              </Card>
              <Col md="9">
                <Card className='table-scroll'>
                  <CardBody>

                    <Row>
                      <Col md="6">
                        <h1> Contact Persons</h1>
                      </Col>
                      <Col md="6">
                        <button className='btn btn-primary' onClick={toggle}>Add</button>
                      </Col>

                      <Col md="6">
                        <label>1 Contact person name</label>
                        <input onChange={e => setDefaultContactName(e.target.value)} value={DefaultContactName} type='text' />
                      </Col>
                      <Col md="6">
                        <label>Contact Person emailid</label>
                        <input type='email' onChange={e => setDefaultemail(e.target.value)} value={Defaultemail} />
                      </Col>
                      <Col md="6">
                        <label>Designation</label>
                        <input type='text' onChange={e => setDefaultDesignation(e.target.value)} value={DefaultDesignation} />
                      </Col>
                      <Col md="6">
                        <label>Phone Number</label>
                        <input type='number' onChange={e => setphone(e.target.value)} value={phone} />
                      </Col>
                    </Row>

                    {
                      ContactArray.map((item, index) => {

                        return <>
                          <hr />
                          <Row>
                            <Col md="12">
                              {item.contactEmail === tempvalue ? <>
                                <button className='btn btn-success btn-sm float-right' onClick={updateOrganiiziation}>update</button>
                                <button className='btn btn-sm float-right ' onClick={cancelOrganiziation}>Cancel</button></> :
                                <button className='btn btn-primary btn-sm float-right' onClick={() => editContactPerson(item.contactEmail)}>Edit</button>}

                              {/* <Row>
                                <Col >
                                  {onChange ? <button>update</button> : <button>Cancel</button>}
                                </Col>
                              </Row> */}
                            </Col>
                            {item.contactEmail === tempvalue ?
                              <><Col md="6">
                                <label>{index + 2} Contact person name</label>
                                <input onChange={e => setUpdatecontactname(e.target.value)} value={Updatecontactname} type='text' />
                              </Col>
                                <Col md="6">
                                  <label>Contact Person emailid</label>
                                  <input onChange={e => setUpdatecontactEmail(e.target.value)} type='email' value={UpdatecontactEmail} />
                                </Col>
                                <Col md="6">
                                  <label>Designation</label>
                                  <input type='text' onChange={e => setUpdatecontactdesignation(e.target.value)} value={Updatecontactdesignation} />
                                </Col>
                                <Col md="6">
                                  <label>Phone Number</label>
                                  <input type='number' onChange={e => setUpdatecontactPhonenumber(e.target.value)} value={UpdatecontactPhonenumber} />

                                </Col></> : <><Col md="6">
                                  <label>{index + 2} Contact person name</label>
                                  <input onChange={e => setUpdatecontactname(e.target.value)} value={item.contactperson} type='text' />
                                </Col>
                                <Col md="6">
                                  <label>Contact Person emailid</label>
                                  <input onChange={e => setUpdatecontactEmail(e.target.value)} type='email' value={item.contactEmail} />
                                </Col>
                                <Col md="6">
                                  <label>Designation</label>
                                  <input type='text' onChange={e => setUpdatecontactdesignation(e.target.value)} value={item.contactDesignation} />
                                </Col>
                                <Col md="6">
                                  <label>Phone Number</label>
                                  <input type='number' onChange={e => setUpdatecontactPhonenumber(e.target.value)} value={item.contactPhone} />

                                </Col></>}

                          </Row></>
                      })
                    }

                  </CardBody>
                </Card>

              </Col>
              <Col md="9">
                <Card>
                  <CardBody>

                    <Row>
                      <Col md="6">
                        <h1>Notification Contact </h1>
                      </Col>
                      <Col md="6">
                        <button className='btn btn-primary' onClick={toggle1}>Add</button>
                      </Col>

                      <Col md="6">
                        <label>1 Notification Contact person name</label>
                        <input type='text' value={NotificationPerson} onChange={e => setNotificationPerson(e.target.value)} />
                      </Col>
                      <Col md="6">
                        <label> Notification Contact person emailid</label>
                        <input type='email' value={NotificationEmail} onChange={e => setNotificationEmail(e.target.value)} />
                      </Col>
                      <Col md="6">
                        <label> Notification person Designation</label>
                        <input type='text' value={NotificationDesignation} onChange={e => setNotificationDesignation(e.target.value)} />
                      </Col>
                      <Col md="6">
                        <label>Notification  person Phone Number</label>
                        <input type='number' value={NotificationPhone} onChange={e => setNotificationPhone(e.target.value)} />
                      </Col>
                    </Row>

                    {
                      notificationarray.map((item, index) => {

                        return <><hr />

                          <Row key={index}>
                            <Col md="12">
                              {item.NotificationcontactEmail === tempNotify ? <>
                                <button className='btn btn-success btn-sm float-right' onClick={UpdateNotification}>update</button>
                                <button className='btn btn-sm float-right' onClick={NotifyCancel}>Cancel</button></> :
                                <button className='btn btn-primary btn-sm float-right' onClick={() => editNotificationPerson(item.NotificationcontactEmail)}>Edit</button>}

                            </Col>

                            {item.NotificationcontactEmail === tempNotify ? <>
                              <Col md="6">

                                <label>{index + 2} Notification Contact person name</label>
                                <input type='text' value={UpdateNotificationPerson} onChange={e => setUpdateNotificationPerson(e.target.value)} />
                              </Col>
                              <Col md="6">
                                <label> Notification Contact person emailid</label>
                                <input type='email' value={UpdateNotificationEmail} onChange={e => setUpdateNotificationEmail(e.target.value)} />
                              </Col>
                              <Col md="6">
                                <label> Notification person Designation</label>
                                <input type='text' value={UpdateNotificationDesignation} onChange={e => setUpdateNotificationDesignation(e.target.value)} />
                              </Col>
                              <Col md="6">
                                <label>Notification  person Phone Number</label>
                                <input type='number' value={UpdateNotificationPhone} onChange={e => setUpdateNotificationPhone(e.target.value)} />
                              </Col></> : <> <Col md="6">
                                <label>{index + 2} Notification Contact person name</label>
                                <input type='text' value={item.Notificationcontactperson} />
                              </Col>
                              <Col md="6">
                                <label> Notification Contact person emailid</label>
                                <input type='email' value={item.NotificationcontactEmail} />
                              </Col>
                              <Col md="6">
                                <label> Notification person Designation</label>
                                <input type='text' value={item.NotificationcontactDesignation} />
                              </Col>
                              <Col md="6">
                                <label>Notification  person Phone Number</label>
                                <input type='number' value={item.NotificationcontactPhone} />
                              </Col></>}
                          </Row></>
                      })
                    }

                  </CardBody>
                </Card>

              </Col>
              <Col md="9">
                <Card>
                  <CardBody>

                    <Row>


                      <Col md="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Add primary Users
                          </label>
                          <Input type="select" onChange={e => OnprimaryUser(e.target.value)} className='text-dark' name="select" id="exampleSelect">
                            <option value="" selected disabled>Select primary User</option>
                            {users.map((item, index) => {
                              // {console.log("option",item.parameter)}
                              return <>
                                <option key={index} value={item.username} className='text-dark'>{item.username}</option>
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

                          {/* {PrimaryUser.map((item, index) => {
                            { let a = PrimaryUser.find((value, i) => {value.user_profile_name === item) }
                         
                          })} */}

                        </FormGroup>
                      </Col>
                      <Col md="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Add General  Users
                          </label>
                          <Input type="select" onChange={e => OngeneralUser(e.target.value)} className='text-dark' name="select" id="exampleSelect">

                            <option value="" selected disabled>Select General User</option>
                            {secondaryUser.map((item, index) => {

                              // {console.log("option",item.parameter)}
                              return <>
                                <option key={index} value={item.username} className='text-dark'>{item.username}</option>
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
                      <Col md="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Add User Profile
                          </label>

                          <Input type="select" onChange={e => ProfileFind(e.target.value)} className='text-dark' name="select" id="exampleSelect">
                            <option value="" selected disabled>Select User Profile</option>
                            {userprofile.map((item, index) => {
                              return <option key={index} value={item.user_profile_name} className='text-dark'>{item.user_profile_name}</option>
                            })
                            }
                          </Input>

                        </FormGroup>
                      </Col>

                      <Col md="6">
                        <FormGroup>

                          {FindedData.map((item, index) => {


                            return <p key={index} value={item.parameter} className='text-dark'>{item.parameter}</p>
                          })


                          }

                        </FormGroup>
                      </Col>


                    </Row>
                  </CardBody>
                </Card>

              </Col>
              <Row>
                <Col>
                  {/* <button className='btn btn-warning'>Add</button> */}
                  <button className='btn btn-primary float-right' onClick={onSubmit}>submit</button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        {/* Notification MOdal Starting */}
        <Modal size="lg" isOpen={modal1} toggle={toggle1} >
          <ModalHeader toggle={toggle1}>Add Icons</ModalHeader>
          <ModalBody>
            <div className="row">

              <Col md="6">
                <label>Contact person name</label>
                <input onChange={e => setmodalNotificationContactPersonname(e.target.value)} value={modalNotificationContactPersonname} className="form-control" type='text' />
              </Col>
              <Col md="6" >
                <label>Contact Person emailid</label>
                <input className="form-control" onChange={e => setmodalNotificationContactPersonemail(e.target.value)} value={modalNotificationContactPersonemail} type='email' />
              </Col>
              <Col md="6" className='mt-5'>
                <label>Designation</label>
                <input className="form-control" onChange={e => setmodalNotificationContactPersonDesignation(e.target.value)} value={modalNotificationContactPersonDesignation} type='text' />
              </Col>
              <Col md="6" className='mt-5'>
                <label>Phone Number</label>
                <input className="form-control" onChange={e => setmodalNotificationContactPersonnumber(e.target.value)} value={modalNotificationContactPersonnumber} type='number' />
              </Col>
              {
                notificationarray.map((item, index) => {

                  return <>
                    <hr />  <Row>
                      <Col md="6">
                        <label>{item.Notificationcontactperson}</label>
                        {/* <input  value={item.contactperson} type='text' /> */}
                      </Col>
                      <Col md="6">
                        <label>{item.NotificationcontactEmail}</label>
                        {/* <input type='email'  value={item.contactEmail} /> */}
                      </Col>
                      <Col md="6">
                        <label>{item.NotificationcontactDesignation}</label>
                        {/* <input type='text' value={item.contactDesignation}/> */}
                      </Col>
                      <Col md="6">
                        <label>{item.NotificationcontactPhone}</label>
                        {/* <input type='number'value={item.contactPhone}/> */}
                      </Col>
                    </Row></>
                })
              }
              <div className="col-md-2">
                <Button color="primary" onClick={AddNotificationModal} className="mt-4">
                  Add
                </Button>

              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle1}>save</Button>{' '}
            <Button color="secondary" onClick={toggle1}>Cancel</Button>
          </ModalFooter>
        </Modal>
        {/* Notification MOdal ending */}
      </div>


    </>
  )
}
