<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use App\Models\Item;
use Illuminate\Http\Request;

class TodoController extends Controller
{

    public function index()
    {
        $todo = Todo::get();
        return response()->json($todo);
    }

    public function store(Request $request)
    {
        // return response()->json([$request->tittle]);

        // $todo = new Todo();
        // $todo->tittle = $request->tittle;
        // $todo->description = $request->description;
        // $todo->todo_id::Item->id;
        // $todo->save();
        // return response()->json($todo);

        $request->validate([
            'tittle' => 'required',
            'description' => 'required',
        ]);

        // $todo = Todo::create([
        //     'tittle' => $request->tittle,
        //     'description' => $request->description,
        // ]);
        // return response()->json($todo);

        // Insert data pada tabel todos
        $todo = new Todo;
        $todo->tittle = $request->tittle;
        $todo->description = $request->description;
        $todo->save();

        // //items
        // $item = new Item();
        // $item->todo_id =$todo->id;
        // $item->save();

        return response()->json(['message'=>'Todo Success']);
    }

    public function detailTodos($id)
    {
        $todo = Todo::with('items')->findOrFail($id);
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
        $todo = Todo::with('items')->findOrFail($id);
        $todo->delete();
        return response()->json(['message' => 'Todo deleted']);
    }
}
