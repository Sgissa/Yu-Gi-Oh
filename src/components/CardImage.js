import React from 'react';
import { Popup, Button, Image, Grid, Loader, Header } from 'semantic-ui-react';


export default function CardImage({src}){
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

    return (
        <>
         <Loader active={CardImages.loading}/>
        {
            // if this statment
            CardImages.id ?
            //then do this; true
            <>
            <Image src={src} alt='Yugioh card'></Image>
            </>
            //else do this; false
            : <>
                <h2>Card Not Found</h2>
            </>
        }
        <Grid.Column>
            
                <Popup
                trigger={<Image src={src} alt='Yugioh card' />}
                on='click'
                content={<Button color='green' icon='add' content='Add Card' />}
                />                   
            </Grid.Column>
        </>
    );
}