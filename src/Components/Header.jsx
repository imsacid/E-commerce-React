function Header({search}){
    return<div className="bg-primaryColor fixed w-full sm:py-10  text-white flex justify-between sm:px-10 px-4  py-5">
        <h1 className="text-3xl">ESuuq</h1>
        <ul className=" hidden sm:flex gap-10 text-2xl">
            <li>Home</li>
            <li>About</li>
            
        </ul>

<form action="">
    <input onChange={search} className="sm:w-[300px] rounded text-black sm:h-[30px] p-2   "  type="text" placeholder="Search Product"   />
    <i class="fa-solid fa-magnifying-glass text-primaryColor absolute right-6 top-10 sm:top-12 sm:right-[275px]"></i>
    </form>

        <i class="fa-solid fa-cart-shopping text-2xl "></i>
    </div>

}

export default Header