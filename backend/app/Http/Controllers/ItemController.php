<?php

namespace App\Http\Controllers;

use App\Models\Item;
use Illuminate\Http\Request;

class ItemController extends Controller
{
    public function index()
    {
        $items = Item::with('todos')->get();
        return response()->json($items);
    }
    
    public function store(Request $request,$todo_id)
    {
        $item = new Item();
        $item->tittle = $request->tittle;
        $item->todo_id = $todo_id;
        $item->save();
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
