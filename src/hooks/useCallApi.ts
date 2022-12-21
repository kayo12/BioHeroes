import { useEffect, useState } from "react"


export default function useCallApi(){


   
useEffect(() => {
    fetch(
    `http://gateway.marvel.com/v1/public/characters?ts=1&apikey=${process.env.API_KEY}&hash=${process.env.API_HASH}`

    ).then((response) => {
        return response.json();
      })
      .then((jsonParsed) => {
        console.log(jsonParsed);
      })
      .catch((e) => {
        console.log(e);
      });
  });

}