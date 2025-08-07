import "../styles/global.css";

export default function Navigation() {
  return (
    <div className="flex items-center justify-between h-16 text-lg">
      <h1 className="font-black">
        <a href="/">JOSUE SALAZAKU</a>
      </h1>
      <ul className="flex items-center justify-center space-x-4">
        <li className="font-normal transition-all duration-200 hover:font-bold">
          <a href="/art">Art</a>
        </li>
        <li className="font-normal transition-all duration-200 hover:font-bold">
          <a href="/bio">Bio</a>
        </li>
        <li className="font-normal transition-all duration-200 hover:font-bold">
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}
