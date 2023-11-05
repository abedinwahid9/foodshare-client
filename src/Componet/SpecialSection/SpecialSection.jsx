const SpecialSection = () => {
  return (
    <div className="my-10 px-10 flex md:flex-row flex-col justify-around items-center text-center gap-5">
      <div className="flex flex-col  items-center ">
        <img
          className="h-28 "
          src="https://i.ibb.co/HDfnWcx/shopping-bag-graphic.png"
          alt=""
        />
        <div className="h-2/4 mt-2">
          <h2 className="text-xl font-bold">8,100,000</h2>
          <p>Meals distributed in 2023</p>
        </div>
      </div>
      <div className="flex flex-col items-center ">
        <img
          className="h-28"
          src="https://i.ibb.co/yyKqvB0/elephant-graphic.png"
          alt=""
        />
        <div className="h-2/4 mt-2">
          <h2 className="text-xl font-bold">8,760,000</h2>
          <p>Pounds of food rescued each year</p>
        </div>
      </div>
      <div className="flex flex-col items-center ">
        <img
          className="h-28"
          src=" https://i.ibb.co/jwv8tD8/coin-graphic.png"
          alt=""
        />
        <div className="h-2/4  mt-2">
          {" "}
          <h2 className="text-xl font-bold">$18,800,000</h2>
          <p>The value of meals distributed in 2023</p>
        </div>
      </div>
    </div>
  );
};

export default SpecialSection;
