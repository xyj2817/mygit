
import Index from '../compoments/Index'
import Detail from '../compoments/Detail'

const Yi = [
    {
        path: '/index',
        component: Index
    },
    // {
    //     path: '/detail/:id',
    //     component: Detail
    // },
    {
        path: '/detail',
        component: Detail
    },
    {
        path: '*',
        redirect: '/index'
    },
]

export default Yi
