import "./TransactionNotification.css";
import PropTypes from "prop-types";

const NotificationItem = ({ icon, title, time, date, description }) => {
  return (
    <div className="transaction-notification">
      <div className="icon-container">
        <img src={icon} alt="icon" />
      </div>
      <div className="notification-details">
        <h4 className="notification-title">{title}</h4>
        <p className="notification-description">{description}</p>
        <div className="notification-time-date">
          <span className="notification-time">{time}</span>
          <span className="notification-date">{date}</span>
        </div>
      </div>
    </div>
  );
};
// PropTypes validation
NotificationItem.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default NotificationItem;
