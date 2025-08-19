<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Task;
use App\Services\TaskService;
use App\Http\Requests\StoreTaskRequest;
use App\Http\Requests\UpdateTaskRequest;
use App\Http\Resources\TaskResource;

class TaskController extends Controller
{
	public function index(TaskService $taskService)
	{
		$tasks = $taskService->getAllTasks();
		return response()->json(TaskResource::collection($tasks));
	}

	public function show(Task $task)
	{
		return (new TaskResource($task))->response()->setStatusCode(200);
	}

	public function store(StoreTaskRequest $request, TaskService $taskService)
	{
		$data = $request->validated();
		$task = $taskService->createTask($data);

		if (!$task) {
			return response()->json(['message' => 'タスクの作成中にエラーが発生しました'], 500);
		}
		return (new TaskResource($task))->response()->setStatusCode(201);
	}

	public function update(UpdateTaskRequest $request, Task $task, TaskService $taskService)
	{
		$data = $request->validated();

		$updatedTask = $taskService->updateTask($data, $task);

		if (!$updatedTask) {
			return response()->json(['message' => 'タスクの更新に失敗しました'], 500);
		}

		return (new TaskResource($updatedTask))->response()->setStatusCode(200);
	}


	public function destroy(Task $task, TaskService $taskService)
	{
		$deletedTask = $taskService->deleteTask($task);

		if (!$deletedTask) {
			return response()->json(['message' => 'タスクの削除に失敗しました'], 500);
		}

		return response()->json(['message' => 'タスクを削除しました'], 200);
	}
}
