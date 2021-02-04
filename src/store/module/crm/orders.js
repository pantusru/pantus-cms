import Axios from 'axios'
const jsonMaps = require ("@/store/json-config"); // json data-maps



const state = () => ({
    all_items: [],
    item_details_by_id: {},
    all_statuses: {},
    all_delivery_service: {},
    all_payment_systems: {},
    tree_conformity: {},

})

const mutations = {
    setDataAllItems(state ,data){
        state.all_items = data;
    },
    setDataDetailsItemById(state ,data){
        state.item_details_by_id = data;
    },

    setDataStatuses(state ,data){
        state.all_statuses = data;
    },

    setDataDeliveryService(state ,data){
        state.all_delivery_service = data;
    },

    setDataPaymentSystems(state ,data){
    state. all_payment_systems = data;
    },

    setTreeConformity(state ,data){
        state.tree_conformity = data;
    }



}

const actions = {



    async getDataAllItems({commit},  urlParams){
        const formattedUrl = jsonMaps.crmOrdersMapedUrlFilter(urlParams)
        Axios.all([
            Axios.get(process.env.VUE_APP_API_URL_CRM_ORDERS,
                {
                    params: {
                        ...formattedUrl
                    }
                }
            ),
            Axios.get('http://api.pantus.ru/orders/count')
        ])
            .then(Axios.spread(function (items, count) {
                let data = { data: [], meta: []}
                data.data = items.data
                data.meta.count = count.data
                commit("setDataAllItems", jsonMaps.crmOrdersMapedList(data));
            }))
            .catch(function (error) {
                console.error(error)
            });

    },

    async getDetailsById({commit}, id){
        //https://api.pantus.ru/orders/88
        return  await Axios.get(process.env.VUE_APP_API_URL_CRM_ORDERS+'/'+id).then( res =>{
            commit("setDataDetailsItemById", jsonMaps.crmOrderDetail(res.data) );
        })
    },

    //http://api.pantus.ru/orders/statuses
    async getOrderStatuses({commit}){
        //https://api.pantus.ru/orders/88
        return  await Axios.get('http://api.pantus.ru/orders/statuses').then( res =>{
            commit("setDataStatuses", jsonMaps.crmOrderStatuses(res.data) );
        })
    },

    async getOrderDeliveryService({commit}){
        //http://api.pantus.ru/orders/delivery_services
        return  await Axios.get('http://api.pantus.ru/orders/delivery_services').then( res =>{
            commit("setDataDeliveryService", jsonMaps.crmOrderDeliveryServises(res.data) );
        })
    },

    async getOrderPaySystems({commit}){
        //http://api.pantus.ru/orders/payment_services
        return  await Axios.get('http://api.pantus.ru/orders/payment_services').then( res =>{
            commit("setDataPaymentSystems", jsonMaps.crmOrderPaySystems(res.data) );
        })
    },

    //conformity
    async getTreeConformity({commit}){
        //http://api.pantus.ru/orders/payment_services
        return  await Axios.get('http://api.pantus.ru/orders/user_to_delivery_to_paysystem_map').then( res =>{
            commit("setTreeConformity", jsonMaps.crmOrderTreeConformity(res.data) );
        })
    },
}

const getters = {
    //получить весь массив
    allItems: state => state.all_items,

    itemDetailsById: state => state.item_details_by_id,

    statuses: state => state.all_statuses,

    deliveryServices: state => state.all_delivery_service,

    paymentSystems: state => state.all_payment_systems,

    tree_conformity: state => state.tree_conformity,

}
export  default {
    getters,
    actions,
    mutations,
    state,
    namespaced: true,
}
