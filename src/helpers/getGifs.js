

    // En el ejercicio se necesita recibir una categoría y hacer una petición.
    export const getGifs = async( category ) => {
        // const url = 'https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=10&api_key=1HrIdSh05cewFDUlZW83hzXH7iuE8fJV';
        const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=1HrIdSh05cewFDUlZW83hzXH7iuE8fJV`;

        const resp = await fetch ( url );
        const { data } = await resp.json();

        // map es un métdo que recibe como parámetro una fncallback, la cual es llamada por cada elemento
        // del arrya.
        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url
            }
        })

        return gifs;
    }