import Vue from 'vue'
import VueRouter from 'vue-router'
import login from "@/views/login";
import mainStuView from "@/views/stu/mainStuView";
import lessonManage from "@/views/stu/lessonManage";
import personalInfo from "@/views/stu/stuPersonalInfo";
import mainAdmView from "@/views/adm/mainAdmView";
import teachingManage from "@/views/adm/teachingManage";
import admPersonalInfo from "@/views/adm/admPersonalInfo";
import countView from "@/views/adm/countView";
import countLesson from "@/views/adm/countLesson";
import countStu from "@/views/adm/countStu";
import viewStuLesson from "@/views/stu/viewStuLesson";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'login',
        component: login
    },
    {
        path: '/stu',
        name: 'stuHome',
        component: mainStuView,
        children: [
            {
                path: 'manageLessons',
                name: 'lessonManage',
                component: lessonManage
            },
            {
                path: 'personalInfo',
                name: 'personalInfo',
                component: personalInfo
            },
            {
                path: 'viewLesson',
                name: 'viewLesson',
                component: viewStuLesson
            }
        ]
    },
    {
        path: '/adm',
        name: 'admHome',
        component: mainAdmView,
        children: [
            {
                path: 'manageTeaching',
                name: 'manageTeaching',
                component: teachingManage
            },
            {
                path: 'personalInfo',
                name: 'personalInfo',
                component: admPersonalInfo
            },
            {
                path: 'viewCounts',
                name: 'viewCounts',
                component: countView,
            },
            {
                path: 'viewLessonCount',
                name: 'viewLessonCount',
                component: countLesson
            },
            {
                path: 'viewStuCount',
                name: 'viewStuCount',
                component: countStu
            }
        ]
    }
]

const createRouter = () => new VueRouter({
    // mode: 'history', // require service support
    scrollBehavior: () => ({y: 0}),
    routes
})
const router = createRouter()

export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher // reset router
}

export default router