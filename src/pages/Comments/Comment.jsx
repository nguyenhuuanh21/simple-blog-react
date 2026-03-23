import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { Divider } from '@mui/material';

const Comment = ({comment}) => {
    return (
        <>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg" />
                </ListItemAvatar>
                <ListItemText
                    primary={comment.user.fullName}
                    secondary={
                        <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                sx={{ color: 'text.primary', display: 'inline' }}
                            >
                                {comment.user.username  } — 
                            </Typography>
                            &nbsp;{comment.body}
                        </React.Fragment>
                    }
                />
            </ListItem>
        </>

    )
}

export default Comment