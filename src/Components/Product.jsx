function Product({items}){
    return <div className=" w-[150px] h-[300-px ] sm:w-[300px] mt-32 m-3 border-2 border-black p-2">
<img className="sm:w-[200px] sm:h-[200px]" src=  {items.image} alt="" />
<div className="flex justify-between font-bold mt-2">
<h1 className="sm:text-lg">{items.title}  </h1>
<h1>{items.category.name }  </h1>
</div>
<div className="flex justify-between sm:mt-6">
    <h1>${items.price}   </h1>
    <i class="fa-solid fa-circle-plus text-2xl"></i>
</div>
    </div>
}

export default Product