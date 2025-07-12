import { Element } from "@rbxts/react";
import { CommonProps } from "../CommonProps";

interface IColorPickerProps extends CommonProps, Partial<Pick<Frame, "Size" | "Position" | "AnchorPoint">> {
	Color: Color3;
	OnChange: (color: Color3) => void;
}

export const ColorPicker: (props: IColorPickerProps) => Element;
