<?php

namespace App\Http\Controllers\Api\V1\Vendor;

use App\Http\Controllers\Controller;
use App\Models\BfoReelsModel;
use App\Models\Item;
use App\Models\Store;
use App\Traits\FileManagerTrait;
use Illuminate\Http\Request;
use App\Services\BfoReelsService;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

// this Controller added by Aseel
class BFOController extends Controller
{
    use FileManagerTrait;

    public function __construct(
        protected BfoReelsService $bfoReelsService
    ) {}

    // this function added by Aseel
    public function add_reel(Request $request)
    {
        Log::info('aseel , start');

        $validator = Validator::make($request->all(), [
            'reel_vid' => 'required',
            'thumbnail' => 'required',
            'item_ids' => 'required',
            // 'store_id' => 'required', // from middleware
        ], [
            'reel_vid.required' => 'يرجى تحميل الريل',
            'thumbnail.required' => 'يرجى تحميل الصورة المصغرة',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'message' => $validator->errors()->first()
            ], 403);
        }

        $reel = new BfoReelsModel();
        // log to laravel.log file
        Log::info('aseel , before reel');

        $reel->reel = $this->upload('reels/', 'mp4', $request->file('reel_vid'), 'idrive'); // if you don't want to store in idrive, then remove it

        Log::info('aseel , after reel and before thumbnail');

        $reel->thumbnail = $this->upload('reels/thumbnails/', 'png', $request->file('thumbnail'), 'idrive'); // if you don't want to store in idrive, then remove it
        Log::info('aseel , after thumbnail');

        $reel->item_ids = $request->input('item_ids');
        $reel->store_id = $request['vendor']->stores[0]->id;

        try {
            Log::info('aseel , try');

            if ($reel->save()) {
                Log::info('aseel , save');

                return response()->json([
                    'status' => true,
                    'message' => translate('تم إضافة الريل بنجاح')
                ], 200);
                Log::info('aseel , save done');
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

    // for edit the items
    public function edit_reel(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'reel_id' => 'required',
            'item_ids' => 'required',
        ],);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'message' => $validator->errors()->first()
            ], 403);
        }

        $reel = BfoReelsModel::where('id', $request->reel_id)->first();
        $reel->item_ids = $request->input('item_ids');

        try {
            Log::info('aseel , try');

            if ($reel->save()) {
                Log::info('aseel , save');

                return response()->json([
                    'status' => true,
                    'message' => translate('تم تعديل الريل بنجاح')
                ], 200);
                Log::info('aseel , save done');
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

    public function delete_reel($id)
    {
        $reel = BfoReelsModel::find($id);
        if (!$reel) {
            return response()->json([
                'status' => false,
                'message' => 'الريل غير موجود'
            ]);
        }

        // if (
        $this->deleteFile('reels/thumbnails/', $reel->thumbnail, 'idrive');
        // &&
        $this->deleteFile('reels/', $reel->reel, 'idrive');
        // ) {
        $reel->delete();

        return response()->json([
            'status' => true,
            'message' => 'تم حذف الريل بنجاح'
        ]);
        // } else {
        //     return response()->json([
        //         'status' => false,
        //         'message' => 'حدث خطأ، يرجى المحاولة لاحقا'
        //     ]);
        // }
    }

    // this function added by Aseel
    public function bfo_get_vendor_items(Request $request)
    {
        // Check if reel_id is provided and retrieve selected item IDs if it exists
        $selectedItemIds = [];
        if ($request->filled('reel_id')) {
            $reel = BfoReelsModel::find($request->reel_id);
            if ($reel) {
                $selectedItemIds = json_decode($reel->item_ids, true) ?: [];
            }
        }

        try {
            $query = Item::Approved() // approved by admin
                ->where('store_id', $request['vendor']->stores[0]->id)
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

    public function get_vendor_reels(Request $request)
    {
        $store_id = $request['vendor']->stores[0]->id;
        $reels = BfoReelsModel::where('store_id', $store_id)
            ->orderBy('id', 'desc')
            // ->paginate(12);
            ->get();

        $reels->transform(function ($reel) use ($store_id)  {
            $reel->view_count = $this->bfoReelsService->getViewCount($reel->id);

            // Fetch only the id, name, and logo of the store
            $reel->store = Store::where('id', $store_id )
                ->select('id', 'name', 'logo')
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
            // 'pagination' => [
            //     'total_pages' => $reels->lastPage(),
            //     'current_page' => $reels->currentPage(),
            //     'total_count' => $reels->total(),
            //     'per_page' => $reels->perPage(),
            // ],
            // 'reels' => $reels->values()
            'reels' => $reels
        ]);
    }


    // idrive s2

    public function idrive_upload()
    {
        $file = Storage::disk('idrive')->put('file3.txt', 'Hello, IDrive!');

        return $file;
    }

    public function upload_video(Request $request)
    {
        $video = $request->file('video');
        $fileName = $video->getClientOriginalName();

        $file = Storage::disk('idrive')->putFileAs('/', $video, $fileName);

        $publicURL = 'talabati-bucket.a2l8.ch.idrivee2-18.com';

        $fileGet = Storage::disk('idrive')->get($fileName);

        return $fileGet;
    }
}
