import React, { useEffect, useRef } from 'react';

const Map = ({
    currentService,
    map,
    userMarkerController,
    stationMarkerController,
}) => {
    const mapContainer = useRef();

    useEffect(() => {
        const mapInstance = new map(mapContainer.current);
        const userMarker = new userMarkerController(mapInstance);
        const stationMarker = new stationMarkerController(mapInstance);
        stationMarker.setAllShuttlestops();
    }, []);

    return (
        <>
            <div
                style={{
                    width: '100vw',
                    height: '50vh',
                    borderRadius: '10px',
                    padding: '5px',
                }}
            >
                <div
                    ref={mapContainer}
                    id="map"
                    style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: '10px',
                    }}
                ></div>
            </div>
            {/* <img
                src="https://lh3.googleusercontent.com/SKNF6oHSr7KcTMj-Rgown6rA3srWavz11Jw7Chm21Qut3AcN53roTjArv3X9vMDevOYVDKgLHt3dQbJs-QQEmljxDbJTzQL49eZ6KPdiCTiL8B3pDfk_A5cNPWTrwYjFYTbyKoMYJra1fffygVymAtvDRBZY1TdEnGFL4zaWFhk3-rjGFzWwiYd9rNvq5Az9BbMr6I0ICQyZzP2qygRwcbLKuRtJOKAhtheCF21xX93zsRd6X8JJkl0cgw4eSiXOfNGgEg5iozqOEnsAunMiQWy10f3b6F2WrZ2WSeLzV_K-6TjBF6GKGAq_p93Nqmwhpvgiq-Q8seJ9do48V-aGlvCJzDvb_shavw4zKdguRfUPjYdWX5B3lsd3C5QhoIjYU6gume9AsNs-xF29PSE9Ym2gg7hZfXpl2Jo_0WGmIcwsL4N5kc_VgmKXGUWAa3ZpEDDDzYYAlDxs1uydBzMoo-McNqRLdA1Ios75ABECb-l7V7cxYLFm6cR_ho2iGFIVvro2_1nZoS9gVgh4A46R8Yx2Joblsy1vwiyr_9qC_6KTlVP_2JGg8JU2D4H93wjL5OgPMBRteu77W_CcyfP46Hx-l-rxQhn4Szd0C5x2zQvPmzO1mbxfjk6-0bnzoNquhPDMZnNykU1YxDH5O-HOLy1T4EwfFgaSg5j_dLAct41o_nvzxs9w1zdvLWPDofO2QpwwCgwfIILd3yjmlu3rHg=s500-no?authuser=1"
                alt=""
                style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '10px',
                }}
            /> */}
        </>
    );
};

export default Map;
