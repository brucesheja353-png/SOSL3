import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Service from "../views/Service.vue";
import Contact from "../views/Contact.vue";
import Destination from "../views/Destination.vue";
import Eastern from "../views/Eastern.vue";
import Kigali from "../views/Kigali.vue";
import Northern from "../views/Northern.vue";
import Southern from "../views/Southern.vue";
import Western from "../views/Western.vue";
import Galley from "../views/Galley.vue";
import Photo from "../views/Photo.vue";
import Videos from "../views/Videos.vue"

const routes = [
    {
        path:"/",
        name: "home",
        component: Home
    },
    {
        path: "/about",
        name: "about",
        component: About
    },
    {
        path: "/service",
        name: "service",
        component: Service
    },
    {
        path: "/contact",
        name: "contact",
        component: Contact
    },
    {
        path: "/gallery",
        name: "gallery",
        component: Galley
    },
    {
        path: "/photo",
        name: "photo",
        component: Photo
    },
    {
        path: "/videos",
        name: "videos",
        component: Videos
    },
    {
        path: "/destination",
        name: "destination",
        component: Destination
    },
    {
        path: "/eastern",
        name: "eastern",
        component: Eastern
    },
    {
        
        path: "/kigali",
        name: "kigali",
        component: Kigali
    },
    {
        path: "/northern",
        name: "northern",
        component: Northern
    },
    {
        path: "/southern",
        name: "southern",
        component: Southern
    },
    {
        path: "/western",
        name: "western",
        component: Western
    },
];
const router = createRouter(
    {
        history: createWebHistory(),
        routes,
    }
);
export default router