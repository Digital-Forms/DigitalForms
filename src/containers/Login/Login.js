import React, { Component } from "react";
import { LinkContainer } from "react-router-bootstrap";
import "./Login.css";
import "../../assets/css/bootstrap.css";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/style.css";
import LOGO from "../../assets/images/logo.png";
import slider_img1 from "../../assets/images/slider_img1.jpg";
import slider_img2 from "../../assets/images/slider_img2.jpg";
import slider_img3 from "../../assets/images/slider_img3.jpg";

class Login extends Component {
  render() {
    return (
        <div className="Login">
           <div className="col-sm-12 p0">
              <div className="col-sm-6 p0">
                 <div className="col-sm-12 logo_login">
                    <LinkContainer to="/">
                       <img href={null} className="CursorPointer" src={LOGO} alt="LOGO" />
                    </LinkContainer>
                 </div>
                 <div className="col-sm-12 login_h2">
                    <h2>Welcome to Digital-Forms</h2>
                 </div>
                 <div className="col-sm-12 noPadding">
                    <div className="login_box">
                       <input name="" type="text" placeholder="User Name" />
                       <input name="" type="text" placeholder="Company ID" />
                       <input name="" type="text" placeholder="Password" />
                       <div className="col-sm-12 p0 text-right login_forgot">
                          <LinkContainer to="/forget-password-step-1">
                             <a href={null}>Forgot Password?</a>
                          </LinkContainer>
                       </div>
                       <div className="clearfix"></div>
                       <LinkContainer to="/dashboard">
                          <a href={null} className="btn_login">Login</a>
                       </LinkContainer>
                       <div className="clearfix"></div>
                       <div className="col-sm-12 p0 terms_label">I accept the <strong><a href="terms.html">Terms of Use</a></strong> and <strong><a href="privacy_policy">Privacy Policy</a></strong></div>
                    </div>
                 </div>
              </div>
              <div className="col-sm-6 noPadding">
                 <div className="login_right_area">
                    <div id="myCarousel" className="carousel slide" data-ride="carousel">
                       <ol className="carousel-indicators">
                          <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                          <li data-target="#myCarousel" data-slide-to="1"></li>
                          <li data-target="#myCarousel" data-slide-to="2"></li>
                       </ol>
                       <div className="carousel-inner">
                          <div className="item active">
                             <img src={slider_img1} className="img-responsive" alt="" />
                             <div className="clear20"></div>
                             <h2>Welcome to Digital-Forms</h2>
                             <label>Lorem Ipsum has been the industry's standard dummy text ever, Lorem Ipsum has been the industry's standard dummy text ever</label>
                          </div>
                          <div className="item">
                             <img src={slider_img2} className="img-responsive" alt="" />
                             <div className="clear20"></div>
                             <h2>Welcome to Digital-Forms</h2>
                             <label>Lorem Ipsum has been the industry's standard dummy text ever, Lorem Ipsum has been the industry's standard dummy text ever</label>
                          </div>
                          <div className="item">
                             <img src={slider_img3} className="img-responsive" alt="" />
                             <div className="clear20"></div>
                             <h2>Welcome to Digital-Forms</h2>
                             <label>Lorem Ipsum has been the industry's standard dummy text ever, Lorem Ipsum has been the industry's standard dummy text ever</label>
                          </div>
                       </div>
                    </div>
                    <div className="clearfix"></div>
                    <div className="login_terms">
                       @ Copyright TPH Technologies 2018
                    </div>
                 </div>
              </div>
              <div className="clearfix"></div>
           </div>
        </div>
    );
  }
};
export default Login;
