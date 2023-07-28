import "./App.css";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import WhyInput from "./components/WhyInput";
import WhyItem from "./components/WhyItem";
import resume from "./assets/CV-postac.svg";
import "./fonts/ClashDisplay-Bold.ttf";

function App() {

    const [whyItems, setWhyItems] = useState(
        [{why: "Critical thinker",
        complete: false,
        id: 1},
        {why: "Great listener",
        complete: false,
        id: 2},
        {why: "Eye for design",
        complete: false,
        id: 3},
        {why: "Head full of ideas",
        complete: false,
        id: 4},
        {why: "Very good fellow",
        complete: false,
        id: 5}]
    );
    const [status, setStatus] = useState("all");
    const [filteredWhy, setFilteredWhy] = useState([]);

    // Use Effect
    useEffect(() => {
        filterWhy();
    }, [whyItems, status]);

    // Functions
    const createWhyItem = (why) => {
        const newWhyItems = [...whyItems, {why, complete: false, id: nanoid()}];
        setWhyItems(newWhyItems);
    };

    const deleteWhyItem = (id) => {
        const newWhyItems = [...whyItems];
        const itemIndex = newWhyItems.findIndex((e) => e.id === id);
        newWhyItems.splice(itemIndex, 1);
        setWhyItems(newWhyItems);
    };

    const completeWhyItem = (id) => {
        const newWhyItems = [...whyItems];
        const itemIndex = newWhyItems.findIndex((e) => e.id === id);
        newWhyItems[itemIndex].complete === false
        ? (newWhyItems[itemIndex].complete = true)
        : (newWhyItems[itemIndex].complete = false);
        setWhyItems(newWhyItems);
    };
    
    const updateWhyItem = (id) => {
        const newWhyItems = [...whyItems];
        const itemIndex = newWhyItems.findIndex((e) => e.id === id);
        const item = newWhyItems[itemIndex];

        let newItem = prompt(`Update ${item.why}?`, item.why);
        let whyObj = { why: newItem, complete: false };
        newWhyItems.splice(itemIndex, 1, whyObj);
        if (newItem === null || newItem === "") {
        return;
        } else {
        item.why = newItem;
        }
        setWhyItems(newWhyItems);
    };

    const filterWhy = () => {
        switch(status) {
            case "completed":
                setFilteredWhy(whyItems.filter(why => why.complete === true));
                break;
            case "uncompleted":
                setFilteredWhy(whyItems.filter(why => why.complete === false));
                break;
            default:
                setFilteredWhy(whyItems);
                break;
        };
    };

    return (
        <div>
        <div className="title">
            <h1>Why Should You Hire Me List</h1>
            <img src={resume} className="resume" alt="resume character"/>
        </div>
        <WhyInput
            createWhyItem={createWhyItem}
            setStatus={setStatus}
        />
        {filteredWhy.map((item, index) => (
            <WhyItem
                key={index}
                item={item}
                deleteWhyItem={deleteWhyItem}
                completeWhyItem={completeWhyItem}
                updateWhyItem={updateWhyItem}
            />
        ))}
        </div>
    );
}

export default App;
