import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import styled from 'styled-components';

const CenteredWrapper = styled.section`
    text-align: center;
`;

interface AppRouteProps {
}

interface AppProps extends RouteComponentProps<AppRouteProps> { }

export const LandingPage = React.memo(function (props: AppProps) {
    const dispatch = useDispatch();

    // Runs once, when component is mounted
    useEffect(() => {
        console.log(props);
    }, []);

    return (
        <div id='landingpage' >
            <CenteredWrapper>
                <h2>Test</h2>
            </CenteredWrapper>
        </div>
    );
});


