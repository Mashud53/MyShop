import { useState } from "react";


const DetailsPagePhoto = ({ image1, image2, image3, image4, image5, imageURL1, imageURL2, imageURL3, imageURL4, imageURL5}) => {
    const [image, setImage] = useState(image1 ? image1 : imageURL1 )
    return (
        <div className="flex flex-col-reverse md:flex-row items-center justify-around gap-3 w-full">
            <div className="flex flex-row justify-around md:gap-4 md:flex-col ">
                {
                    image1?.length > 0 || imageURL1?.length > 0 && <div onClick={() => setImage(image1 ? image1 : imageURL1)} className="h-[50px] md:h-[100px] w-[50px] md:w-[100px] border-2 border-neutral-200 p-1 md:p-2 rounded-md cursor-pointer"><img className="h-full" src={image1 || imageURL1} alt="" /></div>
                }
                {
                    image2?.length > 0 || imageURL2?.length > 0 && <div onClick={() => setImage(image2? image2:imageURL2)} className="h-[50px] md:h-[100px] w-[50px] md:w-[100px] border-2 border-neutral-200 p-1 md:p-2 rounded-md cursor-pointer">
                    <img className="h-full object-cover" src={image2 || imageURL2} alt="" />
                </div>
                }
                {
                    image3?.length > 0 || imageURL3?.length > 0  && <div onClick={() => setImage(image3 ? image3 : imageURL3)} className="h-[50px] md:h-[100px] w-[50px] md:w-[100px] border-2 border-neutral-200 p-1 md:p-2 rounded-md cursor-pointer">
                    <img className="h-full w-full" src={image3 || imageURL3} alt="" />
                </div>
                }
                {
                    image4?.length>0 || imageURL4?.length >0 &&<div onClick={() => setImage(image4 ? image4 : imageURL4)} className="h-[50px] md:h-[100px] w-[50px] md:w-[100px] border-2 border-neutral-200 p-1 md:p-2 rounded-md cursor-pointer">
                    <img className="h-full w-full" src={image4 || imageURL4} alt="" />
                </div>
                }
                {
                    image5?.length>0 || imageURL5?.length > 0 &&<div onClick={() => setImage(image5 ? image5 : imageURL5)} className="h-[50px] md:h-[100px] w-[50px] md:w-[100px] border-2 border-neutral-200 p-1 md:p-2 rounded-md cursor-pointer">
                    <img className="h-full w-full" src={image5 || imageURL5} alt="" />
                </div>
                }
            </div>
            <div className="p-2 border-2 border-neutral-200 bg-orange-50"><img className="h-[200px] w-[200px] md:h-[300px] md:w-[300px] lg:h-[500px] lg:w-[500px] object-contain" src={image} alt="" /></div>

        </div>
    );
};

export default DetailsPagePhoto;