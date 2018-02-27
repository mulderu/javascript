// very simple test for async job
//
// ref : https://justinklemm.com/node-js-async-tutorial/

// async.each
// Include the async package
// Make sure you add "async" to your package.json
async = require("async");
  
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

// very simple async.each : async generals
(function() {
  let items  = [1,2,3,4,'A','B','C'];

  async.each(items,
    function(item, callback){
      let intVal = getRandomInt(1,10);
      setTimeout(function() { 
        console.log('AAA : ' + item + ", " + intVal);
        callback(null); }, intVal*100);
    },
    function(err){
      console.log("AAA end:", err);
      //doSomethingOnceAllAreDoneA(err);
    }
  );
})();
//---------------------------------------

// async.parallel
(function() {
  let asyncTasks = [];
  let items  = [1,2,3,4,'A','B','C'];
  
  items.forEach(function(item){
    asyncTasks.push(function(callback){
      let intVal = getRandomInt(10, 20);
      setTimeout(function() { 
        console.log('BBB : ' + item + ", " + intVal);
        callback(null, [item, intVal]); }, intVal*100);
    });
  });
  // more
  asyncTasks.push(function(callback){
    let intVal = getRandomInt(10, 20);
    setTimeout(function() { 
      console.log('CCC : ' + intVal);
      callback(null, ['CCC', intVal]); }, intVal*100);
  });
  // Now we have an array of functions doing async tasks
  // Execute all async tasks in the asyncTasks array
  async.parallel(asyncTasks, function(err, results){
    // All tasks are done now
    // doSomethingOnceAllAreDone();
    console.log('LAST', err, results);
  });
})();

//---------------------------------------

// async.serial
(function() {
  let asyncTasks = [];
  let items  = [1,2,3,4,'A','B','C'];

  asyncTasks.push(function(callback){
    let intVal = getRandomInt(20, 22);
    setTimeout(function() { 
      console.log('S-FIRST : ' + intVal);
      callback(null, ['S-FIRST', intVal]); }, intVal*100);
  });
  
  // more
  items.forEach(function(item){
    asyncTasks.push(function(callback){
      let intVal = getRandomInt(1,3);
      setTimeout(function() { 
        console.log('S-GEN : ' + item + ", " + intVal);
        callback(null, [item, intVal]); }, intVal*100);
    });
  });
  async.series(asyncTasks, function(err, results){
    // All tasks are done now
    // doSomethingOnceAllAreDone();
    console.log('S-LAST', err, results);
  });
})();

/**
 * 
  
node study/utility/async-job.js
AAA : B, 2
AAA : 4, 3
AAA : 3, 4
AAA : C, 4
AAA : A, 8
AAA : 1, 9
AAA : 2, 9
AAA end: null
CCC : 10
BBB : 3, 12
BBB : 1, 14
BBB : 2, 15
BBB : 4, 16
BBB : B, 16
BBB : C, 16
BBB : A, 19
LAST null [ [ 1, 14 ],
  [ 2, 15 ],
  [ 3, 12 ],
  [ 4, 16 ],
  [ 'A', 19 ],
  [ 'B', 16 ],
  [ 'C', 16 ],
  [ 'CCC', 10 ] ]
S-FIRST : 21
S-GEN : 1, 2
S-GEN : 2, 2
S-GEN : 3, 2
S-GEN : 4, 1
S-GEN : A, 1
S-GEN : B, 1
S-GEN : C, 1
S-LAST null [ [ 'S-FIRST', 21 ],
  [ 1, 2 ],
  [ 2, 2 ],
  [ 3, 2 ],
  [ 4, 1 ],
  [ 'A', 1 ],
  [ 'B', 1 ],
  [ 'C', 1 ] ]

 */