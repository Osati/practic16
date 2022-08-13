var fname,lname,email,table_ref,insert_row,fname_col,lname_col,email_col,action_col;

function createNewData(){
   fname = document.getElementById("fname").value;
   lname = document.getElementById("lname").value;
   email = document.getElementById("email").value;
   table_ref = document.getElementById("info_table").getElementsByTagName("tbody")[0];
   insert_row = table_ref.insertRow(table_ref.rows.length); 
   fname_col = insert_row.insertCell(0).innerHTML = fname;
   lname_col = insert_row.insertCell(1).innerHTML = lname;
   email_col = insert_row.insertCell(2).innerHTML = email;
   action_col = insert_row.insertCell(3).innerHTML = '<td><a class="btn btn-success" >Edit</a><a class="btn btn-danger" >Delete</a></td>';
   
   
}

