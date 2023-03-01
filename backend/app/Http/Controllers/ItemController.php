<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\App;


use App\Http\Controllers\Controller;
use App\Models\Item;
use Illuminate\Http\Request;

class ItemController extends Controller
{
    public function index()
    {
        $items = Item::with('todos')->get();
        // $items = Item::where('id', $todo)->get();
        return response()->json($items);
    }

    public function store(Request $request)
    {
        $items = new Item();
        $items->title = $request->title;
        $items->save();
        return response()->json($items);
        
    }

    public function detailItem($id)
    {
        $items = Item::find($id);
        return response()->json([
            'status' => 200,
            'items' => $items,
        ]);
            
        //  $items = Item::where('title', $todo)->get();
        //  return response()->json($items);

        // $items = Item::where('todos', 1)->get();
        // return response()->json($items);

        
    }

    public function update(Request $request, $id, $todo_id)
    {
        $items = Item::find($id);
        $todo = $items->todos()->find($todo_id);
        $todo->title = $request->title;
        $todo->description = $request->description;
        $items->save();
        return response()->json($items);
    }

    public function destroy($id)
    {
        $items = Item::find($id);
        $items->delete();
        return response()->json(['message' => 'items deleted']);
    }
}
