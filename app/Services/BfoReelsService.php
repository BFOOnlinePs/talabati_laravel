<?php


namespace App\Services;

use App\Models\BfoReelsViewsModel;
use Illuminate\Support\Facades\Cache;

class BfoReelsService
{
    public function getViewCount($reelId)
    {
        $viewCount = Cache::get('reel_view_count_' . $reelId);

        if (!$viewCount) {
            $viewCount = BfoReelsViewsModel::where('reel_id', $reelId)->count();
            Cache::put('reel_view_count_' . $reelId, $viewCount, 600); // cached for 600 sec = 10 min
        }

        return $viewCount;
    }
}
