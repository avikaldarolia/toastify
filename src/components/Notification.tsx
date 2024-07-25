import { ToastType } from "./ToastContainer";
import "../styles/notification.css";
import {
	AiOutlineCheckCircle,
	AiOutlineClose,
	AiOutlineCloseCircle,
	AiOutlineInfoCircle,
	AiOutlineWarning,
} from "react-icons/ai";

const iconStyle = { marginRight: "10px" };
const icons = {
	success: <AiOutlineCheckCircle style={iconStyle} />,
	info: <AiOutlineInfoCircle style={iconStyle} />,
	warn: <AiOutlineWarning style={iconStyle} />,
	error: <AiOutlineCloseCircle style={iconStyle} />,
};

interface NotificationProps {
	type: ToastType;
	message: string;
	onClose?: () => void;
}

const Notification = ({
	type = "info",
	message,
	onClose = () => {},
}: NotificationProps) => {
	return (
		<div className={`notification ${type}`}>
			{/* icons */}
			{icons[type]}
			{/* message */}
			{message}
			{/* close button */}
			<AiOutlineClose color="white" onClick={() => onClose()} />
		</div>
	);
};

export default Notification;
