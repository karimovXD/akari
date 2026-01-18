import { Github, Linkedin, Mail } from "lucide-react";
import { EnumTabsContentType } from "./types";
import type { footerType } from "./types";

export const footerData: footerType[] = [
    {
        id: 1,
        title: EnumTabsContentType.GITHUB,
        url: "https://github.com/karimovXD",
        icon: Github
    },
    {
        id: 2,
        title: EnumTabsContentType.EMAIL,
        url: "https://mail.google.com/mail/u/0/?fs=1&to=rightl2053@gmail.com&su=Hey+Iskandar!&tf=cm",
        icon: Mail
    },
    {
        id: 3,
        title: EnumTabsContentType.LINKEDIN,
        url: "https://www.linkedin.com/in/https://www.linkedin.com/in/iskandar-karimov-699324325",
        icon: Linkedin
    },
]