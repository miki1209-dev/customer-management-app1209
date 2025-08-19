import { api } from "./clients";

/**
 * タスク一覧を取得（GET /api/tasks）
 */
export const getTask = () => {
  return api.get('/tasks');
}

/**
 * タスクを新規作成（POST /api/tasks）
 */
export const createTask = (data) => {
  return api.post('/tasks', data);
}

/**
 * タスクを更新（PUT /api/tasks/:id）
 */
export const updateTask = (id, data) => {
  return api.put(`/tasks/${id}`, data);
}

/**
 * タスクを削除（DELETE /api/tasks/:id）
 */
export const deleteTask = (id) => {
  return api.delete(`/tasks/${id}`);
}