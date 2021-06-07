import React from "react";
import styled from "styled-components/macro";
import { Helmet } from "react-helmet";
import {
  Grid,
  Divider as MuiDivider,
  Typography as MuiTypography,
} from "@material-ui/core";

import { spacing } from "@material-ui/system";

import { green, red } from "@material-ui/core/colors";

import Actions from "./Actions";
import BarChart from "./BarChart";
// import LineChart from "./LineChart";
// import DoughnutChart from "./DoughnutChart";
import Stats from "./Stats";
// import Table from "./Table";
// import axios from "axios";

const Divider = styled(MuiDivider)(spacing);
const Typography = styled(MuiTypography)(spacing);

let data = [];

data.push({
  DatasetName: "BF-C2DL-HSC_training_01",
  Date: "25-Feb-2021",
  TRA: 0.966715,
  SEG: 0.761642,
  DET: 0.971746,
});
data.push({
  DatasetName: "BF-C2DL-HSC_training_02",
  Date: "25-Feb-2021",
  TRA: 0.763002,
  SEG: 0.550736,
  DET: 0.791771,
});
data.push({
  DatasetName: "BF-C2DL-MuSC_training_01",
  Date: "26-Feb-2021",
  TRA: 0.875781,
  SEG: 0.423327,
  DET: 0.886454,
});
data.push({
  DatasetName: "BF-C2DL-MuSC_training_02",
  Date: "26-Feb-2021",
  TRA: 0.895466,
  SEG: 0.334583,
  DET: 0.912337,
});
data.push({
  DatasetName: "Fluo-C2DL-Huh7_training_01",
  Date: "23-Feb-2021",
  TRA: 0.939486,
  SEG: 0.306159,
  DET: 0.95184,
});
data.push({
  DatasetName: "Fluo-C2DL-Huh7_training_02",
  Date: "23-Feb-2021",
  TRA: 0.87136,
  SEG: 0.406851,
  DET: 0.884425,
});
data.push({
  DatasetName: "Fluo-C2DL-MSC_training_01",
  Date: "23-Feb-2021",
  TRA: 0.882539,
  SEG: 0.488998,
  DET: 0.892056,
});
data.push({
  DatasetName: "Fluo-C2DL-MSC_training_02",
  Date: "23-Feb-2021",
  TRA: 0.865161,
  SEG: 0.628962,
  DET: 0.880851,
});
data.push({
  DatasetName: "Fluo-N2DH-GOWT1_training_01",
  Date: "23-Feb-2021",
  TRA: 0.997821,
  SEG: 0.854696,
  DET: 0.998202,
});
data.push({
  DatasetName: "Fluo-N2DH-GOWT1_training_02",
  Date: "23-Feb-2021",
  TRA: 0.925099,
  SEG: 0.904009,
  DET: 0.924752,
});
data.push({
  DatasetName: "Fluo-N2DH-SIM+_training_01",
  Date: "23-Feb-2021",
  TRA: 0.984128,
  SEG: 0.830202,
  DET: 0.986498,
});
data.push({
  DatasetName: "Fluo-N2DH-SIM+_training_02",
  Date: "23-Feb-2021",
  TRA: 0.92517,
  SEG: 0.60134,
  DET: 0.932424,
});
data.push({
  DatasetName: "Fluo-N2DL-HeLa_training_01",
  Date: "23-Feb-2021",
  TRA: 0.963918,
  SEG: 0.679563,
  DET: 0.966003,
});
data.push({
  DatasetName: "Fluo-N2DL-HeLa_training_02",
  Date: "23-Feb-2021",
  TRA: 0.915992,
  SEG: 0.794049,
  DET: 0.920412,
});
data.push({
  DatasetName: "PhC-C2DH-U373_training_01",
  Date: "23-Feb-2021",
  TRA: 0.933481,
  SEG: 0.720996,
  DET: 0.935948,
});
data.push({
  DatasetName: "PhC-C2DH-U373_training_02",
  Date: "23-Feb-2021",
  TRA: 0.858635,
  SEG: 0.66869,
  DET: 0.869942,
});
data.push({
  DatasetName: "PhC-C2DL-PSC_training_01",
  Date: "23-Feb-2021",
  TRA: 0.894259,
  SEG: 0.654155,
  DET: 0.912009,
});
data.push({
  DatasetName: "PhC-C2DL-PSC_training_02",
  Date: "23-Feb-2021",
  TRA: 0.902205,
  SEG: 0.634021,
  DET: 0.917964,
});
data.push({
  DatasetName: "Fluo-C3DH-A549-SIM_training_01",
  Date: "23-Feb-2021",
  TRA: 1,
  SEG: 0.5785,
  DET: 1,
});
data.push({
  DatasetName: "Fluo-C3DH-A549-SIM_training_02",
  Date: "23-Feb-2021",
  TRA: 1,
  SEG: 0.572666,
  DET: 1,
});
data.push({
  DatasetName: "Fluo-C3DH-A549_training_01",
  Date: "23-Feb-2021",
  TRA: 1,
  SEG: 0.757591,
  DET: 1,
});
data.push({
  DatasetName: "Fluo-C3DH-A549_training_02",
  Date: "23-Feb-2021",
  TRA: 1,
  SEG: 0.660389,
  DET: 1,
});
data.push({
  DatasetName: "Fluo-C3DH-H157_training_01",
  Date: "23-Feb-2021",
  TRA: 1,
  SEG: 0.811257,
  DET: 1,
});
data.push({
  DatasetName: "Fluo-C3DH-H157_training_02",
  Date: "23-Feb-2021",
  TRA: 0.834574,
  SEG: 0.700411,
  DET: 0.841509,
});
data.push({
  DatasetName: "Fluo-C3DL-MDA231_training_01",
  Date: "23-Feb-2021",
  TRA: 0.802732,
  SEG: 0.554746,
  DET: 0.829945,
});
data.push({
  DatasetName: "Fluo-C3DL-MDA231_training_02",
  Date: "23-Feb-2021",
  TRA: 0.827687,
  SEG: 0.624173,
  DET: 0.858632,
});
data.push({
  DatasetName: "Fluo-N3DH-CE_training_01",
  Date: "25-Feb-2021",
  TRA: 0.846086,
  SEG: 0.485207,
  DET: 0.864549,
});
data.push({
  DatasetName: "Fluo-N3DH-CE_training_02",
  Date: "25-Feb-2021",
  TRA: 0.828046,
  SEG: 0.380164,
  DET: 0.840668,
});
data.push({
  DatasetName: "Fluo-N3DH-CHO_training_01",
  Date: "24-Feb-2021",
  TRA: 0.963783,
  SEG: 0.811495,
  DET: 0.967403,
});
data.push({
  DatasetName: "Fluo-N3DH-CHO_training_02",
  Date: "24-Feb-2021",
  TRA: 0.981518,
  SEG: 0.875623,
  DET: 0.984853,
});
data.push({
  DatasetName: "Fluo-N3DH-SIM+_training_01",
  Date: "24-Feb-2021",
  TRA: 0.941439,
  SEG: 0.656802,
  DET: 0.951117,
});
data.push({
  DatasetName: "Fluo-N3DH-SIM+_training_02",
  Date: "24-Feb-2021",
  TRA: 0.719692,
  SEG: 0.420943,
  DET: 0.728679,
});
data.push({
  DatasetName: "Fluo-N3DL-DRO_training_01",
  Date: "24-Feb-2021",
  TRA: 0,
  SEG: 0.215757,
  DET: 0,
});
data.push({
  DatasetName: "Fluo-N3DL-DRO_training_02",
  Date: "24-Feb-2021",
  TRA: 0,
  SEG: 0.303892,
  DET: 0,
});
data.push({
  DatasetName: "Fluo-N3DL-TRIC_training_01",
  Date: "25-Feb-2021",
  TRA: 0,
  SEG: 0.35003,
  DET: 0,
});
data.push({
  DatasetName: "Fluo-N3DL-TRIC_training_02",
  Date: "25-Feb-2021",
  TRA: 0,
  SEG: 0.251981,
  DET: 0,
});

// axios
//   .get(
//     "https://leverjs.net/cx/g*ctc2021*3d*Fluo-C3DH-H157_training_02.LEVER/constants"
//     // {
//     //   headers: { "Access-Control-Allow-Origin": "*" },
//     // }
//   )
//   .then((response) => {
//     console.log("Name: ", response.data["imageData"]["DatasetName"]);
//     console.log("TRA: ", response.data["processInfo"]["ctc_eval"]["TRA"]);
//     console.log("SEG: ", response.data["processInfo"]["ctc_eval"]["SEG"]);
//     console.log("DET: ", response.data["processInfo"]["ctc_eval"]["DET"]);
//     console.log("Date: ", response.data["processInfo"]["processDate"]);
//   });

function Default() {
  return (
    <React.Fragment>
      <Helmet title="Dashboard" />
      <Grid justify="space-between" container spacing={6}>
        <Grid item>
          <Typography variant="h3" gutterBottom>
            LeverJS Dashboard
          </Typography>
          <Typography variant="subtitle1">
            Welcome back, Dr. Cohen! We've missed you.{" "}
            <span role="img" aria-label="Waving Hand Sign">
              👋
            </span>
          </Typography>
        </Grid>

        <Grid item>
          <Actions />
        </Grid>
      </Grid>

      <Divider my={6} />

      <Grid container spacing={6}>
        <Grid item xs={12} sm={12} md={6} lg={3} xl>
          <Stats
            title="Cell Tracking Challenge Submissions"
            amount="37"
            chip="Today"
            percentageText="+26%"
            percentagecolor={green[500]}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl>
          <Stats
            title="Average SEG Score"
            amount="0.74"
            chip="Today"
            percentageText="-14%"
            percentagecolor={red[500]}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl>
          <Stats
            title="Average TRA Score"
            amount="0.85"
            chip="Today"
            percentageText="+18%"
            percentagecolor={green[500]}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl>
          <Stats
            title="Average DET Score"
            amount="0.93"
            chip="Today"
            percentageText="-9%"
            percentagecolor={red[500]}
          />
        </Grid>
      </Grid>

      {/* <Grid container spacing={6}>
        <Grid item xs={12} lg={8}>
          <LineChart />
        </Grid>
        <Grid item xs={12} lg={4}>
          <DoughnutChart />
        </Grid>
      </Grid> */}
      <Grid container spacing={6}>
        <Grid item xs={12} lg={12}>
          <BarChart />
        </Grid>
        {/* <Grid item xs={12} lg={3}>
          <Table />
        </Grid> */}
      </Grid>
    </React.Fragment>
  );
}

export default Default;
