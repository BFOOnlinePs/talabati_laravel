<?php

namespace App\Http\Controllers\BFO;

use App\CentralLogics\Helpers;
use App\Http\Controllers\Controller;
use App\Models\BfoReelsModel;
use App\Traits\FileManagerTrait;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx\Rels;

class ReelsController extends Controller
{

    use FileManagerTrait;

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'reel_vid' => 'required',
            'product_id' => 'nullable',
            'store_id' => 'nullable',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'message' => $validator->errors()->first()
            ], 403);
        }

        $reel = new BfoReelsModel();

        $reel->reel = $this->upload('reels/', 'mp4', $request->file('reel_vid'));
        $reel->product_id = request('product_id');
        $reel->store_id = request('store_id');

        if ($reel->save()) {
            return response()->json([
                'status' => true,
                'message' => translate('Reel Added Successfully')
            ], 200);
        } else {
            return response()->json([
                'status' => false,
                'message' => translate('Something went wrong')
            ], 403);
        }
    }


    public function list()
    {
        $reels = BfoReelsModel::all();
        return response()->json([
            'status' => true,
            'reels' => $reels
        ]);
    }
}
