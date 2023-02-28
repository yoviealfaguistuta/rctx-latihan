<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Http\Request;

class TodoController extends Controller
{
    public function index()
    {
        $todos = Todo::get();
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

    public function update(Request $request, $id)
    {
        $todo = Todo::find($id);
        $todo->title = $request->title;
        $todo->description = $request->description;
        $todo->completed = $request->completed;
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
