import { Backdrop, CircularProgress } from '@mui/material'
import PropTypes from 'prop-types'

const Loading = ({ type = 'backdrop' }) => {
    return (
        type === 'backdrop' ? (
            <Backdrop
                sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
                open={true}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        ) : (
            <CircularProgress color="inherit" />
        )
    )
}
Loading.prototype = {
    type: PropTypes.string
}
export default Loading