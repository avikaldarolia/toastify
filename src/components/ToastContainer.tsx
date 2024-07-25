import useNotification, { Direction } from "../hooks/useNotification";
import "../styles/toast.css";

export type ToastType = "success" | "info" | "warn" | "error";

const ToastValues: ToastType[] = ["success", "info", "warn", "error"];

const ToastContainer = () => {
	const handleClick = (item: ToastType) => {
		console.log(item);
		triggerNotification({
			type: item,
			message: "wow",
		});
	};

	const { NotificationComponent, triggerNotification } = useNotification(
		Direction.TOP_LEFT
	);

	return (
		<div className="toast-container">
			<h1>Toast Container</h1>
			<div className="grid-container">
				{ToastValues.map((item, idx) => (
					<div
						key={idx}
						onClick={() => handleClick(item)}
						className="grid-item">
						<p className="">{item.toUpperCase()}</p>
						{NotificationComponent}
					</div>
				))}
			</div>
		</div>
	);
};

export default ToastContainer;
