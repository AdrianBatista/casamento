import { AppBar, Box, Button, Container, Link, Toolbar } from "@mui/material";

export function DesktopAppBar({ logo, menu }) {
  return (
    <AppBar
      position="fixed"
      sx={{
        height: { md: "120px", lg: "60px" },
        background: "rgba(255, 255, 255, 0.7)",
        color: "#4D5E89",
      }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              height: "60px",
              alignItems: "center",
              display: "inline-flex",
            }}
          >
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
          <Box
            sx={{
              height: "60px",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
            }}
          >
            {Object.values(menu).map((item, index) => {
              if (item.type && item.type === "divider") {
                return;
              }
              return (
                <Button
                  key={index}
                  sx={{
                    fontSize: "1rem",
                    fontFamily: '"Forum", serif',
                  }}
                  href={item.uri}
                >
                  {item.label}
                </Button>
              );
            })}
          </Box>
        </Box>
      </Container>
    </AppBar>
  );
}
