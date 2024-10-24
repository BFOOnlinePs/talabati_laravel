<?php

// namespace App\Http\Controllers\BFO;

// use App\Http\Controllers\Controller;
// use App\Models\BfoReelsModel;
// use App\Traits\FileManagerTrait;
// use Illuminate\Http\Request;
// use Illuminate\Support\Facades\Validator;

// // this functions used by Store App
// class StoreReelsController extends Controller
// {
//     use FileManagerTrait;

//     //addNewReel
//     public function store(Request $request)
//     {
//         // return 'hi';
//         $validator = Validator::make($request->all(), [
//             'reel_vid' => 'required',
//             'item_ids' => 'required',
//             // 'store_id' => 'required', // from middleware
//         ]);

//         if ($validator->fails()) {
//             return response()->json([
//                 'status' => false,
//                 'message' => $validator->errors()->first()
//             ], 403);
//         }

//         $reel = new BfoReelsModel();

//         $reel->reel = $this->upload('reels/', 'mp4', $request->file('reel_vid'));
//         $reel->item_ids = $request->input('item_ids');
//         $reel->store_id = $request['vendor']->stores[0]->id;

//         try {
//             if ($reel->save()) {
//                 return response()->json([
//                     'status' => true,
//                     'message' => translate('تم إضافة الريل بنجاح')
//                 ], 200);
//             } else {
//                 return response()->json([
//                     'status' => false,
//                     'message' => translate('حدث خطأ، يرجى المحاولة لاحقا')
//                 ], 403);
//             }
//         } catch (\Exception $e) {
//             return response()->json([
//                 'status' => false,
//                 'message' => $e->getMessage()
//             ], 500);
//         }
//     }
// }
