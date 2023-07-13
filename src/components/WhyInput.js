import { useState } from "react";

const WhyInput = (props) => {
    const [value, setValue] = useState("");

     // Functions   
    const handleSubmit = (e) => {
        e.preventDefault();
        if (value === "") {
            return;
        }
        props.createWhyItem(value);
        setValue("");
    }

    const handleStatus = (e) => {
        props.setStatus(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder="Why should..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />
        <button className="pressable-button" onClick={handleSubmit}>Create</button>
        <select className="state-select" onChange={handleStatus}>
              <option value="all">All</option>
              <option value="uncompleted">Uncompleted</option>
              <option value="completed">Completed</option>
            </select>
    </form>
    );
}

export default WhyInput;