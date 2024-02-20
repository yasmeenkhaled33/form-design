import "./formstyle.css"
export default function Modal ({isvisible,error=null}) {
    if(isvisible===true) {
        return (
            <div className="modal">
                <div className="modal-content">
                    <h1 style={{color:error!=null?"red":"green"}}>{error!=null?error:"The Form Has Been Submitted successfully"}</h1>
                </div>
            </div>
        )
    }else {
        return (<></>)
    }
}