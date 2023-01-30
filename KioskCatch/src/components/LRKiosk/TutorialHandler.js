import 'react-native-gesture-handler';
import StageHeader from 'KioskCatch/src/components/Kiosk/Stage';
import KioskStage_2_2_1 from 'KioskCatch/src/screens/LR_Kiosk/Tutorial/KioskStage_2-2-1';
import KioskStage_2_3 from 'KioskCatch/src/screens/LR_Kiosk/Tutorial/KioskStage_2-3';
export default TutorialHandler = props => {
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
      <StageHeader
        state={props.KioskState}
        navigation={props.navigation}
        style={{zIndex: 1}}
      />
    </>
  );
};
