<template>
  <b-container>

    <div class="shadow card " id="tbl" >
      <h4 class="card-header ">
        <b-container fluid  class="bv-example-row px-0">
          <b-row align-h="between" >
            <b-col><small class="text-muted">Дерево применимостей</small></b-col>
            <b-col cols="4" class="text-right ">

              <b-icon-arrow-clockwise

                  variant="light"
                  class="btnn btnn-white btnn-animated bg-primary rounded-circle mr-2 p-1 h3 mb-0"
              >
              </b-icon-arrow-clockwise>

              <b-icon-plus-circle-fill
                  @click="addForm()"
                  class="btnn btnn-white btnn-animated rounded-circle h3 mb-0"
                  variant="success"
              >
              </b-icon-plus-circle-fill>
            </b-col>
          </b-row>
        </b-container>
      </h4>
      <div class="card-body">
        <b-overlay :show="spinerLoaderIsShow" no-fade rounded="sm">
        <tree :url="url" :tree-data="tree" ></tree>
        </b-overlay>
      </div>
    </div>

  </b-container>
</template>

<script>

import Tree from "../../../components/catalog/catalog-tree-view/catalog-tree-view";

export default {

  data: () => ({
    tree: [],
    show: true,
    url: '/catalog/applicabilities/edit?id=',
    spinerLoaderIsShow: true,
  }),

  components: {
    Tree
  },

  async mounted() {
    await this.$store.dispatch("CatalogApplicabilities/getDataAllItems" );
    let data = await this.$store.getters["CatalogApplicabilities/allItems"];
    this.tree = data;
    this.spinerLoaderIsShow= false


  },

  computed: {

  },

  methods: {
    //открываем форму добавления
    addForm(){
     this.$router.push({ name: 'applicabilitiesAdd' })
    },

    Upadate(){},


  },
};



</script>

<style scoped>

.btnn {
  cursor: pointer;
}

.btnn:link,
.btnn:visited {
  text-transform: uppercase;
  text-decoration: none;
  padding: 15px 40px;
  display: inline-block;
  border-radius: 100px;
  transition: all .2s;
  position: absolute;
}

.btnn:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.btnn:active {
  transform: translateY(-1px);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}

.btnn-white {
  background-color: #fff;
  color: #777;
}

.btnn::after {
  content: "";
  display: inline-block;
  height: 100%;
  width: 100%;
  border-radius: 100px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  transition: all .4s;
}

.btnn-white::after {
  background-color: #fff;
}

.btnn:hover::after {
  transform: scaleX(1.4) scaleY(1.6);
  opacity: 0;
}

.btnn-animated {
  animation: moveInBottom 5s ease-out;
  animation-fill-mode: backwards;
}


</style>
