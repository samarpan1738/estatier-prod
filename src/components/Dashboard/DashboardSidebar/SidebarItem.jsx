import React from "react";
import { useNavigate } from "react-router-dom";

const SidebarItem = React.forwardRef(
	({ content = "", className = "", onClick = "", icon: Icon = () => <></>, collapse = false, path = "/" }, ref) => {
		const navigate = useNavigate();

		const handleClick = (e) => {
			navigate(path);
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
