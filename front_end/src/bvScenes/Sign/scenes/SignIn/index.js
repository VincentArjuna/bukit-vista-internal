import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import {Form} from 'antd';
import Input from "../../../../bvComponents/Uielements/input";
import Button from "../../../../bvComponents/Uielements/button";
import authAction from "../../../../redux/auth/actions";
import appAction from "../../../../App/redux/app/actions";
import IntlMessages from "../../../../bvComponents/Utility/intlMessages";
import SignInStyleWrapper from "./signin.style";
import notification from '../../../../bvComponents/Notification';

const { login } = authAction;
const { clearMenu } = appAction;

const LoginWrapper=Form.create()(
class LoginForm extends React.Component {
  handleLogin = (e) => {
    e.preventDefault();
    const { login, clearMenu } = this.props;
    this.props.form.validateFields((err, values) => {
      if (err) {
        console.log(this.props.isLoggedIn);
        console.log(err);
      }else{
        console.log('Received values of form: ', values);
        login(values['username'],values['password']);
        console.log(this.props.isLoggedIn);
        if(this.props.isLoggedIn){
          clearMenu();
          this.props.history.push("/dashboard");
        }else{
          notification("error","Log In Failed","Wrong email or password. Please try again.");
        }
      }
    });
  };

  render() {
    const FormItem = Form.Item;
    const { getFieldDecorator } = this.props.form;
    return(
        <Form onSubmit={this.handleLogin} className="isoSignInForm">
            <FormItem className="isoInputWrapper">
              {getFieldDecorator('username', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input size="large" placeholder="Username" />
              )}
            </FormItem> 
            <FormItem className="isoInputWrapper">
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your password!' }],
            })(
              <Input size="large" type="password" placeholder="Password" />
            )}
            </FormItem> 
            <FormItem className="isoInputWrapper isoRightComponent">
              <Button type="primary" htmlType="submit">
                <IntlMessages id="page.signInButton" />
              </Button>
            </FormItem> 
        </Form>
    );
  }
});
class SignIn extends Component {
  state = {
    redirectToReferrer: false
  };
  componentDidMount(){
    console.log("Did Mount,logged in?:"+this.props.isLoggedIn);
    if (this.props.isLoggedIn ) {
      notification("success","You are now logged in!");
      this.setState({ redirectToReferrer: true });
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log("WillReceiveProps,this.props.logged in?:"+this.props.isLoggedIn+",WillReceiveProps,nextProps.logged in? : "+nextProps.isLoggedIn);
    if (
      this.props.isLoggedIn !== nextProps.isLoggedIn &&
      nextProps.isLoggedIn === true
    ) {
      notification("success","You are now logged in!");
      this.setState({ redirectToReferrer: true });
    }else{
      notification("error","You have to be logged in first");
    }
  }

  render() {
    const from = { pathname: "/dashboard" };
    const { redirectToReferrer } = this.state;
    console.log("redirectToReferrer ?:"+redirectToReferrer);
    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }
    return (
      <SignInStyleWrapper className="isoSignInPage">
        <div className="isoLoginContentWrapper">
          <div className="isoLoginContent">
            <div className="isoLogoWrapper">
              <Link to="/dashboard">
                INTERNAL TOOLS BUKITVISTA
              </Link>
            </div>
            <LoginWrapper
              login={this.props.login}
              clearMenu={this.props.clearMenu}
              history={this.props.history}
              isLoggedIn={this.props.isLoggedIn}
            />
          </div>
        </div>
      </SignInStyleWrapper>
    );
  }
}

export default connect(
  state => ({
    isLoggedIn: state.Auth.idToken === null || state.Auth.idToken=== undefined ? false:true,
  }),
  { login, clearMenu }
)(SignIn);
