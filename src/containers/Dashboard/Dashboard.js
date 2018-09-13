import React, { Component } from "react";
import { LinkContainer } from "react-router-bootstrap";
import "./Dashboard.css";
import "../../assets/css/bootstrap.css";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/style.css";
import "../../assets/css/home.css";
import "../../assets/css/ie_only.css";
import LOGO from "../../assets/images/logo.png";
import LOGOLOGOUT from "../../assets/images/logout_icon.png";
import menutoggleimg from "../../assets/images/ic_dehaze_-19@2x.png";
import help_icon from "../../assets/images/help_icon.png";
import setting_icon from "../../assets/images/setting_icon.png";
import setting_icon_second from "../../assets/images/dashboard-setting-image2.png";
import draft_icon from "../../assets/images/draft_icon.png";
import aproved from "../../assets/images/aproved.png";
import pending from "../../assets/images/pending.png";
import decline from "../../assets/images/decline.png";
import approved from "../../assets/images/approved.png";
import all_icon from "../../assets/images/all_icon.png";
import img_queue from "../../assets/images/img_queue.jpg";
import edit_profile_image3 from "../../assets/images/edit_profile-image3.jpg";
import amproved_bg from "../../assets/images/amproved_bg.jpg";
import profile_pic from "../../assets/images/profile_pic.png";

class Dashboard extends Component {
  render() {
    return (
        <div className="Dashboard">
            <div className="col-sm-12 dashboard_main_shadow">
              <div className="col-sm-3 p0">
                 <a href={null} className="menu_toggle_mrg display_none_sm_menu .CursorPointer" id="menu-toggle_mobile">
                 <img src={menutoggleimg} className="menutoggleimg" alt="LOGO"/>
                 </a>
                 <LinkContainer to="/">
                    <img src={LOGO} className="CursorPointer" alt="" />
                 </LinkContainer>
              </div>
              <div className="col-sm-8 p0 header_top_right">
                 <a href="/">Logout <img src={LOGOLOGOUT} alt="" /></a>
                 <a href="/">Help <img src={help_icon} alt="" /></a>
                 <a href="/" className="logoutAcnhortag">Setting <img src={setting_icon} alt="" /></a>
              </div>
              <div className="clearfix"></div>
            </div>
            <div className="clearfix"></div>
            <div className="col-sm-12 p0 ">
              <div className="col-sm-2 col-md-3 p0">
                 <div id="wrapper" className="display_none_full_menu">
                    <div id="sidebar-wrapper">
                       <ul className="sidebar-nav">
                          <li className="sidebar-brand">
                             <span className="navi_hdg"> Navigation</span>
                             <a href={null} className="menu_toggle_mrg CursorPointer" id="menu-toggle">
                             <img src={menutoggleimg} width="30" height="18" alt="" />
                             </a>
                          </li>
                          <li className="sidebar_active">
                             <LinkContainer to="/dashboard">
                                <a href={null}>
                                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="-5378 759 13.333 11.333">
                                      <path id="ic_home_24px" className="cls-1" d="M7.333,14.333v-4H10v4h3.333V9h2L8.667,3,2,9H4v5.333Z" transform="translate(-5380 756)" />
                                   </svg>
                                   <span> Dashboard </span>
                                </a>
                             </LinkContainer>
                          </li>
                          <li>
                             <LinkContainer to="/digital-forms">
                                <a href={null}>
                                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 23.158">
                                      <path id="ic_content_copy_24px" className="cls-1" d="M16.737,1H4.105A2.111,2.111,0,0,0,2,3.105V17.842H4.105V3.105H16.737Zm3.158,4.211H8.316A2.111,2.111,0,0,0,6.211,7.316V22.053a2.111,2.111,0,0,0,2.105,2.105H19.895A2.111,2.111,0,0,0,22,22.053V7.316A2.111,2.111,0,0,0,19.895,5.211Zm0,16.842H8.316V7.316H19.895Z" transform="translate(-2 -1)"/>
                                   </svg>
                                   <span> Digital Forms</span>
                                </a>
                             </LinkContainer>
                          </li>
                          <li>
                             <LinkContainer to="/report">
                                <a href={null}>
                                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 22.222">
                                      <path id="ic_receipt_24px" className="cls-1" d="M19.667,18.667H6.333V16.444H19.667Zm0-4.444H6.333V12H19.667Zm0-4.444H6.333V7.556H19.667ZM3,24.222l1.667-1.667,1.667,1.667L8,22.556l1.667,1.667,1.667-1.667L13,24.222l1.667-1.667,1.667,1.667L18,22.556l1.667,1.667,1.667-1.667L23,24.222V2L21.333,3.667,19.667,2,18,3.667,16.333,2,14.667,3.667,13,2,11.333,3.667,9.667,2,8,3.667,6.333,2,4.667,3.667,3,2Z" transform="translate(-3 -2)"/>
                                   </svg>
                                   <span> Report</span>
                                </a>
                             </LinkContainer>
                          </li>
                          <li>
                             <LinkContainer to="/admin">
                                <a href={null} className="CursorPointer">
                                <strong> Admin </strong> </a>
                             </LinkContainer>
                          </li>
                          <li>
                             <LinkContainer to="/form-template">
                                <a href={null} className="CursorPointer">
                                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                      <path id="ic_description_24px" className="cls-1" d="M16.5,2H6.5A2.287,2.287,0,0,0,4.013,4L4,20a2.287,2.287,0,0,0,2.487,2H21.5A2.3,2.3,0,0,0,24,20V8ZM19,18H9V16H19Zm0-4H9V12H19ZM15.25,9V3.5L22.125,9Z" transform="translate(-4 -2)"/>
                                   </svg>
                                   <span> Form Templates</span>
                                </a>
                             </LinkContainer>
                          </li>
                          <li>
                             <LinkContainer to="/form-packs">
                                <a href={null} className="CursorPointer">
                                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 16">
                                      <path id="ic_folder_24px" className="cls-1" d="M10,4H4A2,2,0,0,0,2.01,6L2,18a2.006,2.006,0,0,0,2,2H20a2.006,2.006,0,0,0,2-2V8a2.006,2.006,0,0,0-2-2H12Z" transform="translate(-2 -4)"/>
                                   </svg>
                                   <span> Form Packs</span>
                                </a>
                             </LinkContainer>
                          </li>
                          <li>
                             <a href="company.html">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 18">
                                   <path id="ic_business_24px" className="cls-1" d="M12,7V3H2V21H22V7ZM6,19H4V17H6Zm0-4H4V13H6Zm0-4H4V9H6ZM6,7H4V5H6Zm4,12H8V17h2Zm0-4H8V13h2Zm0-4H8V9h2Zm0-4H8V5h2ZM20,19H12V17h2V15H12V13h2V11H12V9h8Zm-2-8H16v2h2Zm0,4H16v2h2Z" transform="translate(-2 -3)"/>
                                </svg>
                                <span> Company</span>
                             </a>
                          </li>
                          <li>
                             <a href="project.html">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 8.967">
                                   <path id="ic_all_inclusive_24px" className="cls-1" d="M15.5,6.62a4.443,4.443,0,0,0-3.142,1.275L10,9.987,8.733,11.1h.008L6.5,13.1a2.822,2.822,0,1,1-2-4.808,2.833,2.833,0,0,1,2.033.858l.942.833L8.733,8.862l-1.05-.925a4.483,4.483,0,1,0-.042,6.375L10,12.228l.008.008L11.267,11.1h-.008L13.5,9.112a2.822,2.822,0,1,1,2,4.808,2.847,2.847,0,0,1-2.033-.858l-.95-.842-1.258,1.117,1.058.933A4.491,4.491,0,1,0,15.5,6.62Z" transform="translate(0 -6.62)"/>
                                </svg>
                                <span> Project</span>
                             </a>
                          </li>
                          <li>
                             <a href="users.html">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                   <path id="ic_person_24px" className="cls-1" d="M14,14A5,5,0,1,0,9,9,5,5,0,0,0,14,14Zm0,2.5c-3.337,0-10,1.675-10,5V24H24V21.5C24,18.175,17.337,16.5,14,16.5Z" transform="translate(-4 -4)"/>
                                </svg>
                                <span> Users</span>
                             </a>
                          </li>
                          <li>
                             <LinkContainer to="/approval-setup">
                                <a href={null} className="CursorPointer">
                                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 14">
                                      <path id="ic_supervisor_account_24px" className="cls-1" d="M16.5,12A2.5,2.5,0,1,0,14,9.5,2.492,2.492,0,0,0,16.5,12ZM9,11A3,3,0,1,0,6,8,2.987,2.987,0,0,0,9,11Zm7.5,3c-1.83,0-5.5.92-5.5,2.75V19H22V16.75C22,14.92,18.33,14,16.5,14ZM9,13c-2.33,0-7,1.17-7,3.5V19H9V16.75a3.941,3.941,0,0,1,2.37-3.47A12.283,12.283,0,0,0,9,13Z" transform="translate(-2 -5)"/>
                                   </svg>
                                   <span> Approval Setup</span>
                                </a>
                             </LinkContainer>
                          </li>
                          <li>
                             <a href="email_templates.html">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 16">
                                   <path id="ic_markunread_24px" className="cls-1" d="M20,4H4A2,2,0,0,0,2.01,6L2,18a2.006,2.006,0,0,0,2,2H20a2.006,2.006,0,0,0,2-2V6A2.006,2.006,0,0,0,20,4Zm0,4-8,5L4,8V6l8,5,8-5Z" transform="translate(-2 -4)"/>
                                </svg>
                                <span> Email Templates</span>
                             </a>
                          </li>
                          <li>
                             <LinkContainer to="/custom-fields">
                                <a href={null}>
                                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 21.818">
                                      <path id="ic_pan_tool_24px" className="cls-1" d="M21,5V18.182a3.647,3.647,0,0,1-3.636,3.636H10.727a3.63,3.63,0,0,1-2.591-1.082L1,13.482s1.145-1.118,1.182-1.136a1.077,1.077,0,0,1,.718-.264,1.111,1.111,0,0,1,.545.145c.036.009,3.918,2.236,3.918,2.236V3.636a1.364,1.364,0,1,1,2.727,0V10H11V1.364a1.364,1.364,0,0,1,2.727,0V10h.909V2.273a1.364,1.364,0,0,1,2.727,0V10h.909V5A1.364,1.364,0,0,1,21,5Z" transform="translate(-1)"/>
                                   </svg>
                                   <span> Custom Fields</span>
                                </a>
                             </LinkContainer>
                          </li>
                          <li>
                             <LinkContainer to="/custom-fields-list">
                                <a href="{null}">
                                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 13.333">
                                      <path id="ic_sort_24px" className="cls-1" d="M3,19.333H9.667V17.111H3ZM3,6V8.222H23V6Zm0,7.778H16.333V11.556H3Z" transform="translate(-3 -6)"/>
                                   </svg>
                                   <span> Custom List Fields</span>
                                </a>
                             </LinkContainer>
                          </li>
                       </ul>
                    </div>
                 </div>
                 <div id="mobile_menu_sm">
                    <div id="sidebar-wrapper">
                       <ul className="sidebar-nav">
                          <li className="sidebar_active">
                             <a href="dashboard.html">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-5378 759 13.333 11.333">
                                   <path id="ic_home_24px" className="cls-1" d="M7.333,14.333v-4H10v4h3.333V9h2L8.667,3,2,9H4v5.333Z" transform="translate(-5380 756)" />
                                </svg>
                                <span> Dashboard </span>
                             </a>
                          </li>
                          <li>
                             <a href="digital_forms.html">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-5378 806 13.333 10.909">
                                   <defs>
                                   </defs>
                                   <path id="ic_picture_in_picture_alt_24px" className="cls-1" d="M11.909,7.848H7.061v3.636h4.848ZM14.333,12.7V4.2A1.205,1.205,0,0,0,13.121,3H2.212A1.205,1.205,0,0,0,1,4.2v8.5a1.216,1.216,0,0,0,1.212,1.212H13.121A1.216,1.216,0,0,0,14.333,12.7Zm-1.212.012H2.212V4.194H13.121Z" transform="translate(-5379 803)" />
                                </svg>
                                <span> Digital Forms</span>
                             </a>
                          </li>
                          <li>
                             <a href="report.html">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-5378 850 13.333 14.074">
                                   <defs>
                                   </defs>
                                   <path id="ic_location_city_24px" className="cls-1" d="M11.889,8.667V4.222L9.667,2,7.444,4.222V5.7H3v10.37H16.333V8.667ZM5.963,14.593H4.481V13.111H5.963Zm0-2.963H4.481V10.148H5.963Zm0-2.963H4.481V7.185H5.963Zm4.444,5.926H8.926V13.111h1.481Zm0-2.963H8.926V10.148h1.481Zm0-2.963H8.926V7.185h1.481Zm0-2.963H8.926V4.222h1.481Zm4.444,8.889H13.37V13.111h1.481Zm0-2.963H13.37V10.148h1.481Z" transform="translate(-5381 848)" />
                                </svg>
                                <span> Report</span>
                             </a>
                          </li>
                          <li>
                             <a href="admin.html">
                             <strong> Admin </strong> </a>
                          </li>
                          <li>
                             <a href="form_templates.html">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-5378 945 13.333 13.707">
                                   <defs>
                                   </defs>
                                   <path id="ic_settings_24px" className="cls-1" d="M14.031,9.525a4.726,4.726,0,0,0,0-1.343l1.446-1.131a.346.346,0,0,0,.082-.439L14.189,4.241a.344.344,0,0,0-.418-.151l-1.707.685A5.007,5.007,0,0,0,10.906,4.1l-.26-1.816A.334.334,0,0,0,10.31,2H7.568a.334.334,0,0,0-.336.288L6.972,4.1a5.266,5.266,0,0,0-1.158.672L4.107,4.09a.334.334,0,0,0-.418.151L2.318,6.613a.338.338,0,0,0,.082.439L3.847,8.182a5.435,5.435,0,0,0-.048.672,5.435,5.435,0,0,0,.048.672L2.4,10.656a.346.346,0,0,0-.082.439l1.371,2.371a.344.344,0,0,0,.418.151l1.707-.685a5.007,5.007,0,0,0,1.158.672l.26,1.816a.334.334,0,0,0,.336.288H10.31a.334.334,0,0,0,.336-.288l.26-1.816a5.266,5.266,0,0,0,1.158-.672l1.707.685a.334.334,0,0,0,.418-.151l1.371-2.371a.346.346,0,0,0-.082-.439ZM8.939,11.252a2.4,2.4,0,1,1,2.4-2.4A2.4,2.4,0,0,1,8.939,11.252Z" transform="translate(-5380.271 943)" />
                                </svg>
                                <span> Form Templates</span>
                             </a>
                          </li>
                          <li>
                             <a href="form_packs.html">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-4935 7662 20 20">
                                   <defs>
                                   </defs>
                                   <path id="ic_mode_edit_24px" className="cls-1" d="M3,18.831V23H7.166L19.453,10.71,15.287,6.544ZM22.675,7.489a1.106,1.106,0,0,0,0-1.566l-2.6-2.6a1.106,1.106,0,0,0-1.566,0L16.476,5.356l4.166,4.166Z" transform="translate(-4938 7659.002)" />
                                </svg>
                                <span> Form Packs</span>
                             </a>
                          </li>
                          <li>
                             <a href="company.html">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10829 7335 20 20">
                                   <defs>
                                   </defs>
                                   <path id="ic_info_outline_24px" className="cls-1" d="M11,17h2V11H11ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.011,8.011,0,0,1,12,20ZM11,9h2V7H11Z" transform="translate(-10831 7333)" />
                                </svg>
                                <span> Company</span>
                             </a>
                          </li>
                          <li>
                             <a href="project.html">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-5378 850 13.333 14.074">
                                   <defs>
                                   </defs>
                                   <path id="ic_location_city_24px" className="cls-1" d="M11.889,8.667V4.222L9.667,2,7.444,4.222V5.7H3v10.37H16.333V8.667ZM5.963,14.593H4.481V13.111H5.963Zm0-2.963H4.481V10.148H5.963Zm0-2.963H4.481V7.185H5.963Zm4.444,5.926H8.926V13.111h1.481Zm0-2.963H8.926V10.148h1.481Zm0-2.963H8.926V7.185h1.481Zm0-2.963H8.926V4.222h1.481Zm4.444,8.889H13.37V13.111h1.481Zm0-2.963H13.37V10.148h1.481Z" transform="translate(-5381 848)" />
                                </svg>
                                <span> Project</span>
                             </a>
                          </li>
                          <li>
                             <a href="users.html">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-5378 850 13.333 14.074">
                                   <defs>
                                   </defs>
                                   <path id="ic_location_city_24px" className="cls-1" d="M11.889,8.667V4.222L9.667,2,7.444,4.222V5.7H3v10.37H16.333V8.667ZM5.963,14.593H4.481V13.111H5.963Zm0-2.963H4.481V10.148H5.963Zm0-2.963H4.481V7.185H5.963Zm4.444,5.926H8.926V13.111h1.481Zm0-2.963H8.926V10.148h1.481Zm0-2.963H8.926V7.185h1.481Zm0-2.963H8.926V4.222h1.481Zm4.444,8.889H13.37V13.111h1.481Zm0-2.963H13.37V10.148h1.481Z" transform="translate(-5381 848)" />
                                </svg>
                                <span> Users</span>
                             </a>
                          </li>
                          <li>
                             <a href="approval_setup.html">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-5378 850 13.333 14.074">
                                   <defs>
                                   </defs>
                                   <path id="ic_location_city_24px" className="cls-1" d="M11.889,8.667V4.222L9.667,2,7.444,4.222V5.7H3v10.37H16.333V8.667ZM5.963,14.593H4.481V13.111H5.963Zm0-2.963H4.481V10.148H5.963Zm0-2.963H4.481V7.185H5.963Zm4.444,5.926H8.926V13.111h1.481Zm0-2.963H8.926V10.148h1.481Zm0-2.963H8.926V7.185h1.481Zm0-2.963H8.926V4.222h1.481Zm4.444,8.889H13.37V13.111h1.481Zm0-2.963H13.37V10.148h1.481Z" transform="translate(-5381 848)" />
                                </svg>
                                <span> Approval Setup</span>
                             </a>
                          </li>
                          <li>
                             <a href="email_templates.html">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-5378 850 13.333 14.074">
                                   <defs>
                                   </defs>
                                   <path id="ic_location_city_24px" className="cls-1" d="M11.889,8.667V4.222L9.667,2,7.444,4.222V5.7H3v10.37H16.333V8.667ZM5.963,14.593H4.481V13.111H5.963Zm0-2.963H4.481V10.148H5.963Zm0-2.963H4.481V7.185H5.963Zm4.444,5.926H8.926V13.111h1.481Zm0-2.963H8.926V10.148h1.481Zm0-2.963H8.926V7.185h1.481Zm0-2.963H8.926V4.222h1.481Zm4.444,8.889H13.37V13.111h1.481Zm0-2.963H13.37V10.148h1.481Z" transform="translate(-5381 848)" />
                                </svg>
                                <span> Email Templates</span>
                             </a>
                          </li>
                          <li>
                             <a href="custom_field.html">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-5378 850 13.333 14.074">
                                   <defs>
                                   </defs>
                                   <path id="ic_location_city_24px" className="cls-1" d="M11.889,8.667V4.222L9.667,2,7.444,4.222V5.7H3v10.37H16.333V8.667ZM5.963,14.593H4.481V13.111H5.963Zm0-2.963H4.481V10.148H5.963Zm0-2.963H4.481V7.185H5.963Zm4.444,5.926H8.926V13.111h1.481Zm0-2.963H8.926V10.148h1.481Zm0-2.963H8.926V7.185h1.481Zm0-2.963H8.926V4.222h1.481Zm4.444,8.889H13.37V13.111h1.481Zm0-2.963H13.37V10.148h1.481Z" transform="translate(-5381 848)" />
                                </svg>
                                <span> Custom Fields</span>
                             </a>
                          </li>
                          <li>
                             <a href="custom_list_field.html">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-5378 850 13.333 14.074">
                                   <defs>
                                   </defs>
                                   <path id="ic_location_city_24px" className="cls-1" d="M11.889,8.667V4.222L9.667,2,7.444,4.222V5.7H3v10.37H16.333V8.667ZM5.963,14.593H4.481V13.111H5.963Zm0-2.963H4.481V10.148H5.963Zm0-2.963H4.481V7.185H5.963Zm4.444,5.926H8.926V13.111h1.481Zm0-2.963H8.926V10.148h1.481Zm0-2.963H8.926V7.185h1.481Zm0-2.963H8.926V4.222h1.481Zm4.444,8.889H13.37V13.111h1.481Zm0-2.963H13.37V10.148h1.481Z" transform="translate(-5381 848)" />
                                </svg>
                                <span> Custom List Fields</span>
                             </a>
                          </li>
                       </ul>
                    </div>
                 </div>
                 <div className="clearfix"></div>
              </div>
              <div className="col-xs-12  col-sm-9 col-md-10 pull-right mrg_dashboard_right dashboard_new">
                 <div className="clear30"></div>
                 <div className="col-sm-12 col-md-12">
                    <div className="col-sm-12 col-md-12 p0">
                       <div className="welcome_box">
                          <div className="col-xs-12 col-sm-12 col-md-5 dashboard_welcomebox">
                             <div className="col-xs-12 col-sm-4 p0">
                                <div className="col-sm-12 p0 text-center">
                                   <img src={setting_icon_second} className="profile_img" alt="" />
                                </div>
                                <div className="clear20"></div>
                                <div className="col-sm-12 p0 text-center">
                                   <a href="/" className="btn_edit_profile" data-toggle="modal" data-target="#exampleModalCenter">Edit Profile</a>
                                </div>
                                <div className="clear20"></div>
                             </div>
                             <div className="col-xs-12 col-sm-8 dahsboard_gray_box_label">
                                <h2> Welcome, SHINE ASMIN</h2>
                                UserName: TPHASMINX1<br />
                                Email: exampleAdmin@tphglobal.com<br />
                                Last Login: February 26, 2018
                             </div>
                          </div>
                          <div className="col-xs-12 col-sm-12 col-md-7 draft_right_area">
                             <div className="col-xs-12 col-sm-12 p0 text-center">
                                <div className="clear20"></div>
                                <a href="/" className="btn_document_Dash">
                                   <svg id="svgPlus" xmlns="http://www.w3.org/2000/svg" viewBox="-7104 7346 15 15">
                                      <path id="ic_add_24px" className="cls-1" d="M20,13.571H13.571V20H11.429V13.571H5V11.429h6.429V5h2.143v6.429H20Z" transform="translate(-7109 7341)"/>
                                   </svg>
                                   Insert Document
                                </a>
                             </div>
                             <div className="clear30"></div>
                             <div className="col-xs-6 col-sm-2 draft_label_dash draft_main_h">
                                <div className="col-sm-12 p0"><img src={draft_icon} alt="" /><span> Draft</span></div>
                                <h3>30</h3>
                             </div>
                             <div className="col-xs-6 col-sm-2 aproved_label_dash draft_main_h">
                                <div className="col-sm-12 p0"><img src={aproved} alt="" /><span> Approve</span></div>
                                <h3>25</h3>
                             </div>
                             <div className="col-xs-6 col-sm-2 pending_label_dash draft_main_h">
                                <div className="col-sm-12 p0"><img src={pending} alt="" /><span> Pending</span></div>
                                <h3>25</h3>
                             </div>
                             <div className="col-xs-6 col-sm-2 declined_label_dash draft_main_h">
                                <div className="col-sm-12 p0"><img src={decline} alt="" /><span> Declined</span></div>
                                <h3>28</h3>
                             </div>
                             <div className="col-xs-6 col-sm-2 amproved_label_dash draft_main_h">
                                <div className="col-sm-12 p0"><img src={approved} alt="" /><span> Approved</span></div>
                                <h3>05</h3>
                             </div>
                             <div className="col-xs-6 col-sm-2 all_label_dash draft_main_h">
                                <div className="col-sm-12 p0"><img src={all_icon} alt="" /><span> All</span></div>
                                <h3>11</h3>
                             </div>
                          </div>
                          <div className="clearfix"></div>
                       </div>
                    </div>
                    <div className="clear20"></div>
                    <div className="col-sm-6 p0 news_feedbox_box">
                       <div className="news_feedbox2">
                          <div className="news_heading_bg">In Queue</div>
                          <div className="clear20"></div>
                          <img src={img_queue} className="img-responsive img_wuesu_w" alt="" />
                          <div className="clearfix"></div>
                       </div>
                    </div>
                    <div className="col-sm-6 p0">
                       <div className="news_feedbox2">
                          <div className="recent_activity">RECENT ACTIVITY</div>
                          <div className="clearfix"></div>
                          <div className="col-sm-12 p0 revent_mrg_bot">
                             <div className="img_recent_act">
                                <img src={edit_profile_image3} alt="" />
                             </div>
                             <div className="recent_act_mid">
                                <h2>Jie He</h2>
                                I added some comments in order. testing, testing, testing, testing,
                             </div>
                             <div className="recent_act_right"> 2017/07/18 14:53:15</div>
                          </div>
                          <div className="col-sm-12 p0 revent_mrg_bot">
                             <div className="img_recent_act">
                                <img src={edit_profile_image3} alt="" />
                             </div>
                             <div className="recent_act_mid">
                                <h2> Luke11111 </h2>
                                I added some comments in order. testing, testing, testing, testing,
                             </div>
                             <div className="recent_act_right"> 2017/07/18 14:53:15</div>
                          </div>
                          <div className="col-sm-12 p0 revent_mrg_bot">
                             <div className="img_recent_act">
                                <img src={edit_profile_image3} alt="" />
                             </div>
                             <div className="recent_act_mid">
                                <h2>  Luke222222</h2>
                                I added some comments in order. testing, testing, testing, testing,
                             </div>
                             <div className="recent_act_right"> 2017/07/18 14:53:15</div>
                          </div>
                          <div className="col-sm-12 p0 revent_mrg_bot">
                             <div className="img_recent_act">
                                <img src={edit_profile_image3} alt="" />
                             </div>
                             <div className="recent_act_mid">
                                <h2>Jessie </h2>
                                He I added some comments in order. testing, testing, testing, testing,
                             </div>
                             <div className="recent_act_right"> 2017/07/18 14:53:15</div>
                          </div>
                          <div className="clearfix"></div>
                       </div>
                    </div>
                    <div className="clear20"></div>
                    <div className="col-sm-12 p0">
                       <div className="news_feedbox">
                          <div className="news_heading_bg">Approved Last 30 days</div>
                          <div className="clear20"></div>
                          <img src={amproved_bg} className="img-responsive" alt="" />
                          <div className="clearfix"></div>
                       </div>
                    </div>
                 </div>
              </div>
              <div className="clear40"></div>
              <div className="clearfix"></div>
            </div>
            <div className="clear40"></div>
            <div>
              <ul id="responsive_menu">
                 <li className="responsive_menu_active">
                    <a href="dashboard.html">
                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="-5378 759 13.333 11.333">
                          <path id="ic_home_24px" className="cls-1" d="M7.333,14.333v-4H10v4h3.333V9h2L8.667,3,2,9H4v5.333Z" transform="translate(-5380 756)" />
                       </svg>
                       <span> Home </span>
                    </a>
                 </li>
                 <li>
                    <a href="timecard.html">
                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="-5378 806 13.333 10.909">
                          <defs>
                          </defs>
                          <path id="ic_picture_in_picture_alt_24px" className="cls-1" d="M11.909,7.848H7.061v3.636h4.848ZM14.333,12.7V4.2A1.205,1.205,0,0,0,13.121,3H2.212A1.205,1.205,0,0,0,1,4.2v8.5a1.216,1.216,0,0,0,1.212,1.212H13.121A1.216,1.216,0,0,0,14.333,12.7Zm-1.212.012H2.212V4.194H13.121Z" transform="translate(-5379 803)" />
                       </svg>
                       <span> TimeCard</span>
                    </a>
                 </li>
                 <li>
                    <a href="company.html">
                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="-5378 850 13.333 14.074">
                          <defs>
                          </defs>
                          <path id="ic_location_city_24px" className="cls-1" d="M11.889,8.667V4.222L9.667,2,7.444,4.222V5.7H3v10.37H16.333V8.667ZM5.963,14.593H4.481V13.111H5.963Zm0-2.963H4.481V10.148H5.963Zm0-2.963H4.481V7.185H5.963Zm4.444,5.926H8.926V13.111h1.481Zm0-2.963H8.926V10.148h1.481Zm0-2.963H8.926V7.185h1.481Zm0-2.963H8.926V4.222h1.481Zm4.444,8.889H13.37V13.111h1.481Zm0-2.963H13.37V10.148h1.481Z" transform="translate(-5381 848)" />
                       </svg>
                       <span> Company</span>
                    </a>
                 </li>
                 <li>
                    <a href="document.html">
                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="-5377.333 896 12 15">
                          <defs>
                          </defs>
                          <path id="ic_description_24px" className="cls-1" d="M11.5,2h-6A1.5,1.5,0,0,0,4.008,3.5L4,15.5A1.5,1.5,0,0,0,5.492,17H14.5A1.5,1.5,0,0,0,16,15.5v-9ZM13,14H7V12.5h6Zm0-3H7V9.5h6ZM10.75,7.25V3.125L14.875,7.25Z" transform="translate(-5381.333 894)" />
                       </svg>
                       <span>Document </span>
                    </a>
                 </li>
                 <li>
                    <a href="setting.html">
                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="-5378 945 13.333 13.707">
                          <defs>
                          </defs>
                          <path id="ic_settings_24px" className="cls-1" d="M14.031,9.525a4.726,4.726,0,0,0,0-1.343l1.446-1.131a.346.346,0,0,0,.082-.439L14.189,4.241a.344.344,0,0,0-.418-.151l-1.707.685A5.007,5.007,0,0,0,10.906,4.1l-.26-1.816A.334.334,0,0,0,10.31,2H7.568a.334.334,0,0,0-.336.288L6.972,4.1a5.266,5.266,0,0,0-1.158.672L4.107,4.09a.334.334,0,0,0-.418.151L2.318,6.613a.338.338,0,0,0,.082.439L3.847,8.182a5.435,5.435,0,0,0-.048.672,5.435,5.435,0,0,0,.048.672L2.4,10.656a.346.346,0,0,0-.082.439l1.371,2.371a.344.344,0,0,0,.418.151l1.707-.685a5.007,5.007,0,0,0,1.158.672l.26,1.816a.334.334,0,0,0,.336.288H10.31a.334.334,0,0,0,.336-.288l.26-1.816a5.266,5.266,0,0,0,1.158-.672l1.707.685a.334.334,0,0,0,.418-.151l1.371-2.371a.346.346,0,0,0-.082-.439ZM8.939,11.252a2.4,2.4,0,1,1,2.4-2.4A2.4,2.4,0,0,1,8.939,11.252Z" transform="translate(-5380.271 943)" />
                       </svg>
                       <span> Setting</span>
                    </a>
                 </li>
                 <li>
                    <a href="sign_setting.html">
                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="-4935 7662 20 20">
                          <defs>
                          </defs>
                          <path id="ic_mode_edit_24px" className="cls-1" d="M3,18.831V23H7.166L19.453,10.71,15.287,6.544ZM22.675,7.489a1.106,1.106,0,0,0,0-1.566l-2.6-2.6a1.106,1.106,0,0,0-1.566,0L16.476,5.356l4.166,4.166Z" transform="translate(-4938 7659.002)" />
                       </svg>
                       <span> Signature Setting</span>
                    </a>
                 </li>
                 <li>
                    <a href="help.html">
                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10829 7335 20 20">
                          <defs>
                          </defs>
                          <path id="ic_info_outline_24px" className="cls-1" d="M11,17h2V11H11ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.011,8.011,0,0,1,12,20ZM11,9h2V7H11Z" transform="translate(-10831 7333)" />
                       </svg>
                       <span> Help</span>
                    </a>
                 </li>
                 <li>
                    <a href="login.html">
                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="-5377.499 1091.267 13.573 11.709">
                          <defs>
                          </defs>
                          <path id="ic_keyboard_tab_24px" className="cls-1" d="M6.717,1.284l2.253,3.4-9,.078-.011,1.9,9-.078-2.3,3.439.894,1.335L11.4,5.614,7.62-.066ZM12.065-.105,12,11.322l1.27-.011L13.335-.116Z" transform="matrix(-1, 0.017, -0.017, -1, -5363.967, 1102.627)" />
                       </svg>
                       <span> Logout</span>
                    </a>
                 </li>
              </ul>
            </div>
            <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered modla_edit_profile" role="document">
                 <div className="modal-content">
                    <div className="modal-header modal_header_register">
                       <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                       <span aria-hidden="true">&times;</span>
                       </button>
                    </div>
                    <div className="modal-body register_suc register_popup">
                       <div className="user_edting_hd">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="1585 5909 17.515 18.002">
                             <path id="ic_create_24px" className="cls-1" d="M3,17.25V21H6.648L17.409,9.94,13.761,6.19ZM20.23,7.04a1.016,1.016,0,0,0,0-1.41L17.954,3.29a.95.95,0,0,0-1.372,0L14.8,5.12,18.45,8.87l1.78-1.83Z" transform="translate(1582 5906.002)"/>
                          </svg>
                          User Setting
                       </div>
                       <div className="clear50"></div>
                       <div className="col-sm-4 p0">
                          <div className="user_setting_box">
                             <div className="col-sm-12 p0 text-center"> <img src={profile_pic} className="profile_img" alt="" /></div>
                             <div className="clear20"></div>
                             <button type="button" href="/" className="btn_changephoto">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-9284 -445 18 16.2">
                                   <g id="ic_photo_camera_24px" transform="translate(-9286 -447)">
                                      <path id="Path_97" data-name="Path 97" className="cls-1" d="M2.88,0A2.88,2.88,0,1,1,0,2.88,2.88,2.88,0,0,1,2.88,0Z" transform="translate(8.12 8.12)"/>
                                      <path id="Path_92" data-name="Path 92" className="cls-1" d="M8.3,2,6.653,3.8H3.8A1.805,1.805,0,0,0,2,5.6V16.4a1.805,1.805,0,0,0,1.8,1.8H18.2A1.805,1.805,0,0,0,20,16.4V5.6a1.805,1.805,0,0,0-1.8-1.8H15.347L13.7,2ZM11,15.5A4.5,4.5,0,1,1,15.5,11,4.5,4.5,0,0,1,11,15.5Z"/>
                                   </g>
                                </svg>
                                <span>Change photo</span>
                             </button>
                          </div>
                          <div className="clear40"></div>
                          <div className="btn_cance_save">
                             <input name="" type="button" className="btn_save_pro" value="Save" />
                             <input name="" type="button" className="btn_cancel_pro" data-dismiss="modal" aria-label="Close" value="Cancel" />
                          </div>
                       </div>
                       <div className="col-sm-7 profile_setting_pop pull-right p0">
                          <form className="form-horizontal" action="/action_page.php">
                             <div className="form-group">
                                <label className="control-label col-sm-4" htmlFor="First Name">First Name</label>
                                <div className="col-sm-8">
                                   <input type="First Name" className="form-control pro_input_pop" id="First Name" placeholder="Jessie" />
                                </div>
                             </div>
                             <div className="form-group">
                                <label className="control-label col-sm-4" htmlFor="Last Name">Last Name</label>
                                <div className="col-sm-8">
                                   <input type="Last Name" className="form-control pro_input_pop" id="Last Name" placeholder="He" />
                                </div>
                             </div>
                             <div className="form-group">
                                <label className="control-label col-sm-4" htmlFor="Email">Email</label>
                                <div className="col-sm-8">
                                   <input type="Email" className="form-control pro_input_pop" id="Email" placeholder="example@gmail.com"/>
                                </div>
                             </div>
                             <div className="form-group">
                                <label className="control-label col-sm-4" htmlFor="Mobile">Mobile</label>
                                <div className="col-sm-8">
                                   <input type="Mobile" className="form-control pro_input_pop" id="Mobile" placeholder="123456789"/>
                                </div>
                             </div>
                             <div className="clear20"></div>
                             <div className="col-sm-8">
                                <button type="button" href="/" className="btn_change_pass_pro">
                                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="-9022 -414 13 17.063">
                                      <path id="ic_lock_24px" className="cls-1" d="M15.375,6.688h-.812V5.063a4.063,4.063,0,0,0-8.125,0V6.688H5.625A1.63,1.63,0,0,0,4,8.313v8.125a1.63,1.63,0,0,0,1.625,1.625h9.75A1.63,1.63,0,0,0,17,16.438V8.313A1.63,1.63,0,0,0,15.375,6.688ZM10.5,14a1.625,1.625,0,1,1,1.625-1.625A1.63,1.63,0,0,1,10.5,14Zm2.519-7.312H7.981V5.063a2.519,2.519,0,0,1,5.038,0Z" transform="translate(-9026 -415)"/>
                                   </svg>
                                   <span>Change Password</span>
                                </button>
                             </div>
                          </form>
                          <div className="clear30"></div>
                          <div className="btn_cance_save2">
                             <input name="" type="button" className="btn_save_pro" value="Save" />
                             <input name="" type="button" className="btn_cancel_pro" value="Cancel" />
                          </div>
                       </div>
                       <div className="clear10"></div>
                    </div>
                 </div>
              </div>
            </div>
        </div>
    );
  }
};
export default Dashboard;
