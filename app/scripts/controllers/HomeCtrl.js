(function(){
    function HomeCtrl(Task, $timeout, $state){
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
        this.expire = Task.createdAt;
        
        //State Select
        this.options = [
            {label:'Active', value: 'home'},
            {label:'Expired', value:'expired'},
            {label:'Completed', value:'completed'},
            {label:'Add Task', value:'addTask'}
        ];
        
        this.stateChangeFunction = function(){
            console.log(this.states)
            $state.go(this.states);
        }
        
        
        
    

        
    }
    angular
        .module('Blocitoff')
        .controller('HomeCtrl', ['Task', '$timeout','$state', HomeCtrl]);
})();