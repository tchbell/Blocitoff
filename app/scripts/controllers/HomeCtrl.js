(function(){
    function HomeCtrl(Task){
        // Tasks
        this.tasks = Task.all;
        
        //Adding tasks
        this.taskName = null;
        this.addTask = Task.addTask;

        


        
    }
    angular
        .module('Blocitoff')
        .controller('HomeCtrl', ['Task', HomeCtrl]);
})();