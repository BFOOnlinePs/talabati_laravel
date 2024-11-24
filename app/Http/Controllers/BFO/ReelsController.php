<?php

namespace App\Http\Controllers\BFO;

use App\Http\Controllers\Controller;
use App\Models\BfoReelsModel;
use App\Models\Item;
use App\Models\Store;
use App\Services\BfoReelsService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class ReelsController extends Controller
{
    public function __construct(
        protected BfoReelsService $bfoReelsService
    ) {}

    public function getReelsWithItemIds(Request $request)
    {
        $reels = BfoReelsModel::whereNotNull('item_ids');

        if ($request->hasHeader('zoneId')) {
            Log::info('aseel request has zoneId header');
            $reels->whereHas('store', function ($query) use ($request) {
                $query->where('zone_id', $request->header('zoneId'));
            });
        } else {
            Log::info('aseel request has no zoneId header');
        }

        if ($request->has('store_id')) {
            $reels->where('store_id', $request->store_id);
        }

        if ($request->has('module_id')) {
            $reels->whereHas('store', function ($query) use ($request) {
                $query->where('module_id', $request->query('module_id'));
            });
        }

        $reels = $reels->orderBy('id', 'desc')->paginate(15);

        $reels->getCollection()->transform(function ($reel) {
            $reel->view_count = $this->bfoReelsService->getViewCount($reel->id);

            $reel->store = Store::where('id', $reel->store_id)
                ->select('id', 'name', 'logo', 'module_id')
                ->first()
                ->makeHidden(['gst_status', 'gst_code', 'cover_photo_full_url', 'meta_image_full_url', 'translations', 'storage']); // Hiding the appended attributes

            $reel->items = json_decode($reel->item_ids, true);

            $reel->items = Item::whereIn('id', $reel->items)
                ->select('id', 'image', 'price')
                ->get()
                ->makeHidden(['unit_type', 'images_full_url', 'unit', 'translations', 'storage']); // Hiding the appended attributes

            return $reel;
        });


        return response()->json([
            'status' => true,
            'pagination' => [
                'total_pages' => $reels->lastPage(),
                'current_page' => $reels->currentPage(),
                'total_count' => $reels->total(),
                'per_page' => $reels->perPage(),
            ],
            'reels' => $reels->items()
        ]);
    }

    // last 5 reels thumbnails
    public function getReelsThumbnails(Request $request)
    {
        $reels = BfoReelsModel::whereNotNull('item_ids');

        if ($request->hasHeader('zoneId')) {
            Log::info('aseel request has zoneId header');
            $reels->whereHas('store', function ($query) use ($request) {
                $query->where('zone_id', $request->header('zoneId'));
            });
        } else {
            Log::info('aseel request has no zoneId header');
        }

        if ($request->has('store_id')) {
            $reels->where('store_id', $request->store_id);
        }

        if ($request->has('module_id')) {
            $reels->whereHas('store', function ($query) use ($request) {
                $query->where('module_id', $request->query('module_id'));
            });
        }


        // get last 5 reels
        $reels = $reels->orderBy('id', 'desc')->limit(5)->get();

        $reels = $reels->map(function ($reel) {
            // Fetch only the id, name, and logo of the store
            $reel->store = Store::where('id', $reel->store_id)
                ->select('id', 'name', 'logo') // Select only the necessary fields
                ->first()
                ->makeHidden(['gst_status', 'gst_code', 'cover_photo_full_url', 'meta_image_full_url', 'translations', 'storage']); // Hiding the appended attributes

            return $reel;
        });

        return response()->json([
            'status' => true,
            'reels' => $reels
        ]);
    }
}
