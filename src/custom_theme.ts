// You can also use the generator at https://skeleton.dev/docs/generator to create these values for you
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const custom_theme: CustomThemeConfig = {
	name: 'custom_theme',
	properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace`,
		"--theme-font-family-heading": `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "0",
		"--theme-rounded-container": "0px",
		"--theme-border-base": "4px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "255 255 255",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "255 255 255",
		"--on-error": "0 0 0",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #f07400 
		"--color-primary-50": "234 234 234", // #eaeaea
		"--color-primary-100": "227 227 227", // #e3e3e3
		"--color-primary-200": "221 221 221", // #dddddd
		"--color-primary-300": "200 200 200", // #c8c8c8
		"--color-primary-400": "158 158 158", // #9e9e9e
		"--color-primary-500": "117 117 117", // #757575
		"--color-primary-600": "105 105 105", // #696969
		"--color-primary-700": "88 88 88", // #585858
		"--color-primary-800": "70 70 70", // #464646
		"--color-primary-900": "57 57 57", // #393939
		// secondary | #1d8eba 
		"--color-secondary-50": "249 242 238", // #f9f2ee
		"--color-secondary-100": "246 237 233", // #f6ede9
		"--color-secondary-200": "244 233 227", // #f4e9e3
		"--color-secondary-300": "238 220 210", // #eedcd2
		"--color-secondary-400": "225 193 177", // #e1c1b1
		"--color-secondary-500": "212 167 143", // #d4a78f
		"--color-secondary-600": "191 150 129", // #bf9681
		"--color-secondary-700": "159 125 107", // #9f7d6b
		"--color-secondary-800": "127 100 86", // #7f6456
		"--color-secondary-900": "104 82 70", // #685246
		// tertiary | #30d08d 
		"--color-tertiary-50": "224 248 238", // #e0f8ee
		"--color-tertiary-100": "214 246 232", // #d6f6e8
		"--color-tertiary-200": "203 243 227", // #cbf3e3
		"--color-tertiary-300": "172 236 209", // #acecd1
		"--color-tertiary-400": "110 222 175", // #6edeaf
		"--color-tertiary-500": "48 208 141", // #30d08d
		"--color-tertiary-600": "43 187 127", // #2bbb7f
		"--color-tertiary-700": "36 156 106", // #249c6a
		"--color-tertiary-800": "29 125 85", // #1d7d55
		"--color-tertiary-900": "24 102 69", // #186645
		// success | #6cf13e 
		"--color-success-50": "233 253 226", // #e9fde2
		"--color-success-100": "226 252 216", // #e2fcd8
		"--color-success-200": "218 252 207", // #dafccf
		"--color-success-300": "196 249 178", // #c4f9b2
		"--color-success-400": "152 245 120", // #98f578
		"--color-success-500": "108 241 62", // #6cf13e
		"--color-success-600": "97 217 56", // #61d938
		"--color-success-700": "81 181 47", // #51b52f
		"--color-success-800": "65 145 37", // #419125
		"--color-success-900": "53 118 30", // #35761e
		// warning | #c53b30 
		"--color-warning-50": "246 226 224", // #f6e2e0
		"--color-warning-100": "243 216 214", // #f3d8d6
		"--color-warning-200": "241 206 203", // #f1cecb
		"--color-warning-300": "232 177 172", // #e8b1ac
		"--color-warning-400": "214 118 110", // #d6766e
		"--color-warning-500": "197 59 48", // #c53b30
		"--color-warning-600": "177 53 43", // #b1352b
		"--color-warning-700": "148 44 36", // #942c24
		"--color-warning-800": "118 35 29", // #76231d
		"--color-warning-900": "97 29 24", // #611d18
		// error | #a1787b 
		"--color-error-50": "241 235 235", // #f1ebeb
		"--color-error-100": "236 228 229", // #ece4e5
		"--color-error-200": "232 221 222", // #e8ddde
		"--color-error-300": "217 201 202", // #d9c9ca
		"--color-error-400": "189 161 163", // #bda1a3
		"--color-error-500": "161 120 123", // #a1787b
		"--color-error-600": "145 108 111", // #916c6f
		"--color-error-700": "121 90 92", // #795a5c
		"--color-error-800": "97 72 74", // #61484a
		"--color-error-900": "79 59 60", // #4f3b3c
		// surface | #212121 
		"--color-surface-50": "222 222 222", // #dedede
		"--color-surface-100": "211 211 211", // #d3d3d3
		"--color-surface-200": "200 200 200", // #c8c8c8
		"--color-surface-300": "166 166 166", // #a6a6a6
		"--color-surface-400": "100 100 100", // #646464
		"--color-surface-500": "33 33 33", // #212121
		"--color-surface-600": "30 30 30", // #1e1e1e
		"--color-surface-700": "25 25 25", // #191919
		"--color-surface-800": "20 20 20", // #141414
		"--color-surface-900": "16 16 16", // #101010
	}
}