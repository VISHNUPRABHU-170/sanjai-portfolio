import { HeaderComponentModel } from "../header/header.model";
<<<<<<< HEAD
import { HomeComponentModel } from "../home/home.model";
=======
>>>>>>> 2b319afda3fefcf2153cbeced5bb9d2b499f2fbc


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

export const HOME_CONFIG: HomeComponentModel = {
    content: "User Experience Designer Currently Based In Coimbatore",
    subContent: "I specialize in creating engaging and innovative experiences for brands and their customers. With a background in marketing, I bring a unique perspective to my work that allows me to design solutions that not only meet user needs but also align with business goals."
}
