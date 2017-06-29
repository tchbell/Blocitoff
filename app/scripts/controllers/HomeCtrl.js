(function(){
    function HomeCtrl(Task, $timeout){
        // Tasks
        this.tasks = Task.all;
        this.activeTasks = Task.allActive;
        this.expTasks = Task.allExp;
        
        //Adding tasks
        this.addTask = Task.addTask;
    
        //Completing Tasks
        this.completedTasks = Task.allComplete;
        this.complete = Task.complete;


        
        //Expired
        this.time = Task.createdAt;
        this.expire = Task.tooLong;

        
    }
    angular
        .module('Blocitoff')
        .controller('HomeCtrl', ['Task', '$timeout', HomeCtrl]);
})();