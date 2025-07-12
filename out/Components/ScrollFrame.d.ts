import { Element } from "@rbxts/react";
import { CommonProps } from "../CommonProps";

type IScrollFrame = CommonProps &
	Partial<
		{
			Disabled: boolean;
			OnScrolled: (pos: Vector2) => void;
			Layout: {
				ClassName?: string;
				SortOrder?: Enum.SortOrder.LayoutOrder;
			};
		} & Pick<
			ScrollingFrame,
			"AnchorPoint" | "BorderSizePixel" | "LayoutOrder" | "Position" | "ScrollingDirection" | "Size" | "ZIndex"
		>
	>;

export const ScrollFrame: (props: IScrollFrame) => Element;
