import React from 'react';
import styled from 'styled-components';
import CreatingMarkerButtons from './CreatingMarkerButtons';

const StyledFloatTab = styled.div`
    position: absolute;
    top: 10px;
    left: 10px;
    height: 60px;
    width: 50%;
    z-index: 999;
`;

const FloatTab = ({
    creatingMarker,
    onPublishCreatingMarker,
    onClearCreatingMarker,
}) => {
    return (
        <StyledFloatTab>
            {creatingMarker && (
                <CreatingMarkerButtons
                    onPublishCreatingMarker={onPublishCreatingMarker}
                    onClearCreatingMarker={onClearCreatingMarker}
                />
            )}
        </StyledFloatTab>
    );
};

export default FloatTab;
