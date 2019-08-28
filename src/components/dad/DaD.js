import React, { Component } from 'react';
import { Container, Draggable } from 'react-smooth-dnd';
import { applyDrag, ELEMENTS } from './utils';
import Arrows from 'src/components/dad/Arrows';
import { Delete } from '@material-ui/icons';

class DaD extends Component {
  constructor() {
    super();

    this.state = {
      rows: [],
      grid: 3,
      dragEnter: false,
      text: '',
      elementsEdited: []
    }
  }

  componentDidMount() {
    this.makeGrid()
  }


  onClickUp(rows) {
    let arr = [...rows]
    arr.push(Array())
    this.setState({ rows: arr })
  }

  onClickDown(rows) {
    let arr = [...rows]
    arr.pop()
    this.setState({ rows: arr })
  }

  makeGrid() {
    const { grid } = this.state
    let arr = []
    let i = 1
    while (i <= grid) {
      arr.push(Array())
      i++
    }
    this.setState({ rows: arr })
  }

  onDragEnter = () => {
    this.setState({ dragEnter: true })
  }
  onDragLeave = () => {
    this.setState({ dragEnter: false })
  }
  renderToolBar() {
    return ELEMENTS.map((element, i) => {
      return (
        <Draggable key={i}
          className='dad-container__elements-toolbar__element'
          style={{ width: element.width, height: element.height }}>
          <div className={`element-${element.type}`} style={{ width: element.width, height: element.height }}>
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
      ..._rows[indexOfRow][indexOfElement], title: this.state[`${indexOfRow}${indexOfElement}`],
    }
    this.setState({
      rows: _rows,
      [`${indexOfRow}${indexOfElement}`]: ''
    })
  }

  handleTextChange = (event) => {
    const text = event.target.value
    this.setState({ [event.target.id]: text })
  }

  deleteElement(indexOfRow, indexOfElement) {
    const { rows } = this.state
    let _rows = [...rows]

    const indexOfTheElement = _rows[indexOfRow].indexOf(rows[indexOfRow][indexOfElement])
    _rows[indexOfRow].splice(indexOfTheElement, 1)

    this.setState({
      rows: _rows
    })
  }

  renderElementsInGrid(rows) {
    if (!rows.length) {
      return <div>empty for now....</div>
    }
    return rows.map((row, j) => {
      return <div key={j}>
        {j + 1}
        <Container
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
            arr[j] = applyDrag(row, e) //contunuie here
            this.setState({ rows: arr, dragEnter: false })
          }}>
          {
            row.map((element, i) => {

              return (
                <Draggable key={i}
                  style={{ width: element.width, height: element.height }}>
                  <div className={`element element-${element.type}`} style={{ width: element.width, height: element.height }}>

                    {element.title
                      ? element.title
                      : < form onSubmit={(e) => this.onSubmit(e, j, i)} >
                        <input style={{ width: 80 }}
                          id={`${j}${i}`}
                          onChange={(e) => this.handleTextChange(e)}
                          value={this.state[`${j}${i}`]} />
                        <input type="submit" />
                      </form>
                    }
                    <button onClick={() => this.deleteElement(j, i)}>
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
    console.log('rows', rows.map(row => row.map(obj => obj.title)));

    return (
      <div className='dad-container'>
        <div className='dad-container__elements-toolbar'>
          <Container
            groupName="1"
            behaviour="copy"
            getChildPayload={i => ELEMENTS[i]}
          >
            {this.renderToolBar()}

          </Container>
        </div>
        <div>

          <div style={{ background: dragEnter ? 'black' : 'brown' }}>
            {this.renderElementsInGrid(rows)}
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
