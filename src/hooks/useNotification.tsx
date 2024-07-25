import { useCallback, useEffect, useRef, useState } from "react";
import { ToastType } from "../components/ToastContainer";
import Notification from "../components/Notification";

export enum Direction {
	TOP_RIGHT = "top-right",
	TOP_LEFT = "top-left",
	BOTTOM_RIGHT = "bottom-right",
	BOTTOM_LEFT = "bottom-left",
}

export enum AnimationStyleEnum {
	POP = "pop",
	SLIDE = "slide",
	FADE = "fade",
}

export interface TriggerPropsType {
	type: ToastType;
	message: string;
	duration?: number;
	animationStyle?: AnimationStyleEnum;
}

const useNotification = (direction = Direction.TOP_RIGHT) => {
	const [notification, setNotification] = useState<TriggerPropsType | null>(
		null
	);

	const timerRef = useRef<NodeJS.Timeout | null>(null);

	const triggerNotification = useCallback((triggerProps: TriggerPropsType) => {
		if (timerRef.current) {
			clearTimeout(timerRef.current);
		}
		let duration = triggerProps.duration ?? 3000;
		setNotification(triggerProps);
		setTimeout(() => {
			setNotification(null);
			timerRef.current = null;
		}, duration);
	}, []);

	useEffect(() => {
		return () => {
			if (timerRef.current) {
				clearTimeout(timerRef.current);
			}
		};
	}, []);

	const NotificationComponent = notification ? (
		<div className={`${direction}`}>
			<Notification {...notification} />
		</div>
	) : null;

	return { NotificationComponent, triggerNotification };
};

export default useNotification;
