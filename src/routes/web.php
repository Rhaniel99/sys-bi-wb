<?php

use App\Http\Controllers\AuthController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return inertia('Home');
});


Route::get('/users', function () {
    return inertia('Users/UserComponent');
});

Route::get('/login',[AuthController::class, 'index']);
Route::post('/login',[AuthController::class, 'store']);


// Route::midleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

