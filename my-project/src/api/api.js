// import axios from 'axios'
// export function getDiscList() {
// 	const url = '/api/getDiscList'
// 	const data = {
// 		widen:1
// 	};
// return axios.get(url, {
// 	params: data
// }).then((res) => {
// 	return Promise.resolve(res.data)
// })
// }


import axios from 'axios'
// export function getDiscList() {
// 	const url = '/api/getDiscList'
// 	let commonParams = {
// 		g_tk: 1928093487,
// 		inCharset: 'utf-8',
// 		outCharset: 'utf-8',
// 		notice: 0
// 	}

// 	const data = Object.assign({}, commonParams, {
// 		platform: 'yqq',
// 		hostUin: 0,
// 		sin: 0,
// 		ein: 29,
// 		sortId: 5,
// 		needNewCode: 0,
// 		categoryId: 10000000,
// 		rnd: Math.random(),
// 		format: 'json',
// 		json: 1,
// 		utf8: 1
// 	})

// 	return axios.get(url, {
// 		params: data
// 	}).then((res) => {
// 		return Promise.resolve(res.data)
// 	})
// }

export function getNewsList() {
	const url = '/api/getNewsList'
	const data = {
		widen:1
	};
return axios.get(url, {
	params: data
}).then((res) => {
	return Promise.resolve(res.data)
})
}

export function getFocus() {
	const url = '/api/focus'
	const data = {
		widen:1
	};
return axios.get(url, {
	params: data
}).then((res) => {
	return Promise.resolve(res.data)
})
}

export function getFeed() {
	const url = '/api/feed'
	const data = {
		widen:1,
	};
return axios.get(url, {
	params: data
}).then((res) => {
	return Promise.resolve(res.data)
})
}