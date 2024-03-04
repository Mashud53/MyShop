import { BsGraphUp } from "react-icons/bs";
import MenuItem from "./Sidebar/MenuItem";
import { MdAddHomeWork, MdOutlineAddBusiness } from "react-icons/md";
import { PiListMagnifyingGlassDuotone } from "react-icons/pi";
import { TbHomeCog } from "react-icons/tb";
import { HiUserGroup } from "react-icons/hi2";
import { FaListCheck } from "react-icons/fa6";


const HostMenu = () => {
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
                address='add-property'
            />
            <MenuItem
                icon={TbHomeCog}
                label='Manage Property'
                address='add-property'
            />
            <MenuItem
                icon={HiUserGroup}
                label='All User'
                address='add-property'
            />
            <MenuItem
                icon={FaListCheck}
                label='Order'
                address='add-property'
            />
        </>
    );
};

export default HostMenu;