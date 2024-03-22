<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class BoardJobController extends Controller
{
    
    public function store(Request $request) {

    	$job = Job::create([
    		"title" => $request->title,
    		"description" => $request->description,
    		"location" => $request->location,
    		"job_type" => $request->job_type,
    		"job_responsibilities" => $request->job_responsibilities,
    		"job_requirements" => $request->job_requirements,
    		"salary" => $request->salary
    	]);
    	
    	return response()->json([
    		"job" => $job
    	]);
    }

    
}
