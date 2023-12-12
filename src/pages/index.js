import React from "react";
import { Grid, Card, Image } from 'semantic-ui-react';
import Styles from '@/styles/Home.module.css';

export default function Home() {
  return(
    <>
    <h1 className={Styles.header}>Home</h1>
    <Grid>
       <Grid.Column style={{ display: 'flex', justifyContent: 'center' }}>
       <Card style={{ width: '70%' }}>
    <Image src='/yugioh.avif' centered/>
    <Card.Content>
      <Card.Header className={Styles.desTitle}>YU-GI-OH</Card.Header>
      <Card.Description className={Styles.centerText}>
      Welcome to the captivating world of Yu-Gi-Oh! - a beloved trading card game and anime franchise that has captured the hearts of fans worldwide. Originating as a strategic card game created by Kazuki Takahashi, Yu-Gi-Oh! has evolved into a thrilling universe where players duel using decks filled with powerful monsters, magical spells, and potent traps.

      In this engaging game, duelists summon incredible creatures, cast spells, and deploy cunning strategies to outwit their opponents. Each card holds its unique abilities and strengths, allowing for endless possibilities and diverse gameplay experiences.

      Whether you're a seasoned duelist or just beginning your journey, Yu-Gi-Oh! offers an immersive experience filled with thrilling battles, intricate strategies, and a vibrant community. Join us as we explore this fantastic realm where friendships are forged, skills are honed, and epic duels await at every turn!
      </Card.Description>
    </Card.Content>
  </Card>
       </Grid.Column>
    </Grid>
   
    </>
  )
}