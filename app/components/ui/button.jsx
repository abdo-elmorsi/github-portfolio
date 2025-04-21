import Link from 'next/link'
import React from 'react'

function Button({ href = "", title, children }) {
	return (
		<Link target="_blank" href={href} className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600">
			<button className="px-3 text-xs md:px-6 py-2 md:py-2.5 bg-[#0d1224] rounded-full border-none text-center font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out  md:font-semibold flex items-center gap-2 hover:gap-3">
				<span>{title}</span>
				{children}
			</button>
		</Link>
	)
}

export default Button