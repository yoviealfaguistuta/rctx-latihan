<?php
use App\Http\Controllers\TodoController;
use App\Http\Controllers\ItemController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// TODO ROUTE
Route::get('/todos',[TodoController::class, 'index']);
Route::post('/tambah-todos', [TodoController::class, 'store']);
Route::get('/detail-todos/{id}', [TodoController::class, 'detailTodos']);
Route::post('/update-todos/{id}', [TodoController::class, 'update']);
Route::delete('/hapus-todos/{id}', [TodoController::class, 'destroy']);


// ITEM ROUTE
Route::get('/items/{todo_id}',[ItemController::class, 'index']);
Route::post('/tambah-items/{todoId}', [ItemController::class, 'store']);
Route::get('/detail-items/{id}', [ItemController::class, 'detailItems']);
Route::post('/update-items/{id}', [ItemController::class, 'update']);
Route::delete('/hapus-items/{id}', [ItemController::class, 'destroy']);


