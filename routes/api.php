<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\LikeController;
use App\Http\Controllers\MesFavoriteController;
use App\Http\Controllers\QuoteController;
use App\Http\Controllers\TagController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

// Route::get('/user', function (Request $request) {
//     return 'Hello, World!';
// })->middleware('auth:sanctum');


Route::get('quotes', [QuoteController::class, 'index']);

Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    Route::post('/addLike/{id_quote}',[LikeController::class,'addLike']);
    Route::post('/deleteLike/{id_quote}',[LikeController::class,'deleteLike']);

    Route::post('/addMesFaovorite/{id}',[MesFavoriteController::class,'addMesFaovorite']);
    Route::post('/deleteMesFavorite/{id}',[MesFavoriteController::class,'deleteMesFavorite']);
    Route::post('/showMesFaorite',[MesFavoriteController::class,'showMesFaorite']);
        
    // Accès aux tags et catégories sans restriction de rôle
   
    
    Route::middleware('role:admin')->group(function () {
        Route::apiResource('categories', CategoryController::class)->except(['index']);
        Route::apiResource('tags', TagController::class)->except(['index']);
        Route::get('users',[UserController::class,'getUsers']);
        Route::get('statistiques',[UserController::class,'getStatistique']);
    });

    Route::middleware('role:user')->group(function(){
        Route::get('testUser',function(){
            return response()->json(['message'=>'testUser']);
        });
    });
    Route::post('logout',[UserController::class,'logout']);
    Route::apiResource('quotes', QuoteController::class)->except(['index']);
    
});


Route::get('tags', [TagController::class, 'index']);
Route::get('categories', [CategoryController::class, 'index']);

Route::post('/register',[UserController::class,'register']);
Route::post('/login',[UserController::class,'login']);

Route::get('/showQuote/{id}',[QuoteController::class,'showquote']);
Route::get('/randomQuote/{NombreQuotes}',[QuoteController::class,'randomQuote']);
Route::get('fliterQuotesNombreMot/{Nombre_max_mots}',[QuoteController::class,'fliterQuotesNombreMot']);
Route::get('getQuotesPlusPopulaire',[QuoteController::class,'getQuotesPlusPopulaire']);




// Route::get('/test',function(){
//     return 'hello world';
// });
