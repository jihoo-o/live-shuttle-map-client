import React, { useEffect, useState } from 'react';
import { MapMarker, Polyline } from 'react-kakao-maps-sdk';
import { getMarkerImage } from '../utils/kakaomap';
const CreatingMarker = ({ creatingMarker, onUpdateCreatingMarker }) => {
    const [polyline, setPolyline] = useState(null);
    const [polylinePath, setPolylinePath] = useState();
    const [image, setImage] = useState('');
    useEffect(() => {
        if (!creatingMarker)
            return;
        setPolylinePath((oldPath) => {
            if (oldPath)
                return oldPath;
            const newPath = [Object.assign({}, creatingMarker.startPosition)];
            return newPath;
        });
        setImage(getMarkerImage({
            type: creatingMarker.type,
            state: creatingMarker.state ? creatingMarker.state : null,
            isCurrent: creatingMarker.isCurrent !== null
                ? creatingMarker.isCurrent
                : null,
        }));
    }, [creatingMarker]);
    const handleDragEnd = (marker) => {
        const kakaoPosition = marker.getPosition();
        const newPosition = {
            lat: kakaoPosition.getLat(),
            lng: kakaoPosition.getLng(),
        };
        setPolylinePath((oldPath) => {
            if (!oldPath)
                return;
            if (oldPath.length > 1) {
                oldPath.pop();
            }
            return [...oldPath, newPosition];
        });
        let isCurrent = true;
        setPolyline((polyline) => {
            const length = polyline.getLength();
            if (length <= 20) {
                isCurrent = true;
            }
            else if (length <= 50) {
                isCurrent = false;
            }
            else {
                /**
                 * TODO
                 * 마커 생성 버튼 클릭 불가
                 */
                isCurrent = false;
                console.log('50m 바깥에는 마커를 생성할 수 없습니다.');
            }
            return polyline;
        });
        onUpdateCreatingMarker(Object.assign(Object.assign({}, newPosition), { isCurrent }));
    };
    return (React.createElement(React.Fragment, null,
        creatingMarker && creatingMarker.startPosition && (React.createElement(MapMarker, { draggable: true, position: {
                lat: creatingMarker.startPosition.lat,
                lng: creatingMarker.startPosition.lng,
            }, image: {
                src: image,
                size: {
                    width: 50,
                    height: 50,
                },
            }, onDragEnd: handleDragEnd })),
        polylinePath && (React.createElement(Polyline, { path: polylinePath, onCreate: (polyline) => {
                console.log('create polyline');
                setPolyline(polyline);
            } }))));
};
export default CreatingMarker;
//# sourceMappingURL=CreatingMarker.js.map