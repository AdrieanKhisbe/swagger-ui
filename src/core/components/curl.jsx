import React from "react"
import PropTypes from "prop-types"
import curlify from "core/curlify"
import Lowlight from "../lowlight"
import {copyToClipboard} from "../utils"

export default class Curl extends React.Component {
  static propTypes = {
    request: PropTypes.object.isRequired
  }

  copy(curlCommand) {
    return () => copyToClipboard(curlCommand)
  }

  render() {
    let { request } = this.props
    let curl = curlify(request)

    return (
      <div>
        <h4>Curl <i onClick={this.copy(curl)}>(copyCommand)</i></h4>

        <div>
          <Lowlight language="bash" className="curl" style={{ whiteSpace: "normal" }} value={curl}/>
        </div>
      </div>
    )
  }

}
