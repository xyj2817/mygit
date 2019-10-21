
//引入组件
import Home from '../compoments/Home'
import Food from '../compoments/Food'
import Movie from '../compoments/Movie'

const Two = [
    {
        path: '/index/home',
        component: Home
    },
    {
        path: '/index/food',
        component: Food
    },
    {
        path: '/index/movie',
        component: Movie
    },
    {
        path: '*',
        redirect: '/index/home'
    },
]



export default Two