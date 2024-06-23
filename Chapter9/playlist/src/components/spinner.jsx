import {PropagateLoader} from 'react-spinners'
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; // Full viewport height
    width: 100vw; // Full viewport width
`

const Spinner = () => {
    return (
        <Wrapper>
            <PropagateLoader
                size={15}
                color='"#056705"'
                cssOverride={{ borderColor: '#056705' }}
            />
        </Wrapper>
    );
}

export default Spinner;