import 'react-native-gesture-handler';
import StageHeader from 'KioskCatch/src/components/Kiosk/Stage';
import KioskStage_2_2_1 from 'KioskCatch/src/screens/LR_Kiosk/Tutorial/KioskStage_2-2-1';
import KioskStage_2_3 from 'KioskCatch/src/screens/LR_Kiosk/Tutorial/KioskStage_2-3';
import KioskStage_2_3_1 from 'KioskCatch/src/screens/LR_Kiosk/Tutorial/KioskStage_2-3-1';
import KioskStage_3_1 from 'KioskCatch/src/screens/LR_Kiosk/Tutorial/KioskStage_3-1';
import KioskStage_3_3 from 'KioskCatch/src/screens/LR_Kiosk/Tutorial/KioskStage_3-3';
import KioskStage_4_1 from 'KioskCatch/src/screens/LR_Kiosk/Tutorial/KioskStage_4-1';
import KioskStage_4_2 from 'KioskCatch/src/screens/LR_Kiosk/Tutorial/KioskStage_4-2';
import KioskStage_4_3 from 'KioskCatch/src/screens/LR_Kiosk/Tutorial/KioskStage_4-3';

import Tts from 'react-native-tts';
var Tasktext = '';
export default TutorialHandler = props => {
  Tts.setDefaultLanguage('ko-KR');
  Tts.setDefaultRate(0.6);
  // Tts.addEventListener('tts-start', event => console.log('start', event));
  // Tts.addEventListener('tts-finish', event => console.log('finish', event));
  // Tts.addEventListener('tts-cancel', event => console.log('cancel', event));

  // SetText(props.KioskState);
  // _onPressSpeech();

  return (
    <>
      {/* 튜토리얼 화면 */}
      {props.KioskState === '2-1' ? (
        <KioskStage_2_1
          navigation={props.navigation}
          CatagoryRef={props.CatagoryRef}
          headerHeight={props.headerHeight}
          route={props.route}
          KioskState={props.KioskState}
          SetKioskState={props.SetKioskState}
        />
      ) : null}
      {props.KioskState === '2-2' ? (
        <KioskStage_2_2
          navigation={props.navigation}
          NextBtnRef={props.NextBtnRef}
          headerHeight={props.headerHeight}
          route={props.route}
          KioskState={props.KioskState}
          SetKioskState={props.SetKioskState}
          MenuLRRef={props.MenuLRRef}
          MenuRef={props.MenuRef}
        />
      ) : null}
      {props.KioskState === '2-2-1' ? (
        <KioskStage_2_2_1
          navigation={props.navigation}
          // OptionRef={props.OptionRef}
          headerHeight={props.headerHeight}
          route={props.route}
          KioskState={props.KioskState}
          // MenuRef={props.MenuRef}
          SetKioskState={props.SetKioskState}
          MenuSelectRef={props.MenuSelectRef}
        />
      ) : null}
      {props.KioskState === '2-3' ? (
        <KioskStage_2_3
          navigation={props.navigation}
          headerHeight={props.headerHeight}
          route={props.route}
          KioskState={props.KioskState}
          SetKioskState={props.SetKioskState}
          OptionRef={props.OptionRef}
        />
      ) : null}
      {props.KioskState === '2-3-1' ? (
        <KioskStage_2_3_1
          navigation={props.navigation}
          headerHeight={props.headerHeight}
          route={props.route}
          KioskState={props.KioskState}
          SetKioskState={props.SetKioskState}
          OptionRef={props.OptionRef}
          OptionSizeRef={props.OptionSizeRef}
        />
      ) : null}
      {props.KioskState === '3-1' ? (
        <KioskStage_3_1
          navigation={props.navigation}
          // OptionRef={props.OptionRef}
          headerHeight={props.headerHeight}
          route={props.route}
          KioskState={props.KioskState}
          MenuRef={props.MenuRef}
          SetKioskState={props.SetKioskState}
          MenuSelectRef={props.MenuSelectRef}
          MenuListRef={props.MenuListRef}
        />
      ) : null}
      {props.KioskState === '3-3' ? (
        <KioskStage_3_3
          navigation={props.navigation}
          headerHeight={props.headerHeight}
          route={props.route}
          KioskState={props.KioskState}
          SetKioskState={props.SetKioskState}
          OptionRef={props.OptionRef}
        />
      ) : null}
      {props.KioskState === '4-1' ? (
        <KioskStage_4_1
          navigation={props.navigation}
          headerHeight={props.headerHeight}
          route={props.route}
          KioskState={props.KioskState}
          SetKioskState={props.SetKioskState}
          OptionRef={props.OptionRef}
        />
      ) : null}
      {props.KioskState === '4-2' ? (
        <KioskStage_4_2
          navigation={props.navigation}
          headerHeight={props.headerHeight}
          route={props.route}
          KioskState={props.KioskState}
          SetKioskState={props.SetKioskState}
          OptionRef={props.OptionRef}
        />
      ) : null}
      {props.KioskState === '4-3' ? (
        <KioskStage_4_3
          navigation={props.navigation}
          headerHeight={props.headerHeight}
          route={props.route}
          KioskState={props.KioskState}
          SetKioskState={props.SetKioskState}
          OptionRef={props.OptionRef}
        />
      ) : null}
      <StageHeader
        state={props.KioskState}
        navigation={props.navigation}
        style={{zIndex: 1}}
      />
    </>
  );
};

// const _onPressSpeech = () => {
//   Tts.stop();
//   Tts.speak(Tasktext);
// };

// const SetText = KioskState => {
//   switch (KioskState) {

//       break;
//     default:
//       break;
//   }
// };
