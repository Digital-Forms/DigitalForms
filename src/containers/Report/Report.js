import React, { Component }
from "react";
import { LinkContainer }
from "react-router-bootstrap";
import "./Report.css";
import "../../assets/css/bootstrap.css";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/style.css";
import "../../assets/css/home.css";
import "../../assets/css/ie_only.css";
import LOGO from "../../assets/images/logo.png";
import LOGOLOGOUT from "../../assets/images/logout_icon.png";
import help_icon from "../../assets/images/help_icon.png";
import setting_icon from "../../assets/images/setting_icon.png";
class Report extends Component {
    render() {
        return (
            <div className="Report">
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
                    <div className="col-sm-6 col-md-6 header_top_right">

                        <LinkContainer to="/">
                        <a href={null} className="CursorPointer">Logout <img src={LOGOLOGOUT} alt="" /></a></LinkContainer>
                        <LinkContainer to="/help">
                        <a href={null} className="CursorPointer">Help <img src={help_icon} alt="" /></a></LinkContainer>
                        <LinkContainer to="/setting">
                        <a href={null} className="CursorPointer bL0px">Setting <img src={setting_icon} alt="" /></a></LinkContainer>
                    </div>
                    <div className="clearfix"></div>
                </div>
                <div className="clearfix"></div>
                <div className="col-sm-12 p0 top_mrg_general">
                    <div className="">
                        <div className="col-sm-9 col-sm-offset-2 general_setting_hd report_input">
                            <h2>Approved Report</h2>
                            <div className="col-sm-3 col-md-3 label_dataentry">Position:</div>
                            <div className="col-sm-6 col-md-5">
                                <input name="" type="text" />
                            </div>
                            <div className="clearfix"></div>
                            <div className="col-sm-3 col-md-3 label_dataentry">Department:</div>
                            <div className="col-sm-6 col-md-5">
                                <input name="" type="text" />
                            </div>
                            <div className="clearfix"></div>
                            <div className="col-sm-3 col-md-3 label_dataentry">Start Date:</div>
                            <div className="col-sm-6 col-md-5">

                                <div className="col-xs-12 p0">
                                    <div className="col-xs-6 col-sm-6 p0"><input name="" type="text"/></div>
                                    <div className="col-xs-2 col-sm-2 calendar_time2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="2936.352 349.176 18.501 23.145">
                                            <a href="#">
                                                <path id="ic_date_range_24px" className="cls-1" d="M9.167,12.415H7.111V14.73H9.167Zm4.111,0H11.223V14.73h2.056Zm4.111,0H15.334V14.73H17.39Zm2.056-8.1H18.418V2H16.362V4.314H8.139V2H6.084V4.314H5.056A2.188,2.188,0,0,0,3.01,6.629L3,22.83a2.2,2.2,0,0,0,2.056,2.314h14.39A2.2,2.2,0,0,0,21.5,22.83V6.629A2.2,2.2,0,0,0,19.446,4.314Zm0,18.516H5.056V10.1h14.39Z" transform="translate(2933.352 347.176)"></path>
                                            </a></svg>
                                    </div>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                            <div className="col-sm-3 col-md-3 label_dataentry">Finish Date:</div>
                            <div className="col-sm-6 col-md-5">

                                <div className="col-xs-12 p0">
                                    <div className="col-xs-6 col-sm-6 p0"><input name="" type="text"/></div>
                                    <div className="col-xs-2 col-sm-2 calendar_time2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="2936.352 349.176 18.501 23.145">
                                            <a href="#">
                                                <path id="ic_date_range_24px" className="cls-1" d="M9.167,12.415H7.111V14.73H9.167Zm4.111,0H11.223V14.73h2.056Zm4.111,0H15.334V14.73H17.39Zm2.056-8.1H18.418V2H16.362V4.314H8.139V2H6.084V4.314H5.056A2.188,2.188,0,0,0,3.01,6.629L3,22.83a2.2,2.2,0,0,0,2.056,2.314h14.39A2.2,2.2,0,0,0,21.5,22.83V6.629A2.2,2.2,0,0,0,19.446,4.314Zm0,18.516H5.056V10.1h14.39Z" transform="translate(2933.352 347.176)"></path>
                                            </a></svg>
                                    </div>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                            <div className="col-sm-3 col-md-3 label_dataentry">Project:</div>
                            <div className="col-sm-6 col-md-5">
                                <div className="select-style">
                                    <select>
                                        <option value="volvo">Lorem</option>
                                    </select>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                            <div className="col-sm-3 col-md-3 label_dataentry">Report Summary Only:</div>
                            <div className="col-sm-6 col-md-5">
                                <label className="check_box_pop">
                                    <input type="checkbox"/>
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                            <div className="clear40"></div>
                            <div className="btn_cance_save">
                                <div className="col-sm-12">
                                    <button type="button" className="btn_general_report">Generate Report</button>
                                </div>
                            </div>
                        </div>
                        <div className="clear40"></div>
                    </div>
                </div>
                <div className="clear40"></div>
            </div>
        );
    }
}
;
export default Report;
