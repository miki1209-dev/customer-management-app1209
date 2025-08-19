<?php

namespace App\Services;

use App\Models\Task;
use Illuminate\Http\Request;
use Illuminate\Database\QueryException;
use Exception;
use Illuminate\Support\Facades\Log;

class TaskService
{
	public function  getAllTasks()
	{
		return Task::all();
	}

	public function createTask(array $data)
	{
		try {
			$task = new Task;
			$task->title = $data['title'];
			$task->description = $data['description'];
			$task->status = $data['status'];
			$task->due_date = $data['due_date'];
			$task->save();

			return $task;
		} catch (QueryException $e) {
			Log::error('Database Error: ' . $e->getMessage());
			return null;
		} catch (Exception $e) {
			Log::error('General Error: ' . $e->getMessage());
			return null;
		}
	}

	public function updateTask(array $data, Task $task): ?Task
	{
		try {
			$task->update($data);
			return $task;
		} catch (QueryException $e) {
			Log::error('Database Error: ' . $e->getMessage());
			return null;
		} catch (Exception $e) {
			Log::error('General Error: ' . $e->getMessage());
			return null;
		}
	}

	public function deleteTask(Task $task)
	{
		try {
			return $task->delete();
		} catch (QueryException $e) {
			Log::error('Database Error: ' . $e->getMessage());
			return null;
		} catch (Exception $e) {
			Log::error('General Error: ' . $e->getMessage());
			return null;
		}
	}
}
