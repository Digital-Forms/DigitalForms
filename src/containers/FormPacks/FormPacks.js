import React, { Component }
from "react";
import { LinkContainer }
from "react-router-bootstrap";
import "./FormPacks.css";
import "../../assets/css/bootstrap.css";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/style.css";
import "../../assets/css/home.css";
import "../../assets/css/ie_only.css";
import LOGO from "../../assets/images/logo.png";
import LOGOLOGOUT from "../../assets/images/logout_icon.png";
import help_icon from "../../assets/images/help_icon.png";
import setting_icon from "../../assets/images/setting_icon.png";
import down_arrow_amprvoe from "../../assets/images/down_arrow_amprvoe.png";
import x_icon from "../../assets/images/x_icon.png";

class FormPacks extends Component {
    render() {
        return (
            <div className="FormPacks">
               <div className="col-sm-12 dashboard_main_shadow">
                  <div className="col-sm-6 col-md-5 col-xs-12 p0">
                     <LinkContainer to="/dashboard">
                        <a href={null} className="pull-left">
                        <img src={LOGO} className="CursorPointer" width="200" height="85" alt="" /> </a>
                     </LinkContainer>
                     <LinkContainer to="/dashboard">
                        <a href={null} className="btn_homer_hdr">
                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="-5378 759 13.333 11.333">
                              <path id="ic_home_24px" className="cls-1" d="M7.333,14.333v-4H10v4h3.333V9h2L8.667,3,2,9H4v5.333Z" transform="translate(-5380 756)"/>
                           </svg>
                           Home
                        </a>
                     </LinkContainer>
                  </div>
                  <div className="col-xs-12 col-sm-2 col-md-2 text-center custome_header_label">
                     Form Packs
                  </div>
                  <div className="col-sm-4 col-md-4 header_top_right">
                     <LinkContainer to="/">
                        <a href={null} className="CursorPointer">Logout <img src={LOGOLOGOUT} alt="" /></a>
                     </LinkContainer>
                     <LinkContainer to="/help">
                        <a href={null} className="CursorPointer">Help <img src={help_icon} alt="" /></a>
                     </LinkContainer>
                     <LinkContainer to="/setting">
                        <a href={null} className="CursorPointer bL0px">Setting <img src={setting_icon} alt="" /></a>
                     </LinkContainer>
                  </div>
                  <div className="clearfix"></div>
               </div>
               <div className="clearfix"></div>
               <div className="clearfix"></div>
               <div className="col-sm-12 p0 top_mrg_general top_mrg_general_custom">
                  <div className="">
                     <div className="col-sm-12 col-md-12 col-lg-10 col-lg-offset-1 general_setting_hd">
                        <div className="col-xs-12 col-sm-12 col-md-12">
                           <div className="clear10"></div>
                           <a href="#">
                           <button type="button" className="btn btn-primary pull-right plus_icon_table btn_plus_cusotm" data-toggle="modal" data-target="#myModal">+</button>
                           </a>
                           <div className="clearfix"></div>
                           <div className="overflow_scroll_sm">
                              <table className="table table-bordered timecard_table custome_field_table approvel_field_table">
                                 <thead>
                                    <tr>
                                       <th width="15%" align="center">Pack Code</th>
                                       <th width="10%" align="center">Detail</th>
                                       <th width="20%" align="center">Description</th>
                                       <th width="55%" align="center">&nbsp;</th>
                                    </tr>
                                 </thead>
                                 <tbody>
                                    <tr>
                                       <td align="center">ESA101</td>
                                       <td align="center"><a href="#" id="music"><img src={down_arrow_amprvoe} alt="" /></a></td>
                                       <td align="center">**DNU 1.01 Crew PAYG Level3</td>
                                       <td align="center">
                                          <div className="col-sm-2  col-md-1 col-xs-4 p0 pull-right text-center timecard_dele pull-right">
                                             <a href="#" data-toggle="modal" data-target="#exampleModalCenter">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="1700 296 15 19.286">
                                                   <path id="ic_delete_24px" className="cls-1" d="M6.071,20.143a2.149,2.149,0,0,0,2.143,2.143h8.571a2.149,2.149,0,0,0,2.143-2.143V7.286H6.071ZM20,4.071H16.25L15.179,3H9.821L8.75,4.071H5V6.214H20Z" transform="translate(1695 293)"/>
                                                </svg>
                                             </a>
                                          </div>
                                          <div className="col-sm-2  col-md-1 col-xs-4 p0 text-center timecard_edit6 pull-right">
                                             <a href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="1656.776 299 17.515 18.003">
                                                   <path id="ic_create_24px" className="cls-1" d="M3,17.25V21H6.648L17.409,9.94,13.761,6.19ZM20.23,7.04a1.016,1.016,0,0,0,0-1.41L17.954,3.29a.95.95,0,0,0-1.372,0L14.8,5.12,18.45,8.87l1.78-1.83Z" transform="translate(1653.776 296.002)"/>
                                                </svg>
                                             </a>
                                          </div>
                                          <div className="col-sm-2  col-md-1 col-xs-4 p0 text-center timecard_edit6 pull-right">
                                             <a href="#">
                                             <img src={x_icon} className="x_img_pack" width="16" height="18" alt="" /> </a>
                                          </div>
                                       </td>
                                    </tr>
                                    <tr id="musicinfo" className="approvel_new_open_table">
                                       <td colspan="5">
                                          <div className="clear5"></div>
                                          <table width="100%" border="0" cellspacing="2" cellpadding="2">
                                             <thead>
                                                <tr>
                                                   <th width="15%" align="left">Form Code</th>
                                                   <th width="20%" align="left">Description</th>
                                                   <th width="20%" align="center" className="text-center">Document</th>
                                                   <th width="25%" align="center" className="text-center">Email Distribution</th>
                                                </tr>
                                             </thead>
                                             <tr>
                                                <td>CREW01</td>
                                                <td>1.01 Crew PAYG MPPCA</td>
                                                <td align="center">1.01 Crew Contract PAYG.pdf</td>
                                                <td align="center">crew.contracts@endemolshine.com.au</td>
                                             </tr>
                                          </table>
                                       </td>
                                    </tr>
                                    <tr>
                                       <td align="center">ESA101</td>
                                       <td align="center"><a href="#" id="music"><img src={down_arrow_amprvoe} alt="" /></a></td>
                                       <td align="center">**DNU 1.01 Crew PAYG Level3</td>
                                       <td align="center">
                                          <div className="col-sm-2  col-md-1 col-xs-4 p0 pull-right text-center timecard_dele pull-right">
                                             <a href="#" data-toggle="modal" data-target="#exampleModalCenter">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="1700 296 15 19.286">
                                                   <path id="ic_delete_24px" className="cls-1" d="M6.071,20.143a2.149,2.149,0,0,0,2.143,2.143h8.571a2.149,2.149,0,0,0,2.143-2.143V7.286H6.071ZM20,4.071H16.25L15.179,3H9.821L8.75,4.071H5V6.214H20Z" transform="translate(1695 293)"/>
                                                </svg>
                                             </a>
                                          </div>
                                          <div className="col-sm-2  col-md-1 col-xs-4 p0 text-center timecard_edit6 pull-right">
                                             <a href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="1656.776 299 17.515 18.003">
                                                   <path id="ic_create_24px" className="cls-1" d="M3,17.25V21H6.648L17.409,9.94,13.761,6.19ZM20.23,7.04a1.016,1.016,0,0,0,0-1.41L17.954,3.29a.95.95,0,0,0-1.372,0L14.8,5.12,18.45,8.87l1.78-1.83Z" transform="translate(1653.776 296.002)"/>
                                                </svg>
                                             </a>
                                          </div>
                                          <div className="col-sm-2  col-md-1 col-xs-4 p0 text-center timecard_edit6 pull-right"> <a href="#"> <img src={x_icon} className="x_img_pack" width="16" height="18" alt="" /></a> </div>
                                       </td>
                                    </tr>
                                    <tr>
                                       <td align="center">ESA101</td>
                                       <td align="center"><a href="#" id="music"><img src={down_arrow_amprvoe} alt="" /></a></td>
                                       <td align="center">**DNU 1.01 Crew PAYG Level3</td>
                                       <td align="center">
                                          <div className="col-sm-2  col-md-1 col-xs-4 p0 pull-right text-center timecard_dele pull-right">
                                             <a href="#" data-toggle="modal" data-target="#exampleModalCenter">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="1700 296 15 19.286">
                                                   <path id="ic_delete_24px" className="cls-1" d="M6.071,20.143a2.149,2.149,0,0,0,2.143,2.143h8.571a2.149,2.149,0,0,0,2.143-2.143V7.286H6.071ZM20,4.071H16.25L15.179,3H9.821L8.75,4.071H5V6.214H20Z" transform="translate(1695 293)"/>
                                                </svg>
                                             </a>
                                          </div>
                                          <div className="col-sm-2  col-md-1 col-xs-4 p0 text-center timecard_edit6 pull-right">
                                             <a href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="1656.776 299 17.515 18.003">
                                                   <path id="ic_create_24px" className="cls-1" d="M3,17.25V21H6.648L17.409,9.94,13.761,6.19ZM20.23,7.04a1.016,1.016,0,0,0,0-1.41L17.954,3.29a.95.95,0,0,0-1.372,0L14.8,5.12,18.45,8.87l1.78-1.83Z" transform="translate(1653.776 296.002)"/>
                                                </svg>
                                             </a>
                                          </div>
                                          <div className="col-sm-2  col-md-1 col-xs-4 p0 text-center timecard_edit6 pull-right"> <a href="#"> <img src={x_icon} className="x_img_pack" width="16" height="18" alt="" /></a> </div>
                                       </td>
                                    </tr>
                                    <tr>
                                       <td align="center">ESA101</td>
                                       <td align="center"><a href="#" id="music"><img src={down_arrow_amprvoe} alt="" /></a></td>
                                       <td align="center">**DNU 1.01 Crew PAYG Level3</td>
                                       <td align="center">
                                          <div className="col-sm-2  col-md-1 col-xs-4 p0 pull-right text-center timecard_dele pull-right">
                                             <a href="#" data-toggle="modal" data-target="#exampleModalCenter">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="1700 296 15 19.286">
                                                   <path id="ic_delete_24px" className="cls-1" d="M6.071,20.143a2.149,2.149,0,0,0,2.143,2.143h8.571a2.149,2.149,0,0,0,2.143-2.143V7.286H6.071ZM20,4.071H16.25L15.179,3H9.821L8.75,4.071H5V6.214H20Z" transform="translate(1695 293)"/>
                                                </svg>
                                             </a>
                                          </div>
                                          <div className="col-sm-2  col-md-1 col-xs-4 p0 text-center timecard_edit6 pull-right">
                                             <a href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="1656.776 299 17.515 18.003">
                                                   <path id="ic_create_24px" className="cls-1" d="M3,17.25V21H6.648L17.409,9.94,13.761,6.19ZM20.23,7.04a1.016,1.016,0,0,0,0-1.41L17.954,3.29a.95.95,0,0,0-1.372,0L14.8,5.12,18.45,8.87l1.78-1.83Z" transform="translate(1653.776 296.002)"/>
                                                </svg>
                                             </a>
                                          </div>
                                          <div className="col-sm-2  col-md-1 col-xs-4 p0 text-center timecard_edit6 pull-right"> <a href="#">
                                             <img src={x_icon} className="x_img_pack" width="16" height="18" alt="" /></a>
                                          </div>
                                       </td>
                                    </tr>
                                    <tr>
                                       <td align="center">ESA101</td>
                                       <td align="center"><a href="#" id="music"><img src={down_arrow_amprvoe} alt="" /></a></td>
                                       <td align="center">**DNU 1.01 Crew PAYG Level3</td>
                                       <td align="center">
                                          <div className="col-sm-2  col-md-1 col-xs-4 p0 pull-right text-center timecard_dele pull-right">
                                             <a href="#" data-toggle="modal" data-target="#exampleModalCenter">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="1700 296 15 19.286">
                                                   <path id="ic_delete_24px" className="cls-1" d="M6.071,20.143a2.149,2.149,0,0,0,2.143,2.143h8.571a2.149,2.149,0,0,0,2.143-2.143V7.286H6.071ZM20,4.071H16.25L15.179,3H9.821L8.75,4.071H5V6.214H20Z" transform="translate(1695 293)"/>
                                                </svg>
                                             </a>
                                          </div>
                                          <div className="col-sm-2  col-md-1 col-xs-4 p0 text-center timecard_edit6 pull-right">
                                             <a href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="1656.776 299 17.515 18.003">
                                                   <path id="ic_create_24px" className="cls-1" d="M3,17.25V21H6.648L17.409,9.94,13.761,6.19ZM20.23,7.04a1.016,1.016,0,0,0,0-1.41L17.954,3.29a.95.95,0,0,0-1.372,0L14.8,5.12,18.45,8.87l1.78-1.83Z" transform="translate(1653.776 296.002)"/>
                                                </svg>
                                             </a>
                                          </div>
                                          <div className="col-sm-2  col-md-1 col-xs-4 p0 text-center timecard_edit6 pull-right"> <a href="#"> <img src={x_icon} className="x_img_pack" width="16" height="18" alt="" /> </a> </div>
                                       </td>
                                    </tr>
                                    <tr>
                                       <td align="center">ESA101</td>
                                       <td align="center"><a href="#" id="music"><img src={down_arrow_amprvoe} alt="" /></a></td>
                                       <td align="center">**DNU 1.01 Crew PAYG Level3</td>
                                       <td align="center">
                                          <div className="col-sm-2  col-md-1 col-xs-4 p0 pull-right text-center timecard_dele pull-right">
                                             <a href="#" data-toggle="modal" data-target="#exampleModalCenter">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="1700 296 15 19.286">
                                                   <path id="ic_delete_24px" className="cls-1" d="M6.071,20.143a2.149,2.149,0,0,0,2.143,2.143h8.571a2.149,2.149,0,0,0,2.143-2.143V7.286H6.071ZM20,4.071H16.25L15.179,3H9.821L8.75,4.071H5V6.214H20Z" transform="translate(1695 293)"/>
                                                </svg>
                                             </a>
                                          </div>
                                          <div className="col-sm-2  col-md-1 col-xs-4 p0 text-center timecard_edit6 pull-right">
                                             <a href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="1656.776 299 17.515 18.003">
                                                   <path id="ic_create_24px" className="cls-1" d="M3,17.25V21H6.648L17.409,9.94,13.761,6.19ZM20.23,7.04a1.016,1.016,0,0,0,0-1.41L17.954,3.29a.95.95,0,0,0-1.372,0L14.8,5.12,18.45,8.87l1.78-1.83Z" transform="translate(1653.776 296.002)"/>
                                                </svg>
                                             </a>
                                          </div>
                                          <div className="col-sm-2  col-md-1 col-xs-4 p0 text-center timecard_edit6 pull-right"> <a href="#"> <img src={x_icon} className="x_img_pack" width="16" height="18" alt="" /></a> </div>
                                       </td>
                                    </tr>
                                    <tr>
                                       <td align="center">ESA101</td>
                                       <td align="center"><a href="#" id="music"><img src={down_arrow_amprvoe} alt="" /></a></td>
                                       <td align="center">**DNU 1.01 Crew PAYG Level3</td>
                                       <td align="center">
                                          <div className="col-sm-2  col-md-1 col-xs-4 p0 pull-right text-center timecard_dele pull-right">
                                             <a href="#" data-toggle="modal" data-target="#exampleModalCenter">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="1700 296 15 19.286">
                                                   <path id="ic_delete_24px" className="cls-1" d="M6.071,20.143a2.149,2.149,0,0,0,2.143,2.143h8.571a2.149,2.149,0,0,0,2.143-2.143V7.286H6.071ZM20,4.071H16.25L15.179,3H9.821L8.75,4.071H5V6.214H20Z" transform="translate(1695 293)"/>
                                                </svg>
                                             </a>
                                          </div>
                                          <div className="col-sm-2  col-md-1 col-xs-4 p0 text-center timecard_edit6 pull-right">
                                             <a href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="1656.776 299 17.515 18.003">
                                                   <path id="ic_create_24px" className="cls-1" d="M3,17.25V21H6.648L17.409,9.94,13.761,6.19ZM20.23,7.04a1.016,1.016,0,0,0,0-1.41L17.954,3.29a.95.95,0,0,0-1.372,0L14.8,5.12,18.45,8.87l1.78-1.83Z" transform="translate(1653.776 296.002)"/>
                                                </svg>
                                             </a>
                                          </div>
                                          <div className="col-sm-2  col-md-1 col-xs-4 p0 text-center timecard_edit6 pull-right"> <a href="#"> <img src={x_icon} className="x_img_pack" width="16" height="18" alt="" /></a> </div>
                                       </td>
                                    </tr>
                                    <tr>
                                       <td align="center">ESA101</td>
                                       <td align="center"><a href="#" id="music"><img src={down_arrow_amprvoe} alt="" /></a></td>
                                       <td align="center">**DNU 1.01 Crew PAYG Level3</td>
                                       <td align="center">
                                          <div className="col-sm-2  col-md-1 col-xs-4 p0 pull-right text-center timecard_dele pull-right">
                                             <a href="#" data-toggle="modal" data-target="#exampleModalCenter">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="1700 296 15 19.286">
                                                   <path id="ic_delete_24px" className="cls-1" d="M6.071,20.143a2.149,2.149,0,0,0,2.143,2.143h8.571a2.149,2.149,0,0,0,2.143-2.143V7.286H6.071ZM20,4.071H16.25L15.179,3H9.821L8.75,4.071H5V6.214H20Z" transform="translate(1695 293)"/>
                                                </svg>
                                             </a>
                                          </div>
                                          <div className="col-sm-2  col-md-1 col-xs-4 p0 text-center timecard_edit6 pull-right">
                                             <a href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="1656.776 299 17.515 18.003">
                                                   <path id="ic_create_24px" className="cls-1" d="M3,17.25V21H6.648L17.409,9.94,13.761,6.19ZM20.23,7.04a1.016,1.016,0,0,0,0-1.41L17.954,3.29a.95.95,0,0,0-1.372,0L14.8,5.12,18.45,8.87l1.78-1.83Z" transform="translate(1653.776 296.002)"/>
                                                </svg>
                                             </a>
                                          </div>
                                          <div className="col-sm-2  col-md-1 col-xs-4 p0 text-center timecard_edit6 pull-right"> <a href="#"> <img src={x_icon} className="x_img_pack" width="16" height="18" alt="" /></a> </div>
                                       </td>
                                    </tr>
                                 </tbody>
                              </table>
                           </div>
                        </div>
                     </div>
                     <div className="clear10"></div>
                  </div>
               </div>
               <div className="clear10"></div>
            </div>
        );
    }
}
;
export default FormPacks;
