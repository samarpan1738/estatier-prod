import React from "react";
import { useHistory } from "react-router-dom";

const SidebarItem = React.forwardRef(
	({ content = "", className = "", onClick = "", icon: Icon = () => <></>, collapse = false, path = "/" }, ref) => {
		const history = useHistory();

		const handleClick = (e) => {
			history.push(path);
			onClick(e);
		};

		return (
			<div className={"dashboard-sidebar-item " + className} ref={ref} onClick={handleClick}>
				<div>
					<Icon className="dashboard-sidebar-item-icon" />
					{!collapse ? <span>{content}</span> : null}
				</div>
			</div>
		);
	}
);

export default SidebarItem;
