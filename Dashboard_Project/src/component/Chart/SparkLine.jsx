import React from 'react'
import { SparklineComponent,SparklineTooltip } from '@syncfusion/ej2-react-charts';
import { Inject } from '@syncfusion/ej2-react-charts';
const SparkLine = ({id, height, width, color, data, type, currentColor }) => {
  return (
    <div>
     <SparklineComponent
        id={id}
        height={height}
        width={width}
        lineWidth={1}
        valueType="Numeric"
        fill={color}
        border={{ color: currentColor, width: 2 }}
        tooltipSettings={{
          visible: true,
          // eslint-disable-next-line no-template-curly-in-string
          format: '${x} : data ${y}',
          trackLineSettings: {
            visible: true,
          },
        }}
        markerSettings={{ visible: ['All'], size: 2.5, fill: currentColor }}
        dataSource={data}
        xName="x"
        yName="yval"
        type={type}
      >
        <Inject services={[SparklineTooltip]} />
      </SparklineComponent>
    </div>
  )
}

export default SparkLine
