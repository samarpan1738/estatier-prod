import React from "react";

function CustomTextField() {
	return (
		<TextField
			variant="filled"
			InputProps={{
				endAdornment: unit && (
					<InputAdornment position="start">{unit}</InputAdornment>
				),

				inputProps: {
					type: ansType,
					min: 0,
					style: {
						padding: "1em 1em",
						borderColor: "#F55F44",
					},
				},
			}}
		/>
	);
}

export default CustomTextField;
