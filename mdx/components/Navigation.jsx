import Icon from "./Icon";

const Navigation = ({ items }) => {
  return (
    <nav>
      {items.map((item) => (
        <li>
          <Icon path={item.icon} />
          {item.label}
        </li>
      ))}
    </nav>
  );
};
export default Navigation;
