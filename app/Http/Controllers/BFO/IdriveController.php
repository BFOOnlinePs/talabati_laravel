<?php

namespace App\Http\Controllers\BFO;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class IdriveController extends Controller
{
    public function upload()
    {
        $file = Storage::disk('idrive')->put('file2.txt', 'Hello, IDrive!');

        return $file;
    }

    public function uploadVideo(Request $request)
    {
        return 'hi';
        $video = $request->file('video');
        $fileName = $video->getClientOriginalName();
        $file = Storage::disk('idrive')->putFileAs('/', $video, $fileName);

        return $file;
    }
}
