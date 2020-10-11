import React, { useState } from "react";
import { Input } from "antd";
import styled from "styled-components";
import "./Newsletter.css";

import * as firebase from "firebase/app";


const Newsletter = (props) => {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

 
  const validateEmail = (email) => {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
      return firebase.firestore().collection("emails").doc(email).set({
        email: email
      })
      .then(function(docRef) {
          return true
      })
      .catch(function(error) {
          return false
      });
    }
    else {
      return false
    }
    
  };

  const submitEmail = async (email) => {
    setLoading(true);
    const valid = await validateEmail(email);
    if (valid == true) {
      setStatus("success");
    } else {
      setStatus("error");
    }
    setLoading(false);
  };

  return (
    <div>
      <RoundSearch
        size="large"
        placeholder="Enter your email address to stay connected"
        loading={loading}
        enterButton="Subscribe"
        onSearch={(email) => submitEmail(email)}
      />
      {status === "success" && (
        <div className="success-message">
          Success, you have be subscribed to our newsletter
        </div>
      )}
      {status === "error" && (
        <div className="error-message">Please submit a valid email</div>
      )}
    </div>
  );
};

const RoundSearch = styled(Input.Search)`
  .ant-input,
  .ant-input-group-addon {
    border-radius: 25px;
  }
`;

export default Newsletter;
