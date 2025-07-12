import { Element } from "@rbxts/react";
import { CommonProps } from "../CommonProps";

interface ICheckboxProps extends CommonProps {
	OnActivated: () => void;
	Disabled?: boolean;
	Value?: boolean | "Indeterminate";
	Label?: string;
	Alignment?: "Left" | "Right";
	LayoutOrder?: Frame["LayoutOrder"];
	ZIndex?: Frame["ZIndex"];
	Position?: Frame["Position"];
	RichText?: TextLabel["RichText"];
}

export const Checkbox: (props: ICheckboxProps) => Element;
