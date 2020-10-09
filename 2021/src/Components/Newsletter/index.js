import React, { useState } from "react";
import { Input } from "antd";
import styled from "styled-components";
import "./Newsletter.css";

const Newsletter = (props) => {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const validateEmail = (email) => {
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email
    );
  };

  const submitEmail = (email) => {
    setLoading(true);
    const valid = validateEmail(email);
    if (valid) {
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
