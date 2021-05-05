var div1 = document.createElement('div');

var table = document.createElement('table');

var tbody = document.createElement('tbody');

table.style.width = "100%";

var row = document.createElement('tr');

var th1 = document.createElement('th');
th1.innerHTML = "ID";
var th2 = document.createElement('th');
th2.innerHTML = "Name";
var th3 = document.createElement('th');
th3.innerHTML = "Email";

//Pagination 
var div2 = document.createElement('div');
div2.setAttribute('class','pagination');

function createtrtd(elename,value=""){
    var element = document.createElement(elename);
    element.innerHTML = value;
    return element;
}

var request = new XMLHttpRequest();
request.open('GET','https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json',true);
request.send();
request.onload = function(){
    var data = JSON.parse(this.response);

    function foo(j){
        c=0;
        for(let i=(j-1)*10; c<10; i++){
        // document.body.append(data[i].id + " " + data[i].name + " " + data[i].email +'<br>');
        c++;
        var tbodytr = document.createElement('tr');
        var td1 = createtrtd('td',data[i].id);
        var td2 = createtrtd('td',data[i].name);
        var td3 = createtrtd('td',data[i].email);
        tbodytr.append(td1,td2,td3);
        tbody.append(tbodytr);
        }
    }
    for(let i=1;i<=10;i++){
        var button = document.createElement('button');
        button.type="button";
        button.addEventListener('click',function(){
            foo(i);
        });
        //button.setAttribute('onclick',foo(2));
        button.innerHTML = i;
        div2.append(button);
        // document.body.append(button);
    
    }
    
    row.append(th1,th2,th3);
    table.append(row,tbody);
    div1.append(table);
    document.body.append(div1,div2);
   
}