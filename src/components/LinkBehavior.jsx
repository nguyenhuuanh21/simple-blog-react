import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { forwardRef } from 'react'

const LinkBehavior = forwardRef(function Link(props, ref) {
    return <RouterLink to={props.to} ref={ref} {...props} />;
});

export default LinkBehavior