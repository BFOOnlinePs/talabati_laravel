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
    use FileManagerTrait;
    // i changed a field in database

    // public function store(Request $request)
    // {
    //     $validator = Validator::make($request->all(), [
    //         'reel_vid' => 'required',
    //         'product_id' => 'nullable',
    //         'store_id' => 'nullable',
    //     ]);

    //     if ($validator->fails()) {
    //         return response()->json([
    //             'status' => false,
    //             'message' => $validator->errors()->first()
    //         ], 403);
    //     }

    //     $reel = new BfoReelsModel();

    //     $reel->reel = $this->upload('reels/', 'mp4', $request->file('reel_vid'));
    //     $reel->product_id = request('product_id');
    //     $reel->store_id = request('store_id');

    //     if ($reel->save()) {
    //         return response()->json([
    //             'status' => true,
    //             'message' => translate('Reel Added Successfully')
    //         ], 200);
    //     } else {
    //         return response()->json([
    //             'status' => false,
    //             'message' => translate('Something went wrong')
    //         ], 403);
    //     }
    // }


    // public function list()
    // {
    //     $reels = BfoReelsModel::all();
    //     return response()->json([
    //         'status' => true,
    //         'reels' => $reels
    //     ]);
    // }


    public function getReelsWithItemIds()
    {
        $reels = BfoReelsModel::where('item_ids', '!=', null)->get();

        // show store name and logo
        $reels = $reels->map(function ($reel) {
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
            'reels' => $reels
        ]);
    }
}
