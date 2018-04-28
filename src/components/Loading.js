import ReactLoading from 'react-loading';
import React from 'react';

 const Loading = ({ type, color }) => (
    <div className="loader ">
	<ReactLoading  type={"bars"} color={"blue"} height={667} width={375} />
	</div>
);

export default Loading;