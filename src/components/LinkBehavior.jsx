import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { forwardRef } from 'react'
import PropTypes from 'prop-types'
const LinkBehavior = forwardRef(function Link(props, ref) {
    return <RouterLink to={props.to} ref={ref} {...props} />;
});
LinkBehavior.prototype={
    to: PropTypes.string.isRequired
}
export default LinkBehavior