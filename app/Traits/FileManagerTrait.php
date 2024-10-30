<?php

namespace App\Traits;

use Carbon\Carbon;
use Illuminate\Support\Facades\Storage;

trait FileManagerTrait
{
    // this function edited by Aseel
    // it could be image or file or video
    // for local storage and idrive storage
    // to enable irdrive storage i replaced all self::getDisk() with $disk
    public static function upload(string $dir, string $format, $image = null, $disk = null): string
    {
        try {
            if ($image != null) {
                $imageName = Carbon::now()->toDateString() . "-" . uniqid() . "." . $format;
                if (!Storage::disk($disk ?? self::getDisk())->exists($dir)) {
                    Storage::disk($disk ?? self::getDisk())->makeDirectory($dir);
                }
                Storage::disk($disk ?? self::getDisk())->putFileAs($dir, $image, $imageName);
            } else {
                $imageName = 'def.png';
            }
        } catch (\Exception $e) {
        }

        return $imageName;
    }

    public static function updateAndUpload(string $dir, $old_image, string $format, $image = null): mixed
    {
        //        dd(self::getDisk());
        if ($image == null) {
            return $old_image;
        }
        try {
            if (Storage::disk(self::getDisk())->exists($dir . $old_image)) {
                Storage::disk(self::getDisk())->delete($dir . $old_image);
            }
        } catch (\Exception $e) {
        }
        return self::upload($dir, $format, $image);
    }

    public static function getDisk(): string
    {
        $config = \App\CentralLogics\Helpers::get_business_settings('local_storage');

        return isset($config) ? ($config == 0 ? 's3' : 'public') : 'public';
    }
}
