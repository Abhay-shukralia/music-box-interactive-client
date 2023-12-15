import React from "react";
import { connect } from "react-redux";
import PlotSelector from "./PlotSelector";
import Plot from "./Plot";
import { getPlotsByType, getTemperatureData } from "../../redux/selectors";
import LinePlot from "./LinePlot"
import ScatterPlot from "./ScatterPlot"

const PlotsTab = (props) => {
  console.log(props.plots)
  return (
    <div className="container-fluid p-2 d-flex flex-column vh-100 overflow-hidden">
      <LinePlot data={props.temperature.slice(0, 20)} label="Temperature" units="K"/>
      <ScatterPlot data={props.temperature.slice(0, 20)} label="Temperature" units="K"/>
      <div className="row flex-grow-1 overflow-hidden">
        <div className="col-md-4 col-lg-3 mh-100 overflow-auto">
          <div className="row flex-shrink-0">
            <div className="col">
              <PlotSelector
                type={props.plotType}
                availablePlots={props.availablePlots}
                units={props.units}
              />
            </div>
          </div>
        </div>
        <div className="col mh-100 overflow-auto">
          {/* {props.plots.map((plot, index) => {
            return <Plot plot={plot} key={`plot-${index}`} />;
          })} */}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    temperature: getTemperatureData(state),
    plots: getPlotsByType(state, ownProps.plotType),
  };
};

export default connect(mapStateToProps)(PlotsTab);
