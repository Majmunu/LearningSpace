import { configureStore, createSlice } from '@reduxjs/toolkit';

export type TasksState = {
  entities: Task[];
};
const initialState: TasksState = { entities: [] };

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state) => state,
    removeTask: (state) => state,
  },
});
const store = configureStore({
  reducer: { tasks: tasksSlice.reducer },
});
export const tasksAction = tasksSlice.actions;
export default store;
