<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('bfo_reels_views', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('reel_id'); // Make sure it matches the primary key type of 'reels'
            $table->string('user_identifier'); // generated ID
            $table->timestamps();

            // Define the foreign key constraint
            $table->foreign('reel_id')->references('id')->on('bfo_reels')->onDelete('cascade');

            // Unique constraint to ensure one view per user per video
            $table->unique(['reel_id', 'user_identifier']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
