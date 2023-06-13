import PropTypes from 'prop-types';
import { ContainerDiv } from './Container.styled';

export function Container({ children }) { 
    return <ContainerDiv>{children}</ContainerDiv>;
}

Container.propTypes = {
    children: PropTypes.node.isRequired
};