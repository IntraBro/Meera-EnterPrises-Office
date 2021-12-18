var firebaseConfig = {
    apiKey: "AIzaSyDS5jkd3xKYbe29URtj6uD0hdVGU969mdY",
    authDomain: "center-3fd92.firebaseapp.com",
    projectId: "center-3fd92",
    storageBucket: "center-3fd92.appspot.com",
    messagingSenderId: "352464652127",
    appId: "1:352464652127:web:caa9bc9f112de23aa858ea",
    measurementId: "G-14NTWQ1NQ0"
};
firebase.initializeApp(firebaseConfig);
const database = firebase.database()



function submit_inq(){

    var date = document.getElementById('date').value
    // var name = document.getElementById('name').value
    var inquiry = document.getElementById('inquiry').value
    var company = document.getElementById('company').value
    var offer = document.getElementById('offer').value
    var value = document.getElementById('offer-val').value
    // if (date == "" & inquiry=="" & company)


    var database_ref = database.ref()
    
    database_ref.child('offer-inquiry/' + date).set({
        name : name,
        date: date,
        inquiry : inquiry,
        company : company,
        offer : offer,
        offer_value : value
    })
    refresh()
    window.location.reload();

       
    
}

window.onload = refresh()

function refresh(){
    // var inp = document.getElementById('assign_text').value
    var ref = database.ref("offer-inquiry");
    ref.on("value", function(snapshot){
    snapshot.forEach(function(childSnapshot){

        // var data = childSnapshot.val();
        // // console.log(data)
        // console.log(data.name)
        // var tag = document.createElement("p");
        // var text = document.createTextNode(data.name);
        // tag.appendChild(text);
        // var element = document.getElementById("col-name");
        // element.appendChild(tag);

        var data = childSnapshot.val();
        // console.log(data)

        console.log(data.date)
        var tag = document.createElement("p");
        var text = document.createTextNode(data.date);
        tag.appendChild(text);
        var element = document.getElementById("col-date");
        element.appendChild(tag);

        var data_inq = childSnapshot.val();
        // console.log(data)
        console.log(data.inquiry)
        var tag = document.createElement("p");
        var text = document.createTextNode(data.inquiry);
        tag.appendChild(text);
        var element = document.getElementById("col-inq");
        element.appendChild(tag);

        var data_comp = childSnapshot.val();
        // console.log(data)
        console.log(data.company)
        var tag = document.createElement("p");
        var text = document.createTextNode(data.company);
        tag.appendChild(text);
        var element = document.getElementById("col-comp");
        element.appendChild(tag);

        var data_offer = childSnapshot.val();
        // console.log(data)
        console.log(data.company)
        var tag = document.createElement("p");
        var text = document.createTextNode(data.offer);
        tag.appendChild(text);
        var element = document.getElementById("col-offer");
        element.appendChild(tag);

        var data_value = childSnapshot.val();
        // console.log(data)
        console.log(data.company)
        var tag = document.createElement("p");
        var text = document.createTextNode(data.offer_value);
        tag.appendChild(text);
        var element = document.getElementById("col-value");
        element.appendChild(tag);
    })
    });
}

function del(){
    var del = document.getElementById('date_del').value;
    let ref = database.ref('offer-inquiry')

    ref.child(del).remove()
    window.location.reload()
}