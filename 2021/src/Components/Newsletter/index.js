import React, { useState } from "react";
import { Input } from "antd";
import styled from "styled-components";
import { media } from "../../utils/media";
import * as firebase from "firebase/app";

const Newsletter = (props) => {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const validateEmail = (email) => {
    if (
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        email
      )
    ) {
      return firebase
        .firestore()
        .collection("emails")
        .doc(email)
        .set({
          email: email,
        })
        .then(function (docRef) {
          return true;
        })
        .catch(function (error) {
          return "database error";
        });
    } else {
      return "email error";
    }
  };

  const submitEmail = async (email) => {
    setLoading(true);
    const valid = await validateEmail(email);
    if (valid === true) {
      setStatus("success");
    } else if(valid === "email error") {
      setStatus("please submit a valid email");
    } else if(valid === "database error"){
      setStatus("out network is experiencing an issue please try again");
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
        <SuccessMsg>
          Success, you have be subscribed to our newsletter
        </SuccessMsg>
      )}
      {status != "success" && <ErrorMsg>{status}</ErrorMsg>}
    </div>
  );
};

const SuccessMsg = styled.div`
  font-size: 1em;
  color: green;
`;

const ErrorMsg = styled.div`
  font-size: 1em;
  color: red;
`;

const RoundSearch = styled(Input.Search)`
  .ant-input,
  .ant-input-group-addon {
    border-radius: 20px;
  }
  ${media("sm")`
     .ant-input {
      font-size: 0.8rem;
    }
    .ant-input-search-button {
      font-size: 0.8rem;
      height: 35px;
    }
  `}
`;

export default Newsletter;
