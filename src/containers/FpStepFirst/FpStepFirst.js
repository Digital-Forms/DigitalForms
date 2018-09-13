import React, { Component } from "react";
import { LinkContainer } from "react-router-bootstrap";
import "./FpStepFirst.css";
import "../../assets/css/bootstrap.css";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/style.css";
import LOGO from "../../assets/images/reset_logo.jpg";

class FpStepFirst extends Component {
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
                                        Enter your phone number below to reset your password
                                        <div className="clear20"></div>
                                        <input name="" className="frogot_input" type="text" placeholder="Phone Number" />
                                        <div className="clear50"></div>
                                        <LinkContainer to="/">
                                        <a href={null} className="btn_frogot_back">Back</a>
                                        </LinkContainer>
                                        <LinkContainer to="/forget-password-step-2">
                                        <a href={null}  className="btn_frogot_blue">Proceed</a>
                                        </LinkContainer>
                                        <div className="clearfix"></div>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>
            </div>
        );
    }
}
;
export default FpStepFirst;
