import React from "react";
import { useLocation, Route, Switch, Redirect } from "react-router-dom";
// reactstrap components
import { Container } from "reactstrap";
// core components
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import AdminFooter from "components/Footers/AdminFooter.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import OrganizationProfileEdit from "views/examples/OrganizationProfileEdit";
import routes from "routes.js";
import UserDetails from "views/examples/UserDetails";
import OrganizationProfile from "views/examples/OrganizationProfile";
import OrganizationProfileAdd from "views/examples/OrganizationProfileAdd";
import UserProfileAdd from "views/examples/UserProfileAdd";
import UserProfileEdit from "views/examples/UserProfileEdit";
import Icons from "views/examples/Icons";
import DeviceProfileAdd from "views/examples/Devices/DeviceProfile/DeviceProfileAdd";
import DeviceProfileEdit from "views/examples/Devices/DeviceProfile/DeviceProfileEdit";
import DeviceProfile from "views/examples/Devices/DeviceProfile/DeviceProfile";
import DeviceDataProfile from "views/examples/Devices/DeviceDataProfile/DeviceDataProfile";
import DeviceDataProfileAdd from "views/examples/Devices/DeviceDataProfile/DeviceDataProfileAdd";
import DeviceDataProfileEdit from "views/examples/Devices/DeviceDataProfile/DeviceDataProfileEdit";
import DeviceAlarm from "views/examples/Devices/DeviceAlarm/DeviceAlarm";
import DeviceAlarmAdd from "views/examples/Devices/DeviceAlarm/DeviceAlarmAdd";
import DeviceAlarmEdit from "views/examples/Devices/DeviceAlarm/DeviceAlarmEdit";
import DeviceCategoryEdit from "views/examples/Devices/DeviceCategory/DeviceCategoryEdit";
import DeviceCategory from "views/examples/Devices/DeviceCategory/DeviceCategory";
import DeviceCategoryAdd from "views/examples/Devices/DeviceCategory/DeviceCategoryAdd";
import Device from "views/examples/Devices/DeviceList/Device";
// import DeviceAdd from "views/examples/Devices/DeviceList/DeviceAdd";
import DeviceEdit from "views/examples/Devices/DeviceList/DeviceEdit";
import CrendentialsList from "views/examples/PlatformInformation/CrendentialsList/CrendentialsList";
import EditCredentials from "views/examples/PlatformInformation/CrendentialsList/EditCredentials";
import AddCredentials from "views/examples/PlatformInformation/CrendentialsList/AddCredentials";
import PlatformInformation from "views/examples/PlatformInformation/PlatformInfomation/PlatformInformation";
import SMSNotificationEdit from "views/examples/NotificationContact/SMSNotification/SMSNotificationEdit";
import SMSNotification from "views/examples/NotificationContact/SMSNotification/SMSNotification";
import EmailNotification from "views/examples/NotificationContact/EmailNotification/EmailNotification";
import EmailNotificationEdit from "views/examples/NotificationContact/EmailNotification/EmailNotificationEdit";
import EmailNotificationAdd from "views/examples/NotificationContact/EmailNotification/EmailNotificationAdd";
import SMSNotificationAdd from "views/examples/NotificationContact/SMSNotification/SMSNotificationAdd";
import DeviceDashboard from "views/examples/Devices/DeviceDashboard/DeviceDashboard";
import OrganizationAdd from "views/examples/Organization/OrganizationAdd";
import OrganizationList from "views/examples/Organization/OrganizationList";
// import UserProfileEdit from "views/examples/UserProfileEdit";
import OrganizationEdit from "views/examples/Organization/OrganizationEdit";
import AddDevice from "views/examples/Devices/DeviceList/AddDevice";
import ACDdashboard from "views/examples/ACDdashboard";
// import Paginationnn from "views/examples/Paginationnn";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Admin = (props) => {
  const mainContent = React.useRef(null);
  const location = useLocation();

  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
  }, [location]);

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin" ) {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };

  const getBrandText = (path) => {
    for (let i = 0; i < routes.length; i++) {
      if (
        props.location.pathname.indexOf(routes[i].layout + routes[i].path) !==
        -1
      ) {
        return routes[i].name;
      }
      else if (path == '/admin/OrganizationProfile') {
        return " Organization profile"
      }
      else if (path == "/admin/icons") {
        return " User profile"
      }
      else if (path == '/admin/index') {
        return "Users"
      }
      else if (path == '/admin/UserProfileEdit') {
        return "Edit user profile"
      }
      else if (path == '/admin/DeviceProfile') {
        return "Device profile"
      }
      else if (path == '/admin/DeviceDataProfile') {
        return "Device data profile"
      }
      else if (path == '/admin/DeviceAlarm') {
        return "Device alarm"
      }
      else if (path == '/admin/DeviceCategory') {  
        return "Device category"
      }
      else if (path == '/admin/OrganizationEdit') {  
        return "Organization edit"
      }
      else if (path == '/admin/Device') {
        return "Device "
      }
      else if(path == '/admin/DeviceDashboard'){
        return "Device dashboard"
      }
      else if(path == '/admin/CrendentialsList'){
        return "Crendentials"
      }
      else if(path == '/admin/PlatformInformation'){
        return "Platform information"
      }
      else if(path == '/admin/SMSNotification'){
        return "SMS notification"
      }
      else if(path == '/admin/EmailNotification'){
        return "Email notification"
      }
      else if(path == '/admin/userdetails'){
        return "User details"
      }
      else if(path == '/admin/OrganizationProfileEdit'){
        return "Edit organization profile"
      }
      else if(path == '/admin/OrganizationProfileAdd'){
        return "Add organization profile"
      }
      else if(path == '/admin/UserProfileAdd'){
        return "Add user profile"
      }
      else if(path == '/admin/UserProfileEdit'){
        return "Edit user profile"
      }
      else if(path == '/admin/OrganizationAdd'){
        return "Add organization"
      }
      else if(path == '/admin/OrganizationList'){
        return "Organization"
      }
      else if(path == '/admin/DeviceProfileAdd'){
        return "Add device profile"
      }
      else if(path == '/admin/DeviceProfileEdit'){
        return "Edit device profile"
      }
      else if(path == '/admin/DeviceDataProfileAdd'){
        return "Add device data profile"
      }
      else if(path == '/admin/DeviceDataProfileEdit'){
        return "Edit device data profile"
      }
      else if(path == '/admin/DeviceAlarmAdd'){
        return "Add device alarm"
      }
      else if(path == '/admin/DeviceAlarmEdit'){
        return "Edit device alarm"
      }
     
      else if(path == '/admin/DeviceCategoryAdd'){
        return "Add device category"
      }
      else if(path == '/admin/DeviceCategoryEdit'){
        return "Edit device category"
      }
      else if(path == '/admin/DeviceEdit'){
        return "Edit device"
      }
      else if(path == '/admin/EditCredentials'){
        return "Edit credentials"
      }
      else if(path == '/admin/AddCredentials'){
        return "Add credentials"
      }
      else if(path == '/admin/SMSNotificationAdd'){
        return "Add SMS notification"
      }
      else if(path == '/admin/SMSNotificationEdit'){
        return "Edit SMS notification"
      }
      else if(path == '/admin/EmailNotificationAdd'){
        return "Add Email notification"
      }
      else if(path == '/admin/EmailNotificationEdit'){
        return "Edit Email notification"
      }
      else if(path == '/admin/UserProfileEdit'){
        return "Edit user profile"
      }
      else if(path == '/admin/AddDevice'){
        return "Add device"
      }
    }
    return "Brand";
  };

  return (
    <>
    
      <ToastContainer></ToastContainer>
      <Sidebar
        {...props}
        routes={routes}
        logo={{
          innerLink: "/admin/index",
          imgSrc: require("../assets/img/brand/argon-react.png"),
          imgAlt: "..."
        }}
      />
      <div className="main-content" ref={mainContent}>
        <AdminNavbar
          {...props}
          brandText={getBrandText(props.location.pathname)}
        />
        <Switch>
          {getRoutes(routes)}
          <Route exact path="/admin/userdetails/:id" component={UserDetails}/>
          <Route exact path="/admin/OrganizationProfile" component={OrganizationProfile}/>
          <Route exact path="/admin/OrganizationProfileAdd" component={OrganizationProfileAdd}/>
          <Route exact path="/admin/OrganizationProfileEdit/:id" component={OrganizationProfileEdit}/> 
          <Route exact path="/admin/OrganizationEdit/:id" component={OrganizationEdit}/> 
          <Route exact path="/admin/Icons" component={Icons}/>
          <Route exact path="/admin/UserProfileAdd" component={UserProfileAdd}/>
          <Route exact path="/admin/UserProfileEdit/:id" component={UserProfileEdit}/>
          <Route exact path="/admin/OrganizationList" component={OrganizationList}/>
          <Route exact path="/admin/OrganizationAdd" component={OrganizationAdd}/>
          <Route exact path="/admin/DeviceProfile" component={DeviceProfile}/>
          <Route exact path="/admin/DeviceProfileAdd" component={DeviceProfileAdd}/>
          <Route exact path="/admin/DeviceProfileEdit/:id" component={DeviceProfileEdit}/>
          <Route exact path="/admin/DeviceDataProfile" component={DeviceDataProfile}/>
          <Route exact path="/admin/DeviceDataProfileAdd" component={DeviceDataProfileAdd}/>
          <Route exact path="/admin/DeviceDataProfileEdit/:id" component={DeviceDataProfileEdit}/>
          <Route exact path="/admin/DeviceAlarm" component={DeviceAlarm}/>
          <Route exact path="/admin/DeviceAlarmAdd" component={DeviceAlarmAdd}/>
          <Route exact path="/admin/DeviceAlarmEdit/:id" component={DeviceAlarmEdit}/>
          <Route exact path="/admin/DeviceCategory" component={DeviceCategory}/>
          <Route exact path="/admin/DeviceCategoryAdd" component={DeviceCategoryAdd}/>
          <Route exact path="/admin/DeviceCategoryEdit/:id" component={DeviceCategoryEdit}/>
          <Route exact path="/admin/Device" component={Device}/>
          <Route exact path="/admin/AddDevice" component={AddDevice}/>
          <Route exact path="/admin/DeviceEdit/:id" component={DeviceEdit}/>
          <Route exact path="/admin/CrendentialsList" component={CrendentialsList}/>
          <Route exact path="/admin/AddCredentials" component={AddCredentials}/>
          <Route exact path="/admin/EditCredentials" component={EditCredentials}/>
          <Route exact path="/admin/PlatformInformation" component={PlatformInformation}/>
          <Route exact path="/admin/EmailNotification" component={EmailNotification}/>
          <Route exact path="/admin/EmailNotificationEdit/:id" component={EmailNotificationEdit}/>
          <Route exact path="/admin/SMSNotification" component={SMSNotification}/>
          <Route exact path="/admin/SMSNotificationEdit/:id" component={SMSNotificationEdit}/>
          <Route exact path="/admin/SMSNotificationAdd" component={SMSNotificationAdd}/>
          <Route exact path="/admin/EmailNotificationAdd" component={EmailNotificationAdd}/>
          <Route exact path="/admin/DeviceDashboard" component={DeviceDashboard}/>
          <Route exact path="/admin/ACDdashboard" component={ACDdashboard}/>
          {/* <Route exact path="/admin/Paginationnn" component={Paginationnn}/> */}
          <Redirect from="*" to="/admin/index" />

          
        </Switch>
        <Container fluid>
          <AdminFooter />
        </Container>
      </div>
    </>
  );
};

export default Admin;
