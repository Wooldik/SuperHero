import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Post from './Post'
import { fetchHeros } from '../redux/actions'
import { Loader } from './Loader'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default () => {
	const dispatch = useDispatch()
	const posts = useSelector(state => state.posts.fetchedHeros)
	const loading = useSelector(state => state.app.loading)

	if (loading) {

		return <Loader />
	}

	if (!posts.length) {
		dispatch(fetchHeros())
	}


	return (
		<S.Wrapper>
			{posts.map(post => <Link to={{ pathname: `/card/${post.id}`, state: post }}><Post post={post} key={post.id} /></Link>)}
		</S.Wrapper>
	)

}

const S = {
	Wrapper: styled.div`
	display:flex;
	justify-content:space-between;
	flex-wrap:wrap;

	`
}
