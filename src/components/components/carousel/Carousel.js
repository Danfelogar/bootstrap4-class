import React from 'react'

export const Carousel = () => {
    return (
        <div className="container">
            <div id="carouselExampleCaptions" class="carousel slide carousel-fade" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src="https://us.123rf.com/450wm/mirquurius/mirquurius1710/mirquurius171000008/88767476-astronauta-se-sienta-en-el-barco-y-atrapa-estrellas-a-trav%C3%A9s-de-la-ca%C3%B1a-de-pescar-de-la-galaxia-ilus.jpg?ver=6" class="d-block w-100" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                </div>
                </div>
                <div class="carousel-item">
                <img src="https://us.123rf.com/450wm/mirquurius/mirquurius1710/mirquurius171000008/88767476-astronauta-se-sienta-en-el-barco-y-atrapa-estrellas-a-trav%C3%A9s-de-la-ca%C3%B1a-de-pescar-de-la-galaxia-ilus.jpg?ver=6" class="d-block w-100" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>Some representative placeholder content for the second slide.</p>
                </div>
                </div>
                <div class="carousel-item">
                <img src="https://us.123rf.com/450wm/mirquurius/mirquurius1710/mirquurius171000008/88767476-astronauta-se-sienta-en-el-barco-y-atrapa-estrellas-a-trav%C3%A9s-de-la-ca%C3%B1a-de-pescar-de-la-galaxia-ilus.jpg?ver=6" class="d-block w-100" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>Some representative placeholder content for the third slide.</p>
                </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </button>
            </div>
        </div>
    )
}