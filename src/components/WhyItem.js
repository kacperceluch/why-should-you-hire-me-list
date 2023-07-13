import DoneIcon from "@mui/icons-material/Done";
import ClearIcon from "@mui/icons-material/Clear";
import EditIcon from "@mui/icons-material/Edit";

const WhyItem = (props) => {
    return (
    <div className={props.item.complete === true ? "completed why-list" : "why-list"}>
        <li className={props.item.complete === true ? "completed" : null}>
            {props.item.why}
        </li>
        <div className="btns">
            <DoneIcon className={props.item.complete === true ? "item-btn inactive" : "item-btn completed-btn"} fontSize="large" onClick={() => props.completeWhyItem(props.item.id)}/>
            <EditIcon className={props.item.complete === true ? "item-btn inactive" : "item-btn edit-btn"} fontSize="large" onClick={() => props.updateWhyItem(props.item.id)}/>
            <ClearIcon className={props.item.complete === true ? "item-btn inactive" : "item-btn delete-btn"} fontSize="large" onClick={() => props.deleteWhyItem(props.item.id)}/>
        </div>
    </div>
    )}
    export default WhyItem;