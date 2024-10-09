import style from "./App.module.css";
import SpatialData from "./component/SpatialData/SpatialData";
import Map from "./component/GpsPosition/Map";
import Graphes from "./component/Graphes/Graphes";
import Progress from "./component/Progress/Progress";
import Information from "./component/Test/Information";

function App() {
  return (
    <div className={style.App}>
      <h1 className={style.Title}>Mission : Test 01</h1>
      <div className={style.Container}>
        {/*
           <Information/> >*/}
        <SpatialData />
        <Graphes />
        <Map />
        <Progress />
      </div>
    </div>
  );
}

export default App;
