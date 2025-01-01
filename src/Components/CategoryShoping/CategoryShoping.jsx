import useCategoryShop from "../../Hooks/useCategoryShop";
import SectionTitle from "../SectionTitle";


const CategoryShoping = () => {
  const [categoryItems] = useCategoryShop();

  return (
    <div className="pt-10">
      <SectionTitle title={"Shop by Category"}></SectionTitle>
      <div className="grid grid-cols-2 md:grid-cols-5 items-center justify-items-center gap-2">
        {
          categoryItems && categoryItems.map(item =>
            <div key={item._id}
            className="hero rounded-full overflow-hidden group w-32 h-32 bg-cyan-100"
            style={{ backgroundImage: `url(${item.image})` }}
            >
            <div className="hero-overlay bg-opacity-0 group-hover:bg-opacity-10"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="relative max-w-md flex justify-center items-center" >
                  
                    
                    <p className="mb-5 absolute -top-28 group-hover:top-full transition-all duration-700 ease-in-out font-Krona font-semibold text-white">
                        {item.title}
                    </p>
                    
                </div>
            </div>
        </div>)
        }
       
      </div>

    </div>
  );
};

export default CategoryShoping;