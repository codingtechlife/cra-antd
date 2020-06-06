import students from "./sampledata.json";

export const getStudentList = () => (dispatch) => {
  dispatch({ type: "STUDENT_DATA_RECVD", data: students });
};

export const submitStudenData = (input) => (dispatch) => {
  console.log("student data submitted: ", input);
};
