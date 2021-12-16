import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import {useState,useEffect} from 'react';
import Footer from "./components/Footer";
//import About from "./components/About";
import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from "./components/Account/Login";
import Profile from "./components/Account/Profile";
import Home from "./components/Home/Home";
import About from "./components/Home/About";
import {Nav} from 'react-bootstrap';





// const x = false

// const App =()=>{
//   const [showAddTask,setShowAddTask]=useState(false)

//   const [tasks,setTasks]=useState([])

//   useEffect(() => {
//     const getTasks = async ()=>{
//       const tasksFromServer = await fetchTasks()
//       setTasks(tasksFromServer)
//     }
//    getTasks()
//   },[])

//   const fetchTasks = async()=>{
//     const res= await fetch('http://localhost:5000/tasks')
//     const data= await res.json()
//     console.log(data)
//     return data
//   } 

//     const addTask=async(task) => {
//       // const id=Math.floor(Math.random()*10000)+1
//       // const newTask ={id,...task}
//       // setTasks([...tasks,newTask])
//       const res=await fetch('http://localhost:5000/tasks',{
//         method:'POST',
//         headers:{
//           'content-type':'application/json',
//         },
//         body:JSON.stringify(task),
//       })
//       const data=await res.json()
//       setTasks([...tasks,data])
//     }

//     const deleteTask =async(id) =>{
//       // console.log('delelte',id);
//       await fetch(`http://localhost:5000/tasks/${id}`,{method:'DELETE'})
//     setTasks(tasks.filter((task)=>task.id!==id))
//     }

//     const toggleReminder =(id)=>{
//       setTasks(
//         tasks.map(
//           (task)=>task.id === id?{...task,reminder:!task.reminder}:task 
//         )
//       )
//     }

//   return (
//     <router>
//     <div className="container">
//      <Header onAdd={()=>setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
//      <LoginButton/>
//      <LogoutButton />
//      {showAddTask && <AddTask onAdd={addTask}/>}
//      {tasks.length>0?(<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>):('No Tasks To Show')}
//      <route path='/' exact render={(props)=>(
//        <>
       
//        </>
//      )}/>
//      <route path='/about' component={About}/>
     
//      <Footer />
//     </div>
//     </router>
//   );
// }


const App = ()=>{
  return (
    <Router>
      <div>
        <Nav variant="tabs">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/Profile">Profile</Nav.Link>
          <Nav.Link href="/About">About</Nav.Link>
        </Nav>
      </div>
      <div>
        <Login />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
    );
  
  
}


// class App extends React.Component{
//   render(){
//     return(
//       <h1>Hello from a class</h1>
//     )
//   }
// }
export default App;
