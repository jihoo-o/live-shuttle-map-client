import React from 'react';

const CreatingMarkerButtons = ({
    onPublishCreatingMarker,
    onClearCreatingMarker,
}) => (
    <>
        <button onClick={onPublishCreatingMarker}>확인</button>
        <button onClick={onClearCreatingMarker}>취소</button>
    </>
);

export default CreatingMarkerButtons;
