<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BfoReelsViewsModel extends Model
{
    use HasFactory;

    protected $fillable = ['reel_id', 'user_identifier'];

    // Define the relationship to the Video model
    public function reel()
    {
        return $this->belongsTo(BfoReelsModel::class);
    }
}
