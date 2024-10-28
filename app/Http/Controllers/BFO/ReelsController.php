<?php

namespace App\Http\Controllers\BFO;

use App\CentralLogics\Helpers;
use App\Http\Controllers\Controller;
use App\Models\BfoReelsModel;
use App\Models\Item;
use App\Models\Store;
use App\Traits\FileManagerTrait;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx\Rels;

class ReelsController extends Controller
{

    public function getReelsWithItemIds()
    {
        $reels = BfoReelsModel::where('item_ids', '!=', null)->orderBy('id', 'desc')->paginate(10);

        // show store name and logo
        $reels->getCollection()->transform(function ($reel) {
            // Fetch only the id, name, and logo of the store
            $reel->store = Store::where('id', $reel->store_id)
                ->select('id', 'name', 'logo') // Select only the necessary fields
                ->first()
                ->makeHidden(['gst_status', 'gst_code', 'cover_photo_full_url', 'meta_image_full_url', 'translations', 'storage']); // Hiding the appended attributes

            // get the items objects from the json filed
            $reel->items = json_decode($reel->item_ids, true);

            // get the item object - id, image, price
            $reel->items = Item::whereIn('id', $reel->items)
                ->select('id', 'image', 'price') // Select only the necessary fields
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
    public function getReelsThumbnails()
    {
        // get last 5 reels
        $reels = BfoReelsModel::orderBy('id', 'desc')->limit(5)->get();

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
