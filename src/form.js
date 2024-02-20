import { useState } from "react"
import Modal from './modal';
import Mycom from "./Mycom";
import { inputscontext } from "./contexts/inputcontext";
import "./formstyle.css"
export default function Form () {
    const[inputs,setinputs]=useState({name:"",phone:"",age:"",employee:false,salary:""})
    const[showmodal,setshowmodal]=useState(false)
    const[errormsg,seterrormsg]=useState(null)
    function handelclicked(event) {
            event.preventDefault() 
            setshowmodal(true)
            seterrormsg(null)
            if(inputs.age<18||inputs.age>100) { 
                seterrormsg("the age is not allowed")
            }else if(inputs.phone.length<10||inputs.phone.length>13) {
                seterrormsg("the phone number is not allowed")
            }                                                                                              
    }
    const btndisabled=inputs.name===""||inputs.phone===""||inputs.age==="";
    function handeldiv() {
        if(showmodal===true) {
            setshowmodal(false)
        }
    }
    function handeagelinput(event) {
        return (
            setinputs({...inputs,age:event})
        )
    }
    function handelnameinput(event) {
        return (
            setinputs({...inputs,name:event})
        )
    }
    function handelphoninput(event) {
        return (
            setinputs({...inputs,phone:event})
        )
    }
    return (
        <div onClick={handeldiv}>
            <form style={{width:"700px",borderRadius:"10px",textAlign:"center",margin:"auto",backgroundColor:"rgb(51,0,170",padding:"20px"}}>
                <h1 style={{padding:"10px",color:'white'}}>Requesting a Loan</h1>
                <hr/>
                <inputscontext.Provider value={{name:"name:",value:inputs.name,change:handelnameinput}}>
                    <Mycom/>
                </inputscontext.Provider>
                <inputscontext.Provider value={{name:"phone number:",value:inputs.value,change:handelphoninput}}>
                    <Mycom/>
                </inputscontext.Provider>
                <inputscontext.Provider value={{name:"age",value:inputs.age,change:handeagelinput}}>
                    <Mycom/>
                </inputscontext.Provider>
                <label >Are You an employee?</label>
                <input style={{width:"30px",height:"30px"}} type="checkbox" checked={inputs.employee} onChange={(event)=>{setinputs({...inputs,employee:event.target.checked})}}/>
                <label >Salary</label>
                <select style={{width:"100%",height:"30px"}} value={inputs.salary} onChange={(event)=>{setinputs({...inputs,salary:event.target.value})}}>
                    <option>less than 500$</option>
                    <option>above 1000$</option>
                    <option>above 2500$</option>
                </select>
                <input disabled={btndisabled} className={btndisabled?"disabled":""} onClick={handelclicked} style={{width:"70px",fontSize:"20px",border:"none",borderRadius:"10px",cursor:"pointer",height:"40px",backgroundColor:"rgb(211,0,127",color:"white",marginTop:"20px"}} type="submit" value="submit"/>
            </form>
            <Modal isvisible={showmodal} error={errormsg}/> 
        </div>
    )
}