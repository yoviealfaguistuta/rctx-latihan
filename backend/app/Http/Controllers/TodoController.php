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
        $request->validate([
            'tittle' => 'required',
            'description' => 'required',
        ]);


        // Insert data pada tabel todos
        $todo = new Todo;
        $todo->tittle = $request->tittle;
        $todo->description = $request->description;
        $todo->save();

    

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

        $item = Item::where('todo_id', $id)->delete();
        
        $todo = Todo::where('id', $id)->findOrFail($id);
        $todo->items()->delete();
        $todo->delete();
        return response()->json(['message' => 'Todo deleted']);


        //  // Ambil data post berdasarkan id
        // $post = Post::findOrFail($id);

        // // Hapus relasi data pada tabel terkait (users)
        // $post->user()->delete();

        // // Hapus data pada tabel posts
        // $post->delete();

        // return redirect()->route('posts.index')
        //     ->with('success', 'Post has been deleted');

        $item = Item::findOrFail($id);
        $item->delete();
        return response()->json(['message' => 'Item deleted']);
    }
}
