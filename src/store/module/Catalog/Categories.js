import Axios from 'axios'


const state = () => ({
    all_items_categories: [],

})

const mutations = {
    /**
     * ###ЗАПИСАТЬ ВСЕ КАТЕГОРИИ В ХРАНИЛИЩЕ
     * @param state
     * @param data
     */
    setDataAllCategories(state ,data){
        state.all_items_categories = data;
    },
}

const actions = {

    /**
     * ###ПОЛУЧИТЬ ВСЕ КАТЕГОРИИ С БД
     * @param commit
     * @returns {Promise<AxiosResponse<any>>}
     */
    async getDataAllItems({commit}){
        return  await Axios.get('http://194.67.113.201:8080/categories?view=tree').then( res =>{
            commit("setDataAllCategories",res.data);
            // console.log('мы в действиях получили ', res.data);
        })
    },
}

const getters = {
    /**
     * ###ПОЛУЧИТЬ ИЗ ХРАНИЛИЩА ВСЕ КАТЕГОРИИ
     * @param arr
     * @returns {[]}
     */
    allItems: arr => arr.all_items_categories,

    /**
     * ###ПОЛУЧИТЬ ИЗ ХРАНИЛИЩА ВСЮ ИНФОРМАЦИЮ ОБ ЭТОЙ КАТЕГОРИИ ПО ИД
     * @param arr
     * @summary `await this.$store.getters["имяМодуля/имяГетера"](Аргументы)`
     * @returns {function(*): *}
     */
    itemById: arr => id => {
        //  console.log('In store = ',state.state_data.find(todo => todo.id === id))
        return arr.all_items_categories.find(todo => todo.id === id);
    }

}
export  default {
    getters,
    actions,
    mutations,
    state,
    namespaced: true,
}