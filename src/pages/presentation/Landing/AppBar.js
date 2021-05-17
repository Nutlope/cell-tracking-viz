import React from "react";
import styled from "styled-components/macro";
import { spacing } from "@material-ui/system";
import { NavLink } from "react-router-dom";
import {
  AppBar,
  Button as MuiButton,
  Container,
  Grid,
  Toolbar,
} from "@material-ui/core";

import { ReactComponent as Logo } from "../../../vendor/logo.svg";

const Button = styled(MuiButton)(spacing);

const Brand = styled.div`
  font-size: ${(props) => props.theme.typography.h5.fontSize};
  font-weight: ${(props) => props.theme.typography.fontWeightMedium};
  font-family: ${(props) => props.theme.typography.fontFamily};
`;

const Na = styled.div`
  text-decoration: none;
`;

const BrandIcon = styled(Logo)`
  margin-right: ${(props) => props.theme.spacing(2)}px;
  margin-top: -2px;
  color: ${(props) => props.theme.sidebar.header.brand.color};
  fill: ${(props) => props.theme.sidebar.header.brand.color};
  width: 32px;
  height: 32px;

  vertical-align: middle;
  display: inline;
`;

const AppBarComponent = () => (
  <React.Fragment>
    <AppBar position="relative" color="transparent" elevation={0}>
      <Toolbar>
        <Container>
          <Grid container alignItems="center">
            <Grid item>
              <Brand>
                <BrandIcon />
                leverjs
              </Brand>
            </Grid>
            <Grid item xs />
            <Grid item>
              <Na>
                <NavLink to="/dashboard" target="_blank">
                  <Button ml={2} color="primary" variant="contained">
                    Go to Dashboard
                  </Button>
                </NavLink>
              </Na>
            </Grid>
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
  </React.Fragment>
);

export default AppBarComponent;
