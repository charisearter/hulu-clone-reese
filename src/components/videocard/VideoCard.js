import React, { forwardRef } from "react";
import "./videoCard-style.css";
import TextTruncate from "react-text-truncate";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";

const base_url = "https://image.tmdb.org/t/p/w500";

const VideoCard = forwardRef(({ movie }, ref) => {
	return (
		<div ref={ref} className="videoCard">
			<img
				src={`${base_url}${movie.backdrop_path || movie.poster_path}`}
				alt="movie poster"
			/>
			<TextTruncate
				line={2}
				element="p"
				truncateText="..."
				text={movie.overview}
			/>
			<h2> {movie.title || movie.origianl_name}</h2>
			<p className="videoCard__stats">
				Aired: {movie.release_date || movie.first_air_date} {`  `}
				<br />
				<ThumbUpIcon /> {`  `} {movie.vote_count}
			</p>
		</div>
	);
});

export default VideoCard;
