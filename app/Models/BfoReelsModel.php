<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BfoReelsModel extends Model
{
    use HasFactory;

    protected $table = 'bfo_reels';
    protected $fillable =
    [
        'reel',
        'item_ids',
        'store_id',
        'thumbnail',
        'influencer_id',
        'status',
    ];


    public function store()
    {
        return $this->belongsTo(Store::class, 'store_id');
    }

    public function views()
    {
        return $this->hasMany(BfoReelsViewsModel::class);
    }
}
