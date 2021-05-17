import React from "react";
import styled from "styled-components/macro";

import {
  Card as MuiCard,
  CardHeader,
  IconButton,
  Chip as MuiChip,
  Paper as MuiPaper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";

import { green, orange } from "@material-ui/core/colors";

import { spacing } from "@material-ui/system";

import { MoreVertical } from "react-feather";

const Card = styled(MuiCard)(spacing);

const Chip = styled(MuiChip)`
  height: 20px;
  padding: 4px 0;
  font-size: 90%;
  background-color: ${(props) => props.rgbcolor};
  color: ${(props) => props.theme.palette.common.white};
`;

const Paper = styled(MuiPaper)(spacing);

const TableWrapper = styled.div`
  overflow-y: auto;
  max-width: calc(100vw - ${(props) => props.theme.spacing(12)}px);
`;

// Data
let id = 0;
function createData(name, start, state) {
  id += 1;
  return { id, name, start, state };
}

const rows = [
  createData(
    "BF-C2DL-HSC Challenge",
    "01/23/2019",
    <Chip label="Done" rgbcolor={green[500]} />
  ),
  createData(
    "BF-C2DL-MuSC Challenge",
    "04/27/2020",
    <Chip label="Done" rgbcolor={green[500]} />
  ),
  createData(
    "DIC-C2DH-HeLa Challenge",
    "07/03/2020",
    <Chip label="Done" rgbcolor={green[500]} />
  ),
  createData(
    "Fluo-C2DL-Huh7 Challenge",
    "09/23/2020",
    <Chip label="Done" rgbcolor={green[500]} />
  ),
  createData(
    "Fluo-N2DH-GOWT1 Challenge",
    "11/01/2020",
    <Chip label="Done" rgbcolor={green[500]} />
  ),
  createData(
    "Fluo-N2DH-SIM+ Challenge",
    "03/12/2021",
    <Chip label="In Progress" rgbcolor={orange[500]} />
  ),
];

const DashboardTable = () => (
  <div style={{ height: 510, width: "100%" }}>
    <Card mb={6}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertical />
          </IconButton>
        }
        title="Latest results"
      />
      <Paper>
        <TableWrapper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Ranking</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell>{row.start}</TableCell>
                  <TableCell>{row.state}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableWrapper>
      </Paper>
    </Card>
  </div>
);

export default DashboardTable;
