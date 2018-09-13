import React, { Component }
from "react";
import { LinkContainer }
from "react-router-bootstrap";
import "./CustomFieldsList.css";
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

class CustomFieldsList extends Component {
    render() {
        return (
            <div className="CustomFieldsList">
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
                     Custom Fields
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
               <div className="col-sm-12 p0 top_mrg_general top_mrg_general_custom">
                  <div className="">
                     <div className="col-sm-12 col-md-12 col-lg-10 col-lg-offset-1 general_setting_hd">
                        <div className="col-xs-12 col-sm-12 col-md-12">
                           <div className="clear10"></div>
                           <a href="#">
                           <button type="button" className="btn btn-primary pull-right plus_icon_table btn_plus_cusotm btn_custom_list" data-toggle="modal" data-target="#myModal">+</button>
                           </a>
                           <div className="clearfix"></div>
                           <div className="overflow_scroll_sm_list">
                              <table width="100%" className="table  timecard_table custome_lsit_field_table noBorder">
                                 <thead>
                                    <tr>
                                       <th width="7%" align="center" valign="middle">PrintCode
                                       </th>
                                       <th width="8%" align="center" valign="middle">Desc</th>
                                       <th width="4%" align="center" valign="middle">Units</th>
                                       <th width="6%" align="center" valign="middle">UnitsDesc</th>
                                       <th width="5%" align="center" valign="middle">Rate</th>
                                       <th width="5%" align="center" valign="middle">Factor</th>
                                       <th width="5%" align="center" valign="middle">Amount</th>
                                       <th width="5%" align="center" valign="middle">Capped</th>
                                       <th width="6%" align="center" valign="middle">DateFrom</th>
                                       <th width="6%" align="center" valign="middle">DateTo</th>
                                       <th width="6%" align="center" valign="middle">ChartSort</th>
                                       <th width="6%" align="center" valign="middle">ChartCode</th>
                                       <th width="5%" align="center" valign="middle">Flag</th>
                                       <th width="6%" align="center" valign="middle">PaymentFlag</th>
                                       <th width="20%"  align="center" valign="middle">&nbsp;</th>
                                    </tr>
                                 </thead>
                                 <tbody>
                                    <tr>
                                       <td width="11%" align="center" valign="middle">ACON</td>
                                       <td align="center" valign="middle">6 DayWeek</td>
                                       <td width="11%" align="center" valign="middle">1</td>
                                       <td align="center" valign="middle">WEEK(S)</td>
                                       <td align="center" valign="middle">0</td>
                                       <td align="center" valign="middle">1</td>
                                       <td align="center" valign="middle">1</td>
                                       <td align="center" valign="middle">
                                          <p>//</p>
                                          <p></p>
                                       </td>
                                       <td align="center" valign="middle">
                                          <p>//</p>
                                          <p></p>
                                       </td>
                                       <td align="center" valign="middle">&nbsp;</td>
                                       <td align="center" valign="middle">&nbsp;</td>
                                       <td align="center" valign="middle">&nbsp;</td>
                                       <td align="center" valign="middle">&nbsp;</td>
                                       <td align="center" valign="middle">&nbsp;</td>
                                       <td align="center" valign="middle">
                                          <div className="col-sm-4  col-xs-6 p0 pull-right text-center timecard_dele pull-right">
                                             <a href="#" data-toggle="modal" data-target="#exampleModalCenter">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="1700 296 15 19.286">
                                                   <path id="ic_delete_24px" className="cls-1" d="M6.071,20.143a2.149,2.149,0,0,0,2.143,2.143h8.571a2.149,2.149,0,0,0,2.143-2.143V7.286H6.071ZM20,4.071H16.25L15.179,3H9.821L8.75,4.071H5V6.214H20Z" transform="translate(1695 293)"/>
                                                </svg>
                                             </a>
                                          </div>
                                          <div className="col-sm-4  col-xs-6 p0 text-center timecard_edit6 pull-right">
                                             <a href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="1656.776 299 17.515 18.003">
                                                   <path id="ic_create_24px" className="cls-1" d="M3,17.25V21H6.648L17.409,9.94,13.761,6.19ZM20.23,7.04a1.016,1.016,0,0,0,0-1.41L17.954,3.29a.95.95,0,0,0-1.372,0L14.8,5.12,18.45,8.87l1.78-1.83Z" transform="translate(1653.776 296.002)"/>
                                                </svg>
                                             </a>
                                          </div>
                                       </td>
                                    </tr>
                                    <tr>
                                       <td align="center" valign="middle">ACON</td>
                                       <td align="center" valign="middle">6 DayWeek</td>
                                       <td align="center" valign="middle">1</td>
                                       <td align="center" valign="middle">WEEK(S)</td>
                                       <td align="center" valign="middle">0</td>
                                       <td align="center" valign="middle">1</td>
                                       <td align="center" valign="middle">1</td>
                                       <td align="center" valign="middle">
                                          <p>//</p>
                                          <p></p>
                                       </td>
                                       <td align="center" valign="middle">
                                          <p>//</p>
                                          <p></p>
                                       </td>
                                       <td align="center" valign="middle">&nbsp;</td>
                                       <td align="center" valign="middle">&nbsp;</td>
                                       <td align="center" valign="middle">&nbsp;</td>
                                       <td align="center" valign="middle">&nbsp;</td>
                                       <td align="center" valign="middle">&nbsp;</td>
                                       <td align="center" valign="middle">
                                          <div className="col-sm-4  col-xs-6 p0 pull-right text-center timecard_dele pull-right">
                                             <a href="#" data-toggle="modal" data-target="#exampleModalCenter">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="1700 296 15 19.286">
                                                   <path id="ic_delete_24px2" className="cls-1" d="M6.071,20.143a2.149,2.149,0,0,0,2.143,2.143h8.571a2.149,2.149,0,0,0,2.143-2.143V7.286H6.071ZM20,4.071H16.25L15.179,3H9.821L8.75,4.071H5V6.214H20Z" transform="translate(1695 293)"/>
                                                </svg>
                                             </a>
                                          </div>
                                          <div className="col-sm-4  col-xs-6 p0 text-center timecard_edit6 pull-right">
                                             <a href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="1656.776 299 17.515 18.003">
                                                   <path id="ic_create_24px2" className="cls-1" d="M3,17.25V21H6.648L17.409,9.94,13.761,6.19ZM20.23,7.04a1.016,1.016,0,0,0,0-1.41L17.954,3.29a.95.95,0,0,0-1.372,0L14.8,5.12,18.45,8.87l1.78-1.83Z" transform="translate(1653.776 296.002)"/>
                                                </svg>
                                             </a>
                                          </div>
                                       </td>
                                    </tr>
                                    <tr>
                                       <td align="center" valign="middle">ACON</td>
                                       <td align="center" valign="middle">6 DayWeek</td>
                                       <td align="center" valign="middle">1</td>
                                       <td align="center" valign="middle">WEEK(S)</td>
                                       <td align="center" valign="middle">0</td>
                                       <td align="center" valign="middle">1</td>
                                       <td align="center" valign="middle">1</td>
                                       <td align="center" valign="middle">
                                          <p>//</p>
                                          <p></p>
                                       </td>
                                       <td align="center" valign="middle">
                                          <p>//</p>
                                          <p></p>
                                       </td>
                                       <td align="center" valign="middle">&nbsp;</td>
                                       <td align="center" valign="middle">&nbsp;</td>
                                       <td align="center" valign="middle">&nbsp;</td>
                                       <td align="center" valign="middle">&nbsp;</td>
                                       <td align="center" valign="middle">&nbsp;</td>
                                       <td align="center" valign="middle">
                                          <div className="col-sm-4  col-xs-6 p0 pull-right text-center timecard_dele pull-right">
                                             <a href="#" data-toggle="modal" data-target="#exampleModalCenter">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="1700 296 15 19.286">
                                                   <path id="ic_delete_24px3" className="cls-1" d="M6.071,20.143a2.149,2.149,0,0,0,2.143,2.143h8.571a2.149,2.149,0,0,0,2.143-2.143V7.286H6.071ZM20,4.071H16.25L15.179,3H9.821L8.75,4.071H5V6.214H20Z" transform="translate(1695 293)"/>
                                                </svg>
                                             </a>
                                          </div>
                                          <div className="col-sm-4  col-xs-6 p0 text-center timecard_edit6 pull-right">
                                             <a href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="1656.776 299 17.515 18.003">
                                                   <path id="ic_create_24px3" className="cls-1" d="M3,17.25V21H6.648L17.409,9.94,13.761,6.19ZM20.23,7.04a1.016,1.016,0,0,0,0-1.41L17.954,3.29a.95.95,0,0,0-1.372,0L14.8,5.12,18.45,8.87l1.78-1.83Z" transform="translate(1653.776 296.002)"/>
                                                </svg>
                                             </a>
                                          </div>
                                       </td>
                                    </tr>
                                    <tr>
                                       <td align="center" valign="middle">ACON</td>
                                       <td align="center" valign="middle">6 DayWeek</td>
                                       <td align="center" valign="middle">1</td>
                                       <td align="center" valign="middle">WEEK(S)</td>
                                       <td align="center" valign="middle">0</td>
                                       <td align="center" valign="middle">1</td>
                                       <td align="center" valign="middle">1</td>
                                       <td align="center" valign="middle">
                                          <p>//</p>
                                          <p></p>
                                       </td>
                                       <td align="center" valign="middle">
                                          <p>//</p>
                                          <p></p>
                                       </td>
                                       <td align="center" valign="middle">&nbsp;</td>
                                       <td align="center" valign="middle">&nbsp;</td>
                                       <td align="center" valign="middle">&nbsp;</td>
                                       <td align="center" valign="middle">&nbsp;</td>
                                       <td align="center" valign="middle">&nbsp;</td>
                                       <td align="center" valign="middle">
                                          <div className="col-sm-4  col-xs-6 p0 pull-right text-center timecard_dele pull-right">
                                             <a href="#" data-toggle="modal" data-target="#exampleModalCenter">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="1700 296 15 19.286">
                                                   <path id="ic_delete_24px4" className="cls-1" d="M6.071,20.143a2.149,2.149,0,0,0,2.143,2.143h8.571a2.149,2.149,0,0,0,2.143-2.143V7.286H6.071ZM20,4.071H16.25L15.179,3H9.821L8.75,4.071H5V6.214H20Z" transform="translate(1695 293)"/>
                                                </svg>
                                             </a>
                                          </div>
                                          <div className="col-sm-4  col-xs-6 p0 text-center timecard_edit6 pull-right">
                                             <a href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="1656.776 299 17.515 18.003">
                                                   <path id="ic_create_24px4" className="cls-1" d="M3,17.25V21H6.648L17.409,9.94,13.761,6.19ZM20.23,7.04a1.016,1.016,0,0,0,0-1.41L17.954,3.29a.95.95,0,0,0-1.372,0L14.8,5.12,18.45,8.87l1.78-1.83Z" transform="translate(1653.776 296.002)"/>
                                                </svg>
                                             </a>
                                          </div>
                                       </td>
                                    </tr>
                                    <tr>
                                       <td align="center" valign="middle">ACON</td>
                                       <td align="center" valign="middle">6 DayWeek</td>
                                       <td align="center" valign="middle">1</td>
                                       <td align="center" valign="middle">WEEK(S)</td>
                                       <td align="center" valign="middle">0</td>
                                       <td align="center" valign="middle">1</td>
                                       <td align="center" valign="middle">1</td>
                                       <td align="center" valign="middle">
                                          <p>//</p>
                                          <p></p>
                                       </td>
                                       <td align="center" valign="middle">
                                          <p>//</p>
                                          <p></p>
                                       </td>
                                       <td align="center" valign="middle">&nbsp;</td>
                                       <td align="center" valign="middle">&nbsp;</td>
                                       <td align="center" valign="middle">&nbsp;</td>
                                       <td align="center" valign="middle">&nbsp;</td>
                                       <td align="center" valign="middle">&nbsp;</td>
                                       <td align="center" valign="middle">
                                          <div className="col-sm-4  col-xs-6 p0 pull-right text-center timecard_dele pull-right">
                                             <a href="#" data-toggle="modal" data-target="#exampleModalCenter">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="1700 296 15 19.286">
                                                   <path id="ic_delete_24px5" className="cls-1" d="M6.071,20.143a2.149,2.149,0,0,0,2.143,2.143h8.571a2.149,2.149,0,0,0,2.143-2.143V7.286H6.071ZM20,4.071H16.25L15.179,3H9.821L8.75,4.071H5V6.214H20Z" transform="translate(1695 293)"/>
                                                </svg>
                                             </a>
                                          </div>
                                          <div className="col-sm-4  col-xs-6 p0 text-center timecard_edit6 pull-right">
                                             <a href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="1656.776 299 17.515 18.003">
                                                   <path id="ic_create_24px5" className="cls-1" d="M3,17.25V21H6.648L17.409,9.94,13.761,6.19ZM20.23,7.04a1.016,1.016,0,0,0,0-1.41L17.954,3.29a.95.95,0,0,0-1.372,0L14.8,5.12,18.45,8.87l1.78-1.83Z" transform="translate(1653.776 296.002)"/>
                                                </svg>
                                             </a>
                                          </div>
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
               <div id="myModal2" className="modal fade" role="dialog">
                  <div className="modal-dialog">
                     <div className="modal-content">
                        <div className="modal-header">
                           <button type="button" className="close OutlineNone" data-dismiss="modal"><img src="images/ic_clear_24px@2x.png" className="mt15" width="18" height="18" alt="" /></button>
                           <h4 className="modal-title modal_customefield">Custom List Code</h4>
                        </div>
                        <div className="modal-body label_modal_custom pdg_modal_csutom_leist modal_pop_list_scroll">
                           <div className="col-sm-12">
                              NOTE: Drag fields to change order in form and list.
                              <div className="clear20"></div>
                           </div>
                           <div className="col-sm-12 p0 mrg_bot_custom10">
                              <div className="col-xs-12 col-sm-4 col-md-4 label_csutom_pop">Pmt Code:</div>
                              <div className="col-xs-10 col-sm-7 col-md-7"><input name="" type="text" /></div>
                              <div className="col-xs-2 col-sm-1 col-md-1">
                                 <button type="button" className="pen_custom_list_pop OutlineNone" data-toggle="modal" data-target="#myModal2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="1656.776 299 17.515 18.003">
                                       <path id="ic_create_24px" className="cls-1" d="M3,17.25V21H6.648L17.409,9.94,13.761,6.19ZM20.23,7.04a1.016,1.016,0,0,0,0-1.41L17.954,3.29a.95.95,0,0,0-1.372,0L14.8,5.12,18.45,8.87l1.78-1.83Z" transform="translate(1653.776 296.002)"></path>
                                    </svg>
                                 </button>
                              </div>
                           </div>
                           <div className="col-sm-12 p0 mrg_bot_custom10">
                              <div className="col-xs-12 col-sm-4 col-md-4 label_csutom_pop">Description:</div>
                              <div className="col-xs-10 col-sm-7 col-md-7"><input name="" type="text" /></div>
                              <div className="col-xs-2 col-sm-1 col-md-1">
                                 <button type="button" className="pen_custom_list_pop OutlineNone"  data-toggle="modal" data-target="#myModal2" >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="1656.776 299 17.515 18.003">
                                       <path id="ic_create_24px" className="cls-1" d="M3,17.25V21H6.648L17.409,9.94,13.761,6.19ZM20.23,7.04a1.016,1.016,0,0,0,0-1.41L17.954,3.29a.95.95,0,0,0-1.372,0L14.8,5.12,18.45,8.87l1.78-1.83Z" transform="translate(1653.776 296.002)"></path>
                                    </svg>
                                 </button>
                              </div>
                           </div>
                           <div className="col-sm-12 p0 mrg_bot_custom10">
                              <div className="col-xs-12 col-sm-4 col-md-4 label_csutom_pop">Unit:</div>
                              <div className="col-xs-10 col-sm-7 col-md-7"><input name="" type="text" /></div>
                              <div className="col-xs-2 col-sm-1 col-md-1">
                                 <button type="button" className="pen_custom_list_pop OutlineNone" >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="1656.776 299 17.515 18.003">
                                       <path id="ic_create_24px" className="cls-1" d="M3,17.25V21H6.648L17.409,9.94,13.761,6.19ZM20.23,7.04a1.016,1.016,0,0,0,0-1.41L17.954,3.29a.95.95,0,0,0-1.372,0L14.8,5.12,18.45,8.87l1.78-1.83Z" transform="translate(1653.776 296.002)"></path>
                                    </svg>
                                 </button>
                              </div>
                           </div>
                           <div className="col-sm-12 p0 mrg_bot_custom10">
                              <div className="col-xs-12 col-sm-4 col-md-4 label_csutom_pop">Unit Desc:</div>
                              <div className="col-xs-10 col-sm-7 col-md-7"><select name=""></select></div>
                              <div className="col-xs-2 col-sm-1 col-md-1">
                                 <button type="button" className="pen_custom_list_pop OutlineNone">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="1656.776 299 17.515 18.003">
                                       <path id="ic_create_24px" className="cls-1" d="M3,17.25V21H6.648L17.409,9.94,13.761,6.19ZM20.23,7.04a1.016,1.016,0,0,0,0-1.41L17.954,3.29a.95.95,0,0,0-1.372,0L14.8,5.12,18.45,8.87l1.78-1.83Z" transform="translate(1653.776 296.002)"></path>
                                    </svg>
                                 </button>
                              </div>
                           </div>
                           <div className="col-sm-12 p0 mrg_bot_custom10">
                              <div className="col-xs-12 col-sm-4 col-md-4 label_csutom_pop">Rate:</div>
                              <div className="col-xs-10 col-sm-7 col-md-7"><input name="" type="text" /></div>
                              <div className="col-xs-2 col-sm-1 col-md-1">
                                 <button type="button" className="pen_custom_list_pop OutlineNone">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="1656.776 299 17.515 18.003">
                                       <path id="ic_create_24px" className="cls-1" d="M3,17.25V21H6.648L17.409,9.94,13.761,6.19ZM20.23,7.04a1.016,1.016,0,0,0,0-1.41L17.954,3.29a.95.95,0,0,0-1.372,0L14.8,5.12,18.45,8.87l1.78-1.83Z" transform="translate(1653.776 296.002)"></path>
                                    </svg>
                                 </button>
                              </div>
                           </div>
                           <div className="col-sm-12 p0 mrg_bot_custom10">
                              <div className="col-xs-12 col-sm-4 col-md-4 label_csutom_pop">Factor:</div>
                              <div className="col-xs-10 col-sm-7 col-md-7"><input name="" type="text" /></div>
                              <div className="col-xs-2 col-sm-1 col-md-1">
                                 <button type="button" className="pen_custom_list_pop OutlineNone">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="1656.776 299 17.515 18.003">
                                       <path id="ic_create_24px" className="cls-1" d="M3,17.25V21H6.648L17.409,9.94,13.761,6.19ZM20.23,7.04a1.016,1.016,0,0,0,0-1.41L17.954,3.29a.95.95,0,0,0-1.372,0L14.8,5.12,18.45,8.87l1.78-1.83Z" transform="translate(1653.776 296.002)"></path>
                                    </svg>
                                 </button>
                              </div>
                           </div>
                           <div className="col-sm-12 p0 mrg_bot_custom10">
                              <div className="col-xs-12 col-sm-4 col-md-4 label_csutom_pop">Amount:</div>
                              <div className="col-xs-10 col-sm-7 col-md-7"><input name="" type="text" /></div>
                              <div className="col-xs-2 col-sm-1 col-md-1">
                                 <button type="button" className="pen_custom_list_pop OutlineNone">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="1656.776 299 17.515 18.003">
                                       <path id="ic_create_24px" className="cls-1" d="M3,17.25V21H6.648L17.409,9.94,13.761,6.19ZM20.23,7.04a1.016,1.016,0,0,0,0-1.41L17.954,3.29a.95.95,0,0,0-1.372,0L14.8,5.12,18.45,8.87l1.78-1.83Z" transform="translate(1653.776 296.002)"></path>
                                    </svg>
                                 </button>
                              </div>
                           </div>
                           <div className="col-sm-12 p0 mrg_bot_custom10">
                              <div className="col-xs-12 col-sm-4 col-md-4 label_csutom_pop">Capped Amount:</div>
                              <div className="col-xs-10 col-sm-7 col-md-7"><input name="" type="text" /></div>
                              <div className="col-xs-2 col-sm-1 col-md-1">
                                 <button type="button" className="pen_custom_list_pop OutlineNone">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="1656.776 299 17.515 18.003">
                                       <path id="ic_create_24px" className="cls-1" d="M3,17.25V21H6.648L17.409,9.94,13.761,6.19ZM20.23,7.04a1.016,1.016,0,0,0,0-1.41L17.954,3.29a.95.95,0,0,0-1.372,0L14.8,5.12,18.45,8.87l1.78-1.83Z" transform="translate(1653.776 296.002)"></path>
                                    </svg>
                                 </button>
                              </div>
                           </div>
                           <div className="col-sm-12 p0 mrg_bot_custom10">
                              <div className="col-xs-12 col-sm-4 col-md-4 label_csutom_pop">Days in Week:</div>
                              <div className="col-xs-10 col-sm-7 col-md-7"><input name="" type="text" /></div>
                              <div className="col-xs-2 col-sm-1 col-md-1">
                                 <button type="button" className="pen_custom_list_pop OutlineNone">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="1656.776 299 17.515 18.003">
                                       <path id="ic_create_24px" className="cls-1" d="M3,17.25V21H6.648L17.409,9.94,13.761,6.19ZM20.23,7.04a1.016,1.016,0,0,0,0-1.41L17.954,3.29a.95.95,0,0,0-1.372,0L14.8,5.12,18.45,8.87l1.78-1.83Z" transform="translate(1653.776 296.002)"></path>
                                    </svg>
                                 </button>
                              </div>
                           </div>
                           <div className="col-sm-12 p0 mrg_bot_custom10">
                              <div className="col-xs-12 col-sm-4 col-md-4 label_csutom_pop">Date From:</div>
                              <div className="col-xs-10 col-sm-7 col-md-7">
                                 <div className="col-xs-6 col-sm-6 p0"><input name="" type="text" /></div>
                                 <div className="col-xs-2 col-sm-2 calendar_time2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="2936.352 349.176 18.501 23.145">
                                       <a href="#">
                                          <path id="ic_date_range_24px" className="cls-1" d="M9.167,12.415H7.111V14.73H9.167Zm4.111,0H11.223V14.73h2.056Zm4.111,0H15.334V14.73H17.39Zm2.056-8.1H18.418V2H16.362V4.314H8.139V2H6.084V4.314H5.056A2.188,2.188,0,0,0,3.01,6.629L3,22.83a2.2,2.2,0,0,0,2.056,2.314h14.39A2.2,2.2,0,0,0,21.5,22.83V6.629A2.2,2.2,0,0,0,19.446,4.314Zm0,18.516H5.056V10.1h14.39Z" transform="translate(2933.352 347.176)"></path>
                                       </a>
                                    </svg>
                                 </div>
                              </div>
                              <div className="col-xs-2 col-sm-1 col-md-1">
                                 <button type="button" className="pen_custom_list_pop OutlineNone">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="1656.776 299 17.515 18.003">
                                       <path id="ic_create_24px" className="cls-1" d="M3,17.25V21H6.648L17.409,9.94,13.761,6.19ZM20.23,7.04a1.016,1.016,0,0,0,0-1.41L17.954,3.29a.95.95,0,0,0-1.372,0L14.8,5.12,18.45,8.87l1.78-1.83Z" transform="translate(1653.776 296.002)"></path>
                                    </svg>
                                 </button>
                              </div>
                           </div>
                           <div className="col-sm-12 p0 mrg_bot_custom10">
                              <div className="col-xs-12 col-sm-4 col-md-4 label_csutom_pop">Date To:</div>
                              <div className="col-xs-10 col-sm-7 col-md-7">
                                 <div className="col-xs-6 col-sm-6 p0"><input name="" type="text" /></div>
                                 <div className="col-xs-2 col-sm-2 calendar_time2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="2936.352 349.176 18.501 23.145">
                                       <a href="#">
                                          <path id="ic_date_range_24px" className="cls-1" d="M9.167,12.415H7.111V14.73H9.167Zm4.111,0H11.223V14.73h2.056Zm4.111,0H15.334V14.73H17.39Zm2.056-8.1H18.418V2H16.362V4.314H8.139V2H6.084V4.314H5.056A2.188,2.188,0,0,0,3.01,6.629L3,22.83a2.2,2.2,0,0,0,2.056,2.314h14.39A2.2,2.2,0,0,0,21.5,22.83V6.629A2.2,2.2,0,0,0,19.446,4.314Zm0,18.516H5.056V10.1h14.39Z" transform="translate(2933.352 347.176)"></path>
                                       </a>
                                    </svg>
                                 </div>
                              </div>
                              <div className="col-xs-2 col-sm-1 col-md-1">
                                 <button type="button" className="pen_custom_list_pop OutlineNone">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="1656.776 299 17.515 18.003">
                                       <path id="ic_create_24px" className="cls-1" d="M3,17.25V21H6.648L17.409,9.94,13.761,6.19ZM20.23,7.04a1.016,1.016,0,0,0,0-1.41L17.954,3.29a.95.95,0,0,0-1.372,0L14.8,5.12,18.45,8.87l1.78-1.83Z" transform="translate(1653.776 296.002)"></path>
                                    </svg>
                                 </button>
                              </div>
                           </div>
                           <div className="col-sm-12 p0 mrg_bot_custom10">
                              <div className="col-xs-12 col-sm-4 col-md-4 label_csutom_pop">Chart Sort:</div>
                              <div className="col-xs-10 col-sm-7 col-md-7"><input name="" type="text" /></div>
                              <div className="col-xs-2 col-sm-1 col-md-1">
                                 <button type="button" className="pen_custom_list_pop OutlineNone">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="1656.776 299 17.515 18.003">
                                       <path id="ic_create_24px" className="cls-1" d="M3,17.25V21H6.648L17.409,9.94,13.761,6.19ZM20.23,7.04a1.016,1.016,0,0,0,0-1.41L17.954,3.29a.95.95,0,0,0-1.372,0L14.8,5.12,18.45,8.87l1.78-1.83Z" transform="translate(1653.776 296.002)"></path>
                                    </svg>
                                 </button>
                              </div>
                           </div>
                           <div className="col-sm-12 p0 mrg_bot_custom10">
                              <div className="col-xs-12 col-sm-4 col-md-4 label_csutom_pop">Chart Code:</div>
                              <div className="col-xs-10 col-sm-7 col-md-7"><input name="" type="text" /></div>
                              <div className="col-xs-2 col-sm-1 col-md-1">
                                 <button type="button" className="pen_custom_list_pop OutlineNone">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="1656.776 299 17.515 18.003">
                                       <path id="ic_create_24px" className="cls-1" d="M3,17.25V21H6.648L17.409,9.94,13.761,6.19ZM20.23,7.04a1.016,1.016,0,0,0,0-1.41L17.954,3.29a.95.95,0,0,0-1.372,0L14.8,5.12,18.45,8.87l1.78-1.83Z" transform="translate(1653.776 296.002)"></path>
                                    </svg>
                                 </button>
                              </div>
                           </div>
                           <div className="col-sm-12 p0 mrg_bot_custom10">
                              <div className="col-xs-12 col-sm-4 col-md-4 label_csutom_pop">Flag:</div>
                              <div className="col-xs-10 col-sm-7 col-md-7"><input name="" type="text" /></div>
                              <div className="col-xs-2 col-sm-1 col-md-1">
                                 <button type="button" className="pen_custom_list_pop OutlineNone">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="1656.776 299 17.515 18.003">
                                       <path id="ic_create_24px" className="cls-1" d="M3,17.25V21H6.648L17.409,9.94,13.761,6.19ZM20.23,7.04a1.016,1.016,0,0,0,0-1.41L17.954,3.29a.95.95,0,0,0-1.372,0L14.8,5.12,18.45,8.87l1.78-1.83Z" transform="translate(1653.776 296.002)"></path>
                                    </svg>
                                 </button>
                              </div>
                           </div>
                           <div className="col-sm-12 p0 mrg_bot_custom10">
                              <div className="col-xs-12 col-sm-4 col-md-4 label_csutom_pop">Payment Flag:</div>
                              <div className="col-xs-10 col-sm-7 col-md-7"><input name="" type="text" /></div>
                              <div className="col-xs-2 col-sm-1 col-md-1">
                                 <button type="button" className="pen_custom_list_pop OutlineNone">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="1656.776 299 17.515 18.003">
                                       <path id="ic_create_24px" className="cls-1" d="M3,17.25V21H6.648L17.409,9.94,13.761,6.19ZM20.23,7.04a1.016,1.016,0,0,0,0-1.41L17.954,3.29a.95.95,0,0,0-1.372,0L14.8,5.12,18.45,8.87l1.78-1.83Z" transform="translate(1653.776 296.002)"></path>
                                    </svg>
                                 </button>
                              </div>
                           </div>
                           <div className="col-sm-12 p0 mrg_bot_custom10">
                              <div className="col-xs-12 col-sm-4 col-md-4 label_csutom_pop">Calc Days:</div>
                              <div className="col-xs-2 col-sm-1 col-md-1 pull-right">
                                 <button type="button" className="pen_custom_list_pop OutlineNone">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="1656.776 299 17.515 18.003">
                                       <path id="ic_create_24px" className="cls-1" d="M3,17.25V21H6.648L17.409,9.94,13.761,6.19ZM20.23,7.04a1.016,1.016,0,0,0,0-1.41L17.954,3.29a.95.95,0,0,0-1.372,0L14.8,5.12,18.45,8.87l1.78-1.83Z" transform="translate(1653.776 296.002)"></path>
                                    </svg>
                                 </button>
                              </div>
                           </div>
                           <div className="col-sm-12 p0 mrg_bot_custom10">
                              <div className="col-xs-12 col-sm-4 col-md-4 label_csutom_pop">Calc Weeks:</div>
                              <div className="col-xs-2 col-sm-1 col-md-1 pull-right">
                                 <button type="button" className="pen_custom_list_pop OutlineNone">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="1656.776 299 17.515 18.003">
                                       <path id="ic_create_24px" className="cls-1" d="M3,17.25V21H6.648L17.409,9.94,13.761,6.19ZM20.23,7.04a1.016,1.016,0,0,0,0-1.41L17.954,3.29a.95.95,0,0,0-1.372,0L14.8,5.12,18.45,8.87l1.78-1.83Z" transform="translate(1653.776 296.002)"></path>
                                    </svg>
                                 </button>
                              </div>
                           </div>
                           <div className="clear30"></div>
                           <div className="col-sm-6">
                              <div className="btn_cance_save">
                                 <button type="button" className="btn_save_pro"  data-dismiss="modal">Save</button>
                                 <button type="button" className="btn_cancel_pro"  data-dismiss="modal">Cancel</button>
                              </div>
                           </div>
                           <div className="clear20"></div>
                        </div>
                     </div>
                  </div>
               </div>
               <div id="myModal2" className="modal fade" role="dialog">
                  <div className="modal-dialog">
                     <div className="modal-content">
                        <div className="modal-header">
                           <button type="button" className="close" data-dismiss="modal OutlineNone"><img src="images/ic_clear_24px@2x.png" className="mt15" width="18" height="18" alt="" /></button>
                           <h4 className="modal-title modal_customefield">Setting</h4>
                        </div>
                        <div className="modal-body label_modal_custom pdg_modal_csutom_leist modalBodyCustomStyle">
                           <div className="col-sm-12 p0 mrg_bot_custom10">
                              <div className="col-xs-12 col-sm-4 col-md-4 label_csutom_pop">DB Field:</div>
                              <div className="col-xs-12 col-sm-8 col-md-8"><input name="" type="text" /></div>
                           </div>
                           <div className="col-sm-12 p0 mrg_bot_custom10">
                              <div className="col-xs-12 col-sm-4 col-md-4 label_csutom_pop">Validate:</div>
                              <div className="col-xs-12 col-sm-8 col-md-8"><input name="" type="text" /></div>
                           </div>
                           <div className="col-sm-12 p0 mrg_bot_custom10">
                              <div className="col-xs-12 col-sm-4 col-md-4 label_csutom_pop">Hide:</div>
                              <div className="col-xs-12 col-sm-8 col-md-8">
                                 <label className="check_box_pop">
                                 <input type="checkbox"/>
                                 <span className="checkmark"></span>
                                 </label>
                              </div>
                           </div>
                           <div className="col-sm-12 p0 mrg_bot_custom10">
                              <div className="col-xs-12 col-sm-4 col-md-4 label_csutom_pop">Read Only:</div>
                              <div className="col-xs-12 col-sm-8 col-md-8">
                                 <label className="check_box_pop">
                                 <input type="checkbox"/>
                                 <span className="checkmark"></span>
                                 </label>
                              </div>
                           </div>
                           <div className="col-sm-12 p0 mrg_bot_custom10">
                              <div className="col-xs-12 col-sm-4 col-md-4 label_csutom_pop">Required:</div>
                              <div className="col-xs-12 col-sm-8 col-md-8">
                                 <label className="check_box_pop">
                                 <input type="checkbox"/>
                                 <span className="checkmark"></span>
                                 </label>
                              </div>
                           </div>
                           <div className="clear30"></div>
                           <div className="col-sm-6">
                              <div className="btn_cance_save">
                                 <button type="button" className="btn_save_pro"  data-dismiss="modal">Save</button>
                                 <button type="button" className="btn_cancel_pro"  data-dismiss="modal">Cancel</button>
                              </div>
                           </div>
                           <div className="clear20"></div>
                        </div>
                     </div>
                  </div>
               </div>
           </div>
        );
    }
};
export default CustomFieldsList;
