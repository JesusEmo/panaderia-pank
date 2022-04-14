<!DOCTYPE html>
<html lang="es">
<head>
    <!-- meta -->
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- css -->
    <link rel="stylesheet" href="/css/normalize.css">
    <link rel="stylesheet" href="/css/styles.css">
    <link rel="stylesheet" href="/css/boxes.css">
    <link rel="stylesheet" href="/css/grammar.css">
    <link rel="stylesheet" href="{{ mix('css/app.css') }}">
    

    <!-- Fuentes -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@700&display=swap" rel="stylesheet">

    <!-- titulo -->
    <link rel="shortcut icon" href="Img/favicon/lml.ico">
    <title>BPG - Soda Stereo</title>
</head>
<body>
    <main class="py10">
        <div class="container mx-auto px-4">
            @yield('content')
        </div>
    </main>
</body>
</html>