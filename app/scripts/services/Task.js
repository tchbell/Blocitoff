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
        
        
       
        return {
            all: tasks,
            
            allActive:activeTasks,
            
            allExp: expTasks,
            
            addTask: function(){
                    activeTasks.$add({ task: this.taskName, timeCreated: (Date.now())}).then(function(ref) {
                      var id = ref.key;
                      console.log("added record with id " + id);
                      tasks.$indexFor(id); // returns location in the array
                    });
               alert(this.taskName + " has been added to active tasks");
                this.taskName = "";
            },
            
            tooLong: function(task){
                if(Date.now() - task.timeCreated > 5000){
                console.log(task.task + " has expired");
                return true;
                };
            },   
            
            
            createdAt: function(task){
                if(Date.now() - task.timeCreated > 5000){
                    console.log(task.task + " has expired");
                    
                    expTasks.$add(task);
                    tasks.$remove(task);
                };
            }
            
            
        };

    }
    
    
    angular
        .module('Blocitoff')
        .factory('Task', ['$firebaseArray', Task])
})();
