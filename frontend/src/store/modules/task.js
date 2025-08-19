import { createTask, getTask, updateTask } from "../../api/tasks";

export default {
  namespaced: true,

  state: () => ({
    tasks: [],
  }),

  getters: {
    allTasks: (state) => {
      return state.tasks;
    }
  },

  mutations: {
    SET_TASKS(state, tasks) {
      state.tasks = tasks;
    },
    ADD_TASKS(state, task) {
      state.tasks.push(task);
    },
    UPDATE_TASK(state, updatedTask) {
      const index = state.tasks.findIndex(task => task.id === updatedTask.id);
      if (index !== -1) {
        return state.tasks.splice(index, 1, updatedTask);
      }
    },
    DELETE_TASK(state, taskId) {
      state.tasks = state.tasks.filter(task => task.id !== taskId);
    },
  },

  actions: {
    async fetchTasks( {commit} ) {
      const res = await getTask();
      commit('SET_TASKS', res.data);
    },
    async createTask( {commit}, data ) {
      const res = await createTask(data);
      commit('ADD_TASKS', res.data);
    },
    async updateTask( {commit}, payload ) {
      const res = await updateTask(payload.id, payload.data);
      commit('UPDATE_TASK', res.data);
    },
    async deleteTask( {commit}, id ) {
      const res = await deleteTask(id);
      commit('DELETE_TASK', res.data);
    },
  },
}