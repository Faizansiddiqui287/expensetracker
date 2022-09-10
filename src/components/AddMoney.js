import React, { useState } from 'react';
import './Popup.css';



const AddMoney = () => {
    const [popup, setPop] = useState(false); //TO show the first pop
    let [count, setCount] = useState(0); // set the amount to Add money
    const [val, setVal] = useState(0); //To get the amount from input 
    const [isShown, setIsShown] = useState(false) // To show the + component
    const [newPop, setNewPop] = useState(false) // second popup
    const [debit, setDebit]= useState("") // To get the expense amount
    const [reason, setReason] = useState(""); // Reason of expense
    const [list,setList]=useState([]) //List of expense data in array

    


    const handleClickOpen = () => {
        setPop(!popup)
    }
    const closePopup = () => {
        setPop(false)
    }

    const handleNewClickOpen = () => {
        setNewPop(!newPop)
    }

    const closeNewPopup = () => {
        setNewPop(false)
    }

    let getVal = (e) => {
        setVal(e.target.value)
    }
    let increment = () => {
        setCount(count += parseInt(val))
        // count? setCount(count += parseInt(val)) : setCount(count -=parseInt(debit));
        setIsShown(current => !current);
    }
    const handleSubmitData =(e)=>{
        e.preventDefault();
        // console.log(debit, reason)
        const formData = {debit,reason}
        let t = count-parseInt(debit)
        setCount(t);
        if(debit&&reason){
            setList((ls)=>[...ls,formData])
            setDebit()
            setReason()
        }
    }


    




   
    return (
        <div>
            <div>
                <button className="btnAdd" onClick={handleClickOpen}>Add Money : ₹{count}/-</button>
                {isShown && (
                    <button type="button" onClick={handleNewClickOpen} className="btn btn-dark addExpense">+</button>
                )}
                <div>
                    {
                        popup ?
                            <div className="main">
                                <div className="popup">
                                    <div className="popup-header">
                                        <h1>Submit</h1>
                                        <h1 onClick={closePopup}>X</h1>
                                    </div>
                                    <div>
                                        <div>Amount : <input type="number" onChange={getVal} /></div>
                                        <button type="button" className="btn btn-info" onClick={increment}>Add Money</button>
                                    </div>
                                </div>
                            </div> : ""
                    }
                </div>


                {/* New Pop code Starts from Here */}
                <div>
                    {
                        newPop ?
                            <div className="main">
                                <div className="popup">
                                    <div className="popup-header">
                                        <h1 onClick={closeNewPopup}>X</h1>
                                    </div>
                                    <div>
                                        <div><h2>New transaction</h2></div>
                                        <form onSubmit={handleSubmitData} >
                                        <div>Amount: <input type="number" name="debit" value={debit} onChange={(e)=>setDebit(e.target.value)}/></div>
                                        <div>For: <input type="text" name='reason' value={reason} onChange={(e)=>setReason(e.target.value)}/></div>
                                        <div>
                                        <button type="submit"  className="btn btn-dark">Paid</button>
                                        </div>
                                        </form>
                                    </div>
                                    
                                </div>
                            </div> : ""
                    }
                </div>
                
                
            </div>
            <div className='salary'>
                    <div>Salary</div>
                    <div>₹{count}/-</div>
                </div>
                <div className='userList' >  {
                    list.map((userLists,index)=>{
                        // console.log(a);
                       return  (<div key={index}  >
                            <div className="userlistss">{userLists.reason}</div>
                            <div className="userlistss">₹{userLists.debit}/-</div>
                        </div>)
                    })
                }
                </div>

        </div>
    );
}

export default AddMoney;
