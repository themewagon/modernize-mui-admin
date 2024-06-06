import {
  Avatar,
  Box,
  Button,
  Chip,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';
import { messageOptions } from 'data/navbar/menu-data';
import { useState } from 'react';
import SimpleBar from 'simplebar-react';

const MessageDropdown = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <IconButton
        onClick={handleClick}
        color="inherit"
        sx={{
          color: 'grey.600',
        }}
      >
        <IconifyIcon icon="mdi:message-text-outline" fontSize="1.5rem" />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          sx: { flex: 1 },
        }}
        keepMounted
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        slotProps={{
          paper: {
            style: {
              width: theme.spacing(42),
            },
          },
        }}
      >
        <Stack direction="row" py={2} px={4} justifyContent="space-between" alignItems="center">
          <Typography variant="h6">Messages</Typography>
          <Chip label="5 new" color="primary" size="small" />
        </Stack>
        <SimpleBar style={{ height: '385px' }}>
          {messageOptions.map((notification) => (
            <MenuItem
              key={notification.id}
              sx={{
                py: 2,
                px: 4,
              }}
              onClick={handleClose}
            >
              <Stack direction="row" alignItems="center" spacing={2}>
                <Avatar
                  src={notification.avatar}
                  alt={notification.avatar}
                  sx={{
                    width: 36,
                    height: 36,
                  }}
                />
                <Box
                  sx={{
                    width: 200,
                  }}
                >
                  <Typography variant="subtitle2" color="textPrimary" fontWeight={600} noWrap>
                    {notification.title}
                  </Typography>
                  <Typography color="textSecondary" variant="subtitle2" noWrap>
                    {notification.subtitle}
                  </Typography>
                </Box>
              </Stack>
            </MenuItem>
          ))}
        </SimpleBar>
        <Stack direction="row" sx={{ width: 1, justifyContent: 'center' }}>
          <Button
            size="small"
            variant="outlined"
            sx={{
              mt: 3.5,
              width: '80%',
            }}
          >
            See All Messages
          </Button>
        </Stack>
      </Menu>
    </>
  );
};

export default MessageDropdown;