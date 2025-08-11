"use client";

import * as React from "react";
import {
  styled,
  alpha,
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Badge,
  MenuItem,
  Menu,
  useTheme,
} from "@mui/material";

import {
  MenuOpen,
  Menu as MenuIcon,
  Search as SearchIcon,
  AccountCircle,
  Mail as MailIcon,
  Notifications as NotificationsIcon,
  LightMode,
  DarkMode,
} from "@mui/icons-material";
import { useCustomTheme } from "@/app/store/ThemeContex";
import { useToggleDrawer } from "@/app/store/ToggleDrawerContex";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  display: "none",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
  [theme.breakpoints.up("md")]: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 1),
  height: "100%",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: 5,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const customTheme = useCustomTheme();
  const theme = useTheme();
  const { toggleDrawer, open } = useToggleDrawer();
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}>
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 4 new mails"
          color={theme.palette.text.primary}>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color={theme.palette.text.primary}>
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color={theme.palette.text.primary}>
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar
            sx={{
              borderBottom: "2px solid" + theme.palette.text.primary,
              backgroundColor: theme.palette.background.default,
              height: "13vh",
            }}>
            <IconButton
              onClick={toggleDrawer}
              size="large"
              edge="start"
              color={theme.palette.text.primary}
              aria-label="open drawer"
              sx={{ mr: 2 }}>
              {open ? (
                <MenuOpen sx={{ color: theme.palette.text.primary }} />
              ) : (
                <MenuIcon sx={{ color: theme.palette.text.primary }} />
              )}
            </IconButton>
            <Typography
              variant="h6"
              fontWeight="bold"
              fontSize="20px"
              noWrap
              color={theme.palette.text.primary}
              component="div">
              My Dashboard
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: "flex" }}>
              <Search sx={{ border: "2px solid" + theme.palette.text.primary }}>
                <StyledInputBase
                  sx={{
                    color: theme.palette.text.primary,
                  }}
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
                <SearchIconWrapper>
                  <SearchIcon sx={{ color: theme.palette.text.primary }} />
                </SearchIconWrapper>
              </Search>
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color={theme.palette.text.primary}
                onClick={customTheme.toggleMode}>
                {customTheme.mode === "dark" ? (
                  <LightMode sx={{ color: theme.palette.text.primary }} />
                ) : (
                  <DarkMode sx={{ color: theme.palette.text.primary }} />
                )}
              </IconButton>
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color={theme.palette.text.primary}>
                <Badge badgeContent={4} color="error">
                  <MailIcon sx={{ color: theme.palette.text.primary }} />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color={theme.palette.text.primary}>
                <Badge badgeContent={17} color="error">
                  <NotificationsIcon
                    sx={{ color: theme.palette.text.primary }}
                  />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color={theme.palette.text.primary}>
                <AccountCircle sx={{ color: theme.palette.text.primary }} />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </Box>
    </>
  );
}
