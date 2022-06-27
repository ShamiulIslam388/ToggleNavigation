import "./styles.css";
import NavItem from "./NavItem";

export default function App() {
  const navs = ["Fast Pack", "Outbound", "Handover"];
  return (
    <div className="h-screen w-screen flex items-center justiry-center">
      <div className="w-[410px] h-[45px] flex items-center justify-between p-1 border rounded-full">
        <NavItem navs={navs} />
      </div>
    </div>
  );
}
