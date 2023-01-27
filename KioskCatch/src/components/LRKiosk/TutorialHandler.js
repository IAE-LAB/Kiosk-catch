import 'react-native-gesture-handler';
import StageHeader from 'KioskCatch/src/components/Kiosk/Stage';

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
          MenuRef={props.MenuRef}
          NextBtnRef={props.NextBtnRef}
          headerHeight={props.headerHeight}
          route={props.route}
          KioskState={props.KioskState}
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
