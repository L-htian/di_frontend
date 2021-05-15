const login = {
    state: {
        login_account:'',
    },
    mutations:{
        set_account:function (state,data){
            state.login_account = data
        }
    },
    action:{}
}
export default login