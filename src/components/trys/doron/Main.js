import React from "react";
// import "./styles.css";
import DropArea from "./DropArea";
import 'src/styles/dad.scss'

class Main extends React.Component {
    render() {
        return (
            <div>
                <p>View:</p>
                <div className="floorWrapper">
                    <div className="floor">
                        <DropArea />
                    </div>
                </div>
            </div>
        );
    }
}
export default Main;
