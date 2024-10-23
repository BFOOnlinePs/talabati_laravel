<?php

namespace App\Http\Controllers\BFO;

use App\Http\Controllers\Controller;
use App\Models\Item;
use Illuminate\Http\Request;

class ItemsController extends Controller
{
    public function getVendorItems(Request $request)
    {
        return auth()->user()->id;
        return $request['vendor']->stores[0]->id;
        // $items = Item::where('store_id', $request->store_id)->get();
        $items = Item::where('store_id', $request['vendor']->stores[0]->id)->get();
        return response()->json($items, 200);
    }
}
