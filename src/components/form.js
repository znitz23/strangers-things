import React from "react"


const CreateForm = () => {
    return (
        <form>
            <input type="text" placeholder="Title" value={''}></input>
            <input type="text" placeholder="Description" value={''}></input>
            <input type="text" placeholder="Author" value={''}></input>
        </form>
    )
}
export default CreateForm;