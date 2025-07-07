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
        Schema::create('personaje_episode', function (Blueprint $table) {
            $table->id();
             $table->foreignId('personaje_id')->constrained('personajes')->cascadeOnDelete();
        $table->foreignId('episode_id')->constrained('episodes')->cascadeOnDelete();
        $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('personaje_episode');
    }
};
