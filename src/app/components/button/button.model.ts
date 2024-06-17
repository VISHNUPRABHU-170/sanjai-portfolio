import { IconModel } from "../icon/icon.model";

export interface ButtonModel {
    text: string,
    isActive?: boolean,
    className?: string,
    icon?: IconModel
}
