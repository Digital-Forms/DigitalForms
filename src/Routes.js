import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./containers/Login/Login";
import Dashboard from "./containers/Dashboard/Dashboard";
import FpStepFirst from "./containers/FpStepFirst/FpStepFirst";
import FpStepSecond from "./containers/FpStepSecond/FpStepSecond";
import FpStepThird from "./containers/FpStepThird/FpStepThird";
import Report from "./containers/Report/Report";
import FormTemplate from "./containers/FormTemplate/FormTemplate";
import FormPacks from "./containers/FormPacks/FormPacks";
import ApprovalSetup from "./containers/ApprovalSetup/ApprovalSetup";
import CustomFields from "./containers/CustomFields/CustomFields";
import CustomFieldsList from "./containers/CustomFieldsList/CustomFieldsList";

export default () =>
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/dashboard" exact component={Dashboard} />
    <Route path="/forget-password-step-1" exact component={FpStepFirst} />
    <Route path="/forget-password-step-2" exact component={FpStepSecond} />
    <Route path="/forget-password-step-3" exact component={FpStepThird} />
    <Route path="/report" exact component={Report} />
    <Route path="/form-template" exact component={FormTemplate} />
    <Route path="/form-packs" exact component={FormPacks} />
    <Route path="/approval-setup" exact component={ApprovalSetup} />
    <Route path="/custom-fields" exact component={CustomFields} />
    <Route path="/custom-fields-list" exact component={CustomFieldsList} />



  </Switch>;
