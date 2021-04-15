import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Post from './Post'
import { Loader } from './Loader'
import { S } from './styledComponents'
import { Link } from 'react-router-dom'
import { getHeros, onLoading } from '../redux/selectors'
import { routes } from '../constants'
import { requestHerosAction } from '../redux/actions'

export default () => {
	const dispatch = useDispatch()
	const posts = useSelector(getHeros)
	const loading = useSelector(onLoading)

	if (loading) { return <Loader /> }

	if (!posts.length) {
		dispatch(requestHerosAction())
	}

	return (<>
	<h2>Super Hero</h2>
		<S.Wrapper>
			{posts.map(post =>
				<Link to={{ pathname: routes.linkCardId(post), state: post }} key={post.id}>
					<Post post={post} />
				</Link>)}
		</S.Wrapper>
		</>
	)

}


