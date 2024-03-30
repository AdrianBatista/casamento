import { Close } from "@mui/icons-material";
import { Box, IconButton, Modal, Paper, Typography } from "@mui/material";

export function MyModal({ open, title, content, onClose }) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Paper
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          outline: "none",
          borderRadius: 1,
          maxHeight: "85vh",
          overflowY: { xs: "scroll", md: "hidden" },
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "row-reverse", p: 1 }}>
          <IconButton onClick={onClose}>
            <Close />
          </IconButton>
          {title && (
            <Typography
              variant="h5"
              sx={{
                flex: 1,
                display: "flex",
                alignItems: "center",
              }}
            >
              {title}
            </Typography>
          )}
        </Box>
        <Box sx={{ px: 2, pb: 2 }}>{content}</Box>
      </Paper>
    </Modal>
  );
}
