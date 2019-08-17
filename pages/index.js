import React, { Component } from 'react'
import Script from 'react-load-script'

export default class extends Component {
  static getInitialProps ({ req }) {
    return { graphData: req.graphData}
  }

  makeGraph() {
    const elem = document.getElementById('3d-graph');
    const Graph = ForceGraph3D()
      (elem)
        .graphData(this.props.graphData)
        .nodeLabel('id')
        .nodeAutoColorBy('group')
        .onNodeHover(node => elem.style.cursor = node ? 'pointer' : null)
        .onNodeClick(node => {
          // Aim at node from outside it
          const distance = 40;
          const distRatio = 1 + distance/Math.hypot(node.x, node.y, node.z);

          Graph.cameraPosition(
            { x: node.x * distRatio, y: node.y * distRatio, z: node.z * distRatio }, // new position
            node, // lookAt ({ x, y, z })
            3000  // ms transition duration
          );
        });
  }

  render () {
    return (
      <React.Fragment>
      <div id="3d-graph"></div>
        <Script
          url="https://unpkg.com/3d-force-graph@1.52.0/dist/3d-force-graph.min.js"
          onLoad={() =>this.makeGraph()}
        />
        <style global jsx="true">{`
          body {
            margin: 0px;
            overflow: hidden;
          }
        `}
        </style>
      </React.Fragment> 
    )
  }
}
