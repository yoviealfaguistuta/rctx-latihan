<?php

namespace App\Http\Controllers;


use App\Models\Todo;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;


class TodoController extends Controller
{
    public function index()
    {
        $todos = Todo::all();
        // $todos = Todo::with('items')->find($id);
        return response()->json($todos);

    }

    public function store(Request $request)
    {
        $todo = new Todo();
        $todo->title = $request->title;
        $todo->description = $request->description;
        $todo->save();
        return response()->json($todo);
        
    }

    public function detailTodo($id)
    {
        $todo = Todo::find($id);
        return response()->json([
            'status' => 200,
            'todo' => $todo,
        ]);
    }

    public function update(Request $request, $id, $todo_id)
    {
        $todo = Todo::find($id);
        $todo->title = $request->title;
        $todo->description = $request->description;
        $todo->save();
        return response()->json($todo);
    }

    public function destroy($id)
    {
        $todo = Todo::find($id);
        $todo->delete();
        return response()->json(['message' => 'Todo deleted']);
    }
}
