import { Home, PinDrop, Redeem } from "@mui/icons-material";

export const MainMenu = [
  {
    id: 1,
    label: "Início",
    uri: "/",
    icon: <Home />,
  },
  {
    id: 2,
    label: "Local",
    uri: "/local",
    icon: <PinDrop />,
  },
  {
    id: 3,
    label: "Lista de Presentes",
    uri: "/presentes",
    icon: <Redeem />,
  },
];
