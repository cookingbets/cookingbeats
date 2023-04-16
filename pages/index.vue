<template>
  <div>
    <section id="hero">
    <!-- Header -->
        <div class="container">
            <div class="row">
                <div class="col-sm-6">
                    <p class="kicker">Tu música, tu comunidad</p>
                    <h1 class="jumbo">Cooking <br>Beats</h1>

                    <p>Adquiere audio para tus trabajos de forma simple y segura.</p>
                </div>
                
                <div class="col-sm-6">
                    <img src="../static/hero-landing-page.png" class="hero-img" alt="">
                </div>
            </div>
        </div>
    </section>
  </div>
</template>
<script>


export default {
  name: "index",
  components: {
  },
  data() {
    return {
      instrumental: null,
      album: null,
    };
  },
  mounted() {
    
  },
};
</script>
<style>
#hero{
    padding:0 0 12rem 0;
    margin-top: 8.5vh;
}
#hero .hero-img{
    max-width:550px;
    margin:0 auto;
    display:block;
    position:relative;
    top:1rem;
    animation:fadeInUp 600ms .2s;
    animation-fill-mode:both
}
#hero h1{
    color:#fff;
    animation:fadeInUp 600ms .2s;
    animation-fill-mode:both
}
#hero p{
    font-size:1rem;
    animation:fadeInUp 600ms .2s;
    animation-fill-mode:both
}

@media screen and (max-width:799px) {
  #hero .hero-img{
    max-width:400px;
    margin:0 auto;
    display:block;
    position:relative;
    top:1rem;
    animation:fadeInUp 600ms .2s;
    animation-fill-mode:both
}
}

@keyframes fadeInUp{
    from{
        opacity:0;
        -webkit-transform:translate3d(0, -50px, 0);
        transform:translate3d(0, -10px, 0)
    }
    to{
        opacity:1;
        -webkit-transform:translate3d(0, 0, 0);
        transform:translate3d(0, 0, 0)
    }
}
@-webkit-keyframes fadeInUp{
    from{
        opacity:0;
        -webkit-transform:translate3d(0, -50px, 0);
        transform:translate3d(0, -10px, 0)
    }
    to{
        opacity:1;
        -webkit-transform:translate3d(0, 0, 0);
        transform:translate3d(0, 0, 0)
    }
}
</style>