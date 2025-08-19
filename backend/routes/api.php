<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\TaskController;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
	return $request->user();
});

Route::controller(TaskController::class)->group(function () {
	Route::get('tasks', 'index')->name('api.tasks.index');
	Route::post('tasks', 'store')->name('api.tasks.store');
	Route::get('tasks/{task}', 'show')->name('api.tasks.show');
	Route::put('tasks/{task}', 'update')->name('api.tasks.update');
	Route::delete('tasks/{task}', 'destroy')->name('api.tasks.destroy');
});
