<?php

namespace App\Http\Controllers\BFO;

use App\Http\Controllers\Controller;
use App\Models\Store;
use Illuminate\Http\Request;

class StoresController extends Controller
{
    // used when the influencer choose the store to add reel to
    // with search
    public function getAllStores(Request $request)
    {
        $searchTerm = $request->input('search');

        $query = Store::where('status', 1)
            ->select('id', 'name', 'module_id');

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
}
