import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "./Post";
import { Loader } from "./Loader";
import { S } from "./styledComponents";
import { Link } from "react-router-dom";
import { getHeros, onLoading } from "../redux/selectors";
import { routes,LITERALS } from "../constants";
import { requestHerosAction } from "../redux/actions";

export default function FetchedPosts  ()  {
	const dispatch = useDispatch();
	const posts = useSelector(getHeros);
	const loading = useSelector(onLoading);

	if (loading) { return <Loader />; }

	if (!posts.length) {
		dispatch(requestHerosAction());
	}

	return (<>
	<h2>{LITERALS.SUPER_HEROS}</h2>
		<S.Wrapper>
			{posts.map(post =>
				<Link to={{ pathname: routes.linkCardId(post), state: post }} key={post.id}>
					<Post post={post} />
				</Link>)}
		</S.Wrapper>
		</>
	);

}


