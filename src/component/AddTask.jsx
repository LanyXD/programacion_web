import { useState } from "react";

function AddTask() {
    const [id, setId] = useState("")
    const [name, setName] = useState("")

    return(
        <div className="add_section">
            <div className="data_layout">
                <label>ID: </label>
                <input 
                    type="text"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    className="id_input"  
                />

                <label>Name: </label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="name_input"
                />
            </div>

            <div className="buttons_layout">
                <button>Add</button>
                <button>Delete</button>
            </div>


        </div>
    )
}

export default AddTask;
