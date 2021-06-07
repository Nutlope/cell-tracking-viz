import React from "react";
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";

import Helmet from "react-helmet";

import {
  Breadcrumbs as MuiBreadcrumbs,
  Checkbox,
  Divider as MuiDivider,
  Grid,
  IconButton,
  Link,
  Paper as MuiPaper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Toolbar,
  Tooltip,
  Typography,
} from "@material-ui/core";

import {
  Archive as ArchiveIcon,
  FilterList as FilterListIcon,
} from "@material-ui/icons";

import { spacing } from "@material-ui/system";

const Divider = styled(MuiDivider)(spacing);

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

const Paper = styled(MuiPaper)(spacing);

const Spacer = styled.div`
  flex: 1 1 100%;
`;

const ToolbarTitle = styled.div`
  min-width: 150px;
`;

function createData([id, date, tra, seg, det]) {
  return { id, date, tra, seg, det };
}

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

// Calculating average SEG, TRA, and DET

let seg = [];
let tra = [];
let det = [];
for (let obj of data) {
  tra.push(obj["TRA"]);
  seg.push(obj["SEG"]);
  det.push(obj["DET"]);
}

let average_seg = seg.reduce((a, b) => a + b) / seg.length;
let average_det = det.reduce((a, b) => a + b) / det.length;
let average_tra = tra.reduce((a, b) => a + b) / tra.length;

console.log("avg of seg is: ", average_seg); // 0.5904057222222223
console.log("avg of det is: ", average_det); // 0.8167496944444443
console.log("avg of tra is: ", average_tra); // 0.8084937499999998

let rows = [];

for (let obj of data) {
  let temp = [];
  for (const [key, value] of Object.entries(obj)) {
    temp.push(value);
    console.log(key);
  }
  rows.push(createData(temp));
}

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  { id: "id", alignment: "left", label: "Dataset Name" },
  { id: "date", alignment: "left", label: "Date" },
  { id: "TRA", alignment: "left", label: "TRA" },
  { id: "SEG", alignment: "left", label: "SEG" },
  { id: "DET", alignment: "left", label: "DET" },
];

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ "aria-label": "select all" }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.alignment}
            padding={headCell.disablePadding ? "none" : "default"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

let EnhancedTableToolbar = (props) => {
  const { numSelected } = props;

  return (
    <Toolbar>
      <ToolbarTitle>
        {numSelected > 0 ? (
          <Typography color="inherit" variant="subtitle1">
            {numSelected} selected
          </Typography>
        ) : (
          <Typography variant="h6" id="tableTitle">
            Submissions
          </Typography>
        )}
      </ToolbarTitle>
      <Spacer />
      <div>
        {numSelected > 0 ? (
          <Tooltip title="Delete">
            <IconButton aria-label="Delete">
              <ArchiveIcon />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="Filter list">
            <IconButton aria-label="Filter list">
              <FilterListIcon />
            </IconButton>
          </Tooltip>
        )}
      </div>
    </Toolbar>
  );
};

function EnhancedTable() {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("customer");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <div>
      <Paper>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            aria-labelledby="tableTitle"
            size={"medium"}
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.id);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={`${row.id}-${index}`}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={isItemSelected}
                          inputProps={{ "aria-labelledby": labelId }}
                          onClick={(event) => handleClick(event, row.id)}
                        />
                      </TableCell>

                      <TableCell align="left">{row.id}</TableCell>
                      <TableCell align="left">{row.date}</TableCell>
                      <TableCell align="left">{row.tra}</TableCell>
                      <TableCell align="left">{row.seg}</TableCell>
                      {/* <TableCell>
                        {row.status === 0 && (
                          <Chip
                            size="small"
                            mr={1}
                            mb={1}
                            label="Shipped"
                            shipped
                          />
                        )}
                        {row.status === 1 && (
                          <Chip
                            size="small"
                            mr={1}
                            mb={1}
                            label="Processing"
                            processing
                          />
                        )}
                        {row.status === 2 && (
                          <Chip
                            size="small"
                            mr={1}
                            mb={1}
                            label="Cancelled"
                            cancelled
                          />
                        )}
                      </TableCell> */}
                      <TableCell align="left">{row.det}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={8} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}

function OrderList() {
  return (
    <React.Fragment>
      <Helmet title="Submissions" />

      <Grid justify="space-between" container spacing={24}>
        <Grid item>
          <Typography variant="h3" gutterBottom display="inline">
            Submissions
          </Typography>

          <Breadcrumbs aria-label="Breadcrumb" mt={2}>
            <Link component={NavLink} exact to="/">
              Dashboard
            </Link>
            <Link component={NavLink} exact to="/">
              Pages
            </Link>
            <Typography>Submissions</Typography>
          </Breadcrumbs>
        </Grid>
      </Grid>

      <Divider my={6} />

      <Grid container spacing={6}>
        <Grid item xs={12}>
          <EnhancedTable />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default OrderList;
