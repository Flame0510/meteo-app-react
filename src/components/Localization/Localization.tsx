import location from "../../assets/icons/location.png";

import "./Localization.scss";

const Localization = () => {
  return (
    <div className="localization-container">
      <h2 className="localization-title">Localization</h2>
      <button className="localization-button">
        <img
          className="localization-button-icon"
          src={location}
          alt="localization button"
        />
        <h2 className="localization-button-label">Add Localization</h2>
      </button>
    </div>
  );
};

export default Localization;
