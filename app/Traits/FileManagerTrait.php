<?php

namespace App\Traits;

use Carbon\Carbon;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;

trait FileManagerTrait
{
    // this function edited by Aseel
    // it could be image or file or video
    // for local storage and idrive storage
    // to enable idrive storage i replaced all self::getDisk() with $disk ?? self::getDisk()
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

    // delete function by Aseel
    public static function deleteFile(string $dir, string $fileName, $disk = null): bool
    {
        Log::info("aseel , delete file");
        try {
            Log::info('aseel file path : ' . "{$dir}{$fileName}");

            // Check if the file exists in the directory
            if (Storage::disk($disk ?? self::getDisk())->exists("{$dir}{$fileName}")) {
                Log::info("aseel , file exists");
                // Delete the file
                Storage::disk($disk ?? self::getDisk())->delete("{$dir}{$fileName}");
                return true;
            }
            Log::info("aseel , file not exists");
            return false;
        } catch (\Exception $e) {
            // Handle any exceptions or log the error if needed
            Log::info("aseel file, {$e->getMessage()}");
            return false;
        }
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
