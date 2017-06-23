(function(){
    function HomeCtrl(Task){
        // Tasks
        this.tasks = Task.all;
        
    }
    angular
        .module('Blocitoff')
        .controller('HomeCtrl', ['Task', HomeCtrl]);
})();