import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
const logo = '/static/images/Logo.png'
export default class DemoCarousel extends Component {
    render() {
        const { className } = this.props
        return (
            <div className={className}>
                <Carousel showThumbs={false} infiniteLoop>
                    <div>
                        <img src={logo}
                            style={{ height: 500, width: 300 }} />
                        <p className="legend">Legend 1</p>
                    </div>
                    {/* <div>
                        <img
                            style={{ backgroundColor: 'green', height: 200, width: 300 }} />
                        <p className="legend">Legend 2</p>
                    </div>
                    <div>
                        <img
                            style={{ backgroundColor: 'blue', height: 200, width: 300 }} />
                        <p className="legend">Legend 3</p>
                    </div> */}
                </Carousel>
            </div>
        );
    }
};
