const firebaseConfig = {
  apiKey: "AIzaSyDDnH4GLI820GnXPqmmHbV4uanmCS68u84",
  authDomain: "dawnliken-cb0f0.firebaseapp.com",
  databaseURL: "https://dawnliken-cb0f0-default-rtdb.firebaseio.com",
  projectId: "dawnliken-cb0f0",
  storageBucket: "dawnliken-cb0f0.appspot.com",
  messagingSenderId: "907734851791",
  appId: "1:907734851791:web:699a50d76ef6c536b157ba",
  measurementId: "G-91VE8DJGLL"
};

firebase.initializeApp(firebaseConfig);
database = firebase.database();


function sendMsg(){
    let date = new Date();
    let msg = $("#message").val();
    database.ref("msgs/"+date.getTime()).set(msg);
    $("#message").val("");
}

function loadMsgs(){
    database.ref("msgs").on("value", callback);
    function callback(snapshot){
        $("#chatlist").html("");
        console.log(snapshot);
        snapshot.forEach(function(child){
             $("#chatlist").append("<div>"+child.val()+"</div>");
        });
        $("#chatlist").scrollTop(15000);
    }
}
