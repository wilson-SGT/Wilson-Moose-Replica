"use client"
import { useEffect, useRef } from "react"

export default function Measure() {
    const ran = useRef(false)
    useEffect(() => {
        if (ran.current) return
        ran.current = true

        const report = (tag: string) => {
            const sels = [
                [".add-text-upper", "text-upper"],
                [".add-text-bottom", "text-bottom"],
            ]
            const out = sels.map(([sel, name]) => {
                const el = document.querySelector(sel)
                if (!el) return { name, missing: true }
                const r = el.getBoundingClientRect()
                return {
                    name,
                    left: +r.left.toFixed(1),
                    transform: getComputedStyle(el).transform,
                }
            })
            const pre = document.createElement("pre")
            pre.className = "measure-out"
            pre.textContent = JSON.stringify({ tag, scrollY: window.scrollY, out })
            document.body.appendChild(pre)
        }

        report("initial")
        window.scrollTo(0, 1000)
        requestAnimationFrame(() => requestAnimationFrame(() => report("after-scroll")))
    }, [])
    return null
}
