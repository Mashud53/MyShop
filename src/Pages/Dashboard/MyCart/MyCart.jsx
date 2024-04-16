import { Helmet } from "react-helmet-async";
import useCart from "../../../Hooks/useCart";
import { MdOutlineDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axiosSecure from "../../../api";



const MyCart = () => {
    const [cart, , refetch] = useCart();
   
    const totalPrice = cart.reduce((total, item)=>total + parseFloat(item.price), 0).toFixed(2)
    console.log(totalPrice)
    
    const handleDelete = async (id)=>{
        
        Swal.fire({
            title: "Are you sure?",
            text: "You want to delete it!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${id}`)
                .then(res =>{
                    console.log(res.data)
                    if(res.data.deletedCount > 0){
                        Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                showConfirmButton: false,
                                timer: 1500
                              });
                    }
                    refetch()
                })
            
            }
          });
    }


    console.log(cart)
    return (
        <div className="font-catamaran">
            <Helmet><title>Delux mart | Cart</title></Helmet>
            <div className="overflow-x-auto pt-10">
                <h2 className="text-3xl font-bold text-center">My Cart</h2>
                <div className="overflow-x-auto">

                    <table className="table">

                        <thead>
                            <tr>
                                <th>

                                </th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart?.map((item, index) => <tr key={item._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <Link to={`/product/${item.productId}`}>
                                                <div className="mask mask-square w-12 h-12">
                                                    <img src={item.image} alt="Product Photo" />
                                                </div>
                                            </Link>
                                        </div>

                                    </div>
                                </td>
                                <td>
                                    <Link to={`/product/${item.productId}`}>{item.name}</Link>
                                </td>
                                <td>{item.price} <span className="ml-1">&#x62f;&#x2e;&#x625;</span></td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">Buy</button>
                                </th>
                                <th>
                                    <button onClick={()=>handleDelete(item._id)} className="btn text-rose-500 hover:text-white bg-cyan-400 hover:bg-rose-500 btn-xs"><MdOutlineDelete className=""></MdOutlineDelete></button>
                                </th>
                            </tr>)}


                        </tbody>


                    </table>
                </div>
            </div>

        </div>
    );
};

export default MyCart;