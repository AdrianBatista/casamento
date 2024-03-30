import { useState } from "react";
import { Box, SwipeableDrawer } from "@mui/material";
import { MyList } from "@/components/MyList";
import { MainMenu } from "@/components/MainMenu";
import { MobileAppBar } from "@/components/MobileAppBar";
import { DesktopAppBar } from "@/components/DesktopAppBar";
import { Outlet } from "react-router-dom";
import { Footer } from "@/components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../slices/uiSlice";
import { MyModal } from "../components/MyModal";

export function MainLayout() {
  const dispatch = useDispatch();
  const ui = useSelector((state) => state.ui);

  const [state, setState] = useState({
    drawer: {
      open: false,
      menu: MainMenu,
      selectedMenuItemId: null,
    },
    openSearchBackdrop: false,
  });

  const setDrawerState = (open) => {
    setState((old) => ({
      ...old,
      drawer: { ...old.drawer, open },
    }));
  };

  const toogleSearchBackdrop = () => {
    setState((old) => ({
      ...old,
      openSearchBackdrop: !old.openSearchBackdrop,
    }));
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        height: "100vh",
        overflowX: "hidden",
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <SwipeableDrawer
          open={state.drawer.open}
          onOpen={() => setDrawerState(true)}
          onClose={() => setDrawerState(false)}
        >
          <MyList
            items={state.drawer.menu}
            selectedItemId={state.drawer.selectedMenuItemId}
          />
        </SwipeableDrawer>
        <Box sx={{ display: { md: "none" } }}>
          <MobileAppBar
            setDrawerState={setDrawerState}
            toogleSearchBackdrop={toogleSearchBackdrop}
          />
        </Box>
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <DesktopAppBar menu={state.drawer.menu} />
        </Box>
        <Box sx={{ height: { xs: "60px", md: "120px", lg: "60px" } }}></Box>
        <Box>
          <Outlet />
        </Box>
      </Box>
      <Footer />
      <MyModal
        open={ui.modal?.open}
        content={ui.modal?.content}
        title={ui.modal?.title}
        onClose={() => dispatch(closeModal())}
      />
    </Box>
  );
}
