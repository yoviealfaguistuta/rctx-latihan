<?php

namespace App\Http\Controllers;

use App\Models\Item;
use App\Models\Todo;
use Illuminate\Http\Request;

class ItemController extends Controller
{
    public function index($id)
    {
        $items = Item::where('todo_id', $id)->get();
        return response()->json($items);
    }

    public function store(Request $request,$todo)
    {


        $request->validate([
            'tittle' => 'required',
        ]);

     

        // Insert data pada tabel todos
        $item = new Item();
        $item->tittle = $request->tittle;
        $item->todo_id =$todo;
        $item->save();


        return response()->json(['message'=>'Item Success']);
    }

    public function detailItems($id)
    {
        $item = Item::with('todos')->findOrFail($id);
        return response()->json($item);
    }

    public function update(Request $request, $id)
    {
        $item = Item::findOrFail($id);
        // $todo = Todo::find($id);
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
