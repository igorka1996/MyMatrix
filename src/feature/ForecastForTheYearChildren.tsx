import React from "react";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import SwipeableViews from "react-swipeable-views";
import {
  calculation,
  calcYearlyForecastChildren,
  funcCalculation,
} from "../utils/calc";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { PropsTypeForecastTheYearChildren } from "../type/personalMatrix-type";
import { useAppSelector } from "../redux-store/store";

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export const ForecastForTheYearChildren = (
  props: PropsTypeForecastTheYearChildren
) => {
  const dateRepeatChildren = useAppSelector(
    (state) => state.personalMatrixChildrenReducer.data.dateRepeat
  );
  function a11yProps(index: number) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`,
    };
  }

  const getMatrixItem = (value: number): any =>
    props.yaer.filter((e: any) => e.value === value)[0];
  const funcTxt = ([A, B, C]: number[]) => {
    const arr = funcCalculation([A, B, C]);
    return arr.map((e) => {
      return (
        <div>
          <p>{getMatrixItem(e)?.text}</p>
        </div>
      );
    });
  };
  const theme = useTheme();
  const [value, setValue] = React.useState(
    calcYearlyForecastChildren(props.age)
      ? calcYearlyForecastChildren(props.age)
      : 0
  );
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const handleChangeIndex = (index: number) => {
    setValue(index);
  };
  const disabledTab = (index: number) => {
    return dateRepeatChildren
      ? !dateRepeatChildren
      : value !== index && !props.yes;
  };
  return (
    <Box sx={{ bgcolor: "background.paper", width: "100%" }}>
      <AppBar position="static">
        <Tabs
          style={{ backgroundColor: "rgb(111, 137, 173)" }}
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="scrollable"
          aria-label="visible arrows tabs example"
        >
          <Tab disabled={disabledTab(0)} label="0-1" {...a11yProps(0)} />
          <Tab disabled={disabledTab(1)} label="1-2.5" {...a11yProps(1)} />
          <Tab disabled={disabledTab(2)} label="2.5-3.5" {...a11yProps(2)} />
          <Tab disabled={disabledTab(3)} label="3.5-4" {...a11yProps(3)} />
          <Tab disabled={disabledTab(4)} label="5" {...a11yProps(4)} />
          <Tab disabled={disabledTab(5)} label="6-7.5" {...a11yProps(5)} />
          <Tab disabled={disabledTab(6)} label="7.5-8.5" {...a11yProps(6)} />
          <Tab disabled={disabledTab(7)} label="8.5-9" {...a11yProps(7)} />
          <Tab disabled={disabledTab(8)} label="10" {...a11yProps(8)} />
          <Tab disabled={disabledTab(9)} label="11-12.5" {...a11yProps(9)} />
          <Tab
            disabled={disabledTab(10)}
            label="12.5-13.5"
            {...a11yProps(10)}
          />
          <Tab disabled={disabledTab(11)} label="13.5-14" {...a11yProps(11)} />
          <Tab disabled={disabledTab(12)} label="15" {...a11yProps(12)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          {funcTxt([props.A, props.C, calculation(props.A + props.C)])}
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          {funcTxt([
            props.AEAA,
            props.CGCC,
            calculation(props.AEAA + props.CGCC),
          ])}
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          {funcTxt([props.AEA, props.CGC, calculation(props.AEA + props.CGC)])}
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          {funcTxt([
            props.AEAAE,
            props.CGCCG,
            calculation(props.AEAAE + props.CGCCG),
          ])}
        </TabPanel>
        <TabPanel value={value} index={4} dir={theme.direction}>
          {funcTxt([props.AE, props.CG, calculation(props.AE + props.CG)])}
        </TabPanel>
        <TabPanel value={value} index={5} dir={theme.direction}>
          {funcTxt([
            props.AEEAE,
            props.CGGCG,
            calculation(props.AEEAE + props.CGGCG),
          ])}
        </TabPanel>
        <TabPanel value={value} index={6} dir={theme.direction}>
          {funcTxt([props.AEE, props.CGG, calculation(props.AEE + props.CGG)])}
        </TabPanel>
        <TabPanel value={value} index={7} dir={theme.direction}>
          {funcTxt([
            props.AEEE,
            props.CGGG,
            calculation(props.AEEE + props.CGGG),
          ])}
        </TabPanel>
        <TabPanel value={value} index={8} dir={theme.direction}>
          {funcTxt([props.E, props.G, calculation(props.E + props.G)])}
        </TabPanel>
        <TabPanel value={value} index={9} dir={theme.direction}>
          {funcTxt([
            props.EBEE,
            props.GDGG,
            calculation(props.EBEE + props.GDGG),
          ])}
        </TabPanel>
        <TabPanel value={value} index={10} dir={theme.direction}>
          {funcTxt([props.EBE, props.GDG, calculation(props.EBE + props.GDG)])}
        </TabPanel>
        <TabPanel value={value} index={11} dir={theme.direction}>
          {funcTxt([
            props.EBEEB,
            props.GDGGD,
            calculation(props.EBEEB + props.GDGGD),
          ])}
        </TabPanel>
        <TabPanel value={value} index={12} dir={theme.direction}>
          {funcTxt([props.EB, props.GD, calculation(props.EB + props.GD)])}
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
};
