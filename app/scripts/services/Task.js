(function(){
    function Task($firebaseArray){
        
        //All tasks
        var ref = firebase.database().ref().child("tasks");
        var tasks = $firebaseArray(ref);
        //Expired Tasks
        var refTwo = firebase.database().ref().child("tasks").child("Expired");
        var expTasks = $firebaseArray(refTwo);
        //Active Tasks
        var refThree = firebase.database().ref().child('tasks').child('Active');
        var activeTasks = $firebaseArray(refThree);
        //Completed Tasks 
        var refFour = firebase.database().ref().child('tasks').child('Completed');
        var completedTasks= $firebaseArray(refFour);
        
        var EXPTIME= 604800000; //Seven days
        
       
        return {
            all: tasks,
            
            allActive:activeTasks,
            
            allExp: expTasks,
            
            allComplete: completedTasks,
            
            addTask: function(){
                    activeTasks.$add({ task: this.taskName, timeCreated: (Date.now()), priority: this.priority})
                    alert(this.taskName + " has been added to active tasks");
                    this.taskName = "";
            },
            
            createdAt: function(task){
                console.log(Date.now() - task.timeCreated);
                if(Date.now() - task.timeCreated > EXPTIME){
                    alert(task.task + " has expired");
                    
                    expTasks.$add(task);
                    activeTasks.$remove(task);
                };
            },
            
            complete: function(task){
                    completedTasks.$add(task);
                    activeTasks.$remove(task);
                    alert(task.task + " has been completed");
            }
            
            
        };

    }
    
    
    angular
        .module('Blocitoff')
        .factory('Task', ['$firebaseArray', Task])
})();
