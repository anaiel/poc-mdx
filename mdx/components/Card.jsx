const Card = ({ children }) => {
  return (
    <article
      style={{
        backgroundColor: "#c7e2e9",
        padding: "2rem",
        borderRadius: ".5rem",
        width: "80%",
        gap: "3rem",
      }}
    >
      {children}
    </article>
  );
};
export default Card;
