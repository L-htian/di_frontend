import $ from 'jquery'

const api = {
    stu: 'http://localhost:8092/clientA/api/stu'
}

export function getStuInfo(account) {
    let re
    $.ajax(`${api.stu}/getStuInfo/${account}`, {
        type: 'GET',
        data: {},
        dataType: 'text',
        contentType:'application/json',
        async: false,
        success: function (data) {
            re = (JSON.parse(data)).content
        }
    })
    return re
}

export function getStuLessonInfo(){
    let re
    $.ajax(`${api.stu}/getLessonInfo`,{
        type:'GET',
        dataType:'text',
        contentType:'application/json',
        async:false,
        success:function (data){
            re = (JSON.parse(data)).content
        }
    })
    return re
}

export function changeStuPassword(accountInfo) {
    let re = 0
    $.ajax(`${api.stu}/changePassword`, {
        type: 'POST',
        data: JSON.stringify(accountInfo),
        dataType: 'text',
        contentType: 'application/json',
        async: false,
        success: function (data) {
            console.log('changeSuccess!')
            re = 1
        }
    })
    return re
}

export function chooseStuLesson(chooseInfo) {
    let re = 0
    $.ajax(`${api.stu}/chooseLesson`, {
        type: "POST",
        data: JSON.stringify(chooseInfo),
        contentType: 'application/json',
        async: false,
        success: function (data) {
            console.log('chooseSuccess!')
            re = 1
        }
    })
    return re
}

export function getChoosedLesson(stuId){
    let re
    $.ajax(`${api.stu}/getChoosedLesson/${stuId}`,{
        type: 'GET',
        data: {},
        dataType: 'text',
        contentType:'application/json',
        async: false,
        success: function (data) {
            re = (JSON.parse(data)).content
        }
    })
    return re
}

export function dropLesson(lessonInfo){
    let re
    $.ajax(`${api.stu}/dropLesson`, {
        type: "POST",
        data: JSON.stringify(lessonInfo),
        dataType:'text',
        contentType: 'application/json',
        async: false,
        success: function (data) {
            re = (JSON.parse(data)).content
        }
    })
    return re
}