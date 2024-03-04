import { BsGraphUp } from "react-icons/bs";
import MenuItem from "./Sidebar/MenuItem";
import { MdAddHomeWork, MdOutlineAddBusiness } from "react-icons/md";
import { TbHomeCog } from "react-icons/tb";
import { PiListMagnifyingGlassDuotone } from "react-icons/pi";
import { FaListCheck } from "react-icons/fa6";
import { FaUserCog } from "react-icons/fa";

const AdminMenu = () => {
    return (
        <>
            <MenuItem
                icon={BsGraphUp}
                label='Statistics'
                address='/dashboard'
            />
            <MenuItem
                icon={MdOutlineAddBusiness}
                label='Add Product'
                address='add-product'
            />
            <MenuItem
                icon={MdAddHomeWork}
                label='Add Property'
                address='add-property'
            />
            <MenuItem
                icon={PiListMagnifyingGlassDuotone}
                label='Manage Product'
                address='/dashboard'
            />
            <MenuItem
                icon={TbHomeCog}
                label='Manage Property'
                address='/dashboard'
            />
            <MenuItem
                icon={FaUserCog}
                label='Manage User'
                address='manage-users'
            />
            <MenuItem
                icon={FaListCheck}
                label='Order'
                address='add-property'
            />
        </>
    );
};

export default AdminMenu;