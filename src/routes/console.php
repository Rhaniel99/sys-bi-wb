<?php

use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;

Artisan::command('inspire', function () {
    $this->comment(Inspiring::quote());
})->purpose('Display an inspiring quote');

// Register the command
Artisan::command('db:test', function () {
    $database = new PDO('pgsql:host=localhost;dbname=sysbi', 'postgres', 'postgres');
    $result = $database->query('SELECT 1');

    if ($result) {
        $this->info('Connection to database successful');
    } else {
        $this->error('Connection to database failed');
    }
})->purpose('Test the database connection');
