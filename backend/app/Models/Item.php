<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Item extends Model
{

    protected $table = 'items';

    protected $fillable = [
        'tittle',
        'todo_id'
    ];

    public function todos(){
        return $this->belongsTo(Todo::class, 'todo_id');
    }

    use HasFactory;
}
