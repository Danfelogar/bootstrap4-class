import React from 'react';
import { Card } from './Card';

const cards = [
    {
        id:1,
        title: "fazt Web",
        img: 'https://raw.githubusercontent.com/FaztWeb/react-cards-bootstrap/main/src/assets/image1.jpg',
        url: 'https://github.com/FaztWeb/react-cards-bootstrap/blob/main/src/App.css',
        text: 'Sí, o si quieres uno que te ayude con las cosas científicas está Spyder. O el más popular en general es PyCharm, pero es de pago, hay una versión gratis más lite y así'

    },
    {
        id:2,
        title: "fazt Blog",
        img: 'https://raw.githubusercontent.com/FaztWeb/react-cards-bootstrap/main/src/assets/image2.jpg',
        url: 'https://www.youtube.com/watch?v=1_DXtP0XyDw&t=1054s',
        text: 'Pero HTML no lo cambiarían, es javascript el que saldría, igual no es novedoso, simplemente una estrategia comercial'
    },
    {
        id:3,
        title: "fazt Linkedin",
        img: 'https://raw.githubusercontent.com/FaztWeb/react-cards-bootstrap/main/src/assets/image3.jpg',
        url: 'https://exvius.fandom.com/wiki/Final_Fantasy_Brave_Exvius_Wiki',
        text: 'Para diseño web esas tres herramientas son esenciales. Html es con lo que se construyen las páginas web, CSS es con lo que se le da estilo, diseño,  color y textura  a las web y javascripts sirve para hacer dinámica la página, para utilizar los eventos de los objetos del dom, para validaciones, etc...👌'
    },
]

export const Cards = () => {
    return (
        <div className="container d-flex justify-content-center h-100 align-items-center">
            <div className="row">
            {
                cards.map(card =>(
                        <div className="col-md-4" key={card.id}>
                            <Card title={card.title} img={card.img} url={card.url} text={ card.text }/>
                        </div>
            ))
            }
            </div>
        </div>
    )
}
