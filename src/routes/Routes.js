import Calculator from "../components/Calculator";
import About from "../components/About";

export default [
    { path: '/', redirect: '/calculator' },
    { path: '/calculator', component: Calculator, name: 'Calculator' },
    { path: '/about', component: About, name: 'About' }
];