import React from "react";

import { Form, Input, Select } from "antd";
const { Option } = Select;

function AcademicDetails() {
  return (
    <div className="student-academic-details">
      <h1 type="flex" justify="center" align="middle">
        Academic Details
      </h1>
      <p type="flex" justify="center" align="middle">
        Please provide student academic details.
      </p>
      <Form.Item
        label="School Name"
        name="schoolname"
        rules={[
          {
            required: true,
            message: "Please input name of school!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Year of passout"
        name="year"
        rules={[
          {
            required: true,
            message: "Please input year of pass out!",
          },
        ]}
      >
        <Select>
          <Option value="2015">2015</Option>
          <Option value="2016">2016</Option>
          <Option value="2017">2017</Option>
          <Option value="2018">2018</Option>
          <Option value="2019">2019</Option>
          <Option value="2020">2020</Option>
          <Option value="2021">2021</Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="grade"
        label="Grade"
        rules={[
          {
            required: true,
            message: "Please input your grade!",
          },
        ]}
      >
        <Input />
      </Form.Item>
    </div>
  );
}

export default AcademicDetails;
