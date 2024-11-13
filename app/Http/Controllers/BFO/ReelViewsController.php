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
            'reel_ids.*' => 'required|integer', // |exists:bfo_reels,id it may deleted
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

        // Initialize an array to hold the results of each view check
        $responses = [];

        foreach ($reelIds as $reelId) {
            // Check if the reel exists
            $reelExists = BfoReelsModel::where('id', $reelId)->exists();

            if (!$reelExists) {
                // Skip this reel if it doesn't exist (deleted)
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
                // Create a new view record if it does not exist
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

        // Return a response containing the result of all views
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
