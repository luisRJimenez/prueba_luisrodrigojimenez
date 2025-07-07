<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


use App\Http\Controllers\Api\PersonajeApiController;

Route::get('/personajes', [PersonajeApiController::class, 'index']);
