import React from "react";
import HelpIcon from "@material-ui/icons/Help";
import styles from "./tooltip.module.css";

const Tooltip = ({ content }) => {
  return (
    <div id="tooltip-card">
      {content.heading}
      {content.content && (
        <ol>
          {content.content.map((tooltip, idx) => {
            return (
              <li key={idx} className={styles.tooltip_list_item}>
                <h3>{tooltip}</h3>
              </li>
            );
          })}
        </ol>
      )}
      {/* If you don't understand the question, Press <HelpIcon style={{ fontSize: 16, height: 16 }} /> to understand it. */}
    </div>
  );
};
export default React.memo(Tooltip);
