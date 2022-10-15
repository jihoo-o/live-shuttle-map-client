<h1 align="center">셔틀버스 실시간 지도(Live Shuttle Map)</h1>
<p align="center">
    <img src="https://drive.google.com/uc?export=view&id=1VWv3rFT_vCuCYdgf7syIrZcSCjsxy3Xn" alt="사용자 클라이언트" width="200" height="400"/>
</p>
<p align="center">
    <img src="https://drive.google.com/uc?export=view&id=1K51S0lwUxoS2YgKeEqSOkCRhoVR7wEpV" alt="시스템 구조" width="400" height="400"/>
</p>

## 프로젝트 정보 💁🏻

-   설명
    -   부산외국어대학교 컴퓨터공학과 캡스톤디자인 수업에서 제작된 <b>교내 셔틀버스의 위치를 실시간으로 확인할 수 있는 지도 PWA</b>입니다
-   기간
    -   개발: 2022.3.18 ~ 2022.5.23
-   구성원
    -   백엔드
        -   [길해준](https://github.com/Do-Yun0223)(true_blue2@naver.com): 서버
        -   [강규림](https://github.com/HelloLotusRoot)(rbfla0426_1@naver.com): api
        -   [박혜민](https://github.com/snees)(snees@naver.com): api·데이터베이스
    -   프론트엔드, 프로젝트 총괄: [김선화](https://github.com/kmseonhwa)(seonhwakei@gmail.com)
    -   디자인: 임은혜(dolphin4007@naver.com)

## 기술스택 🧑🏻‍💻

<table border="2">
    <tr>
        <th><p align="center">분야</p></th>
        <th><p align="center">사용 기술</p></th>
    </tr> 
    <tr>
        <td>프론트엔드</td>
        <td>React, Javascript, Typescript, Styled-components</td>
    </tr>
    <tr>
        <td>백엔드</td>
        <td>Springboot</td>
    </tr>
    <tr>
        <td>데이터베이스</td>
        <td><del>MySQL, Firebase</del></td>
    </tr>
    <tr>
        <td>라이브러리</td>
        <td><a src="https://apis.map.kakao.com/">Kakao maps</a>, <a src="https://github.com/JaeSeoKim/react-kakao-maps-sdk">React-kakao-maps-sdk</a>, <del><a src="https://developers.kakao.com/product/kakaoLogin">Kakao login</a></del></td>
    </tr>
    <tr>
        <td>협업</td>
        <td>Figma(<a src="https://www.figma.com/file/TY57qnNAz2fDRCj54bJDPG/MUI-for-Figma-v5.4.0-(Community)-(Community)?node-id=5005%3A61176)">디자인</a>, <a src="https://www.figma.com/file/TYowh7VWRn6LFwxKrsM6Ub/capstone?node-id=0%3A1">개발</a>), <a src="https://discovered-limpet-efa.notion.site/369c62bbe50a4b20bbd7b28a6a485f0e">Notion</a>, Discord</td>
    </tr>
</table>

## 아키텍처 🏗

<table border="2">
    <tr>
        <th><p align="center">기획</p></th>
    </tr> 
    <tr>
        <td><img src="https://drive.google.com/uc?export=view&id=10mjR8FharJTZO4W4H9VISs1s4fEnG277" alt="기획 아키텍처" width="400" height="200"/></td>
    </tr>
    <tr>
        <th><p align="center">개발</p></th>
    </tr> 
    <tr>
        <td><img src="https://drive.google.com/uc?export=view&id=1oVrRf9VP7_ByRHZSlgL_xnuA0VrP8ZXr" alt="구현 아키텍처" width="400" height="200"/></td>
    </tr>
    <tr>
        <th><p align="center">배포</p></th>
    </tr> 
    <tr>
        <td><img src="https://drive.google.com/uc?export=view&id=1tsUOoHsPW5j6O39huiffA7z4EdZyoMvF" alt="배포 아키텍처" width="400" height="200"/></td>
    </tr>
</table>

## 기능 완성도 ✔

-   셔틀버스 🚌

    -   [x] 셔틀버스 클라이언트: 서버에 셔틀버스의 현재 위치 전송
    -   [x] 사용자 클라이언트: 사용자 화면에 셔틀버스의 위치 출력
    -   [ ] 사용자 클라이언트: 각 정류장의 도착시간 출력

-   택시 🚕
    -   [x] 합승 요청 대기: 사용자 위치에 마커 생성
    -   [x] 합승 요청: 다른 사용자들의 마커 확인
    -   [ ] 채팅: 사용자 간의 채팅
    -   [ ] 알림: 채팅·합승 요청 알림

## 기능 설명 📖

-   셔틀버스 클라이언트 🚌
<p align="center">
    <img src="https://drive.google.com/uc?export=view&id=13Z1ofeFtaddMFlH_2fu4hmKYHQG8aA_v" alt="셔틀버스 클라이언트 🚌" width="500" height="400"/>
</p>
-   사용자 클라이언트 👥
<p align="center">
    <img src="https://drive.google.com/uc?export=view&id=1YHckpaeWqcaAf8xqljAw5of-sh1Wv8q8" alt="사용자 클라이언트 👥" width="500" height="400"/>
</p>
-   웹앱 📱
<p align="center">
    <img src="https://drive.google.com/uc?export=view&id=1l8nzu-e55zWdK0tcbZr6WXKFzMxUWFL3" alt="웹앱 📱" width="800" height="400"/>
</p>

## API 문서 📄

https://documenter.getpostman.com/view/19973322/Uz5Gobzc#0f7cca67-ee17-4736-bf4a-201052158d2a

## 진행 상황 ⏳

~~서비스 시행 준비 및 개선사항 업데이트 진행중~~

## 링크 🔗

-   셔틀버스 클라이언트
    -   소스코드: https://github.com/kmseonhwa/capstone-shuttle-client
    -   배포: https://kmseonhwa.github.io/capstone-shuttle-client/
-   사용자 클라이언트
    -   소스코드: 현 리포지토리
    -   배포: https://kmseonhwa.github.io/capstone-client/
-   백엔드: https://github.com/HelloLotusRoot/capstonePro
-   외부 라이브러리
    -   React-kakao-maps-sdk⭐️: https://github.com/JaeSeoKim/react-kakao-maps-sdk
    -   Kakao maps: https://apis.map.kakao.com/
    -   Kakao login: https://developers.kakao.com/product/kakaoLogin
