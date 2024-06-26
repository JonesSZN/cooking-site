const Foods = () => {
  const FoodObject = [
    {
      text: "Perfect picnic picks.",
      image: "picnic.jpeg",
      Name: "Sharon Daniels",
      Date: "February 10,2024",
      tags: ["LIFESTYLE"],
    },
    {
      text: "My best advice for never skipping breakfast.",
      image: "fruits.jpeg",
      Name: "Sharon Daniels",
      Date: "February 10,2024",
      tags: ["LIFESTYLE"],
    },
    {
      text: "A guide to hosting memorable dinners with friends.",
      image: "drinks.jpeg",
      Name: "Sharon Daniels",
      Date: "February 10,2024",
      tags: ["LIFESTYLE"],
    },
  ];
  return (
    <section className="w-full flex justify-center py-24">
      <div className="w-[85%] max-w-[1920px] flex flex-col items-center gap-8">
        <div className="lg:flex lg:flex-row grid grid-cols-2 gap-12 ">
          {FoodObject.map((item) => (
            <Card foodObject={item} />
          ))}
        </div>
        <button className="border font-bold text-[14px] max-w-[202px] py-3 px-6 border-[#2f5fc7] text-[#2f5fc7] rounded-md  cursor-pointer hover:bg-[#2f5fc7] hover:text-white ">
          VIEW ALL POSTS
        </button>
      </div>
    </section>
  );
};

const Card = ({ foodObject }) => {
  return (
    <div className="flex group  flex-col cursor-pointer relative gap-4">
      <img
        className="object-cover lg:w-[667px] lg:h-[777px]  w-[184px] h-[230px] rounded-md"
        src={foodObject.image}
        alt=""
      />
      <div className="lg:absolute lg:right-5 lg:top-5 absolute top-2 left-1/2 transform -translate-x-1/2">
        <div className="flex gap-2">
          {foodObject.tags.map((tag) => (
            <div className="text-black group-hover:bg-[#0f7a60] group-hover:text-white duration-500 bg-white rounded-md py-2 px-3">
              {tag}
            </div>
          ))}
        </div>
      </div>
      <p className="text-[24px] text-black font-bold">{foodObject.text}</p>
      <div className="flex gap-2 items-center text-[#292929]">
        <p>{foodObject.Name}</p>
        <div className="w-[1px] h-4 border border-[#292929]"></div>
        <p>{foodObject.Date}</p>
      </div>
    </div>
  );
};

export default Foods;
