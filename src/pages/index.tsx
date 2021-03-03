import React from "react";
import Head from "next/head";
import { GetServerSideProps, GetServerSidePropsContext } from "next";

import { ChallengeBox } from "../components/ChallengeBox";
import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";

import { CountdownProvider } from "../contexts/CountdownContext";
import { ChallengesProvider } from "../contexts/ChallengesContext";
import { Box, Container, Grid, Typography } from "@material-ui/core";

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <Head>
        <title>Início | Move.it</title>
      </Head>

      <Container fixed maxWidth="md">
        <ExperienceBar />

        <CountdownProvider>
          <Grid component="main" container justify="center">
            <Grid item xs={12} md={6}>
              <Box p={3}>
                <Profile />
                <CompletedChallenges />
                <Countdown />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box p={3} height="100%">
                <ChallengeBox />
              </Box>
            </Grid>
          </Grid>
        </CountdownProvider>
      </Container>
    </ChallengesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};
