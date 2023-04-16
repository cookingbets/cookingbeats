<template>
  <b-navbar  toggleable="sm" type="dark" variant="dark">
    <b-navbar-brand href="#">
      <img src="/icons/logo.png" width="40px" alt="">
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" variant="dark" is-nav>
      <b-navbar-nav>
        <li class="nav-item">
          <NuxtLink to="/"> Home </NuxtLink>
        </li>
        <li class="nav-item">
          <Nuxt-link  to="/instrumentales">
            Instrumentales
          </Nuxt-link>
        </li>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
          <li class="nav-item"><nuxt-link v-if="login" to="/perfil"> Cuenta </nuxt-link></li>
          <li class="nav-item"><button v-if="login" @click="logout">Salir</button></li>
          <li class="nav-item"><nuxt-link v-if="!login" to="/login"> Entrar </nuxt-link></li>
          <li class="nav-item"><nuxt-link v-if="!login" to="/register"> Registrarse </nuxt-link></li>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
<script>
export default {
  name: "Menu",
  data() {
    return {
      cssimg: { blank: true, width: 75, height: 75 },
      login: false,
    };
  },
  components: {},
  mounted() {
    console.log(this.$cookiz.get('usuario'));
    if (this.$cookiz.get('usuario') != null) {
      this.login = true;
    }
  },
  methods: {
    logout: function() {
      this.$cookiz.remove('usuario');
      this.login = false;
      this.$router.push("/login");
    },
  },
};
</script>
<style>
.navbar {
  height: 70px;
  background: #202135;
  padding-bottom: 20px;
  margin-bottom: 20px;
}

a:hover {
  text-decoration: none;
  color: #fff;
}

.brand {
  position: absolute;
  padding-left: 20px;
  float: left;
  line-height: 70px;
  text-transform: uppercase;
  font-size: 1.4em;
}
.brand a,
.brand a:visited {
  color: #0c0c0c;
  text-decoration: none;
}

nav {
  float: right;
}
nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
nav ul li {
  float: left;
  position: relative;
}
nav ul li a {
  display: block;
  padding: 10px 20px 0 20px;
  line-height: 50px;
  color: #fff;
  text-decoration: none;
}
nav ul li button {
  display: block;
  padding: 10px 20px 0 20px;
  line-height: 50px;
  color: #fff;
  text-decoration: none;
}
nav ul li a::before {
  transition: 300ms;
  height: 5px;
  content: "";
  position: absolute;
  background-color: #7c6cd9;
  width: 0%;
  bottom: 0px;
}
nav ul li a:hover::before {
  width: 70%;
}
nav ul li a:not(:only-child):after {
  padding-left: 4px;
  content: " ▾";
}
nav ul li ul li {
  min-width: 190px;
}
nav ul li ul li a {
  padding: 15px;
  line-height: 20px;
}

.nav-dropdown {
  display: none;
  position: absolute;
  z-index: 1;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.15);
}

.nav-mobile {
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  background: #202135;
  height: 70px;
  width: 70px;
}

@media only screen and (max-width: 799px) {
  .nav-mobile {
    display: block;
  }

  nav {
    width: 100%;
    padding: 70px 0 15px;
  }
  nav ul {
    display: none;
  }
  nav ul li {
    float: none;
    margin-bottom: 5px;
  }
  nav ul li a {
    padding: 15px;
    line-height: 20px;
  }
  nav ul li a:hover::before {
    width: 20%;
  }
  nav ul li ul li a {
    padding-left: 30px;
  }
  .nav-dropdown {
    position: static;
  }
  .search-bar {
    margin-top: 5px;
  }
  #nav-collapse {
    padding: 5px 20px;
    background-color: #3b4148;
    z-index: 1000;
    animation:fadeInUp 600ms .2s;
    animation-fill-mode:both;
  }
  
}

#nav-toggle {
  position: absolute;
  left: 18px;
  top: 22px;
  cursor: pointer;
  padding: 10px 35px 16px 0px;
  animation:fadeInUp 600ms .2s;
  animation-fill-mode:both;
}
#nav-toggle span,
#nav-toggle span:before,
#nav-toggle span:after {
  cursor: pointer;
  border-radius: 1px;
  height: 5px;
  width: 35px;
  background: #fff;
  position: absolute;
  display: block;
  content: "";
  transition: all 300ms ease-in-out;
}
#nav-toggle span:before {
  top: -10px;
}
#nav-toggle span:after {
  bottom: -10px;
}
#nav-toggle.active span {
  background-color: transparent;
  animation:fadeInUp 600ms .2s;
  animation-fill-mode:both;
}
#nav-toggle.active span:before,
#nav-toggle.active span:after {
  top: 0;
}
#nav-toggle.active span:before {
  transform: rotate(45deg);
}
#nav-toggle.active span:after {
  transform: rotate(-45deg);
}

@media screen and (min-width: 799px) {
  .nav-list {
    display: block !important;
  }
  #nav-collapse {
    padding: 5px 20px;
    z-index: 1000;
    animation:fadeInUp 600ms .2s;
    animation-fill-mode:both;
  }
}
</style>
