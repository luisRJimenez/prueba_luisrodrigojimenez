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
        Schema::create('personajes', function (Blueprint $table) {
            $table->id();
            $table->string('name');
        $table->enum('status', ['Alive', 'Dead', 'unknown']);
        $table->string('species')->nullable();
        $table->string('type')->nullable();
        $table->enum('gender', ['Female', 'Male', 'Genderless', 'unknown']);
        $table->foreignId('origin_id')->nullable()->constrained('locations')->nullOnDelete();
        $table->foreignId('location_id')->nullable()->constrained('locations')->nullOnDelete();
        $table->string('image')->nullable();
        $table->string('url')->nullable();
        $table->timestamp('created_at_api')->nullable();
        $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('personajes');
    }
};
