<<!DOCTYPE html>
<html>
<head>
	<title>
		@yield('title', 'Mily Craft Eco. Inc.')
	</title>
	@yield('styles')
	<link rel="stylesheet" href="{{ elixir("css/all.css") }}">
</head>
<body>
<div>
	@yield('content')
</div>
<div>
<script src="{{ elixir("js/app.js") }}"></script>
	@yield('scripts')
</div>
</body>
</html>