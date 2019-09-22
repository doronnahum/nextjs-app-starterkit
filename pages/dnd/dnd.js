import React, { Component } from 'react'
import DND from 'src/components/dnd/DND'
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import './dnd.scss'
export default class Dnd extends Component {
    render() {
        return (
                <DndProvider backend={HTML5Backend}>
                    <DND />
                </DndProvider>
        )
    }
}