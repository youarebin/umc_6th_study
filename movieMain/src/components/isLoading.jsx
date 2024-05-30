import {Oval} from 'react-loader-spinner'
import styled from 'styled-components';

const CenteredContainer = styled.div`
    background-color: #1f2141; 
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; // Full viewport height
    width: 100vw; // Full viewport width
`;

const LoadingSpinner = () => {
    return (
        <CenteredContainer>
            <Oval
                color="white"
                height={50}
                width={50}
            />
        </CenteredContainer>
    );
}

export default LoadingSpinner;