@extends('backend.layout')

@section('styles')

@endsection

@section('content')
<div class="container">
	@include('backend.product.dash')
	@include('backend.user.dash')
</div>
@endsection

@section('scripts')

@endsection