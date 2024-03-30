import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

export function MyList({ items, selectedItemId, ...props }) {
  return (
    <List {...props}>
      {Object.values(items).map((item, index) => {
        if (item.type && item.type === "divider") {
          return <Divider key={index} />;
        }
        return (
          <ListItem key={index} disablePadding>
            <ListItemButton
              href={item.uri}
              selected={item.id === selectedItemId}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} sx={{ pr: 3 }} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
