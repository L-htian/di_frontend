import $ from 'jquery'

const api = {
    common: 'http://localhost:8092/clientA/api/common'
}

export function validate(form) {
    let re
    $.ajax(`${api.common}/validate`, {
        type: 'POST',
        dataType: 'text',
        data:JSON.stringify(form),
        contentType:'application/json',
        async:false,
        success:function (data){
            re = (JSON.parse(data)).content
        }
    })
    return re
}