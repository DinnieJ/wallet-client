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
          Auth.federatedSignIn({
            provider: CognitoHostedUIIdentityProvider.Cognito,
          })
        }
      >
        Login with MAuthen
      </Button>
    </div>
  );
}

LoginForm.propTypes = {};
export default LoginForm;
