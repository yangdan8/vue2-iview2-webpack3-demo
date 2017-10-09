export default {
    mode: 'history',
    routes: [{
        path: '/',
        name: 'Hello',
        component: (resolve) => require(['@/components/HelloWorld'], resolve)
    }]
};