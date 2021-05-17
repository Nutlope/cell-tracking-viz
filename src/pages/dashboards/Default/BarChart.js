import React from "react";
import styled, { withTheme } from "styled-components/macro";

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
  const firstDatasetColor = theme.palette.secondary.main;
  const secondDatasetColor =
    theme.palette.type === "dark"
      ? "rgba(255, 255, 255, 0.5)"
      : "rgba(0, 0, 0, 0.15)";
  // const thirdDatasetColor = theme.palette.primary.main;

  const data = {
    labels: [
      "Fluo-C3DH-A549_t_01",
      "Fluo-C3DH-A549_t_02",
      "Fluo-C3DH-H157_t_01",
      "Fluo-C3DH-H157_t_02",
      "BF-C2DL-HSC_t_01",
      "BF-C2DL-HSC_t_02",
      "BF-C2DL-HSC_c_01",
      "BF-C2DL-HSC_c_02",
    ],
    datasets: [
      {
        label: "Tracking",
        backgroundColor: firstDatasetColor,
        borderColor: firstDatasetColor,
        hoverBackgroundColor: firstDatasetColor,
        hoverBorderColor: firstDatasetColor,
        data: [1, 1, 1, 0.834574, 0.64, 0.84, 0.75, 0.32],
        barPercentage: 0.5,
        categoryPercentage: 0.5,
      },
      {
        label: "Segmentation",
        backgroundColor: secondDatasetColor,
        borderColor: secondDatasetColor,
        hoverBackgroundColor: secondDatasetColor,
        hoverBorderColor: secondDatasetColor,
        data: [0.757591, 0.660389, 0.811257, 0.700411, 0.53, 0.85, 0.74, 0.71],
        barPercentage: 0.5,
        categoryPercentage: 0.5,
      },
      {
        label: "Detection",
        backgroundColor: green,
        borderColor: green,
        hoverBackgroundColor: green,
        hoverBorderColor: green,
        data: [1, 1, 1, 0.841509, 0.96, 1, 1, 0.84],
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
          <Bar data={data} options={options} />
        </ChartWrapper>
      </CardContent>
    </Card>
  );
};

export default withTheme(BarChart);
