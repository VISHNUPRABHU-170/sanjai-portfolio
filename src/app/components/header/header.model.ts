import { ButtonModel } from "../button/button.model";
import { NavBarModel } from "../nav-bar/nav-bar.model";

export interface HeaderComponentModel {
    userName: string,
    navBar: NavBarModel,
    resumeDownlodButton: ButtonModel
}