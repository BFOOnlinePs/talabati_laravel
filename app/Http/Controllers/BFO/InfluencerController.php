<?php

namespace App\Http\Controllers\BFO;

use App\Http\Controllers\Controller;
use App\Models\BfoReelsModel;
use App\Models\User;
// use App\Services\BfoReelsService;
use App\Traits\FileManagerTrait;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;

class InfluencerController extends Controller
{
    use FileManagerTrait;

    // public function __construct(
    //     protected BfoReelsService $bfoReelsService
    // ) {}

    public function getInfluencers()
    {
        $influencers = User::where('bfo_is_influencer', 1)
            ->select('id', 'bfo_display_name', 'image')
            ->get()
            ->makeHidden(['storage']);

        return response()->json([
            'success' => true,
            'influencers' => $influencers
        ], 200);
    }

    public function influencerRequest(Request $request)
    {
        $validator = Validator::make(request()->all(), [
            'user_id' => 'required|exists:users,id',
            'display_name' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => $validator->errors()->first()
            ], 403);
        }

        // logged in user id
        // $user_id = auth()->user();
        // return $user_id;

        // update the user name
        $user = User::find($request->input('user_id'));
        // $user = User::find($user_id);
        $user->bfo_is_influencer = 0; // new request
        $user->bfo_display_name = $request->input('display_name');

        if ($user->save()) {
            return response()->json([
                'success' => true,
                'message' => 'تم إرسال الطلب بنجاح'
            ], 200);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'حدث خطأ ما'
            ], 403);
        }
    }

    public function addReel(Request $request)
    {
        Log::info('aseel add reel by influencer , start');

        $validator = Validator::make($request->all(), [
            'reel_vid' => 'required',
            'thumbnail' => 'required',
            'item_ids' => 'required',
            'store_id' => 'required|exists:stores,id',
            'influencer_id' => 'required|exists:users,id',
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

        $influencer_id = $request->input('influencer_id');
        $user = User::find($influencer_id);

        if ($user->bfo_is_influencer  != 1) { // not accepted
            return response()->json([
                'status' => false,
                'message' => 'يجب أن تكون مؤثر حتى تستطيع رفع ريل'
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
        $reel->store_id = $request->input('store_id');
        $reel->influencer_id = $influencer_id;
        $reel->status = 0;

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
}
