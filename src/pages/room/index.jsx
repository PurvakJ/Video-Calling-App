import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const RoomPage = () => {
    const { roomId } = useParams();
    const containerRef = useRef(null);

    useEffect(() => {
        const myMeeting = async () => {
            if (!roomId) {
                console.error('Room ID is missing');
                return;
            }

            const appId = 1391695394;
            const serverSecret = "009054b89b55882a4d60bc246b89a204";
            const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
                appId,
                serverSecret,
                roomId,
                Date.now().toString(),
                "User"
            );

            const zc = ZegoUIKitPrebuilt.create(kitToken);
            zc.joinRoom({
                container: containerRef.current,
                sharedLinks: [
                    {
                        name: 'Copy Link',
                        url: `http://localhost:3000/room/${roomId}`,
                    },
                ],
                scenario: {
                    mode: ZegoUIKitPrebuilt.OneONoneCall,
                },
            });
        };

        myMeeting();
    }, [roomId]);

    return (
        <div ref={containerRef} style={{ position: 'relative', height: '100vh', width: '100%' }}>
            <div style={{ position: 'absolute', top: '10px', left: '50%', transform: 'translateX(-50%)', color: 'white' }}>
                <h1>Sahil ❤️ Manshu</h1>
                <h2>WELCOME TO THE PAGE!</h2>
            </div>
        </div>
    );
};

export default RoomPage;
