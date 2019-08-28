import React, { Component } from 'react';
import { Container, Draggable } from 'react-smooth-dnd';
import { applyDrag, ROOMS, makeGrid, onClickUp, onClickDown, onDragEnter, onDragLeave, TOOLS } from './utils';
import Arrows from 'src/components/dad/Arrows';
import { Delete } from '@material-ui/icons';
import produce from "immer"
class DaD extends Component {
  constructor() {
    super();
    this.state = {
      rows: [],
      grid: 3,
      dragEnter: false,
      text: '',
      elementsEdited: [],
      allowDropInGrid: true
    }
    this.makeGrid = makeGrid.bind(this)
    this.onClickUp = onClickUp.bind(this)
    this.onClickDown = onClickDown.bind(this)
    this.onDragEnter = onDragEnter.bind(this)
    this.onDragLeave = onDragLeave.bind(this)
  }

  componentDidMount() {
    this.makeGrid()
  }

  renderToolBar(items) {
    return items.map((element, i) => {
      return (
        <Draggable key={i}
          className='dad-container__elements-toolbar__element'
          style={{ width: element.width, height: element.height }}>
          <div className={`room room-${element.shape}`}
            style={{ width: element.width, height: element.height }}>
            {element.room}
          </div>
        </Draggable>
      );
    })
  }

  onSubmit = (event, indexOfRow, indexOfElement, id) => {
    event.preventDefault()
    const { rows } = this.state
    let _rows = [...rows]
    _rows[indexOfRow][indexOfElement] = {
      ..._rows[indexOfRow][indexOfElement], title: this.state[id],
    }
    this.setState({
      rows: _rows,
      // [`${indexOfRow}${indexOfElement}`]: ''
    })
  }

  handleTextChange = (event) => {
    const text = event.target.value
    this.setState({ [event.target.id]: text })
  }

  deleteroom(indexOfRow, indexOfElement) {
    const { rows } = this.state
    let _rows = [...rows]
    const indexOfTheElement = _rows[indexOfRow].indexOf(rows[indexOfRow][indexOfElement])
    _rows[indexOfRow].splice(indexOfTheElement, 1)
    this.setState({
      rows: _rows
    })
  }
  onDragEnter1() {
    console.log('aaaaaa');

  }
  onDragLeave1() {

    console.log('zzzzzzz');
  }
  // onDragStart({ isSource, payload, willAcceptDrop }) {
  //   console.log('startttttttt');
  // }
  shouldAcceptDrop(sourceContainerOptions, payload) {
    console.log('sourceContainerOptions', sourceContainerOptions);
    console.log('payload', payload);
    return true //contine here!
  }
  renderRoomsInGrid(rows) {
    if (!rows.length) {
      return <div>empty for now....</div>
    }
    return rows.map((row, j) => {
      return <div key={j}>
        {j + 1}
        <Container onDragStart={this.onDragStart}
          // shouldAcceptDrop={() => this.state.allowDropInGrid ? true : false}
          orientation='horizontal'
          style={{ width: 800, height: 200 }}
          groupName="1"
          getChildPayload={i => row[i]}
          dropPlaceholder
          onDragEnter={this.onDragEnter}
          onDragLeave={this.onDragLeave}
          // removeOnDropOut
          onDrop={e => {
            let arr = [...rows]
            arr[j] = applyDrag(row, e)
            this.setState({ rows: arr, dragEnter: false })
          }}
        >
          {
            row.map((room, i) => {

              return (
                <Draggable key={i}
                  style={{ width: room.width, height: room.height }}>
                  <div className={`room room-${room.shape}`} style={{ width: room.width, height: room.height }}>

                    {room.title
                      ? <div>
                        <button onClick={() => this.setState({ allowDropInGrid: false })}>press to put items</button>
                        {room.title}
                        <Container
                          groupName="2"
                          style={{ width: 100, height: 100, background: 'red' }}
                          onDragEnter={this.onDragEnter1}
                          onDragLeave={this.onDragLeave1}
                          shouldAcceptDrop={this.shouldAcceptDrop}
                        // getChildPayload={i => room.items[i]}
                        // onDrop={e => {
                        //   let arr = [...itemsToDrop]
                        //   arr[j] = applyDrag(row, e) //contunuie here
                        //   this.setState({ rows: arr, dragEnter: false })
                        // }}
                        >
                        </Container>
                      </div>
                      : < form onSubmit={(e) => this.onSubmit(e, j, i, room.id)} >
                        <input style={{ width: 80 }}
                          id={room.id}
                          onChange={(e) => this.handleTextChange(e)}
                          value={this.state[room.id]} />
                        <input type="submit" />
                      </form>
                    }
                    <button onClick={() => this.deleteroom(j, i)}>
                      <Delete />
                    </button>

                  </div>
                </Draggable>
              );
            })
          }

        </Container>
      </div>
    })
  }



  render() {
    const { rows, dragEnter } = this.state
    console.log('rows', rows);

    // console.log('rows', rows.map(row => row.map(obj => obj.title)));
    // console.log('rows', rows.map(row => row.map(obj => obj.title)));
    return (
      <div className='dad-container'>
        <div className='dad-container__elements-toolbar'>
          <Container
            groupName="1"
            behaviour="copy"
            getChildPayload={i => ROOMS[i]}
          >
            {this.renderToolBar(ROOMS)}

          </Container>
          <Container
            // groupName="2"
            behaviour="copy"
            getChildPayload={i => TOOLS[i]}
          >
            {this.renderToolBar(TOOLS)}

          </Container>
        </div>
        <div>

          <div style={{ background: dragEnter ? 'black' : 'brown' }}>
            {this.renderRoomsInGrid(rows)}
          </div>
        </div>
        <div>
          numbers of rows: {this.state.rows.length}
          <Arrows className='dad-container__arrows-container'
            onClickUp={() => this.onClickUp(rows)}
            onClickDown={() => this.onClickDown(rows)}
          />
        </div>
      </div>
    );
  }
}

DaD.propTypes = {

};

export default DaD;
