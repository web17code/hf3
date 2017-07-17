import nameDatacenter from './config.js'

const routers = [

    {
        path: nameDatacenter.nameDatacenter+'/home',
        component:(resolve) => require(['./views/home.vue'],resolve)
    },

    {
        path: nameDatacenter.nameDatacenter+'/festival',
        component:(resolve) => require(['./views/festival.vue'],resolve)
    },
    {
        path: nameDatacenter.nameDatacenter+'/addPic',
        component:(resolve) => require(['./views/addPic.vue'],resolve)
    },
    {
        path: nameDatacenter.nameDatacenter+'/edit',
        component:(resolve) => require(['./views/edit.vue'],resolve),
    },
    {
        path: nameDatacenter.nameDatacenter+'/pclogin',
        component:(resolve) => require(['./views/pclogin.vue'],resolve),
    },
    {
        path: nameDatacenter.nameDatacenter+'/moblogin',
        component:(resolve) => require(['./views/moblogin.vue'],resolve),
    },
    {
        path:nameDatacenter.nameDatacenter+ '/yl',
        component:(resolve) => require(['./views/yl.vue'],resolve),
    },
    {
        path:'/',
        component:(resolve) => require(['./views/home.vue'],resolve)
    }
]
    export default routers;