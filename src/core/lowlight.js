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

export default Lowlight
