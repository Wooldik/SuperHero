import { takeEvery, put, call } from 'redux-saga/effects'
import { hideLoaderAction, showLoaderAction, requestHerosAction, fetchHerosAction } from './actions'

export function* sagaWatcher() {
	yield takeEvery(requestHerosAction, sagaWorker)
}

function* sagaWorker() {
	try {
		yield put(showLoaderAction())
		const payload = yield call(fetchHeros)
		yield put(fetchHerosAction(payload))
		yield put(hideLoaderAction())
	} catch (e) {
		yield put(hideLoaderAction())
	}
}

async function fetchHeros() {
	const arr = []
	for (let i = 1; i <= 5; i++) {
		let response = await fetch('https://superheroapi.com/api/2035975243210427/' + i)
		let data = await response.json()
		arr.push(await data)
	}
	return arr
}

