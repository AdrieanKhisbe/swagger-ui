import React, { Component } from "react"
import PropTypes from "prop-types"
import { highlight } from "core/utils"
import saveAs from "js-file-download"

import Lowlight from "react-lowlight"

import js from "highlight.js/lib/languages/javascript"
import json from "highlight.js/lib/languages/json"
import xml from "highlight.js/lib/languages/xml"
import http from "highlight.js/lib/languages/http"
import yaml from "highlight.js/lib/languages/yaml"
import bash from "highlight.js/lib/languages/bash"


Lowlight.registerLanguage("json", json)
Lowlight.registerLanguage("js", js)
Lowlight.registerLanguage("xml", xml)
Lowlight.registerLanguage("yaml", yaml)
Lowlight.registerLanguage("http", http)
Lowlight.registerLanguage("bash", bash)

export default class HighlightCode extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    className: PropTypes.string,
    downloadable: PropTypes.bool,
    fileName: PropTypes.string
  }

  // componentDidMount() {
  //   highlight(this.el)
  // }

  // componentDidUpdate() {
  //   highlight(this.el)
  // }

  // initializeComponent = (c) => {
  //   this.el = c
  // }

  downloadText = () => {
    saveAs(this.props.value, this.props.fileName || "response.txt")
  }

  preventYScrollingBeyondElement = (e) => {
    const target = e.target

    var deltaY = e.nativeEvent.deltaY
    var contentHeight = target.scrollHeight
    var visibleHeight = target.offsetHeight
    var scrollTop = target.scrollTop

    const scrollOffset = visibleHeight + scrollTop

    const isElementScrollable = contentHeight > visibleHeight
    const isScrollingPastTop = scrollTop === 0 && deltaY < 0
    const isScrollingPastBottom = scrollOffset >= contentHeight && deltaY > 0

    if (isElementScrollable && (isScrollingPastTop || isScrollingPastBottom)) {
      e.preventDefault()
    }
  }

  render() {
    let { value, className, downloadable } = this.props
    className = className || ""

    return (
      <div className={"highlighted-code " + className}>
        {!downloadable ? null :
          <div className="download-contents" onClick={this.downloadText}>
            Download
          </div>
        }

        <Lowlight
          value={value}
          onWheel={this.preventYScrollingBeyondElement}
        />


      </div>
    )
  }
}
