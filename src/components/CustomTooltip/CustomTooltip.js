import { styled, Tooltip } from "@mui/material";
import { tooltipClasses } from "@mui/material/Tooltip";

export const CustomWidthTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    minWidth: 300,
    background: "rgba(255, 255, 255, 0.61)",
    borderRadius: "16px",
    boxShadow: " 0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(6.1px)",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    padding: "10px",
  },
});
