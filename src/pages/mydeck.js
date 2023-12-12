import React from "react";
import useAppState from "@/useHooks/useAppState";
import { Grid, Button, Header  } from "semantic-ui-react";
import Head from "next/head";

export default function DeckName(){
    const appState = useAppState();

    console.log(appState)
    return(
        <>
        <Grid columns={1}>
        <Grid.Column>
            <Header as='h1'>{appState.user}'s deck</Header>
        </Grid.Column>
        </Grid>
        </>
    )
}