(function(){
    function Task($firebaseArray){

        var ref = firebase.database().ref().child("tasks");
        var tasks = $firebaseArray(ref);
        
        
       
        return {
            all: tasks,
            
            addTask: function(){
                    tasks.$add({ task: this.taskName }).then(function(ref) {
                      var id = ref.key;
                      console.log("added record with id " + id);
                      tasks.$indexFor(id); // returns location in the array
                    });
                
            }
        };

    }
    
    
    angular
        .module('Blocitoff')
        .factory('Task', ['$firebaseArray', Task])
})();
