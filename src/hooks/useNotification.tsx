import { ToastType } from "../components/ToastContainer";

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

const useNotification = (dirction?: Direction) => {
	const triggerNotification = (triggerProps: TriggerPropsType) => {};
	const NotificationComponent = (
		<p>
			<p>ok</p>
		</p>
	);
	return { NotificationComponent, triggerNotification };
};

export default useNotification;
