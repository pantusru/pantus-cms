<template>
  <!-- Sidebar -->

    <div id="sidebar-container" class="sidebar-expanded ">
    <!-- d-* hiddens the Sidebar in smaller devices. Its itens can be kept on the Navbar 'Menu' -->
    <!-- Bootstrap edit Group -->
    <ul class="list-group sticky-top sticky-offset">
      <!-- Separator with title -->
      <li class="list-group-item sidebar-separator-title text-muted d-flex align-items-center menu-collapsed">
        <small>МАГАЗИН</small>
      </li>
      <!-- /END Separator -->


      <!-- Menu with submenu -->
      <a v-b-toggle.collapse-1-inner  class="bg-dark list-group-item list-group-item-action flex-column align-items-start" >
        <div class="d-flex w-100 justify-content-start align-items-center">
          <span class="fa fa-cube fa-fw mr-3"></span>
          <span class="menu-collapsed">CRM</span>
          <span class="submenu-icon ml-auto"></span>
        </div>
      </a>

      <!-- Submenu content -->
      <b-collapse id="collapse-1-inner" class="" :visible="$route.meta.breadcrumb ?  $route.meta.breadcrumb[0].name === 'CRM' : false">

        <router-link :to="{ name: 'Orders'}" class="bg-dark list-group-item list-group-item-action flex-column align-items-start" active-class="item-selected" >
          <div class="d-flex w-100 justify-content-start align-items-center">
            <span class="fa fa-shopping-cart fa-fw pl-4 ml-3 mr-4"></span>
            <span class="menu-collapsed ml-2">Заказы</span>
          </div>
        </router-link>

        <router-link class="bg-dark list-group-item list-group-item-action flex-column align-items-start" active-class="item-selected" to="#16">
          <div class="d-flex w-100 justify-content-start align-items-center">
            <span class="fa fa-shopping-bag fa-fw pl-4 ml-3 mr-4"></span>
            <span class="menu-collapsed ml-2">Корзины</span>
          </div>
        </router-link>
      </b-collapse>

      <!-- Menu with submenu -->
      <a v-b-toggle.collapse-2-inner  class="bg-dark list-group-item list-group-item-action flex-column align-items-start">
        <div class="d-flex w-100 justify-content-start align-items-center">
          <span class="fa fa-book fa-fw mr-3"></span>
          <span class="menu-collapsed ">Каталог</span>
          <span class="submenu-icon ml-auto"></span>
        </div>
      </a>

      <!-- Submenu content -->
<!--      {{$route.meta.breadcrumb}}-->
      <b-collapse id="collapse-2-inner" :visible="$route.meta.breadcrumb ?  $route.meta.breadcrumb[0].name === 'Каталог' : false">
        <router-link :to="{ name: 'Brands'}" class="list-group-item list-group-item-action bg-dark text-white" active-class="item-selected">
          <span class="fa fa-tags fa-fw pl-4 ml-3 mr-4"></span>
          <span class="menu-collapsed ml-2">Бренды</span>

       </router-link>
        <router-link :to="{ name: 'CatalogCategory'}" class="list-group-item list-group-item-action bg-dark text-white" active-class="item-selected">
          <span class="fa fa-th-list fa-fw pl-4 ml-3 mr-4"></span>
          <span class="menu-collapsed ml-2">Категории</span>
        </router-link>
        <router-link :to="{ name: 'CatalogApplicabilities'}" class="list-group-item list-group-item-action bg-dark text-white" active-class="item-selected">
          <span class="fa fa-car fa-fw pl-4 ml-3 mr-4"></span>
          <span class="menu-collapsed ml-2">Применяемости</span>
        </router-link>
      </b-collapse>

      <!-- Menu with submenu -->
      <a v-b-toggle.collapse-3-inner  class="bg-dark list-group-item list-group-item-action flex-column align-items-start">
        <div class="d-flex w-100 justify-content-start align-items-center">
          <span class="fa fa-database fa-fw mr-3"></span>
          <span class="menu-collapsed">Продукты</span>
          <span class="submenu-icon ml-auto"></span>
        </div>
      </a>

      <!-- Submenu content -->
      <b-collapse id="collapse-3-inner" class="" :visible="$route.meta.breadcrumb ?  $route.meta.breadcrumb[0].name === 'Продукты' : false">
        <router-link :to="{ name: 'ProductsList'}" class="list-group-item list-group-item-action bg-dark text-white" active-class="item-selected">
          <span class="fa fa-cogs fa-fw pl-4 ml-3 mr-4"></span>
          <span class="menu-collapsed ml-2">Автозапчасти</span>
        </router-link>

      </b-collapse>







      <!-- Separator with title -->
      <li class="list-group-item sidebar-separator-title text-muted d-flex align-items-center menu-collapsed">
        <small>ВЕБ КОНТЕНТ</small>
      </li>
      <!-- /END Separator -->

      <!-- Menu with submenu -->
      <a v-b-toggle.collapse-4-inner  class="bg-dark list-group-item list-group-item-action flex-column align-items-start">
        <div class="d-flex w-100 justify-content-start align-items-center">
          <span class="fa fa-paper-plane-o fa-fw mr-3"></span>
          <span class="menu-collapsed">Новости</span>
          <span class="submenu-icon ml-auto"></span>
        </div>
      </a>

      <!-- Submenu content -->
      <b-collapse id="collapse-4-inner" class="" :visible="$route.meta.breadcrumb ?  $route.meta.breadcrumb[0].name === 'Новости' : false">
        <router-link :to="{ name: 'NewsArticles'}" class="list-group-item list-group-item-action bg-dark text-white" active-class="item-selected">
          <span class="fa fa-list-alt fa-fw pl-4 ml-3 mr-4"></span>
          <span class="menu-collapsed ml-2">Статьи</span>
        </router-link>
        <router-link :to="{ name: 'NewsCategory'}" class="list-group-item list-group-item-action bg-dark text-white" active-class="item-selected">
          <span class="fa fa-th-list fa-fw pl-4 ml-3 mr-4"></span>
          <span class="menu-collapsed ml-2">Категории</span>
        </router-link>

      </b-collapse>

      <a v-b-toggle.collapse-5-inner  class="bg-dark list-group-item list-group-item-action flex-column align-items-start" :class="{ disabledItem: true }">
        <div class="d-flex w-100 justify-content-start align-items-center">
          <span class="fa fa-file-code-o fa-fw mr-3"></span>
          <span class="menu-collapsed">Страницы</span>
          <span class="submenu-icon ml-auto"></span>
        </div>
      </a>

      <!-- Submenu content -->
      <b-collapse id="collapse-5-inner" class="">

      </b-collapse>


      <!-- Menu with submenu -->
      <a v-b-toggle.collapse-6-inner  class="bg-dark list-group-item list-group-item-action flex-column align-items-start" :class="{ disabledItem: true }">
        <div class="d-flex w-100 justify-content-start align-items-center">
          <span class="fa fa-wrench fa-fw mr-3"></span>
          <span class="menu-collapsed">Настройки</span>
          <span class="submenu-icon ml-auto"></span>
        </div>
      </a>

      <!-- Submenu content -->
      <b-collapse id="collapse-6-inner" class="">

      </b-collapse>


      <a href="#" class="bg-dark list-group-item list-group-item-action" :class="{ disabledItem: true }">
        <div class="d-flex w-100 justify-content-start align-items-center">
          <span class="fa fa-comments fa-fw mr-3"></span>
          <span class="menu-collapsed">Отзывы</span>
        </div>
      </a>

      <!-- Separator with title -->
      <li class="list-group-item sidebar-separator-title text-muted d-flex align-items-center menu-collapsed">
        <small>SEO</small>
      </li>
      <!-- /END Separator -->




      <!-- Menu with submenu -->
      <a v-b-toggle.statistic  class="bg-dark list-group-item list-group-item-action flex-column align-items-start">
        <div class="d-flex w-100 justify-content-start align-items-center">
          <span class="fa fa-line-chart fa-fw mr-3"></span>
          <span class="menu-collapsed">Статистика</span>
          <span class="submenu-icon ml-auto"></span>
        </div>
      </a>

      <!-- Submenu content -->
      <b-collapse id="statistic" class="" :visible="$route.meta.breadcrumb ?  $route.meta.breadcrumb[0].name === 'Статистика' : false">
        <router-link :to="{ name: 'statisticYandex'}" class="list-group-item list-group-item-action bg-dark text-white" active-class="item-selected" >
          <span class="fa fa-yahoo fa-fw pl-4 ml-3 mr-4"></span>
          <span class="menu-collapsed ml-2">Яндекс</span>
        </router-link>
        <router-link :to="{ name: 'statisticGoogle'}" class="list-group-item list-group-item-action bg-dark text-white" active-class="item-selected" :class="{ disabledItem: true }">
          <span class="fa fa-google fa-fw pl-4 ml-3 mr-4"></span>
          <span class="menu-collapsed ml-2">Google</span>
        </router-link>
      </b-collapse>


      <!-- Separator with title -->
      <li class="list-group-item sidebar-separator-title text-muted d-flex align-items-center menu-collapsed">
        <small>СЕРВИСЫ</small>
      </li>
      <!-- /END Separator -->


      <a href="#" class="bg-dark list-group-item list-group-item-action" :class="{ disabledItem: true }">
        <div class="d-flex w-100 justify-content-start align-items-center">
          <span class="fa fa-envelope-o fa-fw mr-3"></span>
          <span class="menu-collapsed">Messages <span class="badge badge-pill badge-primary ml-2">5</span></span>
        </div>
      </a>

      <a href="#" class="bg-dark list-group-item list-group-item-action" :class="{ disabledItem: true }">
        <div class="d-flex w-100 justify-content-start align-items-center">
          <span class="fa fa-calendar fa-fw mr-3"></span>
          <span class="menu-collapsed">Calendar</span>
        </div>
      </a>


      <!-- Separator with title -->
      <li class="list-group-item sidebar-separator-title text-muted d-flex align-items-center menu-collapsed"></li>
      <!-- /END Separator -->


      <router-link :to="{ name: 'Test'}" class="bg-dark list-group-item list-group-item-action" active-class="item-selected">
        <div class="d-flex w-100 justify-content-start align-items-center">
          <span class="fa fa-question fa-fw mr-3"></span>
          <span class="menu-collapsed">Help</span>
        </div>
      </router-link>

      <!-- Logo -->
      <li class="list-group-item logo-separator d-flex justify-content-center">
        <a href="https://www.pantus.ru/" target="_blank">
          <img :src="require('../media/ico-pantus.png')" alt="pantus-ru" class="services-pantus-ico mx-1"/>
        </a>

        <a href="https://vk.com/pantusclub" target="_blank">
          <img :src="require('../media/ico-vk.svg')" alt="vk" class="services-pantus-ico mx-1"/>
        </a>
        <a href="https://www.youtube.com/channel/UCwXbMkU-NXMp72xINxamRWQ" target="_blank">
          <img :src="require('../media/ico-youtube.svg')" alt="youtube" class="services-pantus-ico mx-1"/>
        </a>
        <a href="https://tgclick.com/pantusclub" target="_blank">
          <img :src="require('../media/ico-telegram.svg')" alt="telegram" class="services-pantus-ico mx-1"/>
        </a>
        <a href="https://www.instagram.com/pantus.ru" target="_blank">
          <img :src="require('../media/ico-instagram.svg')" alt="instagram" class="services-pantus-ico mx-1"/>
        </a>
      </li>
    </ul>
    <!-- edit Group END-->
  </div>
  <!-- sidebar-container END -->

</template>

<script>
export default {
name: "SideBar",

  data(){
    return{
      // url: require('@/components/navigations/side-bar/media/favicon_site.ico'),
      isActiveItem:null,
    }
  },
  methods:{

  },

}


</script>

<style scoped>



#sidebar-container {

  min-height: 100vh;
  background-color: #333;
  padding: 0;
}

/* Sidebar sizes when expanded and expanded */
.sidebar-expanded {
  min-width: 280px;
  max-width: 290px;
}


/* Menu item*/
#sidebar-container .list-group a {
  height: 50px;
  color: white;
  cursor: pointer;
}

/* Submenu item*/
#sidebar-container .list-group .sidebar-submenu a {
  height: 45px;
  padding-left: 30px;
}


/* Separators */
.sidebar-separator-title {
  background-color: #333;
  height: 35px;
}

.logo-separator {
  background-color: #333;
  height: 60px;
}

/* Closed submenu icon */
#sidebar-container .list-group .list-group-item[aria-expanded="false"] .submenu-icon::after {
  content: " \f0d7";
  font-family: FontAwesome;
  display: inline;
  text-align: right;
  padding-left: 10px;
}
/* Opened submenu icon */
#sidebar-container .list-group .list-group-item[aria-expanded="true"] .submenu-icon::after {
  content: " \f0da";
  font-family: FontAwesome;
  display: inline;
  text-align: right;
  padding-left: 10px;
}


a.bg-dark:focus, a.bg-dark:hover, button.bg-dark:focus, button.bg-dark:hover {
  background-color: rgba(86, 122, 213, 0.5) !important;
}

.item-selected {
  background-color: rgba(86, 122, 213, 1) !important;
  box-shadow: 5px 5px 1px 0px rgba(0,0,0,0.75);
  z-index: 2;
}

.services-pantus-ico{
  width: 30px;
  /*background-color: #ffffff;*/
  /*background-size: 2px;*/

}

.disabledItem{

  opacity: 0.5;
  pointer-events: none;
}

</style>
