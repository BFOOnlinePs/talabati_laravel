<?php

namespace App\Http\Controllers\BFO;

use App\Http\Controllers\Controller;
use App\Models\BfoReelsModel;
use App\Models\BfoReelsViewsModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ReelViewsController extends Controller
{
    public function trackMultipleReelViews(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'reel_ids' => 'required|array',
            'reel_ids.*' => 'required|integer', // don't add: exists:bfo_reels,id, since the reel may be deleted
            'user_identifier' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => $validator->errors()->first()
            ], 403);
        }

        $reelIds = $request->input('reel_ids');
        $userIdentifier = $request->input('user_identifier');

        $responses = [];

        foreach ($reelIds as $reelId) {
            $reelExists = BfoReelsModel::where('id', $reelId)->exists();

            if (!$reelExists) {
                $responses[] = [
                    'reel_id' => $reelId,
                    'message' => 'Reel does not exist (may have been deleted), skipping...',
                ];
                continue;
            }

            $viewExists = BfoReelsViewsModel::where('reel_id', $reelId)
                ->where('user_identifier', $userIdentifier)
                ->exists();

            if (!$viewExists) {
                $newView = new BfoReelsViewsModel();
                $newView->reel_id = $reelId;
                $newView->user_identifier = $userIdentifier;
                $newView->save();

                $responses[] = [
                    'reel_id' => $reelId,
                    'message' => 'View recorded successfully',
                ];
            } else {
                $responses[] = [
                    'reel_id' => $reelId,
                    'message' => 'View already recorded',
                ];
            }
        }

        return response()->json([
            'status' => true,
            'data' => $responses
        ], 200);
    }

    // not used anymore
    public function trackReelView(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'reel_id' => 'required|integer|exists:bfo_reels,id',
            'user_identifier' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => $validator->errors()->first()
            ], 403);
        }

        $reelId = $request->input('reel_id');
        $userIdentifier = $request->input('user_identifier');

        // Check if a view already exists for this user and video
        $viewExists = BfoReelsViewsModel::where('reel_id', $reelId)
            ->where('user_identifier', $userIdentifier)
            ->exists();

        if (!$viewExists) {
            // Create a new view record if not exists
            $newView = new BfoReelsViewsModel();
            $newView->reel_id = $reelId;
            $newView->user_identifier = $userIdentifier;
            $newView->save();

            return response()->json(['success' => true, 'message' => 'View recorded successfully'], 200);
        }

        return response()->json(['success' => true, 'message' => 'View already recorded'], 200);
    }
}
