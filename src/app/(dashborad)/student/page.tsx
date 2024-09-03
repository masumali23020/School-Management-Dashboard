import Announcements from "@/app/components/Announcements";
import BigCalendar from "@/app/components/BigCalender";
import EventCalendar from "@/app/components/EvenCalender";

const Student = () => {
  return (
    <div className="flex p-4 gap-4 flex-col xl:flex-row">
      {/* left side  */}
      <div className="w-full xl:w-2/3">
        <BigCalendar />
      </div>
      {/* right side  */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
        <EventCalendar />
        <Announcements />
      </div>
    </div>
  );
};

export default Student;
