
var admin = require("firebase-admin");

var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://fir-ab471-default-rtdb.firebaseio.com"
});

var db = admin.database();
var ref = db.ref();
ref.once("value", function (snapshot) {
  console.log(snapshot.val());
});

const usersRef = ref.child('kalyan');
usersRef.set({
  open: {
    sutta: {
      num: "1",
        rupee : '10'
    },
    patti: {
      sp: {
        num: "123",
        rupee : '10'
      },
      dp: {
        num: "122",
        rupee : '10'
      },
      tp: {
        num: "111",
        rupee : '10'
      }
    },
    

  },
  close: {
    sutta: {
      num: "1",
        rupee : '10'
    },
    patti: {
      sp: {
        num: "123",
        rupee : '10'
      },
      dp: {
        num: "122",
        rupee : '10'
      },
      tp: {
        num: "111",
        rupee : '10'
      }
    },
    
  }
});

/*var database = admin.database()
let node = 'temp'
const node2 = ref.child(node)
 database.ref(node).update({
   node2: {
       atharv : 'vedu'
     }
 })*/

/*database.ref(node).orderByValue().equalTo().once('value', (snapshot) => {
    var snapshotVal = snapshot.val()
    console.log(snapshotVal)
})*/

