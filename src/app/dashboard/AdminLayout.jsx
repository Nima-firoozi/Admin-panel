"use client";

import React, { Fragment, useState } from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  styled,
  useTheme,
  CssBaseline,
  Button,
  useMediaQuery,
} from "@mui/material";
import {
  Dashboard,
  People,
  ShoppingCart,
  Inventory,
  Logout,
  Settings,
} from "@mui/icons-material";
import { useToggleDrawer } from "@/app/store/ToggleDrawerContex";
import DashboardPage from "../components/MainPags/DashboardPage";
import SellersPage from "../components/MainPags/SellersPage";
import ProductsPage from "../components/MainPags/ProductsPage";
import StorePage from "../components/MainPags/StorePage";
import SettingPage from "../components/MainPags/SettingPage";
import Link from "next/link";
const drawerWidth = 300;
const collapsedWidth = 56;
const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppDrawer = styled(Drawer)(({ theme, open }) => ({
  // display: "none",
  height: "87vh",
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  [theme.breakpoints.up("xs")]: {
    "& .MuiDrawer-paper": {
      position: "absolute",
      overflowX: "hidden",
      width: open ? drawerWidth : 0,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      ...(!open && {
        transition: theme.transitions.create("width", {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
      }),
    },
  },
  [theme.breakpoints.up("sm")]: {
    "& .MuiDrawer-paper": {
      position: "relative",
      overflowX: "hidden",
      width: open ? drawerWidth : collapsedWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      ...(!open && {
        transition: theme.transitions.create("width", {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
      }),
    },
  },
}));

const menuItems = [
  { text: "Dashboard", icon: <Dashboard /> },
  { text: "Sellers", icon: <People /> },
  { text: "Products", icon: <ShoppingCart /> },
  { text: "Store", icon: <Inventory /> },
  { text: "Setting", icon: <Settings /> },
];
export default function AdminLayout() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [active, setActive] = useState(0);
  const { toggleDrawer, open } = useToggleDrawer();
  const [page, setPage] = useState(menuItems[0].text);

  const MainPage = () => {
    switch (page) {
      case menuItems[0].text:
        return <DashboardPage />;
      case menuItems[1].text:
        return <SellersPage />;
      case menuItems[2].text:
        return <ProductsPage />;
      case menuItems[3].text:
        return <StorePage />;
      case menuItems[4].text:
        return <SettingPage />;
      default:
        break;
    }
  };

  function changeActive(number) {
    setActive(number);
  }
  return (
    <Box
      sx={{
        display: "flex",
        height: "87vh",
        position: "relative",
        overflow: "hidden",
      }}>
      <CssBaseline />

      <AppDrawer variant="permanent" open={open} onClose={toggleDrawer}>
        <Divider />

        <List
          sx={{
            borderRight: "2px solid" + theme.palette.text.primary,
            backgroundColor: theme.palette.background.default,
            fontSize: "35px",
            height: "100%",

            "&   *": {
              color: theme.palette.text.primary,
            },
          }}>
          {menuItems.map((item, index) => (
            <Fragment key={index + item.text}>
              <ListItem
                key={index + item.text}
                onClick={() => {
                  changeActive(index);
                  setPage(item.text);
                  isMobile && open && toggleDrawer();
                }}
                button
                sx={{
                  padding: "0 !important",
                  cursor: "pointer",
                  px: 2.5,
                  minHeight: 48,
                  transition: "400ms",
                  justifyContent: open ? "initial" : "center",
                  marginBottom: open ? 4 : 1,
                  backgroundColor:
                    active === index
                      ? theme.palette.action.hover
                      : theme.palette.background.default,
                  "& *": {
                    fontSize: "30px !important",
                  },
                  "&:hover": {
                    backgroundColor: theme.palette.action.hover,
                  },
                }}>
                <Button
                  variant="text"
                  sx={{
                    paddingInline: "17px",
                    width: "100%",
                    height: "100%",
                  }}>
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    sx={{
                      textTransform: "none",
                      textAlign: "start",
                      opacity: open ? 1 : 0,
                      transition: "opacity 0.3s ease",
                    }}
                  />
                </Button>
              </ListItem>
              {index == menuItems.length - 1 && (
                <ListItem
                  key={index + item.text + "Logout"}
                  button
                  sx={{
                    padding: "0 !important",
                    cursor: "pointer",
                    px: 2.5,
                    minHeight: 48,
                    transition: "400ms",
                    justifyContent: open ? "initial" : "center",
                    marginBottom: open ? 4 : 1,
                    backgroundColor: theme.palette.background.default,
                    "& *": {
                      fontSize: "30px !important",
                    },
                    "&:hover": {
                      backgroundColor: theme.palette.action.hover,
                    },
                  }}>
                  <Button
                    variant="text"
                    sx={{
                      paddingInline: "17px",
                      width: "100%",
                      height: "100%",
                    }}>
                    <Link
                      href="/"
                      style={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        textDecoration: "none",
                        alignItems: "center",
                        justifyContent: "start",
                      }}>
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : "auto",
                          justifyContent: "center",
                        }}>
                        <Logout />
                      </ListItemIcon>
                      <ListItemText
                        primary="Logout"
                        sx={{
                          textTransform: "none",
                          textAlign: "start",
                          opacity: open ? 1 : 0,
                          transition: "opacity 0.3s ease",
                        }}
                      />
                    </Link>
                  </Button>
                </ListItem>
              )}
            </Fragment>
          ))}
        </List>
      </AppDrawer>
      <Main
        open={true}
        onClick={() => {
          isMobile && open && toggleDrawer();
        }}
        sx={{
          backgroundColor: theme.palette.background.default,
          overflow: "auto",
          overflowX: "hidden",
        }}>
        <MainPage />
      </Main>
    </Box>
  );
}
