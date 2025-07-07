<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Personaje; 

class PersonajeApiController extends Controller
{
    

    public function index(Request $request)
    {
        $query = $request->input('search');

        $characters = Personaje::when($query, function ($q) use ($query) {
            $q->where('name', 'LIKE', '%' . $query . '%');
        })->orderBy('name')->paginate(10);

        return response()->json($characters);
    }

}
