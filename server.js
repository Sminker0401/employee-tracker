const inquirer = require("inquirer") 
const mysql = require('mysql2')
// const app = express()
const {printTable} = require("console-table-printer")
// app.use(express.json())
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
  
    password: 'Class@121',
    database: 'employee_db'
  },
  console.log(`Connected to the employee_db database.`)
);

db.connect(function(){
  menu()
})

function menu() {
  inquirer.prompt([{
    type:"list",
    message:"Please choose one option",
    name:"option",
    choices:["view departments", 
            "view roles",
            "view employees",
            "add a department",
            "add a role",
            "add an employee",
            "update an employee"
  ]

  }])
.then(response =>{
  if(response.option==="view departments") {
    viewDepartment()
  }
  else if(response.option==="view roles") {
    viewRoles()
  }
  else if(response.option==="view employees") {
    viewEmployees()
  }
  else if(response.option==="add a department") {
    addDepartment()
  }
  else if(response.option==="add a role") {
    addRole()
  }
  else if(response.option==="add an employee") {
    addEmployee()
  }
  else if(response.option==="update an employee") {
    updateEmployee()
  }
})
}

function addEmployee() {
  db.query("select title as name,id as value from role",function(err,rows){
   db.query("select concat(first_name,' ',last_name) as name, id as value from employee", function(err,employeeData){

    inquirer.prompt([{
      type: 'input',
      name: 'first_name',
      message: 'first name'
    },{
      type: 'input',
      name: 'last_name',
      message: 'last name'
    },{
      type: 'list',
      name: 'role',
      choices: data,
      message: "select role"
    },{
      type: 'list',
      name: 'employee',
      choices: employeeData,
      message: "select manager"
    }]).then(function(response){
      db.query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES(?,?,?,?)",[response.first_name,response.last_name,response.role,response.employee], function (err){
        viewEmployees()
      })
    })
   }) 
  
  })
}


function addRole() {
  db.query("select name, id as value from department", function(err,rows){

 
  inquirer.prompt([{
    type: 'input',
    name: 'role',
    message: 'add the role you want to create'
  },{
    type: 'input',
    name: 'salary',
    message: 'enter the salary'
  },{
    type: 'list',
    name: 'department',
    choices: data,
    message: "choose the role department"
  }]).then(function(response){
    db.query("INSERT INTO role (title,salary,department_id) VALUES(?,?,?)",[response.role,response.salary,response.department],function(err){
      viewRoles()
    })
  })
})
}

function addDepartment() {
  inquirer.prompt([{
    type: 'input',
    name: 'department',
    message: 'add the name of the department you want to add'
  }]).then(function(response){
    db.query("INSERT INTO department (name) VALUES(?)",[response.department],function(err){
      viewDepartment()
        })
  })
}

function viewEmployees() {
  db.query("select * from employee", function(err,rows){
    printTable(rows)
    menu()
  })
}

function viewRoles() {
  db.query("select * from role", function(err, rows){
    printTable(rows)
    menu()
  })
}

function viewDepartment() {  
      db.query("select * from department", function(err,rows){
        printTable(rows)
        menu()
      })
}