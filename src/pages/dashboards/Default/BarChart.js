import React, { useState, useEffect } from "react";
import styled, { withTheme } from "styled-components/macro";
import Select from "react-select";

import {
  Card as MuiCard,
  CardContent,
  CardHeader,
  IconButton,
} from "@material-ui/core";

import { spacing } from "@material-ui/system";

import "../../../vendor/roundedBarCharts";
import { Bar } from "react-chartjs-2";
import { green } from "@material-ui/core/colors";
import { MoreVertical } from "react-feather";

const Card = styled(MuiCard)(spacing);

const ChartWrapper = styled.div`
  height: 428px;
  width: 100%;
`;

const BarChart = ({ theme }) => {
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

  for (let obj of data) {
    obj["value"] = obj["DatasetName"];
    obj["label"] = obj["DatasetName"];
  }

  const [dropDownData, setDropDownData] = useState([
    data[0],
    data[1],
    data[2],
    data[3],
    data[4],
    data[5],
    data[6],
    data[7],
  ]);

  let defaultLabels = [];
  let defaultTracking = [];
  let defaultDetection = [];
  let defaultSegmentation = [];
  for (let i = 0; i < 7; i++) {
    defaultLabels.push(data[i]["DatasetName"]);
    defaultTracking.push(data[i]["TRA"]);
    defaultDetection.push(data[i]["SEG"]);
    defaultSegmentation.push(data[i]["DET"]);
  }
  const [labels, setLabels] = useState(defaultLabels);
  const [tracking, setTracking] = useState(defaultTracking);
  const [detection, setDetection] = useState(defaultDetection);
  const [segmentation, setSegmentation] = useState(defaultSegmentation);

  useEffect(() => {
    let curLabels = [];
    let curTracking = [];
    let curDetection = [];
    let curSegmentation = [];
    for (let item of dropDownData) {
      curLabels.push(item["DatasetName"]);
      curTracking.push(item["TRA"]);
      curDetection.push(item["SEG"]);
      curSegmentation.push(item["DET"]);
    }
    setLabels(curLabels);
    setTracking(curTracking);
    setDetection(curDetection);
    setSegmentation(curSegmentation);
  }, [dropDownData]);

  console.log("cur is: ", dropDownData);

  const firstDatasetColor = theme.palette.secondary.main;
  const secondDatasetColor =
    theme.palette.type === "dark"
      ? "rgba(255, 255, 255, 0.5)"
      : "rgba(0, 0, 0, 0.15)";
  // const thirdDatasetColor = theme.palette.primary.main;

  const thedata = {
    labels: labels,
    datasets: [
      {
        label: "Tracking",
        backgroundColor: firstDatasetColor,
        borderColor: firstDatasetColor,
        hoverBackgroundColor: firstDatasetColor,
        hoverBorderColor: firstDatasetColor,
        data: tracking,
        barPercentage: 0.5,
        categoryPercentage: 0.5,
      },
      {
        label: "Segmentation",
        backgroundColor: secondDatasetColor,
        borderColor: secondDatasetColor,
        hoverBackgroundColor: secondDatasetColor,
        hoverBorderColor: secondDatasetColor,
        data: segmentation,
        barPercentage: 0.5,
        categoryPercentage: 0.5,
      },
      {
        label: "Detection",
        backgroundColor: green,
        borderColor: green,
        hoverBackgroundColor: green,
        hoverBorderColor: green,
        data: detection,
        barPercentage: 0.5,
        categoryPercentage: 0.5,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    cornerRadius: 2,
    legend: {
      display: true,
    },
    scales: {
      yAxes: [
        {
          gridLines: {
            display: false,
          },
          stacked: true,
          ticks: {
            stepSize: 0.25,
            fontColor: theme.palette.text.secondary,
          },
        },
      ],
      xAxes: [
        {
          stacked: true,
          gridLines: {
            color: "transparent",
          },
          ticks: {
            fontColor: theme.palette.text.secondary,
          },
        },
      ],
    },
  };

  return (
    <div>
      <Select
        defaultValue={[
          data[0],
          data[1],
          data[2],
          data[3],
          data[4],
          data[5],
          data[6],
          data[7],
        ]}
        isMulti
        name="colors"
        options={data}
        className="basic-multi-select"
        classNamePrefix="select"
        onChange={setDropDownData}
      />
      <Card mb={1}>
        <CardHeader
          action={
            <IconButton aria-label="settings">
              <MoreVertical />
            </IconButton>
          }
          title="Cell Tracking Challenge Results"
        />

        <CardContent>
          <ChartWrapper>
            <Bar data={thedata} options={options} />
          </ChartWrapper>
        </CardContent>
      </Card>
    </div>
  );
};

export default withTheme(BarChart);
