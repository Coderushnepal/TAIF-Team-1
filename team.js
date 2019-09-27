var obj1 = new Object();
obj1.name = 'Salina';
obj1.role = 'developer';
obj1.founder = true;

var obj2 = new Object();
obj2.name = 'Simran';
obj2.role = 'developer';
obj2.founder = false;

var obj3 = new Object();
obj3.name = 'Aarati';
obj3.role = 'data analyst';
obj3.founder = false;

var obj4 = new Object();
obj4.name = 'Sadikshya';
obj4.role = 'designer';
obj4.founder = false;

var team = [obj1, obj2, obj3, obj4];
for(i=0; i<4;i++){
    console.log(team[i].name + ' is a ' + team[i].role +'.' );
}

for(i=0; i<4;i++){
    if(team[i].role == 'data analyst'){
        console.log(team[i].name + ' is a ' + team[i].role +'.' );
    }
}

var oldRole = '';
for(i=0; i<4;i++){
    if(team[i].founder == true){
        oldRole = team[i].role;
        team[i].role = 'CTO';
        console.log(team[i].name + ' is a ' + team[i].role +'.' ); 
        break;
        
    
    }
}

 var obj5 = new Object();
 obj5.name = 'Ambika';
 obj5.role = oldRole;
 obj5.founder = false;
 console.log(' The  name of new employee' + ' is a ' + obj5.name + ' and her role is ' + obj5.role + '.' );

 team.push(obj5);
