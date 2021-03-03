import {
  Box,
  createStyles,
  LinearProgress,
  Theme,
  ThemeProvider,
  Typography,
  withStyles,
} from "@material-ui/core";
import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";

const ExperienceLinearProgress = withStyles((theme: Theme) =>
  createStyles({
    root: {
      height: 10,
      borderRadius: 5,
    },
    colorPrimary: {
      backgroundColor:
        theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
    },
    bar: {
      borderRadius: 5,
      backgroundColor: "#4cd62b",
    },
  })
)(LinearProgress);

export function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useContext(
    ChallengesContext
  );

  const percentToNextLevel =
    Math.round(currentExperience * 100) / experienceToNextLevel;

  return (
    <header>
      <Box display="flex" alignItems="center">
        <Box minWidth={24}>
          <Typography>0xp</Typography>
        </Box>

        <Box width="100%" mx={2}>
          <ExperienceLinearProgress
            variant="determinate"
            value={percentToNextLevel}
          />
        </Box>

        <Box minWidth={45}>
          <Typography>{experienceToNextLevel}xp</Typography>
        </Box>
      </Box>
    </header>
  );
}
