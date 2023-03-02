<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Http\Request;

class TodoController extends Controller
{
    public function index()
    {
        $todo = Todo::get();
        return response()->json($todo);
    }
    
    public function store(Request $request, $todo_id)
    {
        $todo = new Todo();
        $todo->tittle = $request->tittle;
        $todo->description = $request->description;
        $todo->todo_id = $todo_id;
        $todo->save();
        return response()->json($todo);
    }

    public function update(Request $request, $id)
    {
        $todo = Todo::findOrFail($id);
        // $todo = Todo::find($id);
        $todo->tittle = $request->tittle;
        $todo->description = $request->description;
        $todo->save();
        return response()->json($todo);
    }

    public function destroy($id)
    {
    }
}
