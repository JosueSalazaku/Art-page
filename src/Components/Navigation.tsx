import "../styles/global.css";

export default function Navigation() {
  return (
    <div className="flex items-center h-16">
      <ul className="flex justify-center items-center space-x-2">
        <li>
          <a href="/art">art</a>
        </li>
        <li>
          <a href="/bio">Bio</a>
        </li>
        <li>
          <a href="/contact">contact</a>
        </li>
      </ul>
    </div>
  );
}
