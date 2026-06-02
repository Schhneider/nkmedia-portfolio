<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');
Route::get('/projects', function () {
    return Inertia::render('projects');
})->name('projects');
Route::get('/projects/{project}', function (string $project) {
    $projects = [
        'automotive' => ['title' => 'Automotive',  'path' => 'images/automotive'],
        'commercials' => ['title' => 'Commercials', 'path' => 'images/commercials'],
        'weddings' => ['title' => 'Weddings',    'path' => 'images/weddings'],
    ];

    if (! isset($projects[$project])) {
        return redirect()->route('home');
    }

    $path = public_path($projects[$project]['path']);

    $files = collect(File::files($path));
    
    $images = $files
        ->filter(fn ($file) =>
            in_array(strtolower($file->getExtension()), ['jpg', 'jpeg', 'png', 'webp'])
        )
        ->map(fn ($file) => $projects[$project]['path'] . '/' . $file->getFilename())
        ->values();

    $videos = $files
        ->filter(fn ($file) =>
            in_array(strtolower($file->getExtension()), ['mp4', 'webm', 'mov'])
        )
        ->map(fn ($file) => $projects[$project]['path'] . '/' . $file->getFilename())
        ->values();

    return Inertia::render('projectItems', [
        'title' => $projects[$project]['title'],
        'images' => $images,
        'videos' => $videos,
    ]);
})->name('projectItems');