import React from "react";

interface NavLinkProps {
    href?: string
    text?: string
    selector?: string
}

export function NavLink({href, selector, text}: NavLinkProps) {
    return(
        <a className={selector} href={href}>{text}</a>
    )
}