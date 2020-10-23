/*
 * @Author: 胡小汇
 * @Date: 2020-10-17 13:29:49
 * @LastEditors: 胡小汇
 * @LastEditTime: 2020-10-20 14:52:54
 * @Description: file content
 */
module.exports = {
	plugins: {
		'postcss-px-to-viewport': {
			unitToConvert: 'px',
			viewportWidth: 375,
			unitPrecision: 5,
			propList: ['*'],
			viewportUnit: 'vw',
			fontViewportUnit: 'vw',
			selectorBlackList: ['van'],
			minPixelValue: 1,
			mediaQuery: false,
			replace: true,
			exclude: undefined,
			include: undefined,
			landscape: false,
			landscapeUnit: 'vw',
			landscapeWidth: 568
		}
	}
}