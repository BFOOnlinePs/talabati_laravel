<?php

namespace App\Http\Controllers\Api\V1\Vendor;

use App\Http\Controllers\Controller;
use App\Models\BfoReelsModel;
use App\Models\Item;
use App\Traits\FileManagerTrait;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

// this Controller added by Aseel
class BFOController extends Controller
{
    use FileManagerTrait;

    // this function added by Aseel
    public function add_reel(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'reel_vid' => 'required',
            'item_ids' => 'required',
            // 'store_id' => 'required', // from middleware
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'message' => $validator->errors()->first()
            ], 403);
        }



        $reel = new BfoReelsModel();

        $reel->reel = $this->upload('reels/', 'mp4', $request->file('reel_vid'));
        $reel->item_ids = $request->input('item_ids');
        $reel->store_id = $request['vendor']->stores[0]->id;

        try {
            if ($reel->save()) {
                return response()->json([
                    'status' => true,
                    'message' => translate('تم إضافة الريل بنجاح')
                ], 200);
            } else {
                return response()->json([
                    'status' => false,
                    'message' => translate('حدث خطأ، يرجى المحاولة لاحقا')
                ], 403);
            }
        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'message' => $e->getMessage()
            ], 500);
        }
    }


    // this function added by Aseel
    public function bfo_get_vendor_items(Request $request)
    {
        try {

            $items = Item::Approved() // approved by admin
                ->where('store_id', $request['vendor']->stores[0]->id)
                ->latest()
                ->select('id', 'name', 'image')
                ->get()
                ->makeHidden(['unit_type', 'unit', 'images_full_url', 'gst_status', 'gst_code', 'cover_photo_full_url', 'meta_image_full_url', 'translations', 'storage']); // Hiding the appended attributes

            return response()->json([
                'status' => true,
                'items' => $items
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'message' => $e->getMessage()
            ], 500);
        }
    }
}
