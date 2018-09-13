import React, { Component } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import "./FpStepThird.css";
import "../../assets/css/bootstrap.css";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/style.css";
import LOGO from "../../assets/images/reset_logo.jpg";
import close_icon from "../../assets/images/close_icon.png";
import sucess_forgot from "../../assets/images/sucess_forgot.jpg";
class FpStepThird extends Component {
    render() {
        return (
            <div className="FpStepFirst">
                <div className="forgot_bg">
                    <div className="col-sm-12">
                        <div className="container p0">
                            <div className="forgot_box1">
                                <div className="forgot_box">
                                    <div className="col-sm-12 reset_password">
                                        <LinkContainer to="/">
                                            <img src={LOGO} alt="LOGO" id="marginRight10"/>
                                        </LinkContainer>
                                        Reset Password
                                    </div>
                                    <div className="reset_under_box">
                                    <div className="clear50"></div>
                                            Enter the password and confirm password
                                        <div className="clear20"></div>
                                        <input name="" className="frogot_input" type="text" placeholder="Password" />
                                        <div className="clear10"></div>
                                        <input name="" className="frogot_input" type="text" placeholder="Confirm Password" />
                                    <div className="clear20"></div>
                                        <LinkContainer to="/forget-password-step-2">
                                        <a href={null} className="btn_frogot_back">Back</a>
                                        </LinkContainer>
                                        <a href={null}  data-toggle="modal" data-target="#myModal" className="btn_frogot_blue CursorPointer">Proceed</a>
                                    <div className="clearfix"></div>
                                         </div>
                                    <div className="clearfix"></div>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                        <div className="clearfix"></div>
                        <div id="myModal" className="modal fade" role="dialog">
                            <div className="modal-dialog">
                            <div className="modal-content modal_forgot_w">
                              <div className="modal-header forgot_modal_header">
                                <button type="button" className="close" data-dismiss="modal"><img src={close_icon} alt="" /></button>
                              <img src={sucess_forgot} width="80" height="80" alt="" />
                              </div>
                              <div className="modal-body forgot_modal_body">
                                <p>SUCCESS!</p>
                                <div className="clear60"></div>
                                <div className="clear10"></div>
                                <div className="col-sm-12">


                                        <a href="/dashboard" className="btn_frogot_ok">OK</a>


                                </div>
                                 <div className="clearfix"></div>
                              </div>
                            </div>
                            </div>
                            </div>
                    </div>
                </div>
            </div>
        );
    }
}
;
export default FpStepThird;
