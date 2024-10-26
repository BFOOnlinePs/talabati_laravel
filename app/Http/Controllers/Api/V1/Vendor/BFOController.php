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
            'thumbnail' => 'required',
            'item_ids' => 'nullable',
            // 'store_id' => 'required', // from middleware
        ], [
            'reel_vid.required' => 'يرجى تحميل الريل',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'message' => $validator->errors()->first()
            ], 403);
        }



        $reel = new BfoReelsModel();

        $reel->reel = $this->upload('reels/', 'mp4', $request->file('reel_vid'));
        $reel->thumbnail = $this->upload('reels/thumbnails/', 'png', $request->file('thumbnail'));
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
            $query = Item::Approved() // approved by admin
                ->where('store_id', $request['vendor']->stores[0]->id)
                ->latest()
                ->select('id', 'name', 'image');

            if ($request->filled('search')) {
                $searchTerm = $request->search;
                $query->where('name', 'LIKE', '%' . $searchTerm . '%');
            }

            // Paginate the filtered results
            $items = $query->paginate(10);

            // Hide the appended attributes after pagination
            $items->makeHidden(['unit_type', 'unit', 'images_full_url', 'gst_status', 'gst_code', 'cover_photo_full_url', 'meta_image_full_url', 'translations', 'storage']);

            return response()->json([
                'status' => true,
                'pagination' => [
                    'total_pages' => $items->lastPage(),
                    'current_page' => $items->currentPage(),
                    'total_count' => $items->total(),
                    'per_page' => $items->perPage(),
                ],
                'items' => $items->items()
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'message' => $e->getMessage()
            ], 500);
        }
    }
}
