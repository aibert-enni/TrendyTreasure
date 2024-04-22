import { Circle } from '@mui/icons-material'
import { Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'

const PasswordInfo = () => {
    return (
        <List sx={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            '.MuiListItem-root': {
                gap: '10px',
                p: 0
            },
            '.MuiListItemText-primary': {
                color: 'rgba(102,102,102,0.6)',
                fontSize: '12px'
            },
            '.MuiListItemIcon-root': {
                minWidth: '0px'
            },
            '.MuiSvgIcon-root': {
                width: '10px'
            }
        }}>
            <ListItem>
                <ListItemIcon>
                    <Circle />
                </ListItemIcon>
                <ListItemText>
                    Use 8 or more characters
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <Circle />
                </ListItemIcon>
                <ListItemText>
                    Use a number (e.g. 1234)
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <Circle />
                </ListItemIcon>
                <ListItemText>
                    Use upper and lower case letters (e.g. Aa)
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <Circle />
                </ListItemIcon>
                <ListItemText>
                    Use a symbol (e.g. !@#$)
                </ListItemText>
            </ListItem>
        </List>
    )
}

export default PasswordInfo