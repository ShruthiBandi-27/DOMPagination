var div1 = document.createElement('div');

var h3 = document.createElement('h3');
h3.innerHTML = "DOM PAGINATION";

var table = document.createElement('table');
table.style.border = '2px solid black';
table.style.borderCollapse = 'collapse';

var tbody = document.createElement('tbody');

table.style.width = "100%";

var row = document.createElement('tr');

var th1 = document.createElement('th');
th1.style.padding = '10px';
th1.innerHTML = "ID";
var th2 = document.createElement('th');
th2.innerHTML = "Name";
var th3 = document.createElement('th');
th3.innerHTML = "Email";

//Pagination 
var div2 = document.createElement('div');
div2.setAttribute('class','pagination');

var request = new XMLHttpRequest();
request.open('GET','https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json',true);
request.send();
request.onload = function(){
    
    var data = JSON.parse(this.response);
    var lastID = 0;
    
    //displaying 1st 10 records
    foo(1,'1');

    function createtrtd(elename,value=""){
        var element = document.createElement(elename);
        element.setAttribute('id','tabletd');
        element.innerHTML = value;
        return element;
    }
    
    //creating table rows with data
    function foo(j,str){
        c=0;
        // condition for previous button
        if(str==='previous' && lastID != 0){
            j = lastID/10;
            if(j!=1)
                j--;
        }
        tbody.innerHTML = '';
        for(let i=(j-1)*10; c<10; i++){
        // document.body.append(data[i].id + " " + data[i].name + " " + data[i].email +'<br>');
        c++;
        var tbodytr = document.createElement('tr');
        tbodytr.setAttribute('id','tablebody');

        var td1 = createtrtd('td',data[i].id);
        td1.style.border = '2px solid black';
        td1.style.padding = '10px';

        var td2 = createtrtd('td',data[i].name);
        td2.style.border = '2px solid black';

        var td3 = createtrtd('td',data[i].email);
        td3.style.border = '2px solid black';

        tbodytr.append(td1,td2,td3);
        tbody.append(tbodytr);
        }

        lastID = td1.innerHTML;
    }

    // Changing buttons color on clicking
    function buttonColor(id){
        document.getElementById(id).style.backgroundColor = 'blue';
            document.getElementById(id).style.color ='white';
            for(let j =2;j<=13;j++){
                if(id!=j){
                    document.getElementById(j).style.color = 'blue';
                    document.getElementById(j).style.backgroundColor = 'white';
                }
            }  
    }
    
    
    
    //first,Previous,Last buttons
    for(let i= 11;i<=13;i++){
        
        var OtherButton = document.createElement('button');
        OtherButton.setAttribute('id',i);
        OtherButton.type = "button";
        OtherButton.style.backgroundColor = 'white';
        OtherButton.style.color = 'blue';
        OtherButton.style.padding = '8px';
        OtherButton.style.border = '1px solid gray';
        OtherButton.style.cursor = 'pointer';

        OtherButton.addEventListener('click',function(){
           
            if(i===11)
                foo(1,'first');
            else if(i==13){
                foo(10,'last');
            }
            else 
                foo(1,'previous');
            
            buttonColor(i);
              
        })
        if(i===11){
            OtherButton.innerHTML = 'First';
            OtherButton.style.backgroundColor = 'blue';
            OtherButton.style.color = 'white';
        }
        else if(i===12)
            OtherButton.innerHTML = 'Previous';
        else
            OtherButton.innerHTML = 'Last';
       
        div2.append(OtherButton);
        
    }
   
    //1 - 10 buttons
    for(let i=2;i<=10;i++){
        var button = document.createElement('button');
        button.setAttribute('id',i);
        button.type="button";
        button.addEventListener('click',function(){
            foo(i,'i');
            buttonColor(i);
        });
        //button.setAttribute('onclick',foo(2));
        button.innerHTML = i;
        button.style.backgroundColor = 'white';
        button.style.color = 'blue';
        button.style.border = '1px solid gray';
        button.style.padding = '8px';
        button.style.cursor = 'pointer';
        div2.append(button);
        
        // document.body.append(button);
    }

    //appending data
    row.append(th1,th2,th3);
    table.append(row,tbody);
    div1.append(h3,table);
    var br = document.createElement('br');
   
    document.body.append(div1,br,div2);
    document.body.append(div2);
      
}



