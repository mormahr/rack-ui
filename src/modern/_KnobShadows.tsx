import * as React from "react"

export const _KnobShadows: React.FC = () => {
  return (
    <>
      <filter id={"knob-wide-shadow"} width={"200%"} height={"200%"}>
        <feDropShadow
          dx={2}
          dy={4}
          stdDeviation={3}
          floodColor={"#000"}
          floodOpacity={0.2}
        />
      </filter>

      <filter id={"marker-shadow"} width={"200%"} height={"200%"}>
        <feDropShadow
          dx={0.4}
          dy={0.8}
          stdDeviation={1}
          floodColor={"#000"}
          floodOpacity={0.3}
        />
      </filter>
    </>
  )
}
