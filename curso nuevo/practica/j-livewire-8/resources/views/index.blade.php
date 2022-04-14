@extends('layouts.web')
@section('content')
<header class="header">
    <div class="nav">
        <div class="title"> 
            TBPG
        </div>
        <ul class="p10 text-white">
            <li class="nav-item">Premium</li>
            <li class="nav-item">Ayuda</li>   
            <li class="nav-item">Descargar</li>    
            <li class="nav-item">Regístrate</li>
            <li class="nav-item">Iniciar sesión</li>   
        </ul> 
    </div>
</header>

<section>
    <div class="master-box-band">
        <div class="box-band border-radius-6">
                <a href="/artist/sodastereo">
                <figure class="bandimg-box-band">
                    <img src="./Img/bandas/sodastereo.jpg" alt="soda stereo" class="border-radius-6 img-box-band">
                    <img src="./Img/watermark/watermark.png" alt="TBPG logo" class="watermark">
                </figure>
                <h4 class="title-box-band">Soda stereo</h4>
                <span class="ellipsis description-box-band text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nostrum, asperiores temporibus odio id consectetur enim amet cupiditate, nisi, quidem quos earum blanditiis fuga ducimus itaque porro beatae laborum assumenda!
                </span>
            </a>
            </div>

        <div class="box-band border-radius-6">
            
            <div class="bandimg-box-band">
                <img src="./Img/bandas/opeth.png" alt="opeth" class="border-radius-6 img-box-band">
                <img src="./Img/watermark/watermark.png" alt="TBPG logo" class="watermark">
            </div>
            <h4 class="title-box-band">Opeth</h4>
            <span class="ellipsis description-box-band text-white">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est cumque obcaecati dignissimos sequi iusto repellat animi iste, magnam fugit quia, facilis officia atque distinctio dolorum maxime veniam. Quos, sint velit.
            </span> 
        </div>

        <div class="box-band border-radius-6">
            
            <div class="bandimg-box-band">
                <img src="./Img/bandas/death.jpg" alt="death" class="border-radius-6 img-box-band">
                <img src="./Img/watermark/watermark.png" alt="TBPG logo" class="watermark">
            </div>
            <h4 class="title-box-band">Death</h4>
            <span class="ellipsis description-box-band text-white">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam ad quod odio. Culpa itaque velit incidunt dolorem hic expedita suscipit? Voluptatem, possimus eum. Dolore, totam rem aut quis nisi cupiditate?
            </span>
        </div>

    </div>

</section>
@endsection