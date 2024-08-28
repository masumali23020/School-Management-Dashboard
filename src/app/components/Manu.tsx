import Image from "next/image";
import Link from "next/link";
import { menuItems } from "../data/data";
const Manu = () => {
  return (
    <div className="mt-4 text-sm">
      {menuItems.map((i) => (
        <div key={i.title} className="flex flex-col gap-2">
          <span>{i.title}</span>
          {i.items.map((item) => {
            return (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 md:px-2 rounded-md hover:bg-lamaSkyLight"
              >
                <Image src={item.icon} alt={""} width={20} height={20} />
                <span className="hidden lg:block">{item.label}</span>
              </Link>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Manu;
