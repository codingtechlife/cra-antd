export default (
  state = {
    studentData: [],
  },
  action
) => {
  switch (action.type) {
    case "STUDENT_DATA_RECVD":
      return { ...state, studentData: action.data };
    default:
      return state;
  }
};
