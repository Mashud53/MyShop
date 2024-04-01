import { Helmet } from "react-helmet-async";
import Loader from "../../../Components/Loader/Loader";
import useProducts from "../../../Hooks/useProducts";
import { MdOutlineDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const ManageProduct = () => {
    const [allProducts, isLoading, refetch] = useProducts();
    


   
    const handleDelete = (id) => {
        console.log(id)
        refetch()
    }

    if (isLoading) return <Loader></Loader>
    return (
        <div>
            <Helmet><title>Dashboard | Manage Product</title></Helmet>
            <div className="text-center py-8 border-b-2 font-bold text-xl"><h2>Manage Pruducts</h2></div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    #
                                </label>
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allProducts?.map((product, index) => <tr key={product._id}>
                            <th>
                                <label>
                                    {index + 1}
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-square w-12 h-12">
                                            <img src={product.image1} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>

                                </div>
                            </td>
                            <td>
                                {product.name}
                                <br />
                                <span className="badge badge-ghost badge-sm">{product._id}</span>
                            </td>
                            <td>{product.price1}</td>
                            <th>
                               <Link to={`/dashboard/updateProduct/${product._id}`}>
                                    <button className="btn text-rose-500 hover:text-white bg-cyan-400 hover:bg-cyan-500 btn-xs"><FaEdit className=""></FaEdit></button>
                                </Link>
                                
                                <button onClick={() => handleDelete(product._id)} className="btn text-rose-500 hover:text-white bg-cyan-400 hover:bg-rose-500 btn-xs"><MdOutlineDelete className=""></MdOutlineDelete></button>
                               
                            </th>
                        </tr>)}


                    </tbody>
                    {/* foot */}
                   

                </table>
            </div>

        </div>
    );
};

export default ManageProduct;