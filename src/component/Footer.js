import { FooterData } from "../Data/Data";

function Footer() {
  return (
    <div className="flex bg-transparent justify-center text-blue-700 p-4 sticky bottom-0 z-30">
      <div className="flex flex-row space-x-7">
        {FooterData.map((item) => (
          <ul className="hover:text-blue-400"  key={item.id}>
            <li >{item.name}</li>
          </ul>
        ))}
      </div>
    </div>
  );
}
export default Footer;
