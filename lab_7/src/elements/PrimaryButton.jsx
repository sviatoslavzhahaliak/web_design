const PrimaryButton = ({ text, onClick, type = "button" }) => (
  <button className="primary-button" type={type} onClick={onClick}>
    {text}
  </button>
);
export default PrimaryButton;