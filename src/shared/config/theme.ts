import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
	colors: {
		brand: {
			lightGray:'#FCFCFC',
			black: "#070707",
			white: "#FFFFFF",
			blue:'#0006F8'
		},
		fonts: {
			heading: `'damn', sans-serif`,
			body: `'Exo_2', sans-serif`,
		},
	},
})
