import $ from 'jquery'

const api = {
    adm: 'http://localhost:8092/clientA/api/adm'
}

export function getAdmInfo(account) {
    let re
    $.ajax(`${api.adm}/getAdmInfo/${account}`, {
        type: 'GET',
        dataType: 'text',
        async: false,
        contentType:'application/json',
        success: function (data) {
            re = (JSON.parse(data)).content
        }
    })
    return re
}

export function getStuInfoAdmNeed(){
    let re
    $.ajax(`${api.adm}/getStuInfoForAdm`,{
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

export function getLessonInfoAdmNeed(){
    let re
    $.ajax(`${api.adm}/getLessonInfoForAdm`,{
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

export function changeAdmPassword(accountInfo) {
    let re = 0
    $.ajax(`${api.adm}/changeAdmPassword`, {
        type: 'POST',
        data: JSON.stringify(accountInfo),
        dataType: 'text',
        contentType: 'application/json',
        async: false,
        success: function (data) {
            console.log("changePasswordSuccess!")
            re = 1
        }
    })
    return re
}



export function updateAdmLesson(lessonInfo){
    let re = 0
    $.ajax(`${api.adm}/updateAdmLesson`,{
        type:'POST',
        data:JSON.stringify(lessonInfo),
        contentType:'application/json',
        async:false,
        success:function (data){
            console.log("updateSuccess!")
            re = 1
        }
    })
    return re
}

export function deleteAdmLesson(lessonId){
    $.ajax(`${api.adm}/deleteAdmLesson/${lessonId}`,{
        type:'POST',
        contentType:'application/json',
        async:false,
        success:function (data){
            console.log("deleteSuccess!")
        }
    })
}