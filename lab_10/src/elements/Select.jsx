const Select = ({ options, label }) => (
  <div className="select-wrapper">
    {label && <label>{label}</label>}
    <select className="custom-select">
      {options.map((opt, index) => (
        <option key={index} value={opt.value}>{opt.label}</option>
      ))}
    </select>
  </div>
);
export default Select;