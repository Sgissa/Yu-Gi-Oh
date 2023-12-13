import { useState, useEffect } from "react";
import { Grid, Image } from "semantic-ui-react";

export default function DeckName() {
  const [deckItems, setDeckItems] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("deckItems")
      ? JSON.parse(localStorage.getItem("deckItems"))
      : [];
    setDeckItems(data);
  }, []);
  return (
    <div>
      {deckItems.length ? (
        <Grid>
          {deckItems.map((item, index) => (
            <Grid.Column key={index} computer={4} tablet={8} mobile={16}>
              <Image src={item.url} />
            </Grid.Column>
          ))}
        </Grid>
      ) : (
        <h1>No items in the Deck</h1>
      )}
    </div>
  );
}
