const base = {
    get() {
        return {
            url : "http://localhost:8080/changanyiliao/",
            name: "changanyiliao",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/changanyiliao/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "長安智慧医疗"
        } 
    }
}
export default base
