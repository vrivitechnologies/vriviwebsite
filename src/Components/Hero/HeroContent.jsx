import React from "react";
import { UserCog, Trophy, Tag } from "lucide-react";
import studyabroadImage from "../../assets/abroadeducation.png";
import companyBgImage from "../../assets/companybackground.png";

export const Productcontent = {
    badge: "VRISTUDY ",
    subBadge:"AI Powered Study Abroad CRM",
    headingLine1: "Your Gateway to Studying Abroad",
    headingLine2Prefix: "Designed for",
    rotatingWords: ["Dreamers", "Achievers", "Explorers", "Future Leaders"],
    subText:
        "Discover top universities, track your applications, and plan your journey with a smart study abroad platform made for students.",
    emailPlaceholder: "Enter your email",
    buttonText: "Start 30 Days Free Trial",
    stats: [
        { label: "Customers", value: "2", bgColor: "bg-purple-100" },
        { label: "Students", value: "50,000+", bgColor: "bg-green-100" },
        { label: "Applications ", value: "100+", bgColor: "bg-blue-100" },
        { label: "Process Time", value: "50% faster", bgColor: "bg-yellow-100" }
    ],
    studyabroadImage
};

export const features = [
    { text: "Self Managed", icon: UserCog },
    // { text: "ZERO commissions", icon: Trophy },
    { text: "White-label", icon: Tag },
];

export const Vrivicontent = {
    headingLine1:
        "We Bring Software Solutions To Make Life Easier For Your Business.",
    headingLine2Prefix:
        "Empowering Businesses with Innovative Technology Solutions.",
    companyBgImage
};
