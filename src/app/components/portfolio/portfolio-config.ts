import { HeaderComponentModel } from "../header/header.model";


export const HEADER_CONFIG: HeaderComponentModel = {
    userName: "SK.",
    navBar: {
        links: [
            {
                text: "Home",
                isActive: true,
                className: "nav-link"
            },
            {
                text: "Work",
                className: "nav-link"
            },
            {
                text: "About",
                className: "nav-link"
            },
            {
                text: "Conact",
                className: "nav-link"
            }
        ]
    },
    resumeDownlodButton: {
        text: "My Resume",
        className: "button",
        icon: {
            name: "download-black"
        }
    }
}
