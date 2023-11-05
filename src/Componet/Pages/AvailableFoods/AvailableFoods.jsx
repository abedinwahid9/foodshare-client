import Card from "../../Card/Card";

const AvailableFoods = () => {
  return (
    <div
      className=" bg-no-repeat bg-contain bg-cover"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/p1486NH/pngtree-green-lawn-green-food-product-promotion-poster-background-material-picture-image-1084457-rem.png)",
      }}
    >
      <div className="flex flex-col md:flex-row md:justify-between items-center md:p-10 py-5">
        <fieldset className="form-control w-80">
          <h2 className="label-text text-base font-bold mb-2">Search Food</h2>

          <div className="relative">
            <input
              type="text"
              placeholder="Search here"
              className="input input-bordered w-full pr-16"
            />
            <button className="btn bg-thirdColor border-2 border-thirdColor text-secondColor  absolute top-0 right-0 rounded-l-none">
              Search
            </button>
          </div>
        </fieldset>
        <div className="mt-5">
          <h2 className="text-base font-bold mb-2">sort by expired date</h2>
          <select className="select select-warning w-full max-w-xs">
            <option disabled selected>
              Pick a pizza
            </option>
            <option>Cheese</option>
            <option>Veggie</option>
            <option>Pepperoni</option>
            <option>Margherita</option>
            <option>Hawaiian</option>
          </select>
        </div>
      </div>
      <div className="my-10">
        <h2 className="text-center text-5xl font-extrabold">Avaiable Foods</h2>
        <div className="divider w-3/4 mx-auto"></div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3 p-5">
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
      </div>
    </div>
  );
};

export default AvailableFoods;
