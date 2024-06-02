import { useOutletContext } from "react-router-dom";


const AddProperty = () => {
    const { setActive } = useOutletContext();
    return (
        <div onClick={()=> setActive(true)}>
            Add Property
        </div>
    );
};

export default AddProperty;