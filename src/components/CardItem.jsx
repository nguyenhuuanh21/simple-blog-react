import { Button, Card, CardActions, CardContent, CardMedia, Grid, Link, Typography } from '@mui/material'
import LinkBehavior from './LinkBehavior'
const CardItem = (props) => {
    return (
        <Grid size={4}>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia  
                    sx={{ height: 140 }}
                    image="https://picsum.photos/seed/picsum/200/300"
                    title={props.post.title}
                />
                <CardContent style={{ paddingBottom: 0 }}>
                    <Typography gutterBottom variant="h5" component="div" fontSize={18} style={{ 'minHeight': '70px' }}>
                        <Link color='inherit' to={`/post/${props.post.id}`} style={{textDecoration:'none'}} component={LinkBehavior} >
                            {props.post.title}
                        </Link>
                    </Typography>

                </CardContent>
                <CardActions>
                    <Button variant='outlined' size="small" component={LinkBehavior} to={`/post/${props.post.id}`}>
                        Xem chi tiết
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default CardItem