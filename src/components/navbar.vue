<template>
  <div id="sectionNavbar">
    <div class="navbar py-lg-4 py-2" v-on:scroll="scroll">
      <div class="site-left">
        <img src="../assets/fox-logo.png" alt="" />
      </div>
      <div class="site-right">
        <div>
          <button class="button" @click="toggle">☰</button>

          <!-- <button type="button"><img src="../assets/menu.png" width="50px" alt=""></button> -->
        </div>
        <ul class="my-1">
          <li>
            <router-link to="/"
              ><small class="font-weight-bold">Home</small></router-link
            >
            <p class="bottomLine"></p>
          </li>
          <li>
            <a href="#sectionPage"
              ><small class="font-weight-bold">About</small></a>
            <p class="bottomLine"></p>
          </li>
          <li>
            <a href="#sectionFeature"
              ><small class="font-weight-bold">Feature</small></a
            >
            <p class="bottomLine"></p>
          </li>
          <li>
            <a href="#sectionFAQ"
              ><small class="font-weight-bold">Screenshots</small></a
            >
            <p class="bottomLine"></p>
          </li>
          <li>
            <a href="#sectionTeam"
              ><small class="font-weight-bold">Team</small></a
            >
            <p class="bottomLine"></p>
          </li>
          <li class="NewHover">
            <small class="text-white font-weight-bold">News <img src="../assets/caret-down.png" width="9"></small>
            <p class="bottomLine"></p>
            <div class="DropDown w-100">
              <div class="drop-down-div">
                <router-link to="/api" class="drop-down-link text-dark">
                  API exp
                </router-link>
              </div>
              <div class="drop-down-div">
                <router-link to="/newone" class="drop-down-link text-dark">
                  News One
                </router-link>
              </div>
              <div class="drop-down-div">
                <router-link to="/newtwo" class="drop-down-link text-dark">
                  News Two
                </router-link>
              </div>
              <div class="drop-down-div">
               <router-link to="/single" class="drop-down-link text-dark">
                  Single
                </router-link> 
              </div>
                <div class="drop-down-div">
               <router-link to="/task" class="drop-down-link text-dark">
                  New task
                </router-link> 
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="sideMenu" v-if="open">
      <div><button v-on:click="close" class="close">&times;</button></div>
      <div class="link1"><router-link to="/">home</router-link></div>
      <div class="link"><a href="#sectionPage">about</a></div>
      <div class="link"><a href="#sectionFeature">Feature</a></div>
      <div class="link"><a href="#sectionFAQ">Screenshots</a></div>
      <div class="link"><a href="#sectionTeam">Team</a></div>
      <div class="link">
        <div class="NewHover w-100">
          <h4 class="text-white">News <img src="../assets/caret-down.png" width="10"></h4>
          <div class="drop-down-responsive">
            <div class="p-4"><router-link to="/api" class="router-link">API exp</router-link></div>
            <div>
              <router-link to="/newone" class="router-link"
                >New One</router-link
              >
            </div>
            <div>
              <router-link to="/newtwo" class="router-link"
                >New Two</router-link
              >
            </div>
            <div> <router-link to="/single" class="router-link"
                >Single</router-link
              ></div>
              <div> <router-link to="/task" class="router-link"
                >New task</router-link
              ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      open: false,

      addSiteBar: {
        sitebar: false,
      },
    };
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },
    close() {
      this.open = false;
    },

    scroll() {
      var elnavbar = document.querySelector("navbar");
      document.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
          elnavbar.classList.add("navbar-show");
        } else {
          elnavbar.classList.remove("navbar-show");
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: white;
  font-size: 25px;
}
.navbar {
  width: 100%;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
  background: #21bbd3;
  justify-content: space-between;
}
.siteNav {
  display: block;
}
.NewHover {
  background-color: transparent;
  position: relative;
  transition: all 0.5s ease;
}
.DropDown {
  display: none;
  position: absolute;
  left: 0;
  top: 100%;
  z-index: 9999999999;
  font-size: 13px;
  transition: all 0.5s ease;
}
.NewHover:hover .DropDown {
  display: block;
  background-color: white;
  color: black;
}
.drop-down-responsive {
  display: none;
  position: absolute;
  left: 35%;
  top: 100%;
  z-index: 9999999999;
  transition: all 0.5s ease;

  .router-link {
  padding: 20px;
    font-size: 17px;
    color: black;
  }
}
.NewHover:hover .drop-down-responsive {
  display: block;
  background-color: white;
  color: black;
}
.drop-down-link {
  width: 100%;
  font-size: 15px;
}
.drop-down-div:hover {
  background-color: #21bbd3;
}

.navbar-show {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 4px 10px 1px #cecacab0;
  animation: slide 0.4s forwards;
}
@keyframes slide {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.site-left {
  margin-left: 60px;
}
.site-rigth {
  border: 2px dashed black;
}
.sideMenu {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.close {
  font-size: 50px;
  text-align: right;
  position: absolute;
  top: 20px;
  right: 30px;
  outline: none;
  background-color: transparent;
  border: 0;
  color: white;
}
.link1 {
  display: block;
  font-size: 18px;
  margin: 60px 0 20px 0;
  text-decoration: none;
}
.link {
  display: block;
  font-size: 18px;
  margin: 20px 0;
  text-decoration: none;
}

@media screen and (max-width: 992px) {
  ul {
    display: none !important;
  }
  .button {
    display: block !important;
    outline: none;
    margin-top: 7px;
    margin-right: 20px;
    background: transparent;
    border: 0;
    font-size: 40px;
  }
  .w3-button {
    font-size: 40px;
    background: transparent;
    border: 0;
    outline-color: #21bbd3;
  }
  .site-left {
    margin-left: 20px;
  }
  .sideMenu {
    width: 100%;
    background-color: rgba(0, 0, 0, 0.758);
    text-align: center;
    z-index: 999999999;
    animation: navbar 0.6s forwards;
  }
  @keyframes navbar {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }
}
.button {
  display: none;
}
ul {
  display: flex;
  margin-right: 30px;
}
ul li {
  list-style: none;
  font-size: 20px;
  transition: all 0.5s ease;
  padding: 0 20px;
  position: relative;
  font-family: inherit;
}
.bottomLine {
  width: 90%;
  height: 2px;
  margin: 0 auto;
  background-color: #fff;
  position: absolute;
  left: 0;
  top: 35px;
  transform: scale(0);
  transition: all 0.5s ease;
}

ul li:hover .bottomLine {
  transform: scale(1);
}
ul li a {
  color: white;
  text-decoration: none;
  font-size: 22px;
}
</style>