/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import "./LoginForm.css";
import { Button } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { useNavigate } from "react-router";
import { Auth } from "aws-amplify";
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth/lib/types";
function 
LoginForm(props) {
  const navigate = useNavigate();
  return (
    <div className="LoginForm">
      <Button
        variant="contained"
        startIcon={<GoogleIcon />}
        onClick={() =>
          window.location.href = "https://walletclient0c49a695-0c49a695-master.auth.ap-southeast-1.amazoncognito.com/login?redirect_uri=http://localhost:5000/callback/&response_type=code&client_id=1gvhaehnlao5vgvjn12e0vkl8a&identity_provider=COGNITO&scope=phone email profile openid aws.cognito.signin.user.admin"
        }
      >
        Login with MAuthen
      </Button>
    </div>
  );
}

LoginForm.propTypes = {};
export default LoginForm;
