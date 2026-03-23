import List from '@mui/material/List';
import PropTypes from 'prop-types'
import Comment from './Comment'
export default function CommentList({comments}) {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {comments.map((comment, index) => (
            <Comment key={index} comment={comment} />
        ))}

    </List>
  );
}
CommentList.prototype={
    comments: PropTypes.array.isRequired
}