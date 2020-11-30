import React from "react";

const SidebarItem = React.forwardRef(({ content = "", className = "", onClick = "", icon: Icon = () => <></> }, ref) => (
	<div className={"sidebar-item " + (className ? className : "")} ref={ref} onClick={onClick}>
		<Icon className="sidebar-item-icon" />
		{content}
	</div>
));

export default SidebarItem;
