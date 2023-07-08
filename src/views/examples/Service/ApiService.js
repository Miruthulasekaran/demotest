import React, { Component } from 'react'
// import manifest from "../../../../public/manifest.json"
// import manifest from "../../../../public/manifest.json"

// const Base_Url = manifest.Base_Url;
// console.log("Base_Url",Base_Url)
// const Base_Url = "http://www.hubeoxys.com:8086/api/v1";
const Base_Url = "http://192.168.0.172:8090/api/v1";
//  import from "public\manifest.json"
export default new class ApiService extends Component {
                // Home Page --> Count 
    DeviceCount() {
        return fetch(`${Base_Url}/device_count`, {
        }).then((result) => result.json()
        )
    }
    organizationCount() {
        return fetch(`${Base_Url}/organization_count`, {
        }).then((result) => result.json()
        )
    }
    userCount() {
        return fetch(`${Base_Url}/user_count`, {
        }).then((result) =>
            result.json()
        )
    }
    alarmCount() {
        return fetch(`${Base_Url}/alarm_rule_count`, {
        }).then((result) =>
            result.json()
        )
    }
    // Users Page  ------>
    users() {
        return fetch(`${Base_Url}/user`).then((result) =>
            result.json()
        )
    }
    UsersActivity(idtest, finalArr) {
        return fetch(`${Base_Url}/edit_user_activity/${idtest}`, {
            method: 'PATCH',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(finalArr)
        }).then((result) =>
            result.json()
        )
    }

    // Organization Profile --->

    //get
    OrganizationProfile() {
        return fetch(`${Base_Url}/organization_profile`, {
        }).then((result) => result.json()
        )
    }
    // delete
    deleteOrgProf(id) {
        return fetch(`${Base_Url}/organization_profile_delete/${id}`, {
            method: 'DELETE',
        })
    }


    // Add Organization Profile --->
    OrganizationProfilePost(finalArr) {
        return fetch(`${Base_Url}/organization_profile`, {
            method: 'POST',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(finalArr)
        }).then((result) => result.json()
        )
    }


    // Edit Organization Profile --->

    //Get
    OrganizationProfileEditGet(idds) {
        return fetch(`${Base_Url}/organization_profile/${idds}`).then((result) => result.json()
        )
    }

    //Patch

    OrganizationProfilePatch(idds, finalArr) {
        return fetch(`${Base_Url}/organization_profile_edit/${idds}`, {
            method: 'PATCH',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(finalArr)
        }).then((result) => result.json())
    }

    // User PRofile ---------->


    //get 

    UserProfileGet() {
        return fetch(`${Base_Url}/user_profile`, {
        }).then((result) => result.json())
    }
    //Edit 

    UserProfileEdit(id) {
        return fetch(`${Base_Url}/user_profile/${id}`).then((result) => result.json())
    }

    //delete

    UserProfileDelete(id) {
        return fetch(`${Base_Url}/delete_user_profile/${id}`, {
            method: 'DELETE',
        })
    }


    // ADD User PRofile ---------->

    //Post
    UserProfilePost(finalArr) {
        return fetch(`${Base_Url}/user_profile`, {
            method: 'POST',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(finalArr)
        }).then((result) => result.json()
        )
    }

    // Edit User PRofile ---------->

    //Get
    UserProfileEditGet(paramsid) {
        return fetch(`${Base_Url}/user_profile/${paramsid}`).then((result) => result.json()
        )
    }
    //Patch

    UserProfilePatch(id, finalArr) {
        return fetch(`${Base_Url}/edit_user_profile/${id}`, {
            method: 'PATCH',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(finalArr)
        }).then((result) => result.json()
        )
    }

    //Organization

    //Get
    OrganizationList() {
        return fetch(`${Base_Url}/organization`, {
        }).then((result) => result.json())
    }

    //Delete
    OrganizationListDelete(id) {
        return fetch(`${Base_Url}/delete_organization/${id}`, {
            method: 'DELETE',
        }).then((result) => result.json())
    }
    // ADD Organization

    // EDit Organization



    //Device Profile

    //delete

    DeviceProfiledelete(show) {
        return fetch(`${Base_Url}/delete_device_profile/${show}`, {
            method: 'DELETE',
        })
    }
    //get

    DeviceProfileget() {
        return fetch(`${Base_Url}/device_profile`).then((result) =>
            result.json())
    }
    // Edit 
    DeviceProfileEdit(id) {
        return fetch(`${Base_Url}/edit_device_profile/${id}`).then((result) => result.json())
    }

    //  Add Device Profile
    //Post
    DeviceProfileAdding(finalArr) {
        return fetch(`${Base_Url}/device_profile`, {
            method: 'POST',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(finalArr)
        }).then((result) =>
            result.json())
    }
    //  Edit  Device Profile

    //get
    DeviceProfileEdits(idds) {
        return fetch(`${Base_Url}/device_profile/${idds}`).then((result) =>
            result.json())
    }
    //Patch 
    deviceprofilePatch(idds, finalArr) {
        return fetch(`${Base_Url}/edit_device_profile/${idds}`, {
            method: 'PATCH',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(finalArr)
        }).then((result) => result.json())
    }


    // Device Data Profile

    //Get
    devicedataprofileGet() {
        return fetch(`${Base_Url}/device_data_profile`, {
        }).then((result) =>
            result.json())
    }

    //Edit 
    DeviceDataProfileEdit(id) {
        return fetch(`${Base_Url}/edit_device_data_profile${id}`, {
        }).then((result) =>
            result.json())
    }
    //Delete

    deletedevicedataProfileDelete(id) {
        return fetch(`${Base_Url}/delete_device_data_profile/${id}`, {
            method: 'DELETE',
        })
    }


    //  add Device Data Profile

    //Post
    DeviceDataProfilePost(finalArr) {
        return fetch(`${Base_Url}/device_data_profile`, {
            method: 'POST',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(finalArr)
        })
            .then((result) =>
                result.json())
    }


    //  Edit  Device Data Profile
    DeviceDataProfileGet(idds) {
        return fetch(`${Base_Url}/device_data_profile/${idds}`).then((result) =>
            result.json())
    }
    // Patch
    DeviceDataProfilePatch(idds, edit1) {
        return fetch(`${Base_Url}/edit_device_data_profile/${idds}`, {
            method: 'PATCH',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(edit1)
        }).then((result) =>
            result.json())
    }

    //Device Alarm

    //get
    DeviceAlarmGet() {
        return fetch(`${Base_Url}/alarm_rule`).then((result) =>
            result.json())
    }

    //Delete

    DeviceAlarmDelete(e) {
        return fetch(`${Base_Url}/delete_alarm_rule/${e}`, {
            method: 'DELETE',
        })
    }

    // Add Device Alarm

    //Post 

    DeviceAlarmPost(createFinalObj) {
        return fetch(`${Base_Url}/alarm_rule`, {
            method: 'POST',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(createFinalObj),
        }).then((result) =>
            result.json())
    }

    //Get

    DeviceAlarmGets() {
        return fetch(`${Base_Url}/device_data_profile`).then((result) =>
            result.json())
    }


    // Edit  Device Alarm

    //Get
    DeviceAlarmEditGet(id) {
        return fetch(`${Base_Url}/alarm_rule/${id}`).then((result) =>
            result.json())
    }

    // Get  device_data_profile

    DeviceAlarmEditDevicedataprofile() {
        return fetch(`${Base_Url}/device_data_profile`).then((result) =>
            result.json())
    }

    //Patch
    DeviceAlarmEditPatch(idds, finalArr) {
        return fetch(`${Base_Url}/edit_alarm_rule/${idds}`, {
            method: 'PATCH',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(finalArr),
        }).then((result) =>
            result.json())
    }



    // Device Category

    //Get

    DeviceCategoryGet() {
        return fetch(`${Base_Url}/device_category`).then((result) =>
            result.json())
    }

    //Dlete

    DeviceCategoryDelete(e) {
        return fetch(`${Base_Url}/delete_device_category/${e}`, {
            method: 'DELETE',
        })
    }
    //  Add Device Category

    //Get device_profile
    deviceProfileGet() {
        return fetch(`${Base_Url}/device_profile`).then((result) =>
            result.json())
    }
    // get device_data_profile

    deviceDataProfileDet() {
        return fetch(`${Base_Url}/device_data_profile`, {
        }).then((result) =>
            result.json())
    }
    // get alarm
    AlarmRuleGet() {
        return fetch(`${Base_Url}/alarm_rule`, {

        }).then((result) =>
            result.json())
    }

    //Post

    DeviceCategoryPost(FinalObj) {
        return fetch(`${Base_Url}/device_category`, {
            method: 'POST',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(FinalObj)
        }).then((result) =>
            result.json())
    }

    // Edit  Device Category

    //get device_profile

    DeviceCategoryEditGet() {
        return fetch(`${Base_Url}/device_profile`).then((result) =>
            result.json())
    }
    // get device_data_profile

    DeviceCatEditGetdevicedataprofile() {
        return fetch(`${Base_Url}/device_data_profile`, {
        }).then((result) =>
            result.json())
    }

    // get device_ALarm
    deviceCategoryALarm() {
        return fetch(`${Base_Url}/alarm_rule`, {

        }).then((result) =>
            result.json())
    }
    //Get 

    DeviceCategoryEditgetting(id) {
        return fetch(`${Base_Url}/device_category/${id}`).then((result) =>
            result.json())
    }

    //Patch
    deviceCategoryEditPatching(idds, edit1) {
        return fetch(`${Base_Url}/edit_device_category/${idds}`, {
            method: 'PATCH',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(edit1)
        }).then((result) =>
            result.json())
    }

    //Devices

    //get device

    Device1() {
        return fetch(`${Base_Url}/device`, {
        }).then((result) =>
            result.json())
    }




    //Alarms

    //alrm event list 

    AlarmEvent() {
        return fetch(`${Base_Url}/alarm_event_lists`, {
        }).then((result) =>
            result.json())
    }



















































    //Sms Notification
    //get
    GetSms() {
        return fetch(`${Base_Url}/sms_config`).then((result) =>
            result.json())
    }
    //delete

    DeleteSMs(id) {
        return fetch(`${Base_Url}/delete_sms_config/${id}`, {
            method: 'DELETE',
        })
    }
    //sms id
    SmsID(id) {
        return fetch(`${Base_Url}/sms_config/${id}`, {
        }).then((result) =>
            result.json())
    }

    //Organization

    SmsOrganization() {
        return fetch(`${Base_Url}/organization`, {
        }).then((result) =>
            result.json())
    }
    //Patch sms Temp 
    AddSms(Temp, finalArr) {
        return fetch(`${Base_Url}/add_sms_content/${Temp}`, {
            method: 'PATCH',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(finalArr)
        }).then((result) =>
            result.json())
    }
    //Getting sms 
    GettingSms() {
        return fetch(`${Base_Url}/sms_config`).then((result) =>
            result.json())
    }
    // sms notification ADD

    SmsAdd(createFinalObj) {
        return fetch(`${Base_Url}/sms_config`, {
            method: 'POST',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(createFinalObj)
        }).then((result) =>
            result.json())
    }

    //Edit

    //get 


    EditSms(id) {
        return fetch(`${Base_Url}/sms_config/${id}`).then((result) =>
            result.json())
    }
    //Patch 

    EditSmsConfig(id, finalArr) {
        return fetch(`${Base_Url}/edit_sms_config/${id}`, {
            method: 'PATCH',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(finalArr)
        }).then((result) =>
            result.json())
    }


    //Email

    //Oraganization


    EmailOrganiation() {
        return fetch(`${Base_Url}/organization`, {
        }).then((result) =>
            result.json())
    }
    //Emailid

    EmailId(id) {
        return fetch(`${Base_Url}/email_config/${id}`, {
        }).then((result) =>
            result.json())
    }
    //Patch

    emailPatch(Temp, finalArr) {
        return fetch(`${Base_Url}/add_email_content/${Temp}`, {
            method: 'PATCH',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(finalArr)
        }).then((result) =>
            result.json())
    }

    //Get email

    EmailGet() {
        return fetch(`${Base_Url}/email_config`).then((result) =>
            result.json())
    }

    //Delete Email

    EmailDelete(id) {
        return fetch(`${Base_Url}/delete_email_config/${id}`, {
            method: 'DELETE',
        })
    }

    //Email aDd
    // Post
    EmailPost(createFinalObj) {
        return fetch(`${Base_Url}/email_config`, {
            method: 'POST',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(createFinalObj)
        }).then((result) =>
            result.json())
    }
    //Edit Email

    //get
    EditemailGet(id) {
        return fetch(`${Base_Url}/email_config/${id}`).then((result) =>
            result.json())
    }

    //Patch
    EditEmailPatch(id, finalArr) {
        return fetch(`${Base_Url}/edit_email_config/${id}`, {
            method: 'PATCH',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(finalArr)
        }).then((result) =>
            result.json())
    }




    //UserDetails
    //get userdetails
    getUserDetails_id(id) {

        console.log("efaetrtr", id)

        // this.id = id;
        return fetch(`${Base_Url}/user/${id}`).then((result) => result.json())
    }

    //Add deviceDATA pROFILE

    AddDevice_dataProfile(finalArr) {

        return fetch(`${Base_Url}/device_data_profile`, {
            method: 'POST',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(finalArr)
        }).then((result) =>
            result.json()

        )
    }


    //oRGANIZATIONaDD
    ListUser_profile() {

        return fetch(`${Base_Url}/user_profile`, {
        }).then((result) => result.json())
    }
    //for Userlists
    userlist = () => {

        return fetch(`${Base_Url}/user`).then((result) => result.json())

    }
    //adding organization

    organizationAdd(createFinalObj) {

        return fetch(`${Base_Url}/organization`, {
            method: 'POST',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(createFinalObj)
        }).then((result) => result.json()
        )
    }
    //userOrganization_Role
    Edit_UserOrganization_Role(id, creategeneralObj) {

        id = id;
        return fetch(`${Base_Url}/edit_user_organization_role/${id}`, {
            method: 'PATCH',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(creategeneralObj)
        })

    }


    //userOrganization_Role
    Edit_UserOrganization_Role(id, creategeneralObj) {

        id = id;
        return fetch(`${Base_Url}/edit_user_organization_role/${id}`, {
            method: 'PATCH',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(creategeneralObj)
        })

    }


    //dEVEICE CAT
    // for Device List
    //   deviceProfileList = () => {

    //     return fetch(`${Base_Url}/device_profile`).then((response) => response.json());
    //   }
    //list Device Data Profile
    listDevice_dataProfile() {

        return fetch(`${Base_Url}/device_data_profile`, {
        }).then((result) => result.json())
    }

    List_Alarm() {
        return fetch(`${Base_Url}/alarm_rule`).then((result) => result.json())

    }

    //for Add category
    AddCategory(FinalObj) {
        return fetch(`${Base_Url}/device_category`, {
            method: 'POST',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(FinalObj)
        }).then((result) =>
            result.json()

        )
    }


    //dEVICE CAT EDIT

    //for getting category with id
    getCategory_id(idds) {

        return fetch(`${Base_Url}/device_category/${idds}`).then((result) => result.json())

    }

    // for device profile list
    deviceProfileList = () => {

        return fetch(`${Base_Url}/device_profile`).then((response) => response.json());
    }

    //list Device Data Profile


    //List Alarm
    List_Alarm() {
        return fetch(`${Base_Url}/alarm_rule`).then((result) => result.json())

    }

    update_category(idds, edit1) {


        return fetch(`${Base_Url}/edit_device_category/${idds}`, {
            method: 'PATCH',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(edit1)
        }).then((result) =>
            result.json()

        )

    }

    //Device edit
    //device id

    getdevice_id(idds) {

        return fetch(`${Base_Url}/device/${idds}`).then((result) => result.json())

    }
    //device category list
    listCategory() {
        return fetch(`${Base_Url}/device_category`).then((result) => result.json())
    }

    //edit device
    edit_Device(Id, FinalObj) {

        return fetch(`${Base_Url}/edit_device/${Id}`, {
            method: 'PATCH',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(FinalObj)
        })
    }

    Organization_List() {
        return fetch(`${Base_Url}/organization`, {
        }).then((result) => result.json()
        )

    }
}