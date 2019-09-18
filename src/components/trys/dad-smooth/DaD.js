import React, { Component } from 'react';
import { Container, Draggable } from 'react-smooth-dnd';
import { applyDrag, ROOMS, makeGrid, onClickUp, onClickDown, onDragEnter, onDragLeave, ELEMENTS } from './utils';
import Arrows from 'src/components/trys/dad-smooth/Arrows';
import Room from 'src/components/trys/dad-smooth/Room';
import { Delete } from '@material-ui/icons';
import produce from "immer"
class DaD extends Component {
  constructor() {
    super();
    this.state = {
      rows: [],
      dragEnterGrid: false,
      dragEnterRoom: '',
      // allowDropInGrid: true
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

  setDataOnLocalStorage(rows) {
    try {
      localStorage.setItem('rows', JSON.stringify(rows))
    } catch (err) {
      console.log('err in setDataOnLocalStorage', err);
    }

  }

  renderItems(items) {
    return items.map((element, i) => {
      return (
        <Draggable key={i}
          className='dad-container__elements-toolbar__element'
          style={{ width: element.width, height: element.height }}>
          <div className={`item item-${element.shape}`}
            style={{ width: element.width, height: element.height }}>
            {element.name}
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
    this.setDataOnLocalStorage(rows)
  }

  handleTextChange = (event) => {
    const text = event.target.value
    this.setState({ [event.target.id]: text })
  }

  deleteroom = (indexOfRow, indexOfElement) => {
    const { rows } = this.state
    let _rows = [...rows]
    const indexOfTheElement = _rows[indexOfRow].indexOf(rows[indexOfRow][indexOfElement])
    _rows[indexOfRow].splice(indexOfTheElement, 1)
    this.setState({
      rows: _rows
    })
    this.setDataOnLocalStorage(_rows)
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
    return payload.type === 'element'
  }
  renderElementsInRoom(elements) {
    if (!elements.length) return 'drop elements here...'
    return elements.map((element, i) => <div key={i} style={{ height: 20, background: 'lightblue', width: '100%', marginBotom: 10 }}>
      {element.name}
    </div>
    )
  }
  onDropElementInRoom(e, room) {
    const { rows } = this.state
    let arr = [...rows]
    room.elements = applyDrag(room.elements, e)
    this.setState({ rows: arr, dragEnterRoom: '' })
    this.setDataOnLocalStorage(arr)
  }


  renderRows(rows) {
    const { dragEnterRoom } = this.state
    if (!rows.length) {
      return <div>empty for now....</div>
    }
    return rows.map((row, j) => {
      return <div key={j}>
        {j + 1}
        <Container onDragStart={this.onDragStart}
          orientation='horizontal'
          style={{ width: 800, height: 200 }}
          groupName="1"
          getChildPayload={i => row[i]}
          dropPlaceholder
          onDragEnter={this.onDragEnter}
          onDragLeave={this.onDragLeave}
          dropClass='cont'
          // autoScrollEnabled
          // removeOnDropOut
          onDrop={e => {
            let arr = [...rows]
            arr[j] = applyDrag(row, e)
            this.setState({ rows: arr, dragEnterGrid: false })
            this.setDataOnLocalStorage(arr)
          }}
        >
          {
            row.map((room, i) => {
              return <Room key={i}
                room={room}
                onDragEnterRoom={() => this.setState({ dragEnterRoom: room.id })}
                onDragLeaveRoom={() => this.setState({ dragEnterRoom: '' })}
                dragEnterRoom={dragEnterRoom}
                onDropElementInRoom={(e) => this.onDropElementInRoom(e, room)}
                shouldAcceptDrop={this.shouldAcceptDrop}
                handleTextChange={this.handleTextChange}
                onSubmitName={(e) => this.onSubmit(e, j, i, room.id)}
                textValue={this.state[room.id]}
                onClickDeleteRoom={(e) => this.deleteroom(j, i)}
              >
                {this.renderElementsInRoom(room.elements)}
              </Room>
            })
          }

        </Container>
      </div>
    })
  }



  render() {
    const { rows, dragEnterGrid } = this.state
    console.log('rows', rows);
    return (
      <div className='dad-container'>
        <section className='dad-container__elements-toolbar'>
          <div style={{ fontSize: 26, marginBottom: 20 }}>מתחמים</div>
          <Container
            groupName="1"
            behaviour="copy"
            getChildPayload={i => ROOMS[i]}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            {this.renderItems(ROOMS)}

          </Container>
          <div style={{ fontSize: 26, marginBottom: 20 }}>אלמנטים</div>
          <Container
            behaviour="copy"
            getChildPayload={i => ELEMENTS[i]}
          >
            {this.renderItems(ELEMENTS)}

          </Container>
        </section>

        <section style={{ background: dragEnterGrid ? 'black' : 'brown' }}>
          {this.renderRows(rows)}
        </section>

        <section>
          <div>
            <button onClick={() => this.setState({ rows: [] })}>
              נקה הכל
            </button>
          </div>
          numbers of rows: {this.state.rows.length}
          <Arrows className='dad-container__arrows-container'
            onClickUp={() => this.onClickUp(rows)}
            onClickDown={() => this.onClickDown(rows)}
          />
        </section>
      </div >
    );
  }
}

export default DaD;
