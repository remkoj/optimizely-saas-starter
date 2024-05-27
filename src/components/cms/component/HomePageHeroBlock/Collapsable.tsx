'use client'
import { useState, type FunctionComponent, type PropsWithChildren } from "react"

export const Collapsable : FunctionComponent<PropsWithChildren<{ title: string, defaultOpen?: boolean, className?: string }>> = ({ title, children, className, defaultOpen = false }) =>
{
    const [ isOpen, setIsOpen ] = useState<boolean>(defaultOpen)

    return <div className={ className }>
        <div className="cursor-pointer" onClick={ () => setIsOpen(x => !x) }>{ title }</div>
        { isOpen && children }
    </div>
}

export default Collapsable