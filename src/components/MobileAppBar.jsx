import { Menu } from "@mui/icons-material";
import { AppBar, Box, IconButton, Link, Toolbar } from "@mui/material";

export function MobileAppBar({ setDrawerState, toogleSearchBackdrop }) {
  return (
    <AppBar
      position="fixed"
      sx={{
        height: "60px",
        background: "rgba(255, 255, 255, 0.7)",
        color: "#4D5E89",
      }}
    >
      <Toolbar sx={{ height: "60px" }}>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={() => setDrawerState(true)}
        >
          <Menu />
        </IconButton>
        <Box sx={{ display: "flex", flex: 1 }}>
          <Link
            href="/"
            sx={{
              display: "flex",
              justifyContent: "center",
              fontFamily: '"Cormorant Garamond", serif',
              fontWeight: 700,
              fontSize: "1.5rem",
              textDecoration: "none",
            }}
          >
            G & A
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
