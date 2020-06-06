import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { Form, Button, Steps } from "antd";

import PersonalDetails from "./PersonalDetails";
import AcademicDetails from "./AcademicDetails";
import Summary from "./Summary";
import { submitStudenData } from "../StudentActions";
import "./StudentsHome.css";

const { Step } = Steps;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

function StudentsHome() {
  const dispatch = useDispatch();

  const [stepSelected, setStepSelected] = useState(0);
  const [studentData, setStudentData] = useState({});

  const onFinish = (values) => {
    setStudentData({ ...studentData, ...values });
    if (stepSelected === 0) {
      setStepSelected(1);
    } else if (stepSelected === 1) {
      setStepSelected(2);
    } else {
      console.log("Submit:", values);
      dispatch(submitStudenData(values));
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="student-home">
      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Steps
          current={stepSelected}
          onChange={(current) => {
            setStepSelected(current);
            console.log("current", current);
          }}
        >
          <Step title="Personal Details" description="" />
          <Step title="Academic Details" description="" />
          <Step title="Confirm" description="" />
        </Steps>

        {stepSelected === 0 && <PersonalDetails />}
        {stepSelected === 1 && <AcademicDetails />}
        {stepSelected === 2 && <Summary data={studentData} />}

        <Form.Item {...tailLayout}>
          {(stepSelected === 1 || stepSelected === 2) && (
            <Button onClick={() => setStepSelected(stepSelected - 1)}>
              Prev
            </Button>
          )}
          <Button type="primary" htmlType="submit">
            {stepSelected === 2 ? "Submit" : "Next"}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default StudentsHome;
