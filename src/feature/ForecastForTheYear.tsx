import React from "react";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import SwipeableViews from "react-swipeable-views";
import {
  calculation,
  calcYearlyForecast,
  funcCalculation,
} from "../utils/calc";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { PropsTypeForecastTheYear } from "../type/personalMatrix-type";

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

export const ForecastForTheYear = (props: PropsTypeForecastTheYear) => {
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
    calcYearlyForecast(props.age) ? calcYearlyForecast(props.age) : 0
  );

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
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
          <Tab label="16-17.5" {...a11yProps(0)} />
          <Tab label="17.5-18.5" {...a11yProps(1)} />
          <Tab label="18.5-19" {...a11yProps(2)} />
          <Tab label="20" {...a11yProps(3)} />
          <Tab label="21-22.5" {...a11yProps(4)} />
          <Tab label="22.5-23.5" {...a11yProps(5)} />
          <Tab label="23.5-24" {...a11yProps(6)} />
          <Tab label="25" {...a11yProps(7)} />
          <Tab label="26-27.5" {...a11yProps(8)} />
          <Tab label="27.5-28.5" {...a11yProps(9)} />
          <Tab label="28.5-29" {...a11yProps(10)} />
          <Tab label="30" {...a11yProps(11)} />
          <Tab label="31-32.5" {...a11yProps(12)} />
          <Tab label="32.5-33.5" {...a11yProps(13)} />
          <Tab label="33.5-34" {...a11yProps(14)} />
          <Tab label="35" {...a11yProps(15)} />
          <Tab label="36-37.5" {...a11yProps(16)} />
          <Tab label="37.5-38.5" {...a11yProps(17)} />
          <Tab label="38.5-39" {...a11yProps(18)} />
          <Tab label="40" {...a11yProps(19)} />
          <Tab label="41-42.5" {...a11yProps(20)} />
          <Tab label="42.5-43.5" {...a11yProps(21)} />
          <Tab label="43.5-44" {...a11yProps(22)} />
          <Tab label="45" {...a11yProps(23)} />
          <Tab label="46-47.5" {...a11yProps(24)} />
          <Tab label="47.5-48.5" {...a11yProps(25)} />
          <Tab label="48.5-49" {...a11yProps(26)} />
          <Tab label="50" {...a11yProps(27)} />
          <Tab label="51-52.5" {...a11yProps(28)} />
          <Tab label="52.5-53.5" {...a11yProps(29)} />
          <Tab label="53.5-54" {...a11yProps(30)} />
          <Tab label="55" {...a11yProps(31)} />
          <Tab label="56-57.5" {...a11yProps(32)} />
          <Tab label="57.5-58.5" {...a11yProps(33)} />
          <Tab label="58.5-59" {...a11yProps(34)} />
          <Tab label="60" {...a11yProps(35)} />
          <Tab label="61-62.5" {...a11yProps(36)} />
          <Tab label="62.5-63.5" {...a11yProps(37)} />
          <Tab label="63.5-64" {...a11yProps(38)} />
          <Tab label="65" {...a11yProps(39)} />
          <Tab label="66-67.5" {...a11yProps(40)} />
          <Tab label="67.5-68.5" {...a11yProps(41)} />
          <Tab label="68.5-69" {...a11yProps(42)} />
          <Tab label="70" {...a11yProps(43)} />
          <Tab label="71-72.5" {...a11yProps(44)} />
          <Tab label="72.5-73.5" {...a11yProps(45)} />
          <Tab label="73.5-74" {...a11yProps(46)} />
          <Tab label="75" {...a11yProps(47)} />
          <Tab label="76-77.5" {...a11yProps(48)} />
          <Tab label="77.5-78.5" {...a11yProps(49)} />
          <Tab label="78.5-79" {...a11yProps(50)} />
          <Tab label="80" {...a11yProps(51)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          {funcTxt([
            props.EBBEB,
            props.GDDGD,
            calculation(props.EBBEB + props.GDDGD),
          ])}
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          {funcTxt([props.EBB, props.GDD, calculation(props.EBB + props.GDD)])}
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          {funcTxt([
            props.EBBB,
            props.GDDD,
            calculation(props.EBBB + props.GDDD),
          ])}
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          {funcTxt([props.B, props.D, calculation(props.D + props.B)])}
        </TabPanel>
        <TabPanel value={value} index={4} dir={theme.direction}>
          {funcTxt([
            props.BFBF,
            props.DHDD,
            calculation(props.BFBF + props.DHDD),
          ])}
        </TabPanel>
        <TabPanel value={value} index={5} dir={theme.direction}>
          {funcTxt([props.BFB, props.DHD, calculation(props.BFB + props.DHD)])}
        </TabPanel>
        <TabPanel value={value} index={6} dir={theme.direction}>
          {funcTxt([
            props.BFBBF,
            props.DHDDH,
            calculation(props.BFBBF + props.DHDDH),
          ])}
        </TabPanel>
        <TabPanel value={value} index={7} dir={theme.direction}>
          {funcTxt([props.BF, props.DH, calculation(props.BF + props.DH)])}
        </TabPanel>
        <TabPanel value={value} index={8} dir={theme.direction}>
          {funcTxt([
            props.BFFBF,
            props.DHHDH,
            calculation(props.BFFBF + props.DHHDH),
          ])}
        </TabPanel>
        <TabPanel value={value} index={9} dir={theme.direction}>
          {funcTxt([props.BFF, props.DHH, calculation(props.BFF + props.DHH)])}
        </TabPanel>
        <TabPanel value={value} index={10} dir={theme.direction}>
          {funcTxt([
            props.BFFF,
            props.DHHH,
            calculation(props.BFFF + props.DHHH),
          ])}
        </TabPanel>
        <TabPanel value={value} index={11} dir={theme.direction}>
          {funcTxt([props.F, props.H, calculation(props.F + props.H)])}
        </TabPanel>
        <TabPanel value={value} index={12} dir={theme.direction}>
          {funcTxt([
            props.FCFF,
            props.HAHH,
            calculation(props.FCFF + props.HAHH),
          ])}
        </TabPanel>
        <TabPanel value={value} index={13} dir={theme.direction}>
          {funcTxt([props.FCF, props.HAH, calculation(props.FCF + props.HAH)])}
        </TabPanel>
        <TabPanel value={value} index={14} dir={theme.direction}>
          {funcTxt([
            props.FCFFC,
            props.HAHHA,
            calculation(props.FCFFC + props.HAHHA),
          ])}
        </TabPanel>
        <TabPanel value={value} index={15} dir={theme.direction}>
          {funcTxt([props.FC, props.HA, calculation(props.FC + props.HA)])}
        </TabPanel>
        <TabPanel value={value} index={16} dir={theme.direction}>
          {funcTxt([
            props.FCCFC,
            props.HAAHA,
            calculation(props.FCCFC + props.HAAHA),
          ])}
        </TabPanel>
        <TabPanel value={value} index={17} dir={theme.direction}>
          {funcTxt([props.FCC, props.HAA, calculation(props.FCC + props.HAA)])}
        </TabPanel>
        <TabPanel value={value} index={18} dir={theme.direction}>
          {funcTxt([
            props.FCCC,
            props.HAAA,
            calculation(props.FCCC + props.HAAA),
          ])}
        </TabPanel>
        <TabPanel value={value} index={19} dir={theme.direction}>
          {funcTxt([props.C, props.A, calculation(props.C + props.A)])}
        </TabPanel>
        <TabPanel value={value} index={20} dir={theme.direction}>
          {funcTxt([
            props.CGCC,
            props.AEAA,
            calculation(props.CGCC + props.AEAA),
          ])}
        </TabPanel>
        <TabPanel value={value} index={21} dir={theme.direction}>
          {funcTxt([props.CGC, props.AEA, calculation(props.CGC + props.AEA)])}
        </TabPanel>
        <TabPanel value={value} index={22} dir={theme.direction}>
          {funcTxt([
            props.CGCCG,
            props.AEAAE,
            calculation(props.CGCCG + props.AEAAE),
          ])}
        </TabPanel>
        <TabPanel value={value} index={23} dir={theme.direction}>
          {funcTxt([props.CG, props.AE, calculation(props.CG + props.AE)])}
        </TabPanel>
        <TabPanel value={value} index={24} dir={theme.direction}>
          {funcTxt([
            props.CGGCG,
            props.AEEAE,
            calculation(props.CGGCG + props.AEEAE),
          ])}
        </TabPanel>
        <TabPanel value={value} index={25} dir={theme.direction}>
          {funcTxt([props.CGG, props.AEE, calculation(props.CGG + props.AEE)])}
        </TabPanel>
        <TabPanel value={value} index={26} dir={theme.direction}>
          {funcTxt([
            props.CGGG,
            props.AEEE,
            calculation(props.CGGG + props.AEEE),
          ])}
        </TabPanel>
        <TabPanel value={value} index={27} dir={theme.direction}>
          {funcTxt([props.G, props.E, calculation(props.G + props.E)])}
        </TabPanel>
        <TabPanel value={value} index={28} dir={theme.direction}>
          {funcTxt([
            props.GDGG,
            props.EBEE,
            calculation(props.GDGG + props.EBEE),
          ])}
        </TabPanel>
        <TabPanel value={value} index={29} dir={theme.direction}>
          {funcTxt([props.GDG, props.EBE, calculation(props.GDG + props.EBE)])}
        </TabPanel>
        <TabPanel value={value} index={30} dir={theme.direction}>
          {funcTxt([
            props.GDGGD,
            props.EBEEB,
            calculation(props.GDGGD + props.EBEEB),
          ])}
        </TabPanel>
        <TabPanel value={value} index={31} dir={theme.direction}>
          {funcTxt([props.GD, props.EB, calculation(props.GD + props.EB)])}
        </TabPanel>
        <TabPanel value={value} index={32} dir={theme.direction}>
          {funcTxt([
            props.GDDGD,
            props.EBBEB,
            calculation(props.GDDGD + props.EBBEB),
          ])}
        </TabPanel>
        <TabPanel value={value} index={33} dir={theme.direction}>
          {funcTxt([props.GDD, props.EBB, calculation(props.GDD + props.EBB)])}
        </TabPanel>
        <TabPanel value={value} index={34} dir={theme.direction}>
          {funcTxt([
            props.GDDD,
            props.EBBB,
            calculation(props.GDDD + props.EBBB),
          ])}
        </TabPanel>
        <TabPanel value={value} index={35} dir={theme.direction}>
          {funcTxt([props.D, props.B, calculation(props.D + props.B)])}
        </TabPanel>
        <TabPanel value={value} index={36} dir={theme.direction}>
          {funcTxt([
            props.DHDD,
            props.BFBF,
            calculation(props.DHDD + props.BFBF),
          ])}
        </TabPanel>
        <TabPanel value={value} index={37} dir={theme.direction}>
          {funcTxt([props.DHD, props.BFB, calculation(props.DHD + props.BFB)])}
        </TabPanel>
        <TabPanel value={value} index={38} dir={theme.direction}>
          {funcTxt([
            props.DHDDH,
            props.BFBBF,
            calculation(props.DHDDH + props.BFBBF),
          ])}
        </TabPanel>
        <TabPanel value={value} index={39} dir={theme.direction}>
          {funcTxt([props.DH, props.BF, calculation(props.DH + props.BF)])}
        </TabPanel>
        <TabPanel value={value} index={40} dir={theme.direction}>
          {funcTxt([
            props.DHHDH,
            props.BFFBF,
            calculation(props.DHHDH + props.BFFBF),
          ])}
        </TabPanel>
        <TabPanel value={value} index={41} dir={theme.direction}>
          {funcTxt([props.DHH, props.BFF, calculation(props.DHH + props.BFF)])}
        </TabPanel>
        <TabPanel value={value} index={42} dir={theme.direction}>
          {funcTxt([
            props.DHHH,
            props.BFFF,
            calculation(props.DHHH + props.BFFF),
          ])}
        </TabPanel>
        <TabPanel value={value} index={43} dir={theme.direction}>
          {funcTxt([props.H, props.F, calculation(props.H + props.F)])}
        </TabPanel>
        <TabPanel value={value} index={44} dir={theme.direction}>
          {funcTxt([
            props.HAHH,
            props.FCFF,
            calculation(props.HAHH + props.FCFF),
          ])}
        </TabPanel>
        <TabPanel value={value} index={45} dir={theme.direction}>
          {funcTxt([props.HAH, props.FCF, calculation(props.HAH + props.FCF)])}
        </TabPanel>
        <TabPanel value={value} index={46} dir={theme.direction}>
          {funcTxt([
            props.HAHHA,
            props.FCFFC,
            calculation(props.HAHHA + props.FCFFC),
          ])}
        </TabPanel>
        <TabPanel value={value} index={47} dir={theme.direction}>
          {funcTxt([props.HA, props.FC, calculation(props.HA + props.FC)])}
        </TabPanel>
        <TabPanel value={value} index={48} dir={theme.direction}>
          {funcTxt([
            props.HAAHA,
            props.FCCFC,
            calculation(props.HAAHA + props.FCCFC),
          ])}
        </TabPanel>
        <TabPanel value={value} index={49} dir={theme.direction}>
          {funcTxt([props.HAA, props.FCC, calculation(props.HAA + props.FCC)])}
        </TabPanel>
        <TabPanel value={value} index={50} dir={theme.direction}>
          {funcTxt([
            props.HAAA,
            props.FCCC,
            calculation(props.HAAA + props.FCCC),
          ])}
        </TabPanel>
        <TabPanel value={value} index={51} dir={theme.direction}>
          {funcTxt([props.A, props.C, calculation(props.A + props.C)])}
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
};