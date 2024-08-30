import { Circle, Menu } from '@mui/icons-material'
import { Box, Drawer, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'

interface Props {
    open: boolean
    toggleDrawer: (open: boolean) => () => void
}
export const Sidebar = ({open, toggleDrawer}: Props) => {
  return (
    <>
     <Menu onClick={toggleDrawer(true)}
     sx={{
      display:{xs: 'flex', lg: 'none'}
     }}
     /> 
       <Drawer
            open={open}
            onClose={toggleDrawer(false)}
            anchor='right'
          >
            <Box
                sx={{ width: 250, mt: 3 }}
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
                >
                        {['lorem one', 'lorem two', 'lorem three', 'lorem four', 'lorem five'].map((lorem: string, index: number) => {
                            return (
                                <ListItem key={index} disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <Circle />
                                        </ListItemIcon>
                                        <ListItemText primary={lorem} />
                                    </ListItemButton>
                                </ListItem>
                            );
                        })}
                 </Box>
          </Drawer>
    </>
  )
}
