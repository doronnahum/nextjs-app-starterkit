import React, { Component } from 'react'
import Board from './Board'
import Card from './Card'
import Element from './Element'
import './style.scss'

export default class Solo extends Component {
    render() {
        return (
            <div className='solo' style={{ position: 'relative' }}>
                <Board id={'board1'} className='board'>
                    <Card id={'card1'} className='card' draggable>
                        card 1
                </Card>
                    <Card id={'card2'} className='card' draggable>
                        card 1
                </Card>
                    <Card id={'card3'} className='card' draggable>
                        card 1
                </Card>
                    <Element id={'element1'} className='element' draggable>
                        element 1
                </Element>
                    <Element id={'element2'} className='element' draggable>
                        element 2
                </Element>

                </Board>

                <Board id={'board2'} className='board'>
                </Board>

            </div>
        )
    }
}
