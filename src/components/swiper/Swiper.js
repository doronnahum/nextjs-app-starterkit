import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
const tower = '/static/images/tower.jpg'
const machine = '/static/images/machine.jpg'
export default class DemoCarousel extends Component {
    render() {
        const { className } = this.props
        return (
            <div className={className}>
                <Carousel showThumbs={false} infiniteLoop>
                    <div>
                        <img src={tower}
                            style={{ height: 500, width: 'fit-content' }} />
                        <p className="legend">building</p>
                    </div>
                    <div>
                        <img src={machine}
                            style={{ height: 500 }} />
                        <p className="legend">machine</p>
                    </div>
                </Carousel>
            </div>
        );
    }
};
