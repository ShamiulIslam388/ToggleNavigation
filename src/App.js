import "./styles.css";
import NavItem from "./NavItem";

export default function App() {
  const items = ["aaa", "bbb", "cccc"];
  return (
    <div className="h-screen w-screen flex items-center justiry-center">
      <div className="w-[300px] h-[45px] flex items-center justify-between p-1 border rounded-full">
        <NavItem items={items} />
      </div>
    </div>
  );
}
