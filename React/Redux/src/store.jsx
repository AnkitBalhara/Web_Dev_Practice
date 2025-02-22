const ADD_TASK = "task/add";
const DELETE_TASK = "task/delete";

const initialState = {
  task: [],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        task: [...state.task, action.payload],
      };

    case DELETE_TASK:
      const updateTask = state.task.filter((currEle, index) => {
        return index !== action.payload;
      });
      return {
        ...state,
        task: [...state.task],
      };
    default:
      return state;
  }
};
