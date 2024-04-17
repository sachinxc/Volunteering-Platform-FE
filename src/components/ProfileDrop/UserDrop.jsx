"use client";
import { useRef, useState } from "react";

// MUI Imports
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Popper from "@mui/material/Popper";
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import MenuList from "@mui/material/MenuList";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { deepOrange, deepPurple } from "@mui/material/colors";

// Styled component for badge content
const BadgeContentSpan = styled("span")({
  width: 8,
  height: 8,
  borderRadius: "50%",
  cursor: "pointer",
  backgroundColor: "var(--mui-palette-success-main)",
  boxShadow: "0 0 0 2px var(--mui-palette-background-paper)",
});

const UserDrop = () => {
  // States
  const [open, setOpen] = useState(false);

  // Refs
  const anchorRef = useRef(null);

  const handleDropdownOpen = () => {
    !open ? setOpen(true) : setOpen(false);
  };

  const handleDropdownClose = (event, url) => {
    setOpen(false);
  };

  const handleUserLogout = async () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  return (
    <>
      <Badge
        ref={anchorRef}
        overlap="circular"
        badgeContent={<BadgeContentSpan onClick={handleDropdownOpen} />}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        className="mis-2"
      >
        <Avatar
          ref={anchorRef}
          sx={{ bgcolor: deepOrange[500] }}
          onClick={handleDropdownOpen}
          className="cursor-pointer bs-[38px] is-[38px]"
        >
          V
        </Avatar>
      </Badge>
      <Popper
        open={open}
        transition
        disablePortal
        placement="bottom-end"
        anchorEl={anchorRef.current}
        className="min-is-[240px] !mbs-4 z-[1]"
      >
        {({ TransitionProps, placement }) => (
          <Fade
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom-end" ? "right top" : "left top",
            }}
          >
            <Paper
              className={"shadow-lg"}
              sx={{ minWidth: "200px", padding: "10px" }}
            >
              <ClickAwayListener onClickAway={(e) => handleDropdownClose(e)}>
                <MenuList>
                  <div className="flex items-center plb-2 pli-4">
                    <Button
                      fullWidth
                      variant="contained"
                      color="error"
                      size="small"
                      endIcon={<i className="ri-logout-box-r-line" />}
                      onClick={handleUserLogout}
                      sx={{
                        "& .MuiButton-endIcon": { marginInlineStart: 1.5 },
                      }}
                    >
                      Logout
                    </Button>
                  </div>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Fade>
        )}
      </Popper>
    </>
  );
};

export default UserDrop;
