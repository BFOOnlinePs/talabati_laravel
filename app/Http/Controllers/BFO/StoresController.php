<?php

namespace App\Http\Controllers\BFO;

use App\Http\Controllers\Controller;
use App\Models\BfoReelsModel;
use App\Models\Item;
use App\Models\Store;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;

class StoresController extends Controller
{
    // used when the influencer choose the store to add reel to
    // with search
    public function getAllStores(Request $request)
    {
        $searchTerm = $request->input('search');

        $query = Store::where('status', 1)
            ->select('id', 'name', 'logo', 'module_id');

        if (!empty($searchTerm)) {
            $query->where('name', 'LIKE', '%' . $searchTerm . '%');
        }

        $stores = $query->get()
            ->makeHidden([
                'gst_status',
                'gst_code',
                'cover_photo_full_url',
                'meta_image_full_url',
                'translations',
                'storage'
            ]); // Hiding the appended attributes


        return response()->json([
            'status' => true,
            'stores' => $stores
        ], 200);
    }


    public function getStoreItems(Request $request)
    {
        // return 'hi';

        $validator = Validator::make($request->all(), [
            'store_id' => 'required|exists:stores,id',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'message' => $validator->errors()->first()
            ]);
        }

        Log::info('aseel , getStoreItems');

        // Check if reel_id is provided and retrieve selected item IDs if it exists (for edit)
        $selectedItemIds = [];
        if ($request->filled('reel_id')) {
            $reel = BfoReelsModel::find($request->reel_id);
            if ($reel) {
                $selectedItemIds = json_decode($reel->item_ids, true) ?: [];
            }
        }

        try {
            $query = Item::Approved() // approved by admin
                ->where('store_id', $request->input('store_id'))
                ->select('id', 'name', 'image');

            // Apply ordering based on selected items only if there are selected items
            if (!empty($selectedItemIds)) {
                $query->orderByRaw("FIELD(id, " . implode(',', $selectedItemIds) . ") DESC");
            }

            // Always order by latest as a fallback
            $query->latest();

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
