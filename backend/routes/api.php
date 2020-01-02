<?php

Route::group(['middleware' => 'api'], function () {
    Route::prefix('auth')->group(function() {
        Route::post('login', 'AuthController@login');
        Route::post('logout', 'AuthController@logout');
        Route::post('refresh', 'AuthController@refresh');
        Route::post('me', 'AuthController@me');
    
        Route::post('register', 'AuthController@register');
    });
});



Route::get('/test', function() {
    return json_encode([
        "message" => "teste realizado com sucesso!"
    ]);
});
