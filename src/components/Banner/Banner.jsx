

const Banner = () => {
    return (
        <div>
          
     <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse Lg:gap-40">

    <div className="text-center lg:text-left ">
    <img src="https://trackobit.com/wp-content/themes/trackobit/assets/images/taskmanagement/top-banner.png" alt="" />
    </div>


    <div className="card shrink-0 lg:w-2/4 ">
    <div className="text-center">
      <h1 className="font-bold pt-8 text-3xl lg:text-5xl ">Task Management</h1>
      <p className="py-6 text-md">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos velit odio earum voluptatum, et, iste quod, ipsum iusto maxime maiores cupiditate? Ea animi recusandae id, perferendis quos ratione itaque debitis?</p>
      <button className="btn btn-outline btn-info">Let’s Explore</button>
    </div>
    </div>
    
  </div>
</div>
        </div>
    );
};

export default Banner;