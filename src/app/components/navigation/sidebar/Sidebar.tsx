import { Circle, Menu } from '@mui/icons-material'
import { Box, Drawer, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface Props {
    open: boolean
    toggleDrawer: (open: boolean) => () => void
}
export const Sidebar = ({open, toggleDrawer}: Props) => {
  const currentPath = usePathname()
  
  return (
    <>
     <Menu onClick={toggleDrawer(true)}
        sx={{
          display:{xs: 'flex', lg: 'none'},
          color: 'white',
          cursor:'pointer',
        }}
     /> 
       <Drawer
            open={open}
            onClose={toggleDrawer(false)}
            anchor='right'
            sx={{
              '& .MuiDrawer-paper': {
                    backgroundColor:'#312565'
                  }
            }}
          >
            <Box
                sx={{ width: 250, mt: 3, 
                height:'100%',
                 }}
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
             
                >
                        {[      {text:'References', href: '#references'},
              {text:'About Us', href: '#about'},
              {text:' Steps', href: '#steps'},
              {text:'Pricing', href: '#book-now-section'},
              {text:'Team', href: '#team'},
              {text:'Faqs', href: '#faqs'},
                        ].map((lorem: {text: string , href: string}, index: number) => {
                            return (
                              <Link href={currentPath === '/form' ? '/' : lorem.href} 
                              key={index}
                              >
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemText sx={{
                                          color:'white',
                                          textAlign:'left',
                                          paddingLeft:'25px'
                                        }}  primary={lorem.text} />
                                    </ListItemButton>
                                </ListItem>
                             </Link>
                            )
                        })}
                 </Box>
          </Drawer>
    </>
  )
}
