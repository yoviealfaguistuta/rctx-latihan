<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Todo extends Model
{

    protected $table = 'todos';
    protected $fillable = [
        'title',
        'description',
    ];

    // public function items(){
    //     return $this->hasMany(Item::class);
    // }
    use HasFactory;
}
