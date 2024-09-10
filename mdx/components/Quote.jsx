const Quote = ({ author, authorInfo, children }) => {
  return (
    <React.Fragment>
      <blockquote>{children}</blockquote>
      <p>
        <b>{author}</b>, {authorInfo}
      </p>
    </React.Fragment>
  );
};
export default Quote;
