const express = require('express');
const port = process.env.PORT || 3000;
// const User = require('./src/model/user');
const EmployerData = require('./src/model/EmployerData');
const StudentRegisterData = require('./src/model/StudentRegisterData');
const StudentData = require('./src/model/StudentData');
const cors = require('cors');
const bodyparser=require('body-parser');
const jwt = require('jsonwebtoken');
const crypto = require("crypto");
var app = new express();
app.use(cors());
app.use(bodyparser.json());
email='admin123@gmail.com';
password='Admin@123';

app.use(express.urlencoded({ extended: true }));

function verifyToken(req, res, next) {
    if(!req.headers.authorization) {
      return res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    if(token === 'null') {
      return res.status(401).send('Unauthorized request')    
    }
    let payload = jwt.verify(token, 'secretKey')
    if(!payload) {
      return res.status(401).send('Unauthorized request')    
    }
    req.userId = payload.subject
    next()
}

app.post('/login', (req, res) => {
  let user = req.body;

  if(email){
    if(password==user.password){
        let payload = {subject: email+password}
        let token = jwt.sign(payload, 'secretKey')
        res.status(200).send({token})
    }
    else{

      EmployerData.findOne({email: user.email, password: user.password}, function(err, item){
        if(err){
             res.status(401).send('Invalid credentials');
        }
        if(item){
            console.log(item)
             res.send(item);
        }
        else{
          res.status(401).send('Invalid');
        }

      })
    }
  }
})

app.post('/studentlogin', (req, res) => {
    let user = {
      email: req.body.email,
      password: req.body.password
    }

        StudentRegisterData.findOne({email: user.email, password: user.password}, function(err, item){
          if(err){
               res.status(401).send('Invalid credentials');
          }
          if(item){
               res.send(item);
          }
          else{
            res.status(401).send('Invalid');
          }

        })      
})

app.post('/studentsignup/insert', (req,res)=>{
  
  var item = {
    username: req.body.item.username,
    email: req.body.item.email,
    password: req.body.item.password,
    cpassword: req.body.item.password
}

StudentRegisterData.findOne({email:item.email}, function(err,item){
if(item){
  res.status(401).send('User already exists');
}
else{
  var item = {
    username: req.body.item.username,
    email: req.body.item.email,
    password: req.body.item.password,
    cpassword: req.body.item.password
}
  var user = new StudentRegisterData(item);
  user.save();
  res.send(user);
}
})
})

app.post('/signup/insert', (req,res)=>{
  
  var item = {
    username: req.body.item.username,
    email: req.body.item.email,
    password: req.body.item.password,
    cpassword: req.body.item.password
}

EmployerData.findOne({email:item.email}, function(err,item){
if(item){
  res.status(401).send('User already exists');
}
else{
  var item = {
    username: req.body.item.username,
    email: req.body.item.email,
    password: req.body.item.password,
    cpassword: req.body.item.password
}
  var user = new EmployerData(item);
  user.save();
  res.send(user);
}
})
})

app.post('/stdform/insert', (req,res)=>{
  

   var item = {
    fname:req.body.item.fname,
    age:req.body.item.age,
    address:req.body.item.address,
    district:req.body.item.district,
    email:req.body.item.email,
    phno:req.body.item.phno,
    dob:req.body.item.dob,
    gender:req.body.item.gender,
    quali:req.body.item.quali,
    poy:req.body.item.poy,
    skill:req.body.item.skill,
    wstatus:req.body.item.wstatus,
    techtrain:req.body.item.techtrain,
    year:req.body.item.year,
    course:req.body.item.course,
    photo:req.body.item.photo,
}

StudentRegisterData.findOne({email:item.email}, function(err,item){

  if(err){
    res.status(401).send('User email not matching');
    alert('User email not matching');
  }
  if(item){


    var item = {
      fname:req.body.item.fname,
      age:req.body.item.age,
      address:req.body.item.address,
      district:req.body.item.district,
      email:req.body.item.email,
      phno:req.body.item.phno,
      dob:req.body.item.dob,
      gender:req.body.item.gender,
      quali:req.body.item.quali,
      poy:req.body.item.poy,
      skill:req.body.item.skill,
      wstatus:req.body.item.wstatus,
      techtrain:req.body.item.techtrain,
      year:req.body.item.year,
      course:req.body.item.course,
      photo:req.body.item.photo,
  }
  // var str = '';
  // const id = crypto.randomBytes(2).toString("hex");
  // str+=id+item.fname.substring(0,3);
  // console.log(str);

  
    var user = new StudentData(item);
    user.save();
    res.send(user);
  }

})
})

app.get('/adminhome/students',function(req,res){  
  StudentData.find()
              .then(function(students){
                  res.send(students);
              });
});

app.get('/adminhome/students/:id',  (req, res) => {
  
  const id = req.params.id;
    StudentData.findOne({"_id":id})
    .then((student)=>{
      res.send(student);
    });
})

app.put('/adminhome/students/update',(req,res)=>{
  console.log(req.body)
  id=req.body._id,

      fname=req.body.fname,
      age=req.body.age,
      address=req.body.address,
      district=req.body.district,
      email=req.body.email,
      phno=req.body.phno,
      dob=req.body.dob,
      gender=req.body.gender,
      quali=req.body.quali,
      poy=req.body.poy,
      skill=req.body.skill,
      wstatus=req.body.wstatus,
      techtrain=req.body.techtrain,
      year=req.body.year,
      course=req.body.course,
      photo=req.body.photo

  StudentData.findByIdAndUpdate({"_id":id},
                              {$set:{"fname":fname,
                              "age":age,
                              "address":address,
                              "email":email,
                              "phno":phno,
                              "dob":dob,
                              "gender":gender,
                              "quali":quali,
                              "poy":poy,
                              "skill":skill,
                              "wstatus":wstatus,
                              "techtrain":techtrain,
                              "year":year,
                              "course":course,
                              "photo":photo}})
 .then(function(){
     res.send();
 })
})





app.delete('/adminhome/students/remove/:id',(req,res)=>{

 id = req.params.id;
 StudentData.findByIdAndDelete({"_id":id})
 .then(()=>{
     console.log('success')
     res.send();
 })
})




     
  app.listen(port, ()=>{
    console.log("Server is ready at "+port);
});

