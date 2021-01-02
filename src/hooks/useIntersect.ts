import * as React from "react"

export default function useIntersect({
	root,
	target,
	onIntersect,
	threshold = 0,
	rootMargin = "0px",
	enabled = true,
}: {
	root?: React.MutableRefObject<HTMLElement | null>
	target: React.MutableRefObject<HTMLElement | null>
	onIntersect: Function
	threshold?: number
	rootMargin?: string
	enabled?: boolean
}) {
	React.useEffect(() => {
		if (!enabled) return
		const observer = new IntersectionObserver(
			entries =>
				entries.forEach(entry => entry.isIntersecting && onIntersect()),
			{
				root: root && root?.current,
				rootMargin,
				threshold,
			},
		)
		const element = target && target?.current
		if (!element) return
		observer.observe(element)
		return () => {
			observer.unobserve(element)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [target, enabled])
}
