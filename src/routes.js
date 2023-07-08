
import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Maps from "views/examples/Maps.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
import Icons from "views/examples/Icons.js";
import UserDetails from "views/examples/UserDetails";
import Alarm1 from "views/examples/Alarm1";
import Organization from "views/examples/Organization";
import Home from "views/examples/Home";
import OrganizationProfile from "views/examples/OrganizationProfile";
import DeviceProfile from "views/examples/Devices/DeviceProfile/DeviceProfile";
import DeviceDataProfile from "views/examples/Devices/DeviceDataProfile/DeviceDataProfile";
import DeviceAlarm from "views/examples/Devices/DeviceAlarm/DeviceAlarm";
import DeviceCategory from "views/examples/Devices/DeviceCategory/DeviceCategory";
import Device from "views/examples/Devices/DeviceList/Device";
import CrendentialsList from "views/examples/PlatformInformation/CrendentialsList/CrendentialsList";
import PlatformInformation from "views/examples/PlatformInformation/PlatformInfomation/PlatformInformation";
import SMSNotification from "views/examples/NotificationContact/SMSNotification/SMSNotification";
import EmailNotification from "views/examples/NotificationContact/EmailNotification/EmailNotification";
import DeviceDashboard from "views/examples/Devices/DeviceDashboard/DeviceDashboard";
import HomePage from "views/examples/HomePage";
import OrganizationAdd from "views/examples/Organization/OrganizationAdd";
import OrganizationList from "views/examples/Organization/OrganizationList";
import OrgDev from "views/examples/OrgDev";
import Dashboard from "views/examples/Dashboard";
import ACDdashboard from "views/examples/ACDdashboard";
import Paginationnn from "views/examples/Paginationnn";
import DashBoardList from "views/examples/DashBoardList";
var routes = [
  // {
  //   path: "/ACDdashboard",
  //   name: "ACDDashboard",
  //   icon: "fas fa-chalkboard  text-dark" ,
  //   component: ACDdashboard,
  //   layout: "/admin"
  // },
  {
    path: "/Home",
    name: "Home",
    icon: "fa fa-home  text-dark" ,
    component: Home,
    layout: "/admin"
  },
  {
    path: "/index",
    name: "Users",
    icon: "fa fa-user text-dark",
    component: Index,
    layout: "/admin"
  },
 
  // {
  //   path: "/icons",
  //   name: "Userlist",
  //   icon: "ni ni-planet text-blue",
  //   component: Icons,
  //   layout: "/admin"
  // },
  {
  
    name: "Organizations",
    icon: "fa fa-users  text-dark",
    id: "collapseOne",
    ref:"#collapseOne",
    heading:"headingOne",
    child: [
      {
      path: "/OrganizationProfile",
      name: "Organization profile",
      icon: "fas fa-id-card  text-dark",
      component: OrganizationProfile,
      layout: "/admin"
    },
    
    {
      path: "/icons",
      name: "User profile",
      icon: "fas fa-id-badge  text-dark",
      component: Icons,
      layout: "/admin"
    },
    {
      path: "/OrganizationList",
      name: "Organizations",
      icon: "fas fa-users-cog  text-dark",
      component: OrganizationList,
      layout: "/admin"
    },
   
    ]
  },

  {

    name: "Devices",
    icon: "fas fa-chalkboard-teacher  text-dark",
    id: "collapseTwo",
    ref:"#collapseTwo",
    heading:"headingTwo",
    
    child: [{
      path: "/DeviceProfile",
      name: "Device profile",
      icon: "fas fa-tablet-alt  text-dark",
      component: DeviceProfile,
      layout: "/admin"
    },
    {
      path: "/DeviceDataProfile",
      name: "Device data profile",
      icon: "fas fa-database  text-dark",
      component: DeviceDataProfile,
      layout: "/admin"
    },
    {
      path: "/DeviceAlarm",
      name: "Device alarm",
      icon: "fas fa-user-clock  text-dark",
      component: DeviceAlarm,
      layout: "/admin"
    },
    {
      path: "/DeviceCategory",
      name: "Device category",
      icon: "fas fa-layer-group  text-dark",
      component: DeviceCategory,
      layout: "/admin"
    },
    {
      path: "/Device",
      name: "Devices",
      icon: "fas fa-mobile-alt  text-dark",
      component: Device,
      layout: "/admin"
    },
    // {
    //   path: "/DeviceDashboard",
    //   name: "Devices Dashboard",
    //   icon: "fas fa-chalkboard  text-dark",
    //   component: DeviceDashboard,
    //   layout: "/admin"
    // },
    ]
  },
  {
    path: "/Alarm1",
    name: "Alarms",
    icon: "fa fa-bell  text-dark",
    component: Alarm1,
    layout: "/admin"
  },
  {
  
    name: "Platform information",
    icon: "fas fa-digital-tachograph  text-dark",
    id: "collapseThree",
    ref:"#collapseThree",
    heading:"headingThree",
    child: [
      {
      path: "/CrendentialsList",
      name: "Crendential list",
      icon: "fas fa-passport  text-dark",
      component: CrendentialsList,
      layout: "/admin"
    },
    
    {
      path: "/PlatformInformation",
      name: "Platforminformation",
      icon: "fas fa-info-circle  text-dark",
      component: PlatformInformation,
      layout: "/admin"
    }
   
    ]
  },
  {
  
    name: "Notification contact",
    icon: "far fa-envelope  text-dark",
    id: "collapseFour",
    ref:"#collapseFour",
    heading:"headingFour",
    child: [
      {
      path: "/SMSNotification",
      name: "SMS notification",
      icon: "fas fa-sms  text-dark",
      component: SMSNotification,
      layout: "/admin"
    },
    
    {
      path: "/EmailNotification",
      name: "Email notification",
      icon: "far fa-envelope-open  text-dark",
      component: EmailNotification,
      layout: "/admin"
    }
   
    ]
  },
  // {
  //   path: "/Organization",
  //   name: "Organization",
  //   icon: "ni ni-tv-2  text-dark",
  //   component: Organization,
  //   layout: "/admin"
  // },
  // {
  //   path: "/HomePage",
  //   name: "HomePage",
  //   icon: "ni ni-tv-2  text-dark",
  //   component: HomePage,
  //   layout: "/admin"
  // },
 
  // {
  //   path: "/OrgDev",
  //   name: "OrgDev",
  //   icon: "fa fa-home  text-dark" ,
  //   component: OrgDev,
  //   layout: "/admin"
  // },
  // {
  //   path: "/Dashboard",
  //   name: "ACD dashboard",
  //   icon: "fas fa-chalkboard  text-dark" ,
  //   component: Dashboard,
  //   layout: "/admin"
  // },

  // {
  //   path: "/Paginationnn",
  //   name: "Paginationnn",
  //   icon: "fas fa-chalkboard  text-dark" ,
  //   component: Paginationnn,
  //   layout: "/admin"
  // }
  // {
  //   path: "/Login",
  //   name: "Login",
  //   icon: "fas fa-chalkboard  text-dark" ,
  //   component: Login,
  //   layout: "/auth"
  // },
  // {
  //   path: "/DeviceDashboard",
  //   name: "DeviceDashboard",
  //   icon: "fas fa-chalkboard  text-dark" ,
  //   component: DeviceDashboard,
  //   layout: "/admin"
  // },
  {
    path: "/DashBoardList",
    name: "DashBoardList",
    icon: "fas fa-chalkboard  text-dark" ,
    component: DashBoardList,
    layout: "/admin"
  },
];
export default routes;
