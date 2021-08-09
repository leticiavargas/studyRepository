import React from "react";

const Box = ({boxId, handleDragStart, handleDragEnter, handleDragLeave, handleDrop}) => {

	return(
		<div className="box-container"
			draggable={true}
			onDragStart={handleDragStart}
			onDragEnter={handleDragEnter}
			onDragLeave={handleDragLeave}
			onDrop={handleDrop}
			onDragOver={(e)=>e.preventDefault()}
		>
		{boxId}
		</div>
	);
};

export {Box};