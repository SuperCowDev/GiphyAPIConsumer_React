export const getGifs = async ( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category) }&limit=10&api_key=hA1gBV6NIKPoqcdLx9yuJHGb6BUj4VWg`;
    const respuesta = await fetch(url);
    const {data} = await respuesta.json();

    const gifs = data.map(img=> {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    } );

    /* console.log(gifs); */
    return gifs;
}