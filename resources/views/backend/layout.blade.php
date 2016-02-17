<!DOCTYPE html>
<html>
<head>
	<title>
		@yield('title', 'Mily Craft Eco. Inc.')
	</title>
	@yield('styles')
	<link rel="stylesheet" href="{{ elixir('css/all.css') }}">
</head>
<body>
	<div id="wrapper">
		@include('backend.partials.nav')
		<div id="page-wrapper">
            <div class="container-fluid">
            	<!-- Page Heading -->
                <div class="row">
                    @yield('content')
                </div>
                <!-- /.row -->            				
			</div>
        </div>		
	</div>
	<script src="{{ elixir('js/all.js') }}"></script>
	@yield('scripts')
</body>
</html>