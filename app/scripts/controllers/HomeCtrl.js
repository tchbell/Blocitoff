(function(){
    function HomeCtrl(Task, $timeout){
        // Tasks
        this.tasks = Task.all;
        this.activeTasks = Task.allActive;
        this.expTasks = Task.allExp;
        
        //Adding tasks
        this.taskName = null;
        this.addTask = Task.addTask;
    


        
        //Expired
        this.time = Task.createdAt;

        
    }
    angular
        .module('Blocitoff')
        .controller('HomeCtrl', ['Task', '$timeout', HomeCtrl]);
})();