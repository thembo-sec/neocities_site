import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const custom_theme: CustomThemeConfig = {
    name: 'custom-theme',
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
		"--on-primary": "0 0 0",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "0 0 0",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #d4dde7 
		"--color-primary-50": "249 250 251", // #f9fafb
		"--color-primary-100": "246 248 250", // #f6f8fa
		"--color-primary-200": "244 247 249", // #f4f7f9
		"--color-primary-300": "238 241 245", // #eef1f5
		"--color-primary-400": "225 231 238", // #e1e7ee
		"--color-primary-500": "212 221 231", // #d4dde7
		"--color-primary-600": "191 199 208", // #bfc7d0
		"--color-primary-700": "159 166 173", // #9fa6ad
		"--color-primary-800": "127 133 139", // #7f858b
		"--color-primary-900": "104 108 113", // #686c71
		// secondary | #21a1de 
		"--color-secondary-50": "222 241 250", // #def1fa
		"--color-secondary-100": "211 236 248", // #d3ecf8
		"--color-secondary-200": "200 232 247", // #c8e8f7
		"--color-secondary-300": "166 217 242", // #a6d9f2
		"--color-secondary-400": "100 189 232", // #64bde8
		"--color-secondary-500": "33 161 222", // #21a1de
		"--color-secondary-600": "30 145 200", // #1e91c8
		"--color-secondary-700": "25 121 167", // #1979a7
		"--color-secondary-800": "20 97 133", // #146185
		"--color-secondary-900": "16 79 109", // #104f6d
		// tertiary | #9380f8 
		"--color-tertiary-50": "239 236 254", // #efecfe
		"--color-tertiary-100": "233 230 254", // #e9e6fe
		"--color-tertiary-200": "228 223 253", // #e4dffd
		"--color-tertiary-300": "212 204 252", // #d4ccfc
		"--color-tertiary-400": "179 166 250", // #b3a6fa
		"--color-tertiary-500": "147 128 248", // #9380f8
		"--color-tertiary-600": "132 115 223", // #8473df
		"--color-tertiary-700": "110 96 186", // #6e60ba
		"--color-tertiary-800": "88 77 149", // #584d95
		"--color-tertiary-900": "72 63 122", // #483f7a
		// success | #2ffc37 
		"--color-success-50": "224 255 225", // #e0ffe1
		"--color-success-100": "213 254 215", // #d5fed7
		"--color-success-200": "203 254 205", // #cbfecd
		"--color-success-300": "172 254 175", // #acfeaf
		"--color-success-400": "109 253 115", // #6dfd73
		"--color-success-500": "47 252 55", // #2ffc37
		"--color-success-600": "42 227 50", // #2ae332
		"--color-success-700": "35 189 41", // #23bd29
		"--color-success-800": "28 151 33", // #1c9721
		"--color-success-900": "23 123 27", // #177b1b
		// warning | #d73920 
		"--color-warning-50": "249 225 222", // #f9e1de
		"--color-warning-100": "247 215 210", // #f7d7d2
		"--color-warning-200": "245 206 199", // #f5cec7
		"--color-warning-300": "239 176 166", // #efb0a6
		"--color-warning-400": "227 116 99", // #e37463
		"--color-warning-500": "215 57 32", // #d73920
		"--color-warning-600": "194 51 29", // #c2331d
		"--color-warning-700": "161 43 24", // #a12b18
		"--color-warning-800": "129 34 19", // #812213
		"--color-warning-900": "105 28 16", // #691c10
		// error | #efae4b 
		"--color-error-50": "253 243 228", // #fdf3e4
		"--color-error-100": "252 239 219", // #fcefdb
		"--color-error-200": "251 235 210", // #fbebd2
		"--color-error-300": "249 223 183", // #f9dfb7
		"--color-error-400": "244 198 129", // #f4c681
		"--color-error-500": "239 174 75", // #efae4b
		"--color-error-600": "215 157 68", // #d79d44
		"--color-error-700": "179 131 56", // #b38338
		"--color-error-800": "143 104 45", // #8f682d
		"--color-error-900": "117 85 37", // #755525
		// surface | #102457 
		"--color-surface-50": "219 222 230", // #dbdee6
		"--color-surface-100": "207 211 221", // #cfd3dd
		"--color-surface-200": "195 200 213", // #c3c8d5
		"--color-surface-300": "159 167 188", // #9fa7bc
		"--color-surface-400": "88 102 137", // #586689
		"--color-surface-500": "16 36 87", // #102457
		"--color-surface-600": "14 32 78", // #0e204e
		"--color-surface-700": "12 27 65", // #0c1b41
		"--color-surface-800": "10 22 52", // #0a1634
		"--color-surface-900": "8 18 43", // #08122b
		
	}
}