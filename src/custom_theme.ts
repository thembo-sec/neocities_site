
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
    name: 'my-custom-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace`,
		"--theme-font-family-heading": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "0px",
		"--theme-rounded-container": "0px",
		"--theme-border-base": "4px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "255 255 255",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "0 0 0",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #c1265d 
		"--color-primary-50": "246 222 231", // #f6dee7
		"--color-primary-100": "243 212 223", // #f3d4df
		"--color-primary-200": "240 201 215", // #f0c9d7
		"--color-primary-300": "230 168 190", // #e6a8be
		"--color-primary-400": "212 103 142", // #d4678e
		"--color-primary-500": "193 38 93", // #c1265d
		"--color-primary-600": "174 34 84", // #ae2254
		"--color-primary-700": "145 29 70", // #911d46
		"--color-primary-800": "116 23 56", // #741738
		"--color-primary-900": "95 19 46", // #5f132e
		// secondary | #cbf2dd 
		"--color-secondary-50": "247 253 250", // #f7fdfa
		"--color-secondary-100": "245 252 248", // #f5fcf8
		"--color-secondary-200": "242 252 247", // #f2fcf7
		"--color-secondary-300": "234 250 241", // #eafaf1
		"--color-secondary-400": "219 246 231", // #dbf6e7
		"--color-secondary-500": "203 242 221", // #cbf2dd
		"--color-secondary-600": "183 218 199", // #b7dac7
		"--color-secondary-700": "152 182 166", // #98b6a6
		"--color-secondary-800": "122 145 133", // #7a9185
		"--color-secondary-900": "99 119 108", // #63776c
		// tertiary | #a89247 
		"--color-tertiary-50": "242 239 227", // #f2efe3
		"--color-tertiary-100": "238 233 218", // #eee9da
		"--color-tertiary-200": "233 228 209", // #e9e4d1
		"--color-tertiary-300": "220 211 181", // #dcd3b5
		"--color-tertiary-400": "194 179 126", // #c2b37e
		"--color-tertiary-500": "168 146 71", // #a89247
		"--color-tertiary-600": "151 131 64", // #978340
		"--color-tertiary-700": "126 110 53", // #7e6e35
		"--color-tertiary-800": "101 88 43", // #65582b
		"--color-tertiary-900": "82 72 35", // #524823
		// success | #348756 
		"--color-success-50": "225 237 230", // #e1ede6
		"--color-success-100": "214 231 221", // #d6e7dd
		"--color-success-200": "204 225 213", // #cce1d5
		"--color-success-300": "174 207 187", // #aecfbb
		"--color-success-400": "113 171 137", // #71ab89
		"--color-success-500": "52 135 86", // #348756
		"--color-success-600": "47 122 77", // #2f7a4d
		"--color-success-700": "39 101 65", // #276541
		"--color-success-800": "31 81 52", // #1f5134
		"--color-success-900": "25 66 42", // #19422a
		// warning | #ff8605 
		"--color-warning-50": "255 237 218", // #ffedda
		"--color-warning-100": "255 231 205", // #ffe7cd
		"--color-warning-200": "255 225 193", // #ffe1c1
		"--color-warning-300": "255 207 155", // #ffcf9b
		"--color-warning-400": "255 170 80", // #ffaa50
		"--color-warning-500": "255 134 5", // #ff8605
		"--color-warning-600": "230 121 5", // #e67905
		"--color-warning-700": "191 101 4", // #bf6504
		"--color-warning-800": "153 80 3", // #995003
		"--color-warning-900": "125 66 2", // #7d4202
		// error | #d73920 
		"--color-error-50": "249 225 222", // #f9e1de
		"--color-error-100": "247 215 210", // #f7d7d2
		"--color-error-200": "245 206 199", // #f5cec7
		"--color-error-300": "239 176 166", // #efb0a6
		"--color-error-400": "227 116 99", // #e37463
		"--color-error-500": "215 57 32", // #d73920
		"--color-error-600": "194 51 29", // #c2331d
		"--color-error-700": "161 43 24", // #a12b18
		"--color-error-800": "129 34 19", // #812213
		"--color-error-900": "105 28 16", // #691c10
		// surface | #222f7f 
		"--color-surface-50": "222 224 236", // #dee0ec
		"--color-surface-100": "211 213 229", // #d3d5e5
		"--color-surface-200": "200 203 223", // #c8cbdf
		"--color-surface-300": "167 172 204", // #a7accc
		"--color-surface-400": "100 109 165", // #646da5
		"--color-surface-500": "34 47 127", // #222f7f
		"--color-surface-600": "31 42 114", // #1f2a72
		"--color-surface-700": "26 35 95", // #1a235f
		"--color-surface-800": "20 28 76", // #141c4c
		"--color-surface-900": "17 23 62", // #11173e
		
	}
}