<?php

namespace App\Http\Controllers;

use App\Models\Item;
use App\Models\Todo;
use Illuminate\Http\Request;

class ItemController extends Controller
{
    public function index()
    {
        $items = Item::with('todos')->get();
        return response()->json($items);
    }

    public function store(Request $request,$todo)
    {
        
        // $item = new Item();
        // $item->tittle = $request->tittle;
        // $item->todo_id::Todo->id;
        // $item->save();
        // return response()->json($item);

        // // $item = new Item;
        // // $item->tittle = $request->item_tittle;
        // // $item->description = $request->item_description;
        // // $item->todo_id = $todo->id;
        // // $item->save();

        $request->validate([
            'tittle' => 'required',
        ]);

        // $todo = Todo::create([
        //     'tittle' => $request->tittle,
        //     'description' => $request->description,
        // ]);
        // return response()->json($todo);

        // Insert data pada tabel todos
        $item = new Item();
        $item->tittle = $request->tittle;
        $item->todo_id =$todo;
        $item->save();

        // //items
        // $item = new Item();
        // $item->todo_id =$todo->id;
        // $item->save();

        return response()->json(['message'=>'Item Success']);
    }

    public function detailItems($id)
    {
        $item = Item::with('todos')->findOrFail($id);
        return response()->json($item);
    }

    public function update(Request $request, $id)
    {
        $item = Item::where('todo_id', $id)->firstOrFail();
        // $item = Item::find($id);
        $item->tittle = $request->tittle;
        $item->save();
        return response()->json($item);
    }

    public function destroy($id)
    {
        $item = Item::find($id);
        $item->delete();
        return response()->json(['message' => 'Item deleted']);
    }
}
