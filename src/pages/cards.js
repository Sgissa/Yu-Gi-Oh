import React from "react";
import { Grid, Button, Image, Header, Popup, Loader} from 'semantic-ui-react';
import CardImage from "@/components/CardImage";


export default function Cards() {
    const [CardImages, setCardImages] = React.useState({loading:true});


    function getCardImages() {
        fetch(`https://db.ygoprodeck.com/api/v7/randomcard.php`)
        .then(r=> r.json())
        .then(r=> {
            console.log(r);
            setCardImages(r);
        })
        .catch(e=> setCardImages({
            loading: false, id: 0
        }));
    }

    
    return(
        <>
        
        <Grid columns='1'>
            <Grid.Column>
                <Header as='h1'>Random Card</Header>
            </Grid.Column>
            <Loader active={CardImages.loading}/>
        {
            // if this statment
            CardImages.id ?
            //then do this; true
            <>
             <Popup
                trigger={<Image src={CardImages.card_images[0].image_url} alt='Yugioh card'></Image>}
                on='click'
                content={<Button color='green' icon='add' content='Add Card' />}
                />       
            
            </>
            //else do this; false
            : <>
                <h2>Card Not Found</h2>
            </>
        }
            <Grid.Column>
                <Button content='Summon Card' icon='sync' color='brown' onClick={getCardImages}/> 
            </Grid.Column>
        </Grid>
        </>
    )
}