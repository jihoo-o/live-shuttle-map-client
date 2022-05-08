import React, { useEffect, useState } from 'react';
import { MapMarker, Polyline, Circle } from 'react-kakao-maps-sdk';
import { Position } from '../types/map';
import { getMarkerImage } from '../utils/kakaomap';

const CreatingMarker = ({ creatingMarker, onUpdateCreatingMarker }) => {
    const [polyline, setPolyline] = useState<null | any>(null);
    const [polylinePath, setPolylinePath] = useState<null | Position[]>();
    const [image, setImage] = useState<string>('');

    useEffect(() => {
        if (!creatingMarker) return;
        setPolylinePath((oldPath) => {
            if (oldPath) return oldPath;
            const newPath = [{ ...creatingMarker.startPosition }];
            return newPath;
        });
        setImage(
            getMarkerImage({
                type: creatingMarker.type,
                state: creatingMarker.state ? creatingMarker.state : null,
                isCurrent:
                    creatingMarker.isCurrent !== null
                        ? creatingMarker.isCurrent
                        : null,
            })
        );
    }, [creatingMarker]);

    const handleDragEnd = (marker) => {
        const kakaoPosition = marker.getPosition();
        const newPosition = {
            lat: kakaoPosition.getLat(),
            lng: kakaoPosition.getLng(),
        };
        setPolylinePath((oldPath) => {
            if (!oldPath) return;
            if (oldPath.length > 1) {
                oldPath.pop();
            }
            return [...oldPath, newPosition];
        });

        let isCurrent: boolean = true;
        setPolyline((polyline) => {
            const length = polyline.getLength();
            if (length <= 20) {
                isCurrent = true;
            } else if (length <= 50) {
                isCurrent = false;
            } else {
                /**
                 * TODO
                 * 마커 생성 버튼 클릭 불가
                 */
                isCurrent = false;
                console.log('50m 바깥에는 마커를 생성할 수 없습니다.');
            }
            return polyline;
        });
        onUpdateCreatingMarker({ ...newPosition, isCurrent });
    };

    return (
        <>
            {creatingMarker && creatingMarker.startPosition && (
                <>
                    <MapMarker
                        draggable={true}
                        position={{
                            lat: creatingMarker.startPosition.lat,
                            lng: creatingMarker.startPosition.lng,
                        }}
                        image={{
                            src: image,
                            size: {
                                width: 50,
                                height: 50,
                            },
                        }}
                        onDragEnd={handleDragEnd}
                    />
                    <Circle
                        center={{
                            lat: creatingMarker.startPosition.lat,
                            lng: creatingMarker.startPosition.lng,
                        }}
                        radius={50}
                        strokeWeight={3} // 선의 두께입니다
                        strokeColor={'#fa983a'} // 선의 색깔입니다
                        strokeOpacity={2} // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
                        strokeStyle={'dash'} // 선의 스타일 입니다
                        fillColor={'#fed330'} // 채우기 색깔입니다
                        fillOpacity={0.7} // 채우기 불투명도 입니다/>
                    />
                    <Circle
                        center={{
                            lat: creatingMarker.startPosition.lat,
                            lng: creatingMarker.startPosition.lng,
                        }}
                        radius={20}
                        strokeWeight={3} // 선의 두께입니다
                        strokeColor={'#78e08f'} // 선의 색깔입니다
                        strokeOpacity={2} // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
                        strokeStyle={'dash'} // 선의 스타일 입니다
                        fillColor={'#b8e994'} // 채우기 색깔입니다
                        fillOpacity={0.7} // 채우기 불투명도 입니다/>
                    />
                </>
            )}
            {polylinePath && (
                <Polyline
                    path={polylinePath}
                    onCreate={(polyline) => {
                        console.log('create polyline');
                        setPolyline(polyline);
                    }}
                    strokeOpacity={0}
                />
            )}
        </>
    );
};
export default CreatingMarker;
