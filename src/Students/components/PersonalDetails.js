import React from "react";

import "./StudentsHome.css";

import { Form, Input, Select, DatePicker } from "antd";
const { Option } = Select;

function PersonalDetails({ form }) {
  console.log("form", form);

  return (
    <div className="student-personal-details">
      <h1 type="flex" justify="center" align="middle">
        Personal Details
      </h1>
      <p type="flex" justify="center" align="middle">
        Please provide student personal details.
      </p>
      <Form.Item
        label="First name"
        name="firstname"
        rules={[
          {
            required: true,
            message: "Please input your firstname!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Last name"
        name="lastname"
        rules={[
          {
            required: true,
            message: "Please input your lastname!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Gender"
        name="gender"
        rules={[
          {
            required: true,
            message: "Please select gender!",
          },
        ]}
      >
        <Select>
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="dateofbirth"
        label="Date of birth"
        rules={[
          {
            required: true,
            message: "Please select date of birth!",
          },
        ]}
      >
        <DatePicker />
      </Form.Item>
      <Form.Item
        name={"address"}
        label="Address"
        rules={[
          {
            required: true,
            message: "Please enter address!",
          },
        ]}
      >
        <Input.TextArea />
      </Form.Item>
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: "email",
            message: "Please enter a valid E-mail!",
          },
          {
            required: true,
            message: "Please input your E-mail!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[{ required: true, message: "Please input your phone number!" }]}
      >
        <Input />
      </Form.Item>
    </div>
  );
}

export default PersonalDetails;
