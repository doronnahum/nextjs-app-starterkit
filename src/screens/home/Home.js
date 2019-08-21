import React, { Component } from 'react'
// import Dad from '../../components/Dad'
import Dad from 'src/components/Dad'
import Floor from 'src/components/Floor'
import 'src/styles/dad.scss'
import { logger } from 'src/services/logger'
import connect from './connect';

const DATA = {
    "container": {
        "w": 1920,
        "h": 1080
    },
    "elements": []
}

const rooms = [
    {
        id: 1,
        type: 'square'
    },
    {
        id: 2,
        type: 'circle'
    },
    {
        id: 3,
        type: 'rectangle'
    },
]


class Home extends Component {
    componentDidMount() {
        localStorage.setItem('data', JSON.stringify(DATA));
    }

    handleStart(event, data) {
        logger.info('start drag');
    }
    handleDrag(event, data) {
        logger.info('handle drag');
    }
    async handleStop(event, data, type) {
        console.log('*****', data);

        let _data = JSON.parse(localStorage.getItem('data'))
        const obj = {
            "id": 1,
            "title": "class",
            "type": type,
            "position": {
                "x": data.lastX,
                "y": data.lastY
            },
            "size": {
                "w": 58,
                "h": 58
            },
            "reference_id": "4567",
            "parent_id": "1234"
        }
        _data.elements.push(JSON.stringify(obj))
        localStorage.setItem('data', JSON.stringify(_data));
        console.log('_data', JSON.parse(localStorage.getItem('data')));
        logger.info('you draged ' + type);
    }
    renderItems() {
        return rooms.map((room, i) => <Dad key={i} style={{ marginBottom: 5 }} type={room.type}
            handleStart={this.handleStart}
            handleDrag={this.handleDrag}
            handleStop={this.handleStop} />)
    }

    render() {
        return (
            <div className='drop-and-drag'>
                <div>
                    {this.renderItems()}
                </div>
                <Floor />
            </div>
        )
    }
}

export default connect(Home)