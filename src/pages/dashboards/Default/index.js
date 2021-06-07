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
