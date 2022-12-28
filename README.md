# Kiosk-catch

#설치 방법

1. node js 설치
2. npm 설치
3. Android Studio 설치
4. Android Studio SDK 환경변수 설정
- jdk 설치 후 JAVA_HOME 환경변수 설정이 되어있는지 확인
자바 설치할때 15로 설치하기
SDK API 28로 하면 에뮬레이터도 같은 API LEVEL로 설정하기
5. yarn 설치
    $ npm install --global yarn
    $ yarn --version
6. React Native CLI 설치
    # 설치
    $ npm install -g react-native-cli
    # 버전확인
    $ react-native --version
    
7. React-Native 신규 프로젝트 생성

8. SDK 설정
    1) 프로젝트에서 android 디렉토리로 이동
    2) local.properties 파일 생성
    3) 파일에 내용 입력

        sdk.dir=C\:\\Users\\UserName\\AppData\\Local\\Android\\sdk
        # 위치는 2번의 Android SDK Location과 동일
        # sdk.dir=C\:\\Users\\nyang\\AppData\\Local\\Android\\Sdk`


---

* conponents : 컴포넌트 파일 관리
* contexts : Context API 파일 관리
* navigation : 내비게이션 파일 관리
* screens : 화면 파일 관리
* utils : 프로젝트에서 이용할 기타 기능 관리