import CountChart from "@/app/components/CountChart";
import UserCards from "@/app/components/UserCards";

const page = () => {
  return (
    <div className="flex gap-4 flex-col md:flex-row">
      {/* left side  */}
      <div className="w-full lg:w-2/3">
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCards type="students" />
          <UserCards type="teacher" />
          <UserCards type="parents" />
          <UserCards type="staff" />
        </div>
        {/* middile chart  */}

        <div className="flex gap-4 flex-col lg:flex-row">
          {/* count chart  */}
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart />
          </div>

          {/* attendence chart  */}
          <div className="w-full lg:w-2/3 h-[450px]"></div>
        </div>
        {/* middile chart  */}

        <div>buttom</div>
      </div>
      {/* right side  */}
      <div className="w-full lg:w-1/3">right</div>
    </div>
  );
};

export default page;
